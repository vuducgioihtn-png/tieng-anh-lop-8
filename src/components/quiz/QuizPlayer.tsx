import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, CheckCircle2, XCircle, ArrowRight, RotateCcw, 
  Award, Flame, HelpCircle, ArrowLeft, BookOpen, Layers
} from 'lucide-react';
import { QuizQuestion, UserStats } from '../../types';
import { UNITS_DATA, REVIEW_EXAMS } from '../../data/unitsData';
import { playSound } from '../../utils/audio';
import { addXP, getUserStats } from '../../utils/spacedRepetition';

interface QuizPlayerProps {
  initialUnitId?: number;
  initialReviewId?: string;
  onBackToDashboard: () => void;
  onStatsUpdated: () => void;
}

export const QuizPlayer: React.FC<QuizPlayerProps> = ({
  initialUnitId,
  initialReviewId,
  onBackToDashboard,
  onStatsUpdated
}) => {
  // Test selection state
  const [selectedMode, setSelectedMode] = useState<'unit' | 'review' | 'blitz'>('unit');
  const [selectedUnitId, setSelectedUnitId] = useState<number>(initialUnitId || 1);
  const [selectedReviewId, setSelectedReviewId] = useState<string>(initialReviewId || 'rev-1');
  const [quizStarted, setQuizStarted] = useState<boolean>(Boolean(initialUnitId || initialReviewId));

  // Active quiz state
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<{ question: QuizQuestion; chosen: number; isCorrect: boolean }[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  // Initialize quiz based on mode
  const startQuiz = (mode: 'unit' | 'review' | 'blitz', unitId = selectedUnitId, revId = selectedReviewId) => {
    let qList: QuizQuestion[] = [];
    if (mode === 'unit') {
      const u = UNITS_DATA.find(x => x.id === unitId);
      qList = u ? [...u.quizQuestions] : [];
    } else if (mode === 'review') {
      const r = REVIEW_EXAMS.find(x => x.id === revId);
      qList = r ? [...r.questions] : [];
    } else if (mode === 'blitz') {
      // 10 random questions from all units
      const allQ = UNITS_DATA.flatMap(u => u.quizQuestions);
      qList = [...allQ].sort(() => 0.5 - Math.random()).slice(0, 10);
    }

    setQuestions(qList);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setCurrentStreak(0);
    setMaxStreak(0);
    setUserAnswers([]);
    setIsFinished(false);
    setQuizStarted(true);
    playSound('pop');
  };

  useEffect(() => {
    if (initialReviewId) {
      setSelectedMode('review');
      setSelectedReviewId(initialReviewId);
      startQuiz('review', undefined, initialReviewId);
    } else if (initialUnitId) {
      setSelectedMode('unit');
      setSelectedUnitId(initialUnitId);
      startQuiz('unit', initialUnitId);
    }
  }, [initialUnitId, initialReviewId]);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;

    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === currentQ.correctAnswerIndex;

    if (isCorrect) {
      playSound('correct');
      setScore(prev => prev + 1);
      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);
    } else {
      playSound('wrong');
      setCurrentStreak(0);
    }

    setUserAnswers(prev => [
      ...prev,
      { question: currentQ, chosen: index, isCorrect }
    ]);
  };

  const handleNextQuestion = () => {
    playSound('pop');
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Quiz completed!
      setIsFinished(true);
      const finalScore = score + (selectedOption === currentQ.correctAnswerIndex ? 0 : 0);
      const earnedXP = finalScore * 20 + maxStreak * 10;
      addXP(earnedXP);

      const stats = getUserStats();
      stats.completedQuizzesCount += 1;
      onStatsUpdated();

      if ((score / questions.length) >= 0.7) {
        playSound('win');
        confetti({
          particleCount: 140,
          spread: 80,
          origin: { y: 0.6 }
        });
      }
    }
  };

  // IF QUIZ IS NOT STARTED: SELECTION MENU
  if (!quizStarted) {
    return (
      <div className="max-w-4xl mx-auto space-y-8 pb-12">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-7 h-7 text-emerald-600" />
              <span>Bài Kiểm Tra Trắc Nghiệm Sinh Động</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Câu hỏi chuẩn từ sách giáo khoa Tiếng Anh 8 (Global Success) có chấm điểm tức thì và giải thích chi tiết
            </p>
          </div>
          <button
            onClick={onBackToDashboard}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Trang chủ</span>
          </button>
        </div>

        {/* Mode selector tabs */}
        <div className="flex border-b border-slate-200 gap-4 text-sm font-bold">
          <button
            onClick={() => setSelectedMode('unit')}
            className={`pb-3 transition-colors relative ${
              selectedMode === 'unit'
                ? 'text-indigo-600 border-b-2 border-indigo-600'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Trắc nghiệm theo từng Unit (1 - 12)
          </button>
          <button
            onClick={() => setSelectedMode('review')}
            className={`pb-3 transition-colors relative ${
              selectedMode === 'review'
                ? 'text-indigo-600 border-b-2 border-indigo-600'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Đề ôn tập tổng hợp (Reviews 1 - 4)
          </button>
          <button
            onClick={() => {
              setSelectedMode('blitz');
              startQuiz('blitz');
            }}
            className="pb-3 text-amber-600 hover:text-amber-700 font-bold flex items-center gap-1"
          >
            <Flame className="w-4 h-4" />
            <span>Thử thách Blitz 10 câu ngẫu nhiên</span>
          </button>
        </div>

        {selectedMode === 'unit' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {UNITS_DATA.map(u => (
              <div
                key={u.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:border-indigo-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
                      Unit {u.id}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {u.quizQuestions.length} câu hỏi
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm">
                    {u.englishTitle}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                    Trắc nghiệm từ vựng, ngữ pháp, ngữ âm & giao tiếp
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSelectedUnitId(u.id);
                    startQuiz('unit', u.id);
                  }}
                  className="mt-4 w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                >
                  <span>Bắt đầu làm bài</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}

        {selectedMode === 'review' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {REVIEW_EXAMS.map(rev => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700">
                    {rev.title}
                  </span>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {rev.description}
                  </p>
                  <div className="mt-3 text-xs font-bold text-slate-700">
                    Bộ câu hỏi: {rev.questions.length} câu trắc nghiệm tổng hợp
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedReviewId(rev.id);
                    startQuiz('review', undefined, rev.id);
                  }}
                  className="mt-5 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                >
                  <span>Thi thử ngay</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // IF QUIZ IS FINISHED: RESULTS SUMMARY
  if (isFinished) {
    const percentage = Math.round((score / Math.max(1, questions.length)) * 100);
    const passed = percentage >= 60;

    return (
      <div className="max-w-2xl mx-auto space-y-6 pb-12">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-xl text-center space-y-6">
          <div className={`w-24 h-24 mx-auto rounded-3xl flex items-center justify-center shadow-lg ${
            passed ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
          }`}>
            <Award className="w-12 h-12" />
          </div>

          <div>
            <h2 className="text-3xl font-black text-slate-900">
              {percentage >= 80 ? 'Xuất Sắc! Thủ Khoa Tiếng Anh 8' : percentage >= 60 ? 'Làm Tốt Lắm!' : 'Cần Ôn Lại Thêm Nhé!'}
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Bạn đã hoàn thành bài kiểm tra với kết quả:
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div>
              <span className="text-xs text-slate-500 font-medium">Điểm số</span>
              <div className="text-2xl font-black text-indigo-600">{score} / {questions.length}</div>
              <span className="text-[11px] text-slate-400">({percentage}%)</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 font-medium">Chuỗi đúng cao nhất</span>
              <div className="text-2xl font-black text-amber-500 flex items-center justify-center gap-1">
                <Flame className="w-5 h-5 fill-amber-500" />
                <span>{maxStreak}</span>
              </div>
              <span className="text-[11px] text-slate-400">Streak liên tiếp</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 font-medium">Kinh nghiệm</span>
              <div className="text-2xl font-black text-emerald-600">+{score * 20 + maxStreak * 10} XP</div>
              <span className="text-[11px] text-slate-400">Đã cộng vào hồ sơ</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => startQuiz(selectedMode, selectedUnitId, selectedReviewId)}
              className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Làm lại bài kiểm tra</span>
            </button>
            <button
              onClick={() => setQuizStarted(false)}
              className="flex-1 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-colors"
            >
              Chọn bài kiểm tra khác
            </button>
          </div>
        </div>

        {/* Detailed Answer Review */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
          <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            <span>Xem lại chi tiết từng câu hỏi & lời giải thích</span>
          </h3>

          <div className="space-y-4">
            {userAnswers.map((item, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl border text-xs sm:text-sm space-y-2 ${
                  item.isCorrect
                    ? 'bg-emerald-50/40 border-emerald-200'
                    : 'bg-rose-50/40 border-rose-200'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-bold text-slate-800">
                    Câu {idx + 1}: {item.question.question}
                  </span>
                  {item.isCorrect ? (
                    <span className="text-emerald-700 font-bold flex items-center gap-1 shrink-0">
                      <CheckCircle2 className="w-4 h-4" /> Đúng
                    </span>
                  ) : (
                    <span className="text-rose-700 font-bold flex items-center gap-1 shrink-0">
                      <XCircle className="w-4 h-4" /> Sai
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className={`p-2 rounded-lg ${item.isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                    <strong>Đáp án của bạn:</strong> {item.question.options[item.chosen]}
                  </div>
                  {!item.isCorrect && (
                    <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800">
                      <strong>Đáp án chính xác:</strong> {item.question.options[item.question.correctAnswerIndex]}
                    </div>
                  )}
                </div>

                <div className="text-xs text-slate-600 bg-white/80 p-2.5 rounded-lg border border-slate-200/60">
                  <span className="font-semibold text-indigo-700">Giải thích SGK:</span> {item.question.explanationVi}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ACTIVE QUIZ INTERFACE
  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      {/* Top quiz bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setQuizStarted(false)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Thoát bài kiểm tra</span>
        </button>

        <div className="flex items-center gap-3">
          {currentStreak > 1 && (
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold animate-pulse">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>{currentStreak} liên tiếp!</span>
            </div>
          )}

          <div className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
            Điểm: {score} / {questions.length}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
          <span>Câu {currentIndex + 1} / {questions.length}</span>
          <span className="text-indigo-600 font-bold">
            {Math.round(((currentIndex + 1) / questions.length) * 100)}%
          </span>
        </div>
        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-indigo-600 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 uppercase tracking-wider">
            {currentQ?.type === 'grammar' ? 'Ngữ pháp' : currentQ?.type === 'vocabulary' ? 'Từ vựng' : currentQ?.type === 'pronunciation' ? 'Phát âm' : 'Giao tiếp'}
          </span>
          <span className="text-xs font-semibold text-slate-400">
            Unit {currentQ?.unitId}
          </span>
        </div>

        <h2 className="text-lg sm:text-2xl font-bold text-slate-900 leading-snug">
          {currentQ?.question}
        </h2>

        {/* 4 Options */}
        <div className="grid grid-cols-1 gap-3">
          {currentQ?.options.map((option, idx) => {
            const isChosen = selectedOption === idx;
            const isCorrect = idx === currentQ.correctAnswerIndex;

            let buttonStyle = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300';

            if (isAnswered) {
              if (isCorrect) {
                buttonStyle = 'bg-emerald-500 text-white border-emerald-600 shadow-md';
              } else if (isChosen && !isCorrect) {
                buttonStyle = 'bg-rose-500 text-white border-rose-600';
              } else {
                buttonStyle = 'bg-slate-50 text-slate-400 border-slate-200 opacity-60';
              }
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleSelectOption(idx)}
                className={`w-full p-4 rounded-2xl border text-left font-semibold text-sm sm:text-base flex items-center justify-between transition-all ${buttonStyle}`}
              >
                <span>{option}</span>
                {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 shrink-0" />}
                {isAnswered && isChosen && !isCorrect && <XCircle className="w-5 h-5 shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Instant Explanation Box */}
        {isAnswered && (
          <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-900">
              <HelpCircle className="w-4 h-4 text-indigo-600" />
              <span>Giải thích đáp án chi tiết theo SGK Global Success:</span>
            </div>
            <p className="text-xs sm:text-sm text-indigo-950 leading-relaxed">
              {currentQ?.explanationVi}
            </p>
          </div>
        )}

        {/* Next Question Button */}
        {isAnswered && (
          <div className="pt-2 flex justify-end">
            <button
              onClick={handleNextQuestion}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{currentIndex < questions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả bài thi'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
