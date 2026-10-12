import React, { useState } from 'react';
import { Gamepad2, Play, Sparkles, Layers, FileText, Zap, Award } from 'lucide-react';
import { MatchGame } from './MatchGame';
import { SentenceBuilderGame } from './SentenceBuilderGame';
import { SpeedQuizGame } from './SpeedQuizGame';
import { WordScrambleGame } from './WordScrambleGame';

interface GamesHubProps {
  initialGame?: 'match' | 'sentence' | 'speed' | 'scramble' | null;
  initialUnitId?: number;
  onBackToDashboard: () => void;
}

export const GamesHub: React.FC<GamesHubProps> = ({ initialGame, initialUnitId, onBackToDashboard }) => {
  const [activeGame, setActiveGame] = useState<'match' | 'sentence' | 'speed' | 'scramble' | null>(
    initialGame || null
  );

  if (activeGame === 'match') {
    return <MatchGame initialUnitId={initialUnitId} onBack={() => setActiveGame(null)} />;
  }

  if (activeGame === 'sentence') {
    return <SentenceBuilderGame initialUnitId={initialUnitId} onBack={() => setActiveGame(null)} />;
  }

  if (activeGame === 'speed') {
    return <SpeedQuizGame onBack={() => setActiveGame(null)} />;
  }

  if (activeGame === 'scramble') {
    return <WordScrambleGame onBack={() => setActiveGame(null)} />;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
          <Gamepad2 className="w-8 h-8 text-amber-500" />
          <span>Trò Chơi Tương Tác Ghi Nhớ Lâu</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Học mà chơi, chơi mà nhớ! Vận dụng kiến thức Tiếng Anh 8 qua các mini-game rèn luyện phản xạ và trí nhớ.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Game 1: Match Master */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs hover:shadow-lg hover:border-indigo-300 transition-all flex flex-col justify-between group">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                Phản xạ từ vựng
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                Match Master (Nối Từ Nhanh)
              </h3>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Nhanh tay lẹ mắt ghép nối thẻ Tiếng Anh với định nghĩa Tiếng Việt tương ứng. Ghi điểm combo liên tiếp và lập kỷ lục thời gian!
            </p>
          </div>

          <button
            onClick={() => setActiveGame('match')}
            className="mt-6 w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-indigo-100 transition-colors"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Chơi Match Master</span>
          </button>
        </div>

        {/* Game 2: Sentence Builder */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs hover:shadow-lg hover:border-purple-300 transition-all flex flex-col justify-between group">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600">
                Ngữ pháp ứng dụng
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                Sentence Builder (Xếp Câu Chuẩn SGK)
              </h3>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Sắp xếp các mảnh từ vựng để tạo thành câu hoàn chỉnh theo đúng cấu trúc ngữ pháp SGK (Reported speech, Câu điều kiện, Câu ghép, v.v.).
            </p>
          </div>

          <button
            onClick={() => setActiveGame('sentence')}
            className="mt-6 w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-purple-100 transition-colors"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Chơi Sentence Builder</span>
          </button>
        </div>

        {/* Game 3: Speed Rush 60s */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs hover:shadow-lg hover:border-amber-300 transition-all flex flex-col justify-between group">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
                Tốc độ & Trực giác
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                Speed Rush (Đua Tốc Độ 60s)
              </h3>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Chạy đua với đồng hồ đếm ngược! Trả lời đúng nhiều câu hỏi nhất trong 60 giây, mỗi câu đúng cộng thêm +3 giây quý giá.
            </p>
          </div>

          <button
            onClick={() => setActiveGame('speed')}
            className="mt-6 w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-amber-100 transition-colors"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Chơi Speed Rush</span>
          </button>
        </div>

        {/* Game 4: Word Scramble */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs hover:shadow-lg hover:border-emerald-300 transition-all flex flex-col justify-between group">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                Chính tả & Phát âm
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                Word Scramble (Xếp Chữ Điền Từ)
              </h3>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Giải mã các chữ cái bị xáo trộn dựa trên gợi ý nghĩa tiếng Việt và âm thanh phát âm chuẩn bản xứ. Nhớ chính tả từ vựng siêu nhanh!
            </p>
          </div>

          <button
            onClick={() => setActiveGame('scramble')}
            className="mt-6 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-100 transition-colors"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Chơi Word Scramble</span>
          </button>
        </div>
      </div>
    </div>
  );
};
