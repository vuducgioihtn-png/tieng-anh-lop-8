import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, Volume2, CheckCircle2, RotateCcw, Lightbulb, 
  ArrowLeft, ArrowRight, Heart, Brain, Zap, Layers, Play,
  MessageCircle, HelpCircle, Trophy, BookOpen, Users,
  PenTool, Headphones, Smile, Eye, Share2, Award, FileText,
  MapPin, Home, Flame, Music
} from 'lucide-react';
import { getReadingTip } from '../../utils/pronunciationHelper';
import { speakEnglish } from '../../utils/audio';

interface Unit4VisualMasterProps {
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

export const Unit4VisualMaster: React.FC<Unit4VisualMasterProps> = ({
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

  // State for Getting Started (Pages 40-41)
  const [gsMcqAnswers, setGsMcqAnswers] = useState<Record<number, string>>({});
  const [gsFillAnswers, setGsFillAnswers] = useState<Record<number, string>>({});

  // State for Phonetics Lab /k/ vs /g/ (Page 42)
  const [phoneticBasket, setPhoneticBasket] = useState<Record<string, '/k/' | '/g/'>>({});

  // State for Closer Look 2: Countable/Uncountable & Quantifiers (Page 43)
  const [cuAnswers, setCuAnswers] = useState<Record<number, 'C' | 'U'>>({});
  const [quantifierAnswers, setQuantifierAnswers] = useState<Record<number, string>>({});

  // State for Skills 1 Reading T/F (Page 45)
  const [stiltTfAnswers, setStiltTfAnswers] = useState<Record<number, boolean>>({});

  // State for Skills 2 Listening MCQs (Page 47)
  const [listenAnswers, setListenAnswers] = useState<Record<number, string>>({});

  // State for Guided Writing (Page 47)
  const [writingEssay, setWritingEssay] = useState<string>('');
  const [showModelWriting, setShowModelWriting] = useState<boolean>(false);

  // Tabs definitions
  const tabs: { id: LessonTab; label: string; sub: string; badge: string; icon: any }[] = [
    { id: 'mindmap', label: 'Bản Đồ Tư Duy', sub: 'Toàn cảnh 54 dân tộc', badge: 'Overview', icon: Brain },
    { id: 'getting_started', label: '1. Getting Started', sub: 'I’m from the Tay group', badge: 'Trang 40', icon: Users },
    { id: 'closer_look_1', label: '2. Closer Look 1', sub: 'Nhà Rông & Âm /k/ - /g/', badge: 'Trang 42', icon: Volume2 },
    { id: 'closer_look_2', label: '3. Closer Look 2', sub: 'Câu hỏi & Danh từ đếm được', badge: 'Trang 43', icon: Zap },
    { id: 'communication', label: '4. Communication', sub: 'Quan điểm & Dân tộc Gia-rai', badge: 'Trang 44', icon: MessageCircle },
    { id: 'skills_1', label: '5. Skills 1', sub: 'Đọc & Nói về Nhà Sàn', badge: 'Trang 45', icon: BookOpen },
    { id: 'skills_2', label: '6. Skills 2', sub: 'Trẻ em vùng cao & Viết', badge: 'Trang 47', icon: PenTool },
    { id: 'looking_back', label: '7. Looking Back', sub: 'Sửa lỗi & Dự án Poster', badge: 'Trang 48', icon: Trophy },
  ];

  return (
    <div className="space-y-6 pb-20 max-w-6xl mx-auto">
      {/* Top Banner Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-700 via-emerald-600 to-amber-600 p-6 sm:p-8 text-white shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs font-bold text-teal-200 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-xl backdrop-blur-sm cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Quay lại Trang chủ</span>
            </button>
            <div className="inline-flex items-center gap-2 ml-2 rounded-full bg-teal-400/20 px-3 py-0.5 text-xs font-semibold text-teal-200">
              <Award className="w-3.5 h-3.5 text-teal-300" />
              <span>Tiếng Anh 8 Global Success • Trang 40 - 49 SGK</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              Unit 4: Ethnic Groups of Viet Nam
            </h1>
            <p className="text-teal-100 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Trạm học trực quan 7 bài SGK: Khám phá vẻ đẹp 54 dân tộc anh em Việt Nam, nhà sàn, nhà Rông, ruộng bậc thang, 
              chinh phục ngữ pháp Câu hỏi Yes/No & Wh-questions, Danh từ đếm được/không đếm được và âm /k/ - /g/!
            </p>
          </div>

          <div className="flex sm:flex-col gap-2 shrink-0">
            {onGoToFlashcards && (
              <button
                onClick={onGoToFlashcards}
                className="px-4 py-2.5 rounded-xl bg-white text-teal-900 font-extrabold text-xs shadow-md hover:bg-teal-50 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-teal-600" />
                <span>35 Flashcards Unit 4</span>
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

        {/* Tab switchers */}
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
                    ? 'bg-white text-teal-900 shadow-md font-black scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-teal-600' : 'text-teal-200'}`} />
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                  isActive ? 'bg-teal-100 text-teal-800' : 'bg-black/20 text-white/80'
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
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 flex items-center gap-2.5">
                  <Brain className="w-6 h-6 text-teal-600" />
                  <span>Bản Đồ Tư Duy Toàn Cảnh: 54 Dân Tộc Việt Nam (Unit 4 Mindmap)</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Khái quát trực quan 4 mảng kiến thức trọng tâm trong 10 trang SGK
                </p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-teal-100 text-teal-800 font-bold">
                Trọn bộ 7 bài SGK
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Branch 1 */}
              <div className="rounded-2xl border-2 border-teal-200 bg-teal-50/50 p-4 space-y-3 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-teal-800 font-black text-sm">
                  <span className="w-6 h-6 rounded-lg bg-teal-600 text-white flex items-center justify-center text-xs">1</span>
                  <span>54 Dân Tộc & Địa Bàn</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Đặc điểm dân cư và các vùng miền sinh sống:
                </p>
                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded-lg bg-white border border-teal-100">
                    <span className="font-bold text-teal-900">• Người Kinh:</span> chiếm 87%, đông nhất
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-teal-100">
                    <span className="font-bold text-teal-900">• Miền núi phía Bắc:</span> H'Mông, Tày, Nùng, Thái
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-teal-100">
                    <span className="font-bold text-teal-900">• Tây Nguyên & Nam Bộ:</span> Gia-rai, Ba-na, Ê-đê, Chăm, Khmer
                  </div>
                </div>
              </div>

              {/* Branch 2 */}
              <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/50 p-4 space-y-3 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-amber-800 font-black text-sm">
                  <span className="w-6 h-6 rounded-lg bg-amber-600 text-white flex items-center justify-center text-xs">2</span>
                  <span>Nhà Sàn & Nhà Rông</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Kiến trúc nhà ở độc đáo gắn liền với thiên nhiên:
                </p>
                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded-lg bg-white border border-amber-100">
                    <span className="font-bold text-amber-900">• Stilt house:</span> cọc cao 2-3m, cầu thang 7/9 bậc
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-amber-100">
                    <span className="font-bold text-amber-900">• Open fire:</span> bếp lửa trung tâm gian bếp
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-amber-100">
                    <span className="font-bold text-amber-900">• Rong house:</span> nhà rông to nhất, trái tim buôn làng
                  </div>
                </div>
              </div>

              {/* Branch 3 */}
              <div className="rounded-2xl border-2 border-rose-200 bg-rose-50/50 p-4 space-y-3 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-rose-800 font-black text-sm">
                  <span className="w-6 h-6 rounded-lg bg-rose-600 text-white flex items-center justify-center text-xs">3</span>
                  <span>Văn Hóa & Phong Tục</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ẩm thực, nhạc cụ và các điệu múa truyền thống:
                </p>
                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded-lg bg-white border border-rose-100">
                    <span className="font-bold text-rose-900">• Nhạc cụ:</span> đàn tính, cồng chiêng, sáo trúc
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-rose-100">
                    <span className="font-bold text-rose-900">• Ẩm thực & Múa:</span> xôi ngũ sắc, múa sạp
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-rose-100">
                    <span className="font-bold text-rose-900">• Nghề thủ công:</span> dệt thổ cẩm (weaving), tượng gỗ
                  </div>
                </div>
              </div>

              {/* Branch 4 */}
              <div className="rounded-2xl border-2 border-sky-200 bg-sky-50/50 p-4 space-y-3 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-sky-800 font-black text-sm">
                  <span className="w-6 h-6 rounded-lg bg-sky-600 text-white flex items-center justify-center text-xs">4</span>
                  <span>Ngữ Pháp & Phát Âm</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Đặt câu hỏi & Phân loại danh từ:
                </p>
                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded-lg bg-white border border-sky-100">
                    <span className="font-bold text-sky-900">• Yes/No & Wh-:</span> What, Where, When, How tall, Which
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-sky-100">
                    <span className="font-bold text-sky-900">• Lượng từ:</span> a/an, many, a few vs much, a little
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-sky-100">
                    <span className="font-bold text-sky-900">• Âm /k/ vs /g/:</span> cultural /k/ vs gong /g/
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">
                👉 Khám phá từng bài học bên dưới để nắm chắc kiến thức:
              </span>
              <button
                onClick={() => setActiveLesson('getting_started')}
                className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Bắt đầu Bài 1: Getting Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 1: LESSON 1 - GETTING STARTED (Pages 40-41) */}
      {/* ======================================================== */}
      {activeLesson === 'getting_started' && (
        <div className="space-y-6">
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Lesson 1 • Trang 40 - 41 SGK</span>
                <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2 mt-1">
                  <span>I'm from the Tay ethnic group</span>
                  <span className="text-base font-normal text-slate-500">(Tôi là người dân tộc Tày)</span>
                </h2>
              </div>
              <button
                onClick={() => speakText("Hi, I'm Tom. You look new here. - I am. I'm Lai from Ha Giang. I'm from the Tay ethnic group. We live in a stilt house overlooking terraced fields.")}
                className="px-3 py-1.5 rounded-xl bg-teal-100 hover:bg-teal-200 text-teal-900 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5 text-teal-700" />
                <span>Nghe đoạn mở đầu</span>
              </button>
            </div>

            {/* Dialogue */}
            <div className="rounded-2xl bg-teal-50/60 border border-teal-200/80 p-5 space-y-3">
              <span className="text-xs font-bold text-teal-900 flex items-center gap-1.5">
                <MessageCircle className="w-4 h-4 text-teal-600" />
                <span>Đoạn hội thoại nguyên bản SGK (Tom & Lai)</span>
              </span>

              <div className="space-y-2.5 text-xs sm:text-sm">
                {[
                  { speaker: 'Tom', en: "Hi, I'm Tom. You look new here.", vi: "Chào bạn, tớ là Tom. Trông bạn có vẻ là người mới ở đây nhỉ." },
                  { speaker: 'Lai', en: "I am. I'm Lai from Ha Giang. I'm from the Tay ethnic group. We are the second largest ethnic group in Viet Nam, only after the Kinh.", vi: "Đúng rồi. Tớ là Lai đến từ Hà Giang. Tớ là người dân tộc Tày. Dân tộc Tày là dân tộc đông dân thứ hai ở Việt Nam, chỉ sau người Kinh thôi." },
                  { speaker: 'Tom', en: "Oh ... I once saw a bamboo house on high posts in a travel brochure. Do you live in a home like that?", vi: "Ồ... Tớ từng nhìn thấy một ngôi nhà bằng tre dựng trên những chiếc cọc cao trong sách hướng dẫn du lịch. Cậu có sống trong một ngôi nhà như thế không?" },
                  { speaker: 'Lai', en: "Yes, we call it a 'stilt house'. Our house overlooks terraced fields.", vi: "Có chứ, tụi tớ gọi đó là 'nhà sàn'. Nhà của tụi tớ nhìn ra những thửa ruộng bậc thang." },
                  { speaker: 'Tom', en: "Awesome. What is life in your village like?", vi: "Tuyệt thật. Cuộc sống ở bản làng cậu như thế nào?" },
                  { speaker: 'Lai', en: "It's peaceful. There are 16 houses in my village. We live very close to nature. You can see our culture in folk dances, musical instruments like đàn tính, and our special five-colour sticky rice.", vi: "Yên bình lắm. Bản tớ có 16 nếp nhà. Tụi tớ sống rất gần gũi với thiên nhiên. Cậu có thể thấy văn hóa của tụi tớ qua các điệu múa dân gian, nhạc cụ như đàn tính và món xôi ngũ sắc đặc biệt nữa." }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => speakText(item.en)}
                    className="p-3 rounded-xl bg-white border border-teal-100 hover:border-teal-400 hover:shadow-xs transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-0.5">
                      <span className={`font-black ${item.speaker === 'Tom' ? 'text-blue-700' : 'text-emerald-700'}`}>
                        {item.speaker}:
                      </span>
                      <Volume2 className="w-3.5 h-3.5 text-slate-300 group-hover:text-teal-600" />
                    </div>
                    <p className="text-slate-800 font-medium">{item.en}</p>
                    <p className="text-slate-500 text-xs italic mt-0.5">({item.vi})</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Exercise 2: Circle correct answers (Page 41) */}
            <div className="rounded-2xl border border-slate-200 p-5 space-y-4">
              <h3 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-teal-600" />
                <span>Bài tập 2 SGK: Đọc lại hội thoại và chọn đáp án chính xác</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                {[
                  {
                    id: 1,
                    q: "1. What are Tom and Lai talking about?",
                    options: ['A. Minority groups in Viet Nam.', 'B. Ha Giang.', 'C. Life of the Tay people.'],
                    correct: 'C',
                    explain: "Cả đoạn hội thoại xoay quanh đời sống của người Tày (nhà sàn, đàn tính, xôi ngũ sắc, làng bản của Lai)."
                  },
                  {
                    id: 2,
                    q: "2. A 'stilt house' ________.",
                    options: ['A. is a multi-storey home', 'B. is on high posts', 'C. always faces a field'],
                    correct: 'B',
                    explain: "Trong bài: 'a bamboo house on high posts... we call it a stilt house' (nhà sàn dựng trên cọc gỗ cao)."
                  },
                  {
                    id: 3,
                    q: "3. Lai mentions ________ of the Tay people.",
                    options: ['A. folk dances', 'B. popular festivals', 'C. costumes'],
                    correct: 'A',
                    explain: "Trong bài Lai kể: 'You can see it in our folk dances, musical instruments like đàn tính...'"
                  }
                ].map((item) => {
                  const userChoice = gsMcqAnswers[item.id];
                  const isCorrect = userChoice === item.correct;
                  return (
                    <div key={item.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="font-extrabold text-slate-800">{item.q}</div>
                      <div className="flex flex-wrap gap-2">
                        {item.options.map((opt) => {
                          const optKey = opt.charAt(0);
                          return (
                            <button
                              key={opt}
                              onClick={() => {
                                setGsMcqAnswers(prev => ({ ...prev, [item.id]: optKey }));
                                if (optKey === item.correct) triggerConfetti();
                              }}
                              className={`px-3.5 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                                userChoice === optKey
                                  ? optKey === item.correct
                                    ? 'bg-emerald-600 text-white border-emerald-600'
                                    : 'bg-rose-500 text-white border-rose-500'
                                  : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400'
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                      {userChoice && (
                        <div className="text-xs text-slate-600 mt-1">
                          <strong className={isCorrect ? 'text-emerald-600' : 'text-rose-600'}>
                            {isCorrect ? '✓ Đúng: ' : '✗ Sai: '}
                          </strong>
                          {item.explain}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Exercise 4: Complete sentences with words from box (Page 41) */}
            <div className="rounded-2xl border border-slate-200 p-5 space-y-4">
              <h3 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Bài tập 4 SGK: Điền từ vào chỗ trống từ hộp từ vựng</span>
              </h3>

              <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-xs font-bold text-amber-900 flex flex-wrap gap-2">
                <span>Hộp từ SGK:</span>
                <span className="px-2 py-0.5 bg-white rounded border border-amber-200">overlooks</span>
                <span className="px-2 py-0.5 bg-white rounded border border-amber-200">traditional</span>
                <span className="px-2 py-0.5 bg-white rounded border border-amber-200">folk dance</span>
                <span className="px-2 py-0.5 bg-white rounded border border-amber-200">musical instrument</span>
                <span className="px-2 py-0.5 bg-white rounded border border-amber-200">ethnic groups</span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                {[
                  { id: 1, text: "1. I love mua sap, a popular ________ of the Thai people.", word: 'folk dance' },
                  { id: 2, text: "2. Their beautiful stilt house ________ a large rice field.", word: 'overlooks' },
                  { id: 3, text: "3. What is the name of a popular Tay's ________? - It's dan tinh.", word: 'musical instrument' },
                  { id: 4, text: "4. Every ethnic group has their own ________ culture.", word: 'traditional' },
                  { id: 5, text: "5. Of the 54 ________ in Viet Nam, the Kinh is the largest.", word: 'ethnic groups' }
                ].map((item) => (
                  <div key={item.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="font-medium text-slate-800 flex-1">{item.text}</span>
                    <button
                      onClick={() => {
                        setGsFillAnswers(prev => ({ ...prev, [item.id]: item.word }));
                        triggerConfetti();
                      }}
                      className="px-3 py-1 rounded-lg bg-teal-100 hover:bg-teal-200 text-teal-900 font-bold text-xs transition-colors cursor-pointer shrink-0"
                    >
                      {gsFillAnswers[item.id] ? `✓ ${item.word}` : 'Chạm để hiện đáp án'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 2: LESSON 2 - CLOSER LOOK 1 (Page 42) */}
      {/* ======================================================== */}
      {activeLesson === 'closer_look_1' && (
        <div className="space-y-6">
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Lesson 2 • Trang 42 SGK</span>
              <h2 className="text-2xl font-black text-slate-800 mt-1">
                A Closer Look 1: Từ Vựng Bản Sắc & Phòng Thí Nghiệm Phát Âm (/k/ - /g/)
              </h2>
            </div>

            {/* Visual Vocabulary Grid */}
            <div className="space-y-3">
              <h3 className="font-extrabold text-slate-800 text-base flex items-center gap-2">
                <Eye className="w-5 h-5 text-teal-600" />
                <span>1. Bộ thẻ từ vựng minh họa hình ảnh (Bài 1 Trang 42 SGK)</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
                {[
                  { name: 'wooden statue', mean: 'tượng gỗ nhà mồ', icon: '🗿', pron: '/ˈwʊdn ˈstætʃuː/' },
                  { name: 'Rong house', mean: 'nhà Rông Tây Nguyên', icon: '🛖', pron: '/rɒŋ haʊs/' },
                  { name: 'weaving', mean: 'nghề dệt vải', icon: '🧵', pron: '/ˈwiːvɪŋ/' },
                  { name: 'bamboo flute', mean: 'sáo trúc', icon: '🪈', pron: '/ˌbæmˈbuː fluːt/' },
                  { name: 'gong', mean: 'cồng chiêng', icon: '🔔', pron: '/ɡɒŋ/' },
                  { name: 'terraced fields', mean: 'ruộng bậc thang', icon: '🌾', pron: '/ˈterəst fiːldz/' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => speakText(item.name)}
                    className="p-3 rounded-2xl bg-teal-50/50 border border-teal-200 hover:border-teal-400 hover:shadow-xs transition-all cursor-pointer text-center space-y-1.5 group"
                  >
                    <span className="text-3xl block">{item.icon}</span>
                    <div className="font-extrabold text-slate-800">{item.name}</div>
                    <div className="text-[10px] text-teal-700 font-mono font-semibold">{item.pron}</div>
                    <div className="text-[10px] text-amber-900 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                      {getReadingTip(item.name, item.pron)}
                    </div>
                    <div className="text-slate-600 text-[11px] font-medium">{item.mean}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phonetics Lab: /k/ vs /g/ */}
            <div className="rounded-2xl border-2 border-indigo-200 bg-indigo-50/40 p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">Phonetics Lab</span>
                  <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mt-0.5">
                    <Volume2 className="w-5 h-5 text-indigo-600" />
                    <span>Phân biệt Âm vô thanh /k/ và Âm hữu thanh /g/ (Trang 42 SGK)</span>
                  </h3>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-indigo-200 text-indigo-900 font-bold">
                  Quy tắc phát âm
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                {/* /k/ */}
                <div className="p-4 rounded-2xl bg-white border border-indigo-100 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-indigo-600">/k/</span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700">
                      Âm vô thanh (bật hơi, không rung cổ)
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { word: 'cultural', pron: '/ˈkʌltʃərəl/', mean: 'thuộc về văn hóa' },
                      { word: 'communal', pron: '/kəˈmjuːnl/', mean: 'cộng đồng' },
                      { word: 'musical', pron: '/ˈmjuːzɪkl/', mean: 'thuộc âm nhạc' },
                      { word: 'folk', pron: '/fəʊk/', mean: 'dân gian' },
                      { word: 'overlook', pron: '/ˌəʊvəˈlʊk/', mean: 'nhìn ra' }
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

                {/* /g/ */}
                <div className="p-4 rounded-2xl bg-white border border-rose-100 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-rose-600">/g/</span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-rose-50 text-rose-700">
                      Âm hữu thanh (rung dây thanh quản)
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { word: 'gong', pron: '/ɡɒŋ/', mean: 'cồng chiêng' },
                      { word: 'garden', pron: '/ˈɡɑːdn/', mean: 'khu vườn' },
                      { word: 'gathering', pron: '/ˈɡæðərɪŋ/', mean: 'sum họp, tụ họp' },
                      { word: 'tiger', pron: '/ˈtaɪɡə(r)/', mean: 'con hổ' },
                      { word: 'pig', pron: '/pɪɡ/', mean: 'con lợn' }
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
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 3: LESSON 3 - CLOSER LOOK 2 (Page 43) */}
      {/* ======================================================== */}
      {activeLesson === 'closer_look_2' && (
        <div className="space-y-6">
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Lesson 3 • Trang 43 SGK</span>
              <h2 className="text-2xl font-black text-slate-800 mt-1">
                A Closer Look 2: Câu Hỏi Yes/No, Wh- & Danh Từ Đếm Được / Không Đếm Được
              </h2>
            </div>

            {/* Grammar 1: Questions */}
            <div className="rounded-2xl border border-slate-200 p-5 space-y-4">
              <h3 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-teal-600" />
                <span>1. Chọn từ để hỏi chính xác (Wh-questions - Bài 2 Trang 43 SGK)</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                {[
                  {
                    id: 1,
                    q: "A: ________ do you like best about Sa Pa? - B: I like its local markets best.",
                    options: ['A. Why', 'B. What'],
                    correct: 'B. What',
                    explain: "Hỏi về điều bạn thích nhất (sự vật/nơi chốn) dùng 'What'."
                  },
                  {
                    id: 2,
                    q: "A: ________ can we find the most beautiful terraced fields? - B: In Mu Cang Chai.",
                    options: ['A. When', 'B. Where'],
                    correct: 'B. Where',
                    explain: "Hỏi về địa điểm ('In Mu Cang Chai') dùng từ để hỏi 'Where'."
                  },
                  {
                    id: 3,
                    q: "A: ________ is the Ban Flower Festival? - B: It's in spring.",
                    options: ['A. When', 'B. Why'],
                    correct: 'A. When',
                    explain: "Hỏi về thời gian ('In spring' - vào mùa xuân) dùng 'When'."
                  },
                  {
                    id: 4,
                    q: "A: ________ tall is an average stilt house? - B: About 5 - 6 metres tall.",
                    options: ['A. How', 'B. What'],
                    correct: 'A. How',
                    explain: "Cụm hỏi chiều cao: 'How tall is...'."
                  },
                  {
                    id: 5,
                    q: "A: ________ festival is more important for the Kinh: Mid-Autumn or Lunar New Year? - B: Lunar New Year.",
                    options: ['A. What', 'B. Which'],
                    correct: 'B. Which',
                    explain: "Hỏi lựa chọn trong 2 lễ hội cụ thể dùng 'Which'."
                  }
                ].map((item) => (
                  <div key={item.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="font-medium text-slate-800">{item.q}</div>
                    <div className="flex gap-2">
                      {item.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => {
                            if (opt === item.correct) triggerConfetti();
                          }}
                          className="px-3.5 py-1.5 rounded-lg border text-xs font-bold bg-white hover:bg-teal-50 text-slate-700 cursor-pointer"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                    <div className="text-[11px] text-slate-500 italic">💡 {item.explain}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grammar 2: Countable vs Uncountable */}
            <div className="rounded-2xl border-2 border-teal-200 bg-teal-50/50 p-5 space-y-4">
              <h3 className="font-extrabold text-teal-900 text-sm flex items-center gap-2">
                <Zap className="w-4 h-4 text-teal-600" />
                <span>2. Phân loại danh từ Đếm được (C) hay Không đếm được (U) (Bài 3 Trang 43 SGK)</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                {[
                  { id: 1, word: '1. groups', type: 'C', note: 'nhóm (có thêm -s)' },
                  { id: 2, word: '2. land', type: 'U', note: 'đất đai (không đếm được)' },
                  { id: 3, word: '3. area', type: 'C', note: 'khu vực (an area, areas)' },
                  { id: 4, word: '4. trees', type: 'C', note: 'cây cối (danh từ số nhiều)' },
                  { id: 5, word: '5. ash', type: 'U', note: 'tro bụi (không đếm được)' },
                  { id: 6, word: '6. crops', type: 'C', note: 'mùa vụ, cây trồng' }
                ].map((item) => {
                  const userChoice = cuAnswers[item.id];
                  return (
                    <div key={item.id} className="p-3 rounded-xl bg-white border border-teal-100 space-y-2">
                      <div className="font-extrabold text-slate-800">{item.word}</div>
                      <div className="flex gap-1.5">
                        <button
                          onClick={() => {
                            setCuAnswers(prev => ({ ...prev, [item.id]: 'C' }));
                            if (item.type === 'C') triggerConfetti();
                          }}
                          className={`flex-1 py-1 rounded font-bold text-xs cursor-pointer ${
                            userChoice === 'C'
                              ? item.type === 'C' ? 'bg-emerald-600 text-white' : 'bg-rose-500 text-white'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                          }`}
                        >
                          C (Đếm được)
                        </button>
                        <button
                          onClick={() => {
                            setCuAnswers(prev => ({ ...prev, [item.id]: 'U' }));
                            if (item.type === 'U') triggerConfetti();
                          }}
                          className={`flex-1 py-1 rounded font-bold text-xs cursor-pointer ${
                            userChoice === 'U'
                              ? item.type === 'U' ? 'bg-emerald-600 text-white' : 'bg-rose-500 text-white'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                          }`}
                        >
                          U (Không đếm)
                        </button>
                      </div>
                      <div className="text-[10px] text-slate-400">{item.note}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 4: LESSON 4 - COMMUNICATION (Page 44) */}
      {/* ======================================================== */}
      {activeLesson === 'communication' && (
        <div className="space-y-6">
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Lesson 4 • Trang 44 SGK</span>
              <h2 className="text-2xl font-black text-slate-800 mt-1">
                Communication: Đưa Ra Quan Điểm & Hồ Sơ Dân Tộc Gia-Rai (The Jrai)
              </h2>
            </div>

            {/* Giving opinions */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
              <span className="text-xs font-bold text-amber-900 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-amber-600" />
                <span>Everyday English: Mẫu câu đưa ra quan điểm cá nhân (Giving opinions)</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div 
                  onClick={() => speakText("I think it is very interesting. People in the mountains live close to nature.")}
                  className="p-3 rounded-xl bg-white border border-amber-100 hover:border-amber-400 cursor-pointer"
                >
                  <div className="font-bold text-slate-800">"I think it's very interesting..."</div>
                  <div className="text-slate-500 italic mt-0.5">(Tớ nghĩ rằng điều đó rất thú vị...)</div>
                </div>
                <div 
                  onClick={() => speakText("To my way of thinking, there are better services in the city.")}
                  className="p-3 rounded-xl bg-white border border-amber-100 hover:border-amber-400 cursor-pointer"
                >
                  <div className="font-bold text-slate-800">"To my way of thinking, there are better services in the city."</div>
                  <div className="text-slate-500 italic mt-0.5">(Theo suy nghĩ của tớ thì ở thành phố có dịch vụ tốt hơn.)</div>
                </div>
              </div>
            </div>

            {/* Fact sheet: The Jrai */}
            <div className="rounded-2xl border-2 border-teal-200 bg-teal-50/50 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">Fact Sheet Spotlight</span>
                  <h3 className="text-xl font-black text-slate-800 mt-0.5">Dân Tộc Gia-Rai (The Jrai) - Trang 44 SGK</h3>
                </div>
                <span className="text-3xl">🐘</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white border border-teal-100">
                  <span className="font-bold text-teal-900">• Dân số & Nơi ở:</span>
                  <p className="text-slate-700 mt-0.5">513,930 người (2019), dân tộc lớn nhất Tây Nguyên, sống chủ yếu ở Gia Lai trong nhà sàn.</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-teal-100">
                  <span className="font-bold text-teal-900">• Kinh tế nông nghiệp:</span>
                  <p className="text-slate-700 mt-0.5">Trồng trọt, dệt vải, trồng cây công nghiệp (cà phê, cao su, ca cao), thuần dưỡng trâu và voi.</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-teal-100">
                  <span className="font-bold text-teal-900">• Văn hóa đặc sắc:</span>
                  <p className="text-slate-700 mt-0.5">Kho tàng múa dân gian, cồng chiêng, tượng gỗ nhà mồ độc nhất vô nhị.</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-teal-100">
                  <span className="font-bold text-teal-900">• Chế độ gia đình:</span>
                  <p className="text-slate-700 mt-0.5">Theo chế độ mẫu hệ: Người phụ nữ đóng vai trò chủ đạo (dominant role) trong gia đình.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 5: LESSON 5 - SKILLS 1 (Pages 45-46) */}
      {/* ======================================================== */}
      {activeLesson === 'skills_1' && (
        <div className="space-y-6">
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Lesson 5 • Trang 45 - 46 SGK</span>
              <h2 className="text-2xl font-black text-slate-800 mt-1">
                Skills 1: Reading & Speaking - Tất Tần Tật Về Nhà Sàn (Stilt Houses)
              </h2>
            </div>

            {/* Reading Passage */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-teal-600" />
                  <span>Bài đọc nguyên bản SGK: "Stilt houses" (Nhà sàn)</span>
                </h3>
                <button
                  onClick={() => speakText("Stilt houses are popular among different ethnic minority groups, from the Thai in the Northern Highlands to the Khmer in the Mekong Delta. Stilt houses are made from natural materials like wood, bamboo, and leaves. They stand on strong posts, about two or three metres above the ground. People climb a seven or nine step staircase to enter the house. The most important place in the house is the kitchen with an open fire.")}
                  className="px-3 py-1.5 rounded-xl bg-teal-100 hover:bg-teal-200 text-teal-900 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5 text-teal-700" />
                  <span>Nghe bài đọc</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs leading-relaxed">
                <div className="p-4 rounded-xl bg-white border border-teal-200 space-y-2">
                  <span className="font-black text-teal-900 text-sm">🏗️ 1. Vật liệu & Cấu trúc</span>
                  <p className="text-slate-600">
                    Làm từ vật liệu tự nhiên: gỗ, tre, lá. Đứng trên những chiếc cọc cao 2 - 3 mét để bảo vệ người dân an toàn khỏi thú dữ rừng sâu.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-teal-200 space-y-2">
                  <span className="font-black text-teal-900 text-sm">🪜 2. Cầu thang & Bếp lửa</span>
                  <p className="text-slate-600">
                    Cầu thang có 7 hoặc 9 bậc (số lẻ). Nơi quan trọng nhất là gian bếp với bếp lửa lộ thiên (open fire) ở giữa nhà để sum họp và tiếp khách.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-teal-200 space-y-2">
                  <span className="font-black text-teal-900 text-sm">🌄 3. Hướng nhìn & Nhà Rông</span>
                  <p className="text-slate-600">
                    Nhà sàn Tày, Nùng nhìn ra cánh đồng; người Thái hướng ra núi rừng. Người Ba-na và Ê-đê có nhà Rông cao nhất buôn làng.
                  </p>
                </div>
              </div>
            </div>

            {/* True/False Activity */}
            <div className="rounded-2xl border border-slate-200 p-5 space-y-3 text-xs sm:text-sm">
              <h3 className="font-extrabold text-slate-800 text-sm">Bài tập 2 SGK: Chọn True (Đúng) hoặc False (Sai)</h3>
              {[
                { id: 1, text: "1. Only a few minority groups live in stilt houses.", ans: false, explain: "Sai. Rất nhiều dân tộc từ miền Bắc tới miền Nam sống trong nhà sàn." },
                { id: 2, text: "2. All stilt houses look alike.", ans: false, explain: "Sai. Nhà sàn có nhiều kích cỡ và kiểu dáng phong phú khác nhau." },
                { id: 3, text: "3. Family gatherings take place by the open fire in the middle of the house.", ans: true, explain: "Đúng. Mọi buổi sum họp đều diễn ra bên bếp lửa giữa nhà." },
                { id: 4, text: "4. The Rong house serves as the centre of an Ede village.", ans: true, explain: "Đúng. Nhà Rông là trái tim và trung tâm sinh hoạt của buôn làng." }
              ].map((item) => {
                const userChoice = stiltTfAnswers[item.id];
                const isCorrect = userChoice === item.ans;
                return (
                  <div key={item.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="font-medium text-slate-800 flex-1">{item.text}</span>
                    <div className="flex gap-2 shrink-0">
                      <button
                        onClick={() => {
                          setStiltTfAnswers(prev => ({ ...prev, [item.id]: true }));
                          if (item.ans === true) triggerConfetti();
                        }}
                        className={`px-3 py-1 rounded-lg font-bold text-xs cursor-pointer ${
                          userChoice === true
                            ? item.ans === true ? 'bg-emerald-600 text-white' : 'bg-rose-500 text-white'
                            : 'bg-white border border-slate-300 text-slate-700'
                        }`}
                      >
                        True (Đúng)
                      </button>
                      <button
                        onClick={() => {
                          setStiltTfAnswers(prev => ({ ...prev, [item.id]: false }));
                          if (item.ans === false) triggerConfetti();
                        }}
                        className={`px-3 py-1 rounded-lg font-bold text-xs cursor-pointer ${
                          userChoice === false
                            ? item.ans === false ? 'bg-emerald-600 text-white' : 'bg-rose-500 text-white'
                            : 'bg-white border border-slate-300 text-slate-700'
                        }`}
                      >
                        False (Sai)
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 6: LESSON 6 - SKILLS 2 (Page 47) */}
      {/* ======================================================== */}
      {activeLesson === 'skills_2' && (
        <div className="space-y-6">
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Lesson 6 • Trang 47 SGK</span>
              <h2 className="text-2xl font-black text-slate-800 mt-1">
                Skills 2: Listening & Writing - Trẻ Em Vùng Cao & Phụ Giúp Gia Đình
              </h2>
            </div>

            {/* Listening MCQs */}
            <div className="rounded-2xl border-2 border-teal-200 bg-teal-50/50 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-teal-900 text-sm flex items-center gap-2">
                  <Headphones className="w-5 h-5 text-teal-600" />
                  <span>Listening: Cuộc sống của trẻ em dân tộc thiểu số (Bài 3 Trang 47 SGK)</span>
                </h3>
                <button
                  onClick={() => speakText("Minority children usually learn to work at six. Girls weave clothing and prepare food. Boys raise livestock and catch fish. Children learn traditions through stories told by grandparents. Today, the number of minority children going to school is going up.")}
                  className="px-3 py-1.5 rounded-xl bg-teal-200 hover:bg-teal-300 text-teal-900 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Nghe bài giảng</span>
                </button>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                {[
                  { id: 1, q: "1. Minority children usually learn to work at ________.", options: ['A. twelve', 'B. ten', 'C. six'], correct: 'C' },
                  { id: 2, q: "2. Girls ________.", options: ['A. weave clothing', 'B. do the gardening', 'C. catch fish'], correct: 'A' },
                  { id: 3, q: "3. Boys ________.", options: ['A. prepare food', 'B. raise livestock', 'C. do housework'], correct: 'B' },
                  { id: 4, q: "4. Children learn traditions through ________.", options: ['A. work', 'B. music', 'C. stories'], correct: 'C' },
                  { id: 5, q: "5. The number of minority children going to school is ________.", options: ['A. going up', 'B. going down', 'C. staying the same'], correct: 'A' }
                ].map((item) => (
                  <div key={item.id} className="p-3.5 rounded-xl bg-white border border-teal-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="font-medium text-slate-800 flex-1">{item.q}</span>
                    <div className="flex gap-2">
                      {item.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => {
                            setListenAnswers(prev => ({ ...prev, [item.id]: opt.charAt(0) }));
                            if (opt.charAt(0) === item.correct) triggerConfetti();
                          }}
                          className={`px-3 py-1 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                            listenAnswers[item.id] === opt.charAt(0)
                              ? opt.charAt(0) === item.correct ? 'bg-emerald-600 text-white' : 'bg-rose-500 text-white'
                              : 'bg-slate-50 hover:bg-teal-50 text-slate-700'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Writing Workbench */}
            <div className="rounded-2xl border border-slate-200 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-800 text-base flex items-center gap-2">
                    <PenTool className="w-5 h-5 text-amber-500" />
                    <span>Writing: Viết đoạn văn (80 - 100 từ) về những việc em giúp đỡ gia đình</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">Dựa trên gợi ý 5 hoạt động phụ giúp cha mẹ (Trang 47 SGK)</p>
                </div>
                <button
                  onClick={() => setShowModelWriting(!showModelWriting)}
                  className="px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{showModelWriting ? 'Ẩn bài mẫu' : 'Xem đoạn văn mẫu điểm 10'}</span>
                </button>
              </div>

              {showModelWriting && (
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-900">Đoạn văn mẫu (92 từ):</span>
                    <button
                      onClick={() => speakText("Every day, I do several things to help my family. In the morning, I make my bed and feed our chickens before going to school. In the afternoon, after finishing my homework, I sweep the floor and water the vegetables in our small garden. In the evening, I help my mother prepare dinner and wash the dishes after our meal. On weekends, I also look after my younger brother when my parents work. Helping my family makes me feel happy and responsible.")}
                      className="text-xs text-amber-800 font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Nghe đọc bài mẫu</span>
                    </button>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-serif italic">
                    "Every day, I do several things to help my family. In the morning, I make my bed and feed our chickens before going to school. In the afternoon, after finishing my homework, I sweep the floor and water the vegetables in our small garden. In the evening, I help my mother prepare dinner and wash the dishes after our meal. On weekends, I also look after my younger brother when my parents work. Helping my family makes me feel happy and responsible."
                  </p>
                  <div className="p-2.5 rounded-xl bg-white border border-amber-100 text-xs text-slate-600">
                    <strong>Dịch nghĩa:</strong> Mỗi ngày, em làm một số việc để phụ giúp gia đình. Buổi sáng, em gấp chăn màn và cho gà ăn trước khi đến trường. Buổi chiều, sau khi làm xong bài tập, em quét nhà và tưới rau trong vườn. Buổi tối, em giúp mẹ chuẩn bị bữa tối và rửa bát đĩa sau bữa ăn. Vào cuối tuần, em còn trông em trai khi bố mẹ bận làm việc. Giúp đỡ gia đình khiến em cảm thấy rất vui và có trách nhiệm.
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-700">Khung viết bài của học sinh:</span>
                  <span className={`font-bold ${writingEssay.trim().split(/\s+/).filter(Boolean).length >= 80 ? 'text-emerald-600' : 'text-slate-500'}`}>
                    Số từ: {writingEssay.trim().split(/\s+/).filter(Boolean).length} / 80 - 100 từ
                  </span>
                </div>
                <textarea
                  value={writingEssay}
                  onChange={(e) => setWritingEssay(e.target.value)}
                  placeholder="Every day, I do several things to help my family..."
                  rows={6}
                  className="w-full p-3.5 rounded-2xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none text-xs sm:text-sm leading-relaxed"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 7: LESSON 7 - LOOKING BACK & PROJECT (Pages 48-49) */}
      {/* ======================================================== */}
      {activeLesson === 'looking_back' && (
        <div className="space-y-6">
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Lesson 7 • Trang 48 - 49 SGK</span>
              <h2 className="text-2xl font-black text-slate-800 mt-1">
                Looking Back: Bắt Lỗi Sai & Dự Án "Our Ethnic Groups"
              </h2>
            </div>

            {/* Error correction (Page 48 Activity 4) */}
            <div className="rounded-2xl border border-slate-200 p-5 space-y-3">
              <h3 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-500" />
                <span>Bài tập bắt lỗi sai ngữ pháp SGK (Activity 4 Trang 48)</span>
              </h3>

              <div className="space-y-2.5 text-xs sm:text-sm">
                {[
                  { id: 1, wrong: 'A big stilt houses', correct: 'A big stilt house', explain: "Có 'A' (số ít) nên 'houses' phải đổi thành 'house'." },
                  { id: 2, wrong: 'wild banana leave', correct: 'wild banana leaves', explain: "'lá chuối' ở số nhiều phải là 'leaves', không phải 'leave'." },
                  { id: 3, wrong: 'Much people in remote areas', correct: 'Many people', explain: "'people' là danh từ đếm được số nhiều, dùng 'Many', không dùng 'Much'." },
                  { id: 4, wrong: 'do houseworks', correct: 'do housework', explain: "'housework' (việc nhà) là danh từ không đếm được, không thêm -s." },
                  { id: 5, wrong: 'many land for growing crops', correct: 'much land', explain: "'land' (đất đai) là danh từ không đếm được, dùng 'much', không dùng 'many'." }
                ].map((item) => (
                  <div key={item.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex-1">
                      <span className="font-bold text-rose-700 line-through mr-2">{item.wrong}</span>
                      <span className="font-extrabold text-emerald-700">➔ {item.correct}</span>
                      <div className="text-[11px] text-slate-500 mt-0.5">💡 {item.explain}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Exhibition */}
            <div className="rounded-2xl border-2 border-teal-200 bg-teal-50/50 p-6 space-y-3">
              <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">Group Project</span>
              <h3 className="text-xl font-black text-slate-800">Dự án: "Our Ethnic Groups" (Triển Lãm Poster)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Học sinh làm việc theo nhóm chọn 1 dân tộc yêu thích (Tày, H'Mông, Thái, Chăm, Khmer...) và làm poster giới thiệu nơi ở, kinh tế và bản sắc văn hóa độc đáo trước lớp.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
