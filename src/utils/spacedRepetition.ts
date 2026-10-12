import { SpacedItemState, MemoryStatus, UserStats } from '../types';

const STORAGE_KEY_CARDS = 'tienganh8_spaced_repetition_cards_v1';
const STORAGE_KEY_STATS = 'tienganh8_spaced_repetition_stats_v1';

export const DEFAULT_USER_STATS: UserStats = {
  xp: 120,
  streakDays: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  completedQuizzesCount: 0,
  totalCardsReviewed: 0,
  gamesPlayed: 0,
  badges: ['Người khởi đầu']
};

export const getStoredCardStates = (): Record<string, SpacedItemState> => {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CARDS);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error('Error loading card states', e);
    return {};
  }
};

export const saveCardStates = (states: Record<string, SpacedItemState>) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY_CARDS, JSON.stringify(states));
  } catch (e) {
    console.error('Error saving card states', e);
  }
};

export const getUserStats = (): UserStats => {
  if (typeof window === 'undefined') return DEFAULT_USER_STATS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_STATS);
    if (!raw) return DEFAULT_USER_STATS;
    const stats: UserStats = JSON.parse(raw);
    
    // Check streak
    const today = new Date().toISOString().split('T')[0];
    if (stats.lastActiveDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      if (stats.lastActiveDate === yesterday) {
        stats.streakDays += 1;
      } else if (stats.lastActiveDate < yesterday) {
        stats.streakDays = 1;
      }
      stats.lastActiveDate = today;
      saveUserStats(stats);
    }
    return stats;
  } catch (e) {
    return DEFAULT_USER_STATS;
  }
};

export const saveUserStats = (stats: UserStats) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(stats));
  } catch (e) {
    console.error('Error saving user stats', e);
  }
};

export const addXP = (amount: number, reason?: string): UserStats => {
  const stats = getUserStats();
  stats.xp += amount;
  
  // Award badges based on milestones
  const badges = new Set(stats.badges);
  if (stats.xp >= 300) badges.add('Tập sự chăm chỉ');
  if (stats.xp >= 700) badges.add('Chiến binh Từ vựng');
  if (stats.xp >= 1500) badges.add('Bậc thầy Ngắt quãng');
  if (stats.xp >= 3000) badges.add('Thủ khoa Tiếng Anh 8');
  if (stats.streakDays >= 3) badges.add('Chuỗi 3 ngày liên tiếp');
  if (stats.streakDays >= 7) badges.add('Kỷ luật thép (7 ngày)');
  if (stats.totalCardsReviewed >= 20) badges.add('Người luyện Flashcard');
  if (stats.completedQuizzesCount >= 5) badges.add('Cao thủ Trắc nghiệm');

  stats.badges = Array.from(badges);
  saveUserStats(stats);
  return stats;
};

/**
 * SuperMemo SM-2 Spaced Repetition calculation
 * Rating:
 * 1: Forgot completely (Quên / Chưa nhớ)
 * 2: Hard / Recalled with effort (Khó nhớ)
 * 3: Good / Normal recall (Nhớ tốt)
 * 4: Easy / Perfect recall (Quá dễ)
 */
export const updateCardReview = (
  cardId: string,
  unitId: number,
  rating: 1 | 2 | 3 | 4
): SpacedItemState => {
  const allStates = getStoredCardStates();
  const current = allStates[cardId] || {
    cardId,
    unitId,
    repetitions: 0,
    interval: 0,
    easeFactor: 2.5,
    nextReviewDate: Date.now(),
    status: 'new',
    history: []
  };

  const now = Date.now();
  let nextInterval = 1; // in days
  let nextReps = current.repetitions;
  let newEaseFactor = current.easeFactor;

  // Rating maps to SM-2 quality 0-5 scale
  const quality = rating === 1 ? 2 : rating === 2 ? 3 : rating === 3 ? 4 : 5;

  if (quality < 3) {
    // Failed recall -> restart
    nextReps = 0;
    nextInterval = 1;
  } else {
    // Successful recall
    if (nextReps === 0) {
      nextInterval = rating === 4 ? 2 : 1;
    } else if (nextReps === 1) {
      nextInterval = rating === 4 ? 4 : 2;
    } else {
      nextInterval = Math.round(current.interval * newEaseFactor * (rating === 4 ? 1.3 : 1.0));
    }
    nextReps += 1;
  }

  // Adjust Ease Factor (minimum 1.3)
  newEaseFactor = Math.max(
    1.3,
    newEaseFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  let newStatus: MemoryStatus = 'learning';
  if (nextReps === 0) {
    newStatus = 'learning';
  } else if (nextReps >= 4 && nextInterval >= 10) {
    newStatus = 'mastered';
  } else if (nextReps >= 2) {
    newStatus = 'review';
  }

  const updated: SpacedItemState = {
    ...current,
    repetitions: nextReps,
    interval: Math.max(1, nextInterval),
    easeFactor: Number(newEaseFactor.toFixed(2)),
    nextReviewDate: now + Math.max(1, nextInterval) * 86400000,
    lastReviewedDate: now,
    status: newStatus,
    history: [
      ...(current.history || []),
      { date: now, rating }
    ]
  };

  allStates[cardId] = updated;
  saveCardStates(allStates);

  // Update user stats
  const stats = getUserStats();
  stats.totalCardsReviewed += 1;
  saveUserStats(stats);
  addXP(rating * 5);

  return updated;
};

/**
 * Predict current retention percentage based on Ebbinghaus Forgetting Curve formula:
 * R = e^(-t / S), where S = interval * 1.2
 */
export const calculateRetentionPercent = (item?: SpacedItemState): number => {
  if (!item || !item.lastReviewedDate) return 0;
  const elapsedDays = (Date.now() - item.lastReviewedDate) / 86400000;
  if (elapsedDays <= 0) return 100;
  const strength = Math.max(1, item.interval * 1.2);
  const retention = Math.exp(-elapsedDays / strength) * 100;
  return Math.min(100, Math.max(5, Math.round(retention)));
};

/**
 * Checks if a card is due for review today
 */
export const isCardDue = (item?: SpacedItemState): boolean => {
  if (!item) return true; // new card is ready
  return Date.now() >= item.nextReviewDate;
};
