import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, Volume2, CheckCircle2, RotateCcw, Lightbulb, 
  ArrowLeft, ArrowRight, Heart, Brain, Zap, Layers, Play,
  MessageCircle, HelpCircle, Trophy, BookOpen, Users,
  PenTool, Headphones, Smile, Eye, Share2, Award, FileText,
  Flame, Gift, Sun, Coffee, Compass, Star, ChevronDown, Check,
  Globe, Utensils, Mountain, Shield, Laptop, AlertCircle
} from 'lucide-react';
import { getReadingTip } from '../../utils/pronunciationHelper';
import { speakEnglish } from '../../utils/audio';

interface Unit6VisualMasterProps {
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

export const Unit6VisualMaster: React.FC<Unit6VisualMasterProps> = ({
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

  // State for Getting Started (Pages 60-61)
  const [gsQuizAnswers, setGsQuizAnswers] = useState<Record<number, string>>({});
  const [gsFillAnswers, setGsFillAnswers] = useState<Record<number, string>>({});

  // State for Closer Look 1 Phonetics /br/ vs /pr/ (Pages 62-63)
  const [phoneticBasket, setPhoneticBasket] = useState<Record<string, '/br/' | '/pr/'>>({});

  // State for Closer Look 2: If vs Unless (Pages 63-64)
  const [ifUnlessAnswers, setIfUnlessAnswers] = useState<Record<number, 'if' | 'unless'>>({});
  const [futureFormAnswers, setFutureFormAnswers] = useState<Record<number, string>>({});

  // State for Communication World Cuisines (Pages 64-65)
  const [cuisineAnswers, setCuisineAnswers] = useState<Record<number, string>>({});

  // State for Skills 1 Reading Alaska (Pages 65-66)
  const [alaskaAnswers, setAlaskaAnswers] = useState<Record<number, string>>({});

  // State for Skills 2 Listening Online Learning (Page 67)
  const [onlineTfAnswers, setOnlineTfAnswers] = useState<Record<number, boolean>>({});
  const [onlineMcqAnswers, setOnlineMcqAnswers] = useState<Record<number, string>>({});

  // State for Guided Writing (Page 67)
  const [writingEssay, setWritingEssay] = useState<string>('');
  const [showModelWriting, setShowModelWriting] = useState<'adv' | 'disadv' | null>(null);

  // State for Looking Back Sentence Rewrite (Page 68)
  const [rewriteRevealed, setRewriteRevealed] = useState<Record<number, boolean>>({});

  // Tabs definitions
  const tabs: { id: LessonTab; label: string; sub: string; badge: string; icon: any }[] = [
    { id: 'mindmap', label: 'Bản Đồ Tư Duy', sub: 'Toàn cảnh phong cách sống', badge: 'Overview', icon: Brain },
    { id: 'getting_started', label: '1. Getting Started', sub: 'Lối sống & Chào hỏi thế giới', badge: 'Trang 60', icon: Users },
    { id: 'closer_look_1', label: '2. Closer Look 1', sub: 'Từ vựng & Âm /br/ - /pr/', badge: 'Trang 62', icon: Volume2 },
    { id: 'closer_look_2', label: '3. Closer Look 2', sub: 'Tương lai đơn & If / Unless', badge: 'Trang 63', icon: Zap },
    { id: 'communication', label: '4. Communication', sub: 'Sự chắc chắn & Ẩm thực 5 châu', badge: 'Trang 64', icon: Utensils },
    { id: 'skills_1', label: '5. Skills 1', sub: 'Lối sống Alaska & Chó kéo xe', badge: 'Trang 65', icon: Mountain },
    { id: 'skills_2', label: '6. Skills 2', sub: 'Học trực tuyến & Viết đoạn văn', badge: 'Trang 67', icon: PenTool },
    { id: 'looking_back', label: '7. Looking Back', sub: 'Biến đổi câu & Dự án thế giới', badge: 'Trang 68', icon: Trophy },
  ];

  return (
    <div className="space-y-6 pb-20 max-w-6xl mx-auto">
      {/* Top Banner Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-700 via-indigo-600 to-cyan-600 p-6 sm:p-8 text-white shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs font-bold text-sky-200 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-xl backdrop-blur-sm cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Quay lại Trang chủ</span>
            </button>
            <div className="inline-flex items-center gap-2 ml-2 rounded-full bg-sky-400/20 px-3 py-0.5 text-xs font-semibold text-sky-200">
              <Award className="w-3.5 h-3.5 text-sky-300" />
              <span>Tiếng Anh 8 Global Success • Trang 60 - 69 SGK</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              Unit 6: Lifestyles
            </h1>
            <p className="text-sky-100 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Trạm học trực quan 7 bài SGK: Khám phá muôn màu lối sống từ cà phê vỉa hè Việt Nam đến xe trượt tuyết chó kéo Alaska, 
              chinh phục thì Tương lai đơn (will/won’t), Câu điều kiện loại 1 (If / Unless), cặp âm chùm /br/ - /pr/ và ẩm thực 5 châu!
            </p>
          </div>

          <div className="flex sm:flex-col gap-2 shrink-0">
            {onGoToFlashcards && (
              <button
                onClick={onGoToFlashcards}
                className="px-3.5 py-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Layers className="w-4 h-4 text-sky-300" />
                <span>35 Flashcards Unit 6</span>
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
                    ? 'bg-white text-indigo-900 shadow-md scale-102 font-extrabold'
                    : 'bg-white/10 hover:bg-white/20 text-white/90'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-indigo-600' : 'text-sky-200'}`} />
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-indigo-100 text-indigo-700' : 'bg-black/20 text-white/70'}`}>
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
          <div className="bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-200/60 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <Brain className="w-6 h-6 text-indigo-600" />
                  <span>Sơ Đồ Tư Duy Toàn Cảnh (Unit 6 Mindmap)</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Nắm trọn 4 trụ cột kiến thức cốt lõi của Unit 6: Lối sống, Văn hóa, Ngữ pháp & Phát âm.
                </p>
              </div>
              <button
                onClick={triggerConfetti}
                className="px-4 py-2 bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-bold rounded-xl shadow hover:opacity-90 transition flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Khám phá toàn bộ bài</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Pillar 1: Lifestyle Differences & Cuisines */}
              <div className="bg-white rounded-2xl p-5 border border-sky-200 shadow-xs hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-black mb-3">
                  <Utensils className="w-5 h-5 text-sky-700" />
                </div>
                <h3 className="font-bold text-sky-900 text-sm mb-1">1. Lối Sống & Ẩm Thực</h3>
                <p className="text-[11px] text-slate-500 mb-3">Lifestyles & World Cuisines</p>
                <ul className="text-xs space-y-1.5 text-slate-700">
                  <li className="flex items-start gap-1.5">
                    <span className="text-sky-500 font-bold">•</span>
                    <span><strong>Street food & Leisurely coffee:</strong> Ăn sáng vỉa hè & cà phê thong dong ở VN.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-sky-500 font-bold">•</span>
                    <span><strong>Greetings:</strong> Bắt tay, cúi đầu (Nhật/Thái), chạm mũi Hongi (Maori).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-sky-500 font-bold">•</span>
                    <span><strong>World Cuisines:</strong> Pizza/Pasta (Ý), Curry (Ấn), Kimchi (Hàn), Fish & Chips (Anh).</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 2: Unique Lands & Traditions */}
              <div className="bg-white rounded-2xl p-5 border border-emerald-200 shadow-xs hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black mb-3">
                  <Mountain className="w-5 h-5 text-emerald-700" />
                </div>
                <h3 className="font-bold text-emerald-900 text-sm mb-1">2. Vùng Đất & Truyền Thống</h3>
                <p className="text-[11px] text-slate-500 mb-3">Alaska, Nomads & Coober Pedy</p>
                <ul className="text-xs space-y-1.5 text-slate-700">
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span><strong>Dogsled & Mushers:</strong> Xe chó kéo & cuộc đua Iditarod 1.510 km ở Alaska.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span><strong>Nomadic life:</strong> Đời sống du mục chăn ngựa, lều tròn yurt ở Mông Cổ.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span><strong>Coober Pedy:</strong> Cuộc sống dưới lòng đất tránh nắng gắt ở nước Úc.</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 3: Grammar Future & If / Unless */}
              <div className="bg-white rounded-2xl p-5 border border-indigo-200 shadow-xs hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-black mb-3">
                  <Zap className="w-5 h-5 text-indigo-700" />
                </div>
                <h3 className="font-bold text-indigo-900 text-sm mb-1">3. Ngữ Pháp Trọng Tâm</h3>
                <p className="text-[11px] text-slate-500 mb-3">Future Simple & First Conditional</p>
                <ul className="text-xs space-y-1.5 text-slate-700">
                  <li className="flex items-start gap-1.5">
                    <span className="text-indigo-500 font-bold">•</span>
                    <span><strong>Future Simple:</strong> <em>S + will / won't + V-inf</em> (dự đoán, quyết định tức thì).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-indigo-500 font-bold">•</span>
                    <span><strong>First Conditional:</strong> <em>If + V(HTĐ), will + V-inf</em>.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-indigo-500 font-bold">•</span>
                    <span><strong>Unless = If ... not:</strong> Trừ phi, nếu không (Unless you hurry, you'll be late).</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 4: Pronunciation /br/ vs /pr/ */}
              <div className="bg-white rounded-2xl p-5 border border-amber-200 shadow-xs hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black mb-3">
                  <Volume2 className="w-5 h-5 text-amber-700" />
                </div>
                <h3 className="font-bold text-amber-900 text-sm mb-1">4. Ngữ Âm Chùm Phụ Âm</h3>
                <p className="text-[11px] text-slate-500 mb-3">Clusters /br/ and /pr/</p>
                <ul className="text-xs space-y-1.5 text-slate-700">
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-500 font-bold">•</span>
                    <span><strong>Âm /br/ (rung):</strong> bridge, broccoli, breakfast, celebrate, algebra.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-500 font-bold">•</span>
                    <span><strong>Âm /pr/ (bật hơi):</strong> present, practise, precious, programme, express.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-500 font-bold">•</span>
                    <span><strong>Everyday English:</strong> Expressing certainty: <em>"Sure. You're welcome" / "Yes, certainly."</em></span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Action Navigation */}
            <div className="mt-6 pt-6 border-t border-sky-200/60 flex items-center justify-between flex-wrap gap-3">
              <span className="text-xs text-slate-500">
                Nhấn vào bài học để khám phá đầy đủ 10 trang SGK:
              </span>
              <button
                onClick={() => setActiveLesson('getting_started')}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Bắt đầu Bài 1: Getting Started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 1: GETTING STARTED (Pages 60-61) */}
      {activeLesson === 'getting_started' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Trang 60 - 61 Sách Giáo Khoa</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                1. Getting Started: Lifestyle Differences (Sự Khác Biệt Trong Lối Sống)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Cuộc trò chuyện giữa Nam và Tom về những nét văn hóa khác biệt thú vị giữa Việt Nam và phương Tây: cách chào hỏi thầy cô, đồ ăn đường phố và thói quen uống cà phê thong thả!
              </p>
            </div>

            {/* Dialogue Box */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-indigo-600" />
                  <span>Đoạn Hội Thoại Chuẩn SGK (Listen & Read - Audio TTS)</span>
                </h3>
                <span className="text-[11px] text-slate-500">Chạm vào biểu tượng loa để nghe từng câu</span>
              </div>

              <div className="space-y-3">
                {[
                  {
                    speaker: 'Nam',
                    en: "Hello, Tom. How're things?",
                    vi: "Chào Tom. Dạo này mọi việc thế nào rồi?",
                    color: 'text-sky-700 bg-sky-50 border-sky-200'
                  },
                  {
                    speaker: 'Tom',
                    en: "Oh good. I like it here. The lifestyle is interesting and different from that in my country.",
                    vi: "Ồ rất tuyệt. Tớ thích ở đây lắm. Lối sống ở đây thật thú vị và rất khác so với nước tớ.",
                    color: 'text-indigo-700 bg-indigo-50 border-indigo-200'
                  },
                  {
                    speaker: 'Nam',
                    en: "Really?",
                    vi: "Thật sao?",
                    color: 'text-sky-700 bg-sky-50 border-sky-200'
                  },
                  {
                    speaker: 'Tom',
                    en: "Sure. Students here call their teachers by their title 'teacher', not by their names.",
                    vi: "Chắc chắn rồi. Học sinh ở đây gọi các thầy cô bằng danh xưng 'thầy/cô' chứ không gọi bằng tên riêng.",
                    color: 'text-indigo-700 bg-indigo-50 border-indigo-200'
                  },
                  {
                    speaker: 'Nam',
                    en: "Right. How do you greet your teachers?",
                    vi: "Đúng rồi. Thế ở nước cậu các bạn chào thầy cô như thế nào?",
                    color: 'text-sky-700 bg-sky-50 border-sky-200'
                  },
                  {
                    speaker: 'Tom',
                    en: "We usually say 'Hello' or 'Good morning' then Mr, Mrs, or Miss and their surnames, for example 'Good morning, Mr Smith.'",
                    vi: "Bọn tớ thường chào 'Hello' hoặc 'Good morning' rồi kèm Mr, Mrs, hoặc Miss cùng họ của thầy cô, ví dụ như 'Good morning, Mr Smith.'",
                    color: 'text-indigo-700 bg-indigo-50 border-indigo-200'
                  },
                  {
                    speaker: 'Nam',
                    en: "Are there other differences?",
                    vi: "Còn điểm khác biệt nào nữa không?",
                    color: 'text-sky-700 bg-sky-50 border-sky-200'
                  },
                  {
                    speaker: 'Tom',
                    en: "People buy and sell a lot of street food here. In my country, people usually buy food in a store or a restaurant.",
                    vi: "Mọi người ở đây mua bán rất nhiều thức ăn đường phố. Ở nước tớ, mọi người thường mua đồ ăn trong cửa hàng hoặc nhà hàng.",
                    color: 'text-indigo-700 bg-indigo-50 border-indigo-200'
                  },
                  {
                    speaker: 'Nam',
                    en: "Yeah. Buying street food is a common practice in my city.",
                    vi: "Đúng thế. Mua đồ ăn vặt đường phố là một thói quen rất phổ biến ở thành phố của tớ.",
                    color: 'text-sky-700 bg-sky-50 border-sky-200'
                  },
                  {
                    speaker: 'Tom',
                    en: "And I've noticed that many people have breakfast on the street too! In my country, we typically have a light breakfast at home.",
                    vi: "Và tớ để ý thấy nhiều người còn ăn sáng ngay ngoài vỉa hè nữa! Ở nước tớ, mọi người thường ăn bữa sáng nhẹ tại nhà.",
                    color: 'text-indigo-700 bg-indigo-50 border-indigo-200'
                  },
                  {
                    speaker: 'Nam',
                    en: "I see. But here many adults are in the habit of having breakfast outside of their homes. If they're not in a hurry, they'll even have a leisurely coffee there.",
                    vi: "Tớ hiểu rồi. Nhưng ở đây nhiều người lớn có thói quen ăn sáng bên ngoài nhà. Nếu không vội, họ còn thong thả uống cà phê ngắm phố nữa cơ.",
                    color: 'text-sky-700 bg-sky-50 border-sky-200'
                  },
                  {
                    speaker: 'Tom',
                    en: "That's fascinating!",
                    vi: "Điều đó thật thú vị!",
                    color: 'text-indigo-700 bg-indigo-50 border-indigo-200'
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
                        activeSpeakingText === item.en ? 'bg-indigo-500 text-white' : 'hover:bg-white text-slate-600'
                      }`}
                      title="Nghe phát âm"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison Table (Activity 2 Page 61) */}
            <div className="bg-sky-50/60 border border-sky-200 rounded-2xl p-5 space-y-3">
              <h3 className="font-bold text-sky-950 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                <span>Bảng So Sánh Lối Sống: In Nam's Country vs In Tom's Country (Trang 61 SGK)</span>
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse bg-white rounded-xl overflow-hidden shadow-2xs">
                  <thead>
                    <tr className="bg-sky-100/70 text-sky-900 border-b border-sky-200">
                      <th className="p-3 font-bold">Khía cạnh lối sống</th>
                      <th className="p-3 font-bold">In Nam's country (Việt Nam)</th>
                      <th className="p-3 font-bold">In Tom's country (Phương Tây)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr>
                      <td className="p-3 font-semibold">1. Chào giáo viên (Greeting teachers)</td>
                      <td className="p-3 text-sky-700 font-medium">Gọi bằng chức danh "Teacher" (Thầy/Cô)</td>
                      <td className="p-3 text-indigo-700 font-medium">Dùng Mr/Mrs/Miss + <strong>surnames (họ)</strong></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">2. Bữa ăn sáng (Having breakfast)</td>
                      <td className="p-3 text-sky-700 font-medium">Ăn ngoài đường/vỉa hè (<strong>on the street</strong> / outside)</td>
                      <td className="p-3 text-indigo-700 font-medium">Thường ăn bữa sáng nhẹ tại nhà (at home)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">3. Mua thức ăn (Buying food)</td>
                      <td className="p-3 text-sky-700 font-medium">Mua đồ ăn đường phố bên lề đường (on roadside)</td>
                      <td className="p-3 text-indigo-700 font-medium">Mua trong cửa hàng hoặc nhà hàng (<strong>store / restaurant</strong>)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quiz: Greetings Around The World (Activity 5 Page 61) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-600" />
                  <span>QUIZ: Văn Hóa Chào Hỏi Khắp Năm Châu (Greetings Around The World - Trang 61 SGK)</span>
                </h3>
                <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full">5 Câu Hỏi</span>
              </div>

              <div className="space-y-3">
                {[
                  {
                    id: 1,
                    q: '1. Which is probably the most common way of greeting around the world?',
                    opts: ['A. Shaking hands', 'B. Sticking out one’s tongue'],
                    correct: 'A. Shaking hands',
                    exp: 'Bắt tay (Shaking hands) là cách chào hỏi phổ biến nhất trên thế giới.'
                  },
                  {
                    id: 2,
                    q: '2. In the USA, people greet each other by ______.',
                    opts: ['A. shaking heads', 'B. saying "Hello"'],
                    correct: 'B. saying "Hello"',
                    exp: 'Ở Mỹ, mọi người thường chào nhau bằng câu nói "Hello".'
                  },
                  {
                    id: 3,
                    q: '3. Thais greet their elders by saying "sawadee" and ______.',
                    opts: ['A. saying their surname', 'B. slightly bowing to them'],
                    correct: 'B. slightly bowing to them',
                    exp: 'Người Thái Lan chào người lớn tuổi bằng cách nói "sawadee" và hơi cúi đầu cung kính.'
                  },
                  {
                    id: 4,
                    q: '4. The Maori of New Zealand greet each other by ______ in the Hongi ceremony.',
                    opts: ['A. kissing each other’s cheek', 'B. pressing their noses together'],
                    correct: 'B. pressing their noses together',
                    exp: 'Người Maori chào nhau trong nghi lễ Hongi bằng cách chạm mũi và trán vào nhau.'
                  },
                  {
                    id: 5,
                    q: '5. How do people in Japan normally greet each other?',
                    opts: ['A. They bow to each other.', 'B. They hug each other.'],
                    correct: 'A. They bow to each other.',
                    exp: 'Người Nhật Bản theo truyền thống thường cúi gập người chào nhau (bow).'
                  }
                ].map((item) => {
                  const chosen = gsQuizAnswers[item.id];
                  return (
                    <div key={item.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                      <p className="font-bold text-slate-800">{item.q}</p>
                      <div className="flex flex-col sm:flex-row gap-2">
                        {item.opts.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setGsQuizAnswers({ ...gsQuizAnswers, [item.id]: opt })}
                            className={`p-2 rounded-lg text-left font-medium transition cursor-pointer ${
                              chosen === opt
                                ? opt === item.correct ? 'bg-emerald-600 text-white' : 'bg-red-500 text-white'
                                : 'bg-white border border-slate-200 hover:bg-slate-100 text-slate-700'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      {chosen && (
                        <p className={`text-[11px] font-semibold ${chosen === item.correct ? 'text-emerald-700' : 'text-red-600'}`}>
                          {item.exp}
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

      {/* TAB 2: CLOSER LOOK 1 (Pages 62-63) */}
      {activeLesson === 'closer_look_1' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold mb-2">
                <Volume2 className="w-3.5 h-3.5" />
                <span>Trang 62 - 63 Sách Giáo Khoa</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                2. A Closer Look 1: Từ Vựng & Cặp Chùm Phụ Âm /br/ - /pr/
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Làm chủ bộ từ vựng về lối sống truyền thống (dogsled, making crafts, native art, weaving, tribal dance) và phân biệt cặp âm chùm /br/ vs /pr/!
              </p>
            </div>

            {/* Core Vocabulary Grid */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Bộ Từ Vựng Lối Sống Truyền Thống (Chạm để nghe phát âm)</span>
                </h3>
                <span className="text-xs text-slate-500">Trang 62 SGK</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {[
                  { en: 'dogsled', ipa: '/ˈdɒɡsled/', vi: 'xe trượt tuyết chó kéo', icon: '🐕🛷' },
                  { en: 'making crafts', ipa: '/ˈmeɪkɪŋ krɑːfts/', vi: 'làm đồ thủ công mỹ nghệ', icon: '🎨' },
                  { en: 'native art', ipa: '/ˈneɪtɪv ɑːt/', vi: 'nghệ thuật bản địa', icon: '🖼️' },
                  { en: 'weaving', ipa: '/ˈwiːvɪŋ/', vi: 'nghề dệt vải thổ cẩm', icon: '🧵' },
                  { en: 'tribal dance', ipa: '/ˈtraɪbl dɑːns/', vi: 'điệu múa bộ lạc', icon: '💃' },
                  { en: 'musher', ipa: '/ˈmʌʃə(r)/', vi: 'người lái xe chó kéo', icon: '🧑‍🌾' },
                  { en: 'street food', ipa: '/striːt fuːd/', vi: 'ẩm thực đường phố', icon: '🍢' },
                  { en: 'nomadic', ipa: '/nəʊˈmædɪk/', vi: 'cuộc sống du mục', icon: '🏕️' },
                  { en: 'maintain', ipa: '/meɪnˈteɪn/', vi: 'duy trì, gìn giữ', icon: '🛡️' },
                  { en: 'in the habit of', ipa: '/ɪn ðə ˈhæbɪt əv/', vi: 'có thói quen làm gì', icon: '☕' },
                ].map((w, idx) => (
                  <div
                    key={idx}
                    onClick={() => speakText(w.en)}
                    className="p-3 bg-gradient-to-br from-slate-50 to-sky-50/40 rounded-2xl border border-slate-200/80 hover:border-sky-400 hover:shadow-md transition cursor-pointer group space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xl">{w.icon}</span>
                      <button className="p-1 rounded-md text-slate-400 group-hover:text-sky-600 transition">
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <h4 className="font-bold text-slate-800 text-xs group-hover:text-sky-700 transition">{w.en}</h4>
                    <p className="text-[10px] font-mono text-sky-800 font-semibold">{w.ipa}</p>
                    <div className="text-[10px] text-amber-900 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                      {getReadingTip(w.en, w.ipa)}
                    </div>
                    <p className="text-xs text-slate-700 font-medium">{w.vi}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Phonetics Lab: /br/ vs /pr/ */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-5 sm:p-6 space-y-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="font-extrabold text-amber-950 text-base flex items-center gap-2">
                    <Volume2 className="w-5 h-5 text-amber-600" />
                    <span>Phonetics Lab: Cặp Chùm Phụ Âm /br/ và /pr/ (Trang 62 - 63 SGK)</span>
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Cả 2 đều kết hợp với âm /r/. Khác biệt ở âm đầu: /b/ rung dây thanh (voiced) vs /p/ bật hơi mạnh (voiceless)!
                  </p>
                </div>
                <span className="px-3 py-1 bg-amber-600 text-white rounded-full text-xs font-bold shadow-xs">
                  Trọng tâm phát âm Unit 6
                </span>
              </div>

              {/* Anatomy Guide */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-amber-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-amber-800 font-mono">/br/ (Voiced cluster)</span>
                    <button
                      onClick={() => speakText('bridge broccoli breakfast algebra celebrate')}
                      className="px-2 py-1 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Nghe mẫu</span>
                    </button>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Khép hai môi lại, rung dây thanh tạo âm /b/ rồi ngay lập tức cuộn lưỡi phát âm /r/.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {[
                      { word: 'bridge', ipa: '/brɪdʒ/', vi: 'cây cầu' },
                      { word: 'broccoli', ipa: '/ˈbrɒkəli/', vi: 'súp lơ xanh' },
                      { word: 'breakfast', ipa: '/ˈbrekfəst/', vi: 'bữa ăn sáng' },
                      { word: 'algebra', ipa: '/ˈældʒɪbrə/', vi: 'môn đại số' },
                      { word: 'celebrate', ipa: '/ˈselɪbreɪt/', vi: 'kỷ niệm, ăn mừng' }
                    ].map((item) => (
                      <div
                        key={item.word}
                        onClick={() => speakText(item.word)}
                        className="p-2.5 bg-amber-50/80 rounded-xl border border-amber-200/80 cursor-pointer hover:bg-amber-100/90 transition flex flex-col justify-between space-y-1 shadow-2xs"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-xs text-amber-950">{item.word}</span>
                          <Volume2 className="w-3.5 h-3.5 text-amber-600" />
                        </div>
                        <div className="text-[10px] font-mono text-amber-800 font-semibold">{item.ipa}</div>
                        <div className="text-[10px] text-amber-900 bg-white/90 px-1.5 py-0.5 rounded border border-amber-200/80">
                          {getReadingTip(item.word, item.ipa)}
                        </div>
                        <div className="text-[11px] text-slate-700 font-medium">👉 {item.vi}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-orange-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-orange-800 font-mono">/pr/ (Voiceless cluster)</span>
                    <button
                      onClick={() => speakText('present practise precious programme express')}
                      className="px-2 py-1 bg-orange-100 hover:bg-orange-200 text-orange-800 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Nghe mẫu</span>
                    </button>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Khép hai môi lại, bật mạnh luồng hơi tạo âm /p/ (không rung dây thanh) rồi trượt nhanh sang âm /r/.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {[
                      { word: 'present', ipa: '/ˈpreznt/', vi: 'món quà / hiện tại' },
                      { word: 'practise', ipa: '/ˈpræktɪs/', vi: 'luyện tập' },
                      { word: 'precious', ipa: '/ˈpreʃəs/', vi: 'quý giá' },
                      { word: 'programme', ipa: '/ˈprəʊɡræm/', vi: 'chương trình' },
                      { word: 'express', ipa: '/ɪkˈspres/', vi: 'bày tỏ' }
                    ].map((item) => (
                      <div
                        key={item.word}
                        onClick={() => speakText(item.word)}
                        className="p-2.5 bg-orange-50/80 rounded-xl border border-orange-200/80 cursor-pointer hover:bg-orange-100/90 transition flex flex-col justify-between space-y-1 shadow-2xs"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-xs text-orange-950">{item.word}</span>
                          <Volume2 className="w-3.5 h-3.5 text-orange-600" />
                        </div>
                        <div className="text-[10px] font-mono text-orange-800 font-semibold">{item.ipa}</div>
                        <div className="text-[10px] text-orange-900 bg-white/90 px-1.5 py-0.5 rounded border border-orange-200/80">
                          {getReadingTip(item.word, item.ipa)}
                        </div>
                        <div className="text-[11px] text-slate-700 font-medium">👉 {item.vi}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sorting Basket Game */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="font-bold text-slate-800 text-xs">
                    🎮 Minigame: Nhấn nghe và phân loại từng từ vào giỏ /br/ hoặc /pr/:
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
                    { word: 'bridge', sound: '/br/' as const, meaning: 'cây cầu' },
                    { word: 'present', sound: '/pr/' as const, meaning: 'món quà' },
                    { word: 'broccoli', sound: '/br/' as const, meaning: 'súp lơ xanh' },
                    { word: 'practise', sound: '/pr/' as const, meaning: 'luyện tập' },
                    { word: 'breakfast', sound: '/br/' as const, meaning: 'bữa sáng' },
                    { word: 'precious', sound: '/pr/' as const, meaning: 'quý giá' },
                    { word: 'celebrate', sound: '/br/' as const, meaning: 'ăn mừng' },
                    { word: 'programme', sound: '/pr/' as const, meaning: 'chương trình' },
                  ].map((item) => {
                    const current = phoneticBasket[item.word];
                    const isRight = current === item.sound;
                    return (
                      <div key={item.word} className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-center space-y-1.5">
                        <div className="flex items-center justify-center gap-1">
                          <span className="font-bold text-xs text-slate-900">{item.word}</span>
                          <button
                            onClick={() => speakText(item.word)}
                            className="p-1 rounded text-slate-400 hover:text-amber-600 cursor-pointer"
                            title="Nghe"
                          >
                            <Volume2 className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-[10px] text-slate-500">{item.meaning}</p>
                        <div className="flex justify-center gap-1 pt-1">
                          <button
                            onClick={() => setPhoneticBasket({ ...phoneticBasket, [item.word]: '/br/' })}
                            className={`px-2 py-0.5 rounded text-[11px] font-bold font-mono transition cursor-pointer ${
                              current === '/br/'
                                ? isRight ? 'bg-amber-600 text-white' : 'bg-red-500 text-white'
                                : 'bg-white border border-slate-300 hover:bg-slate-100 text-slate-700'
                            }`}
                          >
                            /br/
                          </button>
                          <button
                            onClick={() => setPhoneticBasket({ ...phoneticBasket, [item.word]: '/pr/' })}
                            className={`px-2 py-0.5 rounded text-[11px] font-bold font-mono transition cursor-pointer ${
                              current === '/pr/'
                                ? isRight ? 'bg-orange-600 text-white' : 'bg-red-500 text-white'
                                : 'bg-white border border-slate-300 hover:bg-slate-100 text-slate-700'
                            }`}
                          >
                            /pr/
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

      {/* TAB 3: CLOSER LOOK 2 (Pages 63-64) */}
      {activeLesson === 'closer_look_2' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-2">
                <Zap className="w-3.5 h-3.5" />
                <span>Trang 63 - 64 Sách Giáo Khoa</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                3. A Closer Look 2: Thì Tương Lai Đơn (will/won't) & Câu Điều Kiện Loại 1 (If / Unless)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Làm chủ thì tương lai đơn và thành thạo tuyệt đối công thức chuyển đổi giữa <strong>If ... not</strong> và <strong>Unless</strong>!
              </p>
            </div>

            {/* Grammar 1: Future Simple */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 rounded-3xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-indigo-950 text-base flex items-center gap-2">
                  <Star className="w-5 h-5 text-indigo-600 fill-indigo-600" />
                  <span>Phần 1: Thì Tương Lai Đơn (The Future Simple: will / won't)</span>
                </h3>
                <span className="text-xs bg-indigo-200 text-indigo-900 px-2.5 py-1 rounded-lg font-bold">
                  S + will / won't + V-inf
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-white p-3.5 rounded-2xl border border-indigo-100 shadow-2xs space-y-1">
                  <span className="font-bold text-indigo-800">1. Dự đoán tương lai</span>
                  <p className="text-slate-600 text-[11px]">Dự đoán không có căn cứ chắc chắn trước đó.</p>
                  <p className="text-indigo-900 font-semibold bg-indigo-50/60 p-1.5 rounded-lg text-[11px]">
                    👉 The teacher <strong>will tell</strong> us tomorrow.
                  </p>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-indigo-100 shadow-2xs space-y-1">
                  <span className="font-bold text-indigo-800">2. Quyết định tức thì</span>
                  <p className="text-slate-600 text-[11px]">Quyết định nảy ra ngay lúc đang nói.</p>
                  <p className="text-indigo-900 font-semibold bg-indigo-50/60 p-1.5 rounded-lg text-[11px]">
                    👉 I’m thirsty. I <strong>will buy</strong> some water.
                  </p>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-indigo-100 shadow-2xs space-y-1">
                  <span className="font-bold text-indigo-800">3. Cảnh báo hoặc khả năng</span>
                  <p className="text-slate-600 text-[11px]">Đi sau "or" diễn tả nguy cơ nếu không hành động.</p>
                  <p className="text-indigo-900 font-semibold bg-indigo-50/60 p-1.5 rounded-lg text-[11px]">
                    👉 Leave now, or we <strong>will miss</strong> the train.
                  </p>
                </div>
              </div>
            </div>

            {/* Grammar 2: First Conditional (If & Unless) */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-3xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-emerald-950 text-base flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                  <span>Phần 2: Câu Điều Kiện Loại 1 & Quy Tắc Vàng: UNLESS = IF ... NOT</span>
                </h3>
                <span className="text-xs bg-emerald-200 text-emerald-900 px-2.5 py-1 rounded-lg font-bold">
                  Unless = Trừ phi / Nếu không
                </span>
              </div>

              {/* Formula Card */}
              <div className="bg-white p-4 rounded-2xl border border-emerald-200 shadow-xs space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-emerald-50/70 rounded-xl space-y-1">
                    <span className="font-bold text-emerald-900">Cấu trúc với IF:</span>
                    <p className="font-mono text-emerald-800 font-bold">If + S + V(hiện tại đơn), S + will / won't + V-inf</p>
                    <p className="text-slate-600 text-[11px]">Ví dụ: If you study hard, you will pass the exam.</p>
                  </div>
                  <div className="p-3 bg-teal-50/70 rounded-xl space-y-1">
                    <span className="font-bold text-teal-900">Cấu trúc tương đương với UNLESS:</span>
                    <p className="font-mono text-teal-800 font-bold">Unless + S + V(khẳng định), S + will / won't + V-inf</p>
                    <p className="text-slate-600 text-[11px]">Ví dụ: Unless you study hard, you won't pass the exam.</p>
                  </div>
                </div>

                <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-900 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span><strong>Lưu ý chí mạng trong phòng thi:</strong> Trong mệnh đề chứa IF hoặc UNLESS, TUYỆT ĐỐI KHÔNG DÙNG "WILL"! Chỉ chia ở thì Hiện tại đơn!</span>
                </div>
              </div>

              {/* Interactive Fill in IF or UNLESS (Activity 4 Page 64) */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200 space-y-3">
                <h4 className="font-bold text-slate-800 text-xs">
                  🎯 Thử thách chọn IF hoặc UNLESS (Trang 64 SGK):
                </h4>
                <div className="space-y-2">
                  {[
                    {
                      id: 1,
                      sentence: '1. ______ we eat lunch now, we won’t arrive at the cinema on time.',
                      correct: 'unless',
                      explain: 'Dùng "Unless" (Trừ khi chúng ta ăn trưa ngay bây giờ, nếu không chúng ta sẽ không kịp đến rạp).'
                    },
                    {
                      id: 2,
                      sentence: '2. The teacher will be furious ______ you don’t do the homework.',
                      correct: 'if',
                      explain: 'Đã có "don\'t" mang nghĩa phủ định sẵn trong câu nên ta dùng "If" (If you don’t do = Unless you do).'
                    },
                    {
                      id: 3,
                      sentence: '3. I won’t eat kimchi when I go to Korea ______ I have to.',
                      correct: 'unless',
                      explain: 'Dùng "Unless" mang nghĩa "trừ khi bắt buộc phải ăn".'
                    },
                    {
                      id: 4,
                      sentence: '4. ______ you turn on the light, you will be able to see better.',
                      correct: 'if',
                      explain: 'Dùng "If" (Nếu bạn bật đèn lên thì bạn sẽ nhìn rõ hơn).'
                    },
                    {
                      id: 5,
                      sentence: '5. You won’t be able to find the house ______ you use your GPS. There’s no one around.',
                      correct: 'unless',
                      explain: 'Dùng "Unless" (Bạn sẽ không thể tìm thấy nhà trừ khi bạn bật định vị GPS).'
                    }
                  ].map((item) => {
                    const chosen = ifUnlessAnswers[item.id];
                    return (
                      <div key={item.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className="font-semibold text-slate-800">{item.sentence}</span>
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => setIfUnlessAnswers({ ...ifUnlessAnswers, [item.id]: 'if' })}
                              className={`px-3 py-1 rounded-lg font-bold font-mono transition cursor-pointer ${
                                chosen === 'if'
                                  ? chosen === item.correct ? 'bg-emerald-600 text-white' : 'bg-red-500 text-white'
                                  : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                              }`}
                            >
                              IF
                            </button>
                            <button
                              onClick={() => setIfUnlessAnswers({ ...ifUnlessAnswers, [item.id]: 'unless' })}
                              className={`px-3 py-1 rounded-lg font-bold font-mono transition cursor-pointer ${
                                chosen === 'unless'
                                  ? chosen === item.correct ? 'bg-emerald-600 text-white' : 'bg-red-500 text-white'
                                  : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                              }`}
                            >
                              UNLESS
                            </button>
                          </div>
                        </div>
                        {chosen && (
                          <p className={`text-[11px] font-semibold ${chosen === item.correct ? 'text-emerald-700' : 'text-red-600'}`}>
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
        </div>
      )}

      {/* TAB 4: COMMUNICATION (Pages 64-65) */}
      {activeLesson === 'communication' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold mb-2">
                <Utensils className="w-3.5 h-3.5" />
                <span>Trang 64 - 65 Sách Giáo Khoa</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                4. Communication: Bày Tỏ Sự Chắc Chắn & Khám Phá Ẩm Thực 5 Châu
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Luyện nói các mẫu câu bày tỏ sự chắc chắn (Expressing certainty) và du lịch ẩm thực qua các món ăn biểu tượng thế giới!
              </p>
            </div>

            {/* Everyday English Expression Box */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-3xl p-5 sm:p-6 space-y-4">
              <h3 className="font-extrabold text-orange-950 text-sm flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-orange-600" />
                <span>Mẫu Câu Bày Tỏ Sự Chắc Chắn (Everyday English: Expressing Certainty)</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-white p-3 rounded-xl border border-orange-200 space-y-1">
                  <span className="font-bold text-orange-800">1. Sure. You're welcome.</span>
                  <p className="text-slate-600">Chắc chắn rồi. Rất sẵn lòng / Không có chi.</p>
                  <p className="text-slate-800 font-semibold italic">"Can I come over on Sunday? - Sure. You're welcome."</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-orange-200 space-y-1">
                  <span className="font-bold text-orange-800">2. Yes, certainly.</span>
                  <p className="text-slate-600">Vâng, dĩ nhiên / chắc chắn là như vậy rồi.</p>
                  <p className="text-slate-800 font-semibold italic">"Vietnamese cooking uses lots of herbs. - Yes, certainly."</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-orange-200 space-y-1">
                  <span className="font-bold text-orange-800">3. Definitely / Without doubt.</span>
                  <p className="text-slate-600">Hoàn toàn chắc chắn / Không còn nghi ngờ gì.</p>
                  <p className="text-slate-800 font-semibold italic">"Will technology change our lives? - Definitely!"</p>
                </div>
              </div>
            </div>

            {/* World Cuisines Explorer */}
            <div className="space-y-4">
              <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                <Globe className="w-4 h-4 text-indigo-600" />
                <span>Cuisines Around The World: Nét Ẩm Thực Biểu Tượng (Trang 65 SGK)</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  {
                    country: '🇮🇹 Italy (Nước Ý)',
                    food: 'Pizza & Spaghetti',
                    desc: 'Nổi tiếng với bánh pizza đế tròn nướng lò với phô mai, thịt và rau củ, mì spaghetti và hơn 400 loại phô mai thơm ngon.'
                  },
                  {
                    country: '🇮🇳 India (Ấn Độ)',
                    food: 'Curry (Cà Ri)',
                    desc: 'Món cà ri nấu từ thịt và rau củ hòa quyện nhiều gia vị sốt thơm lừng ăn kèm cơm hoặc bánh mì. Đa số người Ấn tránh ăn thịt bò.'
                  },
                  {
                    country: '🇰🇷 Korea (Hàn Quốc)',
                    food: 'Kimchi (Kim Chi)',
                    desc: 'Món bắp cải muối chua cay lên men truyền thống xuất hiện trên mọi bàn ăn của các gia đình Hàn Quốc.'
                  },
                  {
                    country: '🇬🇧 England (Nước Anh)',
                    food: 'Fish and Chips',
                    desc: 'Món cá tẩm bột chiên giòn rụm ăn kèm khoai tây chiên nóng hổi, món ăn mang đi biểu tượng của xứ sở sương mù.'
                  },
                  {
                    country: '🇯🇵 Japan (Nhật Bản)',
                    food: 'Sushi',
                    desc: 'Món cơm trộn giấm cuộn rong biển kết hợp hải sản tươi sống và cá ngừ, cá hồi thanh tao.'
                  },
                  {
                    country: '🇦🇺 Australia (Nước Úc)',
                    food: 'Kangaroo Steak',
                    desc: 'Thịt chuột túi kangaroo nướng là một món ăn độc đáo và phổ biến của người dân xứ sở chuột túi.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-1.5">
                    <span className="font-bold text-slate-900 text-xs">{item.country}</span>
                    <h4 className="font-black text-indigo-800 text-sm">{item.food}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* World Cuisines Quiz (Activity 3 Page 64) */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
              <h4 className="font-bold text-slate-800 text-xs sm:text-sm">
                🎯 Quiz Ẩm Thực Thế Giới (Trang 64 SGK):
              </h4>
              <div className="space-y-2">
                {[
                  {
                    id: 1,
                    q: '1. Which country is famous for pasta and pizza?',
                    opts: ['A. Thailand', 'B. Italy', 'C. Brazil'],
                    correct: 'B. Italy'
                  },
                  {
                    id: 2,
                    q: '2. Which country is famous for kimchi?',
                    opts: ['A. Korea', 'B. Portugal', 'C. Australia'],
                    correct: 'A. Korea'
                  },
                  {
                    id: 3,
                    q: '3. England is well-known for ______.',
                    opts: ['A. dim sum', 'B. spaghetti', 'C. fish and chips'],
                    correct: 'C. fish and chips'
                  },
                  {
                    id: 4,
                    q: '4. Sushi comes from ______.',
                    opts: ['A. Japan', 'B. Korea', 'C. Taiwan'],
                    correct: 'A. Japan'
                  },
                  {
                    id: 5,
                    q: '5. In which country do you think kangaroo steak is common?',
                    opts: ['A. China', 'B. Australia', 'C. The USA'],
                    correct: 'B. Australia'
                  }
                ].map((item) => {
                  const chosen = cuisineAnswers[item.id];
                  return (
                    <div key={item.id} className="p-3 bg-white rounded-xl border border-slate-200 text-xs space-y-2">
                      <p className="font-semibold text-slate-800">{item.q}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {item.opts.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setCuisineAnswers({ ...cuisineAnswers, [item.id]: opt })}
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

      {/* TAB 5: SKILLS 1 (Pages 65-66) */}
      {activeLesson === 'skills_1' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold mb-2">
                <Mountain className="w-3.5 h-3.5" />
                <span>Trang 65 - 66 Sách Giáo Khoa</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                5. Skills 1: Đọc & Nói về Lối Sống Truyền Thống Ở Alaska (Traditional Lifestyle in Alaska)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Khám phá vùng đất tuyết trắng Alaska: Cuộc sống của người bản địa, bảo tồn văn hóa và cuộc đua xe trượt tuyết chó kéo Iditarod 1.510 km!
              </p>
            </div>

            {/* Reading Passage with TTS */}
            <div className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 rounded-2xl p-5 sm:p-6 border border-cyan-200/80 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏔️</span>
                  <h3 className="font-extrabold text-cyan-950 text-sm sm:text-base">
                    Traditional Lifestyle in Alaska (Lối Sống Truyền Thống Alaska)
                  </h3>
                </div>
                <button
                  onClick={() => speakText(
                    "If you go to the American state of Alaska, you might find the traditional lifestyle there interesting. Although Alaska is quite large, with nearly 1.7 million square kilometres, it has a small population of about 730,000. The native peoples in Alaska still maintain many of their traditions. They keep their old ways of making arts and crafts alive. Various native groups have their own special styles of carving or weaving as well as their unique tribal dances and drumming. Therefore, visitors to Alaska may experience some of their culture in their villages. Alaska is also known for its unusual method of transport – the dogsled. Today, dog sledding is more of a sport than a true means of transport. The best-known race is the Iditarod Trail Sled Dog Race, a 1,510 km race from Anchorage to Nome. Mushers from all over the world come to Anchorage each March to compete for cash and prizes."
                  )}
                  className="px-3 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Nghe toàn bộ bài đọc</span>
                </button>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-xl border border-cyan-100 shadow-2xs">
                <p>
                  If you go to the American state of Alaska, you might find the traditional lifestyle there interesting. Although Alaska is quite large, with nearly 1.7 million square kilometres, it has a small population of about <strong>730,000</strong>.
                </p>
                <p className="text-slate-500 text-xs italic pl-2 border-l-2 border-cyan-300">
                  (Nếu bạn đến bang Alaska của nước Mỹ, bạn có thể thấy lối sống truyền thống ở đó rất thú vị. Mặc dù Alaska khá rộng lớn với gần 1,7 triệu km vuông, nhưng nó chỉ có dân số ít ỏi khoảng 730.000 người.)
                </p>
                <p>
                  The native peoples in Alaska still <strong>maintain</strong> many of their traditions. They keep their old ways of making arts and crafts alive. Various native groups have their own special <strong>styles</strong> of carving or weaving as well as their unique tribal dances and drumming. Therefore, visitors to Alaska may <strong>experience</strong> some of their culture in their villages.
                </p>
                <p className="text-slate-500 text-xs italic pl-2 border-l-2 border-cyan-300">
                  (Người dân bản địa ở Alaska vẫn duy trì nhiều truyền thống của họ. Họ gìn giữ những cách làm đồ thủ công mỹ nghệ cổ xưa. Các nhóm bản địa khác nhau có phong cách chạm khắc hoặc dệt vải riêng, cũng như các điệu múa bộ lạc và tiếng trống độc đáo.)
                </p>
                <p>
                  Alaska is also known for its unusual method of transport – the <strong>dogsled</strong>. Today, dog sledding (= mushing) is more of a sport than a true means of transport. The best-known race is the <strong>Iditarod Trail Sled Dog Race</strong>, a 1,510 km race from Anchorage to Nome. <strong>Mushers</strong> from all over the world come to Anchorage each March to compete for cash and prizes.
                </p>
                <p className="text-slate-500 text-xs italic pl-2 border-l-2 border-cyan-300">
                  (Alaska còn nổi tiếng với phương tiện di chuyển độc đáo – xe trượt tuyết chó kéo. Ngày nay, môn chó kéo xe (mushing) là một môn thể thao hơn là phương tiện đi lại thực thụ. Cuộc đua nổi tiếng nhất là giải Iditarod dài 1.510 km từ Anchorage đến Nome. Các tay đua (mushers) từ khắp thế giới đổ về Anchorage vào mỗi tháng Ba để tranh tài.)
                </p>
              </div>
            </div>

            {/* Reading Comprehension Questions (Activity 3 Page 66) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Câu Hỏi Đọc Hiểu Chi Tiết Về Alaska (Trang 66 SGK)</span>
              </h3>

              <div className="space-y-3">
                {[
                  {
                    id: 1,
                    q: '1. What is the population of Alaska?',
                    opts: ['A. About 730,000', 'B. 1.7 million', 'C. 15 million', 'D. 100,000'],
                    correct: 0,
                    exp: 'Theo bài đọc: "it has a small population of about 730,000".'
                  },
                  {
                    id: 2,
                    q: '2. Who have special styles of carving or weaving?',
                    opts: ['A. Tourists from New York', 'B. Various native groups in Alaska', 'C. European mushers', 'D. City workers'],
                    correct: 1,
                    exp: 'Các nhóm dân bản địa ("various native groups") có phong cách chạm khắc và dệt vải riêng.'
                  },
                  {
                    id: 3,
                    q: '3. Where can visitors find and experience the culture of native peoples in Alaska?',
                    opts: ['A. Only on the internet', 'B. In their villages, galleries, and museums', 'C. In supermarkets', 'D. Inside igloos only'],
                    correct: 1,
                    exp: 'Du khách có thể trải nghiệm văn hóa trong các ngôi làng bản địa, phòng tranh và bảo tàng.'
                  },
                  {
                    id: 4,
                    q: '4. How long is the famous Iditarod Trail Sled Dog Race?',
                    opts: ['A. 500 km', 'B. 1,000 km', 'C. 1,510 km', 'D. 3,000 km'],
                    correct: 2,
                    exp: 'Đường đua dài đúng 1,510 km từ Anchorage đến Nome.'
                  },
                  {
                    id: 5,
                    q: '5. Is the Iditarod Trail Sled Dog Race an international competition?',
                    opts: ['A. Yes, mushers from all over the world come to compete.', 'B. No, only locals can participate.'],
                    correct: 0,
                    exp: 'Đúng vậy, các tay đua từ khắp nơi trên thế giới ("mushers from all over the world") đến tham gia tranh tài.'
                  }
                ].map((item) => {
                  const chosen = alaskaAnswers[item.id];
                  return (
                    <div key={item.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                      <p className="font-bold text-slate-800">{item.q}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.opts.map((opt, oIdx) => (
                          <button
                            key={oIdx}
                            onClick={() => setAlaskaAnswers({ ...alaskaAnswers, [item.id]: opt })}
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

      {/* TAB 6: SKILLS 2 (Page 67) */}
      {activeLesson === 'skills_2' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold mb-2">
                <PenTool className="w-3.5 h-3.5" />
                <span>Trang 67 Sách Giáo Khoa</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                6. Skills 2: Nghe Tác Động Công Nghệ & Xưởng Viết Đoạn Văn Học Trực Tuyến
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Luyện nghe về tác động của học trực tuyến (Online learning) và thực hành viết đoạn văn (80-100 từ) về Ưu điểm hoặc Nhược điểm!
              </p>
            </div>

            {/* Listening Section */}
            <div className="bg-purple-50/50 rounded-2xl p-5 border border-purple-200 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Headphones className="w-5 h-5 text-purple-700" />
                  <h3 className="font-extrabold text-purple-900 text-sm sm:text-base">
                    Listening: The Impact of Online Learning on Students (Mai & Chris)
                  </h3>
                </div>
                <button
                  onClick={() => speakText(
                    "Chris: How was your online lesson yesterday, Mai? - Mai: Well, in the middle of the lesson, the power went off! But more importantly, I find it quite difficult to concentrate when studying in front of a computer screen. - Chris: Really? I like online learning because it is very convenient and comfortable. I can study from anywhere. - Mai: True, but there is no real interaction with teachers and classmates. I miss talking to my friends in person. Modern technology is certainly changing our lifestyle."
                  )}
                  className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Nghe bài đàm thoại audio</span>
                </button>
              </div>

              {/* Listening T/F Exercise (Activity 2 Page 67) */}
              <div className="space-y-2">
                {[
                  {
                    id: 1,
                    q: '1. When Mai was studying online, the power went off.',
                    correct: true,
                    exp: 'Đúng (True), Mai nói: "in the middle of the lesson, the power went off".'
                  },
                  {
                    id: 2,
                    q: '2. Chris likes studying online as it’s convenient.',
                    correct: true,
                    exp: 'Đúng (True), Chris thích học online vì thuận tiện và thoải mái.'
                  },
                  {
                    id: 3,
                    q: '3. Mai says it’s easy to concentrate when learning online.',
                    correct: false,
                    exp: 'Sai (False), Mai nói: "I find it quite difficult to concentrate" (rất khó tập trung).'
                  },
                  {
                    id: 4,
                    q: '4. Mai thinks technology is changing our way of learning and working.',
                    correct: true,
                    exp: 'Đúng (True), cả hai bạn đều đồng ý công nghệ đang thay đổi lối sống học đường.'
                  }
                ].map((item) => {
                  const chosen = onlineTfAnswers[item.id];
                  return (
                    <div key={item.id} className="p-3 bg-white rounded-xl border border-purple-100 text-xs space-y-2">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="font-semibold text-slate-800">{item.q}</span>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => setOnlineTfAnswers({ ...onlineTfAnswers, [item.id]: true })}
                            className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                              chosen === true
                                ? chosen === item.correct ? 'bg-emerald-600 text-white' : 'bg-red-500 text-white'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                            }`}
                          >
                            True (Đúng)
                          </button>
                          <button
                            onClick={() => setOnlineTfAnswers({ ...onlineTfAnswers, [item.id]: false })}
                            className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                              chosen === false
                                ? chosen === item.correct ? 'bg-emerald-600 text-white' : 'bg-red-500 text-white'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                            }`}
                          >
                            False (Sai)
                          </button>
                        </div>
                      </div>
                      {chosen !== undefined && (
                        <p className={`text-[11px] font-semibold ${chosen === item.correct ? 'text-emerald-700' : 'text-red-600'}`}>
                          {item.exp}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Guided Writing Workbench */}
            <div className="bg-gradient-to-br from-indigo-50/50 to-purple-50/50 rounded-2xl p-5 sm:p-6 border border-indigo-200 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="font-extrabold text-indigo-950 text-base flex items-center gap-2">
                    <Laptop className="w-5 h-5 text-indigo-600" />
                    <span>Xưởng Luyện Viết Đoạn Văn (Writing Workbench - Trang 67 SGK)</span>
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Đề bài: Viết đoạn văn (80 - 100 từ) về Ưu điểm (Advantages) HOẶC Nhược điểm (Disadvantages) của học trực tuyến.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowModelWriting(showModelWriting === 'adv' ? null : 'adv')}
                    className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Bài mẫu Ưu điểm</span>
                  </button>
                  <button
                    onClick={() => setShowModelWriting(showModelWriting === 'disadv' ? null : 'disadv')}
                    className="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Bài mẫu Nhược điểm</span>
                  </button>
                </div>
              </div>

              {/* Ideas Classification Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1">
                  <span className="font-bold text-emerald-800">✅ Ưu điểm (Advantages):</span>
                  <ul className="text-[11px] text-slate-700 list-disc list-inside space-y-0.5">
                    <li>Convenient (thuận tiện)</li>
                    <li>Comfortable (thoải mái học tại nhà)</li>
                    <li>More freedom (tự do thời gian)</li>
                    <li>Independent (giúp học sinh tự lập hơn)</li>
                  </ul>
                </div>
                <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 space-y-1">
                  <span className="font-bold text-rose-800">❌ Nhược điểm (Disadvantages):</span>
                  <ul className="text-[11px] text-slate-700 list-disc list-inside space-y-0.5">
                    <li>Difficult to concentrate (khó tập trung)</li>
                    <li>No real interaction (thiếu tương tác trực tiếp)</li>
                    <li>Harmful to our eyes (mỏi mắt khi nhìn màn hình lâu)</li>
                    <li>Expensive equipment (đòi hỏi máy tính, mạng đắt tiền)</li>
                  </ul>
                </div>
              </div>

              {/* Model Writing Dropdown */}
              {showModelWriting === 'adv' && (
                <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-sm space-y-2 text-xs leading-relaxed">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="font-bold text-emerald-900 text-sm">📝 Bài mẫu: The Advantages of Online Learning</span>
                    <button
                      onClick={() => speakText(
                        "Online learning has several great advantages for modern students. Firstly, it is extremely convenient and comfortable because students can study from the comfort of their homes without travelling. Secondly, it gives learners more freedom and flexibility to organize their study schedule. Finally, studying online encourages teenagers to become more independent and develop essential computer skills. For these reasons, online learning is an effective learning mode."
                      )}
                      className="px-2 py-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded-lg font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Volume2 className="w-3 h-3" />
                      <span>Nghe bài mẫu</span>
                    </button>
                  </div>
                  <p className="text-slate-800 font-medium">
                    "Online learning has several great advantages for modern students. Firstly, it is extremely convenient and comfortable because students can study from the comfort of their homes without travelling. Secondly, it gives learners more freedom and flexibility to organize their study schedule. Finally, studying online encourages teenagers to become more independent and develop essential computer skills. For these reasons, online learning is an effective learning mode."
                  </p>
                  <p className="text-slate-500 italic text-[11px] pt-1 border-t border-slate-100">
                    (Dịch: Học trực tuyến mang lại nhiều ưu điểm lớn cho học sinh thời nay. Thứ nhất, nó cực kỳ thuận tiện và thoải mái vì học sinh có thể học ngay tại nhà mà không cần di chuyển. Thứ hai, nó mang lại nhiều tự do và linh hoạt hơn để sắp xếp lịch học. Cuối cùng, học qua mạng khuyến khích học sinh trở nên tự lập hơn và nâng cao kỹ năng tin học.)
                  </p>
                </div>
              )}

              {showModelWriting === 'disadv' && (
                <div className="bg-white p-4 rounded-xl border border-rose-200 shadow-sm space-y-2 text-xs leading-relaxed">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="font-bold text-rose-900 text-sm">📝 Bài mẫu: The Disadvantages of Online Learning</span>
                    <button
                      onClick={() => speakText(
                        "Although online learning is popular, it also has some noticeable disadvantages. In the first place, it is often difficult to concentrate because students get easily distracted by social media and games. Furthermore, staring at a computer screen for hours can be very harmful to our eyes. Most importantly, online classes lack real face-to-face interaction with teachers and classmates, which may reduce teamwork and friendship. In conclusion, online learning should be balanced with offline schooling."
                      )}
                      className="px-2 py-1 bg-rose-100 hover:bg-rose-200 text-rose-800 rounded-lg font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Volume2 className="w-3 h-3" />
                      <span>Nghe bài mẫu</span>
                    </button>
                  </div>
                  <p className="text-slate-800 font-medium">
                    "Although online learning is popular, it also has some noticeable disadvantages. In the first place, it is often difficult to concentrate because students get easily distracted by social media and games. Furthermore, staring at a computer screen for hours can be very harmful to our eyes. Most importantly, online classes lack real face-to-face interaction with teachers and classmates, which may reduce teamwork and friendship. In conclusion, online learning should be balanced with offline schooling."
                  </p>
                  <p className="text-slate-500 italic text-[11px] pt-1 border-t border-slate-100">
                    (Dịch: Mặc dù học trực tuyến rất phổ biến, nó cũng có một số nhược điểm đáng kể. Trước hết, học sinh thường khó tập trung vì dễ bị xao nhãng bởi mạng xã hội và trò chơi điện tử. Thêm vào đó, nhìn chằm chằm vào màn hình máy tính nhiều giờ rất có hại cho mắt. Quan trọng nhất là các lớp học online thiếu sự tương tác trực tiếp với thầy cô và bạn bè.)
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
                      : 'text-indigo-600'
                  }`}>
                    Số từ: {writingEssay.trim() ? writingEssay.trim().split(/\s+/).filter(Boolean).length : 0} / 80-100 từ
                  </span>
                </div>
                <textarea
                  value={writingEssay}
                  onChange={(e) => setWritingEssay(e.target.value)}
                  placeholder="In my opinion, online learning has some notable advantages/disadvantages... (Nhập bài viết của bạn tại đây...)"
                  className="w-full h-32 p-3.5 bg-white rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-xs leading-relaxed"
                />
              </div>

              {/* 4-Criteria Auto Checklist */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                <div className={`p-2 rounded-lg border flex items-center gap-1.5 ${
                  writingEssay.toLowerCase().includes('advantage') || writingEssay.toLowerCase().includes('disadvantage')
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                    : 'bg-white border-slate-200 text-slate-500'
                }`}>
                  <Check className="w-3.5 h-3.5" />
                  <span>1. Câu mở đoạn (Topic)</span>
                </div>
                <div className={`p-2 rounded-lg border flex items-center gap-1.5 ${
                  writingEssay.toLowerCase().includes('firstly') || writingEssay.toLowerCase().includes('first') || writingEssay.toLowerCase().includes('because')
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                    : 'bg-white border-slate-200 text-slate-500'
                }`}>
                  <Check className="w-3.5 h-3.5" />
                  <span>2. Luận điểm 1</span>
                </div>
                <div className={`p-2 rounded-lg border flex items-center gap-1.5 ${
                  writingEssay.toLowerCase().includes('secondly') || writingEssay.toLowerCase().includes('furthermore') || writingEssay.toLowerCase().includes('also')
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                    : 'bg-white border-slate-200 text-slate-500'
                }`}>
                  <Check className="w-3.5 h-3.5" />
                  <span>3. Luận điểm 2 & 3</span>
                </div>
                <div className={`p-2 rounded-lg border flex items-center gap-1.5 ${
                  writingEssay.toLowerCase().includes('conclusion') || writingEssay.toLowerCase().includes('reason') || writingEssay.toLowerCase().includes('in short')
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                    : 'bg-white border-slate-200 text-slate-500'
                }`}>
                  <Check className="w-3.5 h-3.5" />
                  <span>4. Câu kết đoạn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 7: LOOKING BACK & PROJECT (Pages 68-69) */}
      {activeLesson === 'looking_back' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-2">
                <Trophy className="w-3.5 h-3.5" />
                <span>Trang 68 - 69 Sách Giáo Khoa</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                7. Looking Back & Project: Biến Đổi Câu If / Unless & Lối Sống Độc Lạ Năm Châu
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Luyện tập thành thạo các dạng viết lại câu kinh điển trong đề thi học kỳ và khám phá dự án văn hóa "Interesting lifestyles around the world"!
              </p>
            </div>

            {/* Sentence Rewrite Arena (Activity 4 Page 68) */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Đấu Trường Viết Lại Câu If / Unless Giữ Nguyên Nghĩa (Trang 68 SGK)</span>
              </h3>
              <div className="space-y-2 text-xs">
                {[
                  {
                    id: 1,
                    original: '1. Don’t play computer games for too long. You will harm your eyes.',
                    prompt: '👉 Rewrite with IF:',
                    answer: 'If you play computer games for too long, you will harm your eyes.',
                    exp: 'Điều kiện loại 1: Nếu bạn chơi game quá lâu thì bạn sẽ làm hỏng mắt.'
                  },
                  {
                    id: 2,
                    original: '2. Be careful with what you eat, or you will get overweight.',
                    prompt: '👉 Rewrite with IF / UNLESS:',
                    answer: 'You will get overweight if you aren’t careful with what you eat. (hoặc: ...unless you are careful with what you eat)',
                    exp: 'Unless = if ... not.'
                  },
                  {
                    id: 3,
                    original: '3. We’ll go to the beach unless it rains.',
                    prompt: '👉 Rewrite with IF:',
                    answer: 'If it doesn’t rain, we’ll go to the beach.',
                    exp: 'Chuyển unless it rains thành if it doesn’t rain.'
                  },
                  {
                    id: 4,
                    original: '4. If you don’t hurry up, you will be late.',
                    prompt: '👉 Rewrite with UNLESS:',
                    answer: 'Unless you hurry up, you will be late.',
                    exp: 'Bỏ if và don\'t, thay bằng unless.'
                  },
                  {
                    id: 5,
                    original: '5. Unless the teacher explains the lesson again, we won’t understand it very well.',
                    prompt: '👉 Rewrite with IF:',
                    answer: 'If the teacher doesn’t explain the lesson again, we won’t understand it very well.',
                    exp: 'Unless the teacher explains = If the teacher doesn’t explain.'
                  }
                ].map((item) => (
                  <div key={item.id} className="p-3 bg-white rounded-xl border border-slate-200 space-y-1.5">
                    <p className="font-bold text-slate-800">{item.original}</p>
                    <p className="text-slate-500 text-[11px] font-semibold">{item.prompt}</p>
                    {rewriteRevealed[item.id] ? (
                      <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-900 font-mono font-semibold space-y-0.5">
                        <p>{item.answer}</p>
                        <p className="text-[10px] text-slate-500 font-sans italic font-normal">💡 {item.exp}</p>
                      </div>
                    ) : (
                      <button
                        onClick={() => setRewriteRevealed({ ...rewriteRevealed, [item.id]: true })}
                        className="px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-md font-bold text-[11px] transition cursor-pointer"
                      >
                        Bấm xem câu viết lại chuẩn
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Project Showcase: Interesting Lifestyles Around the World (Page 69) */}
            <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-indigo-900 text-sm flex items-center gap-2">
                  <Globe className="w-4 h-4 text-indigo-600" />
                  <span>Dự Án: Interesting Lifestyles Around The World (Trang 69 SGK)</span>
                </h3>
                <span className="text-xs bg-indigo-200 text-indigo-900 px-2 py-0.5 rounded-full font-bold">Project SGK</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Học sinh làm việc theo nhóm để tìm hiểu và làm áp phích (poster) giới thiệu về một lối sống độc đáo trên thế giới:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-white p-3.5 rounded-xl border border-indigo-200 space-y-1">
                  <span className="font-bold text-indigo-800">1. Coober Pedy (Australia)</span>
                  <p className="text-slate-600 text-[11px]">Người dân xây dựng và sinh sống trong những ngôi nhà ngầm dưới lòng đất để tránh nắng nóng gay gắt trên sa mạc.</p>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-indigo-200 space-y-1">
                  <span className="font-bold text-indigo-800">2. Nomadic Life in Mongolia</span>
                  <p className="text-slate-600 text-[11px]">Đời sống du mục chăn thả ngựa, cừu trên thảo nguyên bao la, ở trong những túp lều tròn Yurt cơ động và ấm áp.</p>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-indigo-200 space-y-1">
                  <span className="font-bold text-indigo-800">3. The Ede in Viet Nam</span>
                  <p className="text-slate-600 text-[11px]">Người Ê-đê sống trong những ngôi nhà dài truyền thống, theo chế độ mẫu hệ và lưu giữ không gian văn hóa cồng chiêng.</p>
                </div>
              </div>
            </div>

            {/* Completion Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-700 text-white flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-amber-300" />
                <div>
                  <h4 className="font-extrabold text-sm">Chúc Mừng Bạn Đã Hoàn Thành Toàn Bộ 7 Bài SGK Unit 6: Lifestyles!</h4>
                  <p className="text-xs text-sky-100">Hãy tiếp tục ôn tập với 35 Flashcards thông minh và bài thi Trắc nghiệm 12 câu!</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {onGoToFlashcards && (
                  <button
                    onClick={onGoToFlashcards}
                    className="px-3.5 py-1.5 bg-white text-indigo-800 hover:bg-sky-50 rounded-xl text-xs font-bold transition cursor-pointer shadow-xs"
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
