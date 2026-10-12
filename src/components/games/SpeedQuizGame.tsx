import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Timer, Zap, Flame, Trophy, ArrowLeft, RotateCcw, CheckCircle2, XCircle } from 'lucide-react';
import { UNITS_DATA } from '../../data/unitsData';
import { QuizQuestion } from '../../types';
import { playSound } from '../../utils/audio';
import { addXP } from '../../utils/spacedRepetition';

interface SpeedQuizGameProps {
  onBack: () => void;
}

export const SpeedQuizGame: React.FC<SpeedQuizGameProps> = ({ onBack }) => {
  const allQuestions = UNITS_DATA.flatMap(u => u.quizQuestions);

  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  const initGame = () => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled);
    setCurrentIdx(0);
    setTimeLeft(60);
    setIsRunning(true);
    setScore(0);
    setStreak(0);
    setCorrectCount(0);
    setFeedback(null);
    playSound('pop');
  };

  useEffect(() => {
    initGame();
  }, []);

  // Timer countdown
  useEffect(() => {
    if (!isRunning) return;

    if (timeLeft <= 0) {
      setIsRunning(false);
      playSound('win');
      addXP(score);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(t => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isRunning, score]);

  const currentQ = questions[currentIdx];

  const handleAnswer = (optionIdx: number) => {
    if (!isRunning || !currentQ) return;

    const isRight = optionIdx === currentQ.correctAnswerIndex;

    if (isRight) {
      playSound('correct');
      setFeedback('correct');
      setScore(s => s + 50 + streak * 10);
      setStreak(st => st + 1);
      setCorrectCount(c => c + 1);
      // Time bonus!
      setTimeLeft(t => Math.min(60, t + 3));
    } else {
      playSound('wrong');
      setFeedback('wrong');
      setStreak(0);
    }

    setTimeout(() => {
      setFeedback(null);
      if (currentIdx < questions.length - 1) {
        setCurrentIdx(prev => prev + 1);
      } else {
        // Shuffle and restart queue
        setQuestions(prev => [...prev].sort(() => 0.5 - Math.random()));
        setCurrentIdx(0);
      }
    }, 350);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-12">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Về kho game</span>
        </button>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-amber-500 font-extrabold text-xs">
            <Flame className="w-4 h-4 fill-amber-500" />
            <span>Streak {streak}x</span>
          </div>
          <div className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700">
            Điểm: {score}
          </div>
        </div>
      </div>

      {/* Timer Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center justify-between text-xs font-bold">
          <div className="flex items-center gap-1.5 text-slate-700">
            <Timer className={`w-4 h-4 ${timeLeft <= 10 ? 'text-rose-500 animate-pulse' : 'text-indigo-500'}`} />
            <span>Thời gian còn lại:</span>
          </div>
          <span className={`text-base font-black ${timeLeft <= 10 ? 'text-rose-600 font-mono animate-bounce' : 'text-slate-900 font-mono'}`}>
            {timeLeft} giây
          </span>
        </div>
        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-1000 ${
              timeLeft > 20 ? 'bg-gradient-to-r from-emerald-500 to-indigo-500' : 'bg-rose-500'
            }`}
            style={{ width: `${(timeLeft / 60) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Game Card */}
      {isRunning ? (
        <div className={`bg-white rounded-3xl border shadow-xl p-6 sm:p-8 space-y-6 transition-colors ${
          feedback === 'correct' ? 'border-emerald-400 bg-emerald-50/20' : feedback === 'wrong' ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200/90'
        }`}>
          <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
            <span>Unit {currentQ?.unitId}</span>
            <span>+3 giây mỗi câu đúng!</span>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-slate-900 min-h-[56px] flex items-center">
            {currentQ?.question}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQ?.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                className="p-3.5 rounded-2xl border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/50 font-bold text-xs sm:text-sm text-left text-slate-800 transition-all active:scale-95 shadow-2xs"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-8 text-center space-y-6">
          <Trophy className="w-16 h-16 text-amber-500 mx-auto animate-bounce" />
          <div>
            <h2 className="text-2xl font-black text-slate-900">Hết Giờ! Đua Tốc Độ Hoàn Tất</h2>
            <p className="text-sm text-slate-500 mt-1">
              Phản xạ của bạn thật tuyệt vời!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 max-w-sm mx-auto">
            <div>
              <span className="text-xs text-slate-500 font-medium">Số câu trả lời đúng</span>
              <div className="text-2xl font-black text-emerald-600">{correctCount} câu</div>
            </div>
            <div>
              <span className="text-xs text-slate-500 font-medium">Tổng điểm ghi được</span>
              <div className="text-2xl font-black text-indigo-600">{score} điểm</div>
            </div>
          </div>

          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={initGame}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Chơi lại vòng mới</span>
            </button>
            <button
              onClick={onBack}
              className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all"
            >
              Về kho trò chơi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
