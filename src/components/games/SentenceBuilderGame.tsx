import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { RotateCcw, CheckCircle2, ArrowRight, ArrowLeft, Lightbulb, Volume2, Award } from 'lucide-react';
import { UNITS_DATA } from '../../data/unitsData';
import { playSound, speakEnglish } from '../../utils/audio';
import { addXP } from '../../utils/spacedRepetition';

interface SentenceBuilderGameProps {
  initialUnitId?: number;
  onBack: () => void;
}

export const SentenceBuilderGame: React.FC<SentenceBuilderGameProps> = ({ initialUnitId, onBack }) => {
  // Extract all sentence puzzles
  const allPuzzles = UNITS_DATA.flatMap(u => 
    u.sentencePuzzles.map(p => ({ ...p, unitId: u.id, unitTitle: u.englishTitle }))
  );

  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>(
    [...(allPuzzles[0]?.scrambled || [])].sort(() => 0.5 - Math.random())
  );
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(0);
  const [showHint, setShowHint] = useState<boolean>(false);

  const currentPuzzle = allPuzzles[currentIdx];

  const loadPuzzle = (idx: number) => {
    const p = allPuzzles[idx];
    setCurrentIdx(idx);
    setSelectedWords([]);
    setAvailableWords([...(p?.scrambled || [])].sort(() => 0.5 - Math.random()));
    setIsCorrect(null);
    setShowHint(false);
  };

  const handleSelectWord = (word: string, index: number) => {
    playSound('pop');
    setSelectedWords(prev => [...prev, word]);
    setAvailableWords(prev => prev.filter((_, i) => i !== index));
    setIsCorrect(null);
  };

  const handleDeselectWord = (word: string, index: number) => {
    playSound('pop');
    setSelectedWords(prev => prev.filter((_, i) => i !== index));
    setAvailableWords(prev => [...prev, word]);
    setIsCorrect(null);
  };

  const handleCheck = () => {
    const assembled = selectedWords.join(' ').trim().toLowerCase().replace(/[.,!?;]/g, '');
    const target = currentPuzzle.correct.trim().toLowerCase().replace(/[.,!?;]/g, '');

    if (assembled === target) {
      playSound('correct');
      setIsCorrect(true);
      setScore(s => s + 50);
      addXP(50);
      speakEnglish(currentPuzzle.correct);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } else {
      playSound('wrong');
      setIsCorrect(false);
    }
  };

  const handleNext = () => {
    playSound('pop');
    if (currentIdx < allPuzzles.length - 1) {
      loadPuzzle(currentIdx + 1);
    } else {
      // Loop or finish
      loadPuzzle(0);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Về kho game</span>
        </button>

        <div className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700">
          Điểm số: {score} XP
        </div>
      </div>

      {/* Puzzle Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700">
            Unit {currentPuzzle.unitId} • {currentPuzzle.unitTitle}
          </span>
          <span className="text-xs font-semibold text-slate-400">
            Câu {currentIdx + 1} / {allPuzzles.length}
          </span>
        </div>

        {/* Vietnamese Meaning Prompt */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Dịch câu tiếng Việt sau sang tiếng Anh chuẩn SGK:
          </div>
          <div className="text-base sm:text-lg font-bold text-slate-800">
            &ldquo;{currentPuzzle.translationVi}&rdquo;
          </div>
        </div>

        {/* Assembled sentence area */}
        <div className="min-h-[90px] p-4 rounded-2xl border-2 border-dashed border-indigo-200 bg-indigo-50/20 flex flex-wrap items-center gap-2">
          {selectedWords.length === 0 ? (
            <span className="text-xs font-medium text-slate-400 italic">
              Chạm vào các từ bên dưới theo đúng thứ tự ngữ pháp để ghép thành câu...
            </span>
          ) : (
            selectedWords.map((word, idx) => (
              <button
                key={idx}
                onClick={() => handleDeselectWord(word, idx)}
                className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-rose-500 text-white font-bold text-xs sm:text-sm shadow-2xs transition-all active:scale-95 group"
                title="Nhấn để bỏ từ này"
              >
                <span>{word}</span>
              </button>
            ))
          )}
        </div>

        {/* Available words tray */}
        <div className="space-y-2">
          <div className="text-xs font-semibold text-slate-500">Các từ có sẵn:</div>
          <div className="flex flex-wrap gap-2">
            {availableWords.map((word, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectWord(word, idx)}
                className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/40 text-slate-800 font-bold text-xs sm:text-sm shadow-2xs transition-all active:scale-95"
              >
                {word}
              </button>
            ))}
          </div>
        </div>

        {/* Feedback message */}
        {isCorrect !== null && (
          <div className={`p-4 rounded-2xl border text-xs sm:text-sm flex items-center justify-between gap-3 ${
            isCorrect 
              ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
              : 'bg-rose-50 border-rose-300 text-rose-800'
          }`}>
            <div className="flex items-center gap-2 font-bold">
              {isCorrect ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : <RotateCcw className="w-5 h-5 text-rose-600" />}
              <span>
                {isCorrect ? 'Chính xác tuyệt đối! +50 XP' : 'Chưa đúng rồi! Hãy thử sắp xếp lại nhé.'}
              </span>
            </div>
            {isCorrect && (
              <button
                onClick={() => speakEnglish(currentPuzzle.correct)}
                className="p-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

        {/* Hint toggle */}
        {showHint && (
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
            <span><strong>Gợi ý ngữ pháp:</strong> {currentPuzzle.hint}</span>
          </div>
        )}

        {/* Controls */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <button
            onClick={() => setShowHint(!showHint)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700"
          >
            <Lightbulb className="w-4 h-4" />
            <span>{showHint ? 'Ẩn gợi ý' : 'Xem gợi ý ngữ pháp'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => loadPuzzle(currentIdx)}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-semibold"
              title="Làm lại câu này"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {!isCorrect ? (
              <button
                disabled={selectedWords.length === 0}
                onClick={handleCheck}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-bold text-xs shadow-md transition-all"
              >
                Kiểm tra câu
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
              >
                <span>Câu tiếp theo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
