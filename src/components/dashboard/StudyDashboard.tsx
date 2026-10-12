import React from 'react';
import { 
  Brain, Clock, Sparkles, CheckCircle2, TrendingUp, Award,
  Layers, ArrowRight, Play, BookOpen, Flame, Zap, ShieldCheck
} from 'lucide-react';
import { UNITS_DATA, REVIEW_EXAMS, ALL_FLASHCARDS } from '../../data/unitsData';
import { UserStats, SpacedItemState } from '../../types';
import { isCardDue, calculateRetentionPercent } from '../../utils/spacedRepetition';

interface StudyDashboardProps {
  userStats: UserStats;
  cardStates: Record<string, SpacedItemState>;
  onStartSpacedReview: () => void;
  onSelectUnit: (unitId: number, mode: 'flashcard' | 'quiz' | 'game' | 'handbook') => void;
  onSelectReviewExam: (reviewId: string) => void;
  onOpenUnit1Master: () => void;
  onOpenUnit2Master: () => void;
  onOpenUnit3Master: () => void;
  onOpenUnit4Master?: () => void;
  onOpenUnit5Master?: () => void;
  onOpenUnit6Master?: () => void;
  onOpenReview1Master?: () => void;
  onOpenReview2Master?: () => void;
}

export const StudyDashboard: React.FC<StudyDashboardProps> = ({
  userStats,
  cardStates,
  onStartSpacedReview,
  onSelectUnit,
  onSelectReviewExam,
  onOpenUnit1Master,
  onOpenUnit2Master,
  onOpenUnit3Master,
  onOpenUnit4Master,
  onOpenUnit5Master,
  onOpenUnit6Master,
  onOpenReview1Master,
  onOpenReview2Master
}) => {
  // Calculate review metrics
  const dueCards = ALL_FLASHCARDS.filter(card => {
    const state = cardStates[card.id];
    return isCardDue(state);
  });

  const masteredCards = ALL_FLASHCARDS.filter(card => {
    return cardStates[card.id]?.status === 'mastered';
  });

  const learningCards = ALL_FLASHCARDS.filter(card => {
    const s = cardStates[card.id]?.status;
    return s === 'learning' || s === 'review';
  });

  const averageRetention = Math.round(
    ALL_FLASHCARDS.reduce((acc, card) => {
      const state = cardStates[card.id];
      return acc + (state ? calculateRetentionPercent(state) : 0);
    }, 0) / Math.max(1, ALL_FLASHCARDS.length)
  );

  return (
    <div className="space-y-8 pb-16">
      {/* Hero Banner with Spaced Repetition Call-to-action */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-600 to-sky-600 p-6 sm:p-8 text-white shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-xs sm:text-sm font-semibold backdrop-blur-md">
            <Brain className="w-4 h-4 text-amber-300" />
            <span>Phương pháp Lặp lại Ngắt quãng (Spaced Repetition SM-2)</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Chinh phục Tiếng Anh 8 <br className="hidden sm:inline" />
            <span className="text-amber-300">Nhớ lâu, hiểu sâu, không quên bài!</span>
          </h1>

          <p className="text-indigo-100 text-sm sm:text-base leading-relaxed max-w-2xl">
            Thay vì học vẹt dồn dập, thuật toán phân chia nhịp độ ôn tập vào các mốc vàng (1 ngày, 3 ngày, 7 ngày, 14 ngày)
            giúp kiến thức từ vựng và ngữ pháp khắc sâu vào trí nhớ dài hạn.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={onStartSpacedReview}
              className="inline-flex items-center gap-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-5 py-3 text-sm sm:text-base shadow-lg shadow-amber-900/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Play className="w-5 h-5 fill-slate-900" />
              <span>
                {dueCards.length > 0 
                  ? `Ôn tập ngắt quãng hôm nay (${dueCards.length} thẻ đến hạn)`
                  : 'Luyện tập Flashcard thông minh'
                }
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenUnit1Master}
              className="inline-flex items-center gap-2 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-bold px-4 py-3 text-sm sm:text-base backdrop-blur-md border border-white/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-5 h-5 text-amber-300" />
              <span>Trực Quan Unit 1</span>
            </button>

            <button
              onClick={onOpenUnit2Master}
              className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500/80 hover:bg-emerald-500 text-white font-bold px-4 py-3 text-sm sm:text-base backdrop-blur-md border border-emerald-400/50 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-emerald-950/20"
            >
              <Sparkles className="w-5 h-5 text-amber-300" />
              <span>Trực Quan Unit 2</span>
            </button>
          </div>
        </div>

        {/* Decorative background shapes */}
        <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute right-12 -bottom-16 w-80 h-80 rounded-full bg-sky-400/20 blur-3xl pointer-events-none" />
      </section>

      {/* Memory Stats & Ebbinghaus Curve Overview */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Due Cards */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-800">{dueCards.length}</div>
            <div className="text-xs font-semibold text-slate-500">Cần ôn hôm nay</div>
            <div className="text-[11px] text-amber-600 font-medium">Theo chu kỳ ngắt quãng</div>
          </div>
        </div>

        {/* Learning Cards */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-800">{learningCards.length}</div>
            <div className="text-xs font-semibold text-slate-500">Đang củng cố</div>
            <div className="text-[11px] text-sky-600 font-medium">Khoảng cách 2 - 7 ngày</div>
          </div>
        </div>

        {/* Mastered Cards */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-800">{masteredCards.length}</div>
            <div className="text-xs font-semibold text-slate-500">Đã khắc sâu dài hạn</div>
            <div className="text-[11px] text-emerald-600 font-medium">Ghi nhớ vững chắc</div>
          </div>
        </div>

        {/* Estimated Retention */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-800">{averageRetention}%</div>
            <div className="text-xs font-semibold text-slate-500">Tỷ lệ lưu giữ trí nhớ</div>
            <div className="text-[11px] text-indigo-600 font-medium">Đường cong Ebbinghaus</div>
          </div>
        </div>
      </section>

      {/* Forgetting Curve vs Spaced Repetition Explainer */}
      <section className="bg-gradient-to-r from-slate-900 to-indigo-950 rounded-3xl p-6 text-white shadow-md">
        <div className="flex flex-col lg:flex-row items-center gap-6 justify-between">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Bí quyết học thông minh theo khoa học não bộ</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Đường cong quên lãng Ebbinghaus hoạt động thế nào?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Não bộ tự nhiên quên mất <strong>50% kiến thức sau 1 giờ</strong> và <strong>70% sau 24 giờ</strong> nếu không ôn tập. 
              Khi ôn lại đúng thời điểm trước khi sắp quên (Ngày 1 → Ngày 3 → Ngày 7 → Ngày 14), đường cong trí nhớ phẳng dần và biến kiến thức thành phản xạ tự nhiên.
            </p>
          </div>

          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center">
              <div className="text-xs text-slate-300 font-medium">Học vẹt 1 lần</div>
              <div className="text-2xl font-black text-rose-400 my-1">Quên 80%</div>
              <div className="text-[11px] text-slate-400">Sau 1 tuần thi cử</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-indigo-400/40 text-center">
              <div className="text-xs text-indigo-200 font-medium">Lặp lại ngắt quãng</div>
              <div className="text-2xl font-black text-emerald-400 my-1">Nhớ &gt; 90%</div>
              <div className="text-[11px] text-indigo-300">Trí nhớ dài hạn vĩnh viễn</div>
            </div>
          </div>
        </div>
      </section>

      {/* 12 Units Curriculum Directory */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-indigo-600" />
              <span>12 Đơn vị Bài học (Units 1 - 12)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Toàn bộ chương trình sách giáo khoa Tiếng Anh 8 Global Success
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {UNITS_DATA.map((unit) => {
            const unitCards = unit.vocabulary;
            const masteredInUnit = unitCards.filter(c => cardStates[c.id]?.status === 'mastered').length;
            const progress = Math.round((masteredInUnit / Math.max(1, unitCards.length)) * 100);

            return (
              <div
                key={unit.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
                      Unit {unit.id}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      {unit.theme}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {unit.englishTitle}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                    {unit.description}
                  </p>

                  {/* Highlights tag */}
                  <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">
                      {unit.vocabulary.length} từ vựng
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 font-medium">
                      Ngữ pháp: {unit.grammar[0]?.title.split('(')[0]}
                    </span>
                    {unit.id === 1 && (
                      <button
                        onClick={onOpenUnit1Master}
                        className="px-2 py-0.5 rounded-md bg-rose-100 hover:bg-rose-200 text-rose-800 font-bold transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Sparkles className="w-3 h-3 text-rose-600" />
                        <span>Trực quan 7 bài SGK</span>
                      </button>
                    )}
                    {unit.id === 2 && (
                      <button
                        onClick={onOpenUnit2Master}
                        className="px-2 py-0.5 rounded-md bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-bold transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Sparkles className="w-3 h-3 text-emerald-600" />
                        <span>Trực quan 7 bài SGK</span>
                      </button>
                    )}
                    {unit.id === 3 && (
                      <button
                        onClick={onOpenUnit3Master}
                        className="px-2 py-0.5 rounded-md bg-amber-100 hover:bg-amber-200 text-amber-800 font-bold transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Sparkles className="w-3 h-3 text-amber-600" />
                        <span>Trực quan 7 bài SGK</span>
                      </button>
                    )}
                    {unit.id === 4 && onOpenUnit4Master && (
                      <button
                        onClick={onOpenUnit4Master}
                        className="px-2 py-0.5 rounded-md bg-teal-100 hover:bg-teal-200 text-teal-800 font-bold transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Sparkles className="w-3 h-3 text-teal-600" />
                        <span>Trực quan 7 bài SGK</span>
                      </button>
                    )}
                    {unit.id === 5 && onOpenUnit5Master && (
                      <button
                        onClick={onOpenUnit5Master}
                        className="px-2 py-0.5 rounded-md bg-rose-100 hover:bg-rose-200 text-rose-800 font-bold transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Sparkles className="w-3 h-3 text-rose-600" />
                        <span>Trực quan 7 bài SGK</span>
                      </button>
                    )}
                    {unit.id === 6 && onOpenUnit6Master && (
                      <button
                        onClick={onOpenUnit6Master}
                        className="px-2 py-0.5 rounded-md bg-indigo-100 hover:bg-indigo-200 text-indigo-800 font-bold transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Sparkles className="w-3 h-3 text-indigo-600" />
                        <span>Trực quan 7 bài SGK</span>
                      </button>
                    )}
                  </div>

                  {/* Progress bar */}
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 mb-1">
                      <span>Đã thuộc dài hạn</span>
                      <span className="text-indigo-600 font-bold">{progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Quick actions for this unit */}
                <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-4 gap-1.5 text-xs font-semibold">
                  <button
                    onClick={() => onSelectUnit(unit.id, 'flashcard')}
                    className="p-1.5 rounded-lg bg-sky-50 text-sky-700 hover:bg-sky-100 flex flex-col items-center gap-1 transition-colors"
                    title="Học thẻ Flashcard"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span className="text-[10px]">Thẻ</span>
                  </button>

                  <button
                    onClick={() => onSelectUnit(unit.id, 'quiz')}
                    className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 flex flex-col items-center gap-1 transition-colors"
                    title="Làm bài trắc nghiệm"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="text-[10px]">Trắc nghiệm</span>
                  </button>

                  <button
                    onClick={() => onSelectUnit(unit.id, 'game')}
                    className="p-1.5 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100 flex flex-col items-center gap-1 transition-colors"
                    title="Chơi trò chơi"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span className="text-[10px]">Game</span>
                  </button>

                  <button
                    onClick={() => onSelectUnit(unit.id, 'handbook')}
                    className="p-1.5 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 flex flex-col items-center gap-1 transition-colors"
                    title="Xem sổ tay lý thuyết"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span className="text-[10px]">Lý thuyết</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Review Exams Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-6 h-6 text-emerald-600" />
              <span>Đề Thi Ôn Tập Tổng Hợp (Reviews 1 - 4)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Kiểm tra toàn diện kiến thức giữa kỳ và cuối kỳ bám sát đề thi chuẩn
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {REVIEW_EXAMS.map((exam) => (
            <div
              key={exam.id}
              className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                  {exam.title}
                </span>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {exam.description}
                </p>
                <div className="mt-3 text-xs font-bold text-slate-700">
                  {exam.questions.length} câu hỏi trắc nghiệm
                </div>
              </div>

              {exam.id === 'rev-1' && onOpenReview1Master ? (
                <div className="mt-4 space-y-2">
                  <button
                    onClick={onOpenReview1Master}
                    className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Trực quan Trang 38-39 SGK</span>
                  </button>
                  <button
                    onClick={() => onSelectReviewExam(exam.id)}
                    className="w-full py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Làm đề trắc nghiệm</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : exam.id === 'rev-2' && onOpenReview2Master ? (
                <div className="mt-4 space-y-2">
                  <button
                    onClick={onOpenReview2Master}
                    className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Trực quan Trang 70-71 SGK</span>
                  </button>
                  <button
                    onClick={() => onSelectReviewExam(exam.id)}
                    className="w-full py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Làm đề trắc nghiệm</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => onSelectReviewExam(exam.id)}
                  className="mt-4 w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <span>Bắt đầu thi thử</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Badges & Achievements */}
      <section className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-500" />
            <h3 className="text-lg font-bold text-slate-900">Huy hiệu thành tích đã đạt</h3>
          </div>
          <div className="text-xs font-semibold text-slate-500">
            {userStats.badges.length} huy hiệu mở khóa
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {userStats.badges.map((badge, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/70 text-amber-900 text-xs font-bold shadow-2xs"
            >
              <Award className="w-4 h-4 text-amber-500 fill-amber-400" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
