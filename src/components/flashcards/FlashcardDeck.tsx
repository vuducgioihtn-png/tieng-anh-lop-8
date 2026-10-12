import React, { useState, useEffect, useMemo, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { 
  Volume2, RotateCw, CheckCircle2, ChevronLeft, ChevronRight,
  Sparkles, Filter, Brain, Shuffle, ArrowLeft, Flame, Award
} from 'lucide-react';
import { FlashcardItem, SpacedItemState } from '../../types';
import { ALL_FLASHCARDS, UNITS_DATA } from '../../data/unitsData';
import { speakEnglish, playSound } from '../../utils/audio';
import { updateCardReview, isCardDue } from '../../utils/spacedRepetition';
import { getReadingTip } from '../../utils/pronunciationHelper';

interface FlashcardDeckProps {
  initialUnitId?: number;
  dueOnlyDefault?: boolean;
  cardStates: Record<string, SpacedItemState>;
  onReviewRecorded: () => void;
  onBackToDashboard: () => void;
}

export const FlashcardDeck: React.FC<FlashcardDeckProps> = ({
  initialUnitId,
  dueOnlyDefault = false,
  cardStates,
  onReviewRecorded,
  onBackToDashboard
}) => {
  const [selectedUnit, setSelectedUnit] = useState<number | 'all'>(initialUnitId || 'all');
  const [filterDueOnly, setFilterDueOnly] = useState<boolean>(dueOnlyDefault);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [sessionReviewedCount, setSessionReviewedCount] = useState<number>(0);

  // Compute deck items
  const deck = useMemo(() => {
    let list = ALL_FLASHCARDS;
    if (selectedUnit !== 'all') {
      list = list.filter(card => card.unitId === selectedUnit);
    }
    if (filterDueOnly) {
      list = list.filter(card => isCardDue(cardStates[card.id]));
    }
    return list;
  }, [selectedUnit, filterDueOnly, cardStates]);

  const currentCard: FlashcardItem | undefined = deck[currentIndex];

  // Reset index when deck filter changes
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setIsCompleted(false);
  }, [selectedUnit, filterDueOnly]);

  const handleFlip = useCallback(() => {
    playSound('flip');
    setIsFlipped(prev => !prev);
  }, []);

  const handleAudio = (e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    playSound('pop');
    speakEnglish(text);
  };

  const handleRateCard = (rating: 1 | 2 | 3 | 4) => {
    if (!currentCard) return;

    playSound(rating >= 3 ? 'correct' : 'click');
    updateCardReview(currentCard.id, currentCard.unitId, rating);
    onReviewRecorded();
    setSessionReviewedCount(prev => prev + 1);

    if (currentIndex < deck.length - 1) {
      setIsFlipped(false);
      setCurrentIndex(prev => prev + 1);
    } else {
      // Completed deck!
      setIsCompleted(true);
      playSound('win');
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isCompleted || !currentCard) return;

      if (e.code === 'Space') {
        e.preventDefault();
        handleFlip();
      } else if (isFlipped) {
        if (e.key === '1') handleRateCard(1);
        if (e.key === '2') handleRateCard(2);
        if (e.key === '3') handleRateCard(3);
        if (e.key === '4') handleRateCard(4);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCompleted, isFlipped, currentCard, handleFlip]);

  const handleShuffle = () => {
    playSound('pop');
    setCurrentIndex(0);
    setIsFlipped(false);
    setIsCompleted(false);
  };

  if (deck.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4 text-center space-y-6">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-black text-slate-800">
          Tuyệt vời! Không có thẻ nào cần ôn tập hôm nay!
        </h2>
        <p className="text-sm text-slate-600 max-w-md mx-auto">
          Bạn đã hoàn thành các đợt lặp lại ngắt quãng theo lịch. Trí nhớ của bạn đang duy trì rất tốt. 
          Bạn có thể chuyển sang chế độ &quot;Tất cả từ vựng&quot; để ôn tập tự do.
        </p>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => setFilterDueOnly(false)}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition-colors"
          >
            Học tất cả các thẻ từ
          </button>
          <button
            onClick={onBackToDashboard}
            className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-colors"
          >
            Về màn hình chính
          </button>
        </div>
      </div>
    );
  }

  if (isCompleted) {
    return (
      <div className="max-w-md mx-auto py-12 px-4 text-center space-y-6 bg-white rounded-3xl border border-slate-200/80 shadow-lg">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-100 text-amber-600 flex items-center justify-center shadow-md animate-bounce">
          <Award className="w-10 h-10" />
        </div>
        <div>
          <h2 className="text-2xl font-black text-slate-800">Hoàn Thành Buổi Ôn!</h2>
          <p className="text-sm text-slate-500 mt-1">
            Bạn đã ôn tập xuất sắc <strong>{sessionReviewedCount} thẻ từ</strong> theo thuật toán ngắt quãng.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="text-center">
            <span className="text-xs text-slate-500 font-medium">Thẻ đã học</span>
            <div className="text-2xl font-black text-indigo-600">{sessionReviewedCount}</div>
          </div>
          <div className="text-center">
            <span className="text-xs text-slate-500 font-medium">Kinh nghiệm đạt được</span>
            <div className="text-2xl font-black text-amber-500">+{sessionReviewedCount * 15} XP</div>
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <button
            onClick={() => {
              setCurrentIndex(0);
              setIsFlipped(false);
              setIsCompleted(false);
            }}
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition-colors"
          >
            Ôn tập lại danh sách này
          </button>
          <button
            onClick={onBackToDashboard}
            className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-colors"
          >
            Về trang chủ
          </button>
        </div>
      </div>
    );
  }

  const cardState = currentCard ? cardStates[currentCard.id] : undefined;

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      {/* Header controls: filters & back button */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={onBackToDashboard}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-indigo-600 transition-colors self-start sm:self-center"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Về trang chủ</span>
        </button>

        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
          {/* Unit selector */}
          <select
            value={selectedUnit}
            onChange={(e) => setSelectedUnit(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 shadow-2xs focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
          >
            <option value="all">Tất cả bài học (Units 1 - 12)</option>
            {UNITS_DATA.map(u => (
              <option key={u.id} value={u.id}>Unit {u.id}: {u.englishTitle}</option>
            ))}
          </select>

          {/* Due filter toggle */}
          <button
            onClick={() => setFilterDueOnly(!filterDueOnly)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-2xs ${
              filterDueOnly
                ? 'bg-amber-500 text-white border border-amber-600'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Brain className="w-3.5 h-3.5" />
            <span>Chỉ thẻ đến hạn</span>
          </button>

          <button
            onClick={handleShuffle}
            className="p-1.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 shadow-2xs"
            title="Xáo trộn lại"
          >
            <Shuffle className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
          <span>Thẻ {currentIndex + 1} / {deck.length}</span>
          <span className="text-indigo-600 font-bold">
            {Math.round(((currentIndex + 1) / deck.length) * 100)}%
          </span>
        </div>
        <div className="w-full h-2 bg-slate-200/80 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-sky-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / deck.length) * 100}%` }}
          />
        </div>
      </div>

      {/* 3D Interactive Flashcard */}
      <div 
        className="perspective-1000 w-full min-h-[380px] sm:min-h-[420px] cursor-pointer select-none"
        onClick={handleFlip}
      >
        <div 
          className={`relative w-full min-h-[380px] sm:min-h-[420px] duration-500 transform-style-3d transition-transform ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* FRONT OF CARD */}
          <div className="absolute inset-0 backface-hidden bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-8 flex flex-col justify-between">
            {/* Top info */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700">
                Unit {currentCard?.unitId}
              </span>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Mặt trước (Nhấn để lật)
              </span>
            </div>

            {/* Word & Phonetic in Center */}
            <div className="text-center space-y-3 my-auto py-6">
              <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium uppercase">
                {currentCard?.partOfSpeech}
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                {currentCard?.word}
              </h2>

              <div className="flex items-center justify-center gap-2">
                <span className="text-base sm:text-lg text-indigo-600 font-semibold font-mono">
                  {currentCard?.phonetic}
                </span>
                <button
                  onClick={(e) => handleAudio(e, currentCard?.word || '')}
                  className="p-2 rounded-full bg-indigo-50 hover:bg-indigo-100 text-indigo-600 transition-colors shadow-2xs hover:scale-110 active:scale-95 cursor-pointer"
                  title="Nghe phát âm chuẩn"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>

              {/* Gợi ý cách đọc tiếng Việt dễ hiểu */}
              <div className="max-w-md mx-auto p-2.5 rounded-2xl bg-amber-50/90 border border-amber-200/90 text-amber-900 text-xs font-semibold shadow-2xs flex items-center justify-center text-center">
                <span>{getReadingTip(currentCard?.word || '', currentCard?.phonetic, currentCard?.readingTip)}</span>
              </div>

              {/* Sample sentence clue */}
              <div className="mt-2 max-w-lg mx-auto bg-slate-50 p-3.5 rounded-2xl border border-slate-100 text-sm text-slate-700 italic">
                &ldquo;{currentCard?.exampleEn}&rdquo;
              </div>
            </div>

            {/* Bottom hint */}
            <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-3">
              <span className="hidden sm:inline">Phím tắt: [Space] Lật thẻ</span>
              <span className="mx-auto sm:mx-0 flex items-center gap-1.5 text-indigo-600 font-bold">
                <RotateCw className="w-3.5 h-3.5" />
                <span>Nhấn vào thẻ để xem nghĩa & đánh giá</span>
              </span>
            </div>
          </div>

          {/* BACK OF CARD */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-b from-white to-indigo-50/40 rounded-3xl border border-indigo-200/90 shadow-xl p-6 sm:p-8 flex flex-col justify-between">
            {/* Top info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-100 text-indigo-800">
                  Unit {currentCard?.unitId}
                </span>
                <span className="text-xs font-bold text-indigo-600">
                  {currentCard?.word}
                </span>
              </div>
              <button
                onClick={(e) => handleAudio(e, currentCard?.word || '')}
                className="p-1.5 rounded-full bg-white hover:bg-indigo-50 text-indigo-600 border border-slate-200"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            {/* Vietnamese Meaning & Details */}
            <div className="text-center space-y-4 my-auto py-3">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Định nghĩa tiếng Việt
              </div>

              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-900 leading-snug">
                {currentCard?.meaningVi}
              </div>

              {/* Gợi ý cách đọc & phiên âm IPA */}
              <div className="inline-block px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold shadow-2xs">
                <span>{getReadingTip(currentCard?.word || '', currentCard?.phonetic, currentCard?.readingTip)}</span>
              </div>

              {currentCard?.collocation && (
                <div className="inline-block px-3 py-1 rounded-xl bg-purple-50 text-purple-700 text-xs font-semibold border border-purple-200">
                  Cụm từ hay dùng: <strong>{currentCard.collocation}</strong>
                </div>
              )}

              <div className="text-xs sm:text-sm text-slate-600 bg-white p-3 rounded-2xl border border-slate-200 text-left max-w-lg mx-auto shadow-2xs">
                <div className="font-semibold text-slate-800">{currentCard?.exampleEn}</div>
                <div className="text-slate-500 mt-1 italic">{currentCard?.exampleVi}</div>
              </div>
            </div>

            {/* Spaced Repetition SM-2 Assessment Buttons */}
            <div className="space-y-2 border-t border-slate-200 pt-3" onClick={(e) => e.stopPropagation()}>
              <div className="text-center text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Mức độ ghi nhớ theo lặp lại ngắt quãng:
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  onClick={() => handleRateCard(1)}
                  className="py-2.5 px-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 font-bold text-xs flex flex-col items-center gap-0.5 transition-all active:scale-95 shadow-2xs"
                >
                  <span className="flex items-center gap-1">
                    <span>🔴</span> Chưa nhớ
                  </span>
                  <span className="text-[10px] text-rose-600 font-medium">Ôn sau 1 ngày [1]</span>
                </button>

                <button
                  onClick={() => handleRateCard(2)}
                  className="py-2.5 px-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 font-bold text-xs flex flex-col items-center gap-0.5 transition-all active:scale-95 shadow-2xs"
                >
                  <span className="flex items-center gap-1">
                    <span>🟡</span> Hơi khó
                  </span>
                  <span className="text-[10px] text-amber-600 font-medium">Ôn sau 2 ngày [2]</span>
                </button>

                <button
                  onClick={() => handleRateCard(3)}
                  className="py-2.5 px-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold text-xs flex flex-col items-center gap-0.5 transition-all active:scale-95 shadow-2xs"
                >
                  <span className="flex items-center gap-1">
                    <span>🟢</span> Nhớ tốt
                  </span>
                  <span className="text-[10px] text-emerald-600 font-medium">Ôn sau 4-7 ngày [3]</span>
                </button>

                <button
                  onClick={() => handleRateCard(4)}
                  className="py-2.5 px-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-800 border border-indigo-200 font-bold text-xs flex flex-col items-center gap-0.5 transition-all active:scale-95 shadow-2xs"
                >
                  <span className="flex items-center gap-1">
                    <span>💎</span> Quá dễ
                  </span>
                  <span className="text-[10px] text-indigo-600 font-medium">Khắc sâu 14+ ngày [4]</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Manual Prev/Next Controls */}
      <div className="flex items-center justify-between pt-2">
        <button
          disabled={currentIndex === 0}
          onClick={() => {
            if (currentIndex > 0) {
              setIsFlipped(false);
              setCurrentIndex(prev => prev - 1);
            }
          }}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-xs disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors shadow-2xs"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Thẻ trước</span>
        </button>

        <button
          onClick={handleFlip}
          className="px-4 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs transition-colors"
        >
          {isFlipped ? 'Xem mặt trước' : 'Lật thẻ xem nghĩa'}
        </button>

        <button
          disabled={currentIndex === deck.length - 1}
          onClick={() => {
            if (currentIndex < deck.length - 1) {
              setIsFlipped(false);
              setCurrentIndex(prev => prev + 1);
            }
          }}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-xs disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors shadow-2xs"
        >
          <span>Thẻ tiếp</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
