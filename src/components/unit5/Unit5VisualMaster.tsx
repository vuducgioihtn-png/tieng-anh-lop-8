import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, Volume2, CheckCircle2, RotateCcw, Lightbulb, 
  ArrowLeft, ArrowRight, Heart, Brain, Zap, Layers, Play,
  MessageCircle, HelpCircle, Trophy, BookOpen, Users,
  PenTool, Headphones, Smile, Eye, Share2, Award, FileText,
  Flame, Gift, Sun, Coffee, Compass, Star, ChevronDown, Check
} from 'lucide-react';
import { getReadingTip } from '../../utils/pronunciationHelper';
import { speakEnglish } from '../../utils/audio';

interface Unit5VisualMasterProps {
  onBack: () => void;
  onGoToFlashcards?: () => void;
  onGoToQuiz?: () => void;
}

type LessonTab = 
  | 'mindmap' 
  | 'getting_started' 
  | 'closer_look_1' 
  | 'closer_look_2' 
  | 'communication' 
  | 'skills_1' 
  | 'skills_2' 
  | 'looking_back';

export const Unit5VisualMaster: React.FC<Unit5VisualMasterProps> = ({
  onBack,
  onGoToFlashcards,
  onGoToQuiz
}) => {
  const [activeLesson, setActiveLesson] = useState<LessonTab>('mindmap');

  // Text-to-speech helper (sử dụng duy nhất giọng NỮ vang sáng, ngân hay)
  const [activeSpeakingText, setActiveSpeakingText] = useState<string | null>(null);
  const speakText = (text: string) => {
    speakEnglish(text, {
      onStart: () => setActiveSpeakingText(text),
      onEnd: () => setActiveSpeakingText(null),
      onError: () => setActiveSpeakingText(null)
    });
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // fallback
    }
  };

  // State for Getting Started (Pages 50-51)
  const [gsTfAnswers, setGsTfAnswers] = useState<Record<number, boolean>>({});
  const [customTraditionSort, setCustomTraditionSort] = useState<Record<number, 'custom' | 'tradition'>>({});

  // State for Closer Look 1 Phonetics /n/ vs /ŋ/ (Page 52)
  const [phoneticBasket, setPhoneticBasket] = useState<Record<string, '/n/' | '/ŋ/'>>({});

  // State for Closer Look 2: Zero Article vs A/An/The (Page 53)
  const [articleAnswers, setArticleAnswers] = useState<Record<number, string>>({});

  // State for Communication Table Manners (Page 54)
  const [mannerAnswers, setMannerAnswers] = useState<Record<number, string>>({});

  // State for Skills 1 Reading Whale Festival (Page 55)
  const [readingAnswers, setReadingAnswers] = useState<Record<number, string>>({});

  // State for Skills 2 Listening Bamboo Pole (Page 56)
  const [listenAnswers, setListenAnswers] = useState<Record<number, string>>({});

  // State for Guided Writing (Page 56)
  const [writingEssay, setWritingEssay] = useState<string>('');
  const [showModelWriting, setShowModelWriting] = useState<boolean>(false);

  // Tabs definitions
  const tabs: { id: LessonTab; label: string; sub: string; badge: string; icon: any }[] = [
    { id: 'mindmap', label: 'Bản Đồ Tư Duy', sub: 'Toàn cảnh phong tục & truyền thống', badge: 'Overview', icon: Brain },
    { id: 'getting_started', label: '1. Getting Started', sub: 'A longevity party (Mừng thọ)', badge: 'Trang 50', icon: Users },
    { id: 'closer_look_1', label: '2. Closer Look 1', sub: 'Từ vựng & Âm /n/ - /ŋ/', badge: 'Trang 52', icon: Volume2 },
    { id: 'closer_look_2', label: '3. Closer Look 2', sub: 'Mạo từ Zero Article (Ø)', badge: 'Trang 53', icon: Zap },
    { id: 'communication', label: '4. Communication', sub: 'Lời khuyên & Phép lịch sự bàn ăn', badge: 'Trang 54', icon: MessageCircle },
    { id: 'skills_1', label: '5. Skills 1', sub: 'Lễ hội Nghinh Ông thờ Cá Voi', badge: 'Trang 55', icon: BookOpen },
    { id: 'skills_2', label: '6. Skills 2', sub: 'Cây nêu ngày Tết & Đoạn văn viết', badge: 'Trang 56', icon: PenTool },
    { id: 'looking_back', label: '7. Looking Back', sub: 'Thử thách mạo từ & Dự án văn hóa', badge: 'Trang 57', icon: Trophy },
  ];

  return (
    <div className="space-y-6 pb-20 max-w-6xl mx-auto">
      {/* Top Banner Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-700 via-rose-600 to-red-700 p-6 sm:p-8 text-white shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-200 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-xl backdrop-blur-sm cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Quay lại Trang chủ</span>
            </button>
            <div className="inline-flex items-center gap-2 ml-2 rounded-full bg-amber-400/20 px-3 py-0.5 text-xs font-semibold text-amber-200">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              <span>Tiếng Anh 8 Global Success • Trang 50 - 59 SGK</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              Unit 5: Our Customs and Traditions
            </h1>
            <p className="text-amber-100 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Trạm học trực quan 7 bài SGK: Khám phá lễ mừng thọ ấm áp, cây nêu ngày Tết, lễ hội Nghinh Ông thờ cá voi, 
              phép lịch sự bàn ăn người Việt, làm chủ quy tắc Zero Article (Ø) và cặp âm mũi /n/ - /ŋ/!
            </p>
          </div>

          <div className="flex sm:flex-col gap-2 shrink-0">
            {onGoToFlashcards && (
              <button
                onClick={onGoToFlashcards}
                className="px-3.5 py-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Layers className="w-4 h-4 text-amber-300" />
                <span>35 Flashcards Unit 5</span>
              </button>
            )}
            {onGoToQuiz && (
              <button
                onClick={onGoToQuiz}
                className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                <Sparkles className="w-4 h-4 text-amber-900" />
                <span>12 Câu Trắc Nghiệm</span>
              </button>
            )}
          </div>
        </div>

        {/* Lesson Navigation Tabs */}
        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeLesson === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveLesson(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-rose-800 shadow-md scale-102 font-extrabold'
                    : 'bg-white/10 hover:bg-white/20 text-white/90'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-rose-600' : 'text-amber-200'}`} />
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-rose-100 text-rose-700' : 'bg-black/20 text-white/70'}`}>
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 0: MINDMAP OVERVIEW */}
      {activeLesson === 'mindmap' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-amber-50 to-rose-50 border border-amber-200/60 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-amber-900 flex items-center gap-2">
                  <Brain className="w-6 h-6 text-rose-600" />
                  <span>Sơ Đồ Tư Duy Toàn Cảnh (Unit 5 Mindmap)</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Khái quát 4 trụ cột kiến thức cốt lõi giúp học sinh nắm trọn Unit 5 chỉ trong 3 phút.
                </p>
              </div>
              <button
                onClick={triggerConfetti}
                className="px-4 py-2 bg-gradient-to-r from-amber-500 to-rose-600 text-white text-xs font-bold rounded-xl shadow hover:opacity-90 transition flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Thắp sáng tư duy</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Pillar 1: Customs & Festivals */}
              <div className="bg-white rounded-2xl p-5 border border-amber-200 shadow-xs hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black mb-3">
                  <Flame className="w-5 h-5 text-amber-700" />
                </div>
                <h3 className="font-bold text-amber-900 text-sm mb-1">1. Phong Tục & Lễ Hội</h3>
                <p className="text-[11px] text-slate-500 mb-3">Customs & Festivals</p>
                <ul className="text-xs space-y-1.5 text-slate-700">
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-500 font-bold">•</span>
                    <span><strong>Longevity party:</strong> Lễ mừng thọ cho ông bà khi tròn 70, 80, 90 tuổi.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-500 font-bold">•</span>
                    <span><strong>Bamboo pole:</strong> Cây nêu ngày Tết xua đuổi điều xui xẻo (chase away bad luck).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-500 font-bold">•</span>
                    <span><strong>Whale worship:</strong> Lễ hội Nghinh Ông thờ Cá Voi thần hộ mệnh của ngư dân.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-500 font-bold">•</span>
                    <span><strong>Food offerings:</strong> Mâm cỗ cúng thờ phụng tổ tiên (worship ancestors).</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 2: Etiquette & Moral Values */}
              <div className="bg-white rounded-2xl p-5 border border-rose-200 shadow-xs hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-black mb-3">
                  <Heart className="w-5 h-5 text-rose-700" />
                </div>
                <h3 className="font-bold text-rose-900 text-sm mb-1">2. Ứng Xử & Đạo Lý</h3>
                <p className="text-[11px] text-slate-500 mb-3">Table Manners & Values</p>
                <ul className="text-xs space-y-1.5 text-slate-700">
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-500 font-bold">•</span>
                    <span><strong>Respect the elderly:</strong> Hiếu kính người già, mời người lớn ăn trước.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-500 font-bold">•</span>
                    <span><strong>Pass with both hands:</strong> Đưa bát và nhận đồ bằng cả 2 tay.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-500 font-bold">•</span>
                    <span><strong>Don’t stick chopsticks:</strong> Không cắm đũa thẳng đứng vào bát cơm (kiêng kỵ).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-500 font-bold">•</span>
                    <span><strong>Family reunion:</strong> Tết là dịp cả nhà đoàn tụ ấm áp.</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 3: Grammar Zero Article */}
              <div className="bg-white rounded-2xl p-5 border border-blue-200 shadow-xs hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-black mb-3">
                  <Zap className="w-5 h-5 text-blue-700" />
                </div>
                <h3 className="font-bold text-blue-900 text-sm mb-1">3. Ngữ Pháp: Zero Article</h3>
                <p className="text-[11px] text-slate-500 mb-3">Không Dùng Mạo Từ (Ø)</p>
                <ul className="text-xs space-y-1.5 text-slate-700">
                  <li className="flex items-start gap-1.5">
                    <span className="text-blue-500 font-bold">•</span>
                    <span><strong>Danh từ số nhiều chung:</strong> Dogs are friendly, Children like toys.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-blue-500 font-bold">•</span>
                    <span><strong>Danh từ không đếm được:</strong> Milk is healthy, Music heals.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-blue-500 font-bold">•</span>
                    <span><strong>Bữa ăn:</strong> have breakfast, have lunch, have dinner.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-blue-500 font-bold">•</span>
                    <span><strong>Phương tiện với "by":</strong> by air, by bus, by car, by train.</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 4: Pronunciation /n/ vs /ŋ/ */}
              <div className="bg-white rounded-2xl p-5 border border-emerald-200 shadow-xs hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black mb-3">
                  <Volume2 className="w-5 h-5 text-emerald-700" />
                </div>
                <h3 className="font-bold text-emerald-900 text-sm mb-1">4. Ngữ Âm: Âm /n/ & /ŋ/</h3>
                <p className="text-[11px] text-slate-500 mb-3">Cặp Phụ Âm Mũi</p>
                <ul className="text-xs space-y-1.5 text-slate-700">
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span><strong>Âm /n/:</strong> Đầu lưỡi chạm chân răng trên (thin, son, run, ceremony).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span><strong>Âm /ŋ/:</strong> Cuống lưỡi chạm ngạc mềm sau (thing, song, spring, offering).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span><strong>Cặp từ phân biệt:</strong> thin vs thing, son vs song, kin vs king, run vs rung.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Action Buttons to Jump Into Lessons */}
            <div className="mt-6 pt-6 border-t border-amber-200/60 flex items-center justify-between flex-wrap gap-3">
              <span className="text-xs text-slate-500">
                Nhấn vào từng bài học phía dưới hoặc thanh trên để khám phá nội dung chi tiết SGK:
              </span>
              <button
                onClick={() => setActiveLesson('getting_started')}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Bắt đầu Bài 1: Getting Started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 1: GETTING STARTED (Pages 50-51) */}
      {activeLesson === 'getting_started' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Trang 50 - 51 Sách Giáo Khoa</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                1. Getting Started: A Longevity Party (Lễ Mừng Thọ)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Nick đến nhà Mai và cùng tham dự lễ mừng thọ bà của Mai. Hãy cùng lắng nghe cuộc đối thoại và học cách phân biệt Phong tục (Custom) & Truyền thống (Tradition)!
              </p>
            </div>

            {/* Dialogue Box */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-rose-600" />
                  <span>Đoạn hội thoại mẫu (Audio TTS & Dịch nghĩa)</span>
                </h3>
                <span className="text-[11px] text-slate-500">Nhấn vào loa để nghe từng câu thoại</span>
              </div>

              <div className="space-y-3">
                {[
                  {
                    speaker: 'Nick',
                    en: 'Happy birthday to your grandmother, Mai! She looks so radiant and happy!',
                    vi: 'Chúc mừng sinh nhật bà của cậu nhé, Mai! Trông bà rạng rỡ và hạnh phúc quá!',
                    color: 'text-blue-700 bg-blue-50 border-blue-200'
                  },
                  {
                    speaker: 'Mai',
                    en: 'Thank you, Nick! Actually, we are celebrating her 80th longevity party today.',
                    vi: 'Cảm ơn Nick nhé! Thật ra hôm nay gia đình tớ đang tổ chức lễ mừng thọ 80 tuổi cho bà đấy.',
                    color: 'text-rose-700 bg-rose-50 border-rose-200'
                  },
                  {
                    speaker: 'Nick',
                    en: 'A longevity party? What is that exactly?',
                    vi: 'Lễ mừng thọ á? Chính xác đó là lễ gì vậy?',
                    color: 'text-blue-700 bg-blue-50 border-blue-200'
                  },
                  {
                    speaker: 'Mai',
                    en: 'It’s a traditional celebration for elderly people when they turn 70, 80, or 90. Family members gather to wish them good health, peace, and long life.',
                    vi: 'Đó là một lễ kỷ niệm truyền thống dành cho người cao tuổi khi họ bước sang tuổi 70, 80, hoặc 90. Con cháu sum họp để chúc ông bà sức khỏe, an khang và trường thọ.',
                    color: 'text-rose-700 bg-rose-50 border-rose-200'
                  },
                  {
                    speaker: 'Nick',
                    en: 'That’s wonderful! Is that a custom or a tradition in Viet Nam?',
                    vi: 'Tuyệt vời quá! Đó là một phong tục hay một truyền thống ở Việt Nam vậy?',
                    color: 'text-blue-700 bg-blue-50 border-blue-200'
                  },
                  {
                    speaker: 'Mai',
                    en: 'Both! Respecting older people is a deep-rooted tradition, while holding a longevity party is a popular custom across many Vietnamese families.',
                    vi: 'Cả hai luôn đấy! Kính trọng người lớn tuổi là một truyền thống lâu đời, trong khi tổ chức tiệc mừng thọ là một phong tục phổ biến ở nhiều gia đình Việt.',
                    color: 'text-rose-700 bg-rose-50 border-rose-200'
                  }
                ].map((item, idx) => (
                  <div key={idx} className={`p-3 rounded-xl border ${item.color} flex items-start justify-between gap-3`}>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-xs uppercase tracking-wider">{item.speaker}:</span>
                        <p className="text-xs sm:text-sm font-semibold">{item.en}</p>
                      </div>
                      <p className="text-xs text-slate-500 italic pl-1">{item.vi}</p>
                    </div>
                    <button
                      onClick={() => speakText(item.en)}
                      className={`p-1.5 rounded-lg shrink-0 transition cursor-pointer ${
                        activeSpeakingText === item.en ? 'bg-rose-500 text-white' : 'hover:bg-white text-slate-600'
                      }`}
                      title="Nghe phát âm"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Concept Clarifier: Custom vs Tradition */}
            <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-amber-900 text-sm flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-700" />
                  <span>Phân Biệt Cực Dễ: Custom (Phong tục) vs Tradition (Truyền thống)</span>
                </h3>
                <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">Mẹo thi SGK</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-white p-4 rounded-xl border border-amber-200/80 shadow-2xs">
                  <div className="font-bold text-amber-800 text-sm mb-1 flex items-center gap-1.5">
                    <span>📌 Custom (Phong tục)</span>
                  </div>
                  <p className="text-slate-600 mb-2 leading-relaxed">
                    Cách làm, thói quen sinh hoạt đã được chấp nhận của một cá nhân, gia đình hoặc một cộng đồng nhỏ. Thường ngắn hạn hơn.
                  </p>
                  <div className="bg-amber-50 p-2 rounded-lg font-semibold text-amber-900">
                    Ví dụ: Ăn tối cùng gia đình vào tối Chủ nhật; nướng bánh xốp mừng thọ.
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-rose-200/80 shadow-2xs">
                  <div className="font-bold text-rose-800 text-sm mb-1 flex items-center gap-1.5">
                    <span>🏛️ Tradition (Truyền thống)</span>
                  </div>
                  <p className="text-slate-600 mb-2 leading-relaxed">
                    Niềm tin, phong tục hoặc quy tắc đạo đức được lưu truyền qua <strong>nhiều thế hệ (generations)</strong> trong thời gian dài.
                  </p>
                  <div className="bg-rose-50 p-2 rounded-lg font-semibold text-rose-900">
                    Ví dụ: Thờ cúng tổ tiên (worship ancestors); kính trọng người cao tuổi (respect the elderly).
                  </div>
                </div>
              </div>

              {/* Interactive Sorting Drill */}
              <div className="mt-4 pt-4 border-t border-amber-200/70 space-y-3">
                <p className="text-xs font-bold text-slate-800">
                  🎯 Thử thách kéo thả / lựa chọn: Hãy bấm phân loại các hoạt động sau là Custom hay Tradition:
                </p>
                <div className="space-y-2">
                  {[
                    { id: 1, text: 'Worshipping ancestors (Thờ cúng tổ tiên qua hàng trăm năm)', correct: 'tradition' },
                    { id: 2, text: 'Having a family meal every Sunday evening (Ăn cơm gia đình vào mỗi tối Chủ nhật)', correct: 'custom' },
                    { id: 3, text: 'Respecting teachers and the elderly (Tôn sư trọng đạo, kính trên nhường dưới)', correct: 'tradition' },
                    { id: 4, text: 'Baking a longevity sponge cake for grandmother (Nướng bánh bông lan mừng thọ bà)', correct: 'custom' },
                  ].map((item) => {
                    const chosen = customTraditionSort[item.id];
                    const isCorrect = chosen === item.correct;
                    return (
                      <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-white rounded-xl border border-slate-200 text-xs">
                        <span className="font-medium text-slate-800">{item.text}</span>
                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => setCustomTraditionSort({ ...customTraditionSort, [item.id]: 'custom' })}
                            className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                              chosen === 'custom' 
                                ? chosen === item.correct ? 'bg-emerald-600 text-white' : 'bg-red-500 text-white' 
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                            }`}
                          >
                            Custom
                          </button>
                          <button
                            onClick={() => setCustomTraditionSort({ ...customTraditionSort, [item.id]: 'tradition' })}
                            className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                              chosen === 'tradition' 
                                ? chosen === item.correct ? 'bg-emerald-600 text-white' : 'bg-red-500 text-white' 
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                            }`}
                          >
                            Tradition
                          </button>
                          {chosen && (
                            <span className="text-[11px] font-bold">
                              {isCorrect ? '✅ Đúng!' : '❌ Chưa chính xác'}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* True / False Comprehension Exercise (Page 51) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Kiểm tra đọc hiểu bài khóa: Đúng (True) hay Sai (False)? (Trang 51 SGK)</span>
              </h3>
              <div className="space-y-3">
                {[
                  {
                    id: 1,
                    q: '1. Mai’s grandmother is celebrating her 80th longevity party.',
                    correct: true,
                    explain: 'Đúng, trong bài Mai nói: "Actually, we are celebrating her 80th longevity party today."'
                  },
                  {
                    id: 2,
                    q: '2. A longevity party is only held when someone turns 50 years old.',
                    correct: false,
                    explain: 'Sai, tiệc mừng thọ dành cho người từ 70, 80 hoặc 90 tuổi trở lên.'
                  },
                  {
                    id: 3,
                    q: '3. Respecting older people is a deep-rooted tradition in Viet Nam.',
                    correct: true,
                    explain: 'Đúng, kính trọng người già là truyền thống lâu đời của người Việt.'
                  },
                  {
                    id: 4,
                    q: '4. Nick has attended many longevity parties in his hometown before.',
                    correct: false,
                    explain: 'Sai, Nick hỏi: "A longevity party? What is that exactly?" cho thấy cậu ấy chưa từng biết tới.'
                  }
                ].map((item) => {
                  const chosen = gsTfAnswers[item.id];
                  return (
                    <div key={item.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="font-semibold text-slate-800">{item.q}</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setGsTfAnswers({ ...gsTfAnswers, [item.id]: true })}
                            className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                              chosen === true
                                ? chosen === item.correct ? 'bg-emerald-600 text-white' : 'bg-red-500 text-white'
                                : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            True (Đúng)
                          </button>
                          <button
                            onClick={() => setGsTfAnswers({ ...gsTfAnswers, [item.id]: false })}
                            className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                              chosen === false
                                ? chosen === item.correct ? 'bg-emerald-600 text-white' : 'bg-red-500 text-white'
                                : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            False (Sai)
                          </button>
                        </div>
                      </div>
                      {chosen !== undefined && (
                        <p className={`text-[11px] ${chosen === item.correct ? 'text-emerald-700' : 'text-red-600'} font-medium`}>
                          {item.explain}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CLOSER LOOK 1 (Page 52) */}
      {activeLesson === 'closer_look_1' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold mb-2">
                <Volume2 className="w-3.5 h-3.5" />
                <span>Trang 52 Sách Giáo Khoa</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                2. A Closer Look 1: Từ Vựng Trọng Tâm & Ngữ Âm /n/ - /ŋ/
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Làm chủ bộ từ vựng phong tục tập quán ngày lễ truyền thống và rèn luyện phân biệt 2 phụ âm mũi cực kỳ dễ nhầm lẫn: /n/ và /ŋ/!
              </p>
            </div>

            {/* Core Vocabulary Grid */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Bộ Từ Vựng Nổi Bật (Chạm để nghe phát âm)</span>
                </h3>
                <span className="text-xs text-slate-500">8 cụm từ xuất hiện nhiều nhất trong đề thi</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { en: 'worship ancestors', ipa: '/ˈwɜːʃɪp ˈænsestəz/', vi: 'thờ cúng tổ tiên', icon: '🪔' },
                  { en: 'bamboo pole', ipa: '/ˌbæmˈbuː pəʊl/', vi: 'cây nêu ngày Tết', icon: '🎋' },
                  { en: 'food offerings', ipa: '/fuːd ˈɒfərɪŋz/', vi: 'mâm cỗ cúng gia tiên', icon: '🍲' },
                  { en: 'chase away bad luck', ipa: '/tʃeɪs əˈweɪ bæd lʌk/', vi: 'xua đuổi điều xui xẻo', icon: '🔔' },
                  { en: 'longevity party', ipa: '/lɒnˈdʒevəti ˈpɑːti/', vi: 'lễ mừng thọ người cao tuổi', icon: '🎂' },
                  { en: 'break with tradition', ipa: '/breɪk wɪð trəˈdɪʃn/', vi: 'phá cách truyền thống', icon: '✨' },
                  { en: 'respect the elderly', ipa: '/rɪˈspekt ði ˈeldəli/', vi: 'kính trọng người già', icon: '👵' },
                  { en: 'table manners', ipa: '/ˈteɪbl ˈmænəz/', vi: 'phép lịch sự trên bàn ăn', icon: '🥢' },
                ].map((w, idx) => (
                  <div
                    key={idx}
                    onClick={() => speakText(w.en)}
                    className="p-3.5 bg-gradient-to-br from-slate-50 to-amber-50/30 rounded-2xl border border-slate-200/80 hover:border-amber-400 hover:shadow-md transition cursor-pointer group space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xl">{w.icon}</span>
                      <button className="p-1 rounded-md text-slate-400 group-hover:text-amber-600 transition">
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <h4 className="font-bold text-slate-800 text-xs group-hover:text-amber-700 transition">{w.en}</h4>
                    <p className="text-[11px] font-mono text-amber-800 font-semibold">{w.ipa}</p>
                    <div className="text-[10px] text-amber-900 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                      {getReadingTip(w.en, w.ipa)}
                    </div>
                    <p className="text-xs text-slate-700 font-medium">{w.vi}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Phonetics Lab: /n/ vs /ŋ/ */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-3xl p-5 sm:p-6 space-y-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="font-extrabold text-emerald-900 text-base flex items-center gap-2">
                    <Volume2 className="w-5 h-5 text-emerald-600" />
                    <span>Phonetics Lab: Phân Biệt Âm /n/ và Âm /ŋ/ (Trang 52 SGK)</span>
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Cả hai đều là phụ âm mũi (nasal consonants), luồng hơi đi qua khoang mũi. Khác nhau ở vị trí tiếp xúc của lưỡi!
                  </p>
                </div>
                <span className="px-3 py-1 bg-emerald-600 text-white rounded-full text-xs font-bold shadow-xs">
                  Trọng tâm phát âm Học kỳ 1
                </span>
              </div>

              {/* Anatomy Guide */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-emerald-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-emerald-700 font-mono">/n/ (Alveolar Nasal)</span>
                    <button
                      onClick={() => speakText('thin son run ceremony')}
                      className="px-2 py-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Nghe mẫu</span>
                    </button>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Vị trí lưỡi:</strong> Đặt <strong>đầu lưỡi</strong> chạm vào nướu/lợi phía sau răng cửa hàm trên. Luồng hơi thoát ra mũi.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {[
                      { word: 'thin', ipa: '/θɪn/', vi: 'mảnh khảnh' },
                      { word: 'son', ipa: '/sʌn/', vi: 'con trai' },
                      { word: 'ten', ipa: '/ten/', vi: 'số mười' },
                      { word: 'kin', ipa: '/kɪn/', vi: 'dòng họ' },
                      { word: 'run', ipa: '/rʌn/', vi: 'chạy' },
                      { word: 'ceremony', ipa: '/ˈserəməni/', vi: 'nghi lễ' }
                    ].map((item) => (
                      <div
                        key={item.word}
                        onClick={() => speakText(item.word)}
                        className="p-2.5 bg-emerald-50/80 rounded-xl border border-emerald-200/80 cursor-pointer hover:bg-emerald-100/90 transition flex flex-col justify-between space-y-1 shadow-2xs"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-xs text-emerald-950">{item.word}</span>
                          <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
                        </div>
                        <div className="text-[10px] font-mono text-emerald-800 font-semibold">{item.ipa}</div>
                        <div className="text-[10px] text-amber-900 bg-white/90 px-1.5 py-0.5 rounded border border-amber-200/80">
                          {getReadingTip(item.word, item.ipa)}
                        </div>
                        <div className="text-[11px] text-slate-700 font-medium">👉 {item.vi}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-teal-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-teal-700 font-mono">/ŋ/ (Velar Nasal)</span>
                    <button
                      onClick={() => speakText('thing song rung offering')}
                      className="px-2 py-1 bg-teal-100 hover:bg-teal-200 text-teal-800 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Nghe mẫu</span>
                    </button>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Vị trí lưỡi:</strong> Nâng <strong>cuống lưỡi</strong> lên chạm vòm miệng mềm (ngạc mềm sau), đầu lưỡi hạ thấp không chạm răng.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {[
                      { word: 'thing', ipa: '/θɪŋ/', vi: 'đồ vật' },
                      { word: 'song', ipa: '/sɒŋ/', vi: 'bài hát' },
                      { word: 'ring', ipa: '/rɪŋ/', vi: 'chiếc nhẫn / rung' },
                      { word: 'king', ipa: '/kɪŋ/', vi: 'nhà vua' },
                      { word: 'running', ipa: '/ˈrʌnɪŋ/', vi: 'đang chạy' },
                      { word: 'offering', ipa: '/ˈɒfərɪŋ/', vi: 'vật cúng, lễ vật' }
                    ].map((item) => (
                      <div
                        key={item.word}
                        onClick={() => speakText(item.word)}
                        className="p-2.5 bg-teal-50/80 rounded-xl border border-teal-200/80 cursor-pointer hover:bg-teal-100/90 transition flex flex-col justify-between space-y-1 shadow-2xs"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-xs text-teal-950">{item.word}</span>
                          <Volume2 className="w-3.5 h-3.5 text-teal-600" />
                        </div>
                        <div className="text-[10px] font-mono text-teal-800 font-semibold">{item.ipa}</div>
                        <div className="text-[10px] text-amber-900 bg-white/90 px-1.5 py-0.5 rounded border border-amber-200/80">
                          {getReadingTip(item.word, item.ipa)}
                        </div>
                        <div className="text-[11px] text-slate-700 font-medium">👉 {item.vi}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive Basket Game: Sort the Words into /n/ or /ŋ/ */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="font-bold text-slate-800 text-xs">
                    🎮 Minigame: Nhấn nghe và phân loại từng từ vào giỏ /n/ hoặc /ŋ/:
                  </span>
                  <button
                    onClick={() => setPhoneticBasket({})}
                    className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Làm lại</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { word: 'thin', sound: '/n/' as const, meaning: 'gầy mảnh' },
                    { word: 'thing', sound: '/ŋ/' as const, meaning: 'đồ vật' },
                    { word: 'son', sound: '/n/' as const, meaning: 'con trai' },
                    { word: 'song', sound: '/ŋ/' as const, meaning: 'bài hát' },
                    { word: 'run', sound: '/n/' as const, meaning: 'chạy' },
                    { word: 'rung', sound: '/ŋ/' as const, meaning: 'bậc thang, đã reo' },
                    { word: 'ceremony', sound: '/n/' as const, meaning: 'nghi lễ' },
                    { word: 'offering', sound: '/ŋ/' as const, meaning: 'lễ vật' },
                  ].map((item) => {
                    const current = phoneticBasket[item.word];
                    const isRight = current === item.sound;
                    return (
                      <div key={item.word} className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-center space-y-1.5">
                        <div className="flex items-center justify-center gap-1">
                          <span className="font-bold text-xs text-slate-900">{item.word}</span>
                          <button
                            onClick={() => speakText(item.word)}
                            className="p-1 rounded text-slate-400 hover:text-emerald-600 cursor-pointer"
                            title="Nghe"
                          >
                            <Volume2 className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-[10px] text-slate-500">{item.meaning}</p>
                        <div className="flex justify-center gap-1 pt-1">
                          <button
                            onClick={() => setPhoneticBasket({ ...phoneticBasket, [item.word]: '/n/' })}
                            className={`px-2 py-0.5 rounded text-[11px] font-bold font-mono transition cursor-pointer ${
                              current === '/n/'
                                ? isRight ? 'bg-emerald-600 text-white' : 'bg-red-500 text-white'
                                : 'bg-white border border-slate-300 hover:bg-slate-100 text-slate-700'
                            }`}
                          >
                            /n/
                          </button>
                          <button
                            onClick={() => setPhoneticBasket({ ...phoneticBasket, [item.word]: '/ŋ/' })}
                            className={`px-2 py-0.5 rounded text-[11px] font-bold font-mono transition cursor-pointer ${
                              current === '/ŋ/'
                                ? isRight ? 'bg-teal-600 text-white' : 'bg-red-500 text-white'
                                : 'bg-white border border-slate-300 hover:bg-slate-100 text-slate-700'
                            }`}
                          >
                            /ŋ/
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: CLOSER LOOK 2 (Page 53) */}
      {activeLesson === 'closer_look_2' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-2">
                <Zap className="w-3.5 h-3.5" />
                <span>Trang 53 Sách Giáo Khoa</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                3. A Closer Look 2: Quy Tắc Zero Article (Không Dùng Mạo Từ - Kí Hiệu Ø)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Làm chủ mạo từ trong Tiếng Anh: Khi nào dùng <strong>a / an</strong>, khi nào dùng <strong>the</strong>, và khi nào áp dụng <strong>Zero article (Ø)</strong>!
              </p>
            </div>

            {/* Zero Article Golden Rules */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-3xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-blue-900 text-base flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <span>Bí Kíp 6 Trường Hợp Vàng KHÔNG DÙNG MẠO TỪ (Zero Article Ø)</span>
                </h3>
                <span className="text-xs font-bold text-blue-800 bg-blue-100 px-2.5 py-1 rounded-lg">
                  Kí hiệu: Ø
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                <div className="bg-white p-3.5 rounded-2xl border border-blue-100 shadow-2xs space-y-1">
                  <div className="font-bold text-blue-800 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-[10px]">1</span>
                    <span>Danh từ số nhiều chỉ chung</span>
                  </div>
                  <p className="text-slate-600 text-[11px]">Nói về một loài, một nhóm đối tượng chung chung.</p>
                  <p className="text-blue-900 font-semibold bg-blue-50/60 p-1.5 rounded-lg text-[11px]">
                    👉 <strong>Ø Children</strong> like toys.<br/>
                    👉 <strong>Ø Dogs</strong> are loyal.
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-blue-100 shadow-2xs space-y-1">
                  <div className="font-bold text-blue-800 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-[10px]">2</span>
                    <span>Danh từ không đếm được chung</span>
                  </div>
                  <p className="text-slate-600 text-[11px]">Khái niệm trừu tượng, chất liệu, thực phẩm nói chung.</p>
                  <p className="text-blue-900 font-semibold bg-blue-50/60 p-1.5 rounded-lg text-[11px]">
                    👉 <strong>Ø Water</strong> is necessary for life.<br/>
                    👉 <strong>Ø Music</strong> makes us happy.
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-blue-100 shadow-2xs space-y-1">
                  <div className="font-bold text-blue-800 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-[10px]">3</span>
                    <span>Các bữa ăn hàng ngày</span>
                  </div>
                  <p className="text-slate-600 text-[11px]">Các bữa ăn chính sau động từ have, for...</p>
                  <p className="text-blue-900 font-semibold bg-blue-50/60 p-1.5 rounded-lg text-[11px]">
                    👉 have <strong>Ø breakfast</strong><br/>
                    👉 have <strong>Ø lunch / Ø dinner</strong>
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-blue-100 shadow-2xs space-y-1">
                  <div className="font-bold text-blue-800 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-[10px]">4</span>
                    <span>Thứ, Tháng, Mùa, Năm</span>
                  </div>
                  <p className="text-slate-600 text-[11px]">Thời gian theo lịch, tên ngày tháng.</p>
                  <p className="text-blue-900 font-semibold bg-blue-50/60 p-1.5 rounded-lg text-[11px]">
                    👉 on <strong>Ø Monday</strong><br/>
                    👉 in <strong>Ø October</strong>, in <strong>Ø spring</strong>
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-blue-100 shadow-2xs space-y-1">
                  <div className="font-bold text-blue-800 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-[10px]">5</span>
                    <span>Phương tiện với giới từ "by"</span>
                  </div>
                  <p className="text-slate-600 text-[11px]">Đi lại bằng phương tiện chung sau "by".</p>
                  <p className="text-blue-900 font-semibold bg-blue-50/60 p-1.5 rounded-lg text-[11px]">
                    👉 travel by <strong>Ø air</strong> (đường không)<br/>
                    👉 go by <strong>Ø car / Ø bus / Ø train</strong>
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-blue-100 shadow-2xs space-y-1">
                  <div className="font-bold text-blue-800 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-[10px]">6</span>
                    <span>Môn thể thao & trò chơi</span>
                  </div>
                  <p className="text-slate-600 text-[11px]">Các hoạt động vui chơi, thể thao.</p>
                  <p className="text-blue-900 font-semibold bg-blue-50/60 p-1.5 rounded-lg text-[11px]">
                    👉 play <strong>Ø football</strong><br/>
                    👉 play <strong>Ø chess / Ø badminton</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Grammar Arena: Article Practice */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>Interactive Grammar Arena: Chọn Mạo Từ Thích Hợp [ a / an / the / Ø ] (Trang 53 SGK)</span>
                </h3>
                <span className="text-xs text-slate-500">Bấm chọn để kiểm tra ngay đáp án</span>
              </div>

              <div className="space-y-3">
                {[
                  {
                    id: 1,
                    sentence: '1. We travelled to Can Tho by ______ air last week.',
                    options: ['a', 'an', 'the', 'Ø'],
                    correct: 'Ø',
                    explanation: 'Sau giới từ "by" chỉ phương tiện (by air, by bus) luôn dùng Zero article (Ø).'
                  },
                  {
                    id: 2,
                    sentence: '2. The Ok Om Bok Festival takes place in ______ October.',
                    options: ['a', 'an', 'the', 'Ø'],
                    correct: 'Ø',
                    explanation: 'Tên tháng (in October) không dùng mạo từ.'
                  },
                  {
                    id: 3,
                    sentence: '3. My mother bought ______ bamboo pole to decorate our garden.',
                    options: ['a', 'an', 'the', 'Ø'],
                    correct: 'a',
                    explanation: 'Nhắc đến một cây nêu lần đầu tiên (danh từ số ít đếm được) dùng "a".'
                  },
                  {
                    id: 4,
                    sentence: '4. ______ bamboo pole was very tall and beautifully decorated.',
                    options: ['a', 'an', 'the', 'Ø'],
                    correct: 'the',
                    explanation: 'Cây nêu đã được nhắc đến ở câu trước nên lần thứ hai xác định dùng "the".'
                  },
                  {
                    id: 5,
                    sentence: '5. I always have ______ breakfast with my family before 7 a.m.',
                    options: ['a', 'an', 'the', 'Ø'],
                    correct: 'Ø',
                    explanation: 'Tên bữa ăn hằng ngày (have breakfast) dùng Zero article (Ø).'
                  },
                  {
                    id: 6,
                    sentence: '6. ______ Vietnamese people have a rich cultural tradition.',
                    options: ['a', 'an', 'the', 'Ø'],
                    correct: 'Ø',
                    explanation: 'Nói về người Việt Nam nói chung dùng Zero article (Ø).'
                  }
                ].map((item) => {
                  const chosen = articleAnswers[item.id];
                  const isDone = chosen !== undefined;
                  const isRight = chosen === item.correct;
                  return (
                    <div key={item.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="font-semibold text-slate-800 text-xs sm:text-sm">{item.sentence}</span>
                        <div className="flex items-center gap-1.5">
                          {item.options.map((opt) => (
                            <button
                              key={opt}
                              onClick={() => setArticleAnswers({ ...articleAnswers, [item.id]: opt })}
                              className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer font-mono ${
                                chosen === opt
                                  ? opt === item.correct ? 'bg-emerald-600 text-white' : 'bg-red-500 text-white'
                                  : 'bg-white border border-slate-300 hover:bg-slate-100 text-slate-700'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                      {isDone && (
                        <p className={`text-[11px] font-semibold ${isRight ? 'text-emerald-700' : 'text-red-600'}`}>
                          {isRight ? '🎉 Chính xác!' : '💡 Gợi ý giải thích:'} {item.explanation}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: COMMUNICATION (Page 54) */}
      {activeLesson === 'communication' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold mb-2">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Trang 54 Sách Giáo Khoa</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                4. Communication: Lời Khuyên & Phép Lịch Sự Bàn Ăn (Table Manners)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Học các mẫu câu đưa ra lời khuyên lịch sự (Giving advice) và nắm vững các phép tắc ăn uống truyền thống của người Việt!
              </p>
            </div>

            {/* Expression Box */}
            <div className="bg-gradient-to-br from-rose-50 to-orange-50 border border-rose-200 rounded-3xl p-5 sm:p-6 space-y-4">
              <h3 className="font-extrabold text-rose-950 text-sm flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span>Mẫu Câu Đưa Ra Lời Khuyên Về Phong Tục (Giving Advice)</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="bg-white p-3 rounded-xl border border-rose-200 space-y-1">
                  <span className="font-bold text-rose-800">1. You should / shouldn’t...</span>
                  <p className="text-slate-600">Bạn nên / không nên làm gì...</p>
                  <p className="text-slate-800 font-semibold italic">"You should wait for the host."</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-rose-200 space-y-1">
                  <span className="font-bold text-rose-800">2. It’s a good idea to...</span>
                  <p className="text-slate-600">Rất nên / Đó là ý kiến hay khi...</p>
                  <p className="text-slate-800 font-semibold italic">"It's a good idea to pass bowls with both hands."</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-rose-200 space-y-1">
                  <span className="font-bold text-rose-800">3. Perhaps you should...</span>
                  <p className="text-slate-600">Có lẽ bạn nên (nhẹ nhàng)...</p>
                  <p className="text-slate-800 font-semibold italic">"Perhaps you should taste a little first."</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-rose-200 space-y-1">
                  <span className="font-bold text-rose-800">4. Don’t... (Mệnh lệnh cấm)</span>
                  <p className="text-slate-600">Đừng bao giờ làm điều kiêng kỵ...</p>
                  <p className="text-slate-800 font-semibold italic">"Don't stick chopsticks upright!"</p>
                </div>
              </div>
            </div>

            {/* Vietnamese Table Manners Guide */}
            <div className="space-y-4">
              <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                <Smile className="w-4 h-4 text-emerald-600" />
                <span>4 Quy Tắc Vàng Trên Bàn Ăn Người Việt (Vietnamese Table Manners)</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: '1. Đợi người lớn tuổi ăn trước (Wait for the elderly)',
                    rule: 'You should wait for the oldest person to start eating first.',
                    desc: 'Người trẻ tuổi mời người lớn tuổi và đợi các cụ/bố mẹ gắp trước để thể hiện lòng kính trọng.',
                    tag: 'Kính trên nhường dưới',
                    tagColor: 'bg-emerald-100 text-emerald-800'
                  },
                  {
                    title: '2. Đưa đồ bằng hai tay (Pass with both hands)',
                    rule: 'It’s a good idea to pass and receive bowls or dishes with both hands.',
                    desc: 'Dùng cả hai tay khi mời nước, đưa bát cơm hoặc gắp thức ăn cho người khác để thể hiện sự lễ độ.',
                    tag: 'Phép lịch sự',
                    tagColor: 'bg-blue-100 text-blue-800'
                  },
                  {
                    title: '3. KHÔNG cắm đũa thẳng đứng (Don’t stick chopsticks upright)',
                    rule: 'Never stick chopsticks straight into the rice bowl.',
                    desc: 'Cắm đũa thẳng đứng vào bát cơm giống bát hương thờ cúng người đã khuất, là điều tối kỵ.',
                    tag: 'Điều kiêng kỵ',
                    tagColor: 'bg-red-100 text-red-800'
                  },
                  {
                    title: '4. Ăn uống lịch thiệp (Chew quietly)',
                    rule: 'You shouldn’t make loud noise while chewing.',
                    desc: 'Không nhai nhóp nhép to tiếng và không vừa ngậm thức ăn vừa nói chuyện.',
                    tag: 'Văn minh bàn ăn',
                    tagColor: 'bg-amber-100 text-amber-800'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.tagColor}`}>{item.tag}</span>
                      <button
                        onClick={() => speakText(item.rule)}
                        className="text-slate-400 hover:text-rose-600 cursor-pointer"
                        title="Nghe câu"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <h4 className="font-bold text-slate-800 text-xs sm:text-sm">{item.title}</h4>
                    <p className="text-xs font-semibold text-rose-800 italic">{item.rule}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Situational Advice Practice */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
              <h4 className="font-bold text-slate-800 text-xs sm:text-sm">
                🎯 Thử thách ứng xử: Bạn sẽ khuyên một người bạn nước ngoài như thế nào?
              </h4>
              <div className="space-y-2">
                {[
                  {
                    id: 1,
                    sit: 'John định cắm đôi đũa thẳng đứng vào bát cơm.',
                    opts: [
                      'A. Don’t stick your chopsticks upright into the bowl.',
                      'B. You should eat with your hands.'
                    ],
                    correct: 'A. Don’t stick your chopsticks upright into the bowl.',
                    exp: 'Nhắc nhở bạn không được cắm đũa thẳng đứng.'
                  },
                  {
                    id: 2,
                    sit: 'Anna muốn đưa bát cơm cho bà nội của bạn.',
                    opts: [
                      'A. It’s a good idea to pass the bowl with both hands.',
                      'B. Throw the bowl quickly on the table.'
                    ],
                    correct: 'A. It’s a good idea to pass the bowl with both hands.',
                    exp: 'Khuyên bạn đưa bát bằng cả hai tay để thể hiện sự lễ phép.'
                  }
                ].map((item) => {
                  const chosen = mannerAnswers[item.id];
                  return (
                    <div key={item.id} className="p-3 bg-white rounded-xl border border-slate-200 text-xs space-y-2">
                      <p className="font-semibold text-slate-800">{item.sit}</p>
                      <div className="flex flex-col sm:flex-row gap-2">
                        {item.opts.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setMannerAnswers({ ...mannerAnswers, [item.id]: opt })}
                            className={`p-2 rounded-lg text-left font-medium transition cursor-pointer ${
                              chosen === opt
                                ? opt === item.correct ? 'bg-emerald-600 text-white' : 'bg-red-500 text-white'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: SKILLS 1 (Page 55) */}
      {activeLesson === 'skills_1' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Trang 55 Sách Giáo Khoa</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                5. Skills 1: Đọc & Nói về Lễ Hội Nghinh Ông Thờ Cá Voi (Whale Worship Festival)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Tìm hiểu phong tục tôn thờ Cá Ông - vị thần hộ mệnh che chở ngư dân miền biển Việt Nam trước sóng to gió lớn!
              </p>
            </div>

            {/* Reading Passage with TTS */}
            <div className="bg-gradient-to-br from-teal-50/50 to-blue-50/50 rounded-2xl p-5 sm:p-6 border border-teal-200/80 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🐋</span>
                  <h3 className="font-extrabold text-teal-950 text-sm sm:text-base">
                    The Whale Worship Festival (Lễ Hội Thờ Cá Ông)
                  </h3>
                </div>
                <button
                  onClick={() => speakText(
                    "The whale is considered the most sacred animal by coastal fishermen in Viet Nam. They affectionately call the whale Lord Whale, or Ca Ong. Fishermen believe that Lord Whale protects them from harsh storms and helps boats find bountiful fish. Whenever a whale dies and washes ashore, the local community holds an elaborate solemn funeral and builds a shrine to honour him. Every year, coastal towns celebrate the Whale Worship Festival with dragon dances, boat racing, and offerings to pray for smooth seas, safety, and prosperity."
                  )}
                  className="px-3 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Nghe toàn bộ bài đọc</span>
                </button>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-xl border border-teal-100 shadow-2xs">
                <p>
                  The whale is considered the most sacred animal by coastal fishermen in Viet Nam. They affectionately call the whale <strong>"Lord Whale"</strong>, or <em>Cá Ông</em>. Fishermen believe that Lord Whale protects them from harsh storms at sea and guides boats safely back to harbour with a bountiful catch.
                </p>
                <p className="text-slate-500 text-xs italic pl-2 border-l-2 border-teal-300">
                  (Cá voi được xem là loài vật thiêng liêng nhất đối với ngư dân miền biển Việt Nam. Họ tôn kính gọi cá voi là "Cá Ông". Ngư dân tin rằng Cá Ông bảo vệ họ khỏi giông bão trên biển và dẫn lối tàu thuyền trở về an toàn với mẻ cá bội thu.)
                </p>
                <p>
                  Whenever a whale dies and washes ashore, the local villagers hold an elaborate solemn funeral and build a temple or shrine to worship him. Every spring, coastal communities celebrate the Whale Worship Festival with joyful dragon dances, boat races, and solemn ceremonies to pray for smooth seas and peaceful voyages.
                </p>
                <p className="text-slate-500 text-xs italic pl-2 border-l-2 border-teal-300">
                  (Mỗi khi có cá voi qua đời và trôi dạt vào bờ, dân làng tổ chức tang lễ trang trọng và lập lăng miếu để thờ cúng. Mỗi mùa xuân, các làng chài tổ chức Lễ hội Nghinh Ông với những màn múa rồng sôi động, đua thuyền và các nghi lễ cầu cho biển lặng sóng êm.)
                </p>
              </div>
            </div>

            {/* Reading Comprehension Questions */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Câu hỏi đọc hiểu bài đọc (Trang 55 SGK)</span>
              </h3>

              <div className="space-y-3">
                {[
                  {
                    id: 1,
                    q: '1. What do Vietnamese coastal fishermen affectionately call the whale?',
                    opts: ['A. Ocean King', 'B. Lord Whale (Ca Ong)', 'C. Sea Monster', 'D. Giant Fish'],
                    correct: 1,
                    exp: 'Ngư dân gọi cá voi là "Lord Whale" (Cá Ông).'
                  },
                  {
                    id: 2,
                    q: '2. Why do fishermen worship Lord Whale?',
                    opts: [
                      'A. Because he is very big and heavy',
                      'B. Because they believe he protects them from harsh storms and brings safety',
                      'C. Because they want to sell whale meat',
                      'D. Because whales can fly'
                    ],
                    correct: 1,
                    exp: 'Ngư dân tin rằng Cá Ông che chở họ khỏi bão táp và mang lại bình an.'
                  },
                  {
                    id: 3,
                    q: '3. What do villagers do when a whale washes ashore?',
                    opts: [
                      'A. They hold a solemn funeral and build a shrine to worship him',
                      'B. They push it back into deep water',
                      'C. They ignore it',
                      'D. They have a barbecue'
                    ],
                    correct: 0,
                    exp: 'Dân làng tổ chức tang lễ trang trọng và lập đền thờ phụng.'
                  },
                  {
                    id: 4,
                    q: '4. What activities are held during the Whale Worship Festival?',
                    opts: [
                      'A. Skiing and skating',
                      'B. Dragon dances, boat racing, and prayer ceremonies',
                      'C. Football matches',
                      'D. Fireworks only'
                    ],
                    correct: 1,
                    exp: 'Lễ hội có múa rồng (dragon dances), đua thuyền (boat racing) và nghi lễ cầu may.'
                  }
                ].map((item) => {
                  const chosen = readingAnswers[item.id];
                  return (
                    <div key={item.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                      <p className="font-bold text-slate-800">{item.q}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.opts.map((opt, oIdx) => (
                          <button
                            key={oIdx}
                            onClick={() => setReadingAnswers({ ...readingAnswers, [item.id]: opt })}
                            className={`p-2 rounded-lg text-left font-medium transition cursor-pointer ${
                              chosen === opt
                                ? oIdx === item.correct ? 'bg-emerald-600 text-white' : 'bg-red-500 text-white'
                                : 'bg-white border border-slate-200 hover:bg-slate-100 text-slate-700'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      {chosen && (
                        <p className="text-[11px] font-semibold text-emerald-700">{item.exp}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: SKILLS 2 (Page 56) */}
      {activeLesson === 'skills_2' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold mb-2">
                <PenTool className="w-3.5 h-3.5" />
                <span>Trang 56 Sách Giáo Khoa</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                6. Skills 2: Nghe Cây Nêu Ngày Tết & Xưởng Luyện Viết Đoạn Văn (80-100 Từ)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Luyện nghe về phong tục dựng cây nêu (Bamboo pole) ngày Tết và tự tay viết đoạn văn đạt điểm tối đa về phong tục gia đình!
              </p>
            </div>

            {/* Listening Section */}
            <div className="bg-purple-50/50 rounded-2xl p-5 border border-purple-200 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Headphones className="w-5 h-5 text-purple-700" />
                  <h3 className="font-extrabold text-purple-900 text-sm sm:text-base">
                    Listening: The Custom of Putting Up a Bamboo Pole (Cây Nêu Ngày Tết)
                  </h3>
                </div>
                <button
                  onClick={() => speakText(
                    "In the past, people put up a tall bamboo pole in the courtyard on New Year's Eve. They decorated it with red lanterns, wind chimes, and origami items. The chimes make sound in the breeze to chase away evil spirits and bad luck. When the pole is taken down after the holiday, the family gathers for a warm feast."
                  )}
                  className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Nghe bài giảng audio</span>
                </button>
              </div>

              {/* Listening MCQs */}
              <div className="space-y-3">
                {[
                  {
                    id: 1,
                    q: '1. When do Vietnamese people traditionally put up a bamboo pole?',
                    opts: ['A. On Mid-Autumn Festival', 'B. On New Year’s Eve (Giao thừa / Trước Tết)', 'C. In summer', 'D. Every Sunday'],
                    correct: 1,
                    exp: 'Cây nêu được dựng vào dịp trước Tết / Giao thừa.'
                  },
                  {
                    id: 2,
                    q: '2. What is the main purpose of putting up a bamboo pole?',
                    opts: [
                      'A. To climb for exercise',
                      'B. To chase away bad luck and evil spirits (Xua đuổi vận xui, ma quỷ)',
                      'C. To dry clothes',
                      'D. To catch birds'
                    ],
                    correct: 1,
                    exp: 'Mục đích tâm linh chính là xua đuổi tà ma và vận xui.'
                  }
                ].map((item) => {
                  const chosen = listenAnswers[item.id];
                  return (
                    <div key={item.id} className="p-3 bg-white rounded-xl border border-purple-100 text-xs space-y-2">
                      <p className="font-bold text-slate-800">{item.q}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.opts.map((opt, oIdx) => (
                          <button
                            key={oIdx}
                            onClick={() => setListenAnswers({ ...listenAnswers, [item.id]: opt })}
                            className={`p-2 rounded-lg text-left font-medium transition cursor-pointer ${
                              chosen === opt
                                ? oIdx === item.correct ? 'bg-purple-600 text-white' : 'bg-red-500 text-white'
                                : 'bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      {chosen && (
                        <p className="text-[11px] font-semibold text-purple-700">{item.exp}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Guided Writing Workbench */}
            <div className="bg-gradient-to-br from-amber-50/50 to-rose-50/50 rounded-2xl p-5 sm:p-6 border border-amber-200 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="font-extrabold text-amber-950 text-base flex items-center gap-2">
                    <PenTool className="w-5 h-5 text-rose-600" />
                    <span>Xưởng Luyện Viết Đoạn Văn (Writing Workbench - Trang 56 SGK)</span>
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Đề bài: Viết một đoạn văn (80 - 100 từ) về một phong tục hoặc truyền thống của gia đình bạn hoặc người Việt Nam.
                  </p>
                </div>
                <button
                  onClick={() => setShowModelWriting(!showModelWriting)}
                  className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{showModelWriting ? 'Ẩn bài mẫu' : 'Xem bài mẫu Band 9'}</span>
                </button>
              </div>

              {/* Model Writing Dropdown */}
              {showModelWriting && (
                <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-sm space-y-3 text-xs leading-relaxed">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="font-bold text-amber-900 text-sm">📝 Bài Viết Mẫu Chuẩn (Family Tradition: Sunday Dinner)</span>
                    <button
                      onClick={() => speakText(
                        "In my family, there is an enjoyable custom that has been kept for many years: having dinner together every Sunday evening. On this day, all members gather at our grandparents' house. My mother and grandmother prepare a hearty feast with traditional dishes like spring rolls and pho. During the meal, we share funny stories about our week and listen to grandparents' advice. We always pass bowls with both hands to show respect. This custom brings us closer together and helps preserve our precious family bond."
                      )}
                      className="px-2 py-1 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-lg font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Volume2 className="w-3 h-3" />
                      <span>Nghe bài mẫu</span>
                    </button>
                  </div>
                  <p className="text-slate-800 font-medium">
                    "In my family, there is an enjoyable custom that has been kept for many years: having dinner together every Sunday evening. On this day, all members gather at our grandparents' house. My mother and grandmother prepare a hearty feast with traditional dishes like spring rolls and pho. During the meal, we share funny stories about our week and listen to grandparents' advice. We always pass bowls with both hands to show respect. This custom brings us closer together and helps preserve our precious family bond."
                  </p>
                  <p className="text-slate-500 italic text-[11px] pt-1 border-t border-slate-100">
                    (Dịch: Trong gia đình tôi có một phong tục ấm áp được gìn giữ nhiều năm nay: cùng nhau ăn tối vào mỗi tối Chủ nhật. Vào ngày này, tất cả thành viên đều tề tựu tại nhà ông bà. Mẹ và bà chuẩn bị một mâm cỗ thịnh soạn với các món ăn truyền thống như nem rán và phở. Trong bữa ăn, chúng tôi chia sẻ những câu chuyện vui trong tuần và lắng nghe lời khuyên của ông bà. Chúng tôi luôn đưa bát bằng cả hai tay để thể hiện sự lễ phép. Phong tục này giúp chúng tôi thêm gắn kết và gìn giữ tình cảm gia đình quý giá.)
                  </p>
                </div>
              )}

              {/* Text Area with Live Word Counter */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-700">Khung soạn thảo bài viết của học sinh:</span>
                  <span className={`font-mono font-bold ${
                    writingEssay.trim().split(/\s+/).filter(Boolean).length >= 80 && writingEssay.trim().split(/\s+/).filter(Boolean).length <= 110
                      ? 'text-emerald-600'
                      : 'text-amber-600'
                  }`}>
                    Số từ: {writingEssay.trim() ? writingEssay.trim().split(/\s+/).filter(Boolean).length : 0} / 80-100 từ
                  </span>
                </div>
                <textarea
                  value={writingEssay}
                  onChange={(e) => setWritingEssay(e.target.value)}
                  placeholder="In my family, there is a meaningful custom/tradition of... (Viết đoạn văn của bạn tại đây...)"
                  className="w-full h-32 p-3.5 bg-white rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-xs leading-relaxed"
                />
              </div>

              {/* 4-Criteria Auto Checklist */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                <div className={`p-2 rounded-lg border flex items-center gap-1.5 ${
                  writingEssay.toLowerCase().includes('custom') || writingEssay.toLowerCase().includes('tradition')
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                    : 'bg-white border-slate-200 text-slate-500'
                }`}>
                  <Check className="w-3.5 h-3.5" />
                  <span>1. Nêu tên phong tục</span>
                </div>
                <div className={`p-2 rounded-lg border flex items-center gap-1.5 ${
                  writingEssay.toLowerCase().includes('when') || writingEssay.toLowerCase().includes('sunday') || writingEssay.toLowerCase().includes('tet')
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                    : 'bg-white border-slate-200 text-slate-500'
                }`}>
                  <Check className="w-3.5 h-3.5" />
                  <span>2. Thời gian / Địa điểm</span>
                </div>
                <div className={`p-2 rounded-lg border flex items-center gap-1.5 ${
                  writingEssay.toLowerCase().includes('gather') || writingEssay.toLowerCase().includes('prepare') || writingEssay.toLowerCase().includes('eat')
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                    : 'bg-white border-slate-200 text-slate-500'
                }`}>
                  <Check className="w-3.5 h-3.5" />
                  <span>3. Hoạt động chính</span>
                </div>
                <div className={`p-2 rounded-lg border flex items-center gap-1.5 ${
                  writingEssay.toLowerCase().includes('important') || writingEssay.toLowerCase().includes('love') || writingEssay.toLowerCase().includes('bond')
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                    : 'bg-white border-slate-200 text-slate-500'
                }`}>
                  <Check className="w-3.5 h-3.5" />
                  <span>4. Ý nghĩa cảm nghĩ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 7: LOOKING BACK & PROJECT (Page 57) */}
      {activeLesson === 'looking_back' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-2">
                <Trophy className="w-3.5 h-3.5" />
                <span>Trang 57 Sách Giáo Khoa</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                7. Looking Back & Project: Thử Thách Mạo Từ & Dự Án Văn Hóa
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Tổng ôn kiến thức toàn bộ Unit 5 và khám phá ý tưởng dự án thực tế "Customs and Traditions Around Us"!
              </p>
            </div>

            {/* Error Finder Challenge */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Thử Thách: Bắt Lỗi Mạo Từ Sai (Article Detective)</span>
              </h3>
              <div className="space-y-2 text-xs">
                {[
                  {
                    wrong: '❌ We went to Da Nang by a plane.',
                    fix: '✔️ We went to Da Nang by plane (hoặc by air).',
                    reason: 'Sau "by" chỉ phương tiện giao thông không dùng "a/an/the".'
                  },
                  {
                    wrong: '❌ She always has the breakfast at 6:30.',
                    fix: '✔️ She always has breakfast at 6:30.',
                    reason: 'Tên bữa ăn hằng ngày không dùng mạo từ "the".'
                  },
                  {
                    wrong: '❌ In the October, we celebrate Halloween.',
                    fix: '✔️ In October, we celebrate Halloween.',
                    reason: 'Tên các tháng trong năm đi với "in" dùng Zero article (Ø).'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                    <p className="font-bold text-red-600 font-mono">{item.wrong}</p>
                    <p className="font-bold text-emerald-700 font-mono">{item.fix}</p>
                    <p className="text-slate-500 text-[11px]">👉 {item.reason}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Showcase */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-amber-900 text-sm flex items-center gap-2">
                  <Award className="w-4 h-4 text-rose-600" />
                  <span>Dự Án Học Tập: Customs and Traditions Around Us (Trang 57 SGK)</span>
                </h3>
                <span className="text-xs bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full font-bold">Project SGK</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Học sinh làm việc theo nhóm để thiết kế một <strong>Áp phích (Poster)</strong> hoặc <strong>Video clip ngắn</strong> giới thiệu một phong tục tập quán độc đáo tại địa phương hoặc của người Việt Nam.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-white p-3 rounded-xl border border-amber-200 space-y-1">
                  <span className="font-bold text-amber-800">1. Ý tưởng phong tục</span>
                  <p className="text-slate-600 text-[11px]">Gợi ý: Lễ mừng thọ ông bà, tục cúng ông Công ông Táo, gói bánh chưng ngày Tết, hay lễ hội thả cá chép.</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-amber-200 space-y-1">
                  <span className="font-bold text-amber-800">2. Nội dung thuyết trình</span>
                  <p className="text-slate-600 text-[11px]">Mô tả thời gian, các bước tiến hành, lễ vật cần chuẩn bị và lời khuyên ứng xử phù hợp.</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-amber-200 space-y-1">
                  <span className="font-bold text-amber-800">3. Thông điệp văn hóa</span>
                  <p className="text-slate-600 text-[11px]">Nêu bật lòng biết ơn tổ tiên, sự hiếu kính và niềm tự hào gìn giữ bản sắc dân tộc Việt.</p>
                </div>
              </div>
            </div>

            {/* Completion Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-amber-300" />
                <div>
                  <h4 className="font-extrabold text-sm">Chúc Mừng Bạn Đã Hoàn Thành Toàn Bộ 7 Bài SGK Unit 5!</h4>
                  <p className="text-xs text-emerald-100">Hãy tiếp tục luyện tập với bộ Flashcard thông minh và bài kiểm tra Trắc nghiệm!</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {onGoToFlashcards && (
                  <button
                    onClick={onGoToFlashcards}
                    className="px-3.5 py-1.5 bg-white text-emerald-800 hover:bg-emerald-50 rounded-xl text-xs font-bold transition cursor-pointer shadow-xs"
                  >
                    Học Flashcard
                  </button>
                )}
                {onGoToQuiz && (
                  <button
                    onClick={onGoToQuiz}
                    className="px-3.5 py-1.5 bg-amber-400 text-slate-900 hover:bg-amber-300 rounded-xl text-xs font-bold transition cursor-pointer shadow-xs"
                  >
                    Làm Bài Thi Trắc Nghiệm
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
