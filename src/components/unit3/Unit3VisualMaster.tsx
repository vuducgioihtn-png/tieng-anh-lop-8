import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, Volume2, CheckCircle2, RotateCcw, Lightbulb, 
  ArrowLeft, ArrowRight, Heart, Brain, Zap, Layers, Play,
  MessageCircle, HelpCircle, Trophy, Compass, BookOpen, Users,
  PenTool, Headphones, Smile, Eye, Share2, AlertCircle, FileText
} from 'lucide-react';
import { getReadingTip } from '../../utils/pronunciationHelper';
import { speakEnglish } from '../../utils/audio';

interface Unit3VisualMasterProps {
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

export const Unit3VisualMaster: React.FC<Unit3VisualMasterProps> = ({
  onBack,
  onGoToFlashcards,
  onGoToQuiz
}) => {
  const [activeLesson, setActiveLesson] = useState<LessonTab>('mindmap');
  const [readingAudioActive, setReadingAudioActive] = useState<boolean>(false);
  const [activeSpeechText, setActiveSpeechText] = useState<string | null>(null);

  // Text to speech helper (sử dụng duy nhất giọng NỮ vang sáng, ngân hay)
  const speakText = (text: string) => {
    speakEnglish(text, {
      onStart: () => setActiveSpeechText(text),
      onEnd: () => setActiveSpeechText(null),
      onError: () => setActiveSpeechText(null)
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

  // State for interactive Getting Started quiz
  const [gsAnswers, setGsAnswers] = useState<Record<number, boolean | null>>({});
  const [gsChecked, setGsChecked] = useState<boolean>(false);

  // State for Match Vocabulary in Getting Started
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [vocabMatches, setVocabMatches] = useState<Record<string, string>>({});

  // State for Phonetics Lab
  const [phoneticBasket, setPhoneticBasket] = useState<Record<string, '/ʊə/' | '/ɔɪ/'>>({});

  // State for Closer Look 2: Sentence classification
  const [sentenceClass, setSentenceClass] = useState<Record<number, 'simple' | 'compound'>>({});
  const [compoundBuilder, setCompoundBuilder] = useState<Record<number, string>>({});

  // State for Skills 2 Guided Writing
  const [essayText, setEssayText] = useState<string>('');
  const [showModelEssay, setShowModelEssay] = useState<boolean>(false);

  // Tab definitions
  const tabs: { id: LessonTab; label: string; sub: string; badge: string; icon: any }[] = [
    { id: 'mindmap', label: 'Bản Đồ Tư Duy', sub: 'Toàn cảnh Unit 3', badge: 'Overview', icon: Brain },
    { id: 'getting_started', label: '1. Getting Started', sub: 'At the school club', badge: 'Trang 28', icon: Users },
    { id: 'closer_look_1', label: '2. Closer Look 1', sub: 'Mạng xã hội & Âm /ʊə/ - /ɔɪ/', badge: 'Trang 30', icon: Volume2 },
    { id: 'closer_look_2', label: '3. Closer Look 2', sub: 'Câu đơn & Câu ghép', badge: 'Trang 31', icon: Zap },
    { id: 'communication', label: '4. Communication', sub: 'Yêu cầu lịch sự', badge: 'Trang 32', icon: MessageCircle },
    { id: 'skills_1', label: '5. Skills 1', sub: 'Reading & Speaking CLB', badge: 'Trang 34', icon: BookOpen },
    { id: 'skills_2', label: '6. Skills 2', sub: 'Áp lực tuổi teen & Viết', badge: 'Trang 35', icon: PenTool },
    { id: 'looking_back', label: '7. Looking Back', sub: 'Ôn tập & Dự án CLB', badge: 'Trang 36', icon: Trophy },
  ];

  return (
    <div className="space-y-6 pb-20 max-w-6xl mx-auto">
      {/* Top Navigation Bar & Title Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 p-6 sm:p-8 text-white shadow-xl">
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
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Tiếng Anh 8 Global Success • Trang 28 - 37</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              Unit 3: Teenagers (Tuổi Thiếu Niên)
            </h1>
            <p className="text-amber-100 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Trạm học trực quan 7 bài SGK: Khám phá đời sống học đường, câu lạc bộ, mạng xã hội, 
              kỹ năng giải tỏa áp lực thi cử và chinh phục ngữ pháp Câu đơn - Câu ghép (FANBOYS & Trạng từ liên kết)!
            </p>
          </div>

          <div className="flex sm:flex-col gap-2 shrink-0">
            {onGoToFlashcards && (
              <button
                onClick={onGoToFlashcards}
                className="px-4 py-2.5 rounded-xl bg-white text-orange-900 font-extrabold text-xs shadow-md hover:bg-amber-50 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-orange-600" />
                <span>35 Flashcards Unit 3</span>
              </button>
            )}
            {onGoToQuiz && (
              <button
                onClick={onGoToQuiz}
                className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <HelpCircle className="w-4 h-4 text-slate-900" />
                <span>12 Câu Trắc Nghiệm</span>
              </button>
            )}
          </div>
        </div>

        {/* Lesson Navigation Tabs */}
        <div className="mt-6 pt-4 border-t border-white/20 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeLesson === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveLesson(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-white text-orange-900 shadow-md font-black scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-orange-600' : 'text-amber-200'}`} />
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                  isActive ? 'bg-orange-100 text-orange-800' : 'bg-black/20 text-white/80'
                }`}>
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ======================================================== */}
      {/* TAB 0: MINDMAP OVERVIEW */}
      {/* ======================================================== */}
      {activeLesson === 'mindmap' && (
        <div className="space-y-6">
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 flex items-center gap-2.5">
                  <Brain className="w-6 h-6 text-amber-500" />
                  <span>Bản Đồ Tư Duy Kiến Thức Toàn Cảnh (Unit 3 Mindmap)</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Tổng hợp trực quan 4 trụ cột kiến thức then chốt của bài học giúp ghi nhớ siêu tốc
                </p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-bold">
                Trọn bộ 7 bài SGK
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Branch 1 */}
              <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/50 p-4 space-y-3 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-amber-800 font-black text-sm">
                  <span className="w-6 h-6 rounded-lg bg-amber-500 text-white flex items-center justify-center text-xs">1</span>
                  <span>Câu Lạc Bộ & Đời Sống</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Các câu lạc bộ học đường và kỹ năng phát triển bản thân:
                </p>
                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded-lg bg-white border border-amber-100">
                    <span className="font-bold text-amber-900">• Chess club:</span> tập trung, rèn luyện tư duy
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-amber-100">
                    <span className="font-bold text-amber-900">• Arts and crafts:</span> làm origami, DIY
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-amber-100">
                    <span className="font-bold text-amber-900">• Language & Sports:</span> thể thao & tiếng Anh
                  </div>
                </div>
              </div>

              {/* Branch 2 */}
              <div className="rounded-2xl border-2 border-sky-200 bg-sky-50/50 p-4 space-y-3 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-sky-800 font-black text-sm">
                  <span className="w-6 h-6 rounded-lg bg-sky-500 text-white flex items-center justify-center text-xs">2</span>
                  <span>Mạng Xã Hội Tuổi Teen</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Các nền tảng số và hành động trực tuyến thường nhật:
                </p>
                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded-lg bg-white border border-sky-100">
                    <span className="font-bold text-sky-900">• Browse pictures:</span> lướt xem ảnh (Instagram)
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-sky-100">
                    <span className="font-bold text-sky-900">• Upload videos:</span> đăng video lên (YouTube)
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-sky-100">
                    <span className="font-bold text-sky-900">• Class forum:</span> đăng bài, check notifications
                  </div>
                </div>
              </div>

              {/* Branch 3 */}
              <div className="rounded-2xl border-2 border-rose-200 bg-rose-50/50 p-4 space-y-3 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-rose-800 font-black text-sm">
                  <span className="w-6 h-6 rounded-lg bg-rose-500 text-white flex items-center justify-center text-xs">3</span>
                  <span>Áp Lực & Giải Pháp</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Nhận diện nguyên nhân stress và phương pháp vượt qua:
                </p>
                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded-lg bg-white border border-rose-100">
                    <span className="font-bold text-rose-900">• Peer pressure:</span> áp lực đồng trang lứa
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-rose-100">
                    <span className="font-bold text-rose-900">• Parents' expectations:</span> kỳ vọng cha mẹ
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-rose-100">
                    <span className="font-bold text-rose-900">• Counselor & Timetable:</span> tư vấn & thời gian biểu
                  </div>
                </div>
              </div>

              {/* Branch 4 */}
              <div className="rounded-2xl border-2 border-purple-200 bg-purple-50/50 p-4 space-y-3 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-purple-800 font-black text-sm">
                  <span className="w-6 h-6 rounded-lg bg-purple-500 text-white flex items-center justify-center text-xs">4</span>
                  <span>Ngữ Pháp & Phát Âm</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Cấu trúc câu ghép và âm đôi đặc trưng:
                </p>
                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded-lg bg-white border border-purple-100">
                    <span className="font-bold text-purple-900">• FANBOYS:</span> for, and, but, or, so (dấu phẩy)
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-purple-100">
                    <span className="font-bold text-purple-900">• ; however, :</span> therefore, otherwise
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-purple-100">
                    <span className="font-bold text-purple-900">• Âm /ʊə/ & /ɔɪ/:</span> curious vs noisy
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-500 font-medium">
                👉 Nhấp vào bài học bên dưới để bắt đầu học sâu từng phần:
              </span>
              <button
                onClick={() => setActiveLesson('getting_started')}
                className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Bắt đầu Bài 1: Getting Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 1: LESSON 1 - GETTING STARTED (Pages 28-29) */}
      {/* ======================================================== */}
      {activeLesson === 'getting_started' && (
        <div className="space-y-6">
          {/* Header */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Lesson 1 • Trang 28 - 29 SGK</span>
                <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2 mt-1">
                  <span>At the school club</span>
                  <span className="text-base font-normal text-slate-500">(Tại câu lạc bộ trường học)</span>
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => speakText("Hi Ann. Hi Trang. Welcome to our school club! This is where we share information about our club activities and study tips.")}
                  className="px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5 text-amber-700" />
                  <span>Nghe đoạn mở đầu</span>
                </button>
              </div>
            </div>

            {/* Dialogue Box */}
            <div className="rounded-2xl bg-amber-50/60 border border-amber-200/80 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 text-amber-600" />
                  <span>Đoạn hội thoại nguyên bản (Minh, Ann & Trang)</span>
                </span>
                <span className="text-[11px] text-amber-700 font-medium">Bấm vào câu bất kỳ để nghe phát âm</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                {/* Turn 1 */}
                <div 
                  onClick={() => speakText("Hi Ann. Hi Trang. Welcome to our school club! This is where we share information about our club activities and study tips.")}
                  className="p-3 rounded-xl bg-white border border-amber-100 hover:border-amber-400 hover:shadow-sm transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-extrabold text-blue-700">Minh:</span>
                    <Volume2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <p className="text-slate-800 leading-relaxed font-medium">
                    "Hi Ann. Hi Trang. Welcome to our school club! This is where we share information about our club activities and study tips."
                  </p>
                  <p className="text-slate-500 text-xs mt-1 italic">
                    (Chào Ann. Chào Trang. Chào mừng các bạn đến với câu lạc bộ trường mình! Đây là nơi chúng mình chia sẻ thông tin về các hoạt động của CLB và các bí quyết học tập.)
                  </p>
                </div>

                {/* Turn 2 */}
                <div 
                  onClick={() => speakText("Great! What kind of activities does the club have, Minh?")}
                  className="p-3 rounded-xl bg-white border border-amber-100 hover:border-amber-400 hover:shadow-sm transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-extrabold text-rose-700">Ann:</span>
                    <Volume2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-rose-600 transition-colors" />
                  </div>
                  <p className="text-slate-800 leading-relaxed font-medium">
                    "Great! What kind of activities does the club have, Minh?"
                  </p>
                  <p className="text-slate-500 text-xs mt-1 italic">
                    (Tuyệt quá! CLB có những loại hoạt động nào thế Minh?)
                  </p>
                </div>

                {/* Turn 3 */}
                <div 
                  onClick={() => speakText("Well, we have different clubs: the chess club, the arts and crafts club, the language club, and the sports club. We also have a class forum where students can ask questions and discuss lessons.")}
                  className="p-3 rounded-xl bg-white border border-amber-100 hover:border-amber-400 hover:shadow-sm transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-extrabold text-blue-700">Minh:</span>
                    <Volume2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <p className="text-slate-800 leading-relaxed font-medium">
                    "Well, we have different clubs: the chess club, the arts and crafts club, the language club, and the sports club. We also have a class forum where students can ask questions and discuss lessons."
                  </p>
                  <p className="text-slate-500 text-xs mt-1 italic">
                    (À, trường mình có các CLB khác nhau: CLB cờ vua, CLB thủ công mỹ thuật, CLB ngoại ngữ, và CLB thể thao. Tụi mình còn có cả diễn đàn lớp nơi học sinh có thể đặt câu hỏi và thảo luận bài vở.)
                  </p>
                </div>

                {/* Turn 4 */}
                <div 
                  onClick={() => speakText("How do you notify everyone about club meetings? Do you use social media?")}
                  className="p-3 rounded-xl bg-white border border-amber-100 hover:border-amber-400 hover:shadow-sm transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-extrabold text-emerald-700">Trang:</span>
                    <Volume2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                  </div>
                  <p className="text-slate-800 leading-relaxed font-medium">
                    "How do you notify everyone about club meetings? Do you use social media?"
                  </p>
                  <p className="text-slate-500 text-xs mt-1 italic">
                    (Các cậu thông báo cho mọi người về các buổi sinh hoạt CLB bằng cách nào? Các cậu có dùng mạng xã hội không?)
                  </p>
                </div>

                {/* Turn 5 */}
                <div 
                  onClick={() => speakText("Yes, we post notifications on the school website and our Facebook page. Students can log on to check notifications or browse posts. Playing chess helps you concentrate, and Ms Hoa coaches the craft club.")}
                  className="p-3 rounded-xl bg-white border border-amber-100 hover:border-amber-400 hover:shadow-sm transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-extrabold text-blue-700">Minh:</span>
                    <Volume2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <p className="text-slate-800 leading-relaxed font-medium">
                    "Yes, we post notifications on the school website and our Facebook page. Students can log on to check notifications or browse posts. Playing chess helps you concentrate, and Ms Hoa coaches the craft club."
                  </p>
                  <p className="text-slate-500 text-xs mt-1 italic">
                    (Có chứ, tụi mình đăng thông báo trên trang web trường và trang Facebook. Học sinh có thể đăng nhập để kiểm tra thông báo hoặc lướt xem bài đăng. Chơi cờ vua giúp rèn sự tập trung, còn cô Hoa hướng dẫn CLB thủ công đấy.)
                  </p>
                </div>
              </div>
            </div>

            {/* Exercise 2: Vocabulary Matching (Trang 29 SGK) */}
            <div className="rounded-2xl border border-slate-200 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>Bài tập 2 SGK: Ghép từ vựng với định nghĩa tương ứng</span>
                </h3>
                <span className="text-xs text-slate-500">Chạm từ bên trái, sau đó chạm nghĩa bên phải</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {/* Words */}
                <div className="space-y-2">
                  {[
                    { id: 'forum', word: '1. forum', phonetic: '/ˈfɔːrəm/' },
                    { id: 'coach', word: '2. coach', phonetic: '/kəʊtʃ/' },
                    { id: 'concentrate', word: '3. concentrate', phonetic: '/ˈkɒnsntreɪt/' },
                    { id: 'browse', word: '4. browse', phonetic: '/braʊz/' },
                    { id: 'log on', word: '5. log on', phonetic: '/lɒɡ ɒn/' },
                  ].map((item) => {
                    const isMatched = vocabMatches[item.id] !== undefined;
                    const isSelected = selectedWord === item.id;
                    return (
                      <button
                        key={item.id}
                        disabled={isMatched}
                        onClick={() => setSelectedWord(item.id)}
                        className={`w-full p-2.5 rounded-xl border text-left font-bold flex items-center justify-between transition-all cursor-pointer ${
                          isMatched
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-800 opacity-80'
                            : isSelected
                            ? 'bg-amber-100 border-amber-500 text-amber-900 shadow-sm'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400'
                        }`}
                      >
                        <div>
                          <span>{item.word}</span>
                          <span className="text-[11px] font-normal text-slate-400 ml-2">{item.phonetic}</span>
                        </div>
                        {isMatched && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                      </button>
                    );
                  })}
                </div>

                {/* Definitions */}
                <div className="space-y-2">
                  {[
                    { id: 'def-coach', matchWith: 'coach', text: 'a. to give training or lead someone in a sport or activity (huấn luyện, dẫn dắt)' },
                    { id: 'def-concentrate', matchWith: 'concentrate', text: 'b. to give all your attention to something you are doing (tập trung)' },
                    { id: 'def-forum', matchWith: 'forum', text: 'c. an online place where people can discuss topics (diễn đàn thảo luận)' },
                    { id: 'def-log-on', matchWith: 'log on', text: 'd. to connect to a computer system or account with password (đăng nhập)' },
                    { id: 'def-browse', matchWith: 'browse', text: 'e. to look through information or pictures on a computer or internet (lướt xem)' },
                  ].map((def) => {
                    const matchedKey = Object.keys(vocabMatches).find(k => vocabMatches[k] === def.id);
                    return (
                      <button
                        key={def.id}
                        disabled={!!matchedKey}
                        onClick={() => {
                          if (selectedWord) {
                            if (def.matchWith === selectedWord) {
                              setVocabMatches(prev => ({ ...prev, [selectedWord]: def.id }));
                              setSelectedWord(null);
                              triggerConfetti();
                            } else {
                              alert("Chưa chính xác! Thử suy nghĩ và chọn lại nhé bạn!");
                            }
                          }
                        }}
                        className={`w-full p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          matchedKey
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-amber-400'
                        }`}
                      >
                        <span>{def.text}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {Object.keys(vocabMatches).length === 5 && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-between">
                  <span>🎉 Xuất sắc! Bạn đã ghép đúng toàn bộ 5 từ vựng của bài Getting Started!</span>
                  <button 
                    onClick={() => setVocabMatches({})}
                    className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                  >
                    Ghép lại
                  </button>
                </div>
              )}
            </div>

            {/* Exercise 1: Read again and tick T/F (Trang 29 SGK) */}
            <div className="rounded-2xl border border-slate-200 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-500" />
                  <span>Bài tập 1 SGK: Đọc lại hội thoại và chọn True (Đúng) hoặc False (Sai)</span>
                </h3>
                <button
                  onClick={() => {
                    setGsAnswers({});
                    setGsChecked(false);
                  }}
                  className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Làm lại</span>
                </button>
              </div>

              <div className="space-y-2.5 text-xs">
                {[
                  { id: 1, text: "1. The club is a place for students to share activities and study tips.", answer: true, explanation: "Đoạn thoại: 'This is where we share information about our club activities and study tips.'" },
                  { id: 2, text: "2. The school only has a sports club and no other clubs.", answer: false, explanation: "Đoạn thoại: Trường có nhiều CLB (chess, arts & crafts, language, sports) và diễn đàn." },
                  { id: 3, text: "3. Students can check notifications on the school website or Facebook page.", answer: true, explanation: "Đoạn thoại: 'We post notifications on the school website and our Facebook page.'" },
                  { id: 4, text: "4. Playing chess makes students feel tired and lose focus.", answer: false, explanation: "Đoạn thoại: 'Playing chess helps you concentrate' (giúp tập trung tốt hơn)." },
                ].map((q) => {
                  const userAns = gsAnswers[q.id];
                  const isCorrect = userAns === q.answer;
                  return (
                    <div key={q.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="font-medium text-slate-800 flex-1">{q.text}</span>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => setGsAnswers(prev => ({ ...prev, [q.id]: true }))}
                          className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                            userAns === true
                              ? 'bg-blue-600 text-white shadow-sm'
                              : 'bg-white border border-slate-300 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          True (Đúng)
                        </button>
                        <button
                          onClick={() => setGsAnswers(prev => ({ ...prev, [q.id]: false }))}
                          className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                            userAns === false
                              ? 'bg-blue-600 text-white shadow-sm'
                              : 'bg-white border border-slate-300 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          False (Sai)
                        </button>
                        {gsChecked && (
                          <span className={`font-bold ml-2 ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>
                            {isCorrect ? '✓ Đúng' : '✗ Sai'}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => {
                    setGsChecked(true);
                    triggerConfetti();
                  }}
                  className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  Kiểm tra kết quả
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 2: LESSON 2 - CLOSER LOOK 1 (Page 30) */}
      {/* ======================================================== */}
      {activeLesson === 'closer_look_1' && (
        <div className="space-y-6">
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Lesson 2 • Trang 30 SGK</span>
              <h2 className="text-2xl font-black text-slate-800 mt-1">
                A Closer Look 1: Mạng Xã Hội & Phòng Thí Nghiệm Phát Âm (/ʊə/ - /ɔɪ/)
              </h2>
            </div>

            {/* Part 1: Vocabulary in Context */}
            <div className="space-y-4">
              <h3 className="font-extrabold text-slate-800 text-base flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-500" />
                <span>1. Từ vựng trọng tâm về Mạng Xã Hội & Áp Lực Tuổi Teen</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                {[
                  { word: 'peer pressure', type: 'n phrase', pron: '/pɪə ˈpreʃə/', mean: 'áp lực bạn bè đồng trang lứa', icon: '👥' },
                  { word: 'expectations', type: 'noun', pron: '/ˌekspekˈteɪʃnz/', mean: 'kỳ vọng của bố mẹ, thầy cô', icon: '🎯' },
                  { word: 'bully', type: 'noun / verb', pron: '/ˈbʊli/', mean: 'kẻ bắt nạt / bắt nạt bạn bè', icon: '⚠️' },
                  { word: 'user-friendly', type: 'adj', pron: '/ˌjuːzə ˈfrendli/', mean: 'thân thiện với người dùng', icon: '📱' },
                  { word: 'browse pictures', type: 'v phrase', pron: '/braʊz ˈpɪktʃəz/', mean: 'lướt xem ảnh (trên Instagram)', icon: '🖼️' },
                  { word: 'check notifications', type: 'v phrase', pron: '/tʃek ˌnəʊtɪfɪˈkeɪʃnz/', mean: 'kiểm tra chuông thông báo', icon: '🔔' },
                  { word: 'upload videos', type: 'v phrase', pron: '/ˌʌpˈləʊd ˈvɪdiəʊz/', mean: 'đăng tải video lên mạng (YouTube)', icon: '📹' },
                  { word: 'connect with friends', type: 'v phrase', pron: '/kəˈnekt wɪð frendz/', mean: 'kết nối, trò chuyện với bạn bè', icon: '💬' },
                  { word: 'concentrate on', type: 'verb', pron: '/ˈkɒnsntreɪt ɒn/', mean: 'tập trung cao độ vào việc học', icon: '🧠' },
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    onClick={() => speakText(item.word)}
                    className="p-3.5 rounded-2xl bg-amber-50/50 border border-amber-200/70 hover:border-amber-400 hover:shadow-sm transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xl">{item.icon}</span>
                      <Volume2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 transition-colors" />
                    </div>
                    <div className="font-bold text-slate-800 text-sm">{item.word}</div>
                    <div className="text-[11px] text-amber-700 font-mono font-semibold">{item.pron} • <span className="italic">{item.type}</span></div>
                    <div className="text-[10px] text-amber-900 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                      {getReadingTip(item.word, item.pron)}
                    </div>
                    <div className="text-slate-600 text-xs font-medium mt-1">{item.mean}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Part 2: Pronunciation Lab /ʊə/ vs /ɔɪ/ */}
            <div className="rounded-2xl border-2 border-indigo-200 bg-indigo-50/40 p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">Phonetics Lab</span>
                  <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mt-0.5">
                    <Volume2 className="w-5 h-5 text-indigo-600" />
                    <span>Phân biệt 2 Nguyên âm đôi: /ʊə/ và /ɔɪ/ (Trang 30 SGK)</span>
                  </h3>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-indigo-200 text-indigo-900 font-bold">
                  Bí kíp thi cử
                </span>
              </div>

              {/* Explanations & Sound Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Sound /ʊə/ */}
                <div className="p-4 rounded-2xl bg-white border border-indigo-100 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-indigo-600">/ʊə/</span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700">
                      Nguyên âm đôi "u - ơ"
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Khẩu hình mở từ âm ngắn /ʊ/ rồi lướt mượt mà sang âm lướt nhẹ /ə/.
                  </p>
                  <div className="space-y-1.5 pt-1">
                    {[
                      { word: 'tourist', pron: '/ˈtʊərɪst/', mean: 'khách du lịch' },
                      { word: 'tournament', pron: '/ˈtʊənəmənt/', mean: 'giải thi đấu' },
                      { word: 'curious', pron: '/ˈkjʊəriəs/', mean: 'tò mò, hiếu kỳ' },
                      { word: 'mature', pron: '/məˈtʃʊə(r)/', mean: 'chín chắn, trưởng thành' },
                      { word: 'ensure', pron: '/ɪnˈʃʊə(r)/', mean: 'đảm bảo chắc chắn' },
                    ].map((w, i) => (
                      <button
                        key={i}
                        onClick={() => speakText(w.word)}
                        className="w-full flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 text-slate-700 text-xs font-semibold cursor-pointer transition-all space-y-1 sm:space-y-0"
                      >
                        <div className="flex items-center gap-2">
                          <Volume2 className="w-3.5 h-3.5 text-indigo-500" />
                          <span className="font-extrabold text-slate-900">{w.word}</span>
                          <span className="text-indigo-600 font-mono text-[11px] font-semibold">{w.pron}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-amber-900 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                            {getReadingTip(w.word, w.pron)}
                          </span>
                          <span className="text-slate-600 text-[11px]">👉 {w.mean}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sound /ɔɪ/ */}
                <div className="p-4 rounded-2xl bg-white border border-rose-100 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-rose-600">/ɔɪ/</span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-rose-50 text-rose-700">
                      Nguyên âm đôi "o - i"
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Khẩu hình tròn môi phát âm /ɔː/ sau đó kéo khóe miệng sang hai bên phát âm /ɪ/.
                  </p>
                  <div className="space-y-1.5 pt-1">
                    {[
                      { word: 'avoid', pron: '/əˈvɔɪd/', mean: 'tránh né' },
                      { word: 'choice', pron: '/tʃɔɪs/', mean: 'sự lựa chọn' },
                      { word: 'voice', pron: '/vɔɪs/', mean: 'giọng nói' },
                      { word: 'noisy', pron: '/ˈnɔɪzi/', mean: 'ồn ào, huyên náo' },
                      { word: 'annoy', pron: '/əˈnɔɪ/', mean: 'chọc tức, làm phiền' },
                    ].map((w, i) => (
                      <button
                        key={i}
                        onClick={() => speakText(w.word)}
                        className="w-full flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-rose-50 border border-slate-200 hover:border-rose-300 text-slate-700 text-xs font-semibold cursor-pointer transition-all space-y-1 sm:space-y-0"
                      >
                        <div className="flex items-center gap-2">
                          <Volume2 className="w-3.5 h-3.5 text-rose-500" />
                          <span className="font-extrabold text-slate-900">{w.word}</span>
                          <span className="text-rose-600 font-mono text-[11px] font-semibold">{w.pron}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-amber-900 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                            {getReadingTip(w.word, w.pron)}
                          </span>
                          <span className="text-slate-600 text-[11px]">👉 {w.mean}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive Sorter Game: Âm /ʊə/ hay /ɔɪ/? */}
              <div className="rounded-xl bg-white p-5 border border-indigo-200 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-extrabold text-slate-800 text-xs sm:text-sm flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-500" />
                    <span>Thử thách phân loại âm: Chạm nút để xếp từng từ vào đúng rổ âm!</span>
                  </h4>
                  <button
                    onClick={() => setPhoneticBasket({})}
                    className="text-xs text-slate-500 hover:text-slate-700 cursor-pointer"
                  >
                    Xếp lại từ đầu
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                  {[
                    { word: 'tournament', sound: '/ʊə/' },
                    { word: 'noisy', sound: '/ɔɪ/' },
                    { word: 'curious', sound: '/ʊə/' },
                    { word: 'choice', sound: '/ɔɪ/' },
                    { word: 'mature', sound: '/ʊə/' },
                    { word: 'avoid', sound: '/ɔɪ/' },
                    { word: 'tourist', sound: '/ʊə/' },
                    { word: 'annoy', sound: '/ɔɪ/' },
                  ].map((item, idx) => {
                    const chosen = phoneticBasket[item.word];
                    const isCorrect = chosen === item.sound;
                    return (
                      <div key={idx} className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between gap-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-800">{item.word}</span>
                          <button
                            onClick={() => speakText(item.word)}
                            className="p-1 rounded-md hover:bg-slate-200 cursor-pointer text-slate-600"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          <button
                            onClick={() => {
                              setPhoneticBasket(prev => ({ ...prev, [item.word]: '/ʊə/' }));
                              if (item.sound === '/ʊə/') triggerConfetti();
                            }}
                            className={`py-1 rounded-md font-bold text-[11px] transition-colors cursor-pointer ${
                              chosen === '/ʊə/'
                                ? isCorrect ? 'bg-indigo-600 text-white' : 'bg-rose-500 text-white'
                                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            /ʊə/
                          </button>
                          <button
                            onClick={() => {
                              setPhoneticBasket(prev => ({ ...prev, [item.word]: '/ɔɪ/' }));
                              if (item.sound === '/ɔɪ/') triggerConfetti();
                            }}
                            className={`py-1 rounded-md font-bold text-[11px] transition-colors cursor-pointer ${
                              chosen === '/ɔɪ/'
                                ? isCorrect ? 'bg-rose-600 text-white' : 'bg-rose-500 text-white'
                                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            /ɔɪ/
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

      {/* ======================================================== */}
      {/* TAB 3: LESSON 3 - CLOSER LOOK 2 (Pages 31-32) */}
      {/* ======================================================== */}
      {activeLesson === 'closer_look_2' && (
        <div className="space-y-6">
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Lesson 3 • Trang 31 - 32 SGK</span>
              <h2 className="text-2xl font-black text-slate-800 mt-1">
                A Closer Look 2: Câu Đơn (Simple) & Câu Ghép (Compound Sentences)
              </h2>
            </div>

            {/* Grammar Formula Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Box 1: Simple Sentences */}
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-amber-900 text-base">1. Câu Đơn (Simple Sentences)</h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-md bg-amber-200 text-amber-900 font-bold">1 Mệnh đề độc lập</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-amber-100 font-mono text-xs text-amber-800 font-bold">
                  S + V (+ O / Adverbial)
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Chỉ chứa <strong>MỘT mệnh đề độc lập</strong> (diễn đạt một ý hoàn chỉnh), không có liên từ nối hai mệnh đề S-V độc lập.
                </p>
                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded-lg bg-white border border-amber-100">
                    <span className="font-bold text-slate-800">• Minh and Ann</span> joined the chess club. (1 Mệnh đề)
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-amber-100">
                    <span className="font-bold text-slate-800">• Playing sports</span> helps students stay healthy.
                  </div>
                </div>
              </div>

              {/* Box 2: Compound Sentences */}
              <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-purple-900 text-base">2. Câu Ghép (Compound Sentences)</h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-md bg-purple-200 text-purple-900 font-bold">2 Mệnh đề độc lập</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-purple-100 font-mono text-xs text-purple-800 font-bold">
                  S1 + V1, [FANBOYS] S2 + V2.<br />
                  S1 + V1; [however / therefore / otherwise], S2 + V2.
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Nối hai hay nhiều mệnh đề độc lập bằng <strong>Liên từ kết hợp</strong> hoặc <strong>Trạng từ liên kết</strong>.
                </p>
                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded-lg bg-white border border-purple-100">
                    <span className="font-bold text-slate-800">• She wanted to study;</span> therefore, she turned off her phone.
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-purple-100">
                    <span className="font-bold text-slate-800">• We don't cheat,</span> for it is wrong.
                  </div>
                </div>
              </div>
            </div>

            {/* In-depth rules: FANBOYS vs Conjunctive Adverbs */}
            <div className="rounded-2xl border border-slate-200 p-5 space-y-4">
              <h3 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>Bảng So Sánh Quy Tắc Dấu Câu Cực Kỳ Quan Trọng Trong Đề Thi</span>
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                      <th className="p-3">Loại liên từ</th>
                      <th className="p-3">Các từ đại diện</th>
                      <th className="p-3">Quy tắc dấu câu bắt buộc</th>
                      <th className="p-3">Ví dụ SGK</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-blue-700">Liên từ kết hợp (FANBOYS)</td>
                      <td className="p-3">for, and, but, or, so</td>
                      <td className="p-3 font-mono font-bold text-rose-600">Mệnh đề 1, [từ] Mệnh đề 2</td>
                      <td className="p-3 italic">Parents should give teens freedom, <strong>but</strong> they should also set limits.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-purple-700">Trạng từ liên kết (Conjunctive Adverbs)</td>
                      <td className="p-3">however, therefore, otherwise</td>
                      <td className="p-3 font-mono font-bold text-rose-600">Mệnh đề 1; [từ], Mệnh đề 2<br />Mệnh đề 1. [Từ], Mệnh đề 2</td>
                      <td className="p-3 italic">Lan wants to join the club<strong>; however,</strong> she cannot sing.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Interactive Exercise 1: Classify Simple (S) or Compound (C) */}
            <div className="rounded-2xl border border-slate-200 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                  <Zap className="w-4 h-4 text-orange-500" />
                  <span>Bài tập 1 SGK (Trang 31): Xác định câu Đơn (Simple - S) hay câu Ghép (Compound - C)</span>
                </h3>
                <span className="text-xs text-slate-500">Chạm S hoặc C để kiểm tra ngay</span>
              </div>

              <div className="space-y-2.5 text-xs">
                {[
                  { id: 1, text: "1. Teenagers are often very active and talkative.", ans: 'simple', explain: "Chỉ có 1 mệnh đề độc lập (S: Teenagers, V: are). Chữ 'and' chỉ nối 2 tính từ (active & talkative)." },
                  { id: 2, text: "2. She plays chess very well, and she won the first prize last year.", ans: 'compound', explain: "Có 2 mệnh đề độc lập nối bằng dấu phẩy và liên từ 'and' (She plays... , and she won...)." },
                  { id: 3, text: "3. Students can work in groups, or they can work in pairs.", ans: 'compound', explain: "Có 2 mệnh đề nối bằng liên từ 'or' (Students can work... , or they can work...)." },
                  { id: 4, text: "4. Sports activities at school help me relax after hard-working hours.", ans: 'simple', explain: "Chỉ có 1 mệnh đề (S: Sports activities at school, V: help)." },
                  { id: 5, text: "5. Lan wants to join the music club; however, she cannot sing.", ans: 'compound', explain: "Có 2 mệnh đề nối bằng trạng từ liên kết '; however,'." },
                ].map((item) => {
                  const userChoice = sentenceClass[item.id];
                  const isDone = userChoice !== undefined;
                  const isCorrect = userChoice === item.ans;
                  return (
                    <div key={item.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex-1">
                        <span className="font-medium text-slate-800">{item.text}</span>
                        {isDone && (
                          <div className={`text-[11px] mt-1 font-semibold ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>
                            {isCorrect ? '✓ Chính xác!' : '✗ Chưa đúng!'} {item.explain}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => {
                            setSentenceClass(prev => ({ ...prev, [item.id]: 'simple' }));
                            if (item.ans === 'simple') triggerConfetti();
                          }}
                          className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                            userChoice === 'simple'
                              ? isCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-500 text-white'
                              : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          Simple (Câu đơn)
                        </button>
                        <button
                          onClick={() => {
                            setSentenceClass(prev => ({ ...prev, [item.id]: 'compound' }));
                            if (item.ans === 'compound') triggerConfetti();
                          }}
                          className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                            userChoice === 'compound'
                              ? isCorrect ? 'bg-purple-600 text-white' : 'bg-rose-500 text-white'
                              : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          Compound (Câu ghép)
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interactive Exercise 2: Choose the correct conjunction (Trang 32 SGK) */}
            <div className="rounded-2xl border border-slate-200 p-5 space-y-4">
              <h3 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-500" />
                <span>Bài tập 2 SGK (Trang 32): Chọn liên từ hoặc trạng từ liên kết chính xác điền vào chỗ trống</span>
              </h3>

              <div className="space-y-3 text-xs">
                {[
                  {
                    id: 1,
                    sentence: "We don't cheat on exams, ________ it is a wrong thing to do.",
                    options: ['for', 'so', 'but', 'or'],
                    correct: 'for',
                    hint: "'for' nghĩa là 'bởi vì' (= because), chỉ nguyên nhân."
                  },
                  {
                    id: 2,
                    sentence: "She wanted to prepare for the exam; ________, she turned off her mobile phone.",
                    options: ['however', 'therefore', 'otherwise', 'but'],
                    correct: 'therefore',
                    hint: "Hành động tắt điện thoại là kết quả logic của việc muốn ôn thi (do đó = therefore)."
                  },
                  {
                    id: 3,
                    sentence: "Phong has to study harder; ________, he may fail the midterm exam.",
                    options: ['however', 'therefore', 'otherwise', 'and'],
                    correct: 'otherwise',
                    hint: "'otherwise' nghĩa là 'nếu không thì' (phải học chăm, nếu không sẽ trượt)."
                  },
                  {
                    id: 4,
                    sentence: "Parents should give teens some freedom, ________ they should also set limits.",
                    options: ['for', 'and', 'but', 'so'],
                    correct: 'but',
                    hint: "Ý đối lập tương phản giữa cho tự do và đặt giới hạn."
                  }
                ].map((q) => {
                  const chosen = compoundBuilder[q.id];
                  const isCorrect = chosen === q.correct;
                  return (
                    <div key={q.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="font-medium text-slate-800 text-sm">{q.sentence}</div>
                      <div className="flex flex-wrap gap-2">
                        {q.options.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => {
                              setCompoundBuilder(prev => ({ ...prev, [q.id]: opt }));
                              if (opt === q.correct) triggerConfetti();
                            }}
                            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                              chosen === opt
                                ? opt === q.correct
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-rose-500 text-white'
                                : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      {chosen && (
                        <div className={`text-[11px] font-semibold ${isCorrect ? 'text-emerald-700' : 'text-rose-600'}`}>
                          {isCorrect ? '✓ Rất tốt!' : '✗ Xem lại gợi ý:'} {q.hint}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 4: LESSON 4 - COMMUNICATION (Pages 32-33) */}
      {/* ======================================================== */}
      {activeLesson === 'communication' && (
        <div className="space-y-6">
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Lesson 4 • Trang 32 - 33 SGK</span>
              <h2 className="text-2xl font-black text-slate-800 mt-1">
                Communication: Đưa Ra Lời Yêu Cầu Lịch Sự & Khảo Sát Mạng Xã Hội
              </h2>
            </div>

            {/* Part 1: Everyday English: Making polite requests */}
            <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/50 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-amber-900 text-base flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-amber-600" />
                  <span>Everyday English: Đưa ra và đáp lại lời yêu cầu lịch sự (Trang 32 SGK)</span>
                </h3>
                <span className="text-xs px-2.5 py-0.5 rounded-md bg-amber-200 text-amber-900 font-bold">Giao tiếp đời sống</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* Patterns */}
                <div className="p-4 rounded-xl bg-white border border-amber-100 space-y-3">
                  <div className="font-bold text-slate-800 text-sm">Cấu trúc yêu cầu lịch sự:</div>
                  <div className="space-y-2">
                    <div 
                      onClick={() => speakText("Can you tell me more about the music club, please?")}
                      className="p-2.5 rounded-lg bg-slate-50 hover:bg-amber-50 transition-colors cursor-pointer group flex items-start justify-between"
                    >
                      <div>
                        <div className="font-bold text-slate-800">"Can you tell me more about [club/event], please?"</div>
                        <div className="text-slate-500 italic mt-0.5">(Bạn có thể kể thêm cho mình về [CLB/sự kiện] được không?)</div>
                      </div>
                      <Volume2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 shrink-0 mt-1" />
                    </div>

                    <div 
                      onClick={() => speakText("Could you show me the way to the college, please?")}
                      className="p-2.5 rounded-lg bg-slate-50 hover:bg-amber-50 transition-colors cursor-pointer group flex items-start justify-between"
                    >
                      <div>
                        <div className="font-bold text-slate-800">"Could you show me the way to [place], please?"</div>
                        <div className="text-slate-500 italic mt-0.5">(Thầy/bạn có thể làm ơn chỉ đường tới [địa điểm] được không ạ?)</div>
                      </div>
                      <Volume2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 shrink-0 mt-1" />
                    </div>
                  </div>
                </div>

                {/* Responses */}
                <div className="p-4 rounded-xl bg-white border border-amber-100 space-y-3">
                  <div className="font-bold text-slate-800 text-sm">Cách đáp lại lịch sự:</div>
                  <div className="space-y-2">
                    <div 
                      onClick={() => speakText("Certainly. It meets on Mondays and Thursdays in the music room.")}
                      className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 cursor-pointer group flex items-start justify-between"
                    >
                      <div>
                        <div className="font-bold text-emerald-900">"Certainly. It meets on Mondays and Thursdays."</div>
                        <div className="text-emerald-700 italic mt-0.5">(Chắc chắn rồi. CLB sinh hoạt vào các thứ Hai và thứ Năm.)</div>
                      </div>
                      <Volume2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                    </div>

                    <div 
                      onClick={() => speakText("Sure! Go past this block, then turn left.")}
                      className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 cursor-pointer group flex items-start justify-between"
                    >
                      <div>
                        <div className="font-bold text-emerald-900">"Sure! Go past this block, then turn left."</div>
                        <div className="text-emerald-700 italic mt-0.5">(Được chứ! Đi qua dãy nhà này rồi rẽ trái nhé.)</div>
                      </div>
                      <Volume2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                    </div>

                    <div 
                      onClick={() => speakText("I'm sorry, I can't. I am busy right now.")}
                      className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer group flex items-start justify-between"
                    >
                      <div>
                        <div className="font-bold text-slate-700">"I'm sorry, I can't. I'm in a hurry right now."</div>
                        <div className="text-slate-500 italic mt-0.5">(Mình xin lỗi, mình không thể. Hiện tại mình đang vội.)</div>
                      </div>
                      <Volume2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Part 2: Social Media Survey (Trang 33 SGK) */}
            <div className="rounded-2xl border border-slate-200 p-5 space-y-4">
              <h3 className="font-extrabold text-slate-800 text-base flex items-center gap-2">
                <Share2 className="w-5 h-5 text-sky-500" />
                <span>Khảo sát: Thói quen dùng mạng xã hội của 4 bạn học sinh (Trang 33 SGK)</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                {/* Ann */}
                <div className="p-4 rounded-xl bg-pink-50 border border-pink-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📸</span>
                    <div>
                      <div className="font-black text-pink-900">Ann (14 tuổi)</div>
                      <div className="text-[11px] text-pink-700 font-bold">Thích Instagram</div>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    "I love Instagram because it is very fun and easy to browse pictures. I can also share my art photos with friends."
                  </p>
                  <span className="inline-block text-[10px] px-2 py-0.5 rounded bg-pink-200 text-pink-800 font-bold">
                    #browse_pictures
                  </span>
                </div>

                {/* Tom */}
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">▶️</span>
                    <div>
                      <div className="font-black text-red-900">Tom (14 tuổi)</div>
                      <div className="text-[11px] text-red-700 font-bold">Thích YouTube</div>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    "I spend an hour every evening watching video tutorials and uploading videos about making origami and chess games."
                  </p>
                  <span className="inline-block text-[10px] px-2 py-0.5 rounded bg-red-200 text-red-800 font-bold">
                    #upload_videos
                  </span>
                </div>

                {/* Trang */}
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📘</span>
                    <div>
                      <div className="font-black text-blue-900">Trang (14 tuổi)</div>
                      <div className="text-[11px] text-blue-700 font-bold">Thích Facebook</div>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    "Facebook is very user-friendly. Our class has a forum on Facebook to check notifications and discuss homework together."
                  </p>
                  <span className="inline-block text-[10px] px-2 py-0.5 rounded bg-blue-200 text-blue-800 font-bold">
                    #class_forum
                  </span>
                </div>

                {/* Nam */}
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">💬</span>
                    <div>
                      <div className="font-black text-emerald-900">Nam (14 tuổi)</div>
                      <div className="text-[11px] text-emerald-700 font-bold">Thích App Nhắn Tin</div>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    "I only use messaging apps to connect with my family and best friends. It helps me stay calm and avoid distractions."
                  </p>
                  <span className="inline-block text-[10px] px-2 py-0.5 rounded bg-emerald-200 text-emerald-800 font-bold">
                    #connect_with_friends
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 5: LESSON 5 - SKILLS 1 (Page 34) */}
      {/* ======================================================== */}
      {activeLesson === 'skills_1' && (
        <div className="space-y-6">
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Lesson 5 • Trang 34 SGK</span>
              <h2 className="text-2xl font-black text-slate-800 mt-1">
                Skills 1: Reading & Speaking - Các Câu Lạc Bộ Học Đường Độc Đáo
              </h2>
            </div>

            {/* Reading Passage */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-orange-600" />
                  <span>Bài đọc nguyên bản SGK: 3 Câu Lạc Bộ Thú Vị Tại Trường Học</span>
                </h3>
                <button
                  onClick={() => speakText("School clubs are great places for students to relax, learn new skills, and make friends. Here are three popular clubs at our school: Origami Club, Coding Club, and Book Club.")}
                  className="px-3 py-1.5 rounded-xl bg-orange-100 hover:bg-orange-200 text-orange-900 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5 text-orange-700" />
                  <span>Nghe bài đọc</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                {/* Club 1: Origami Club */}
                <div className="p-4 rounded-xl bg-white border border-amber-200 shadow-sm space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🦢</span>
                    <div>
                      <h4 className="font-extrabold text-amber-900 text-sm">1. Origami Club</h4>
                      <span className="text-[10px] text-amber-700 font-bold">(CLB Gấp giấy nghệ thuật)</span>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Origami is the Japanese art of paper folding. Members learn to fold papers into animals, flowers, and boxes without using scissors or glue.
                  </p>
                  <div className="p-2 rounded-lg bg-amber-50 text-amber-900 font-semibold text-[11px]">
                    ✨ <strong>Lợi ích:</strong> Rèn luyện tính kiên nhẫn (patience), sự tập trung và giảm bớt căng thẳng thi cử.
                  </div>
                </div>

                {/* Club 2: Coding & Robotics */}
                <div className="p-4 rounded-xl bg-white border border-sky-200 shadow-sm space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🤖</span>
                    <div>
                      <h4 className="font-extrabold text-sky-900 text-sm">2. Coding & Robotics Club</h4>
                      <span className="text-[10px] text-sky-700 font-bold">(CLB Lập trình & Robot)</span>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Students learn basic programming languages like Scratch and Python. They write code to make interactive stories, mini-games, and program small robot cars.
                  </p>
                  <div className="p-2 rounded-lg bg-sky-50 text-sky-900 font-semibold text-[11px]">
                    ✨ <strong>Lợi ích:</strong> Phát triển tư duy logic (logic thinking), giải quyết vấn đề và kỹ năng làm việc nhóm.
                  </div>
                </div>

                {/* Club 3: Book Club */}
                <div className="p-4 rounded-xl bg-white border border-emerald-200 shadow-sm space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📚</span>
                    <div>
                      <h4 className="font-extrabold text-emerald-900 text-sm">3. Book Club</h4>
                      <span className="text-[10px] text-emerald-700 font-bold">(CLB Đọc sách & Review)</span>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Members read one book every two weeks and meet on Wednesday afternoons to share their opinions, analyze characters, and write short book reviews.
                  </p>
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-900 font-semibold text-[11px]">
                    ✨ <strong>Lợi ích:</strong> Mở rộng vốn từ vựng (vocabulary), rèn luyện tư duy phản biện và khả năng viết văn.
                  </div>
                </div>
              </div>
            </div>

            {/* Speaking Activity */}
            <div className="rounded-2xl border border-slate-200 p-5 space-y-3">
              <h3 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-600" />
                <span>Phần Speaking (Nói): Thảo luận chọn câu lạc bộ phù hợp với bản thân</span>
              </h3>
              <p className="text-xs text-slate-500">
                Mẫu câu gợi ý để thực hành nói trôi chảy trên lớp:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-purple-50 border border-purple-200">
                  <span className="font-bold text-purple-900">Mẫu câu hỏi ý kiến:</span>
                  <p className="text-slate-700 mt-1 font-medium">
                    "Which club would you like to join, and why?"
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-purple-50 border border-purple-200">
                  <span className="font-bold text-purple-900">Mẫu câu trả lời ghi điểm:</span>
                  <p className="text-slate-700 mt-1 font-medium">
                    "I want to join the <strong>Origami Club</strong> because it helps me develop patience and relax after stressful lessons."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 6: LESSON 6 - SKILLS 2 (Page 35) */}
      {/* ======================================================== */}
      {activeLesson === 'skills_2' && (
        <div className="space-y-6">
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Lesson 6 • Trang 35 SGK</span>
              <h2 className="text-2xl font-black text-slate-800 mt-1">
                Skills 2: Listening & Writing - Áp Lực Tuổi Teen & Bí Kíp Giải Tỏa
              </h2>
            </div>

            {/* Listening Section: Causes of Teen Stress */}
            <div className="rounded-2xl border-2 border-rose-200 bg-rose-50/50 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-rose-900 text-base flex items-center gap-2">
                    <Headphones className="w-5 h-5 text-rose-600" />
                    <span>1. Listening: Các nguyên nhân gây stress ở tuổi thiếu niên</span>
                  </h3>
                  <p className="text-xs text-rose-700 mt-0.5">Khám phá nội dung bài nghe SGK trang 35</p>
                </div>
                <button
                  onClick={() => speakText("Many teenagers suffer from stress today. The first cause is heavy schoolwork and exam pressure. Another cause is high expectations from parents. Moreover, teens also experience peer pressure from classmates.")}
                  className="px-3 py-1.5 rounded-xl bg-rose-200 hover:bg-rose-300 text-rose-900 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5 text-rose-800" />
                  <span>Nghe bài giảng</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white border border-rose-100 space-y-1">
                  <span className="font-extrabold text-rose-900">📚 1. Schoolwork & Exams:</span>
                  <p className="text-slate-600 leading-relaxed">
                    Khối lượng bài tập nhiều và các bài kiểm tra dồn dập khiến học sinh thức khuya và thiếu ngủ.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-rose-100 space-y-1">
                  <span className="font-extrabold text-rose-900">👨‍👩‍👦 2. Parents' Expectations:</span>
                  <p className="text-slate-600 leading-relaxed">
                    Kỳ vọng quá cao từ gia đình muốn con luôn đạt điểm tuyệt đối tạo gánh nặng tâm lý lớn.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-rose-100 space-y-1">
                  <span className="font-extrabold text-rose-900">👥 3. Peer Pressure:</span>
                  <p className="text-slate-600 leading-relaxed">
                    Áp lực phải bắt kịp bạn bè về điểm số, trang phục, xu hướng mạng xã hội hoặc bị trêu chọc.
                  </p>
                </div>
              </div>
            </div>

            {/* Guided Writing Workbench */}
            <div className="rounded-2xl border border-slate-200 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-800 text-base flex items-center gap-2">
                    <PenTool className="w-5 h-5 text-amber-500" />
                    <span>2. Guided Writing: Viết đoạn văn (80 - 100 từ) về cách vượt qua stress tuổi teen</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">Dàn ý chuẩn mực theo yêu cầu SGK trang 35</p>
                </div>
                <button
                  onClick={() => setShowModelEssay(!showModelEssay)}
                  className="px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-700" />
                  <span>{showModelEssay ? 'Ẩn bài mẫu' : 'Xem đoạn văn mẫu'}</span>
                </button>
              </div>

              {/* Model Essay Popup */}
              {showModelEssay && (
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-900">Đoạn văn mẫu tham khảo đạt điểm tối đa (95 từ):</span>
                    <button 
                      onClick={() => speakText("Nowadays, many teenagers suffer from stress and pressure. Firstly, schoolwork and exams make students feel exhausted. Secondly, high expectations from parents and peer pressure also cause anxiety. To overcome this stress, teenagers should take several steps. First, they should make a reasonable study timetable to manage their time better. In addition, doing physical exercise and joining school clubs help teens relax. Finally, students should talk to their parents or school counselors instead of keeping their worries to themselves. In short, with healthy habits, teens can stay calm and happy.")}
                      className="text-xs text-amber-800 hover:text-amber-950 font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Nghe đọc bài mẫu</span>
                    </button>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-serif italic">
                    "Nowadays, many teenagers suffer from stress and pressure. Firstly, schoolwork and exams make students feel exhausted. Secondly, high expectations from parents and peer pressure also cause anxiety. To overcome this stress, teenagers should take several steps. First, they should make a reasonable study timetable to manage their time better. In addition, doing physical exercise and joining school clubs help teens relax. Finally, students should talk to their parents or school counselors instead of keeping their worries to themselves. In short, with healthy habits, teens can stay calm and happy."
                  </p>
                  <div className="p-2.5 rounded-xl bg-white border border-amber-100 text-[11px] text-slate-600 space-y-1">
                    <div className="font-bold text-amber-900">Dịch nghĩa:</div>
                    <p>
                      Ngày nay, nhiều thanh thiếu niên phải chịu áp lực và căng thẳng. Đầu tiên, bài vở và thi cử khiến học sinh cảm thấy kiệt sức. Thứ hai, kỳ vọng cao từ cha mẹ và áp lực bạn bè cũng gây ra lo âu. Để vượt qua căng thẳng này, thiếu niên nên thực hiện một số bước. Thứ nhất, các bạn nên lập một thời gian biểu học tập hợp lý để quản lý thời gian tốt hơn. Ngoài ra, tập thể dục và tham gia các CLB trường học giúp giải tỏa mệt mỏi. Cuối cùng, học sinh nên giãi bày với cha mẹ hoặc chuyên viên tư vấn tâm lý thay vì giữ kín nỗi lo trong lòng. Tóm lại, với những thói quen lành mạnh, tuổi teen hoàn toàn có thể giữ được sự bình tĩnh và vui tươi.
                    </p>
                  </div>
                </div>
              )}

              {/* Writing Interactive Area */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-700">Khung soạn thảo thực hành của học sinh:</span>
                  <span className={`font-bold ${essayText.trim().split(/\s+/).filter(Boolean).length >= 80 ? 'text-emerald-600' : 'text-slate-500'}`}>
                    Số từ: {essayText.trim().split(/\s+/).filter(Boolean).length} / 80-100 từ
                  </span>
                </div>
                <textarea
                  value={essayText}
                  onChange={(e) => setEssayText(e.target.value)}
                  placeholder="Bắt đầu viết đoạn văn của bạn ở đây: 'Nowadays, teenagers face various kinds of stress...'"
                  rows={6}
                  className="w-full p-3.5 rounded-2xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-xs sm:text-sm leading-relaxed"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 7: LESSON 7 - LOOKING BACK & PROJECT (Pages 36-37) */}
      {/* ======================================================== */}
      {activeLesson === 'looking_back' && (
        <div className="space-y-6">
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Lesson 7 • Trang 36 - 37 SGK</span>
              <h2 className="text-2xl font-black text-slate-800 mt-1">
                Looking Back & Project: Dự Án Thành Lập Câu Lạc Bộ Mới
              </h2>
            </div>

            {/* Looking Back Review Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
                <h3 className="font-extrabold text-amber-900 text-sm flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-600" />
                  <span>Tổng kết từ vựng cần nhớ (Vocabulary Checklist)</span>
                </h3>
                <ul className="text-xs text-slate-700 space-y-1.5">
                  <li>✓ Đã thuộc các CLB: <em>chess, arts and crafts, sports, language, origami</em></li>
                  <li>✓ Đã phân biệt hành động mạng xã hội: <em>browse, upload, log on, check notifications</em></li>
                  <li>✓ Hiểu rõ từ vựng tâm lý: <em>peer pressure, expectations, bully, stay calm, counselor</em></li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-3">
                <h3 className="font-extrabold text-purple-900 text-sm flex items-center gap-2">
                  <Zap className="w-4 h-4 text-purple-600" />
                  <span>Tổng kết ngữ pháp cần nhớ (Grammar Checklist)</span>
                </h3>
                <ul className="text-xs text-slate-700 space-y-1.5">
                  <li>✓ Câu đơn (Simple): Chỉ có 1 mệnh đề độc lập</li>
                  <li>✓ Câu ghép (Compound): Nối bằng FANBOYS có dấu phẩy <code>, and / but / so</code></li>
                  <li>✓ Trạng từ liên kết: <code>; however,</code> / <code>; therefore,</code> / <code>; otherwise,</code></li>
                </ul>
              </div>
            </div>

            {/* School Club Project (Trang 37 SGK) */}
            <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/40 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">School Project</span>
                  <h3 className="text-xl font-black text-slate-800 mt-0.5">
                    Dự án: "A Club for Our School" (Ý Tưởng CLB Mới Cho Trường Em)
                  </h3>
                </div>
                <span className="text-2xl">🎨</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Yêu cầu SGK trang 37: Làm việc theo nhóm lên kế hoạch thành lập một câu lạc bộ mới cho trường. Dưới đây là mẫu poster gợi ý:
              </p>

              <div className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm space-y-3 text-xs">
                <div className="flex items-center justify-between border-b border-emerald-100 pb-2">
                  <span className="font-extrabold text-emerald-900 text-sm">GỢI Ý POSTER CLB: "THE GREEN TEEN CLUB"</span>
                  <span className="text-emerald-700 font-bold">Thứ 7 hàng tuần</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="font-bold text-slate-800">• Tên CLB:</span> Green Teen Club (CLB Thiếu Niên Sống Xanh)
                  </div>
                  <div>
                    <span className="font-bold text-slate-800">• Mục tiêu:</span> Bảo vệ môi trường trường học & tái chế rác thải
                  </div>
                  <div>
                    <span className="font-bold text-slate-800">• Hoạt động:</span> Trồng cây, làm đồ tái chế DIY, dọn dẹp khuôn viên
                  </div>
                  <div>
                    <span className="font-bold text-slate-800">• Lợi ích:</span> Giúp học sinh hòa mình với thiên nhiên, giảm stress
                  </div>
                </div>
              </div>
            </div>

            {/* Direct action links */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
              <span className="text-xs text-slate-500 font-medium">
                Bạn đã hoàn thành toàn bộ 7 bài học trực quan của Unit 3!
              </span>
              <div className="flex items-center gap-2">
                {onGoToFlashcards && (
                  <button
                    onClick={onGoToFlashcards}
                    className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                  >
                    Ôn Flashcards Ngay
                  </button>
                )}
                {onGoToQuiz && (
                  <button
                    onClick={onGoToQuiz}
                    className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs shadow-md transition-all cursor-pointer"
                  >
                    Làm Bài Kiểm Tra
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
