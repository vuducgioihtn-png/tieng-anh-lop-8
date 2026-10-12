import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Volume2, RotateCcw, CheckCircle2, ArrowRight, ArrowLeft, Lightbulb, Sparkles } from 'lucide-react';
import { ALL_FLASHCARDS } from '../../data/unitsData';
import { FlashcardItem } from '../../types';
import { playSound, speakEnglish } from '../../utils/audio';
import { addXP } from '../../utils/spacedRepetition';

interface WordScrambleGameProps {
  onBack: () => void;
}

export const WordScrambleGame: React.FC<WordScrambleGameProps> = ({ onBack }) => {
  // Only words with letters (no special chars like brackets)
  const candidateWords = ALL_FLASHCARDS.filter(c => /^[a-zA-Z\s]+$/.test(c.word) && c.word.length >= 4);

  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedLetters, setSelectedLetters] = useState<{ char: string; originalIndex: number }[]>([]);
  const [availableLetters, setAvailableLetters] = useState<{ char: string; index: number }[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(0);

  const currentWordItem: FlashcardItem = candidateWords[currentIdx] || candidateWords[0];

  const loadWord = (idx: number) => {
    const item = candidateWords[idx];
    setCurrentIdx(idx);
    setSelectedLetters([]);
    setIsCorrect(null);

    // Scramble letters
    const letters = item.word.replace(/\s+/g, '').toUpperCase().split('').map((char, i) => ({
      char,
      index: i
    }));
    setAvailableLetters([...letters].sort(() => 0.5 - Math.random()));
  };

  React.useEffect(() => {
    loadWord(0);
  }, []);

  const handlePickLetter = (item: { char: string; index: number }) => {
    playSound('pop');
    setSelectedLetters(prev => [...prev, { char: item.char, originalIndex: item.index }]);
    setAvailableLetters(prev => prev.filter(x => x.index !== item.index));

    // Check if finished length
    const targetWord = currentWordItem.word.replace(/\s+/g, '').toUpperCase();
    const newLetters = [...selectedLetters, { char: item.char, originalIndex: item.index }];
    
    if (newLetters.length === targetWord.length) {
      const assembled = newLetters.map(l => l.char).join('');
      if (assembled === targetWord) {
        playSound('correct');
        setIsCorrect(true);
        setScore(s => s + 40);
        addXP(40);
        speakEnglish(currentWordItem.word);
        confetti({ particleCount: 60, spread: 50, origin: { y: 0.6 } });
      } else {
        playSound('wrong');
        setIsCorrect(false);
      }
    }
  };

  const handleRemoveLetter = (indexToRemove: number) => {
    playSound('pop');
    const removed = selectedLetters[indexToRemove];
    setSelectedLetters(prev => prev.filter((_, i) => i !== indexToRemove));
    setAvailableLetters(prev => [...prev, { char: removed.char, index: removed.originalIndex }]);
    setIsCorrect(null);
  };

  const handleNextWord = () => {
    playSound('pop');
    if (currentIdx < candidateWords.length - 1) {
      loadWord(currentIdx + 1);
    } else {
      loadWord(0);
    }
  };

  return (
    <div className="max-w-xl mx-auto space-y-6 pb-12">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Về kho game</span>
        </button>

        <div className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700">
          Điểm: {score} XP
        </div>
      </div>

      {/* Main Game Box */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-8 space-y-6 text-center">
        <div className="flex items-center justify-between text-xs font-bold text-slate-400">
          <span>Unit {currentWordItem.unitId}</span>
          <span>{currentIdx + 1} / {candidateWords.length}</span>
        </div>

        {/* Vietnamese clue */}
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Nghĩa tiếng Việt
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-indigo-900">
            {currentWordItem.meaningVi}
          </h2>
          <div className="text-xs text-slate-500 italic mt-1">
            ({currentWordItem.partOfSpeech}) - {currentWordItem.phonetic}
          </div>
        </div>

        {/* Listen Pronunciation clue */}
        <div>
          <button
            onClick={() => speakEnglish(currentWordItem.word)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-bold text-xs transition-colors shadow-2xs"
          >
            <Volume2 className="w-4 h-4" />
            <span>Nghe phát âm từ này</span>
          </button>
        </div>

        {/* Selected letters slots */}
        <div className="flex flex-wrap items-center justify-center gap-2 min-h-[56px] p-3 rounded-2xl bg-indigo-50/40 border border-indigo-100">
          {selectedLetters.length === 0 ? (
            <span className="text-xs text-slate-400 font-medium">
              Chạm vào các chữ cái bên dưới để sắp xếp chính xác...
            </span>
          ) : (
            selectedLetters.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleRemoveLetter(idx)}
                className="w-10 h-10 rounded-xl bg-indigo-600 hover:bg-rose-500 text-white font-black text-base flex items-center justify-center shadow-2xs transition-all active:scale-95"
                title="Nhấn để bỏ ký tự này"
              >
                {item.char}
              </button>
            ))
          )}
        </div>

        {/* Available letters to tap */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {availableLetters.map((item) => (
            <button
              key={item.index}
              onClick={() => handlePickLetter(item)}
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 text-slate-800 font-black text-base flex items-center justify-center shadow-2xs transition-all active:scale-95"
            >
              {item.char}
            </button>
          ))}
        </div>

        {/* Feedback Banner */}
        {isCorrect !== null && (
          <div className={`p-4 rounded-2xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 ${
            isCorrect ? 'bg-emerald-50 border-emerald-300 text-emerald-800' : 'bg-rose-50 border-rose-300 text-rose-800'
          }`}>
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Tuyệt vời! Bạn đã xếp đúng từ: &ldquo;{currentWordItem.word}&rdquo; (+40 XP)</span>
              </>
            ) : (
              <span>Chưa chính xác rồi! Chạm vào chữ cái để sửa lại nhé.</span>
            )}
          </div>
        )}

        {/* Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            onClick={() => loadWord(currentIdx)}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-semibold"
            title="Làm lại từ này"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={handleNextWord}
            className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
          >
            <span>Từ vựng tiếp theo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
