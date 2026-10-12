export type MemoryStatus = 'new' | 'learning' | 'review' | 'mastered';

export interface FlashcardItem {
  id: string;
  unitId: number;
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaningVi: string;
  exampleEn: string;
  exampleVi: string;
  readingTip?: string; // Gợi ý cách đọc phiên âm tiếng Việt dễ nhớ
  collocation?: string;
  category: 'vocabulary' | 'grammar' | 'expression';
}

export interface SpacedItemState {
  cardId: string;
  unitId: number;
  repetitions: number;
  interval: number; // in days
  easeFactor: number; // e.g. 2.5
  nextReviewDate: number; // timestamp
  lastReviewedDate?: number; // timestamp
  status: MemoryStatus;
  history: { date: number; rating: number }[];
}

export interface QuizQuestion {
  id: string;
  unitId: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanationVi: string;
  type: 'vocabulary' | 'grammar' | 'pronunciation' | 'communication' | 'reading';
  tag?: string;
}

export interface GrammarPoint {
  title: string;
  formula: string;
  explanation: string;
  examples: { en: string; vi: string }[];
  note?: string;
}

export interface PronunciationPoint {
  title: string;
  description: string;
  pairs?: {
    sound1: string;
    words1: string[];
    sound2: string;
    words2: string[];
  };
  stressRules?: string[];
  intonationRules?: string[];
  examples: string[];
}

export interface CommunicationExpression {
  situation: string;
  expressions: { en: string; vi: string }[];
  sampleDialogue: { speaker: string; text: string; vi: string }[];
}

export interface UnitData {
  id: number;
  title: string;
  englishTitle: string;
  theme: string;
  description: string;
  vocabulary: FlashcardItem[];
  grammar: GrammarPoint[];
  pronunciation: PronunciationPoint;
  communication: CommunicationExpression;
  quizQuestions: QuizQuestion[];
  sentencePuzzles: {
    scrambled: string[];
    correct: string;
    translationVi: string;
    hint: string;
  }[];
}

export interface ReviewExam {
  id: string;
  title: string;
  description: string;
  unitIds: number[];
  questions: QuizQuestion[];
}

export interface UserStats {
  xp: number;
  streakDays: number;
  lastActiveDate: string;
  completedQuizzesCount: number;
  totalCardsReviewed: number;
  gamesPlayed: number;
  badges: string[];
}
