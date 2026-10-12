import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, Volume2, CheckCircle2, RotateCcw, Lightbulb, 
  ArrowLeft, ArrowRight, Heart, Brain, Zap, Layers, Play,
  MessageCircle, HelpCircle, Trophy, Compass, Check, X,
  FileText, Send, Star, User, BookOpen, Sun, Trees, Home, Wind, MapPin
} from 'lucide-react';
import { speakEnglish, playSound } from '../../utils/audio';
import { addXP } from '../../utils/spacedRepetition';
import { getReadingTip } from '../../utils/pronunciationHelper';

interface Unit2VisualMasterProps {
  onBack: () => void;
  onGoToFlashcards: () => void;
  onGoToQuiz: () => void;
}

export const Unit2VisualMaster: React.FC<Unit2VisualMasterProps> = ({
  onBack,
  onGoToFlashcards,
  onGoToQuiz
}) => {
  const [activeTab, setActiveTab] = useState<
    'mindmap' | 'getting_started' | 'closer_look_1' | 'closer_look_2' | 'communication' | 'skills' | 'looking_back'
  >('mindmap');
  const [showPhoneticsGuide, setShowPhoneticsGuide] = useState(true);

  // Mini-game 1: Comparative Adverb Quiz Lab (A Closer Look 2)
  const adverbQuizItems = [
    { adv: 'fast', correct: 'faster', options: ['faster', 'more fast', 'fastly'], rule: 'Trạng từ ngắn giống tính từ: thêm -er (fast -> faster). KHÔNG CÓ fastly!' },
    { adv: 'slowly', correct: 'more slowly', options: ['more slowly', 'slowlier', 'more slow'], rule: 'Trạng từ 2 âm tiết đuôi -ly: dùng more + adv (more slowly).' },
    { adv: 'well', correct: 'better', options: ['better', 'more well', 'gooder'], rule: 'Bất quy tắc: well -> better.' },
    { adv: 'badly', correct: 'worse', options: ['worse', 'more badly', 'badlier'], rule: 'Bất quy tắc: badly -> worse.' },
    { adv: 'hard', correct: 'harder', options: ['harder', 'more hardly', 'hardlier'], rule: 'Trạng từ ngắn: hard -> harder (chăm chỉ hơn). Chú ý: "hardly" nghĩa là hầu như không!' },
    { adv: 'carefully', correct: 'more carefully', options: ['more carefully', 'carefullier', 'carefuler'], rule: 'Trạng từ đuôi -ly: dùng more + adv (more carefully).' },
    { adv: 'early', correct: 'earlier', options: ['earlier', 'more early', 'earlyer'], rule: 'Trạng từ kết thúc bằng "y": đổi y thành i rồi thêm -er (early -> earlier).' },
    { adv: 'heavily', correct: 'more heavily', options: ['more heavily', 'heavilier', 'more heavy'], rule: 'Trạng từ chỉ mức độ mưa/nặng: more heavily.' },
    { adv: 'high', correct: 'higher', options: ['higher', 'more highly', 'highier'], rule: 'Trạng từ ngắn: high -> higher.' },
    { adv: 'little', correct: 'less', options: ['less', 'littler', 'more little'], rule: 'Bất quy tắc: little -> less.' },
    { adv: 'far', correct: 'farther / further', options: ['farther / further', 'more far', 'farrer'], rule: 'Bất quy tắc: far -> farther (khoảng cách) / further (khoảng cách & mức độ).' },
    { adv: 'peacefully', correct: 'more peacefully', options: ['more peacefully', 'peacefuler', 'more peaceful'], rule: 'Trạng từ đuôi -ly: dùng more + adv (more peacefully).' }
  ];

  const [advQuizIdx, setAdvQuizIdx] = useState(0);
  const [advSelected, setAdvSelected] = useState<string | null>(null);
  const [advScore, setAdvScore] = useState(0);
  const currentAdvItem = adverbQuizItems[advQuizIdx];

  const handleSelectAdv = (chosen: string) => {
    if (advSelected) return;
    setAdvSelected(chosen);
    if (chosen === currentAdvItem.correct) {
      playSound('correct');
      setAdvScore(s => s + 1);
      addXP(15);
      if (advQuizIdx === adverbQuizItems.length - 1) {
        playSound('win');
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
      }
    } else {
      playSound('wrong');
    }
  };

  const handleNextAdv = () => {
    setAdvSelected(null);
    setAdvQuizIdx(prev => (prev + 1) % adverbQuizItems.length);
  };

  // Getting Started Comprehension (Mi & Nguyen dialogue)
  const [gsAnswers, setGsAnswers] = useState<Record<number, string>>({});
  const handleGsAnswer = (qId: number, ans: string, correct: string) => {
    playSound('pop');
    setGsAnswers(prev => ({ ...prev, [qId]: ans }));
    if (ans === correct) {
      playSound('correct');
      addXP(10);
    } else {
      playSound('wrong');
    }
  };

  // Closer Look 1 Fill-in Vocabulary
  const [cl1VocabAnswers, setCl1VocabAnswers] = useState<Record<number, string>>({});
  const handleCl1Vocab = (qId: number, ans: string, correct: string) => {
    playSound('pop');
    setCl1VocabAnswers(prev => ({ ...prev, [qId]: ans }));
    if (ans === correct) {
      playSound('correct');
      addXP(10);
    } else {
      playSound('wrong');
    }
  };

  // Sentence Transformation Practice (A Closer Look 2)
  const [transAnswers, setTransAnswers] = useState<Record<number, string>>({});
  const handleTransAnswer = (qId: number, ans: string, correct: string) => {
    playSound('pop');
    setTransAnswers(prev => ({ ...prev, [qId]: ans }));
    if (ans === correct) {
      playSound('correct');
      addXP(15);
    } else {
      playSound('wrong');
    }
  };

  // Mini-game 2: Phonetics /ə/ vs /ɪ/
  const phoneticsItems = [
    { word: 'water', sound: '/ə/', vi: 'nước uống', phonetic: '/ˈwɔːtə(r)/' },
    { word: 'village', sound: '/ɪ/', vi: 'ngôi làng', phonetic: '/ˈvɪlɪdʒ/' },
    { word: 'farmers', sound: '/ə/', vi: 'nông dân', phonetic: '/ˈfɑːməz/' },
    { word: 'harvest', sound: '/ɪ/', vi: 'mùa thu hoạch', phonetic: '/ˈhɑːvɪst/' },
    { word: 'gather', sound: '/ə/', vi: 'tụ tập, thu gom', phonetic: '/ˈɡæðə(r)/' },
    { word: 'busy', sound: '/ɪ/', vi: 'bận rộn', phonetic: '/ˈbɪzi/' },
    { word: 'cottage', sound: '/ɪ/', vi: 'nhà tranh nông thôn', phonetic: '/ˈkɒtɪdʒ/' },
    { word: 'orchard', sound: '/ə/', vi: 'vườn quả', phonetic: '/ˈɔːtʃəd/' },
    { word: 'pasture', sound: '/ə/', vi: 'bãi đồng cỏ', phonetic: '/ˈpɑːstʃə(r)/' },
    { word: 'milk', sound: '/ɪ/', vi: 'sữa tươi', phonetic: '/mɪlk/' },
    { word: 'canal', sound: '/ə/', vi: 'kênh rạch', phonetic: '/kəˈnæl/' },
    { word: 'paddy', sound: '/ɪ/', vi: 'thóc, lúa', phonetic: '/ˈpædi/' }
  ];

  const [phoneticIdx, setPhoneticIdx] = useState(0);
  const [phoneticFeedback, setPhoneticFeedback] = useState<'correct' | 'wrong' | null>(null);
  const currentPhonetic = phoneticsItems[phoneticIdx];

  const handleAnswerPhonetic = (sound: '/ə/' | '/ɪ/') => {
    if (sound === currentPhonetic.sound) {
      playSound('correct');
      setPhoneticFeedback('correct');
      addXP(10);
    } else {
      playSound('wrong');
      setPhoneticFeedback('wrong');
    }
  };

  const nextPhonetic = () => {
    setPhoneticFeedback(null);
    setPhoneticIdx(prev => (prev + 1) % phoneticsItems.length);
  };

  // Village Quiz Matcher (Duong Lam vs Hollum)
  const [villageAnswers, setVillageAnswers] = useState<Record<number, string>>({});
  const villageQuestions = [
    { id: 1, text: "It's an ancient village in Ha Noi with pagoda and specialities like keo doi, che lam.", correct: 'Duong Lam' },
    { id: 2, text: "It is on the island of Ameland (Netherlands) and is famous for a historic lighthouse.", correct: 'Hollum' },
    { id: 3, text: "Visitors can reach this village by car, bus, or even bicycle from Hanoi centre.", correct: 'Duong Lam' },
    { id: 4, text: "Visitors can reach by ferry or air, and enjoy beach kite-flying or surfing.", correct: 'Hollum' },
    { id: 5, text: "Many houses are traditionally made of laterite (đá ong) and mud bricks.", correct: 'Duong Lam' }
  ];

  const handleAnswerVillage = (qId: number, answer: string) => {
    playSound('pop');
    setVillageAnswers(prev => ({ ...prev, [qId]: answer }));
    const q = villageQuestions.find(item => item.id === qId);
    if (q && q.correct === answer) {
      playSound('correct');
      addXP(15);
    } else {
      playSound('wrong');
    }
  };

  // Interactive Compliment Chat Simulator
  const [complimentStep, setComplimentStep] = useState(0);
  const complimentDialogues = [
    {
      scenario: 'Tình huống 1: Khen chiếc diều tự làm của bạn Mai',
      prompt: 'Bạn muốn khen chiếc diều rất đẹp của Mai, bạn nói:',
      choices: [
        { text: 'What a beautiful and colourful kite you have, Mai!', isRight: true, response: 'Mai: "Thank you! My dad made it for me last weekend."' },
        { text: 'Your kite is bad.', isRight: false, response: 'Câu này không phải lời khen lịch sự!' },
        { text: 'I don\'t like your kite.', isRight: false, response: 'Đây là câu chê, không đúng mẫu câu khen ngợi!' }
      ]
    },
    {
      scenario: 'Tình huống 2: Bạn Tom khen áo mới hoặc điệu múa sạp của bạn',
      prompt: 'Tom nói: "You really danced bamboo dancing wonderfully today!" Bạn đáp lại:',
      choices: [
        { text: "Thank you! I'm glad you enjoyed it.", isRight: true, response: 'Tom: "You are very talented! Hope to see you dance again!"' },
        { text: "No, you are wrong.", isRight: false, response: 'Đáp lại lời khen không nên phủ nhận thô lỗ.' },
        { text: "I hate dancing.", isRight: false, response: 'Không phù hợp với phép lịch sự giao tiếp tiếng Anh.' }
      ]
    }
  ];

  // Self Checklist State
  const [checklist, setChecklist] = useState<Record<number, number>>({});
  const toggleCheck = (idx: number, level: number) => {
    playSound('pop');
    setChecklist(prev => ({ ...prev, [idx]: level }));
    addXP(10);
  };

  // Student Writing Practice Draft State
  const [writingDraft, setWritingDraft] = useState('');
  const wordCount = writingDraft.trim() ? writingDraft.trim().split(/\s+/).length : 0;

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors mb-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại trang chủ</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider">
              Khóa Học Toàn Diện
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Unit 2: Life in the Countryside • Sách Giáo Khoa Toàn Tập
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Đầy đủ nội dung 10 trang SGK (trang 18 - 27) kèm bài tập tương tác, audio hội thoại & so sánh hơn của trạng từ
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onGoToFlashcards}
            className="px-3.5 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-xs border border-sky-200 transition-colors shadow-2xs flex items-center gap-1.5"
          >
            <Layers className="w-4 h-4" />
            <span>Thẻ Flashcard ({35} từ)</span>
          </button>
          <button
            onClick={onGoToQuiz}
            className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4" />
            <span>Trắc Nghiệm ({12} câu)</span>
          </button>
        </div>
      </div>

      {/* Navigation Sub-Tabs covering ALL 7 Lessons */}
      <div className="flex border-b border-slate-200 gap-1.5 sm:gap-3 overflow-x-auto text-xs sm:text-sm font-bold pb-1 scrollbar-none">
        <button
          onClick={() => setActiveTab('mindmap')}
          className={`pb-2.5 px-2.5 transition-all whitespace-nowrap ${
            activeTab === 'mindmap'
              ? 'text-emerald-700 border-b-2 border-emerald-600 font-extrabold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          🧠 Bản Đồ Tư Duy
        </button>

        <button
          onClick={() => setActiveTab('getting_started')}
          className={`pb-2.5 px-2.5 transition-all whitespace-nowrap ${
            activeTab === 'getting_started'
              ? 'text-indigo-600 border-b-2 border-indigo-600 font-extrabold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          📖 Getting Started (Tr. 18-19)
        </button>

        <button
          onClick={() => setActiveTab('closer_look_1')}
          className={`pb-2.5 px-2.5 transition-all whitespace-nowrap ${
            activeTab === 'closer_look_1'
              ? 'text-amber-600 border-b-2 border-amber-600 font-extrabold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          🎯 A Closer Look 1 (Tr. 20-21)
        </button>

        <button
          onClick={() => setActiveTab('closer_look_2')}
          className={`pb-2.5 px-2.5 transition-all whitespace-nowrap ${
            activeTab === 'closer_look_2'
              ? 'text-purple-600 border-b-2 border-purple-600 font-extrabold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          ⚙️ A Closer Look 2 (Tr. 21-22)
        </button>

        <button
          onClick={() => setActiveTab('communication')}
          className={`pb-2.5 px-2.5 transition-all whitespace-nowrap ${
            activeTab === 'communication'
              ? 'text-teal-600 border-b-2 border-teal-600 font-extrabold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          💬 Communication (Tr. 22-23)
        </button>

        <button
          onClick={() => setActiveTab('skills')}
          className={`pb-2.5 px-2.5 transition-all whitespace-nowrap ${
            activeTab === 'skills'
              ? 'text-sky-600 border-b-2 border-sky-600 font-extrabold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          ✍️ Skills 1 & 2 (Tr. 24-26)
        </button>

        <button
          onClick={() => setActiveTab('looking_back')}
          className={`pb-2.5 px-2.5 transition-all whitespace-nowrap ${
            activeTab === 'looking_back'
              ? 'text-blue-700 border-b-2 border-blue-700 font-extrabold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          📝 Looking Back & Checklist (Tr. 27)
        </button>
      </div>

      {/* 1. TAB MIND MAP */}
      {activeTab === 'mindmap' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/30 border border-emerald-400/40 text-emerald-200 text-xs font-bold">
                <Brain className="w-3.5 h-3.5 text-emerald-300" />
                <span>Toàn cảnh kiến thức Unit 2: Life in the Countryside</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                Bản Đồ Tư Duy Ghi Nhớ Nhanh • 4 Nhánh Trọng Tâm
              </h2>
              <p className="text-slate-200 text-xs sm:text-sm max-w-2xl leading-relaxed">
                Nắm vững toàn bộ từ vựng vụ mùa, ngữ pháp so sánh hơn của trạng từ, cách phân biệt âm /ə/ vs /ɪ/ và nghệ thuật khen ngợi tự nhiên.
              </p>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Branch 1 */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs hover:border-emerald-300 transition-all space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-black">
                  🌾
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-sm sm:text-base">1. Từ Vựng Vụ Mùa & Làng Quê</h3>
                  <span className="text-xs text-slate-500 font-medium">Country activities & harvest time</span>
                </div>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 pl-2 border-l-2 border-emerald-300">
                <li>• <strong>combine harvester</strong> (máy gặt đập liên hợp)</li>
                <li>• <strong>paddy field</strong> (cánh đồng lúa bát ngát), <strong>canal</strong> (kênh mương)</li>
                <li>• <strong>herd cattle/buffaloes</strong> (chăn gia súc/trâu bò)</li>
                <li>• <strong>dry rice</strong> (phơi thóc), <strong>unload rice</strong> (bốc dỡ thóc)</li>
                <li>• <strong>picturesque</strong> (đẹp như tranh), <strong>hospitable</strong> (hiếu khách)</li>
                <li>• <strong>sense of community</strong> (tinh thần đoàn kết xóm làng)</li>
              </ul>
            </div>

            {/* Branch 2 */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs hover:border-purple-300 transition-all space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700 font-black">
                  ⚡
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-sm sm:text-base">2. So Sánh Hơn Của Trạng Từ</h3>
                  <span className="text-xs text-slate-500 font-medium">Comparative forms of adverbs</span>
                </div>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 pl-2 border-l-2 border-purple-300">
                <li>• <strong>Trạng từ ngắn:</strong> adv + <code>-er</code> (fast → faster, hard → harder, early → earlier)</li>
                <li>• <strong>Trạng từ dài:</strong> <code>more</code> + adv (more slowly, more carefully)</li>
                <li>• <strong>Bất quy tắc:</strong> well → <code>better</code>, badly → <code>worse</code>, far → <code>farther/further</code></li>
                <li>• <strong>Nhấn mạnh:</strong> <code>much / far</code> + comparative (much faster than)</li>
                <li>• <strong>Cấm kỵ:</strong> Không bao giờ có &quot;fastly&quot;! &quot;hardly&quot; = hầu như không!</li>
              </ul>
            </div>

            {/* Branch 3 */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs hover:border-amber-300 transition-all space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700 font-black">
                  🎙️
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-sm sm:text-base">3. Phát Âm: Âm /ə/ và Âm /ɪ/</h3>
                  <span className="text-xs text-slate-500 font-medium">Schwa /ə/ vs short /ɪ/</span>
                </div>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 pl-2 border-l-2 border-amber-300">
                <li>• <strong>Âm /ə/ (thả lỏng):</strong> w<u>a</u>t<u>er</u>, gard<u>en</u>, f<u>a</u>rm<u>er</u>, gath<u>er</u>, <u>a</u>ctivity</li>
                <li>• <strong>Âm /ɪ/ (ngắn):</strong> v<u>i</u>ll<u>a</u>ge, p<u>i</u>ck, b<u>u</u>sy, h<u>a</u>rv<u>e</u>st, m<u>i</u>lk, cott<u>a</u>ge</li>
                <li>• <strong>Mẹo nhận biết:</strong> đuôi <em>-er, -or, -a</em> thường đọc là /ə/; đuôi <em>-age, -y, -est</em> thường đọc là /ɪ/</li>
              </ul>
            </div>

            {/* Branch 4 */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs hover:border-teal-300 transition-all space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-teal-100 flex items-center justify-center text-teal-700 font-black">
                  🪁
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-sm sm:text-base">4. Khen Ngợi & Làng Quê Thế Giới</h3>
                  <span className="text-xs text-slate-500 font-medium">Compliments & World Villages</span>
                </div>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 pl-2 border-l-2 border-teal-300">
                <li>• <strong>Khen ngợi:</strong> <em>&quot;What a + adj + noun + you have!&quot;</em></li>
                <li>• <strong>Đáp lời:</strong> <em>&quot;Thank you. My dad made it for me.&quot;</em> hoặc <em>&quot;I&apos;m glad you like it.&quot;</em></li>
                <li>• <strong>Làng cổ Đường Lâm (Hà Nội):</strong> Chùa cổ, cổng làng, kẹo dồi, chè lam, xe đạp</li>
                <li>• <strong>Làng Hollum (Hà Lan):</strong> Hải đăng lịch sử, đi phà, lướt ván, thả diều biển</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* 2. TAB GETTING STARTED (Pages 18-19) */}
      {activeTab === 'getting_started' && (
        <div className="space-y-6">
          {/* Audio Dialogue */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Bài 1 • Getting Started (SGK Trang 18)
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-1">
                  Harvest Time in My Village (Mùa Gặt Ở Làng Tôi)
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowPhoneticsGuide(!showPhoneticsGuide)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer ${
                    showPhoneticsGuide 
                      ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                      : 'bg-slate-100 text-slate-600 border border-slate-200'
                  }`}
                  title="Bật/Tắt phiên âm IPA và gợi ý cách đọc"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>{showPhoneticsGuide ? 'Ẩn Phiên Âm & Cách Đọc' : 'Hiện Phiên Âm & Cách Đọc'}</span>
                </button>
                <button
                  onClick={() => speakEnglish("Harvest time in my village. Mi and Nguyen are talking about Nguyen's summer holiday in his hometown.")}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Volume2 className="w-4 h-4 text-emerald-600" />
                  <span>Nghe giới thiệu</span>
                </button>
              </div>
            </div>

            <div className="space-y-3 bg-slate-50 p-4 rounded-3xl border border-slate-200">
              {[
                { 
                  speaker: 'Mi', 
                  en: 'Hi Nguyen, how was your stay in your hometown?', 
                  ipa: '/haɪ ŋuːˈjen, haʊ wɒz jɔː steɪ ɪn jɔː ˈhəʊmtaʊn/',
                  tip: '🗣️ Đọc: [Hai Nguyên, hao uơ-z ior stei in ior HÔUM-taon?] • Nhấn STAY và HOMETOWN',
                  vi: 'Chào Nguyên, kỳ nghỉ ở quê của cậu thế nào?' 
                },
                { 
                  speaker: 'Nguyen', 
                  en: "It was great! I stayed on my uncle's farm. It was harvest time, so the farmers were busy cutting and collecting rice.", 
                  ipa: '/ɪt wɒz ɡreɪt! aɪ steɪd ɒn maɪ ˈʌŋklz fɑːm. ɪt wɒz ˈhɑːvɪst taɪm, səʊ ðə ˈfɑːməz wɜː ˈbɪzi ˈkʌtɪŋ ənd kəˈlektɪŋ raɪs/',
                  tip: '🗣️ Đọc: [Ít uơ-z greit! Ai steid on mai ẮNG-kồ-z pham. Ít uơ-z HA-vịt-st taim, sôu đơ PHA-mờ-z uơ BÍ-zi CẮT-ting en kơ-LÉC-ting rais] • Nhấn HARVEST, BUSY, COLLECTING',
                  vi: 'Tuyệt lắm! Tớ ở nông trại của chú. Đúng vào mùa gặt, nên các bác nông dân rất bận rộn gặt và thu gom lúa.' 
                },
                { 
                  speaker: 'Mi', 
                  en: 'I see. Did you help them with the farm work?', 
                  ipa: '/aɪ siː. dɪd juː help ðem wɪð ðə fɑːm wɜːk/',
                  tip: '🗣️ Đọc: [Ai si. Đít iu HELP đem uýt đơ pham uớc?] • Lên giọng ở cuối câu hỏi Yes/No',
                  vi: 'Ra thế. Cậu có phụ giúp việc đồng áng không?' 
                },
                { 
                  speaker: 'Nguyen', 
                  en: 'Yes, I helped unload the rice from the combine harvester. That machine harvested and threshed rice much faster than humans!', 
                  ipa: '/jes, aɪ helpt ˌʌnˈləʊd ðə raɪs frɒm ðə ˈkɒmbaɪn ˈhɑːvɪstə. ðæt məˈʃiːn ˈhɑːvɪstɪd ənd θreʃt raɪs mʌtʃ ˈfɑːstə ðæn ˈhjuːmənz/',
                  tip: '🗣️ Đọc: [Iét, ai help-t ăn-LÔUD đơ rais phrơm đơ CÓM-bain HA-vơ-stờ. Đét mơ-SHIN ha-vịt-stịt en thresh-t rais mătch PHA-stờ đen HIU-mừn-z]',
                  vi: 'Có chứ, tớ giúp dỡ thóc từ máy gặt đập liên hợp xuống. Chiếc máy đó gặt và tuốt lúa nhanh hơn con người rất nhiều!' 
                },
                { 
                  speaker: 'Mi', 
                  en: 'Fascinating! What else did you do in the afternoon?', 
                  ipa: '/ˈfæsɪneɪtɪŋ! wɒt els dɪd juː duː ɪn ði ˌɑːftəˈnuːn/',
                  tip: '🗣️ Đọc: [PHE-si-nêi-ting! Oát el-s đít iu đu in đi Áf-tơ-nun?] • Nhấn FASCINATING (3 âm tiết)',
                  vi: 'Thú vị quá! Buổi chiều cậu còn làm gì nữa?' 
                },
                { 
                  speaker: 'Nguyen', 
                  en: 'My cousins and I went to the vast paddy fields to fly kites, and we also herded buffaloes along the river bank.', 
                  ipa: '/maɪ ˈkʌznz ənd aɪ went tuː ðə vɑːst ˈpædi fiːldz tuː flaɪ kaɪts, ənd wiː ˈɔːlsəʊ ˈhɜːdɪd ˈbʌfələʊz əˈlɒŋ ðə ˈrɪvə bæŋk/',
                  tip: '🗣️ Đọc: [Mai CÁ-zừn-z en ai uen-t tu đơ va-st PE-đi fild-z tu phlai kaits, en ui ÔL-sôu HƠ-địt BÁ-fơ-lôu-z ờ-long đơ RÍ-vơ beng-k]',
                  vi: 'Tớ và các anh chị em họ ra cánh đồng lúa bát ngát thả diều, và tụi tớ còn chăn trâu dọc theo bờ sông nữa.' 
                },
                { 
                  speaker: 'Mi', 
                  en: "Life in the countryside sounds so peaceful and exciting! What a wonderful holiday you had!", 
                  ipa: '/laɪf ɪn ðə ˈkʌntrisaɪd saʊndz səʊ ˈpiːsfl ənd ɪkˈsaɪtɪŋ! wɒt ə ˈwʌndəfl ˈhɒlədeɪ juː hæd/',
                  tip: '🗣️ Đọc: [Laiph in đơ CĂN-tri-said saon-dz sôu PÍS-phồ en ik-SAI-ting! Oát ơ UĂN-đơ-phồ HÓ-li-đêi iu hed!]',
                  vi: 'Cuộc sống ở làng quê nghe thật yên bình và hào hứng! Cậu đã có một kỳ nghỉ tuyệt vời làm sao!' 
                },
                { 
                  speaker: 'Nguyen', 
                  en: 'Thank you! You should visit my village with me next summer.', 
                  ipa: '/θæŋk juː! juː ʃʊd ˈvɪzɪt maɪ ˈvɪlɪdʒ wɪð miː nekst ˈsʌmə/',
                  tip: '🗣️ Đọc: [Theng-k iu! Iu shút VÍ-zit mai VÍ-lit-j uýt mi néc-st SĂ-mờ] • "thank you" đọc /θ/ cắn nhẹ lưỡi',
                  vi: 'Cảm ơn cậu! Mùa hè năm sau cậu nên cùng về thăm làng quê với tớ nhé.' 
                }
              ].map((row, idx) => (
                <div
                  key={idx}
                  onClick={() => speakEnglish(row.en)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer hover:shadow-xs flex items-start justify-between gap-3 ${
                    row.speaker === 'Mi'
                      ? 'bg-rose-50/70 border-rose-200 mr-0 sm:ml-6'
                      : 'bg-emerald-50/70 border-emerald-200 ml-0 sm:mr-6'
                  }`}
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`font-black text-xs px-2 py-0.5 rounded-md ${row.speaker === 'Mi' ? 'bg-rose-200 text-rose-900' : 'bg-emerald-200 text-emerald-900'}`}>
                        {row.speaker}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900">{row.en}</span>
                    </div>

                    {showPhoneticsGuide && (
                      <div className="space-y-1 pl-1">
                        <div className="text-[11px] font-mono text-emerald-800 bg-emerald-50/90 px-2 py-0.5 rounded-md border border-emerald-200 font-semibold inline-block">
                          {row.ipa}
                        </div>
                        <div className="text-[11px] text-amber-900 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 font-medium">
                          {row.tip}
                        </div>
                      </div>
                    )}

                    <div className="text-xs text-slate-600 italic pl-1 font-medium">{row.vi}</div>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      speakEnglish(row.en);
                    }}
                    className="p-1.5 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-emerald-600 hover:border-emerald-300 shadow-2xs shrink-0 cursor-pointer"
                    title="Nghe câu này"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Activity 2 Comprehension Check */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
              Bài tập 2 (SGK Trang 19) • Đọc lại & Chọn câu trả lời đúng
            </span>
            <div className="space-y-3">
              {[
                { id: 1, q: "1. Nguyen stayed on his uncle's farm during...", options: ['harvest time', 'winter holiday', 'spring festival'], correct: 'harvest time' },
                { id: 2, q: '2. The farmers were busy...', options: ['cutting and collecting rice', 'planting trees', 'fishing in the river'], correct: 'cutting and collecting rice' },
                { id: 3, q: '3. What machine did Nguyen mention?', options: ['a combine harvester', 'a sports car', 'a lawn mower'], correct: 'a combine harvester' },
                { id: 4, q: '4. In the afternoon, Nguyen and his cousins...', options: ['flew kites and herded buffaloes', 'watched TV all day', 'played video games'], correct: 'flew kites and herded buffaloes' },
                { id: 5, q: '5. Mi thinks life in the countryside sounds...', options: ['peaceful and exciting', 'noisy and stressful', 'boring and dangerous'], correct: 'peaceful and exciting' }
              ].map(item => (
                <div key={item.id} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="text-xs sm:text-sm font-bold text-slate-800">{item.q}</div>
                  <div className="flex flex-wrap gap-2">
                    {item.options.map(opt => {
                      const isChosen = gsAnswers[item.id] === opt;
                      const isRight = opt === item.correct;
                      let cls = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100';
                      if (gsAnswers[item.id]) {
                        if (isRight) cls = 'bg-emerald-500 text-white border-emerald-600 font-bold';
                        else if (isChosen) cls = 'bg-rose-500 text-white border-rose-600 font-bold';
                      }
                      return (
                        <button
                          key={opt}
                          onClick={() => handleGsAnswer(item.id, opt, item.correct)}
                          className={`px-3 py-1.5 rounded-xl border text-xs transition-all ${cls}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity 3 Vocabulary Match under pictures */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800">
              Bài tập 3 (SGK Trang 19) • Nhận diện các hoạt động làng quê
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { icon: '🚜', title: 'combine harvester', desc: 'Máy gặt đập liên hợp thu hoạch lúa nhanh chóng' },
                { icon: '🌾', title: 'vast paddy fields', desc: 'Những cánh đồng lúa vàng óng ả bát ngát ngút tầm mắt' },
                { icon: '🐃', title: 'herd buffaloes / cattle', desc: 'Chăn trâu, dắt bò gặm cỏ dọc bờ sông yên bình' },
                { icon: '☀️', title: 'dry the rice', desc: 'Phơi thóc vàng rực trên sân gạch dưới ánh nắng rực rỡ' },
                { icon: '📦', title: 'unload the rice', desc: 'Bốc dỡ các bao thóc từ máy gặt xuống xe tải' },
                { icon: '🪁', title: 'fly kites', desc: 'Thả diều lượn bay lộng gió giữa không gian thoáng đãng' }
              ].map((act, idx) => (
                <div key={idx} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5 hover:border-emerald-300 transition-all">
                  <div className="text-2xl">{act.icon}</div>
                  <div className="font-extrabold text-xs sm:text-sm text-slate-900">{act.title}</div>
                  <div className="text-xs text-slate-500 leading-snug">{act.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3. TAB A CLOSER LOOK 1 (Pages 20-21) */}
      {activeTab === 'closer_look_1' && (
        <div className="space-y-6">
          {/* Vocabulary in Context */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800">
              Vocabulary (SGK Trang 20) • Từ Vựng Đời Sống Nông Thôn
            </span>
            <h3 className="text-lg font-black text-slate-900">
              Điền từ thích hợp vào câu: <code className="text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-lg text-xs">vast, picturesque, hospitable, well-trained, plough, cultivate</code>
            </h3>

            <div className="space-y-3">
              {[
                { id: 1, sentence: '1. Duong Lam is famous for its ________ landscape and historic houses.', options: ['picturesque', 'vast', 'well-trained'], correct: 'picturesque', note: 'picturesque = đẹp như tranh vẽ' },
                { id: 2, sentence: '2. The local villagers are very warm and ________ to visitors.', options: ['hospitable', 'vast', 'well-trained'], correct: 'hospitable', note: 'hospitable = hiếu khách, nồng hậu' },
                { id: 3, sentence: '3. There are ________ paddy fields stretching as far as the eye can see.', options: ['vast', 'picturesque', 'hospitable'], correct: 'vast', note: 'vast = rộng lớn, bát ngát' },
                { id: 4, sentence: '4. In the past, farmers used buffaloes to ________ the fields.', options: ['plough', 'cultivate', 'unload'], correct: 'plough', note: 'plough the fields = cày ruộng' },
                { id: 5, sentence: '5. Farmers work hard to ________ crops and vegetables.', options: ['cultivate', 'plough', 'herd'], correct: 'cultivate', note: 'cultivate crops = canh tác hoa màu' }
              ].map(item => (
                <div key={item.id} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="text-xs sm:text-sm font-bold text-slate-800">{item.sentence}</div>
                  <div className="flex flex-wrap gap-2">
                    {item.options.map(opt => {
                      const isChosen = cl1VocabAnswers[item.id] === opt;
                      const isRight = opt === item.correct;
                      let cls = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100';
                      if (cl1VocabAnswers[item.id]) {
                        if (isRight) cls = 'bg-emerald-500 text-white border-emerald-600 font-bold';
                        else if (isChosen) cls = 'bg-rose-500 text-white border-rose-600 font-bold';
                      }
                      return (
                        <button
                          key={opt}
                          onClick={() => handleCl1Vocab(item.id, opt, item.correct)}
                          className={`px-3 py-1.5 rounded-xl border text-xs transition-all ${cls}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {cl1VocabAnswers[item.id] && (
                    <div className="text-xs text-indigo-700 font-medium">💡 Ghi chú: {item.note}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Pronunciation Lab /ə/ vs /ɪ/ */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700">
              Pronunciation Lab (SGK Trang 21) • Luyện Tai Nghe Âm /ə/ và /ɪ/
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
                <div className="font-black text-amber-900 text-sm">Âm /ə/ (Schwa - thả lỏng)</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Âm ngắn nhẹ nhất trong tiếng Anh. Môi, hàm và lưỡi hoàn toàn thả lỏng tự nhiên. Luôn rơi vào âm tiết không có trọng âm!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {[
                    { word: 'water', ipa: '/ˈwɔːtə(r)/', vi: 'nước uống' },
                    { word: 'farmers', ipa: '/ˈfɑːməz/', vi: 'người nông dân' },
                    { word: 'garden', ipa: '/ˈɡɑːdn/', vi: 'khu vườn' },
                    { word: 'gather', ipa: '/ˈɡæðə(r)/', vi: 'thu gom, tụ họp' }
                  ].map((item) => (
                    <div
                      key={item.word}
                      onClick={() => speakEnglish(item.word)}
                      className="p-2 bg-white rounded-xl border border-amber-200 cursor-pointer hover:bg-amber-100/80 transition flex flex-col justify-between space-y-1 shadow-2xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-xs text-amber-950">{item.word}</span>
                        <Volume2 className="w-3.5 h-3.5 text-amber-600" />
                      </div>
                      <div className="text-[10px] font-mono text-amber-800 font-semibold">{item.ipa}</div>
                      <div className="text-[10px] text-amber-900 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/80">
                        {getReadingTip(item.word, item.ipa)}
                      </div>
                      <div className="text-[11px] text-slate-700 font-medium">👉 {item.vi}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-2">
                <div className="font-black text-teal-900 text-sm">Âm /ɪ/ (Ngắn hơi hé miệng)</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Khóe miệng mở nhẹ sang hai bên, phát âm dứt khoát và ngắn gọn.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {[
                    { word: 'village', ipa: '/ˈvɪlɪdʒ/', vi: 'ngôi làng' },
                    { word: 'harvest', ipa: '/ˈhɑːvɪst/', vi: 'mùa gặt lúa' },
                    { word: 'busy', ipa: '/ˈbɪzi/', vi: 'bận rộn' },
                    { word: 'cottage', ipa: '/ˈkɒtɪdʒ/', vi: 'nhà tranh nông thôn' }
                  ].map((item) => (
                    <div
                      key={item.word}
                      onClick={() => speakEnglish(item.word)}
                      className="p-2 bg-white rounded-xl border border-teal-200 cursor-pointer hover:bg-teal-100/80 transition flex flex-col justify-between space-y-1 shadow-2xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-xs text-teal-950">{item.word}</span>
                        <Volume2 className="w-3.5 h-3.5 text-teal-600" />
                      </div>
                      <div className="text-[10px] font-mono text-teal-800 font-semibold">{item.ipa}</div>
                      <div className="text-[10px] text-teal-900 bg-teal-50 px-1.5 py-0.5 rounded border border-teal-200/80">
                        {getReadingTip(item.word, item.ipa)}
                      </div>
                      <div className="text-[11px] text-slate-700 font-medium">👉 {item.vi}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Listening Game */}
            <div className="bg-slate-900 rounded-2xl p-5 text-white space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400">Mini-game: Lắng Nghe & Đoán Âm</span>
                <span className="text-xs text-slate-400">Từ {phoneticIdx + 1} / {phoneticsItems.length}</span>
              </div>

              <div className="text-center py-4 space-y-2">
                <button
                  onClick={() => speakEnglish(currentPhonetic.word)}
                  className="w-16 h-16 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center mx-auto shadow-lg transition-transform hover:scale-105"
                >
                  <Volume2 className="w-8 h-8" />
                </button>
                <div className="text-2xl font-black text-white tracking-wide">{currentPhonetic.word}</div>
                <div className="text-sm text-emerald-300 font-mono font-bold">{currentPhonetic.phonetic} • {currentPhonetic.vi}</div>
                <div className="text-xs text-amber-200 bg-white/10 px-3 py-1 rounded-xl max-w-sm mx-auto font-medium">
                  {getReadingTip(currentPhonetic.word, currentPhonetic.phonetic)}
                </div>
                <p className="text-xs text-slate-400">Bấm loa nghe từ trên, sau đó chọn âm bạn nghe thấy:</p>
              </div>

              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => handleAnswerPhonetic('/ə/')}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all"
                >
                  Âm /ə/
                </button>
                <button
                  onClick={() => handleAnswerPhonetic('/ɪ/')}
                  className="px-6 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-sm transition-all"
                >
                  Âm /ɪ/
                </button>
              </div>

              {phoneticFeedback && (
                <div className={`p-3 rounded-xl text-center text-xs font-bold flex items-center justify-between ${
                  phoneticFeedback === 'correct' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                }`}>
                  <span>
                    {phoneticFeedback === 'correct' ? '🎉 Chính xác! Bạn có đôi tai rất thính!' : `Chưa đúng rồi! Từ này phát âm là ${currentPhonetic.sound}.`}
                  </span>
                  <button
                    onClick={nextPhonetic}
                    className="px-3 py-1 bg-white text-slate-900 rounded-lg text-xs font-bold hover:bg-slate-100"
                  >
                    Từ tiếp theo →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 4. TAB A CLOSER LOOK 2 (Pages 21-22) */}
      {activeTab === 'closer_look_2' && (
        <div className="space-y-6">
          {/* Comprehensive Grammar Rules Table */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-5">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700">
              Grammar Focus (SGK Trang 21) • So Sánh Hơn Của Trạng Từ (Comparative Adverbs)
            </span>
            <h3 className="text-xl font-black text-slate-900">
              Công Thức So Sánh Hơn & Các Lưu Ý Sống Còn
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Short adverbs */}
              <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-2">
                <div className="text-xs font-black text-indigo-900 uppercase">1. Trạng từ ngắn (1 âm tiết / giống tính từ)</div>
                <div className="font-mono text-xs bg-white p-2.5 rounded-xl border border-indigo-100 text-indigo-950 font-bold">
                  S1 + V + adv + -er + than + S2
                </div>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• fast → <strong>faster</strong> (chạy nhanh hơn)</li>
                  <li>• hard → <strong>harder</strong> (làm việc chăm chỉ hơn)</li>
                  <li>• early → <strong>earlier</strong> (dậy sớm hơn - đổi y thành i)</li>
                  <li>• late → <strong>later</strong> (đến muộn hơn)</li>
                </ul>
              </div>

              {/* Long adverbs */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                <div className="text-xs font-black text-emerald-900 uppercase">2. Trạng từ dài (đuôi -ly thường gặp)</div>
                <div className="font-mono text-xs bg-white p-2.5 rounded-xl border border-emerald-100 text-emerald-950 font-bold">
                  S1 + V + more + adv + than + S2
                </div>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• slowly → <strong>more slowly</strong></li>
                  <li>• carefully → <strong>more carefully</strong></li>
                  <li>• beautifully → <strong>more beautifully</strong></li>
                  <li>• peacefully → <strong>more peacefully</strong></li>
                </ul>
              </div>

              {/* Irregulars */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                <div className="text-xs font-black text-amber-900 uppercase">3. Bất quy tắc (Học thuộc lòng)</div>
                <ul className="text-xs text-slate-800 space-y-1 font-semibold">
                  <li>• well → <strong className="text-amber-800">better</strong> (chơi tốt hơn)</li>
                  <li>• badly → <strong className="text-amber-800">worse</strong> (thể hiện tệ hơn)</li>
                  <li>• far → <strong className="text-amber-800">farther / further</strong> (xa hơn)</li>
                  <li>• little → <strong className="text-amber-800">less</strong> (ít hơn)</li>
                </ul>
              </div>

              {/* Traps */}
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-2">
                <div className="text-xs font-black text-rose-900 uppercase">⚠️ Cảnh Báo Bẫy Đề Thi</div>
                <ul className="text-xs text-rose-950 space-y-1">
                  <li>• <strong>KHÔNG CÓ &quot;fastly&quot;!</strong> So sánh của fast luôn là <strong>faster</strong>.</li>
                  <li>• <strong>&quot;hardly&quot; = hầu như không</strong>, không phải là dạng so sánh của hard! (He works harder than me, KHÔNG dùng hardly!).</li>
                  <li>• Dùng <strong>much / far</strong> để nhấn mạnh: <em>much faster than</em>.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Interactive Adverb Transformation Lab */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800">
                Phòng Luyện So Sánh Hơn ({advQuizIdx + 1}/{adverbQuizItems.length})
              </span>
              <span className="text-xs font-bold text-emerald-700">Điểm: {advScore} ⭐</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="text-xs text-slate-500 font-semibold">Chuyển trạng từ sau sang dạng so sánh hơn:</div>
              <div className="text-2xl font-black text-purple-900 font-mono">{currentAdvItem.adv}</div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                {currentAdvItem.options.map(opt => {
                  let btnCls = 'bg-white hover:bg-slate-100 text-slate-800 border-slate-200';
                  if (advSelected) {
                    if (opt === currentAdvItem.correct) btnCls = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                    else if (opt === advSelected) btnCls = 'bg-rose-600 text-white border-rose-600 font-bold';
                  }
                  return (
                    <button
                      key={opt}
                      onClick={() => handleSelectAdv(opt)}
                      className={`p-3 rounded-xl border text-xs sm:text-sm font-bold transition-all ${btnCls}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {advSelected && (
                <div className="p-3 bg-purple-50 rounded-xl border border-purple-200 flex items-center justify-between gap-3 text-xs">
                  <span className="text-purple-900 font-medium">💡 Quy tắc: {currentAdvItem.rule}</span>
                  <button
                    onClick={handleNextAdv}
                    className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold shrink-0"
                  >
                    Câu tiếp theo →
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sentence Transformation Drills */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
              Luyện Viết Lại Câu Đồng Nghĩa (Sentence Transformation)
            </span>
            <div className="space-y-3">
              {[
                {
                  id: 1,
                  original: 'A horse is faster than a buffalo.',
                  req: 'Viết lại bằng động từ "runs":',
                  options: ['A horse runs faster than a buffalo.', 'A horse runs more fast than a buffalo.', 'A horse runs fastly than a buffalo.'],
                  correct: 'A horse runs faster than a buffalo.'
                },
                {
                  id: 2,
                  original: 'Mai is a better dancer than Hoa.',
                  req: 'Viết lại bằng động từ "dances":',
                  options: ['Mai dances better than Hoa does.', 'Mai dances more beautifully than Hoa.', 'Mai dances gooder than Hoa.'],
                  correct: 'Mai dances better than Hoa does.'
                },
                {
                  id: 3,
                  original: 'He is a more careful driver than his brother.',
                  req: 'Viết lại bằng động từ "drives":',
                  options: ['He drives more carefully than his brother.', 'He drives carefully than his brother.', 'He drives carefullier than his brother.'],
                  correct: 'He drives more carefully than his brother.'
                }
              ].map(item => (
                <div key={item.id} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="text-xs text-slate-500 font-semibold">Câu gốc: <strong>{item.original}</strong></div>
                  <div className="text-xs font-bold text-slate-800">{item.req}</div>
                  <div className="space-y-1.5">
                    {item.options.map(opt => {
                      const isChosen = transAnswers[item.id] === opt;
                      const isRight = opt === item.correct;
                      let cls = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100';
                      if (transAnswers[item.id]) {
                        if (isRight) cls = 'bg-emerald-500 text-white border-emerald-600 font-bold';
                        else if (isChosen) cls = 'bg-rose-500 text-white border-rose-600 font-bold';
                      }
                      return (
                        <button
                          key={opt}
                          onClick={() => handleTransAnswer(item.id, opt, item.correct)}
                          className={`w-full text-left p-2.5 rounded-xl border text-xs transition-all ${cls}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 5. TAB COMMUNICATION (Pages 22-23) */}
      {activeTab === 'communication' && (
        <div className="space-y-6">
          {/* Everyday English Compliments */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800">
              Everyday English (SGK Trang 22) • Khen Ngợi & Đáp Lời Khen
            </span>
            <h3 className="text-lg font-black text-slate-900">Giving & Responding to Compliments</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-2">
                <span className="text-xs font-black text-teal-950">Mẫu câu Khen ngợi (Compliment)</span>
                <div className="text-xs text-slate-700 space-y-1.5 bg-white p-3 rounded-xl border border-teal-100">
                  <p>• <strong>What a + adj + noun + you have!</strong><br />
                    <em>Ví dụ: What a beautiful kite you have!</em></p>
                  <p>• <strong>You really have a nice / lovely + noun!</strong><br />
                    <em>Ví dụ: You really have a lovely village!</em></p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                <span className="text-xs font-black text-emerald-950">Mẫu câu Đáp lại (Responding)</span>
                <div className="text-xs text-slate-700 space-y-1.5 bg-white p-3 rounded-xl border border-emerald-100">
                  <p>• <strong>Thank you. My [someone] made/bought it for me.</strong><br />
                    <em>Ví dụ: Thank you. My dad made it for me.</em></p>
                  <p>• <strong>Thank you. I&apos;m glad you like it!</strong><br />
                    <em>Ví dụ: Cảm ơn nhé. Mình rất vui vì cậu thích nó!</em></p>
                </div>
              </div>
            </div>

            {/* Interactive Dialogue Simulator */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">{complimentDialogues[complimentStep].scenario}</span>
                <button
                  onClick={() => setComplimentStep((s) => (s + 1) % complimentDialogues.length)}
                  className="text-xs text-teal-700 font-bold hover:underline"
                >
                  Đổi tình huống 🔄
                </button>
              </div>

              <div className="text-xs font-bold text-slate-900">{complimentDialogues[complimentStep].prompt}</div>

              <div className="space-y-2">
                {complimentDialogues[complimentStep].choices.map((ch, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (ch.isRight) {
                        playSound('correct');
                        addXP(10);
                        confetti({ particleCount: 50, spread: 50 });
                      } else {
                        playSound('wrong');
                      }
                    }}
                    className="w-full text-left p-3 rounded-xl border border-slate-200 bg-white hover:border-teal-400 hover:bg-teal-50/50 text-xs text-slate-800 transition-all font-medium"
                  >
                    {ch.text}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Comparing World Villages: Duong Lam vs Hollum */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700">
              Văn Hóa Thế Giới (SGK Trang 23) • So Sánh 2 Làng Quê Nổi Tiếng
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🏮</span>
                  <h4 className="font-black text-amber-950 text-sm">Làng Cổ Đường Lâm (Hà Nội, Việt Nam)</h4>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Làng cổ tiêu biểu vùng đồng bằng Bắc Bộ với cổng làng Mông Phụ, cây đa, bến nước, chùa Mía cổ kính. Nhà dân xây bằng đá ong đặc trưng. Đến đây du khách đạp xe, thưởng thức đặc sản kẹo dồi và chè lam.
                </p>
                <div className="text-xs font-bold text-amber-900 bg-white p-2 rounded-lg border border-amber-200">
                  Phương tiện: Xe buýt, ô tô, xe máy, xe đạp từ trung tâm Hà Nội.
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">⚓</span>
                  <h4 className="font-black text-sky-950 text-sm">Làng Hollum (Đảo Ameland, Hà Lan)</h4>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Ngôi làng lịch sử nằm bên bờ biển Bắc. Nổi tiếng với ngọn hải đăng Borndiep cao sừng sững, những ngôi nhà cổ của thuyền trưởng. Du khách thích thả diều bờ biển, lướt ván và ngắm hải cẩu.
                </p>
                <div className="text-xs font-bold text-sky-900 bg-white p-2 rounded-lg border border-sky-200">
                  Phương tiện: Phà biển (ferry) hoặc máy bay nhỏ qua đảo.
                </div>
              </div>
            </div>

            {/* Quiz Matcher */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-slate-800">Đọc thông tin và chọn đúng ngôi làng:</div>
              {villageQuestions.map(q => (
                <div key={q.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <span className="text-slate-800 font-medium">{q.id}. {q.text}</span>
                  <div className="flex gap-2 shrink-0">
                    {['Duong Lam', 'Hollum'].map(v => {
                      const isChosen = villageAnswers[q.id] === v;
                      const isRight = v === q.correct;
                      let cls = 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100';
                      if (villageAnswers[q.id]) {
                        if (isRight) cls = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                        else if (isChosen) cls = 'bg-rose-600 text-white border-rose-600 font-bold';
                      }
                      return (
                        <button
                          key={v}
                          onClick={() => handleAnswerVillage(q.id, v)}
                          className={`px-3 py-1 rounded-lg border text-xs transition-all ${cls}`}
                        >
                          {v}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 6. TAB SKILLS 1 & 2 (Pages 24-26) */}
      {activeTab === 'skills' && (
        <div className="space-y-6">
          {/* Skills 1 Reading */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700">
              Skills 1 • Reading (SGK Trang 24)
            </span>
            <h3 className="text-lg font-black text-slate-900">Life in a Vietnamese Countryside Village</h3>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2.5 leading-relaxed">
              <p>
                Many people believe that life in the countryside has many advantages. First, the natural environment is picturesque and unpolluted. There is fresh air, open green space, and peaceful rivers.
              </p>
              <p>
                Second, there is a strong <strong>sense of community</strong>. Villagers are warm, kind, and <strong>supportive</strong>. During harvest time or festivals, neighbours help each other cut rice, repair cottages, and share local specialities.
              </p>
              <p>
                However, countryside life also has some challenges: there are fewer entertainment centres and shopping malls, and hospitals or universities are usually far away.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-bold text-indigo-700">
                <span className="bg-indigo-50 px-2 py-1 rounded-md border border-indigo-200">sense of community = tinh thần làng xóm đoàn kết</span>
                <span className="bg-indigo-50 px-2 py-1 rounded-md border border-indigo-200">supportive = luôn giúp đỡ tương trợ</span>
              </div>
            </div>
          </div>

          {/* Skills 2 Writing Guide & Model Paragraph */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
              Skills 2 • Writing (SGK Trang 26)
            </span>
            <h3 className="text-lg font-black text-slate-900">
              Viết Đoạn Văn 80 - 100 Từ Về Điều Em Thích Hoặc Không Thích Ở Nông Thôn
            </h3>

            {/* Writing Formula */}
            <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-200 space-y-2 text-xs text-slate-800">
              <div className="font-black text-emerald-950 uppercase">Dàn ý đoạn văn chuẩn điểm 10 (Structure):</div>
              <p>• <strong>Topic sentence:</strong> Giới thiệu ý chính (There are several things I like / dislike about life in the countryside).</p>
              <p>• <strong>Idea 1 + connectors:</strong> First / Firstly, the air is clean and the landscape is picturesque.</p>
              <p>• <strong>Idea 2 + connectors:</strong> Second / In addition, local people are very friendly and hospitable.</p>
              <p>• <strong>Concluding sentence:</strong> In short / In conclusion, I really enjoy spending my holidays in the peaceful village.</p>
            </div>

            {/* Model Essay */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2 font-sans text-xs sm:text-sm text-slate-800 leading-relaxed shadow-xs">
              <div className="font-extrabold text-indigo-700 flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>BÀI MẪU ĐẠT ĐIỂM TỐI ĐA (MODEL PARAGRAPH):</span>
              </div>
              <p>
                There are many reasons why I love living in the countryside. First, the atmosphere is fresh, cool, and peaceful because there is much less pollution and traffic than in big cities. I really enjoy walking along vast green paddy fields in the breezy afternoon. Second, the village has a wonderful sense of community. The neighbours are always friendly, warm, and supportive, and they readily help each other during busy harvest time. In conclusion, although life in the village may move more slowly, it brings me great relaxation and happiness.
              </p>
              <div className="text-xs text-slate-500 italic pt-1">
                (Độ dài: 96 từ • Đầy đủ từ nối: First, Second, In conclusion • Cấu trúc so sánh hơn: much less, move more slowly)
              </div>
            </div>

            {/* Student interactive draft editor */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700">Góc Tự Luyện Viết (Student Draft):</span>
                <span className={`font-bold ${wordCount >= 80 && wordCount <= 120 ? 'text-emerald-600' : 'text-slate-500'}`}>
                  {wordCount} / 80-100 từ {wordCount >= 80 && wordCount <= 120 ? '✅ Đạt chuẩn' : ''}
                </span>
              </div>
              <textarea
                value={writingDraft}
                onChange={(e) => setWritingDraft(e.target.value)}
                placeholder="Hãy thử viết đoạn văn của bạn tại đây (sử dụng các từ vựng: peaceful, vast paddy fields, hospitable, more slowly...)..."
                rows={4}
                className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              />
            </div>
          </div>
        </div>
      )}

      {/* 7. TAB LOOKING BACK & CHECKLIST (Page 27) */}
      {activeTab === 'looking_back' && (
        <div className="space-y-6">
          {/* Quick Review Drills */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
              Looking Back • Ôn Tập Củng Cố Toàn Unit 2 (SGK Trang 27)
            </span>
            <h3 className="text-lg font-black text-slate-900">Tổng Hợp Từ Vựng & So Sánh Hơn</h3>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs sm:text-sm space-y-2 leading-relaxed">
              <p>• <strong>Vụ mùa:</strong> Farmers use a <em>combine harvester</em> to harvest and thresh rice <em>faster</em>.</p>
              <p>• <strong>Hoạt động:</strong> Children help parents <em>herd cattle</em> and <em>dry rice</em> on sunny courtyards.</p>
              <p>• <strong>Con người:</strong> People are <em>hospitable</em> and have a strong <em>sense of community</em>.</p>
              <p>• <strong>Ngữ pháp:</strong> City life moves <em>faster</em>, but country life moves <em>more peacefully</em>.</p>
            </div>
          </div>

          {/* Now I Can Checklist Page 27 */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700">
              Bảng Tự Đánh Giá Năng Lực (SGK Trang 27 • Now I Can...)
            </span>
            <h3 className="text-lg font-black text-slate-900">Đánh Giá Mức Độ Làm Chủ Kiến Thức:</h3>

            <div className="space-y-2">
              {[
                'Sử dụng các từ vựng về cuộc sống nông thôn (paddy field, combine harvester, herd, vast...)',
                'Phát âm chuẩn xác cặp âm /ə/ (water, garden) và /ɪ/ (village, harvest)',
                'Sử dụng thành thạo so sánh hơn của trạng từ ngắn (-er) và trạng từ dài (more + adv)',
                'Đưa ra lời khen ngợi và đáp lại lời khen tự nhiên (What a beautiful kite you have!)',
                'Đọc hiểu và kể về các hoạt động mùa gặt và các ngôi làng nổi tiếng (Đường Lâm, Hollum)',
                'Viết được đoạn văn 80 - 100 từ về những điều em thích/không thích ở nông thôn'
              ].map((skill, idx) => {
                const currentLevel = checklist[idx] || 0;
                return (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-slate-800">{idx + 1}. {skill}</span>
                    <div className="flex gap-1.5 shrink-0">
                      {[1, 2, 3].map(stars => (
                        <button
                          key={stars}
                          onClick={() => toggleCheck(idx, stars)}
                          className={`px-2 py-1 rounded-lg text-xs font-bold transition-all ${
                            currentLevel >= stars ? 'bg-amber-400 text-slate-900 shadow-2xs' : 'bg-slate-200 text-slate-500'
                          }`}
                        >
                          {'★'.repeat(stars)}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
