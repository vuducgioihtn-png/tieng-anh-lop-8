import { UnitData, QuizQuestion, ReviewExam } from '../types';

export const UNITS_DATA: UnitData[] = [
  {
    id: 1,
    title: 'Unit 1: Leisure Time',
    englishTitle: 'Leisure Time',
    theme: 'Our Communities',
    description: 'Khám phá từ vựng về hoạt động giải trí, các cấu trúc thể hiện sự yêu thích và ngữ pháp danh động từ (gerunds) cùng động từ nguyên mẫu (to-infinitives).',
    vocabulary: [
      {
        id: 'u1-1',
        unitId: 1,
        word: 'origami',
        phonetic: '/ˌɒrɪˈɡɑːmi/',
        partOfSpeech: 'noun',
        meaningVi: 'nghệ thuật gấp giấy Nhật Bản',
        exampleEn: 'Origami is the art of paper folding. Doing origami helps me relax.',
        exampleVi: 'Origami là nghệ thuật gấp giấy. Gấp giấy origami giúp tôi thư giãn.',
        collocation: 'do origami / make origami',
        category: 'vocabulary'
      },
      {
        id: 'u1-2',
        unitId: 1,
        word: 'DIY (do-it-yourself)',
        phonetic: '/ˌdiː aɪ ˈwaɪ/',
        partOfSpeech: 'noun / adj',
        meaningVi: 'tự tay làm lấy (đồ thủ công, sửa chữa)',
        exampleEn: "I'm keen on doing DIY projects in my free time, like building dollhouses.",
        exampleVi: 'Tôi rất thích tự làm đồ handmade vào lúc rảnh, như dựng nhà búp bê.',
        collocation: 'do DIY / DIY project',
        category: 'vocabulary'
      },
      {
        id: 'u1-3',
        unitId: 1,
        word: 'fond of',
        phonetic: '/fɒnd əv/',
        partOfSpeech: 'adjective phrase',
        meaningVi: 'rất thích, say mê (thường đi với V-ing/N)',
        exampleEn: 'My brother is fond of playing sport with his friends.',
        exampleVi: 'Anh trai tôi rất thích chơi thể thao với bạn bè.',
        collocation: 'be fond of + V-ing/N',
        category: 'expression'
      },
      {
        id: 'u1-4',
        unitId: 1,
        word: 'keen on',
        phonetic: '/kiːn ɒn/',
        partOfSpeech: 'adjective phrase',
        meaningVi: 'say mê, hào hứng với',
        exampleEn: "Lan is keen on playing sport, especially badminton.",
        exampleVi: 'Lan rất hào hứng với việc chơi thể thao, đặc biệt là cầu lông.',
        collocation: 'be keen on + V-ing/N',
        category: 'expression'
      },
      {
        id: 'u1-5',
        unitId: 1,
        word: 'crazy about',
        phonetic: '/ˈkreɪzi əˈbaʊt/',
        partOfSpeech: 'adjective phrase',
        meaningVi: 'cực kỳ mê mẩn, phát cuồng vì cái gì',
        exampleEn: "I'm crazy about playing computer games at the weekend.",
        exampleVi: 'Tôi cực kỳ mê chơi game máy tính vào dịp cuối tuần.',
        collocation: 'be crazy about + V-ing/N',
        category: 'expression'
      },
      {
        id: 'u1-6',
        unitId: 1,
        word: 'into',
        phonetic: '/ˈɪntuː/',
        partOfSpeech: 'preposition phrase',
        meaningVi: 'rất hứng thú, say mê một lĩnh vực',
        exampleEn: "Eric is into snowboarding and usually goes to a nearby ski resort.",
        exampleVi: 'Eric rất đam mê trượt ván trên tuyết và thường đến khu trượt tuyết gần đó.',
        collocation: 'be into something',
        category: 'expression'
      },
      {
        id: 'u1-7',
        unitId: 1,
        word: 'hang out with',
        phonetic: '/hæŋ aʊt wɪð/',
        partOfSpeech: 'phrasal verb',
        meaningVi: 'đi chơi, tụ tập với bạn bè',
        exampleEn: 'I usually hang out with my friends on Sunday afternoon.',
        exampleVi: 'Tôi thường đi tụ tập chơi bời với bạn vào chiều Chủ nhật.',
        collocation: 'hang out with friends',
        category: 'vocabulary'
      },
      {
        id: 'u1-8',
        unitId: 1,
        word: 'detest',
        phonetic: '/dɪˈtest/',
        partOfSpeech: 'verb',
        meaningVi: 'ghét cay ghét đắng, căm ghét (+ V-ing)',
        exampleEn: "I detest hunting animals because it is cruel.",
        exampleVi: 'Tôi cực ghét săn bắt động vật vì việc đó rất tàn nhẫn.',
        collocation: 'detest + V-ing',
        category: 'grammar'
      },
      {
        id: 'u1-9',
        unitId: 1,
        word: 'fancy',
        phonetic: '/ˈfænsi/',
        partOfSpeech: 'verb',
        meaningVi: 'thích thú, muốn làm gì (+ V-ing)',
        exampleEn: 'Do you fancy going for a walk in the park?',
        exampleVi: 'Bạn có hứng thú đi dạo một lát trong công viên không?',
        collocation: 'fancy + V-ing',
        category: 'grammar'
      },
      {
        id: 'u1-10',
        unitId: 1,
        word: 'knitting kit',
        phonetic: '/ˈnɪtɪŋ kɪt/',
        partOfSpeech: 'noun',
        meaningVi: 'bộ dụng cụ đan len (kim đan, cuộn len)',
        exampleEn: 'Trang is looking for a knitting kit to make scarves.',
        exampleVi: 'Trang đang tìm một bộ dụng cụ đan len để đan khăn quàng cổ.',
        collocation: 'a knitting kit',
        category: 'vocabulary'
      },
      {
        id: 'u1-11',
        unitId: 1,
        word: 'dollhouse',
        phonetic: '/ˈdɒlhaʊs/',
        partOfSpeech: 'noun',
        meaningVi: 'nhà mô hình búp bê',
        exampleEn: 'Trang loves building dollhouses and making paper flowers in her leisure time.',
        exampleVi: 'Trang thích dựng mô hình nhà búp bê và làm hoa giấy trong thời gian rảnh.',
        category: 'vocabulary'
      },
      {
        id: 'u1-12',
        unitId: 1,
        word: 'snowboarding',
        phonetic: '/ˈsnəʊbɔːdɪŋ/',
        partOfSpeech: 'noun',
        meaningVi: 'môn trượt ván trên tuyết',
        exampleEn: 'Snowboarding improves my overall health and balance.',
        exampleVi: 'Môn trượt ván trên tuyết giúp cải thiện sức khỏe tổng thể và khả năng thăng bằng của tôi.',
        category: 'vocabulary'
      },
      {
        id: 'u1-13',
        unitId: 1,
        word: 'mental exercise',
        phonetic: '/ˈmentl ˈeksəsaɪz/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'bài tập rèn luyện trí não, tư duy',
        exampleEn: 'Doing puzzles is a great mental exercise that improves memory.',
        exampleVi: 'Giải câu đố là một bài tập rèn luyện trí não tuyệt vời giúp cải thiện trí nhớ.',
        category: 'vocabulary'
      },
      {
        id: 'u1-14',
        unitId: 1,
        word: 'muscle strength',
        phonetic: '/ˈmʌsl streŋkθ/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'sức mạnh cơ bắp, thể lực',
        exampleEn: 'Playing badminton improves muscle strength and helps reduce stress.',
        exampleVi: 'Chơi cầu lông cải thiện sức mạnh cơ bắp và giúp giảm căng thẳng.',
        category: 'vocabulary'
      },
      {
        id: 'u1-15',
        unitId: 1,
        word: 'connect',
        phonetic: '/kəˈnekt/',
        partOfSpeech: 'verb',
        meaningVi: 'gắn kết, thấu hiểu nhau hơn (với gia đình, bạn bè)',
        exampleEn: 'Spending time doing leisure activities with family is a great way to connect with them.',
        exampleVi: 'Dành thời gian tham gia các hoạt động giải trí cùng gia đình là cách tuyệt vời để gắn kết với nhau.',
        category: 'vocabulary'
      },
      {
        id: 'u1-16',
        unitId: 1,
        word: 'paper flowers',
        phonetic: '/ˈpeɪpə ˈflaʊəz/',
        partOfSpeech: 'noun',
        meaningVi: 'hoa giấy thủ công',
        exampleEn: 'Trang loves making paper flowers and bracelets in her free time.',
        exampleVi: 'Trang thích làm hoa giấy và vòng tay trong thời gian rảnh.',
        category: 'vocabulary'
      },
      {
        id: 'u1-17',
        unitId: 1,
        word: 'cycling',
        phonetic: '/ˈsaɪklɪŋ/',
        partOfSpeech: 'noun',
        meaningVi: 'hoạt động đạp xe đạp',
        exampleEn: 'We cycle to some nearby villages to enjoy the fresh air at the weekend.',
        exampleVi: 'Chúng tôi đạp xe tới các ngôi làng lân cận để hít thở không khí trong lành vào cuối tuần.',
        collocation: 'go cycling',
        category: 'vocabulary'
      },
      {
        id: 'u1-18',
        unitId: 1,
        word: 'comedy',
        phonetic: '/ˈkɒmədi/',
        partOfSpeech: 'noun',
        meaningVi: 'phim hài, kịch vui nhộn',
        exampleEn: "There's a new comedy at New World Cinema this Sunday.",
        exampleVi: 'Có một bộ phim hài mới tại rạp chiếu phim New World vào Chủ nhật này.',
        category: 'vocabulary'
      },
      {
        id: 'u1-19',
        unitId: 1,
        word: 'costume contest',
        phonetic: '/ˈkɒstjuːm ˈkɒntest/',
        partOfSpeech: 'noun',
        meaningVi: 'cuộc thi hóa trang, biểu diễn trang phục',
        exampleEn: 'Trang won the first prize in a costume contest at her school.',
        exampleVi: 'Trang đã giành giải nhất trong cuộc thi trang phục tại trường học của bạn ấy.',
        category: 'vocabulary'
      },
      {
        id: 'u1-20',
        unitId: 1,
        word: 'puzzle',
        phonetic: '/ˈpʌzl/',
        partOfSpeech: 'noun',
        meaningVi: 'trò chơi giải đố, câu đố (như Sudoku, ô chữ)',
        exampleEn: 'Tom thinks puzzles like Sudoku are very good for training the brain.',
        exampleVi: 'Tom nghĩ các câu đố như Sudoku rất tốt cho việc rèn luyện não bộ.',
        collocation: 'do puzzles / solve a puzzle',
        category: 'vocabulary'
      },
      {
        id: 'u1-21',
        unitId: 1,
        word: 'surf the net',
        phonetic: '/sɜːf ðə net/',
        partOfSpeech: 'verb phrase',
        meaningVi: 'lướt mạng internet',
        exampleEn: 'Tom spends one hour surfing the net almost every day.',
        exampleVi: 'Tom dành khoảng một tiếng đồng hồ lướt mạng hầu như mỗi ngày.',
        category: 'vocabulary'
      },
      {
        id: 'u1-22',
        unitId: 1,
        word: 'message friends',
        phonetic: '/ˈmesɪdʒ frendz/',
        partOfSpeech: 'verb phrase',
        meaningVi: 'nhắn tin trò chuyện với bạn bè',
        exampleEn: 'Messaging friends is a popular way for teens to spend their free time.',
        exampleVi: 'Nhắn tin với bạn bè là cách phổ biến mà giới trẻ dành thời gian rảnh rỗi.',
        category: 'vocabulary'
      },
      {
        id: 'u1-23',
        unitId: 1,
        word: 'recipe',
        phonetic: '/ˈresəpi/',
        partOfSpeech: 'noun',
        meaningVi: 'công thức nấu ăn',
        exampleEn: 'My big brother looks for easy recipes online, and then we cook together.',
        exampleVi: 'Anh trai tôi tìm kiếm các công thức nấu ăn đơn giản trên mạng, rồi chúng tôi nấu cùng nhau.',
        category: 'vocabulary'
      },
      {
        id: 'u1-24',
        unitId: 1,
        word: 'ride a horse',
        phonetic: '/raɪd ə hɔːs/',
        partOfSpeech: 'verb phrase',
        meaningVi: 'cưỡi ngựa',
        exampleEn: 'Ann enjoys riding a horse at the riding club on weekends.',
        exampleVi: 'Ann thích cưỡi ngựa tại câu lạc bộ cưỡi ngựa vào các dịp cuối tuần.',
        category: 'vocabulary'
      },
      {
        id: 'u1-25',
        unitId: 1,
        word: 'burn oneself',
        phonetic: '/bɜːn wʌnˈself/',
        partOfSpeech: 'verb phrase',
        meaningVi: 'tự làm mình bị bỏng (khi nấu nướng)',
        exampleEn: "I'm not into cooking because I often burn myself on hot pans.",
        exampleVi: 'Tôi không thích nấu ăn vì tôi hay tự làm mình bị bỏng trên chảo nóng.',
        category: 'vocabulary'
      },
      {
        id: 'u1-26',
        unitId: 1,
        word: 'judo',
        phonetic: '/ˈdʒuːdəʊ/',
        partOfSpeech: 'noun',
        meaningVi: 'môn võ judo (nhu đạo)',
        exampleEn: 'My friends are keen on doing judo and they go to the judo club every Sunday.',
        exampleVi: 'Các bạn tôi rất thích tập võ judo và họ đến câu lạc bộ judo vào mỗi Chủ nhật.',
        collocation: 'do judo',
        category: 'vocabulary'
      },
      {
        id: 'u1-27',
        unitId: 1,
        word: 'save money',
        phonetic: '/seɪv ˈmʌni/',
        partOfSpeech: 'verb phrase',
        meaningVi: 'tiết kiệm tiền (lợi ích của việc tự làm DIY)',
        exampleEn: 'Doing DIY helps us save money and make things we like.',
        exampleVi: 'Tự làm đồ thủ công giúp chúng ta tiết kiệm tiền và tạo ra những món đồ mình thích.',
        category: 'vocabulary'
      },
      {
        id: 'u1-28',
        unitId: 1,
        word: 'creative',
        phonetic: '/kriˈeɪtɪv/',
        partOfSpeech: 'adjective',
        meaningVi: 'sáng tạo, có óc tưởng tượng phong phú',
        exampleEn: 'Craft activities make children more creative and patient.',
        exampleVi: 'Các hoạt động thủ công giúp trẻ em trở nên sáng tạo và kiên nhẫn hơn.',
        category: 'vocabulary'
      },
      {
        id: 'u1-29',
        unitId: 1,
        word: 'bracelet',
        phonetic: '/ˈbreɪslət/',
        partOfSpeech: 'noun',
        meaningVi: 'vòng đeo tay handmade',
        exampleEn: 'Trang makes lovely beads bracelets for her friends.',
        exampleVi: 'Trang tự làm những chiếc vòng tay xâu hạt xinh xắn cho bạn bè.',
        category: 'vocabulary'
      },
      {
        id: 'u1-30',
        unitId: 1,
        word: 'be good for',
        phonetic: '/bi ɡʊd fɔː(r)/',
        partOfSpeech: 'verb phrase',
        meaningVi: 'tốt cho, có lợi cho (sức khỏe thể chất/tinh thần)',
        exampleEn: 'Playing badminton is good for your muscle strength.',
        exampleVi: 'Chơi cầu lông rất tốt cho sức mạnh cơ bắp của bạn.',
        category: 'expression'
      }
    ],
    grammar: [
      {
        title: 'Động từ chỉ sự yêu thích / ghét đi với Danh động từ (Gerunds)',
        formula: 'S + fancy / detest / enjoy / dislike / avoid / mind + V-ing',
        explanation: 'Các động từ fancy (thích), detest (cực ghét), enjoy (thích thú), dislike (không thích), avoid (tránh né), mind (ngại, phiền) BẮT BUỘC theo sau bởi danh động từ (V-ing), TUYỆT ĐỐI không dùng to-infinitive.',
        examples: [
          { en: 'They dislike surfing the net all day.', vi: 'Họ không thích lướt mạng cả ngày.' },
          { en: 'I detest getting up early on cold mornings.', vi: 'Tôi ghét cay ghét đắng việc dậy sớm vào buổi sáng lạnh.' },
          { en: 'Tom enjoys doing puzzles like Sudoku.', vi: 'Tom thích giải các câu đố như Sudoku.' },
          { en: 'Do you fancy hanging out at the mall?', vi: 'Bạn có hứng thú đi dạo trung tâm mua sắm không?' }
        ],
        note: 'MẸO NHỚ NHANH: "FED DAM" (Fancy, Enjoy, Detest, Dislike, Avoid, Mind) => LUÔN CỘNG V-ING!'
      },
      {
        title: 'Động từ đi kèm cả Danh động từ (V-ing) và To-infinitive',
        formula: 'S + love / like / hate / prefer + V-ing HOẶC to + V-inf',
        explanation: 'Nhóm động từ chỉ cảm xúc cơ bản: love (yêu), like (thích), hate (ghét), prefer (thích hơn) có thể đi với cả danh động từ (V-ing) lẫn động từ nguyên mẫu có to (to-V) mà ý nghĩa câu không thay đổi đáng kể.',
        examples: [
          { en: 'I love going / I love to go to the cinema.', vi: 'Tôi thích đi xem phim chiếu rạp.' },
          { en: 'She hates washing / She hates to wash dishes.', vi: 'Cô ấy ghét việc rửa chén bát.' },
          { en: 'We prefer cycling / prefer to cycle in the morning.', vi: 'Chúng tôi thích đạp xe vào buổi sáng hơn.' }
        ],
        note: 'Khi có WOULD: "would like / would love / would prefer" BẮT BUỘC + TO V-inf (ví dụ: I would like to invite you).'
      },
      {
        title: 'Cụm tính từ / giới từ chỉ sự yêu thích đi với Danh từ hoặc V-ing',
        formula: 'be fond of / keen on / crazy about / into / interested in + V-ing / Noun',
        explanation: 'Tất cả các giới từ (of, on, about, in, into) khi đi sau tính từ biểu đạt sở thích đều phải đi kèm Danh từ hoặc Động từ đuôi -ing.',
        examples: [
          { en: "I'm keen on doing DIY in my free time.", vi: 'Tôi rất say mê làm đồ handmade lúc rảnh rỗi.' },
          { en: 'He is fond of playing volleyball with friends.', vi: 'Cậu ấy rất thích chơi bóng chuyền cùng bạn bè.' },
          { en: "She is crazy about listening to K-pop.", vi: 'Cô ấy mê mẩn nghe nhạc K-pop.' }
        ]
      }
    ],
    pronunciation: {
      title: 'Phân biệt Âm ngắn /ʊ/ và Âm dài /u:/',
      description: 'Âm /ʊ/ là nguyên âm ngắn, mở môi hơi tròn, phát âm dứt khoát (cook, push, book, foot, look). Âm /u:/ là nguyên âm dài, chu môi tròn về phía trước, âm kéo dài và căng hơn (school, group, move, cool, pool, June).',
      pairs: {
        sound1: '/ʊ/ (ngắn)',
        words1: ['cook', 'push', 'would', 'woman', 'foot', 'look', 'book', 'sugar'],
        sound2: '/u:/ (dài)',
        words2: ['school', 'group', 'June', 'move', 'cool', 'pool', 'food', 'soup']
      },
      examples: [
        'She likes reading books (/ʊ/) and swimming in the pool (/u:/).',
        'When it is cool (/u:/), we like to play football (/ʊ/).',
        'Put (/ʊ/) the blue (/u:/) book (/ʊ/) into the group (/u:/) box.'
      ]
    },
    communication: {
      situation: 'Mời và đáp lại lời mời lịch sự (Making & Responding to invitations)',
      expressions: [
        { en: 'Would you like to + V-inf...?', vi: 'Bạn có muốn ... cùng mình không? (Lời mời lịch sự)' },
        { en: "Yes, I'd love to. Thanks!", vi: 'Có chứ, mình rất thích! Cảm ơn bạn nhé! (Đồng ý)' },
        { en: 'Do you fancy + V-ing...?', vi: 'Bạn có hứng thú đi ... không? (Lời mời thân mật)' },
        { en: "That's great. Thanks!", vi: 'Tuyệt quá, cảm ơn nhé! (Đồng ý hào hứng)' },
        { en: "I'd love to, but I'm busy then.", vi: 'Mình rất muốn đi, nhưng lúc đó mình bận mất rồi. (Từ chối khéo léo)' }
      ],
      sampleDialogue: [
        { speaker: 'Tom', text: 'Would you like to go to the cinema with me and Mark this Sunday?', vi: 'Chủ nhật này cậu có muốn đi xem phim với tớ và Mark không?' },
        { speaker: 'Trang', text: "Yes, I'd love to. Can I ask Mai to join us?", vi: 'Có chứ, tớ rất thích! Tớ rủ thêm Mai cùng đi được không?' },
        { speaker: 'Tom', text: "Sure. Let's meet outside the cinema at 9 a.m.", vi: 'Chắc chắn rồi. Hẹn gặp nhau trước rạp lúc 9 giờ sáng nhé.' }
      ]
    },
    quizQuestions: [
      {
        id: 'q1-1',
        unitId: 1,
        question: 'Tom enjoys ________ puzzles, especially Sudoku.',
        options: ['A. doing', 'B. do', 'C. to do', 'D. done'],
        correctAnswerIndex: 0,
        explanationVi: 'Động từ "enjoy" bắt buộc theo sau bởi danh động từ V-ing (doing). Cụm từ: do puzzles (giải câu đố).',
        type: 'grammar'
      },
      {
        id: 'q1-2',
        unitId: 1,
        question: 'Do you fancy ________ to the cinema this weekend?',
        options: ['A. go', 'B. going', 'C. to go', 'D. went'],
        correctAnswerIndex: 1,
        explanationVi: '"Fancy" là động từ chỉ sở thích bắt buộc đi với V-ing (fancy doing sth: có hứng thú làm gì).',
        type: 'grammar'
      },
      {
        id: 'q1-3',
        unitId: 1,
        question: "Mai is ________ on history. She often goes to museums to learn about the past.",
        options: ['A. fond', 'B. keen', 'C. interested', 'D. crazy'],
        correctAnswerIndex: 1,
        explanationVi: 'Ta có cụm "keen on" = say mê, hứng thú. Trong khi "fond of", "interested in", "crazy about". Vì có giới từ "on" nên chọn "keen".',
        type: 'vocabulary'
      },
      {
        id: 'q1-4',
        unitId: 1,
        question: 'Which word has the underlined part pronounced as /u:/?',
        options: ['A. cook', 'B. group', 'C. push', 'D. would'],
        correctAnswerIndex: 1,
        explanationVi: '"group" được phát âm là /ɡruːp/ (âm /u:/ dài), các từ còn lại cook /kʊk/, push /pʊʃ/, would /wʊd/ đều là âm /ʊ/ ngắn.',
        type: 'pronunciation'
      },
      {
        id: 'q1-5',
        unitId: 1,
        question: "I detest ________ animals. I think it's cruel to harm them.",
        options: ['A. hunting', 'B. to hunt', 'C. hunt', 'D. hunted'],
        correctAnswerIndex: 0,
        explanationVi: '"detest" bắt buộc đi với V-ing (detest hunting: căm ghét việc săn bắn).',
        type: 'grammar'
      },
      {
        id: 'q1-6',
        unitId: 1,
        question: 'Which activity is described as "improve memory, a mental exercise"?',
        options: ['A. doing DIY', 'B. doing puzzles', 'C. surfing the net', 'D. cooking'],
        correctAnswerIndex: 1,
        explanationVi: 'Trong bài học trang 9: "doing puzzles" (giải câu đố, sudoku) giúp rèn luyện trí nhớ và tư duy não bộ (mental exercise).',
        type: 'vocabulary'
      },
      {
        id: 'q1-7',
        unitId: 1,
        question: 'The word "connect" in the reading passage (page 14) is closest in meaning to:',
        options: ['A. join with something', 'B. better understand someone', 'C. speak to someone by phone', 'D. surf the internet'],
        correctAnswerIndex: 1,
        explanationVi: 'Theo bài tập đọc hiểu trang 14 SGK: "connect" mang nghĩa thấu hiểu, gắn kết tình cảm với một ai đó (better understand someone).',
        type: 'vocabulary'
      },
      {
        id: 'q1-8',
        unitId: 1,
        question: 'My brother spends lots of time surfing the net, but I’m not ________ it.',
        options: ['A. fond', 'B. keen', 'C. into', 'D. crazy'],
        correctAnswerIndex: 2,
        explanationVi: 'Cấu trúc "be into something" nghĩa là say mê, hứng thú. Phủ định là "be not into it" (trang 10 SGK).',
        type: 'vocabulary'
      },
      {
        id: 'q1-9',
        unitId: 1,
        question: 'Which word has the vowel sound /ʊ/ (short u)?',
        options: ['A. school', 'B. pool', 'C. cook', 'D. June'],
        correctAnswerIndex: 2,
        explanationVi: '"cook" phát âm là /kʊk/ (nguyên âm /ʊ/ ngắn), các từ school /skuːl/, pool /puːl/, June /dʒuːn/ đều là /u:/ dài.',
        type: 'pronunciation'
      },
      {
        id: 'q1-10',
        unitId: 1,
        question: 'Tom: "Would you like to go to the cinema with me and Mark this Sunday?" - Trang: "________"',
        options: ["A. Yes, I'd love to.", 'B. No, thanks a lot.', 'C. Yes, I like.', 'D. That is wrong.'],
        correctAnswerIndex: 0,
        explanationVi: 'Đáp lại lời mời "Would you like to...?" một cách lịch sự chuẩn SGK là "Yes, I\'d love to. Thanks!" (trang 8 & 12 SGK).',
        type: 'communication'
      },
      {
        id: 'q1-11',
        unitId: 1,
        question: 'Rewrite: "Lan likes making paper flowers." using "keen on":',
        options: ['A. Lan is keen on making paper flowers.', 'B. Lan is keen of making paper flowers.', 'C. Lan is keen to make paper flowers.', 'D. Lan keen on makes paper flowers.'],
        correctAnswerIndex: 0,
        explanationVi: 'Cấu trúc chuẩn: be keen on + V-ing ("Lan is keen on making paper flowers").',
        type: 'grammar'
      },
      {
        id: 'q1-12',
        unitId: 1,
        question: 'Playing sport helps improve ________ and reduces everyday stress.',
        options: ['A. muscle strength', 'B. dollhouse', 'C. knitting kit', 'D. comedy'],
        correctAnswerIndex: 0,
        explanationVi: 'Chơi thể thao giúp phát triển "muscle strength" (sức mạnh cơ bắp) và giải tỏa căng thẳng (trang 11 SGK).',
        type: 'vocabulary'
      }
    ],
    sentencePuzzles: [
      {
        scrambled: ['keen', "I'm", 'on', 'DIY', 'doing', 'free', 'my', 'in', 'time'],
        correct: "I'm keen on doing DIY in my free time",
        translationVi: 'Tôi rất thích tự làm đồ thủ công vào thời gian rảnh.',
        hint: 'Cấu trúc be keen on + V-ing'
      },
      {
        scrambled: ['Would', 'like', 'you', 'to', 'go', 'cinema', 'to', 'the', 'Sunday', 'this?'],
        correct: 'Would you like to go to the cinema this Sunday?',
        translationVi: 'Bạn có muốn đi xem phim Chủ nhật này không?',
        hint: 'Lời mời lịch sự với Would you like to'
      },
      {
        scrambled: ['Tom', 'enjoys', 'doing', 'puzzles', 'like', 'Sudoku', 'very', 'much'],
        correct: 'Tom enjoys doing puzzles like Sudoku very much',
        translationVi: 'Tom rất thích giải các câu đố như Sudoku.',
        hint: 'Động từ enjoy + V-ing'
      },
      {
        scrambled: ['Playing', 'sport', 'helps', 'improve', 'your', 'muscle', 'strength'],
        correct: 'Playing sport helps improve your muscle strength',
        translationVi: 'Chơi thể thao giúp cải thiện sức mạnh cơ bắp của bạn.',
        hint: 'Danh động từ làm chủ ngữ: Playing sport'
      }
    ]
  },
  {
    id: 2,
    title: 'Unit 2: Life in the Countryside',
    englishTitle: 'Life in the Countryside',
    theme: 'Our Communities',
    description: 'Tìm hiểu cuộc sống thôn quê yên bình, mùa gặt lúa bận rộn, các hoạt động dân dã và chuyên sâu về cấu trúc so sánh hơn của trạng từ (comparative adverbs).',
    vocabulary: [
      {
        id: 'u2-1',
        unitId: 2,
        word: 'paddy field',
        phonetic: '/ˈpædi fiːld/',
        partOfSpeech: 'noun',
        meaningVi: 'ruộng lúa, cánh đồng lúa',
        exampleEn: 'Children went to the paddy fields to fly kites in the breezy afternoon.',
        exampleVi: 'Trẻ em rủ nhau ra cánh đồng lúa thả diều vào buổi chiều lộng gió.',
        collocation: 'vast paddy fields',
        category: 'vocabulary'
      },
      {
        id: 'u2-2',
        unitId: 2,
        word: 'combine harvester',
        phonetic: '/kəmˈbaɪn ˈhɑːvɪstə(r)/',
        partOfSpeech: 'noun',
        meaningVi: 'máy gặt đập liên hợp',
        exampleEn: 'Nowadays, farmers use a combine harvester to harvest and thresh rice quickly.',
        exampleVi: 'Ngày nay nông dân dùng máy gặt đập liên hợp để thu hoạch và tuốt lúa nhanh chóng.',
        category: 'vocabulary'
      },
      {
        id: 'u2-3',
        unitId: 2,
        word: 'herd',
        phonetic: '/hɜːd/',
        partOfSpeech: 'verb',
        meaningVi: 'chăn giữ vật nuôi (trâu, bò, dê)',
        exampleEn: 'The village children herd buffaloes and cows along the river bank.',
        exampleVi: 'Trẻ em trong làng chăn trâu và bò dọc bờ sông.',
        collocation: 'herd buffaloes / herd cattle',
        category: 'vocabulary'
      },
      {
        id: 'u2-4',
        unitId: 2,
        word: 'vast',
        phonetic: '/vɑːst/',
        partOfSpeech: 'adjective',
        meaningVi: 'rộng lớn, mênh mông, bát ngát',
        exampleEn: 'The Sahara is a vast desert that covers parts of eleven countries.',
        exampleVi: 'Sahara là một sa mạc rộng lớn trải dài qua một phần mười một quốc gia.',
        category: 'vocabulary'
      },
      {
        id: 'u2-5',
        unitId: 2,
        word: 'picturesque',
        phonetic: '/ˌpɪktʃəˈresk/',
        partOfSpeech: 'adjective',
        meaningVi: 'đẹp như tranh vẽ, thơ mộng',
        exampleEn: 'Duong Lam is famous for its picturesque landscape and ancient houses.',
        exampleVi: 'Đường Lâm nổi tiếng với phong cảnh đẹp như tranh vẽ và những ngôi nhà cổ.',
        category: 'vocabulary'
      },
      {
        id: 'u2-6',
        unitId: 2,
        word: 'hospitable',
        phonetic: '/hɒˈspɪtəbl/',
        partOfSpeech: 'adjective',
        meaningVi: 'hiếu khách, cởi mở đón tiếp khách',
        exampleEn: 'The local villagers are very warm and hospitable to visitors.',
        exampleVi: 'Người dân địa phương rất nồng hậu và hiếu khách đối với du khách.',
        category: 'vocabulary'
      },
      {
        id: 'u2-7',
        unitId: 2,
        word: 'well-trained',
        phonetic: '/ˌwel ˈtreɪnd/',
        partOfSpeech: 'adjective',
        meaningVi: 'lành nghề, được đào tạo bài bản',
        exampleEn: 'The workers in our factory are well-trained and skilled.',
        exampleVi: 'Các công nhân trong nhà máy chúng tôi được đào tạo rất bài bản và lành nghề.',
        category: 'vocabulary'
      },
      {
        id: 'u2-8',
        unitId: 2,
        word: 'plough',
        phonetic: '/plaʊ/',
        partOfSpeech: 'verb',
        meaningVi: 'cày (thửa ruộng)',
        exampleEn: 'In the past, farmers used buffaloes to plough the fields.',
        exampleVi: 'Trước đây, người nông dân dùng trâu để cày ruộng.',
        collocation: 'plough the fields',
        category: 'vocabulary'
      },
      {
        id: 'u2-9',
        unitId: 2,
        word: 'orchard',
        phonetic: '/ˈɔːtʃəd/',
        partOfSpeech: 'noun',
        meaningVi: 'vườn cây ăn quả',
        exampleEn: 'Many families in the village live by growing fruit trees in their orchards.',
        exampleVi: 'Nhiều gia đình trong thôn sống bằng nghề trồng cây ăn trái trong vườn quả.',
        category: 'vocabulary'
      },
      {
        id: 'u2-10',
        unitId: 2,
        word: 'cultivate',
        phonetic: '/ˈkʌltɪveɪt/',
        partOfSpeech: 'verb',
        meaningVi: 'trồng trọt, canh tác (lúa, hoa màu)',
        exampleEn: 'Farmers cultivate rice, vegetables, and raise cattle.',
        exampleVi: 'Những người nông dân trồng lúa, rau màu và chăn nuôi gia súc.',
        collocation: 'cultivate rice / crops',
        category: 'vocabulary'
      },
      {
        id: 'u2-11',
        unitId: 2,
        word: 'canal',
        phonetic: '/kəˈnæl/',
        partOfSpeech: 'noun',
        meaningVi: 'kênh, mương dẫn nước tưới tiêu',
        exampleEn: 'Canals are small water passages used for carrying water to fields and crops.',
        exampleVi: 'Các con kênh là lối dẫn nước nhỏ dùng để đưa nước về đồng ruộng và hoa màu.',
        category: 'vocabulary'
      },
      {
        id: 'u2-12',
        unitId: 2,
        word: 'unload',
        phonetic: '/ˌʌnˈləʊd/',
        partOfSpeech: 'verb',
        meaningVi: 'dỡ hàng, bốc dỡ thóc lúa xuống xe tải',
        exampleEn: 'The driver unloaded the rice bags from the back of the truck.',
        exampleVi: 'Người tài xế đã dỡ các bao thóc từ thùng xe tải xuống.',
        collocation: 'unload rice',
        category: 'vocabulary'
      },
      {
        id: 'u2-13',
        unitId: 2,
        word: 'cattle',
        phonetic: '/ˈkætl/',
        partOfSpeech: 'noun',
        meaningVi: 'gia súc (bò, trâu nuôi)',
        exampleEn: 'We helped the farmers herd cattle along the green meadow.',
        exampleVi: 'Chúng tôi giúp những người nông dân chăn gia súc dọc bãi cỏ xanh.',
        collocation: 'herd cattle',
        category: 'vocabulary'
      },
      {
        id: 'u2-14',
        unitId: 2,
        word: 'harvest time',
        phonetic: '/ˈhɑːvɪst taɪm/',
        partOfSpeech: 'noun',
        meaningVi: 'mùa gặt, mùa thu hoạch mùa màng',
        exampleEn: 'Harvest time is a busy period when farmers cut and collect their crops.',
        exampleVi: 'Mùa gặt là khoảng thời gian bận rộn khi nông dân gặt và thu gom mùa màng.',
        category: 'vocabulary'
      },
      {
        id: 'u2-15',
        unitId: 2,
        word: 'bamboo dancing',
        phonetic: '/ˌbæmˈbuː ˈdɑːnsɪŋ/',
        partOfSpeech: 'noun',
        meaningVi: 'múa sạp (trò chơi / điệu múa truyền thống vùng cao)',
        exampleEn: 'In the evening, we played traditional games like bamboo dancing and dragon-snake.',
        exampleVi: 'Vào buổi tối, chúng tôi chơi các trò chơi dân gian như nhảy sạp và rồng rắn lên mây.',
        category: 'vocabulary'
      },
      {
        id: 'u2-16',
        unitId: 2,
        word: 'dragon-snake',
        phonetic: '/ˈdræɡən sneɪk/',
        partOfSpeech: 'noun',
        meaningVi: 'trò chơi rồng rắn lên mây',
        exampleEn: 'Dragon-snake is a popular traditional folk game played by village children.',
        exampleVi: 'Rồng rắn lên mây là trò chơi dân gian truyền thống quen thuộc của trẻ em làng quê.',
        category: 'vocabulary'
      },
      {
        id: 'u2-17',
        unitId: 2,
        word: 'dry rice',
        phonetic: '/draɪ raɪs/',
        partOfSpeech: 'verb phrase',
        meaningVi: 'phơi thóc lúa dưới nắng trên sân gạch',
        exampleEn: 'After harvesting, the villagers dry rice on large courtyards.',
        exampleVi: 'Sau khi thu hoạch, người dân phơi thóc lúa trên các sân rộng.',
        category: 'vocabulary'
      },
      {
        id: 'u2-18',
        unitId: 2,
        word: 'milk cows',
        phonetic: '/mɪlk kaʊz/',
        partOfSpeech: 'verb phrase',
        meaningVi: 'vắt sữa bò ở trang trại',
        exampleEn: 'The workers wake up early every morning to milk cows.',
        exampleVi: 'Các công nhân thức dậy sớm mỗi sáng để vắt sữa bò.',
        category: 'vocabulary'
      },
      {
        id: 'u2-19',
        unitId: 2,
        word: 'feed pigs',
        phonetic: '/fiːd pɪɡz/',
        partOfSpeech: 'verb phrase',
        meaningVi: 'cho lợn / heo ăn',
        exampleEn: 'My grandmother goes to the barn twice a day to feed pigs.',
        exampleVi: 'Bà tôi ra chuồng hai lần mỗi ngày để cho lợn ăn.',
        category: 'vocabulary'
      },
      {
        id: 'u2-20',
        unitId: 2,
        word: 'catch fish',
        phonetic: '/kætʃ fɪʃ/',
        partOfSpeech: 'verb phrase',
        meaningVi: 'bắt cá, đánh bắt cá ở ao hồ',
        exampleEn: 'People here live by catching fish from nearby lakes and ponds.',
        exampleVi: 'Người dân ở đây sống bằng nghề bắt cá từ các hồ và ao gần đó.',
        category: 'vocabulary'
      },
      {
        id: 'u2-21',
        unitId: 2,
        word: 'stretch',
        phonetic: '/stretʃ/',
        partOfSpeech: 'verb',
        meaningVi: 'trải dài, mở rộng ra một vùng đất lớn',
        exampleEn: 'There are vast paddy fields stretching long distances as far as the eye can see.',
        exampleVi: 'Có những cánh đồng lúa bát ngát trải dài tít tắp ngút tầm mắt.',
        category: 'vocabulary'
      },
      {
        id: 'u2-22',
        unitId: 2,
        word: 'sense of community',
        phonetic: '/sens əv kəˈmjuːnəti/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'tinh thần gắn kết cộng đồng làng xóm',
        exampleEn: 'There is a great sense of community in my village; everyone is close to each other.',
        exampleVi: 'Có một tinh thần cộng đồng rất lớn trong làng tôi; mọi người rất gần gũi với nhau.',
        category: 'vocabulary'
      },
      {
        id: 'u2-23',
        unitId: 2,
        word: 'supportive',
        phonetic: '/səˈpɔːtɪv/',
        partOfSpeech: 'adjective',
        meaningVi: 'luôn tương trợ, nhiệt tình giúp đỡ lẫn nhau',
        exampleEn: 'The villagers are very supportive and help each other during harvest time.',
        exampleVi: 'Người dân trong làng rất nhiệt tình hỗ trợ và giúp đỡ nhau trong suốt mùa gặt.',
        category: 'vocabulary'
      },
      {
        id: 'u2-24',
        unitId: 2,
        word: 'lighthouse',
        phonetic: '/ˈlaɪthaʊs/',
        partOfSpeech: 'noun',
        meaningVi: 'ngọn hải đăng',
        exampleEn: 'Hollum Village on Ameland island is famous for its historical lighthouse.',
        exampleVi: 'Làng Hollum trên đảo Ameland nổi tiếng với ngọn hải đăng lịch sử.',
        category: 'vocabulary'
      },
      {
        id: 'u2-25',
        unitId: 2,
        word: 'speciality',
        phonetic: '/ˌspeʃiˈæləti/',
        partOfSpeech: 'noun',
        meaningVi: 'đặc sản truyền thống địa phương',
        exampleEn: 'Visitors to Duong Lam village can try local specialities like keo doi and che lam.',
        exampleVi: 'Du khách đến làng Đường Lâm có thể thưởng thức các đặc sản địa phương như kẹo dồi và chè lam.',
        category: 'vocabulary'
      },
      {
        id: 'u2-26',
        unitId: 2,
        word: 'crop',
        phonetic: '/krɒp/',
        partOfSpeech: 'noun',
        meaningVi: 'hoa màu, nông sản, vụ mùa',
        exampleEn: 'Farmers work hard under the sun to collect their crops.',
        exampleVi: 'Những người nông dân vất vả dưới trời nắng để thu gom nông sản của mình.',
        collocation: 'cash crops / collect crops',
        category: 'vocabulary'
      },
      {
        id: 'u2-27',
        unitId: 2,
        word: 'pasture',
        phonetic: '/ˈpɑːstʃə(r)/',
        partOfSpeech: 'noun',
        meaningVi: 'đồng cỏ, bãi cỏ chăn thả gia súc',
        exampleEn: 'Cattle and sheep are grazing peacefully on the green pasture.',
        exampleVi: 'Gia súc và cừu đang gặm cỏ thanh bình trên bãi đồng cỏ xanh mướt.',
        category: 'vocabulary'
      },
      {
        id: 'u2-28',
        unitId: 2,
        word: 'peaceful',
        phonetic: '/ˈpiːsfl/',
        partOfSpeech: 'adjective',
        meaningVi: 'yên bình, thanh bình, không xô bồ',
        exampleEn: 'Life in the countryside is much more peaceful than life in the noisy city.',
        exampleVi: 'Cuộc sống ở thôn quê yên bình hơn nhiều so với cuộc sống trong thành phố ồn ào.',
        category: 'vocabulary'
      },
      {
        id: 'u2-29',
        unitId: 2,
        word: 'breeze',
        phonetic: '/briːz/',
        partOfSpeech: 'noun',
        meaningVi: 'cơn gió nhẹ mát lành thoảng qua',
        exampleEn: 'A cool breeze blew across the vast open fields.',
        exampleVi: 'Một làn gió mát rượi thổi qua những cánh đồng bát ngát.',
        collocation: 'cool breeze / gentle breeze',
        category: 'vocabulary'
      },
      {
        id: 'u2-30',
        unitId: 2,
        word: 'kite-flying',
        phonetic: '/ˈkaɪt flaɪɪŋ/',
        partOfSpeech: 'noun',
        meaningVi: 'hoạt động thả diều',
        exampleEn: 'Kite-flying is a popular afternoon leisure activity for children in the village.',
        exampleVi: 'Thả diều là hoạt động giải trí buổi chiều phổ biến của trẻ em trong làng.',
        category: 'vocabulary'
      },
      {
        id: 'u2-31',
        unitId: 2,
        word: 'cottage',
        phonetic: '/ˈkɒtɪdʒ/',
        partOfSpeech: 'noun',
        meaningVi: 'nhà tranh, nhà nhỏ ấm cúng ở làng quê',
        exampleEn: 'My grandparents live in an old wooden cottage near the river.',
        exampleVi: 'Ông bà tôi sống trong một ngôi nhà gỗ nhỏ ấm cúng gần bờ sông.',
        category: 'vocabulary'
      },
      {
        id: 'u2-32',
        unitId: 2,
        word: 'nomadic',
        phonetic: '/nəʊˈmædɪk/',
        partOfSpeech: 'adjective',
        meaningVi: 'du mục (di chuyển theo bầy đàn gia súc)',
        exampleEn: 'Some groups in the high mountains still live a traditional nomadic life.',
        exampleVi: 'Một số nhóm người trên vùng núi cao vẫn duy trì lối sống du mục truyền thống.',
        collocation: 'nomadic life',
        category: 'vocabulary'
      },
      {
        id: 'u2-33',
        unitId: 2,
        word: 'folk games',
        phonetic: '/fəʊk ɡeɪmz/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'các trò chơi dân gian truyền thống',
        exampleEn: 'Children love playing folk games like tug of war and blind man’s buff.',
        exampleVi: 'Trẻ em rất thích chơi các trò chơi dân gian như kéo co và bịt mắt bắt dê.',
        category: 'vocabulary'
      },
      {
        id: 'u2-34',
        unitId: 2,
        word: 'harvest festival',
        phonetic: '/ˈhɑːvɪst ˈfestɪvl/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'lễ hội mừng mùa màng bội thu',
        exampleEn: 'The villagers hold a harvest festival every autumn to celebrate.',
        exampleVi: 'Dân làng tổ chức lễ hội mừng vụ mùa vào mỗi mùa thu để ăn mừng.',
        category: 'vocabulary'
      },
      {
        id: 'u2-35',
        unitId: 2,
        word: 'livestock',
        phonetic: '/ˈlaɪvstɒk/',
        partOfSpeech: 'noun',
        meaningVi: 'vật nuôi trang trại (bò, lợn, gia cầm...)',
        exampleEn: 'Farmers feed and take care of their livestock every day.',
        exampleVi: 'Người nông dân cho ăn và chăm sóc đàn vật nuôi của họ mỗi ngày.',
        category: 'vocabulary'
      }
    ],
    grammar: [
      {
        title: 'So sánh hơn của Trạng từ ngắn (Short Adverbs)',
        formula: 'S1 + V + adv + -er + than + S2 / pronoun',
        explanation: 'Trạng từ ngắn (thường là trạng từ có 1 âm tiết hoặc có dạng viết giống hệt tính từ: fast, hard, early, late, near, high, soon) tạo dạng so sánh hơn bằng cách thêm hậu tố "-er". Chú ý: early kết thúc bằng "y" đổi thành "i" rồi thêm "-er" (earlier).',
        examples: [
          { en: 'A horse can run faster than a buffalo.', vi: 'Ngựa có thể chạy nhanh hơn trâu.' },
          { en: 'Farmers wake up earlier than city dwellers.', vi: 'Nông dân thức dậy sớm hơn người thành thị.' },
          { en: 'They worked harder to harvest the rice before the thunderstorm.', vi: 'Họ đã làm việc cật lực hơn để thu hoạch lúa trước cơn dông bão.' }
        ],
        note: 'LƯU Ý QUAN TRỌNG: KHÔNG BAO GIỜ dùng "fastly" (từ này không tồn tại trong tiếng Anh!).'
      },
      {
        title: 'So sánh hơn của Trạng từ dài (Long Adverbs - đuôi -ly)',
        formula: 'S1 + V + more + adv + than + S2 / pronoun',
        explanation: 'Trạng từ dài (thường có 2 âm tiết trở lên và kết thúc bằng đuôi "-ly" cấu tạo từ tính từ: beautifully, carefully, slowly, peacefully, fluently) tạo dạng so sánh hơn bằng cách thêm "more" đằng trước trạng từ.',
        examples: [
          { en: 'Mai dances more beautifully than Hoa does.', vi: 'Mai múa đẹp hơn Hoa.' },
          { en: 'Combine harvesters work more quickly and efficiently than humans.', vi: 'Máy gặt đập làm việc nhanh và hiệu quả hơn con người.' },
          { en: 'He drives more carefully when going through village paths.', vi: 'Anh ấy lái xe cẩn thận hơn khi đi qua những con đường làng.' }
        ]
      },
      {
        title: 'Các Trạng từ Bất quy tắc (Irregular Adverbs) cần học thuộc lòng',
        formula: 'well → better | badly → worse | far → farther/further | little → less | much → more',
        explanation: 'Một số trạng từ không tuân theo quy tắc thêm -er hay more mà biến đổi hoàn toàn thành dạng mới.',
        examples: [
          { en: 'Nam plays football better than Phong.', vi: 'Nam chơi bóng đá tốt hơn Phong.' },
          { en: 'She performed worse than she expected because she was nervous.', vi: 'Cô ấy thể hiện tệ hơn kỳ vọng vì cô ấy quá hồi hộp.' },
          { en: 'I can throw the ball farther than my little brother.', vi: 'Tôi có thể ném quả bóng xa hơn em trai tôi.' }
        ],
        note: 'BẪY THI CỬ CỰC KỲ HAY GẶP: "hardly" KHÔNG PHẢI là so sánh của hard! (hardly = hầu như không: "He hardly works" = anh ấy hầu như không làm việc!). Muốn so sánh hard ta phải dùng "harder"!'
      },
      {
        title: 'Nhấn mạnh mức độ trong So sánh hơn với "much" hoặc "far"',
        formula: 'S + V + much / far + comparative adverb + than...',
        explanation: 'Để nhấn mạnh mức độ chênh lệch rất lớn trong câu so sánh hơn, ta đặt "much" hoặc "far" ngay trước dạng so sánh hơn của trạng từ.',
        examples: [
          { en: 'Life moves much more slowly in the countryside than in big cities.', vi: 'Nhịp sống diễn ra chậm hơn rất nhiều ở nông thôn so với ở các đại đô thị.' },
          { en: 'Modern machines harvest rice far faster than traditional hand tools.', vi: 'Máy móc hiện đại thu hoạch lúa nhanh hơn rất nhiều so với công cụ cầm tay truyền thống.' }
        ]
      }
    ],
    pronunciation: {
      title: 'Phân biệt Âm /ə/ (schwa) và Âm /ɪ/ (ngắn)',
      description: 'Âm /ə/ (nguyên âm schwa) là âm thả lỏng môi và lưỡi tự nhiên, luôn rơi vào âm tiết KHÔNG mang trọng âm (activity, garden, hospitable, picturesque, collect, gather, worker). Âm /ɪ/ là âm ngắn, hơi căng khóe miệng sang hai bên một chút (pick, village, harvest, busy, cottage, milk, rhythm).',
      pairs: {
        sound1: '/ə/ (thả lỏng nhẹ)',
        words1: ['activity', 'hospitable', 'garden', 'picturesque', 'collect', 'gather', 'water', 'orchard'],
        sound2: '/ɪ/ (ngắn hơi hé)',
        words2: ['pick', 'village', 'harvest', 'busy', 'cottage', 'milk', 'bridge', 'paddy']
      },
      examples: [
        'There is a lot of water (/ə/) in the bottle (/ə/).',
        'People in my village (/ɪ/) usually gather (/ə/) at weekends.',
        'During the harvest (/ɪ/), the villagers (/ɪ/) work in the orchard (/ə/).'
      ]
    },
    communication: {
      situation: 'Khen ngợi và đáp lại lời khen (Giving & Responding to compliments)',
      expressions: [
        { en: 'What a + adj + noun + you have!', vi: 'Bạn có chiếc/món ... tuyệt vời làm sao! (Mẫu câu cảm thán khen ngợi)' },
        { en: 'You really have a nice / lovely + noun!', vi: 'Bạn thực sự có một chiếc ... rất đẹp đấy!' },
        { en: 'Thank you. My [dad/mom] made/bought it for me.', vi: 'Cảm ơn bạn nhé. Bố/mẹ đã làm/mua nó cho mình đấy.' },
        { en: "Thank you. I'm glad you like it.", vi: 'Cảm ơn bạn. Mình rất vui vì bạn thích nó!' }
      ],
      sampleDialogue: [
        { speaker: 'Tom', text: 'What a beautiful and colourful kite you have, Mai!', vi: 'Cậu có chiếc diều đẹp và nhiều màu sắc quá, Mai ơi!' },
        { speaker: 'Mai', text: 'Thank you, Tom. My dad made it for me last weekend.', vi: 'Cảm ơn Tom nhé. Bố tớ tự tay làm cho tớ vào cuối tuần trước đấy.' },
        { speaker: 'Tom', text: 'It flies so high and smoothly!', vi: 'Nó bay cao và mượt mà thật đấy!' },
        { speaker: 'Mai', text: "I'm glad you like it. Do you want to try flying it?", vi: 'Tớ rất vui vì cậu thích nó. Cậu có muốn thử thả nó không?' }
      ]
    },
    quizQuestions: [
      {
        id: 'q2-1',
        unitId: 2,
        question: 'A horse can run ________ than a buffalo.',
        options: ['A. fast', 'B. faster', 'C. more fast', 'D. fastly'],
        correctAnswerIndex: 1,
        explanationVi: '"fast" vừa là tính từ vừa là trạng từ ngắn, dạng so sánh hơn là "faster". Trong tiếng Anh không tồn tại từ "fastly".',
        type: 'grammar'
      },
      {
        id: 'q2-2',
        unitId: 2,
        question: 'Life in the city seems to move ________ than that in the countryside.',
        options: ['A. more fast', 'B. faster', 'C. more fastly', 'D. fastlier'],
        correctAnswerIndex: 1,
        explanationVi: 'So sánh hơn của trạng từ ngắn "fast" là "faster".',
        type: 'grammar'
      },
      {
        id: 'q2-3',
        unitId: 2,
        question: 'Mai dances ________ than Hoa does.',
        options: ['A. more beautifully', 'B. beautifuler', 'C. beautifully', 'D. more beautiful'],
        correctAnswerIndex: 0,
        explanationVi: 'Trạng từ đuôi -ly "beautifully" là trạng từ dài, so sánh hơn bắt buộc dùng "more beautifully".',
        type: 'grammar'
      },
      {
        id: 'q2-4',
        unitId: 2,
        question: 'The local people are very kind and ________ to visitors.',
        options: ['A. vast', 'B. well-trained', 'C. hospitable', 'D. picturesque'],
        correctAnswerIndex: 2,
        explanationVi: '"hospitable" nghĩa là hiếu khách, niềm nở tiếp đón du khách (trang 20 SGK).',
        type: 'vocabulary'
      },
      {
        id: 'q2-5',
        unitId: 2,
        question: 'After his accident last month, he is driving ________ now.',
        options: ['A. careful', 'B. more carefully', 'C. carefuller', 'D. more careful'],
        correctAnswerIndex: 1,
        explanationVi: 'Bổ nghĩa cho động từ "driving" cần trạng từ. Dạng so sánh hơn của carefully là "more carefully".',
        type: 'grammar'
      },
      {
        id: 'q2-6',
        unitId: 2,
        question: 'Nowadays, farmers use a ________ to harvest and thresh rice much faster.',
        options: ['A. paddy field', 'B. combine harvester', 'C. canal', 'D. lighthouse'],
        correctAnswerIndex: 1,
        explanationVi: '"combine harvester" (máy gặt đập liên hợp) dùng để gặt và tuốt lúa nhanh chóng trên đồng ruộng (trang 18 SGK).',
        type: 'vocabulary'
      },
      {
        id: 'q2-7',
        unitId: 2,
        question: 'Which word has the underlined part pronounced as /ə/?',
        options: ['A. activity', 'B. village', 'C. harvest', 'D. cottage'],
        correctAnswerIndex: 0,
        explanationVi: 'Trong từ "activity", chữ a đầu phát âm là /ə/ (/ækˈtɪvəti/), trong khi village /ˈvɪlɪdʒ/, harvest /ˈhɑːvɪst/, cottage /ˈkɒtɪdʒ/ đều có âm /ɪ/.',
        type: 'pronunciation'
      },
      {
        id: 'q2-8',
        unitId: 2,
        question: 'The village children helped their parents ________ cattle along the river.',
        options: ['A. herd', 'B. unload', 'C. cultivate', 'D. plough'],
        correctAnswerIndex: 0,
        explanationVi: 'Cụm động từ "herd cattle" mang nghĩa chăn giữ trâu bò, gia súc (trang 18 & 20 SGK).',
        type: 'vocabulary'
      },
      {
        id: 'q2-9',
        unitId: 2,
        question: 'Nam plays football ________ than his classmates.',
        options: ['A. gooder', 'B. more well', 'C. better', 'D. best'],
        correctAnswerIndex: 2,
        explanationVi: '"well" là trạng từ bất quy tắc, dạng so sánh hơn là "better".',
        type: 'grammar'
      },
      {
        id: 'q2-10',
        unitId: 2,
        question: 'Tom: "What a nice and colourful kite you have, Mai!" - Mai: "________"',
        options: ["A. Thank you. My dad made it for me.", 'B. You are welcome.', 'C. Yes, I am very good.', 'D. No, I am not.'],
        correctAnswerIndex: 0,
        explanationVi: 'Khi nhận được lời khen "What a nice...!", câu đáp lại lịch sự và tự nhiên là cảm ơn và chia sẻ xuất xứ món đồ: "Thank you. My dad made it for me." (trang 22 SGK).',
        type: 'communication'
      },
      {
        id: 'q2-11',
        unitId: 2,
        question: 'Duong Lam is famous for its ancient houses and local ________ like keo doi and che lam.',
        options: ['A. lighthouses', 'B. specialities', 'C. pastures', 'D. combines'],
        correctAnswerIndex: 1,
        explanationVi: '"specialities" nghĩa là các món đặc sản truyền thống địa phương (trang 24 SGK).',
        type: 'vocabulary'
      },
      {
        id: 'q2-12',
        unitId: 2,
        question: 'He worked ________ to finish harvesting before the thunderstorm hit.',
        options: ['A. hardly', 'B. harder', 'C. more hard', 'D. more hardly'],
        correctAnswerIndex: 1,
        explanationVi: 'So sánh hơn của "hard" là "harder". Lưu ý "hardly" mang nghĩa là "hầu như không", không dùng trong so sánh chăm chỉ hơn.',
        type: 'grammar'
      }
    ],
    sentencePuzzles: [
      {
        scrambled: ['runs', 'A', 'horse', 'faster', 'than', 'buffalo', 'a'],
        correct: 'A horse runs faster than a buffalo',
        translationVi: 'Ngựa chạy nhanh hơn trâu.',
        hint: 'So sánh hơn với faster than'
      },
      {
        scrambled: ['What', 'beautiful', 'kite', 'you', 'a', 'have,', 'Mai!'],
        correct: 'What a beautiful kite you have, Mai!',
        translationVi: 'Cậu có một chiếc diều đẹp biết bao, Mai ơi!',
        hint: 'Câu cảm thán khen ngợi với What a/an'
      },
      {
        scrambled: ['Farmers', 'use', 'a', 'combine', 'harvester', 'to', 'harvest', 'rice'],
        correct: 'Farmers use a combine harvester to harvest rice',
        translationVi: 'Những người nông dân dùng máy gặt đập liên hợp để thu hoạch lúa.',
        hint: 'Chủ ngữ Farmers + Động từ use'
      },
      {
        scrambled: ['Life', 'in', 'the', 'countryside', 'is', 'much', 'more', 'peaceful'],
        correct: 'Life in the countryside is much more peaceful',
        translationVi: 'Cuộc sống ở vùng quê thanh bình hơn rất nhiều.',
        hint: 'Nhấn mạnh với much more peaceful'
      }
    ]
  },
  {
    id: 3,
    title: 'Unit 3: Teenagers',
    englishTitle: 'Teenagers',
    theme: 'Our Communities',
    description: 'Chủ đề đời sống tuổi teen: các câu lạc bộ trường học, mạng xã hội (Facebook, Instagram, YouTube), áp lực thi cử và ngữ pháp Câu đơn - Câu ghép (Simple and Compound Sentences).',
    vocabulary: [
      {
        id: 'u3-1',
        unitId: 3,
        word: 'forum',
        phonetic: '/ˈfɔːrəm/',
        partOfSpeech: 'noun',
        meaningVi: 'diễn đàn trực tuyến để thảo luận',
        exampleEn: "Our class decided to use Facebook for our class forum.",
        exampleVi: 'Lớp chúng tôi quyết định dùng Facebook làm diễn đàn thảo luận của lớp.',
        category: 'vocabulary'
      },
      {
        id: 'u3-2',
        unitId: 3,
        word: 'pressure',
        phonetic: '/ˈpreʃə(r)/',
        partOfSpeech: 'noun',
        meaningVi: 'áp lực (từ thi cử, phụ huynh, bạn bè)',
        exampleEn: 'We have pressure from our exams, peers, and parents.',
        exampleVi: 'Chúng tôi chịu áp lực từ các kỳ thi, bạn bè đồng trang lứa và cha mẹ.',
        collocation: 'peer pressure / exam pressure',
        category: 'vocabulary'
      },
      {
        id: 'u3-3',
        unitId: 3,
        word: 'bully',
        phonetic: '/ˈbʊli/',
        partOfSpeech: 'noun / verb',
        meaningVi: 'kẻ bắt nạt / bắt nạt người khác',
        exampleEn: 'He is a big bully and scares his weaker classmates.',
        exampleVi: 'Cậu ta là một kẻ chuyên bắt nạt và hay doạ nạt những bạn cùng lớp yếu hơn.',
        category: 'vocabulary'
      },
      {
        id: 'u3-4',
        unitId: 3,
        word: 'browse',
        phonetic: '/braʊz/',
        partOfSpeech: 'verb',
        meaningVi: 'lướt xem, duyệt tìm (trên web, Instagram)',
        exampleEn: 'I love Instagram because it is very fun and easy to browse pictures.',
        exampleVi: 'Tôi thích Instagram vì nó rất vui và dễ dàng lướt xem hình ảnh.',
        collocation: 'browse a website / browse photos',
        category: 'vocabulary'
      },
      {
        id: 'u3-5',
        unitId: 3,
        word: 'upload',
        phonetic: '/ˌʌpˈləʊd/',
        partOfSpeech: 'verb',
        meaningVi: 'tải lên mạng, đăng tải video/ảnh',
        exampleEn: 'I upload videos to YouTube and watch other people’s content.',
        exampleVi: 'Tôi tải video lên YouTube và xem nội dung của người khác.',
        collocation: 'upload a video / a picture',
        category: 'vocabulary'
      },
      {
        id: 'u3-6',
        unitId: 3,
        word: 'user-friendly',
        phonetic: '/ˌjuːzə ˈfrendli/',
        partOfSpeech: 'adjective',
        meaningVi: 'thân thiện với người dùng, dễ sử dụng',
        exampleEn: 'Facebook is popular because it has a user-friendly interface.',
        exampleVi: 'Facebook phổ biến vì giao diện rất thân thiện với người dùng.',
        category: 'vocabulary'
      },
      {
        id: 'u3-7',
        unitId: 3,
        word: 'concentrate',
        phonetic: '/ˈkɒnsntreɪt/',
        partOfSpeech: 'verb',
        meaningVi: 'tập trung vào việc gì (+ on)',
        exampleEn: 'Playing chess helps teenagers concentrate better on their studies.',
        exampleVi: 'Chơi cờ vua giúp thanh thiếu niên tập trung tốt hơn vào việc học.',
        collocation: 'concentrate on something',
        category: 'vocabulary'
      },
      {
        id: 'u3-8',
        unitId: 3,
        word: 'log on',
        phonetic: '/lɒɡ ɒn/',
        partOfSpeech: 'phrasal verb',
        meaningVi: 'đăng nhập vào tài khoản',
        exampleEn: 'I log on to my Instagram account daily to chat with friends.',
        exampleVi: 'Tôi đăng nhập vào tài khoản Instagram hàng ngày để tán gẫu với bạn bè.',
        collocation: 'log on to an account',
        category: 'vocabulary'
      },
      {
        id: 'u3-9',
        unitId: 3,
        word: 'check notifications',
        phonetic: '/tʃek ˌnəʊtɪfɪˈkeɪʃnz/',
        partOfSpeech: 'verb phrase',
        meaningVi: 'kiểm tra chuông thông báo trên mạng xã hội',
        exampleEn: 'Tom checked the notifications and saw some new posts from classmates.',
        exampleVi: 'Tom kiểm tra thông báo và thấy một số bài đăng mới từ bạn cùng lớp.',
        category: 'vocabulary'
      },
      {
        id: 'u3-10',
        unitId: 3,
        word: 'connect with',
        phonetic: '/kəˈnekt wɪð/',
        partOfSpeech: 'verb phrase',
        meaningVi: 'kết nối, giữ liên lạc với ai đó',
        exampleEn: 'I use Facebook to connect with old friends and share my memories.',
        exampleVi: 'Tôi dùng Facebook để kết nối với các bạn cũ và chia sẻ kỷ niệm.',
        category: 'vocabulary'
      },
      {
        id: 'u3-11',
        unitId: 3,
        word: 'peer pressure',
        phonetic: '/pɪə ˈpreʃə(r)/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'áp lực từ bạn bè đồng trang lứa',
        exampleEn: 'Peer pressure can make teenagers feel stressed or anxious about fitting in.',
        exampleVi: 'Áp lực đồng trang lứa có thể khiến thiếu niên cảm thấy căng thẳng khi muốn hòa nhập.',
        category: 'vocabulary'
      },
      {
        id: 'u3-12',
        unitId: 3,
        word: 'expectations',
        phonetic: '/ˌekspekˈteɪʃnz/',
        partOfSpeech: 'noun',
        meaningVi: 'kỳ vọng của cha mẹ, thầy cô',
        exampleEn: 'We try hard to meet our parents’ expectations in every exam.',
        exampleVi: 'Chúng tôi cố gắng hết sức để đáp ứng kỳ vọng của bố mẹ trong mỗi kỳ thi.',
        collocation: 'meet expectations',
        category: 'vocabulary'
      },
      {
        id: 'u3-13',
        unitId: 3,
        word: 'arts and crafts club',
        phonetic: '/ɑːts ənd krɑːfts klʌb/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'câu lạc bộ thủ công mỹ thuật',
        exampleEn: 'Members of the arts and crafts club make creative greeting cards.',
        exampleVi: 'Các thành viên câu lạc bộ thủ công mỹ thuật tự tay làm những tấm thiệp chúc mừng sáng tạo.',
        category: 'vocabulary'
      },
      {
        id: 'u3-14',
        unitId: 3,
        word: 'chess club',
        phonetic: '/tʃes klʌb/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'câu lạc bộ cờ vua',
        exampleEn: 'Tom joined the chess club because it helps him stay focused.',
        exampleVi: 'Tom tham gia câu lạc bộ cờ vua vì nó giúp bạn ấy duy trì sự tập trung.',
        category: 'vocabulary'
      },
      {
        id: 'u3-15',
        unitId: 3,
        word: 'language club',
        phonetic: '/ˈlæŋɡwɪdʒ klʌb/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'câu lạc bộ ngoại ngữ / tiếng Anh',
        exampleEn: 'We share essays and short stories in our English language club.',
        exampleVi: 'Chúng tôi chia sẻ các bài luận và truyện ngắn trong câu lạc bộ tiếng Anh.',
        category: 'vocabulary'
      },
      {
        id: 'u3-16',
        unitId: 3,
        word: 'sports club',
        phonetic: '/spɔːts klʌb/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'câu lạc bộ thể dục thể thao',
        exampleEn: 'The coach of our sports club tells us to drink plenty of water.',
        exampleVi: 'Huấn luyện viên câu lạc bộ thể thao nhắc chúng tôi uống nhiều nước.',
        category: 'vocabulary'
      },
      {
        id: 'u3-17',
        unitId: 3,
        word: 'coach',
        phonetic: '/kəʊtʃ/',
        partOfSpeech: 'noun / verb',
        meaningVi: 'huấn luyện viên / hướng dẫn, dẫn dắt',
        exampleEn: 'Ms Hoa will coach the new painting club this school year.',
        exampleVi: 'Cô Hoa sẽ hướng dẫn câu lạc bộ vẽ tranh mới trong năm học này.',
        category: 'vocabulary'
      },
      {
        id: 'u3-18',
        unitId: 3,
        word: 'tournament',
        phonetic: '/ˈtʊənəmənt/',
        partOfSpeech: 'noun',
        meaningVi: 'giải đấu, vòng thi đấu thể thao',
        exampleEn: 'Our school football team took part in a city tournament.',
        exampleVi: 'Đội bóng đá trường chúng tôi đã tham gia một giải đấu cấp thành phố.',
        category: 'vocabulary'
      },
      {
        id: 'u3-19',
        unitId: 3,
        word: 'curious',
        phonetic: '/ˈkjʊəriəs/',
        partOfSpeech: 'adjective',
        meaningVi: 'tò mò, hiếu kỳ, ham học hỏi',
        exampleEn: 'She is a noisy and curious girl who loves asking questions.',
        exampleVi: 'Cô ấy là một cô gái hiếu động và tò mò, luôn thích đặt câu hỏi.',
        category: 'vocabulary'
      },
      {
        id: 'u3-20',
        unitId: 3,
        word: 'annoy',
        phonetic: '/əˈnɔɪ/',
        partOfSpeech: 'verb',
        meaningVi: 'làm phiền, quấy rầy, chọc tức',
        exampleEn: 'He is not acting very mature and is starting to annoy me.',
        exampleVi: 'Cậu ta cư xử không được chín chắn cho lắm và bắt đầu làm phiền tôi.',
        category: 'vocabulary'
      },
      {
        id: 'u3-21',
        unitId: 3,
        word: 'mature',
        phonetic: '/məˈtʃʊə(r)/',
        partOfSpeech: 'adjective',
        meaningVi: 'chín chắn, trưởng thành trong suy nghĩ',
        exampleEn: 'Teenagers become more mature when they learn how to manage stress.',
        exampleVi: 'Tuổi thiếu niên trở nên chín chắn hơn khi học được cách giải tỏa căng thẳng.',
        category: 'vocabulary'
      },
      {
        id: 'u3-22',
        unitId: 3,
        word: 'community service',
        phonetic: '/kəˌmjuːnəti ˈsɜːvɪs/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'hoạt động phục vụ, tình nguyện vì cộng đồng',
        exampleEn: 'Members of our club participate in small community service projects.',
        exampleVi: 'Các thành viên trong câu lạc bộ tham gia các dự án tình nguyện nhỏ vì cộng đồng.',
        category: 'vocabulary'
      },
      {
        id: 'u3-23',
        unitId: 3,
        word: 'stay calm',
        phonetic: '/steɪ kɑːm/',
        partOfSpeech: 'verb phrase',
        meaningVi: 'giữ bình tĩnh, không hoảng loạn',
        exampleEn: 'Before taking exams, you should take deep breaths and stay calm.',
        exampleVi: 'Trước khi làm bài thi, bạn nên hít thở sâu và giữ bình tĩnh.',
        category: 'expression'
      },
      {
        id: 'u3-24',
        unitId: 3,
        word: 'show off',
        phonetic: '/ʃəʊ ɒf/',
        partOfSpeech: 'phrasal verb',
        meaningVi: 'khoe khoang (đồ mới, tài năng)',
        exampleEn: 'My friend likes showing off her new clothes on social media.',
        exampleVi: 'Bạn tôi thích khoe khoang quần áo mới trên mạng xã hội.',
        category: 'vocabulary'
      },
      {
        id: 'u3-25',
        unitId: 3,
        word: 'tolerant',
        phonetic: '/ˈtɒlərənt/',
        partOfSpeech: 'adjective',
        meaningVi: 'bao dung, khoan dung, thấu hiểu',
        exampleEn: 'Teens need good friends and tolerant teachers at schools.',
        exampleVi: 'Thiếu niên rất cần những người bạn tốt và các thầy cô bao dung ở trường học.',
        category: 'vocabulary'
      },
      {
        id: 'u3-26',
        unitId: 3,
        word: 'origami club',
        phonetic: '/ˌɒrɪˈɡɑːmi klʌb/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'câu lạc bộ nghệ thuật gấp giấy Nhật Bản',
        exampleEn: 'Joining the origami club teaches me patience and reduces stress.',
        exampleVi: 'Tham gia câu lạc bộ origami rèn cho tôi tính kiên nhẫn và giúp giảm bớt căng thẳng.',
        collocation: 'origami folding',
        category: 'vocabulary'
      },
      {
        id: 'u3-27',
        unitId: 3,
        word: 'coding club',
        phonetic: '/ˈkəʊdɪŋ klʌb/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'câu lạc bộ lập trình và khoa học máy tính',
        exampleEn: 'In our coding club, we learn how to create simple video games and robots.',
        exampleVi: 'Trong câu lạc bộ lập trình, chúng tôi học cách tạo các trò chơi điện tử đơn giản và robot.',
        category: 'vocabulary'
      },
      {
        id: 'u3-28',
        unitId: 3,
        word: 'book club',
        phonetic: '/bʊk klʌb/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'câu lạc bộ đọc sách và chia sẻ cảm nghĩ',
        exampleEn: 'The book club meets every Wednesday to review novels and improve writing skills.',
        exampleVi: 'Câu lạc bộ đọc sách gặp nhau vào mỗi thứ Tư để cùng review tiểu thuyết và nâng cao kỹ năng viết.',
        category: 'vocabulary'
      },
      {
        id: 'u3-29',
        unitId: 3,
        word: 'school counselor',
        phonetic: '/skuːl ˈkaʊnsələ(r)/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'chuyên viên tư vấn tâm lý học đường',
        exampleEn: 'If you feel overwhelmed by exams, you can talk to our school counselor.',
        exampleVi: 'Nếu bạn cảm thấy quá tải vì thi cử, bạn có thể tâm sự với chuyên viên tư vấn tâm lý của trường.',
        category: 'vocabulary'
      },
      {
        id: 'u3-30',
        unitId: 3,
        word: 'study timetable',
        phonetic: '/ˈstʌdi ˈtaɪmteɪbl/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'thời gian biểu học tập khoa học',
        exampleEn: 'Making a study timetable helps me manage my time and finish homework on time.',
        exampleVi: 'Lập một thời gian biểu học tập giúp tôi quản lý thời gian và hoàn thành bài tập đúng hạn.',
        collocation: 'make a study timetable',
        category: 'vocabulary'
      },
      {
        id: 'u3-31',
        unitId: 3,
        word: 'cyberbullying',
        phonetic: '/ˈsaɪbəbʊliɪŋ/',
        partOfSpeech: 'noun',
        meaningVi: 'hành vi bắt nạt trên không gian mạng',
        exampleEn: 'Schools organize workshops to help students protect themselves against cyberbullying.',
        exampleVi: 'Các trường tổ chức các buổi hội thảo để giúp học sinh tự bảo vệ mình trước hành vi bắt nạt qua mạng.',
        category: 'vocabulary'
      },
      {
        id: 'u3-32',
        unitId: 3,
        word: 'stress out',
        phonetic: '/stres aʊt/',
        partOfSpeech: 'phrasal verb',
        meaningVi: 'bị căng thẳng, áp lực quá mức',
        exampleEn: 'Too much homework can stress teenagers out before final exams.',
        exampleVi: 'Quá nhiều bài tập có thể khiến các bạn tuổi teen bị căng thẳng quá mức trước kỳ thi cuối kỳ.',
        category: 'expression'
      },
      {
        id: 'u3-33',
        unitId: 3,
        word: 'balance',
        phonetic: '/ˈbæləns/',
        partOfSpeech: 'noun / verb',
        meaningVi: 'sự cân bằng / giữ cân bằng (giữa học và chơi)',
        exampleEn: 'Students should maintain a good balance between study and relaxation.',
        exampleVi: 'Học sinh nên duy trì sự cân bằng hợp lý giữa việc học tập và nghỉ ngơi giải trí.',
        collocation: 'keep/maintain a balance',
        category: 'vocabulary'
      },
      {
        id: 'u3-34',
        unitId: 3,
        word: 'overcome',
        phonetic: '/ˌəʊvəˈkʌm/',
        partOfSpeech: 'verb',
        meaningVi: 'vượt qua (áp lực, thử thách, khó khăn)',
        exampleEn: 'Sharing your feelings with trusted friends helps you overcome stress.',
        exampleVi: 'Chia sẻ cảm xúc với bạn bè đáng tin cậy sẽ giúp bạn vượt qua căng thẳng.',
        collocation: 'overcome stress / difficulty',
        category: 'vocabulary'
      },
      {
        id: 'u3-35',
        unitId: 3,
        word: 'express feelings',
        phonetic: '/ɪkˈspres ˈfiːlɪŋz/',
        partOfSpeech: 'verb phrase',
        meaningVi: 'bày tỏ cảm xúc, giãi bày tâm sự',
        exampleEn: 'Do not bottle up your sadness; learn to express your feelings openly.',
        exampleVi: 'Đừng kìm nén nỗi buồn trong lòng; hãy học cách bày tỏ cảm xúc của mình một cách cởi mở.',
        category: 'expression'
      }
    ],
    grammar: [
      {
        title: 'Câu Đơn (Simple Sentences) - Cấu trúc 1 Mệnh đề',
        formula: 'S + V (+ O / Adverbial)',
        explanation: 'Câu đơn chỉ chứa MỘT mệnh đề độc lập (one independent clause), diễn đạt một ý trọn vẹn.',
        examples: [
          { en: 'Teenagers are often very active and talkative.', vi: 'Thanh thiếu niên thường rất năng động và hoạt bát.' },
          { en: 'Minh has some problems with his schoolwork.', vi: 'Minh đang gặp một số khúc mắc với bài vở ở trường.' },
          { en: 'Sports activities at school help me relax.', vi: 'Các hoạt động thể thao ở trường giúp tôi thư giãn.' }
        ],
        note: 'Dù chủ ngữ hoặc động từ có là dạng ghép (ví dụ: My friends and I joined...) thì câu vẫn là câu đơn nếu chỉ có 1 mệnh đề độc lập!'
      },
      {
        title: 'Câu Ghép với Liên từ kết hợp (Coordinating Conjunctions: FANBOYS)',
        formula: 'Mệnh đề 1, [for / and / but / or / so] + Mệnh đề 2',
        explanation: 'Nối hai mệnh đề độc lập bằng dấu phẩy (,) và liên từ kết hợp:\n• for: vì (= because)\n• and: và (thêm thông tin)\n• but: nhưng (tương phản)\n• or: hoặc (lựa chọn)\n• so: vì vậy (kết quả)',
        examples: [
          { en: 'We don’t cheat on exams, for it is a wrong thing to do.', vi: 'Chúng tôi không gian lận thi cử, vì đó là việc làm sai trái.' },
          { en: 'She plays chess very well, and she won the first prize last year.', vi: 'Cô ấy chơi cờ rất giỏi, và cô đã đoạt giải nhất năm ngoái.' },
          { en: 'Parents should give teens some freedom, but they should also set limits.', vi: 'Cha mẹ nên cho con cái sự tự do, nhưng cũng cần đặt ra giới hạn.' },
          { en: 'Students can work in groups, or they can work in pairs.', vi: 'Học sinh có thể làm việc theo nhóm, hoặc các bạn có thể làm theo cặp.' },
          { en: 'She is very sensitive, so don’t comment on her new hairstyle.', vi: 'Cô ấy rất nhạy cảm, vì vậy đừng bình luận về kiểu tóc mới của cô ấy.' }
        ]
      },
      {
        title: 'Câu Ghép với Trạng từ liên kết (Conjunctive Adverbs: however, therefore, otherwise)',
        formula: 'Mệnh đề 1; [however / therefore / otherwise], + Mệnh đề 2',
        explanation: 'Khi nối hai mệnh đề độc lập bằng trạng từ liên kết, BẮT BUỘC đặt dấu chấm phẩy (;) phía trước và dấu phẩy (,) ngay sau trạng từ:\n• however: tuy nhiên\n• therefore: do đó, vì vậy\n• otherwise: nếu không thì',
        examples: [
          { en: 'Lan wants to join the music club; however, she can’t sing or play instruments.', vi: 'Lan muốn vào CLB âm nhạc; tuy nhiên, bạn ấy không biết hát hay chơi nhạc cụ.' },
          { en: 'She wanted to prepare for the exam; therefore, she turned off her phone.', vi: 'Cô ấy muốn ôn thi; do đó, cô đã tắt điện thoại di động.' },
          { en: 'Phong has to study harder; otherwise, he may fail the exam.', vi: 'Phong phải học chăm hơn; nếu không thì, cậu ấy có thể thi trượt.' }
        ],
        note: 'QUY TẮC DẤU CÂU CỰC KỲ QUAN TRỌNG: S1 + V1; however/therefore/otherwise, S2 + V2.'
      }
    ],
    pronunciation: {
      title: 'Phân biệt Âm đôi /ʊə/ và /ɔɪ/',
      description: 'Âm /ʊə/ là nguyên âm đôi chuyển từ /ʊ/ sang /ə/ (tourist, ensure, sure, tournament, curious, mature). Âm /ɔɪ/ là nguyên âm đôi chuyển từ /ɔː/ sang /ɪ/ (boy, toy, avoid, choice, noisy, voice, annoy, enjoyable).',
      pairs: {
        sound1: '/ʊə/ (u-ơ)',
        words1: ['tourist', 'sure', 'ensure', 'tournament', 'curious', 'mature'],
        sound2: '/ɔɪ/ (o-i)',
        words2: ['boy', 'toy', 'avoid', 'choice', 'noisy', 'annoy', 'voice']
      },
      examples: [
        'She is a noisy (/ɔɪ/) and curious (/ʊə/) girl.',
        'They joined a full-day city tour (/ʊə/).',
        'I found it enjoyable (/ɔɪ/) to watch the tournament (/ʊə/).'
      ]
    },
    communication: {
      situation: 'Đưa ra yêu cầu lịch sự (Making polite requests)',
      expressions: [
        { en: 'Can you tell me more about [club/event], please?', vi: 'Bạn có thể làm ơn nói cho tôi biết thêm về [CLB/sự kiện] được không?' },
        { en: 'Could you show me the way to [place], please?', vi: 'Thầy/Bạn có thể làm ơn chỉ đường cho tôi tới [địa điểm] được không ạ?' },
        { en: 'Certainly. It meets on Mondays and Thursdays.', vi: 'Chắc chắn rồi. CLB sinh hoạt vào thứ Hai và thứ Năm.' },
        { en: 'Certainly. Go past this block, then turn left.', vi: 'Chắc chắn rồi. Bạn đi qua dãy nhà này rồi rẽ trái nhé.' }
      ],
      sampleDialogue: [
        { speaker: 'Student', text: 'Can you tell me more about the music club, please?', vi: 'Thầy có thể nói thêm cho em về câu lạc bộ âm nhạc được không ạ?' },
        { speaker: 'Leader', text: 'Certainly. It meets on Mondays and Thursdays in the music room.', vi: 'Chắc chắn rồi. CLB gặp nhau vào thứ Hai và thứ Năm tại phòng âm nhạc nhé.' }
      ]
    },
    quizQuestions: [
      {
        id: 'q3-1',
        unitId: 3,
        question: 'Parents should give teens some freedom, ________ they should also set limits.',
        options: ['A. for', 'B. so', 'C. but', 'D. or'],
        correctAnswerIndex: 2,
        explanationVi: 'Hai vế mang ý nghĩa tương phản (cho tự do nhưng cũng phải đặt giới hạn), nên dùng liên từ "but" (trang 31 SGK).',
        type: 'grammar'
      },
      {
        id: 'q3-2',
        unitId: 3,
        question: 'She wanted to prepare for the exam; ________, she turned off her mobile phone.',
        options: ['A. however', 'B. otherwise', 'C. therefore', 'D. but'],
        correctAnswerIndex: 2,
        explanationVi: 'Hành động tắt điện thoại là kết quả logic của việc muốn tập trung ôn thi, có cấu trúc "; therefore," (trang 31 SGK).',
        type: 'grammar'
      },
      {
        id: 'q3-3',
        unitId: 3,
        question: 'Our class has a(n) ________, and we often post questions there to discuss.',
        options: ['A. office', 'B. forum', 'C. club', 'D. schoolwork'],
        correctAnswerIndex: 1,
        explanationVi: '"forum" (diễn đàn lớp học) là nơi học sinh đăng bài và đặt câu hỏi thảo luận (trang 30 SGK).',
        type: 'vocabulary'
      },
      {
        id: 'q3-4',
        unitId: 3,
        question: 'Which word contains the diphthong /ʊə/?',
        options: ['A. boy', 'B. choice', 'C. tournament', 'D. avoid'],
        correctAnswerIndex: 2,
        explanationVi: '"tournament" phát âm chứa âm đôi /ʊə/ (/ˈtʊənəmənt/), các từ còn lại chứa âm /ɔɪ/ (trang 30 SGK).',
        type: 'pronunciation'
      },
      {
        id: 'q3-5',
        unitId: 3,
        question: 'We don’t cheat on exams, ________ it is a wrong thing to do.',
        options: ['A. for', 'B. or', 'C. and', 'D. so'],
        correctAnswerIndex: 0,
        explanationVi: 'Liên từ kết hợp "for" mang ý nghĩa là "bởi vì" (= because), giải thích lý do không gian lận (trang 31 SGK).',
        type: 'grammar'
      },
      {
        id: 'q3-6',
        unitId: 3,
        question: 'Lan wants to join the school music club; ________, she can’t sing or play any instruments.',
        options: ['A. therefore', 'B. however', 'C. otherwise', 'D. so'],
        correctAnswerIndex: 1,
        explanationVi: 'Ý đối lập (muốn vào CLB âm nhạc nhưng lại không biết hát hay chơi đàn), đứng giữa "; ... ," nên chọn "however" (trang 31 SGK).',
        type: 'grammar'
      },
      {
        id: 'q3-7',
        unitId: 3,
        question: 'He is a big ________ and scares his weaker classmates at school.',
        options: ['A. bully', 'B. coach', 'C. leader', 'D. peer'],
        correctAnswerIndex: 0,
        explanationVi: '"bully" nghĩa là kẻ bắt nạt, chuyên dọa dẫm các bạn yếu thế hơn (trang 30 SGK).',
        type: 'vocabulary'
      },
      {
        id: 'q3-8',
        unitId: 3,
        question: 'I love Instagram because it is very fun and easy to ________ pictures.',
        options: ['A. log on', 'B. browse', 'C. check', 'D. concentrate'],
        correctAnswerIndex: 1,
        explanationVi: 'Cụm từ "browse pictures / browse a website" nghĩa là lướt xem, duyệt hình ảnh (trang 30 & 33 SGK).',
        type: 'vocabulary'
      },
      {
        id: 'q3-9',
        unitId: 3,
        question: 'Which word contains the diphthong /ɔɪ/?',
        options: ['A. sure', 'B. tourist', 'C. noisy', 'D. ensure'],
        correctAnswerIndex: 2,
        explanationVi: '"noisy" chứa âm đôi /ɔɪ/ (/ˈnɔɪzi/), các từ còn lại đều chứa âm /ʊə/ (trang 30 SGK).',
        type: 'pronunciation'
      },
      {
        id: 'q3-10',
        unitId: 3,
        question: 'Student: "Could you show me the way to the college, please?" - Teacher: "________"',
        options: ['A. Certainly. Go past this block, then turn left.', 'B. Yes, I do.', 'C. No, I am busy.', 'D. That is wrong.'],
        correctAnswerIndex: 0,
        explanationVi: 'Đáp lại lời yêu cầu chỉ đường lịch sự: "Certainly. Go past this block, then turn left." (trang 32 SGK).',
        type: 'communication'
      },
      {
        id: 'q3-11',
        unitId: 3,
        question: 'Phong has to study harder; ________, he may fail the midterm exam.',
        options: ['A. therefore', 'B. otherwise', 'C. however', 'D. and'],
        correctAnswerIndex: 1,
        explanationVi: '"otherwise" mang nghĩa "nếu không thì" (phải học chăm hơn, nếu không sẽ trượt kỳ thi) (trang 32 SGK).',
        type: 'grammar'
      },
      {
        id: 'q3-12',
        unitId: 3,
        question: 'She was chatting with her friends, so she couldn’t ________ on the lesson.',
        options: ['A. concentrate', 'B. browse', 'C. upload', 'D. connect'],
        correctAnswerIndex: 0,
        explanationVi: 'Cụm từ: concentrate on the lesson (tập trung vào bài học) (trang 30 SGK).',
        type: 'vocabulary'
      }
    ],
    sentencePuzzles: [
      {
        scrambled: ['Lan', 'wants', 'to', 'join', 'the', 'club;', 'however,', 'she', 'cannot', 'sing.'],
        correct: 'Lan wants to join the club; however, she cannot sing.',
        translationVi: 'Lan muốn tham gia câu lạc bộ; tuy nhiên, bạn ấy không biết hát.',
        hint: 'Câu ghép với ; however,'
      },
      {
        scrambled: ['We', 'don’t', 'cheat', 'on', 'exams,', 'for', 'it', 'is', 'wrong.'],
        correct: 'We don’t cheat on exams, for it is wrong.',
        translationVi: 'Chúng tôi không gian lận thi cử, vì điều đó là sai trái.',
        hint: 'Liên từ kết hợp for'
      },
      {
        scrambled: ['She', 'wanted', 'to', 'study;', 'therefore,', 'she', 'turned', 'off', 'her', 'phone.'],
        correct: 'She wanted to study; therefore, she turned off her phone.',
        translationVi: 'Cô ấy muốn học bài; do đó, cô đã tắt điện thoại.',
        hint: 'Trạng từ liên kết ; therefore,'
      },
      {
        scrambled: ['Playing', 'chess', 'helps', 'students', 'concentrate', 'better', 'on', 'schoolwork.'],
        correct: 'Playing chess helps students concentrate better on schoolwork.',
        translationVi: 'Chơi cờ vua giúp học sinh tập trung tốt hơn vào việc học.',
        hint: 'Cụm concentrate on'
      }
    ]
  },
  {
    id: 4,
    title: 'Unit 4: Ethnic Groups of Viet Nam',
    englishTitle: 'Ethnic Groups of Viet Nam',
    theme: 'Our Heritage',
    description: 'Tìm hiểu nét đẹp 54 dân tộc anh em Việt Nam, nhà rông, nhà sàn, cồng chiêng và ngữ pháp Câu hỏi Yes/No, Wh-questions, danh từ đếm được/không đếm được.',
    vocabulary: [
      {
        id: 'u4-1',
        unitId: 4,
        word: 'stilt house',
        phonetic: '/stɪlt haʊs/',
        partOfSpeech: 'noun',
        meaningVi: 'nhà sàn (nhà xây trên các cọc gỗ cao)',
        exampleEn: 'Many ethnic minority groups like the Tay and Thai live in stilt houses.',
        exampleVi: 'Nhiều đồng bào dân tộc thiểu số như người Tày và Thái sống trong nhà sàn.',
        category: 'vocabulary'
      },
      {
        id: 'u4-2',
        unitId: 4,
        word: 'terraced fields',
        phonetic: '/ˈterəst fiːldz/',
        partOfSpeech: 'noun',
        meaningVi: 'ruộng bậc thang',
        exampleEn: 'In Mu Cang Chai, you can see the most breathtaking terraced fields.',
        exampleVi: 'Ở Mù Căng Chải, bạn có thể chiêm ngưỡng những thửa ruộng bậc thang đẹp ngỡ ngàng.',
        category: 'vocabulary'
      },
      {
        id: 'u4-3',
        unitId: 4,
        word: 'communal house',
        phonetic: '/kəˈmjuːnl haʊs/',
        partOfSpeech: 'noun',
        meaningVi: 'nhà rông / đình làng (nơi sinh hoạt cộng đồng)',
        exampleEn: 'The Rong house is a communal house at the heart of an Ede village.',
        exampleVi: 'Nhà Rông là ngôi nhà sinh hoạt cộng đồng nằm ở trung tâm buôn làng người Ê-đê.',
        category: 'vocabulary'
      },
      {
        id: 'u4-4',
        unitId: 4,
        word: 'gong',
        phonetic: '/ɡɒŋ/',
        partOfSpeech: 'noun',
        meaningVi: 'cồng, chiêng (nhạc cụ truyền thống)',
        exampleEn: 'The gong is a traditional musical instrument of Central Highlands minorities.',
        exampleVi: 'Cồng chiêng là nhạc cụ truyền thống của các dân tộc thiểu số Tây Nguyên.',
        category: 'vocabulary'
      },
      {
        id: 'u4-5',
        unitId: 4,
        word: 'weave',
        phonetic: '/wiːv/',
        partOfSpeech: 'verb',
        meaningVi: 'dệt (vải thổ cẩm, chiếu)',
        exampleEn: 'Most mountain girls know how to weave clothing from a young age.',
        exampleVi: 'Hầu hết các cô gái miền núi đều biết dệt quần áo từ khi còn nhỏ.',
        collocation: 'weave clothing / weave fabric',
        category: 'vocabulary'
      },
      {
        id: 'u4-6',
        unitId: 4,
        word: 'livestock',
        phonetic: '/ˈlaɪvstɒk/',
        partOfSpeech: 'noun',
        meaningVi: 'gia súc (trâu, bò, dê nuôi trong trang trại)',
        exampleEn: 'The Cham in Ninh Thuan raise livestock such as sheep and cows.',
        exampleVi: 'Người Chăm ở Ninh Thuận chăn nuôi gia súc như cừu và bò.',
        collocation: 'raise livestock',
        category: 'vocabulary'
      },
      {
        id: 'u4-7',
        unitId: 4,
        word: 'bamboo',
        phonetic: '/ˌbæmˈbuː/',
        partOfSpeech: 'noun',
        meaningVi: 'cây tre, nứa (vật liệu dựng nhà sàn)',
        exampleEn: 'Stilt houses are often built using bamboo, wood, and leaves.',
        exampleVi: 'Nhà sàn thường được dựng từ tre, gỗ và lá cây.',
        category: 'vocabulary'
      },
      {
        id: 'u4-8',
        unitId: 4,
        word: 'five-colour sticky rice',
        phonetic: '/faɪv ˈkʌlə ˈstɪki raɪs/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'xôi ngũ sắc (món ăn truyền thống của người Tày, Thái)',
        exampleEn: 'Lai treated Tom to delicious five-colour sticky rice in Ha Giang.',
        exampleVi: 'Lai đã chiêu đãi Tom món xôi ngũ sắc thơm ngon ở Hà Giang.',
        category: 'vocabulary'
      },
      {
        id: 'u4-9',
        unitId: 4,
        word: 'folk dance',
        phonetic: '/fəʊk dɑːns/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'điệu múa dân gian (như múa sạp, múa xòe)',
        exampleEn: 'Mua sap is a popular folk dance of the Thai ethnic people.',
        exampleVi: 'Múa sạp là điệu múa dân gian phổ biến của đồng bào dân tộc Thái.',
        category: 'vocabulary'
      },
      {
        id: 'u4-10',
        unitId: 4,
        word: 'musical instrument',
        phonetic: '/ˈmjuːzɪkl ˈɪnstrəmənt/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'nhạc cụ truyền thống (đàn tính, cồng chiêng, khèn, sáo)',
        exampleEn: 'The dan tinh is a popular Tay musical instrument.',
        exampleVi: 'Đàn tính là một loại nhạc cụ truyền thống nổi tiếng của người Tày.',
        category: 'vocabulary'
      },
      {
        id: 'u4-11',
        unitId: 4,
        word: 'overlook',
        phonetic: '/ˌəʊvəˈlʊk/',
        partOfSpeech: 'verb',
        meaningVi: 'nhìn ra, hướng mặt ra (cánh đồng, núi non)',
        exampleEn: 'Their beautiful stilt house overlooks a large terraced field.',
        exampleVi: 'Ngôi nhà sàn xinh đẹp của họ nhìn ra một thửa ruộng bậc thang rộng lớn.',
        category: 'vocabulary'
      },
      {
        id: 'u4-12',
        unitId: 4,
        word: 'Rong house',
        phonetic: '/rɒŋ haʊs/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'nhà Rông (nhà cộng đồng mái nhọn cao vút ở Tây Nguyên)',
        exampleEn: 'The Rong house serves as the centre and pride of an Ede village.',
        exampleVi: 'Nhà Rông là trung tâm sinh hoạt và niềm tự hào của buôn làng người Ê-đê.',
        category: 'vocabulary'
      },
      {
        id: 'u4-13',
        unitId: 4,
        word: 'bamboo flute',
        phonetic: '/ˌbæmˈbuː fluːt/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'sáo trúc (nhạc cụ thổi hơi dân tộc)',
        exampleEn: 'A young boy was playing a sweet melody on his bamboo flute.',
        exampleVi: 'Cậu bé đang thổi một giai điệu du dương bằng chiếc sáo trúc của mình.',
        category: 'vocabulary'
      },
      {
        id: 'u4-14',
        unitId: 4,
        word: 'wooden statue',
        phonetic: '/ˈwʊdn ˈstætʃuː/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'tượng điêu khắc bằng gỗ (tượng nhà mồ Tây Nguyên)',
        exampleEn: 'The Jrai decorate houses for the dead with unique wooden statues.',
        exampleVi: 'Người Gia-rai trang trí nhà mồ bằng những bức tượng gỗ độc đáo.',
        category: 'vocabulary'
      },
      {
        id: 'u4-15',
        unitId: 4,
        word: 'minority group',
        phonetic: '/maɪˈnɒrəti ɡruːp/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'dân tộc thiểu số',
        exampleEn: 'There are 53 ethnic minority groups living in Viet Nam beside the Kinh.',
        exampleVi: 'Có 53 dân tộc thiểu số cùng sinh sống ở Việt Nam bên cạnh người Kinh.',
        collocation: 'ethnic minority group',
        category: 'vocabulary'
      },
      {
        id: 'u4-16',
        unitId: 4,
        word: 'unique features',
        phonetic: '/juˈniːk ˈfiːtʃəz/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'những nét đặc trưng, độc đáo riêng biệt',
        exampleEn: 'It is fascinating to learn about the unique features of Tay customs.',
        exampleVi: 'Thật thú vị khi tìm hiểu về những nét đặc trưng độc đáo trong phong tục người Tày.',
        category: 'vocabulary'
      },
      {
        id: 'u4-17',
        unitId: 4,
        word: 'open fire',
        phonetic: '/ˌəʊpən ˈfaɪə(r)/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'bếp lửa lộ thiên ở giữa gian nhà sàn',
        exampleEn: 'Family gatherings in a stilt house take place by the warm open fire.',
        exampleVi: 'Những buổi sum họp gia đình trong nhà sàn diễn ra bên bếp lửa ấm áp.',
        category: 'vocabulary'
      },
      {
        id: 'u4-18',
        unitId: 4,
        word: 'posts',
        phonetic: '/pəʊsts/',
        partOfSpeech: 'noun (plural)',
        meaningVi: 'các cột trụ gỗ to chống đỡ nhà sàn',
        exampleEn: 'A stilt house stands on strong wooden posts to protect from animals.',
        exampleVi: 'Nhà sàn đứng vững trên những cột gỗ chắc khỏe để tránh thú dữ.',
        category: 'vocabulary'
      },
      {
        id: 'u4-19',
        unitId: 4,
        word: 'staircase',
        phonetic: '/ˈsteəkeɪs/',
        partOfSpeech: 'noun',
        meaningVi: 'cầu thang lên nhà sàn (thường có số bậc lẻ 7 hoặc 9)',
        exampleEn: 'Guests climb a seven-step wooden staircase to enter the house.',
        exampleVi: 'Khách bước lên chiếc cầu thang gỗ 7 bậc để vào nhà.',
        category: 'vocabulary'
      },
      {
        id: 'u4-20',
        unitId: 4,
        word: 'waterwheels',
        phonetic: '/ˈwɔːtəwiːlz/',
        partOfSpeech: 'noun (plural)',
        meaningVi: 'guồng nước, cọn nước (dẫn nước tưới ruộng vùng cao)',
        exampleEn: 'Giant bamboo waterwheels bring river water up to high terraced fields.',
        exampleVi: 'Những chiếc guồng nước tre khổng lồ đưa nước sông lên ruộng bậc thang trên cao.',
        category: 'vocabulary'
      },
      {
        id: 'u4-21',
        unitId: 4,
        word: 'boarding school',
        phonetic: '/ˈbɔːdɪŋ skuːl/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'trường học nội trú dành cho học sinh dân tộc',
        exampleEn: 'Many minority students live and study at district boarding schools.',
        exampleVi: 'Nhiều học sinh dân tộc thiểu số ăn ở và học tập tại các trường nội trú của huyện.',
        category: 'vocabulary'
      },
      {
        id: 'u4-22',
        unitId: 4,
        word: 'plantation',
        phonetic: '/plænˈteɪʃn/',
        partOfSpeech: 'noun',
        meaningVi: 'đồn điền, trang trại trồng cây công nghiệp',
        exampleEn: 'His family owns a large coffee plantation in the Central Highlands.',
        exampleVi: 'Gia đình bạn ấy sở hữu một đồn điền cà phê rộng lớn ở Tây Nguyên.',
        category: 'vocabulary'
      },
      {
        id: 'u4-23',
        unitId: 4,
        word: 'costume',
        phonetic: '/ˈkɒstjuːm/',
        partOfSpeech: 'noun',
        meaningVi: 'trang phục truyền thống của dân tộc',
        exampleEn: 'Each ethnic group wears colourful traditional costumes on festival days.',
        exampleVi: 'Mỗi dân tộc đều mặc những bộ trang phục truyền thống rực rỡ vào ngày hội.',
        category: 'vocabulary'
      },
      {
        id: 'u4-24',
        unitId: 4,
        word: 'Ban Flower Festival',
        phonetic: '/bæn ˈflaʊə ˈfestɪvl/',
        partOfSpeech: 'proper noun',
        meaningVi: 'Lễ hội hoa Ban (lễ hội mùa xuân Điện Biên của người Thái)',
        exampleEn: 'Tourists flock to Dien Bien in spring to celebrate the Ban Flower Festival.',
        exampleVi: 'Du khách đổ về Điện Biên vào mùa xuân để tham dự Lễ hội hoa Ban.',
        category: 'vocabulary'
      },
      {
        id: 'u4-25',
        unitId: 4,
        word: 'family gatherings',
        phonetic: '/ˈfæməli ˈɡæðərɪŋz/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'các buổi sum họp gia đình, quây quần đầm ấm',
        exampleEn: 'The kitchen in a stilt house is a special place for family gatherings.',
        exampleVi: 'Gian bếp trong nhà sàn là nơi đặc biệt để cả gia đình quây quần sum họp.',
        category: 'vocabulary'
      },
      {
        id: 'u4-26',
        unitId: 4,
        word: 'close to nature',
        phonetic: '/kləʊs tu ˈneɪtʃə(r)/',
        partOfSpeech: 'idiom / phrase',
        meaningVi: 'sống gần gũi, hòa mình với thiên nhiên hoang dã',
        exampleEn: 'Minority people build their homes and live very close to nature.',
        exampleVi: 'Đồng bào dân tộc dựng nhà và sống rất gần gũi, hòa thuận với thiên nhiên.',
        category: 'expression'
      },
      {
        id: 'u4-27',
        unitId: 4,
        word: 'dominant role',
        phonetic: '/ˈdɒmɪnənt rəʊl/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'vai trò chủ đạo, vị trí đứng đầu (trong chế độ mẫu hệ)',
        exampleEn: 'In a Jrai family, women play a dominant role in decision making.',
        exampleVi: 'Trong gia đình người Gia-rai, phụ nữ đóng vai trò chủ đạo khi đưa ra quyết định.',
        category: 'vocabulary'
      },
      {
        id: 'u4-28',
        unitId: 4,
        word: 'industrial trees',
        phonetic: '/ɪnˈdʌstriəl triːz/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'cây công nghiệp (cà phê, chè, cao su, tiêu, ca cao)',
        exampleEn: 'Central Highlands farmers grow industrial trees like coffee and rubber.',
        exampleVi: 'Nông dân Tây Nguyên trồng các loại cây công nghiệp như cà phê và cao su.',
        category: 'vocabulary'
      },
      {
        id: 'u4-29',
        unitId: 4,
        word: 'catch fish',
        phonetic: '/kætʃ fɪʃ/',
        partOfSpeech: 'verb phrase',
        meaningVi: 'bắt cá, đánh bắt cá ở suối, sông hồ',
        exampleEn: 'Highland boys often catch fish in clear mountain streams after school.',
        exampleVi: 'Các cậu bé vùng cao thường đi bắt cá ở suối núi trong veo sau giờ học.',
        category: 'vocabulary'
      },
      {
        id: 'u4-30',
        unitId: 4,
        word: 'grow crops',
        phonetic: '/ɡrəʊ krɒps/',
        partOfSpeech: 'verb phrase',
        meaningVi: 'trồng trọt mùa màng (lúa nương, ngô, sắn)',
        exampleEn: 'Farmers work hard on terraced fields to grow crops like rice and corn.',
        exampleVi: 'Người nông dân chăm chỉ canh tác trên ruộng bậc thang để trồng trọt lúa ngô.',
        category: 'vocabulary'
      },
      {
        id: 'u4-31',
        unitId: 4,
        word: 'look after the house',
        phonetic: '/lʊk ˈɑːftə ðə haʊs/',
        partOfSpeech: 'verb phrase',
        meaningVi: 'trông nom nhà cửa, phụ giúp cha mẹ',
        exampleEn: 'Children help look after the house and feed chickens when parents work.',
        exampleVi: 'Trẻ em giúp trông nom nhà cửa và cho gà ăn khi cha mẹ đi làm nương rẫy.',
        category: 'expression'
      },
      {
        id: 'u4-32',
        unitId: 4,
        word: 'dan tinh',
        phonetic: '/dæn tɪŋ/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'đàn tính (đàn bầu làm từ vỏ quả bầu khô của người Tày, Nùng)',
        exampleEn: 'The sweet sound of the dan tinh echoes across the quiet mountain valleys.',
        exampleVi: 'Tiếng đàn tính ngọt ngào vang vọng khắp thung lũng núi non yên tĩnh.',
        category: 'vocabulary'
      },
      {
        id: 'u4-33',
        unitId: 4,
        word: 'Moon Worship Festival',
        phonetic: '/muːn ˈwɜːʃɪp ˈfestɪvl/',
        partOfSpeech: 'proper noun',
        meaningVi: 'Lễ hội Cúng Trăng (Lễ hội Ok Om Bok nổi tiếng của người Khmer)',
        exampleEn: 'The Khmer celebrate the Moon Worship Festival with exciting boat races.',
        exampleVi: 'Đồng bào Khmer tổ chức Lễ hội Cúng Trăng với những cuộc đua ghe ngo sôi nổi.',
        category: 'vocabulary'
      },
      {
        id: 'u4-34',
        unitId: 4,
        word: 'gardening',
        phonetic: '/ˈɡɑːdnɪŋ/',
        partOfSpeech: 'noun',
        meaningVi: 'công việc làm vườn (trồng trọt, tưới cây, làm cỏ)',
        exampleEn: 'Gardening is a daily activity for many village families.',
        exampleVi: 'Làm vườn là hoạt động hàng ngày của nhiều gia đình thôn bản.',
        category: 'vocabulary'
      },
      {
        id: 'u4-35',
        unitId: 4,
        word: 'ash',
        phonetic: '/æʃ/',
        partOfSpeech: 'noun (uncountable)',
        meaningVi: 'tro than (dùng làm phân bón tự nhiên cho đất)',
        exampleEn: 'Farmers burn trees and use the ash to enrich mountain soil.',
        exampleVi: 'Nông dân đốt cành cây và dùng tro để làm giàu dinh dưỡng cho đất vùng cao.',
        category: 'vocabulary'
      }
    ],
    grammar: [
      {
        title: 'Câu hỏi Yes/No và Wh-questions trong Tiếng Anh',
        formula: 'Yes/No: [Be/Do/Does/Did/Will] + S + V...? | Wh-: Wh-word + [auxiliary] + S + V...?',
        explanation: '• Yes/No questions: Đảo trợ động từ lên đầu câu. Ví dụ: "Do women play an important role in a Jrai family?"\n• Wh-questions: Dùng các từ để hỏi phù hợp:\n- What: Hỏi về cái gì, sự vật\n- Where: Hỏi về địa điểm, nơi chốn\n- When: Hỏi về thời gian, thời điểm\n- Why: Hỏi về lý do, nguyên nhân\n- How / How tall / How many / How much: Hỏi về tính chất, chiều cao, số lượng\n- Which: Hỏi về sự lựa chọn trong số lượng hạn chế',
        examples: [
          { en: 'Where can we find the most beautiful terraced fields? - In Mu Cang Chai.', vi: 'Chúng ta có thể tìm thấy ruộng bậc thang đẹp nhất ở đâu? - Ở Mù Căng Chải.' },
          { en: 'How tall is an average stilt house? - About 5 - 6 metres.', vi: 'Một ngôi nhà sàn trung bình cao bao nhiêu? - Khoảng 5 - 6 mét.' },
          { en: 'Which festival is more important for the Kinh: the Mid-Autumn or the Lunar New Year? - The Lunar New Year.', vi: 'Lễ hội nào quan trọng hơn với người Kinh: Trung Thu hay Tết Nguyên Đán? - Tết Nguyên Đán.' }
        ]
      },
      {
        title: 'Danh từ đếm được (Countable) & Không đếm được (Uncountable)',
        formula: 'Countable: a/an, many, a few (+ N số nhiều) | Uncountable: much, a little (+ N không đếm được)',
        explanation: '• Danh từ đếm được (Countable nouns): Có thể đếm bằng số (1, 2, 3...) và có dạng số nhiều thêm -s/es: groups, trees, areas, waterwheels, crops.\n• Danh từ không đếm được (Uncountable nouns): Không đếm bằng số, không có dạng số nhiều: land, information, water, rice, ash, woodwork, housework.\n• Từ chỉ số lượng:\n- a / an: dùng trước danh từ đếm được số ít (a coffee plantation).\n- many / a few: dùng trước danh từ đếm được số nhiều (many ethnic groups, a few waterwheels).\n- much / a little: dùng trước danh từ không đếm được (much information, a little water).',
        examples: [
          { en: 'There are only a few waterwheels left in my village.', vi: 'Chỉ còn một vài chiếc cọn nước còn lại trong làng tôi.' },
          { en: 'How much information about the Van Kieu have you collected?', vi: 'Bạn đã thu thập được bao nhiêu thông tin về người Vân Kiều rồi?' },
          { en: 'You should add a little more water to your soup.', vi: 'Bạn nên thêm một chút nước vào canh.' }
        ],
        note: 'BẪY THI CỬ HAY GẶP: "housework", "information", "land" là danh từ KHÔNG ĐẾM ĐƯỢC (không có "houseworks", không dùng "many information")!'
      }
    ],
    pronunciation: {
      title: 'Phân biệt Âm vô thanh /k/ và Âm hữu thanh /g/',
      description: 'Âm /k/ là phụ âm vô thanh, bật hơi từ vòm họng mà không rung dây thanh (cultural, communal, musical, folk, overlook, cook). Âm /g/ là phụ âm hữu thanh, dây thanh quản ở cổ họng rung mạnh khi phát âm (gong, garden, gathering, tiger, pig, green).',
      pairs: {
        sound1: '/k/ (bật hơi, không rung)',
        words1: ['cultural', 'communal', 'musical', 'folk', 'overlook', 'cook', 'kitchen', 'cucumbers'],
        sound2: '/g/ (rung cổ họng)',
        words2: ['gong', 'garden', 'gathering', 'tiger', 'pig', 'green', 'girls']
      },
      examples: [
        'The kitchen (/k/) is for family gatherings (/g/).',
        'Tigers (/g/) and monkeys live in the green (/g/) forest.',
        'Yesterday, we harvested cucumbers (/k/) from our garden (/g/).'
      ]
    },
    communication: {
      situation: 'Đưa ra quan điểm cá nhân (Giving opinions)',
      expressions: [
        { en: 'I think it is very interesting...', vi: 'Tôi nghĩ điều đó rất thú vị...' },
        { en: 'To my way of thinking, there are better services in the city.', vi: 'Theo cách suy nghĩ của tôi thì ở thành phố có dịch vụ tốt hơn.' },
        { en: 'In my opinion, stilt houses are very unique.', vi: 'Theo ý kiến của tôi, nhà sàn rất độc đáo.' }
      ],
      sampleDialogue: [
        { speaker: 'Tom', text: 'What do you think about life in the mountains?', vi: 'Cậu nghĩ sao về cuộc sống ở miền núi?' },
        { speaker: 'Trang', text: 'I think it is very interesting. People live close to nature.', vi: 'Tớ nghĩ rất thú vị. Mọi người được sống gần gũi với thiên nhiên.' },
        { speaker: 'Mai', text: 'To my way of thinking, there are better services and schools in the city.', vi: 'Theo suy nghĩ của tớ thì ở thành phố có trường học và dịch vụ tốt hơn.' }
      ]
    },
    quizQuestions: [
      {
        id: 'q4-1',
        unitId: 4,
        question: 'There are ________ ethnic groups living together in Viet Nam.',
        options: ['A. 45', 'B. 54', 'C. 63', 'D. 12'],
        correctAnswerIndex: 1,
        explanationVi: 'Việt Nam có 54 dân tộc anh em cùng sinh sống đoàn kết (trang 41 & 44 SGK).',
        type: 'vocabulary'
      },
      {
        id: 'q4-2',
        unitId: 4,
        question: 'A "stilt house" ________.',
        options: ['A. is a multi-storey modern building', 'B. stands on high wooden posts', 'C. always faces a market', 'D. is made of cement and bricks'],
        correctAnswerIndex: 1,
        explanationVi: 'Nhà sàn ("stilt house") đứng trên các cột gỗ cao ("stands on high posts") để tránh thú dữ (trang 40 & 45 SGK).',
        type: 'vocabulary'
      },
      {
        id: 'q4-3',
        unitId: 4,
        question: 'How ________ information about the Van Kieu have you collected?',
        options: ['A. many', 'B. much', 'C. a few', 'D. a'],
        correctAnswerIndex: 1,
        explanationVi: '"information" là danh từ không đếm được, dùng lượng từ "How much" (trang 43 SGK).',
        type: 'grammar'
      },
      {
        id: 'q4-4',
        unitId: 4,
        question: 'There are only ________ waterwheels left in my village.',
        options: ['A. a little', 'B. much', 'C. a few', 'D. little'],
        correctAnswerIndex: 2,
        explanationVi: '"waterwheels" (guồng nước) là danh từ đếm được số nhiều, dùng "a few" (trang 43 SGK).',
        type: 'grammar'
      },
      {
        id: 'q4-5',
        unitId: 4,
        question: 'Which word contains the sound /k/?',
        options: ['A. gong', 'B. garden', 'C. communal', 'D. gathering'],
        correctAnswerIndex: 2,
        explanationVi: '"communal" phát âm có âm /k/ (/kəˈmjuːnl/), các từ còn lại đều có âm /g/ (trang 42 SGK).',
        type: 'pronunciation'
      },
      {
        id: 'q4-6',
        unitId: 4,
        question: 'A: "________ do you like best about Sa Pa?" - B: "I like its colourful local markets best."',
        options: ['A. Why', 'B. What', 'C. Where', 'D. When'],
        correctAnswerIndex: 1,
        explanationVi: 'Hỏi về điều bạn thích nhất ở Sa Pa dùng từ để hỏi "What" (trang 43 SGK).',
        type: 'grammar'
      },
      {
        id: 'q4-7',
        unitId: 4,
        question: 'The Bahnar and Ede have a communal house called a ________ as the heart of their village.',
        options: ['A. cottage', 'B. Rong house', 'C. villa', 'D. apartment'],
        correctAnswerIndex: 1,
        explanationVi: 'Nhà sinh hoạt cộng đồng của người Ba-na và Ê-đê được gọi là "Rong house" (Nhà Rông) (trang 42 & 45 SGK).',
        type: 'vocabulary'
      },
      {
        id: 'q4-8',
        unitId: 4,
        question: 'Which word contains the sound /g/?',
        options: ['A. folk', 'B. cultural', 'C. musical', 'D. tiger'],
        correctAnswerIndex: 3,
        explanationVi: '"tiger" chứa âm /g/ (/ˈtaɪɡə/), các từ còn lại chứa âm /k/ (trang 42 SGK).',
        type: 'pronunciation'
      },
      {
        id: 'q4-9',
        unitId: 4,
        question: 'In a stilt house, family gatherings and receiving guests take place by the ________ in the kitchen.',
        options: ['A. open fire', 'B. computer', 'C. staircase', 'D. balcony'],
        correctAnswerIndex: 0,
        explanationVi: 'Các buổi sum họp gia đình và tiếp khách diễn ra bên bếp lửa lộ thiên ("open fire") giữa gian nhà sàn (trang 45 SGK).',
        type: 'reading'
      },
      {
        id: 'q4-10',
        unitId: 4,
        question: 'In a Jrai family, who plays a dominant role in family decisions?',
        options: ['A. Fathers', 'B. Women', 'C. Grandfathers', 'D. Children'],
        correctAnswerIndex: 1,
        explanationVi: 'Người Gia-rai theo chế độ mẫu hệ, người phụ nữ ("women") đóng vai trò chủ đạo trong gia đình (trang 44 SGK).',
        type: 'vocabulary'
      },
      {
        id: 'q4-11',
        unitId: 4,
        question: 'Which of the following is an UNCOUNTABLE noun?',
        options: ['A. tree', 'B. waterwheel', 'C. land', 'D. house'],
        correctAnswerIndex: 2,
        explanationVi: '"land" (đất đai) là danh từ không đếm được, các từ còn lại đều là danh từ đếm được (trang 43 SGK).',
        type: 'grammar'
      },
      {
        id: 'q4-12',
        unitId: 4,
        question: 'Tom: "What do you think about life in the mountains?" - Trang: "________"',
        options: [
          'A. I think it is very interesting. People live close to nature.',
          'B. Yes, I do.',
          'C. No, I am not.',
          'D. You are welcome.'
        ],
        correctAnswerIndex: 0,
        explanationVi: 'Mẫu câu đưa ra quan điểm cá nhân phù hợp: "I think it is very interesting..." (trang 44 SGK).',
        type: 'communication'
      }
    ],
    sentencePuzzles: [
      {
        scrambled: ['stands', 'A', 'stilt', 'on', 'house', 'high', 'posts.'],
        correct: 'A stilt house stands on high posts.',
        translationVi: 'Nhà sàn đứng trên những chiếc cọc gỗ cao.',
        hint: 'Chủ ngữ A stilt house + stands on high posts'
      },
      {
        scrambled: ['54', 'There', 'ethnic', 'are', 'groups', 'in', 'Viet Nam.'],
        correct: 'There are 54 ethnic groups in Viet Nam.',
        translationVi: 'Có 54 dân tộc tại Việt Nam.',
        hint: 'Cấu trúc There are + số lượng'
      },
      {
        scrambled: ['The', 'house', 'Rong', 'is', 'heart', 'the', 'of', 'village.', 'the'],
        correct: 'The Rong house is the heart of the village.',
        translationVi: 'Nhà Rông là trái tim của buôn làng.',
        hint: 'The Rong house is the heart...'
      },
      {
        scrambled: ['Minority', 'people', 'live', 'very', 'close', 'to', 'nature.'],
        correct: 'Minority people live very close to nature.',
        translationVi: 'Đồng bào dân tộc thiểu số sống rất gần gũi với thiên nhiên.',
        hint: 'Cụm từ live close to nature'
      }
    ]
  },
  {
    id: 5,
    title: 'Unit 5: Our Customs and Traditions',
    englishTitle: 'Our Customs and Traditions',
    theme: 'Our Heritage',
    description: 'Khám phá nét đẹp phong tục tập quán Việt Nam: Lễ mừng thọ, phong tục Tết, cây nêu xua đuổi tà ma, Lễ hội Nghinh Ông thờ cá voi, phép lịch sự bàn ăn và quy tắc Zero article (không dùng mạo từ).',
    vocabulary: [
      {
        id: 'u5-1',
        unitId: 5,
        word: 'family reunion',
        phonetic: '/ˈfæməli ˌriːˈjuːniən/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'cuộc sum họp gia đình, đoàn tụ gia đình',
        exampleEn: 'Tet is a precious occasion for family reunion in Viet Nam.',
        exampleVi: 'Tết là dịp quý giá để cả gia đình sum họp đoàn tụ ở Việt Nam.',
        category: 'vocabulary'
      },
      {
        id: 'u5-2',
        unitId: 5,
        word: 'bamboo pole',
        phonetic: '/ˌbæmˈbuː pəʊl/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'cây nêu ngày Tết',
        exampleEn: 'Villagers put up a tall bamboo pole in the courtyard before Tet.',
        exampleVi: 'Dân làng dựng một cây nêu bằng tre cao giữa sân trước Tết.',
        category: 'vocabulary'
      },
      {
        id: 'u5-3',
        unitId: 5,
        word: 'break with tradition',
        phonetic: '/breɪk wɪð trəˈdɪʃn/',
        partOfSpeech: 'idiom / phrase',
        meaningVi: 'phá vỡ truyền thống, làm khác với lệ xưa',
        exampleEn: 'Many modern families break with tradition by travelling during holidays.',
        exampleVi: 'Nhiều gia đình hiện đại phá cách truyền thống bằng việc đi du lịch trong kỳ nghỉ.',
        category: 'expression'
      },
      {
        id: 'u5-4',
        unitId: 5,
        word: 'food offerings',
        phonetic: '/fuːd ˈɒfərɪŋz/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'mâm cỗ cúng, đồ lễ dâng cúng tổ tiên',
        exampleEn: 'The family prepares hearty food offerings to place on the altar.',
        exampleVi: 'Gia đình chuẩn bị mâm cỗ cúng thịnh soạn để đặt lên bàn thờ.',
        category: 'vocabulary'
      },
      {
        id: 'u5-5',
        unitId: 5,
        word: 'longevity party',
        phonetic: '/lɒnˈdʒevəti ˈpɑːti/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'lễ mừng thọ (cho ông bà, người cao tuổi)',
        exampleEn: 'We celebrated our grandmother’s 80th birthday with a warm longevity party.',
        exampleVi: 'Chúng tôi tổ chức lễ mừng thọ 80 tuổi ấm cúng cho bà nội.',
        category: 'vocabulary'
      },
      {
        id: 'u5-6',
        unitId: 5,
        word: 'worship ancestors',
        phonetic: '/ˈwɜːʃɪp ˈænsestəz/',
        partOfSpeech: 'verb phrase',
        meaningVi: 'thờ phụng, cúng bái tổ tiên',
        exampleEn: 'Vietnamese people worship ancestors to show gratitude and respect.',
        exampleVi: 'Người Việt Nam thờ cúng tổ tiên để bày tỏ lòng biết ơn và tôn kính.',
        category: 'vocabulary'
      },
      {
        id: 'u5-7',
        unitId: 5,
        word: 'chase away bad luck',
        phonetic: '/tʃeɪs əˈweɪ bæd lʌk/',
        partOfSpeech: 'verb phrase',
        meaningVi: 'xua đuổi vận xui, rủi ro, tà ma',
        exampleEn: 'Ringing bells and planting bamboo poles help chase away bad luck.',
        exampleVi: 'Rung chuông và dựng cây nêu giúp xua đuổi điều xui xẻo.',
        category: 'expression'
      },
      {
        id: 'u5-8',
        unitId: 5,
        word: 'martial arts',
        phonetic: '/ˌmɑːʃl ˈɑːts/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'võ thuật cổ truyền',
        exampleEn: 'Young boys in the village practice traditional martial arts.',
        exampleVi: 'Các chàng trai trong làng luyện tập võ thuật truyền thống.',
        category: 'vocabulary'
      },
      {
        id: 'u5-9',
        unitId: 5,
        word: 'pray for good luck',
        phonetic: '/preɪ fɔː(r) ɡʊd lʌk/',
        partOfSpeech: 'verb phrase',
        meaningVi: 'cầu chúc may mắn, cầu phúc',
        exampleEn: 'People go to pagodas on New Year’s Day to pray for good luck and health.',
        exampleVi: 'Mọi người đi chùa vào ngày đầu năm mới để cầu may mắn và sức khỏe.',
        category: 'expression'
      },
      {
        id: 'u5-10',
        unitId: 5,
        word: 'respect the elderly',
        phonetic: '/rɪˈspekt ði ˈeldəli/',
        partOfSpeech: 'verb phrase',
        meaningVi: 'kính trọng, hiếu kính với người cao tuổi',
        exampleEn: 'It is a noble Vietnamese moral tradition to respect the elderly.',
        exampleVi: 'Kính trọng người già là một truyền thống đạo đức cao đẹp của người Việt.',
        category: 'vocabulary'
      },
      {
        id: 'u5-11',
        unitId: 5,
        word: 'table manners',
        phonetic: '/ˈteɪbl ˈmænəz/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'phép lịch sự trên bàn ăn, quy tắc ăn uống',
        exampleEn: 'Children are taught good table manners from a very young age.',
        exampleVi: 'Trẻ em được dạy phép lịch sự khi ăn uống ngay từ khi còn rất nhỏ.',
        category: 'vocabulary'
      },
      {
        id: 'u5-12',
        unitId: 5,
        word: 'whale worship festival',
        phonetic: '/weɪl ˈwɜːʃɪp ˈfestɪvl/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'Lễ hội Nghinh Ông (thờ Cá Voi của ngư dân)',
        exampleEn: 'The coastal fishermen celebrate the whale worship festival every spring.',
        exampleVi: 'Ngư dân miền biển tổ chức Lễ hội Nghinh Ông thờ cá voi vào mỗi mùa xuân.',
        category: 'vocabulary'
      },
      {
        id: 'u5-13',
        unitId: 5,
        word: 'chopsticks',
        phonetic: '/ˈtʃɒpstɪks/',
        partOfSpeech: 'noun (plural)',
        meaningVi: 'đôi đũa ăn cơm',
        exampleEn: 'Do not stick your chopsticks straight upright into the rice bowl.',
        exampleVi: 'Đừng cắm đũa thẳng đứng vào bát cơm (vì giống bát hương cúng).',
        category: 'vocabulary'
      },
      {
        id: 'u5-14',
        unitId: 5,
        word: 'pass with both hands',
        phonetic: '/pɑːs wɪð bəʊθ hændz/',
        partOfSpeech: 'verb phrase',
        meaningVi: 'đưa đồ / nhận đồ bằng cả hai tay',
        exampleEn: 'Always pass bowls and drinks with both hands to show politeness.',
        exampleVi: 'Luôn đưa bát và đồ uống bằng cả hai tay để thể hiện sự lễ phép.',
        category: 'expression'
      },
      {
        id: 'u5-15',
        unitId: 5,
        word: 'sponge cake',
        phonetic: '/ˈspʌndʒ keɪk/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'bánh bông lan xốp mềm',
        exampleEn: 'We baked a delicious sponge cake for our grandmother’s party.',
        exampleVi: 'Chúng tôi nướng một chiếc bánh bông lan thơm ngon cho bữa tiệc của bà.',
        category: 'vocabulary'
      },
      {
        id: 'u5-16',
        unitId: 5,
        word: 'blessing',
        phonetic: '/ˈblesɪŋ/',
        partOfSpeech: 'noun',
        meaningVi: 'lời chúc phúc, điều may lành',
        exampleEn: 'Elders give red envelopes with heartfelt blessings to children.',
        exampleVi: 'Người lớn trao phong bao lì xì kèm theo những lời chúc phúc chân thành cho trẻ nhỏ.',
        category: 'vocabulary'
      },
      {
        id: 'u5-17',
        unitId: 5,
        word: 'generations',
        phonetic: '/ˌdʒenəˈreɪʃnz/',
        partOfSpeech: 'noun (plural)',
        meaningVi: 'các thế hệ (ông bà, cha mẹ, con cháu)',
        exampleEn: 'Three generations live happily under the same roof in their village.',
        exampleVi: 'Ba thế hệ cùng chung sống hòa thuận dưới một mái nhà ở ngôi làng của họ.',
        category: 'vocabulary'
      },
      {
        id: 'u5-18',
        unitId: 5,
        word: 'ceremony',
        phonetic: '/ˈserəməni/',
        partOfSpeech: 'noun',
        meaningVi: 'nghi lễ, buổi lễ trang trọng',
        exampleEn: 'The opening ceremony of the traditional festival attracts thousands of guests.',
        exampleVi: 'Lễ khai mạc của lễ hội truyền thống thu hút hàng ngàn du khách.',
        category: 'vocabulary'
      },
      {
        id: 'u5-19',
        unitId: 5,
        word: 'fisherman',
        phonetic: '/ˈfɪʃəmən/',
        partOfSpeech: 'noun',
        meaningVi: 'ngư dân đánh cá',
        exampleEn: 'Every fisherman believes Lord Whale protects them from storms at sea.',
        exampleVi: 'Mỗi ngư dân đều tin rằng Cá Ông che chở cho họ khỏi bão táp trên biển.',
        category: 'vocabulary'
      },
      {
        id: 'u5-20',
        unitId: 5,
        word: 'Lord Whale',
        phonetic: '/lɔːd weɪl/',
        partOfSpeech: 'proper noun',
        meaningVi: 'Cá Ông (vị thần cá voi linh thiêng bảo hộ ngư dân)',
        exampleEn: 'Coastal residents built a temple to worship Lord Whale.',
        exampleVi: 'Cư dân vùng biển đã xây lăng miếu để thờ phụng Cá Ông.',
        category: 'vocabulary'
      },
      {
        id: 'u5-21',
        unitId: 5,
        word: 'guardian god',
        phonetic: '/ˈɡɑːdiən ɡɒd/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'vị thần hộ mệnh, thần bảo hộ',
        exampleEn: 'Whales are viewed as the guardian gods of seafaring folk.',
        exampleVi: 'Cá voi được xem như vị thần hộ mệnh của những người đi biển.',
        category: 'vocabulary'
      },
      {
        id: 'u5-22',
        unitId: 5,
        word: 'smooth sea',
        phonetic: '/smuːð siː/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'biển lặng sóng êm, thuận buồm xuôi gió',
        exampleEn: 'Fishermen pray for smooth seas and peaceful voyages.',
        exampleVi: 'Ngư dân cầu nguyện cho biển lặng sóng êm và những chuyến ra khơi bình an.',
        category: 'vocabulary'
      },
      {
        id: 'u5-23',
        unitId: 5,
        word: 'bountiful catch',
        phonetic: '/ˈbaʊntɪfl kætʃ/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'mẻ cá đầy ắp, mùa đánh bắt bội thu',
        exampleEn: 'Boats returned to harbour with a bountiful catch of fish and shrimp.',
        exampleVi: 'Tàu thuyền cập cảng với mẻ đánh bắt bội thu tôm cá.',
        category: 'vocabulary'
      },
      {
        id: 'u5-24',
        unitId: 5,
        word: 'dragon dance',
        phonetic: '/ˈdræɡən dɑːns/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'múa rồng, múa lân rồng lễ hội',
        exampleEn: 'Exciting dragon dances are performed along the coastal streets.',
        exampleVi: 'Những màn múa rồng sôi động được biểu diễn dọc theo các con đường ven biển.',
        category: 'vocabulary'
      },
      {
        id: 'u5-25',
        unitId: 5,
        word: 'boat racing',
        phonetic: '/bəʊt ˈreɪsɪŋ/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'đua thuyền rồng truyền thống',
        exampleEn: 'Villagers cheer enthusiastically during the boat racing contest.',
        exampleVi: 'Dân làng reo hò cổ vũ nhiệt tình trong cuộc thi đua thuyền.',
        category: 'vocabulary'
      },
      {
        id: 'u5-26',
        unitId: 5,
        word: 'altar',
        phonetic: '/ˈɔːltə(r)/',
        partOfSpeech: 'noun',
        meaningVi: 'bàn thờ gia tiên',
        exampleEn: 'A five-fruit tray is carefully arranged on the ancestral altar.',
        exampleVi: 'Mâm ngũ quả được bày biện cẩn thận trên bàn thờ tổ tiên.',
        category: 'vocabulary'
      },
      {
        id: 'u5-27',
        unitId: 5,
        word: 'five-fruit tray',
        phonetic: '/faɪv fruːt treɪ/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'mâm ngũ quả ngày Tết',
        exampleEn: 'The five-fruit tray symbolizes wishes for prosperity and health.',
        exampleVi: 'Mâm ngũ quả tượng trưng cho ước nguyện về sự sung túc và sức khỏe.',
        category: 'vocabulary'
      },
      {
        id: 'u5-28',
        unitId: 5,
        word: 'custom vs tradition',
        phonetic: '/ˈkʌstəm vəːsəs trəˈdɪʃn/',
        partOfSpeech: 'phrase',
        meaningVi: 'phong tục (custom - phạm vi hẹp) vs truyền thống (tradition - qua nhiều thế hệ)',
        exampleEn: 'A custom is accepted behavior, while a tradition is passed down generations.',
        exampleVi: 'Phong tục là thói quen tập quán, còn truyền thống được lưu truyền qua nhiều thế hệ.',
        category: 'expression'
      },
      {
        id: 'u5-29',
        unitId: 5,
        word: 'folk game',
        phonetic: '/fəʊk ɡeɪm/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'trò chơi dân gian (kéo co, bịt mắt bắt dê...)',
        exampleEn: 'Playing folk games brings joyous laughter to festival attendees.',
        exampleVi: 'Chơi trò chơi dân gian mang lại tiếng cười giòn giã cho người dự hội.',
        category: 'vocabulary'
      },
      {
        id: 'u5-30',
        unitId: 5,
        word: 'give advice',
        phonetic: '/ɡɪv ədˈvaɪs/',
        partOfSpeech: 'verb phrase',
        meaningVi: 'đưa ra lời khuyên (You should / It is a good idea to...)',
        exampleEn: 'Parents often give advice to teach their children respectful manners.',
        exampleVi: 'Cha mẹ thường đưa ra lời khuyên để dạy con cái phép tắc lễ độ.',
        category: 'expression'
      },
      {
        id: 'u5-31',
        unitId: 5,
        word: 'greet',
        phonetic: '/ɡriːt/',
        partOfSpeech: 'verb',
        meaningVi: 'chào hỏi, nghênh đón',
        exampleEn: 'Youngsters bow and greet the elders when entering the room.',
        exampleVi: 'Người trẻ cúi đầu chào hỏi các bậc trưởng bối khi bước vào phòng.',
        category: 'vocabulary'
      },
      {
        id: 'u5-32',
        unitId: 5,
        word: 'feast',
        phonetic: '/fiːst/',
        partOfSpeech: 'noun',
        meaningVi: 'bữa tiệc cỗ thịnh soạn',
        exampleEn: 'The whole village gathered for a joyous feast after the harvest.',
        exampleVi: 'Cả làng tụ họp dự bữa tiệc cỗ linh đình sau vụ thu hoạch.',
        category: 'vocabulary'
      },
      {
        id: 'u5-33',
        unitId: 5,
        word: 'moral value',
        phonetic: '/ˈmɒrəl ˈvæljuː/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'giá trị đạo đức, nét đẹp nhân văn',
        exampleEn: 'Filial piety is a sacred moral value deeply rooted in Vietnamese culture.',
        exampleVi: 'Lòng hiếu thảo là một giá trị đạo đức thiêng liêng ăn sâu vào văn hóa Việt.',
        category: 'vocabulary'
      },
      {
        id: 'u5-34',
        unitId: 5,
        word: 'incense',
        phonetic: '/ˈɪnsens/',
        partOfSpeech: 'noun',
        meaningVi: 'nén hương, que nhang trầm',
        exampleEn: 'Lighting incense creates a peaceful and sacred atmosphere.',
        exampleVi: 'Thắp nén nhang trầm tạo nên không gian thanh bình và thiêng liêng.',
        category: 'vocabulary'
      },
      {
        id: 'u5-35',
        unitId: 5,
        word: 'heritage',
        phonetic: '/ˈherɪtɪdʒ/',
        partOfSpeech: 'noun',
        meaningVi: 'di sản văn hóa truyền thống',
        exampleEn: 'We must preserve our intangible cultural heritage for future generations.',
        exampleVi: 'Chúng ta phải gìn giữ di sản văn hóa phi vật thể cho các thế hệ tương lai.',
        category: 'vocabulary'
      }
    ],
    grammar: [
      {
        title: 'Quy tắc Zero Article (Không dùng mạo từ - Kí hiệu Ø)',
        formula: 'Zero article (Ø) + [Danh từ số nhiều chung] / [Danh từ không đếm được] / [Bữa ăn] / [Tháng, mùa] / [by + Phương tiện]',
        explanation: 'Ta KHÔNG dùng mạo từ (a/an/the) trong 6 trường hợp kinh điển:\n1. Danh từ số nhiều chỉ loài hoặc nhóm chung chung (Dogs are loyal; Children like toys).\n2. Danh từ không đếm được mang tính chất chung (Sugar is sweet; Music relaxes me).\n3. Bữa ăn hằng ngày (have breakfast / lunch / dinner).\n4. Tên tháng, ngày trong tuần, các mùa (in October, on Sunday, in summer).\n5. Đi lại bằng phương tiện giao thông sau giới từ "by" (by car, by bus, by train, by air, by boat).\n6. Môn thể thao, trò chơi (play football, play chess).',
        examples: [
          { en: 'We went to Da Nang by air (Ø).', vi: 'Chúng tôi đến Đà Nẵng bằng đường hàng không (không dùng by an air hay by the air).' },
          { en: 'The festival takes place in October (Ø).', vi: 'Lễ hội diễn ra vào tháng Mười (không dùng in the October).' },
          { en: 'They had dinner (Ø) together at 7 p.m.', vi: 'Họ ăn tối cùng nhau lúc 7 giờ tối (không dùng a dinner).' },
          { en: 'Vietnamese people (Ø) respect the elderly.', vi: 'Người Việt Nam (nói chung) tôn trọng người cao tuổi.' }
        ]
      },
      {
        title: 'So sánh: A / An vs The vs Zero Article (Ø)',
        formula: 'A/An (Một thứ chưa xác định, số ít đếm được) | The (Thứ đã xác định, duy nhất, nhắc lại lần hai) | Ø (Chung chung, số nhiều, trừu tượng)',
        explanation: '• Dùng A/An: khi nhắc tới 1 đối tượng lần đầu tiên (I saw a bamboo pole in the yard).\n• Dùng The: khi cả người nói và nghe đều biết rõ đối tượng đó, hoặc khi nhắc lại lần 2 (The bamboo pole was 10 meters high; the Sun, the Earth).\n• Dùng Ø (Zero Article): khi nói về khái niệm chung, bữa ăn, tháng, phương tiện sau "by" (Customs are important; by train; have breakfast).',
        examples: [
          { en: 'My mother made a sponge cake. The cake was delicious.', vi: 'Mẹ tôi làm một chiếc bánh bông lan (lần đầu dùng a). Chiếc bánh đó rất ngon (nhắc lại dùng the).' },
          { en: 'Pigs eat vegetables (Ø).', vi: 'Lợn ăn rau (nói chung cả loài lợn và rau, đều dùng zero article).' }
        ]
      }
    ],
    pronunciation: {
      title: 'Cặp Phụ Âm Mũi: Âm /n/ và Âm /ŋ/',
      description: 'Phân biệt 2 âm mũi cực kỳ quan trọng trong Tiếng Anh 8:\n• Âm /n/ (Alveolar Nasal): Đầu lưỡi chạm vào chân răng hàm trên hoặc phần lợi cứng, luồng hơi đi qua mũi (thin, ten, run, son, ceremony, longevity).\n• Âm /ŋ/ (Velar Nasal): Phần cuống lưỡi nâng lên chạm ngạc mềm (vòm họng mềm), đầu lưỡi KHÔNG chạm răng, luồng hơi qua mũi tạo thành âm "ng" (thing, song, ring, thank, spring, offering, language).',
      pairs: {
        sound1: '/n/',
        words1: ['thin', 'land', 'son', 'ten', 'kin', 'run', 'ceremony', 'longevity', 'tradition'],
        sound2: '/ŋ/',
        words2: ['thing', 'thank', 'song', 'ring', 'king', 'rung', 'offering', 'spring', 'language']
      },
      examples: [
        'He thanked (/ŋ/) the host for the enjoyable ceremony (/n/).',
        'My mother bought thin (/n/) spring (/ŋ/) rolls for the longevity (/n/) party.',
        'The King (/ŋ/) listened to the wonderful song (/ŋ/) in the morning (/ŋ/).'
      ]
    },
    communication: {
      situation: 'Đưa ra lời khuyên về phép tắc ứng xử và phong tục (Giving advice on customs & manners)',
      expressions: [
        { en: 'You should / shouldn’t...', vi: 'Bạn nên / không nên...' },
        { en: 'It’s a good idea to...', vi: 'Rất nên / Đó là ý hay khi...' },
        { en: 'Perhaps you should...', vi: 'Có lẽ bạn nên...' },
        { en: 'Don’t...', vi: 'Đừng bao giờ...' },
        { en: 'You’d better...', vi: 'Tốt hơn hết bạn nên...' }
      ],
      sampleDialogue: [
        { speaker: 'Nick', text: 'This is my first time having dinner with a Vietnamese family. What should I do?', vi: 'Đây là lần đầu tiên tớ ăn tối cùng một gia đình Việt. Tớ nên làm gì đây?' },
        { speaker: 'Mai', text: 'Well, it’s a good idea to wait for the oldest person to start eating first.', vi: 'À, cậu rất nên đợi người lớn tuổi nhất bắt đầu ăn trước nhé.' },
        { speaker: 'Nick', text: 'Got it! And how should I pass food or bowls?', vi: 'Tớ hiểu rồi! Thế tớ nên đưa đồ ăn hay bát cơm thế nào?' },
        { speaker: 'Mai', text: 'You should pass them with both hands. And remember, don’t stick chopsticks upright in your rice bowl!', vi: 'Cậu nên đưa bằng cả hai tay. Và nhớ nhé, đừng cắm đũa thẳng đứng vào bát cơm!' }
      ]
    },
    quizQuestions: [
      {
        id: 'q5-1',
        unitId: 5,
        question: 'We went to Can Tho by ________ air.',
        options: ['A. an', 'B. the', 'C. a', 'D. Ø (zero article)'],
        correctAnswerIndex: 3,
        explanationVi: 'Cụm từ chỉ phương tiện giao thông đi sau giới từ "by" (by air, by car, by bus, by train) không dùng mạo từ (Zero article).',
        type: 'grammar'
      },
      {
        id: 'q5-2',
        unitId: 5,
        question: 'The Ok Om Bok Festival takes place in ________ October.',
        options: ['A. the', 'B. Ø (zero article)', 'C. an', 'D. a'],
        correctAnswerIndex: 1,
        explanationVi: 'Tên các tháng trong năm (October, November...) đi với giới từ in KHÔNG dùng mạo từ (Zero article).',
        type: 'grammar'
      },
      {
        id: 'q5-3',
        unitId: 5,
        question: 'People decorate bamboo poles to ________ away bad luck and evil spirits.',
        options: ['A. chase', 'B. pray', 'C. admire', 'D. place'],
        correctAnswerIndex: 0,
        explanationVi: 'Cụm từ thành ngữ "chase away bad luck" mang nghĩa xua đuổi điều xui xẻo và tà ma.',
        type: 'vocabulary'
      },
      {
        id: 'q5-4',
        unitId: 5,
        question: 'Which word contains the nasal sound /ŋ/?',
        options: ['A. thin', 'B. ceremony', 'C. spring', 'D. tradition'],
        correctAnswerIndex: 2,
        explanationVi: '"spring" phát âm có âm ngạc mềm mũi /ŋ/ (/sprɪŋ/), trong khi thin, ceremony, tradition đều có âm /n/.',
        type: 'pronunciation'
      },
      {
        id: 'q5-5',
        unitId: 5,
        question: 'Which word contains the nasal sound /n/?',
        options: ['A. song', 'B. offering', 'C. language', 'D. longevity'],
        correctAnswerIndex: 3,
        explanationVi: '"longevity" chứa âm /n/ (/lɒnˈdʒevəti/), các từ còn lại đều chứa âm /ŋ/.',
        type: 'pronunciation'
      },
      {
        id: 'q5-6',
        unitId: 5,
        question: 'When having meals in Viet Nam, you should NOT ________ chopsticks upright into the bowl.',
        options: ['A. stick', 'B. hold', 'C. wash', 'D. pick'],
        correctAnswerIndex: 0,
        explanationVi: 'Điều cấm kỵ trên bàn ăn: "stick chopsticks upright into the bowl" (cắm đũa thẳng đứng vào bát cơm) vì giống bát hương thờ cúng.',
        type: 'vocabulary'
      },
      {
        id: 'q5-7',
        unitId: 5,
        question: 'Coastal fishermen worship Lord Whale because they believe he is their ________ at sea.',
        options: ['A. chef', 'B. guardian god', 'C. rival', 'D. pet'],
        correctAnswerIndex: 1,
        explanationVi: 'Ngư dân miền biển tôn thờ Cá Ông vì tin ngài là "guardian god" (vị thần bảo hộ, thần hộ mệnh) che chở họ giữa biển khơi.',
        type: 'reading'
      },
      {
        id: 'q5-8',
        unitId: 5,
        question: 'Nick: "What should I do when handing food to an elderly person?" - Mai: "________"',
        options: [
          'A. You should pass it with one finger.',
          'B. It’s a good idea to pass it with both hands.',
          'C. Don’t look at them.',
          'D. You must throw it on the table.'
        ],
        correctAnswerIndex: 1,
        explanationVi: 'Phép lịch sự người Việt: "It’s a good idea to pass it with both hands" (Rất nên đưa đồ bằng cả hai tay để tỏ lòng kính trọng).',
        type: 'communication'
      },
      {
        id: 'q5-9',
        unitId: 5,
        question: 'My grandparents will celebrate their 80th birthday with a heartwarming ________.',
        options: ['A. martial art', 'B. longevity party', 'C. dragon dance', 'D. food offering'],
        correctAnswerIndex: 1,
        explanationVi: 'Lễ mừng thọ cho ông bà được gọi là "longevity party" (lễ mừng sống lâu, thượng thọ).',
        type: 'vocabulary'
      },
      {
        id: 'q5-10',
        unitId: 5,
        question: 'I usually have ________ breakfast with bread and milk before going to school.',
        options: ['A. a', 'B. an', 'C. the', 'D. Ø (zero article)'],
        correctAnswerIndex: 3,
        explanationVi: 'Tên các bữa ăn thông thường (have breakfast, have lunch, have dinner) không dùng mạo từ (Zero article).',
        type: 'grammar'
      },
      {
        id: 'q5-11',
        unitId: 5,
        question: 'There is a custom of ________ with tradition to travel abroad during the Lunar New Year among some youth.',
        options: ['A. breaking', 'B. making', 'C. catching', 'D. holding'],
        correctAnswerIndex: 0,
        explanationVi: 'Cụm từ "break with tradition" mang nghĩa phá cách, thay đổi khỏi truyền thống xưa cũ.',
        type: 'vocabulary'
      },
      {
        id: 'q5-12',
        unitId: 5,
        question: '________ children need love, care, and quality education from both family and school.',
        options: ['A. The', 'B. A', 'C. An', 'D. Ø (zero article)'],
        correctAnswerIndex: 3,
        explanationVi: '"Children" là danh từ số nhiều nói về trẻ em nói chung trên toàn thế giới, do đó áp dụng quy tắc Zero article (Ø).',
        type: 'grammar'
      }
    ],
    sentencePuzzles: [
      {
        scrambled: ['hands.', 'both', 'with', 'bowls', 'pass', 'to', 'idea', 'good', 'a', "It's"],
        correct: "It's a good idea to pass bowls with both hands.",
        translationVi: 'Bạn rất nên đưa bát bằng cả hai tay.',
        hint: 'Cấu trúc lời khuyên: It is a good idea to + V nguyên thể'
      },
      {
        scrambled: ['away', 'bamboo', 'chase', 'poles', 'bad', 'to', 'put', 'People', 'luck.'],
        correct: 'People put bamboo poles to chase away bad luck.',
        translationVi: 'Người dân dựng cây nêu để xua đuổi điều xui xẻo.',
        hint: 'Chủ ngữ People + put bamboo poles + mục đích to chase away bad luck'
      },
      {
        scrambled: ['grandparents.', 'warm', 'held', 'a', 'longevity', 'for', 'party', 'They'],
        correct: 'They held a warm longevity party for grandparents.',
        translationVi: 'Họ đã tổ chức một lễ mừng thọ ấm áp cho ông bà.',
        hint: 'They held a warm longevity party...'
      },
      {
        scrambled: ['air.', 'went', 'by', 'family', 'My', 'Hue', 'to'],
        correct: 'My family went to Hue by air.',
        translationVi: 'Gia đình tôi đã đến Huế bằng đường hàng không.',
        hint: 'Phương tiện giao thông sau by: by air không mạo từ'
      },
      {
        scrambled: ['protects', 'Whale', 'Lord', 'at', 'fishermen', 'sea.'],
        correct: 'Lord Whale protects fishermen at sea.',
        translationVi: 'Cá Ông che chở cho các ngư dân trên biển.',
        hint: 'Lord Whale + động từ protects fishermen'
      }
    ]
  },
  {
    id: 6,
    title: 'Unit 6: Lifestyles',
    englishTitle: 'Lifestyles',
    theme: 'Our World',
    description: 'Phong cách sống đa dạng khắp nơi: ẩm thực đường phố, cuộc sống du mục, xe trượt tuyết chó kéo Alaska, thì Tương lai đơn (will/won’t), Câu điều kiện loại 1 (If / Unless) và âm /br/ - /pr/.',
    vocabulary: [
      {
        id: 'u6-1',
        unitId: 6,
        word: 'dogsled',
        phonetic: '/ˈdɒɡsled/',
        partOfSpeech: 'noun',
        meaningVi: 'xe trượt tuyết do chó kéo (ở vùng băng tuyết Alaska)',
        exampleEn: 'The dogsled is an unusual traditional means of transport in Alaska.',
        exampleVi: 'Xe trượt tuyết chó kéo là phương tiện di chuyển truyền thống độc đáo ở Alaska.',
        category: 'vocabulary'
      },
      {
        id: 'u6-2',
        unitId: 6,
        word: 'musher',
        phonetic: '/ˈmʌʃə(r)/',
        partOfSpeech: 'noun',
        meaningVi: 'người điều khiển xe trượt tuyết chó kéo',
        exampleEn: 'Mushers from all over the world come to compete in the Iditarod Trail Race.',
        exampleVi: 'Các tay lái chó kéo từ khắp nơi đổ về tranh tài tại giải đua Iditarod.',
        category: 'vocabulary'
      },
      {
        id: 'u6-3',
        unitId: 6,
        word: 'mushing',
        phonetic: '/ˈmʌʃɪŋ/',
        partOfSpeech: 'noun',
        meaningVi: 'môn thể thao đua xe trượt tuyết chó kéo',
        exampleEn: 'Today, dog sledding or mushing is more of a thrilling winter sport.',
        exampleVi: 'Ngày nay, môn trượt tuyết chó kéo (mushing) là một môn thể thao mùa đông đầy hào hứng.',
        category: 'vocabulary'
      },
      {
        id: 'u6-4',
        unitId: 6,
        word: 'street food',
        phonetic: '/striːt fuːd/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'thức ăn đường phố, quà vặt vỉa hè',
        exampleEn: 'Buying street food is a common practice and lively lifestyle in Viet Nam.',
        exampleVi: 'Mua đồ ăn đường phố là một thói quen và nét sống nhộn nhịp ở Việt Nam.',
        category: 'vocabulary'
      },
      {
        id: 'u6-5',
        unitId: 6,
        word: 'common practice',
        phonetic: '/ˈkɒmən ˈpræktɪs/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'thói quen phổ biến, tập quán thường thấy',
        exampleEn: 'Having breakfast outside before work is a common practice in this city.',
        exampleVi: 'Ăn sáng ngoài quán trước giờ làm việc là một thói quen phổ biến ở thành phố này.',
        category: 'expression'
      },
      {
        id: 'u6-6',
        unitId: 6,
        word: 'in the habit of',
        phonetic: '/ɪn ðə ˈhæbɪt əv/',
        partOfSpeech: 'idiom / phrase',
        meaningVi: 'có thói quen làm việc gì',
        exampleEn: 'Many adults are in the habit of having a leisurely coffee in the morning.',
        exampleVi: 'Nhiều người lớn có thói quen thưởng thức cà phê thong thả vào buổi sáng.',
        category: 'expression'
      },
      {
        id: 'u6-7',
        unitId: 6,
        word: 'lifestyle',
        phonetic: '/ˈlaɪfstaɪl/',
        partOfSpeech: 'noun',
        meaningVi: 'lối sống, phong cách sống của cá nhân hoặc cộng đồng',
        exampleEn: 'Regular exercise and a balanced diet are key to a healthy lifestyle.',
        exampleVi: 'Tập thể dục đều đặn và chế độ ăn cân đối là chìa khóa cho một lối sống lành mạnh.',
        category: 'vocabulary'
      },
      {
        id: 'u6-8',
        unitId: 6,
        word: 'nomadic life',
        phonetic: '/nəʊˈmædɪk laɪf/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'cuộc sống du mục (di chuyển chăn thả gia súc)',
        exampleEn: 'Nomadic life in Mongolia involves herding horses and living in circular yurts.',
        exampleVi: 'Cuộc sống du mục ở Mông Cổ gắn liền với việc chăn ngựa và sống trong lều tròn yurt.',
        category: 'vocabulary'
      },
      {
        id: 'u6-9',
        unitId: 6,
        word: 'maintain',
        phonetic: '/meɪnˈteɪn/',
        partOfSpeech: 'verb',
        meaningVi: 'duy trì, gìn giữ, bảo tồn (lối sống truyền thống)',
        exampleEn: 'Native peoples in Alaska still maintain many of their age-old traditions.',
        exampleVi: 'Người bản địa ở Alaska vẫn duy trì nhiều truyền thống lâu đời của họ.',
        collocation: 'maintain a lifestyle / tradition',
        category: 'vocabulary'
      },
      {
        id: 'u6-10',
        unitId: 6,
        word: 'native art',
        phonetic: '/ˈneɪtɪv ɑːt/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'nghệ thuật bản địa, mỹ thuật truyền thống',
        exampleEn: 'The art gallery in the city centre has an extraordinary collection of native art.',
        exampleVi: 'Phòng trưng bày ở trung tâm thành phố có một bộ sưu tập nghệ thuật bản địa đặc sắc.',
        category: 'vocabulary'
      },
      {
        id: 'u6-11',
        unitId: 6,
        word: 'making crafts',
        phonetic: '/ˈmeɪkɪŋ krɑːfts/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'làm đồ thủ công mỹ nghệ bằng tay khéo léo',
        exampleEn: 'Villagers keep their heritage alive by making crafts like bamboo baskets.',
        exampleVi: 'Dân làng gìn giữ di sản bằng cách làm đồ thủ công như đan giỏ tre.',
        category: 'vocabulary'
      },
      {
        id: 'u6-12',
        unitId: 6,
        word: 'weaving',
        phonetic: '/ˈwiːvɪŋ/',
        partOfSpeech: 'noun',
        meaningVi: 'nghề dệt vải, dệt thổ cẩm',
        exampleEn: 'Tribal women know how to weave colorful threads into beautiful patterns.',
        exampleVi: 'Phụ nữ bộ lạc biết cách dệt những sợi chỉ nhiều màu thành hoa văn tuyệt đẹp.',
        category: 'vocabulary'
      },
      {
        id: 'u6-13',
        unitId: 6,
        word: 'tribal dance',
        phonetic: '/ˈtraɪbl dɑːns/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'điệu múa truyền thống của bộ tộc, bộ lạc',
        exampleEn: 'Tourists enjoy watching thrilling performances of tribal dances and drumming.',
        exampleVi: 'Du khách thích thú xem những màn biểu diễn múa bộ lạc và đánh trống sôi động.',
        category: 'vocabulary'
      },
      {
        id: 'u6-14',
        unitId: 6,
        word: 'online learning',
        phonetic: '/ˌɒnlaɪn ˈlɜːnɪŋ/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'việc học trực tuyến qua máy tính và internet',
        exampleEn: 'Online learning provides flexible schedule but requires high self-discipline.',
        exampleVi: 'Học trực tuyến mang lại thời gian linh hoạt nhưng đòi hỏi tính tự giác cao.',
        category: 'vocabulary'
      },
      {
        id: 'u6-15',
        unitId: 6,
        word: 'balanced diet',
        phonetic: '/ˌbælənst ˈdaɪət/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'chế độ ăn uống cân bằng, lành mạnh đủ chất',
        exampleEn: 'Eating plenty of vegetables and drinking water is part of a balanced diet.',
        exampleVi: 'Ăn nhiều rau xanh và uống đủ nước là một phần của chế độ ăn cân bằng.',
        category: 'vocabulary'
      },
      {
        id: 'u6-16',
        unitId: 6,
        word: 'serve',
        phonetic: '/sɜːv/',
        partOfSpeech: 'verb',
        meaningVi: 'phục vụ (đồ ăn, thức uống)',
        exampleEn: 'This family restaurant serves delicious traditional dishes at reasonable prices.',
        exampleVi: 'Nhà hàng gia đình này phục vụ các món ăn truyền thống ngon với giá hợp lý.',
        category: 'vocabulary'
      },
      {
        id: 'u6-17',
        unitId: 6,
        word: 'greet',
        phonetic: '/ɡriːt/',
        partOfSpeech: 'verb',
        meaningVi: 'chào hỏi, đón chào',
        exampleEn: 'People around the globe greet each other in various fascinating manners.',
        exampleVi: 'Người dân trên toàn thế giới chào hỏi nhau theo nhiều cách thức thú vị khác nhau.',
        category: 'vocabulary'
      },
      {
        id: 'u6-18',
        unitId: 6,
        word: 'bow',
        phonetic: '/baʊ/',
        partOfSpeech: 'verb / noun',
        meaningVi: 'cúi đầu chào (người Nhật Bản, Thái Lan)',
        exampleEn: 'In Japan, people traditionally bow to each other to express mutual respect.',
        exampleVi: 'Ở Nhật Bản, người ta thường cúi đầu chào nhau để bày tỏ sự tôn trọng lẫn nhau.',
        category: 'vocabulary'
      },
      {
        id: 'u6-19',
        unitId: 6,
        word: 'Hongi',
        phonetic: '/ˈhɒŋɡi/',
        partOfSpeech: 'noun',
        meaningVi: 'nghi thức chào chạm mũi và trán của người Maori New Zealand',
        exampleEn: 'The Maori greet each other by pressing noses together in the Hongi greeting.',
        exampleVi: 'Người Maori chào nhau bằng cách chạm mũi và trán vào nhau trong nghi thức Hongi.',
        category: 'vocabulary'
      },
      {
        id: 'u6-20',
        unitId: 6,
        word: 'sawadee',
        phonetic: '/səˈwɑːdiː/',
        partOfSpeech: 'interjection',
        meaningVi: 'lời chào truyền thống của người Thái Lan (kèm chắp tay cúi đầu)',
        exampleEn: 'Thais greet their elders by saying "sawadee" and bowing respectfully.',
        exampleVi: 'Người Thái chào người lớn tuổi bằng câu "sawadee" và cúi đầu cung kính.',
        category: 'vocabulary'
      },
      {
        id: 'u6-21',
        unitId: 6,
        word: 'shaking hands',
        phonetic: '/ˌʃeɪkɪŋ ˈhændz/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'cái bắt tay (cách chào phổ biến nhất trên thế giới)',
        exampleEn: 'Shaking hands is probably the most widely accepted business greeting.',
        exampleVi: 'Bắt tay có lẽ là cách chào hỏi trong công việc được chấp nhận rộng rãi nhất.',
        category: 'vocabulary'
      },
      {
        id: 'u6-22',
        unitId: 6,
        word: 'leisurely coffee',
        phonetic: '/ˈleʒəli ˈkɒfi/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'uống cà phê thong thả, ung dung ngắm phố',
        exampleEn: 'If they are not in a hurry, locals often enjoy a leisurely coffee on the sidewalk.',
        exampleVi: 'Nếu không vội, người dân địa phương thường ung dung uống cà phê ven vỉa hè.',
        category: 'expression'
      },
      {
        id: 'u6-23',
        unitId: 6,
        word: 'Iditarod Trail',
        phonetic: '/aɪˈdɪtərɒd treɪl/',
        partOfSpeech: 'proper noun',
        meaningVi: 'đường đua xe trượt tuyết chó kéo Iditarod dài 1,510 km ở Alaska',
        exampleEn: 'The Iditarod Trail Dog Race covers 1,510 km of frozen Alaskan terrain.',
        exampleVi: 'Cuộc đua chó kéo Iditarod trải dài 1.510 km trên địa hình băng tuyết Alaska.',
        category: 'vocabulary'
      },
      {
        id: 'u6-24',
        unitId: 6,
        word: 'express certainty',
        phonetic: '/ɪkˈspres ˈsɜːtnti/',
        partOfSpeech: 'verb phrase',
        meaningVi: 'bày tỏ sự chắc chắn (Sure, Certainly, Definitely)',
        exampleEn: 'You can say "Yes, certainly" to express certainty in everyday conversations.',
        exampleVi: 'Bạn có thể nói "Yes, certainly" để bày tỏ sự chắc chắn trong giao tiếp hàng ngày.',
        category: 'expression'
      },
      {
        id: 'u6-25',
        unitId: 6,
        word: 'traditional cuisine',
        phonetic: '/trəˈdɪʃənl kwɪˈziːn/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'nền ẩm thực truyền thống',
        exampleEn: 'Every country takes deep pride in its diverse traditional cuisine.',
        exampleVi: 'Mỗi quốc gia đều vô cùng tự hào về nền ẩm thực truyền thống phong phú của mình.',
        category: 'vocabulary'
      },
      {
        id: 'u6-26',
        unitId: 6,
        word: 'curry',
        phonetic: '/ˈkʌri/',
        partOfSpeech: 'noun',
        meaningVi: 'món cà ri Ấn Độ (nấu từ thịt, rau củ và nhiều gia vị thảo mộc)',
        exampleEn: 'Curry is a celebrated dish in India, usually served with aromatic basmati rice.',
        exampleVi: 'Cà ri là món ăn trứ danh ở Ấn Độ, thường được dùng chung với cơm thơm basmati.',
        category: 'vocabulary'
      },
      {
        id: 'u6-27',
        unitId: 6,
        word: 'spaghetti',
        phonetic: '/spəˈɡeti/',
        partOfSpeech: 'noun',
        meaningVi: 'món mì Ý sợi dài sốt cà chua thịt bò',
        exampleEn: 'Italy is renowned worldwide for delicious pizza and homemade spaghetti.',
        exampleVi: 'Nước Ý nổi tiếng khắp thế giới với bánh pizza thơm ngon và mì Ý tự làm.',
        category: 'vocabulary'
      },
      {
        id: 'u6-28',
        unitId: 6,
        word: 'kimchi',
        phonetic: '/ˈkɪmtʃi/',
        partOfSpeech: 'noun',
        meaningVi: 'kim chi (món bắp cải muối chua cay đặc trưng của Hàn Quốc)',
        exampleEn: 'Spicy fermented kimchi is served at almost every Korean meal.',
        exampleVi: 'Kim chi muối cay lên men được phục vụ trong hầu hết mọi bữa ăn của người Hàn.',
        category: 'vocabulary'
      },
      {
        id: 'u6-29',
        unitId: 6,
        word: 'fish and chips',
        phonetic: '/ˌfɪʃ ən ˈtʃɪps/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'món cá tẩm bột chiên giòn kèm khoai tây chiên (nước Anh)',
        exampleEn: 'Crispy fish and chips is the most iconic takeaway food across the UK.',
        exampleVi: 'Cá chiên giòn kèm khoai tây là món ăn mang đi mang tính biểu tượng nhất nước Anh.',
        category: 'vocabulary'
      },
      {
        id: 'u6-30',
        unitId: 6,
        word: 'independent',
        phonetic: '/ˌɪndɪˈpendənt/',
        partOfSpeech: 'adjective',
        meaningVi: 'tự lập, độc lập (không dựa dẫm)',
        exampleEn: 'Online studying encourages students to become more independent learners.',
        exampleVi: 'Học online khuyến khích học sinh trở thành những người học tự lập hơn.',
        category: 'vocabulary'
      },
      {
        id: 'u6-31',
        unitId: 6,
        word: 'concentrate',
        phonetic: '/ˈkɒnsntreɪt/',
        partOfSpeech: 'verb',
        meaningVi: 'tập trung tư tưởng, chú tâm',
        exampleEn: 'Some students find it quite difficult to concentrate when studying in front of a screen.',
        exampleVi: 'Một số học sinh cảm thấy khá khó tập trung khi ngồi học trước màn hình máy tính.',
        category: 'vocabulary'
      },
      {
        id: 'u6-32',
        unitId: 6,
        word: 'harmful to eyes',
        phonetic: '/ˈhɑːmfl tu aɪz/',
        partOfSpeech: 'adjective phrase',
        meaningVi: 'có hại cho mắt (khi nhìn màn hình điện tử liên tục)',
        exampleEn: 'Staring at computer screens for many hours can be very harmful to your eyes.',
        exampleVi: 'Nhìn chằm chằm vào màn hình máy tính nhiều giờ có thể rất có hại cho mắt.',
        category: 'expression'
      },
      {
        id: 'u6-33',
        unitId: 6,
        word: 'expensive equipment',
        phonetic: '/ɪkˈspensɪv ɪˈkwɪpmənt/',
        partOfSpeech: 'noun phrase',
        meaningVi: 'thiết bị máy móc đắt tiền (máy tính, tai nghe, webcam)',
        exampleEn: 'Online learning sometimes requires expensive equipment that not everyone can afford.',
        exampleVi: 'Học trực tuyến đôi khi đòi hỏi thiết bị đắt tiền mà không phải ai cũng có thể chi trả.',
        category: 'vocabulary'
      },
      {
        id: 'u6-34',
        unitId: 6,
        word: 'Coober Pedy',
        phonetic: '/ˌkuːbə ˈpiːdi/',
        partOfSpeech: 'proper noun',
        meaningVi: 'thị trấn Coober Pedy ở Úc (người dân sống dưới lòng đất để tránh nắng nóng)',
        exampleEn: 'Residents in Coober Pedy live in subterranean underground homes to escape extreme heat.',
        exampleVi: 'Cư dân Coober Pedy sống trong những ngôi nhà ngầm dưới lòng đất để tránh nắng nóng gay gắt.',
        category: 'vocabulary'
      },
      {
        id: 'u6-35',
        unitId: 6,
        word: 'revive culture',
        phonetic: '/rɪˈvaɪv ˈkʌltʃə(r)/',
        partOfSpeech: 'verb phrase',
        meaningVi: 'hồi sinh, khôi phục bản sắc văn hóa cổ truyền',
        exampleEn: 'Young indigenous people are working tirelessly to revive their tribal culture.',
        exampleVi: 'Những người trẻ bản địa đang nỗ lực không ngừng để khôi phục văn hóa bộ lạc của họ.',
        category: 'expression'
      }
    ],
    grammar: [
      {
        title: 'Thì Tương Lai Đơn (The Future Simple: will / won’t)',
        formula: 'Khẳng định (+): S + will + V-inf\nPhủ định (-): S + will not (won’t) + V-inf\nNghi vấn (?): Will + S + V-inf?',
        explanation: 'Thì tương lai đơn dùng để:\n1. Diễn tả dự đoán về tương lai không có căn cứ trước (I think my dad will take us to the museum).\n2. Quyết định đưa ra ngay tại thời điểm nói (It’s cold; I’ll close the window).\n3. Lời hứa, lời cảnh báo hoặc khả năng xảy ra (We have to leave now, or we will miss the train).',
        examples: [
          { en: 'The teacher will tell us tomorrow.', vi: 'Thầy giáo sẽ thông báo cho chúng ta vào ngày mai.' },
          { en: 'I won’t choose online learning in the second semester.', vi: 'Tớ sẽ không chọn học trực tuyến trong học kỳ hai.' },
          { en: 'Will they stay in an igloo when they visit Alaska?', vi: 'Liệu họ có ở trong lều tuyết khi đến thăm Alaska không?' }
        ]
      },
      {
        title: 'Câu Điều Kiện Loại 1 với IF và UNLESS (First Conditional)',
        formula: 'Mệnh đề điều kiện (If): If + S + V(hiện tại đơn)\nMệnh đề kết quả: S + will / won’t + V-inf\nQuy tắc Unless: Unless = If ... not (Trừ phi / Nếu không)',
        explanation: '• Câu điều kiện loại 1 diễn tả sự việc có thật hoặc hoàn toàn có thể xảy ra ở hiện tại hoặc tương lai.\n• Lưu ý quan trọng: Trong mệnh đề If / Unless TUYỆT ĐỐI KHÔNG dùng "will", chỉ dùng thì Hiện tại đơn!\n• Chuyển đổi tương đương:\n  If you don’t study, you will fail = Unless you study, you will fail.\n  We will go swimming unless it rains = We will go swimming if it doesn’t rain.',
        examples: [
          { en: 'If you eat an apple every day, you will stay healthy.', vi: 'Nếu bạn ăn một quả táo mỗi ngày, bạn sẽ luôn khỏe mạnh.' },
          { en: 'Unless we eat lunch now, we won’t arrive at the cinema on time.', vi: 'Trừ khi chúng ta ăn trưa ngay bây giờ, nếu không chúng ta sẽ không đến rạp chiếu phim đúng giờ.' },
          { en: 'He will have sore eyes if he spends too much time on the computer.', vi: 'Cậu ấy sẽ bị mỏi mắt nếu dành quá nhiều thời gian bên máy tính.' }
        ]
      }
    ],
    pronunciation: {
      title: 'Cặp Phụ Âm Chùm: Âm /br/ và Âm /pr/',
      description: 'Phân biệt 2 chùm phụ âm rất hay gặp trong bài thi phát âm:\n• Âm /br/ (Voiced): Âm rung dây thanh quản kết hợp giữa /b/ và /r/ (bridge, broccoli, breakfast, algebra, celebrate, bright).\n• Âm /pr/ (Voiceless): Âm bật hơi mạnh ở môi không rung dây thanh kết hợp giữa /p/ và /r/ (present, practise, precious, programme, express, pray, prepare).',
      pairs: {
        sound1: '/br/',
        words1: ['bridge', 'broccoli', 'breakfast', 'algebra', 'celebrate', 'bright', 'brother'],
        sound2: '/pr/',
        words2: ['present', 'practise', 'precious', 'programme', 'express', 'pray', 'prepare']
      },
      examples: [
        'My brother (/br/) says online learning improves (/pr/) our skills.',
        'Santa Claus brings (/br/) a lot of presents (/pr/) to children.',
        'My mum prays (/pr/) at the temple before breakfast (/br/) on Sundays.'
      ]
    },
    communication: {
      situation: 'Khẳng định sự chắc chắn & Ẩm thực, Lối sống các nước (Expressing certainty & World lifestyles)',
      expressions: [
        { en: 'Sure. You’re welcome.', vi: 'Chắc chắn rồi. Rất sẵn lòng / Không có chi.' },
        { en: 'Yes, certainly.', vi: 'Vâng, dĩ nhiên / chắc chắn rồi.' },
        { en: 'Definitely / Without doubt.', vi: 'Hoàn toàn chắc chắn / Không còn nghi ngờ gì.' }
      ],
      sampleDialogue: [
        { speaker: 'Nam', text: 'Can I come over to your house on Sunday, Tom?', vi: 'Chủ nhật này tớ có thể qua nhà cậu chơi được không Tom?' },
        { speaker: 'Tom', text: 'Sure. You’re welcome!', vi: 'Chắc chắn rồi. Rất hoan nghênh cậu!' },
        { speaker: 'Alice', text: 'Vietnamese cooking uses a lot of fresh vegetables and herbs, right?', vi: 'Ẩm thực Việt Nam dùng rất nhiều rau xanh và rau thơm tươi đúng không?' },
        { speaker: 'Mai', text: 'Yes, certainly.', vi: 'Vâng, đúng như vậy đấy.' }
      ]
    },
    quizQuestions: [
      {
        id: 'q6-1',
        unitId: 6,
        question: 'Unless you hurry up, you ________ late for the school bus.',
        options: ['A. will be', 'B. are', 'C. were', 'D. would be'],
        correctAnswerIndex: 0,
        explanationVi: 'Mệnh đề chính của câu điều kiện loại 1 dùng will + V-inf (will be late). (Trang 64 SGK)',
        type: 'grammar'
      },
      {
        id: 'q6-2',
        unitId: 6,
        question: 'If it ________ tomorrow, we will stay at home and watch films.',
        options: ['A. rains', 'B. will rain', 'C. rained', 'D. raining'],
        correctAnswerIndex: 0,
        explanationVi: 'Trong mệnh đề if loại 1, động từ chia thì hiện tại đơn với chủ ngữ số ít "it rains". (Trang 64 SGK)',
        type: 'grammar'
      },
      {
        id: 'q6-3',
        unitId: 6,
        question: 'People who drive dogsleds in Alaska are called ________.',
        options: ['A. runners', 'B. mushers', 'C. hikers', 'D. riders'],
        correctAnswerIndex: 1,
        explanationVi: '"mushers" là danh từ chỉ những người điều khiển xe trượt tuyết chó kéo. (Trang 65-66 SGK)',
        type: 'vocabulary'
      },
      {
        id: 'q6-4',
        unitId: 6,
        question: 'Which word contains the initial sound cluster /br/?',
        options: ['A. present', 'B. precious', 'C. broccoli', 'D. programme'],
        correctAnswerIndex: 2,
        explanationVi: '"broccoli" bắt đầu bằng chùm phụ âm /br/, các từ còn lại bắt đầu bằng /pr/. (Trang 62 SGK)',
        type: 'pronunciation'
      },
      {
        id: 'q6-5',
        unitId: 6,
        question: 'Which word contains the initial sound cluster /pr/?',
        options: ['A. bridge', 'B. breakfast', 'C. celebrate', 'D. practise'],
        correctAnswerIndex: 3,
        explanationVi: '"practise" bắt đầu bằng chùm phụ âm /pr/, các từ còn lại chứa /br/. (Trang 62 SGK)',
        type: 'pronunciation'
      },
      {
        id: 'q6-6',
        unitId: 6,
        question: 'The Maori people of New Zealand greet each other by ________ in their traditional Hongi greeting.',
        options: ['A. pressing their noses together', 'B. sticking out tongues', 'C. waving hands', 'D. bowing low'],
        correctAnswerIndex: 0,
        explanationVi: 'Người Maori chào nhau bằng nghi thức Hongi: chạm mũi và trán vào nhau ("pressing their noses together"). (Trang 61 SGK)',
        type: 'vocabulary'
      },
      {
        id: 'q6-7',
        unitId: 6,
        question: 'How long is the famous Iditarod Trail Sled Dog Race in Alaska?',
        options: ['A. 500 km', 'B. 1,000 km', 'C. 1,510 km', 'D. 2,500 km'],
        correctAnswerIndex: 2,
        explanationVi: 'Đường đua chó kéo Iditarod ở Alaska dài 1.510 km từ Anchorage đến Nome. (Trang 65 SGK)',
        type: 'reading'
      },
      {
        id: 'q6-8',
        unitId: 6,
        question: 'Don’t play computer games for too long, or you ________ your eyes.',
        options: ['A. harm', 'B. will harm', 'C. harmed', 'D. have harmed'],
        correctAnswerIndex: 1,
        explanationVi: 'Cấu trúc cảnh báo với "or + will/won’t + V-inf": "... or you will harm your eyes" (hoặc bạn sẽ làm hỏng mắt). (Trang 63 & 68 SGK)',
        type: 'grammar'
      },
      {
        id: 'q6-9',
        unitId: 6,
        question: 'Rewrite: "If you don’t hurry up, you will be late." = "________ you hurry up, you will be late."',
        options: ['A. If', 'B. When', 'C. Because', 'D. Unless'],
        correctAnswerIndex: 3,
        explanationVi: 'Quy tắc vàng chuyển đổi câu điều kiện: "Unless = If ... not". (Trang 64 & 68 SGK)',
        type: 'grammar'
      },
      {
        id: 'q6-10',
        unitId: 6,
        question: 'Nam: "Can I come over to your house on Sunday?" - Tom: "________"',
        options: [
          'A. Sure. You’re welcome.',
          'B. No, I am Tom.',
          'C. I will miss the train.',
          'D. Because it is raining.'
        ],
        correctAnswerIndex: 0,
        explanationVi: 'Mẫu câu bày tỏ sự chắc chắn và hiếu khách: "Sure. You’re welcome." (Trang 64 SGK)',
        type: 'communication'
      },
      {
        id: 'q6-11',
        unitId: 6,
        question: 'Which of the following is considered an ADVANTAGE of online learning?',
        options: [
          'A. Harmful to our eyes',
          'B. Difficult to concentrate',
          'C. Convenient and comfortable',
          'D. Expensive equipment'
        ],
        correctAnswerIndex: 2,
        explanationVi: '"Convenient and comfortable" (thuận tiện và thoải mái) là ưu điểm của học trực tuyến. (Trang 67 SGK)',
        type: 'vocabulary'
      },
      {
        id: 'q6-12',
        unitId: 6,
        question: 'In which Australian town do residents build underground subterranean homes to escape heat?',
        options: ['A. Sydney', 'B. Melbourne', 'C. Coober Pedy', 'D. Brisbane'],
        correctAnswerIndex: 2,
        explanationVi: 'Thị trấn Coober Pedy ở Úc nổi tiếng với cuộc sống ngầm dưới lòng đất để tránh nắng nóng gay gắt. (Trang 69 SGK)',
        type: 'vocabulary'
      }
    ],
    sentencePuzzles: [
      {
        scrambled: ['test.', 'fail', 'the', 'will', 'Unless', 'study,', 'you', 'you'],
        correct: 'Unless you study, you will fail the test.',
        translationVi: 'Trừ khi bạn học bài, nếu không bạn sẽ trượt bài thi.',
        hint: 'Cấu trúc Unless + S + V, S + will + V'
      },
      {
        scrambled: ['healthy.', 'stay', 'will', 'you', 'day,', 'every', 'apple', 'an', 'eat', 'you', 'If'],
        correct: 'If you eat an apple every day, you will stay healthy.',
        translationVi: 'Nếu bạn ăn một quả táo mỗi ngày, bạn sẽ luôn khỏe mạnh.',
        hint: 'Mệnh đề If hiện tại đơn, mệnh đề chính will stay healthy'
      },
      {
        scrambled: ['Alaska.', 'transport', 'in', 'dogsled', 'The', 'is', 'a', 'means', 'of'],
        correct: 'The dogsled is a means of transport in Alaska.',
        translationVi: 'Xe trượt tuyết chó kéo là một phương tiện di chuyển ở Alaska.',
        hint: 'Chủ ngữ The dogsled + is a means of transport...'
      },
      {
        scrambled: ['tomorrow.', 'tell', 'teacher', 'us', 'The', 'will'],
        correct: 'The teacher will tell us tomorrow.',
        translationVi: 'Thầy giáo sẽ nói cho chúng ta biết vào ngày mai.',
        hint: 'Thì tương lai đơn: The teacher will tell us tomorrow'
      },
      {
        scrambled: ['late.', 'be', 'will', 'you', 'up,', 'hurry', 'Unless', 'you'],
        correct: 'Unless you hurry up, you will be late.',
        translationVi: 'Nếu bạn không nhanh lên, bạn sẽ bị muộn.',
        hint: 'Unless you hurry up + you will be late'
      }
    ]
  },
  {
    id: 7,
    title: 'Unit 7: Environmental Protection',
    englishTitle: 'Environmental Protection',
    theme: 'Our World',
    description: 'Bảo vệ môi trường, giảm dấu chân carbon, bảo vệ sinh vật nguy cấp và câu phức với mệnh đề trạng ngữ chỉ thời gian (adverb clauses of time).',
    vocabulary: [
      {
        id: 'u7-1',
        unitId: 7,
        word: 'carbon footprint',
        phonetic: '/ˌkɑːbən ˈfʊtprɪnt/',
        partOfSpeech: 'noun',
        meaningVi: 'dấu chân carbon (lượng khí CO2 thải ra)',
        exampleEn: 'We can reduce our carbon footprint by cycling instead of driving motorbikes.',
        exampleVi: 'Chúng ta có thể giảm dấu chân carbon bằng cách đạp xe thay vì đi xe máy.',
        category: 'vocabulary'
      },
      {
        id: 'u7-2',
        unitId: 7,
        word: 'single-use products',
        phonetic: '/ˌsɪŋɡl juːs ˈprɒdʌkts/',
        partOfSpeech: 'noun',
        meaningVi: 'sản phẩm dùng một lần (túi nilon, cốc nhựa)',
        exampleEn: 'Try to avoid using single-use products like plastic bags and straws.',
        exampleVi: 'Hãy cố gắng tránh dùng các sản phẩm dùng một lần như túi nilon và ống hút nhựa.',
        category: 'vocabulary'
      },
      {
        id: 'u7-3',
        unitId: 7,
        word: 'endangered species',
        phonetic: '/ɪnˌdeɪndʒəd ˈspiːʃiːz/',
        partOfSpeech: 'noun',
        meaningVi: 'các loài động thực vật có nguy cơ tuyệt chủng',
        exampleEn: 'Con Dao National Park protects endangered species like sea turtles and dugongs.',
        exampleVi: 'Vườn quốc gia Côn Đảo bảo vệ các loài nguy cấp như rùa biển và bò biển (dugong).',
        category: 'vocabulary'
      },
      {
        id: 'u7-4',
        unitId: 7,
        word: 'ecosystem',
        phonetic: '/ˈiːkəʊsɪstəm/',
        partOfSpeech: 'noun',
        meaningVi: 'hệ sinh thái',
        exampleEn: 'Cutting down forests destroys the natural ecosystem and animal habitats.',
        exampleVi: 'Chặt phá rừng phá hủy hệ sinh thái tự nhiên và môi trường sống của động vật.',
        category: 'vocabulary'
      },
      {
        id: 'u7-5',
        unitId: 7,
        word: 'habitat',
        phonetic: '/ˈhæbɪtæt/',
        partOfSpeech: 'noun',
        meaningVi: 'môi trường sống tự nhiên',
        exampleEn: 'Bamboo forests are the natural habitat of giant pandas.',
        exampleVi: 'Rừng trúc là môi trường sống tự nhiên của gấu trúc khổng lồ.',
        category: 'vocabulary'
      }
    ],
    grammar: [
      {
        title: 'Mệnh đề trạng ngữ chỉ thời gian (Adverb clauses of time)',
        formula: 'Liên từ thời gian: when, while, before, after, as soon as, until + S + V',
        explanation: 'Mệnh đề trạng ngữ chỉ thời gian bắt đầu bằng when (khi), while (trong khi), before (trước khi), after (sau khi), as soon as (ngay khi), until (cho đến khi). Khi mệnh đề thời gian chỉ tương lai, chia ở HIỆN TẠI ĐƠN.',
        examples: [
          { en: "I'll wait for you here until you get back.", vi: 'Tôi sẽ đợi bạn ở đây cho đến khi bạn quay lại.' },
          { en: 'As soon as my friends come, we will clean up the beach.', vi: 'Ngay khi bạn bè tớ đến, chúng tớ sẽ dọn sạch bãi biển.' },
          { en: 'Make sure you lock the door before you go out.', vi: 'Hãy chắc chắn bạn đã khóa cửa trước khi đi ra ngoài.' }
        ]
      }
    ],
    pronunciation: {
      title: 'Phụ âm kép /bl/ và /kl/',
      description: 'Cụm /bl/ ghép âm /b/ và /l/ (block, blast, blanket, black). Cụm /kl/ ghép âm bật /k/ và /l/ (clean, clown, club, class, clear).',
      pairs: {
        sound1: '/bl/',
        words1: ['block', 'blast', 'blanket', 'black', 'problem'],
        sound2: '/kl/',
        words2: ['clean', 'clown', 'club', 'class', 'clear']
      },
      examples: [
        'A truck blocked (/bl/) the way to the sports club (/kl/).',
        'We cleaned (/kl/) up the environment after the blast (/bl/).'
      ]
    },
    communication: {
      situation: 'Hỏi để làm rõ thông tin (Asking for clarification)',
      expressions: [
        { en: "What does '...' mean?", vi: "Từ '...' nghĩa là gì?" },
        { en: "And what do you mean by '...'?", vi: "Và ý bạn khi nói '...' là gì?" }
      ],
      sampleDialogue: [
        { speaker: 'Mi', text: "Hey Linda. What does 'endangered species' mean?", vi: "Linda ơi, từ 'endangered species' nghĩa là gì?" },
        { speaker: 'Linda', text: 'It means animals in the wild that face a high risk of extinction.', vi: 'Nó có nghĩa là những động vật hoang dã đối mặt nguy cơ tuyệt chủng cao.' }
      ]
    },
    quizQuestions: [
      {
        id: 'q7-1',
        unitId: 7,
        question: 'We will clean up the beach as soon as it ________ raining.',
        options: ['A. stop', 'B. stops', 'C. will stop', 'D. stopped'],
        correctAnswerIndex: 1,
        explanationVi: 'Trong mệnh đề thời gian "as soon as", dù chỉ hành động tương lai nhưng động từ chia ở Hiện tại đơn (it stops).',
        type: 'grammar'
      },
      {
        id: 'q7-2',
        unitId: 7,
        question: "Don't forget to turn off the lights ________ you go out.",
        options: ['A. before', 'B. while', 'C. until', 'D. as soon as'],
        correctAnswerIndex: 0,
        explanationVi: '"before you go out" = trước khi bạn ra ngoài.',
        type: 'grammar'
      },
      {
        id: 'q7-3',
        unitId: 7,
        question: 'The amount of carbon dioxide we release into the environment is our ________.',
        options: ['A. ecosystem', 'B. habitat', 'C. carbon footprint', 'D. single-use'],
        correctAnswerIndex: 2,
        explanationVi: '"carbon footprint" là lượng khí thải CO2 mà một người thải ra môi trường.',
        type: 'vocabulary'
      }
    ],
    sentencePuzzles: [
      {
        scrambled: ['until', 'will', 'wait', 'you', 'here', 'back.', 'get', 'I'],
        correct: 'I will wait here until you get back.',
        translationVi: 'Tôi sẽ đợi ở đây cho tới khi bạn quay lại.',
        hint: 'Mệnh đề thời gian với until'
      }
    ]
  },
  {
    id: 8,
    title: 'Unit 8: Shopping',
    englishTitle: 'Shopping',
    theme: 'Our World',
    description: 'Địa điểm mua sắm, văn hóa trả giá, người nghiện mua sắm (shopaholic), trạng từ chỉ tần suất và thì Hiện tại đơn diễn tả lịch trình tương lai.',
    vocabulary: [
      {
        id: 'u8-1',
        unitId: 8,
        word: 'shopaholic',
        phonetic: '/ˌʃɒpəˈhɒlɪk/',
        partOfSpeech: 'noun',
        meaningVi: 'người nghiện mua sắm',
        exampleEn: "She's a shopaholic. She spends too much time and money shopping.",
        exampleVi: 'Cô ấy là người nghiện mua sắm. Cô ấy dành quá nhiều thời gian và tiền bạc mua đồ.',
        category: 'vocabulary'
      },
      {
        id: 'u8-2',
        unitId: 8,
        word: 'bargain',
        phonetic: '/ˈbɑːɡən/',
        partOfSpeech: 'verb / noun',
        meaningVi: 'mặc cả, trả giá / món hời',
        exampleEn: 'Shoppers can bargain at open-air markets to get a lower price.',
        exampleVi: 'Người mua có thể trả giá ở chợ phiên ngoài trời để được giá thấp hơn.',
        category: 'vocabulary'
      },
      {
        id: 'u8-3',
        unitId: 8,
        word: 'price tag',
        phonetic: '/ˈpraɪs tæɡ/',
        partOfSpeech: 'noun',
        meaningVi: 'nhãn giá, mác ghi giá tiền',
        exampleEn: 'Items in supermarkets have fixed prices on their price tags.',
        exampleVi: 'Hàng hóa trong siêu thị có giá niêm yết cố định trên nhãn giá.',
        category: 'vocabulary'
      },
      {
        id: 'u8-4',
        unitId: 8,
        word: 'specialty shop',
        phonetic: '/ˈspeʃəlti ʃɒp/',
        partOfSpeech: 'noun',
        meaningVi: 'cửa hàng chuyên doanh một mặt hàng cụ thể',
        exampleEn: 'A florist is a specialty shop that sells only flowers and plants.',
        exampleVi: 'Tiệm hoa là cửa hàng chuyên doanh chỉ bán hoa và cây cảnh.',
        category: 'vocabulary'
      },
      {
        id: 'u8-5',
        unitId: 8,
        word: 'browsing',
        phonetic: '/ˈbraʊzɪŋ/',
        partOfSpeech: 'noun',
        meaningVi: 'việc đi dạo ngắm nghía hàng hóa (chưa mua ngay)',
        exampleEn: 'I spent the whole morning browsing online for clothes.',
        exampleVi: 'Tôi dành cả buổi sáng lướt mạng ngắm quần áo.',
        category: 'vocabulary'
      }
    ],
    grammar: [
      {
        title: 'Thì Hiện tại đơn diễn tả lịch trình / thời gian biểu tương lai',
        formula: 'S + V(s/es) + time expressions (at 9:00, tomorrow, next Monday...)',
        explanation: 'Dùng thì Hiện tại đơn (Present Simple) để nói về các sự kiện tương lai đã được lên lịch cố định theo thời gian biểu, lịch trình tàu xe, rạp chiếu phim.',
        examples: [
          { en: 'The train leaves at 4:30 this afternoon.', vi: 'Chuyến tàu khởi hành lúc 4:30 chiều nay (lịch trình tàu).' },
          { en: 'The summer sales end next Sunday.', vi: 'Đợt giảm giá mùa hè kết thúc vào Chủ nhật tới.' },
          { en: 'My art lesson starts at one o’clock.', vi: 'Tiết học vẽ của tôi bắt đầu lúc 1 giờ.' }
        ]
      }
    ],
    pronunciation: {
      title: 'Phụ âm kép /sp/ và /st/',
      description: 'Cụm /sp/ ghép âm /s/ và /p/ (spend, space, specialty). Cụm /st/ ghép âm /s/ và /t/ (stall, staff, honest, waste).',
      pairs: {
        sound1: '/sp/',
        words1: ['spend', 'speciality', 'space', 'respect', 'clasp'],
        sound2: '/st/',
        words2: ['stall', 'staff', 'outstand', 'honest', 'waste']
      },
      examples: [
        'There is a three-storey sports (/sp/) centre in my neighbourhood.',
        'Tom spent (/sp/) half of his savings in that music store (/st/).'
      ]
    },
    communication: {
      situation: 'Phàn nàn khi mua sắm (Making complaints)',
      expressions: [
        { en: "I'm calling to make a complaint about...", vi: 'Tôi gọi để khiếu nại/phàn nàn về...' },
        { en: "I'm not happy with...", vi: 'Tôi không hài lòng với...' }
      ],
      sampleDialogue: [
        { speaker: 'Tom', text: "I'm calling to make a complaint about the backpack I ordered.", vi: 'Tôi gọi để phàn nàn về chiếc ba lô tôi đã đặt mua.' },
        { speaker: 'Shop Assistant', text: "Let me check it. I'll send you another one.", vi: 'Để tôi kiểm tra lại. Tôi sẽ gửi cho bạn chiếc khác nhé.' }
      ]
    },
    quizQuestions: [
      {
        id: 'q8-1',
        unitId: 8,
        question: 'Look at the timetable. The shuttle bus ________ every 15 minutes.',
        options: ['A. leaves', 'B. will leave', 'C. left', 'D. is leaving'],
        correctAnswerIndex: 0,
        explanationVi: 'Lịch trình xe buýt chạy cố định dùng thì Hiện tại đơn (leaves).',
        type: 'grammar'
      },
      {
        id: 'q8-2',
        unitId: 8,
        question: 'You cannot ________ at the supermarket because all prices are fixed.',
        options: ['A. browse', 'B. bargain', 'C. spend', 'D. display'],
        correctAnswerIndex: 1,
        explanationVi: 'Ở siêu thị giá đã niêm yết cố định nên không thể mặc cả (bargain).',
        type: 'vocabulary'
      }
    ],
    sentencePuzzles: [
      {
        scrambled: ['starts', 'lesson', 'My', 'at', 'one', 'clock.', "o'"],
        correct: "My lesson starts at one o' clock.",
        translationVi: 'Tiết học của tôi bắt đầu lúc 1 giờ.',
        hint: 'Hiện tại đơn chỉ lịch trình'
      }
    ]
  },
  {
    id: 9,
    title: 'Unit 9: Natural Disasters',
    englishTitle: 'Natural Disasters',
    theme: 'Our World',
    description: 'Thiên tai (bão lũ, động đất, núi lửa), bộ dụng cụ cứu hộ khẩn cấp và ngữ pháp Quá khứ tiếp diễn (Past Continuous).',
    vocabulary: [
      {
        id: 'u9-1',
        unitId: 9,
        word: 'tornado',
        phonetic: '/tɔːˈneɪdəʊ/',
        partOfSpeech: 'noun',
        meaningVi: 'lốc xoáy, vòi rồng',
        exampleEn: 'A tornado is a violent storm that moves in a circle with very strong winds.',
        exampleVi: 'Lốc xoáy là cơn bão dữ dội di chuyển theo vòng tròn với sức gió cực mạnh.',
        category: 'vocabulary'
      },
      {
        id: 'u9-2',
        unitId: 9,
        word: 'volcanic eruption',
        phonetic: '/vɒlˈkænɪk ɪˈrʌpʃn/',
        partOfSpeech: 'noun',
        meaningVi: 'núi lửa phun trào',
        exampleEn: 'The volcanic eruption sent a huge cloud of ash and gas into the sky.',
        exampleVi: 'Vụ núi lửa phun trào đã bắn một đám mây tro bụi và khí khổng lồ lên trời.',
        category: 'vocabulary'
      },
      {
        id: 'u9-3',
        unitId: 9,
        word: 'emergency kit',
        phonetic: '/ɪˈmɜːdʒənsi kɪt/',
        partOfSpeech: 'noun',
        meaningVi: 'bộ đồ cứu hộ khẩn cấp (đèn pin, nước, bông băng)',
        exampleEn: 'Before a storm hits, every family should prepare an emergency kit.',
        exampleVi: 'Trước khi bão đổ bộ, mỗi gia đình nên chuẩn bị sẵn một bộ cứu hộ khẩn cấp.',
        category: 'vocabulary'
      },
      {
        id: 'u9-4',
        unitId: 9,
        word: 'tsunami',
        phonetic: '/tsuːˈnɑːmi/',
        partOfSpeech: 'noun',
        meaningVi: 'sóng thần',
        exampleEn: 'The undersea earthquake triggered a massive tsunami across the coast.',
        exampleVi: 'Trận động đất dưới đáy biển đã gây ra cơn sóng thần dữ dội quét qua bờ biển.',
        category: 'vocabulary'
      },
      {
        id: 'u9-5',
        unitId: 9,
        word: 'landslide',
        phonetic: '/ˈlændslaɪd/',
        partOfSpeech: 'noun',
        meaningVi: 'vụ sạt lở đất đá',
        exampleEn: 'Heavy rain caused dangerous landslides in the northern mountains.',
        exampleVi: 'Mưa lớn đã gây ra những vụ sạt lở đất nguy hiểm ở vùng núi phía bắc.',
        category: 'vocabulary'
      }
    ],
    grammar: [
      {
        title: 'Thì Quá khứ tiếp diễn (Past Continuous)',
        formula: 'S + was / were + V-ing\nPhối hợp: When + Quá khứ đơn, Quá khứ tiếp diễn | While + Quá khứ tiếp diễn, Quá khứ đơn',
        explanation: 'Diễn tả hành động đang xảy ra tại một thời điểm xác định trong quá khứ, hoặc một hành động đang xảy ra (chia Quá khứ tiếp diễn) thì một hành động khác xen vào (chia Quá khứ đơn).',
        examples: [
          { en: 'I was having dinner at 6 p.m. yesterday.', vi: 'Tôi đang ăn tối vào lúc 6 giờ tối hôm qua.' },
          { en: 'While they were watching TV, the earthquake happened.', vi: 'Trong khi họ đang xem TV thì trận động đất xảy ra.' },
          { en: 'When the tornado came, she was working in the garden.', vi: 'Khi cơn lốc xoáy ập đến, cô ấy đang làm việc trong vườn.' }
        ]
      }
    ],
    pronunciation: {
      title: 'Trọng âm từ có đuôi -al và -ous',
      description: 'Các từ kết thúc bằng hậu tố -al hoặc -ous thường có trọng âm rơi vào âm tiết thứ 3 tính từ cuối lên (cách âm đuôi 2 âm tiết).',
      pairs: {
        sound1: 'Đuôi -al',
        words1: ['musical', 'national', 'personal', 'practical'],
        sound2: 'Đuôi -ous',
        words2: ['dangerous', 'humorous', 'poisonous', 'marvellous', 'numerous']
      },
      examples: [
        'The flood victims are collecting their personal (/ˈpɜːsənl/) property.',
        'Avoid dangerous (/ˈdeɪndʒərəs/) places during an earthquake.'
      ]
    },
    communication: {
      situation: 'Báo tin buồn và đáp lại tin buồn (Giving & Responding to bad news)',
      expressions: [
        { en: "I'm sorry to hear that.", vi: 'Mình rất tiếc khi nghe thấy điều đó.' },
        { en: "That's awful. I hope...", vi: 'Thật kinh khủng quá. Mình mong là...' }
      ],
      sampleDialogue: [
        { speaker: 'Phong', text: 'A flood destroyed my grandparents’ crops last night.', vi: 'Trận lũ đã phá hủy toàn bộ hoa màu của ông bà tớ đêm qua.' },
        { speaker: 'Mark', text: "That's awful. I hope your grandparents are safe.", vi: 'Kinh khủng quá. Tớ mong là ông bà cậu vẫn bình an.' }
      ]
    },
    quizQuestions: [
      {
        id: 'q9-1',
        unitId: 9,
        question: 'While they ________ camping near the river, the flood came suddenly.',
        options: ['A. camped', 'B. were camping', 'C. are camping', 'D. was camping'],
        correctAnswerIndex: 1,
        explanationVi: 'Hành động cắm trại đang diễn ra trong quá khứ ("While they were camping"), thì cơn lũ bất ngờ ập đến ("came"). Chủ ngữ "they" đi với "were camping".',
        type: 'grammar'
      },
      {
        id: 'q9-2',
        unitId: 9,
        question: 'Where is the main stress of the word "dangerous"?',
        options: ['A. First syllable', 'B. Second syllable', 'C. Third syllable', 'D. Fourth syllable'],
        correctAnswerIndex: 0,
        explanationVi: '"dangerous" trọng âm rơi vào âm tiết thứ nhất: /ˈdeɪndʒərəs/.',
        type: 'pronunciation'
      }
    ],
    sentencePuzzles: [
      {
        scrambled: ['watching', 'were', 'We', 'TV', 'struck.', 'earthquake', 'when', 'the'],
        correct: 'We were watching TV when the earthquake struck.',
        translationVi: 'Chúng tôi đang xem TV thì trận động đất ập tới.',
        hint: 'Quá khứ tiếp diễn kết hợp when'
      }
    ]
  },
  {
    id: 10,
    title: 'Unit 10: Communication in the Future',
    englishTitle: 'Communication in the Future',
    theme: 'Visions of the Future',
    description: 'Công nghệ giao tiếp tương lai: thần giao cách cảm (telepathy), ảnh 3 chiều (holography), giới từ chỉ nơi chốn/thời gian và đại từ sở hữu.',
    vocabulary: [
      {
        id: 'u10-1',
        unitId: 10,
        word: 'telepathy',
        phonetic: '/təˈlepəθi/',
        partOfSpeech: 'noun',
        meaningVi: 'thần giao cách cảm (truyền suy nghĩ trực tiếp)',
        exampleEn: 'With telepathy, people can communicate by thoughts without speaking.',
        exampleVi: 'Với thần giao cách cảm, con người có thể giao tiếp bằng ý nghĩ mà không cần nói.',
        category: 'vocabulary'
      },
      {
        id: 'u10-2',
        unitId: 10,
        word: 'holography',
        phonetic: '/hɒˈlɒɡrəfi/',
        partOfSpeech: 'noun',
        meaningVi: 'kỹ thuật ảnh ba chiều không gian',
        exampleEn: 'By using holography, you can attend a meeting with your 3D image.',
        exampleVi: 'Bằng ảnh không gian 3 chiều, bạn có thể tham gia cuộc họp bằng hình chiếu 3D.',
        category: 'vocabulary'
      },
      {
        id: 'u10-3',
        unitId: 10,
        word: 'video conference',
        phonetic: '/ˈvɪdiəʊ ˈkɒnfərəns/',
        partOfSpeech: 'noun',
        meaningVi: 'hội nghị truyền hình qua video trực tuyến',
        exampleEn: 'We had a video conference with students from Japan yesterday.',
        exampleVi: 'Hôm qua chúng tôi đã có một cuộc họp trực tuyến với các bạn học sinh Nhật Bản.',
        category: 'vocabulary'
      },
      {
        id: 'u10-4',
        unitId: 10,
        word: 'translation machine',
        phonetic: '/trænzˈleɪʃn məˈʃiːn/',
        partOfSpeech: 'noun',
        meaningVi: 'máy dịch thuật tự động',
        exampleEn: 'In the future, everyone can carry a tiny translation machine when traveling.',
        exampleVi: 'Trong tương lai, ai cũng có thể mang theo một chiếc máy dịch nhỏ gọn khi đi du lịch.',
        category: 'vocabulary'
      }
    ],
    grammar: [
      {
        title: 'Giới từ chỉ thời gian: IN, FOR, BY',
        formula: 'in + khoảng thời gian (tương lai) | for + khoảng thời gian (kéo dài) | by + mốc thời gian cụ thể',
        explanation: '"in ten years" = trong 10 năm nữa; "for two weeks" = trong vòng 2 tuần; "by 6 p.m." = trước hoặc đúng 6 giờ.',
        examples: [
          { en: 'Robots will replace shop assistants in ten years.', vi: 'Robot sẽ thay thế nhân viên bán hàng trong 10 năm nữa.' },
          { en: 'It rained for three hours yesterday.', vi: 'Trời đã mưa suốt 3 tiếng hôm qua.' },
          { en: "We'll be there by 6 p.m.", vi: 'Chúng tôi sẽ có mặt ở đó trước 6 giờ tối.' }
        ]
      },
      {
        title: 'Đại từ sở hữu sau giới từ OF (Double Possessive)',
        formula: 'a / an / two / some + Noun + of + possessive pronoun (mine, yours, his, hers, ours, theirs)',
        explanation: 'Dùng để diễn tả một trong số những người/vật thuộc quyền sở hữu của ai đó.',
        examples: [
          { en: 'Mi is a friend of mine.', vi: 'Mi là một người bạn của tôi (= one of my friends).' },
          { en: 'Can I borrow a pencil of yours?', vi: 'Mình có thể mượn một cây bút chì của bạn không?' }
        ]
      }
    ],
    pronunciation: {
      title: 'Trọng âm từ kết thúc bằng -ese và -ee',
      description: 'Các từ có đuôi -ese hoặc -ee thường có trọng âm CHÍNH rơi vào chính đuôi đó (âm tiết cuối cùng).',
      pairs: {
        sound1: 'Đuôi -ese',
        words1: ['Vietnamese', 'Japanese', 'Chinese', 'Taiwanese', 'Bhutanese'],
        sound2: 'Đuôi -ee',
        words2: ['agree', 'trainee', 'awardee', 'interviewee', 'guarantee']
      },
      examples: [
        'The interviewees (/ˌɪntəvjuˈiːz/) said that they were Taiwanese (/ˌtaɪwəˈniːz/).',
        'Joe agrees (/əˈɡriː/) that learning Chinese (/ˌtʃaɪˈniːz/) is challenging.'
      ]
    },
    communication: {
      situation: 'Cắt lời một cách lịch sự (Interrupting politely)',
      expressions: [
        { en: 'Sorry for interrupting, but...', vi: 'Xin lỗi vì đã ngắt lời, nhưng...' },
        { en: 'Hold on. Can you repeat that, please?', vi: 'Chờ chút. Bạn có thể nhắc lại câu đó được không?' }
      ],
      sampleDialogue: [
        { speaker: 'Mark', text: 'Now, about the video conference...', vi: 'Nào, về cuộc họp trực tuyến...' },
        { speaker: 'Trang', text: 'Sorry for interrupting, but I think we should meet at 9:00 a.m. to test devices.', vi: 'Xin lỗi vì tớ ngắt lời, nhưng tớ nghĩ chúng ta nên gặp lúc 9 giờ sáng để kiểm tra thiết bị.' }
      ]
    },
    quizQuestions: [
      {
        id: 'q10-1',
        unitId: 10,
        question: 'Jack is a cousin of ________.',
        options: ['A. my', 'B. mine', 'C. me', 'D. I'],
        correctAnswerIndex: 1,
        explanationVi: 'Cấu trúc sở hữu kép: "a cousin of mine" (một người em họ của tôi).',
        type: 'grammar'
      },
      {
        id: 'q10-2',
        unitId: 10,
        question: 'Smartphones will change completely ________ 10 years.',
        options: ['A. for', 'B. in', 'C. by', 'D. on'],
        correctAnswerIndex: 1,
        explanationVi: '"in + khoảng thời gian" diễn tả một sự việc sẽ xảy ra trong bao lâu nữa trong tương lai (in 10 years: trong 10 năm nữa).',
        type: 'grammar'
      }
    ],
    sentencePuzzles: [
      {
        scrambled: ['friend', 'is', 'a', 'mine.', 'of', 'She'],
        correct: 'She is a friend of mine.',
        translationVi: 'Cô ấy là một người bạn của tôi.',
        hint: 'Đại từ sở hữu sau of'
      }
    ]
  },
  {
    id: 11,
    title: 'Unit 11: Science and Technology',
    englishTitle: 'Science and Technology',
    theme: 'Visions of the Future',
    description: 'Khoa học kỹ thuật: kính áp tròng 3D, giáo viên robot, công nghệ sinh trắc học (biometrics) và Câu gián tiếp dạng trần thuật (Reported speech statements).',
    vocabulary: [
      {
        id: 'u11-1',
        unitId: 11,
        word: 'biometric',
        phonetic: '/ˌbaɪəʊˈmetrɪk/',
        partOfSpeech: 'adjective',
        meaningVi: 'thuộc về sinh trắc học (vân tay, mống mắt, nhận diện mặt)',
        exampleEn: 'Schools can use biometric applications like fingerprint scanners to check attendance.',
        exampleVi: 'Các trường học có thể dùng ứng dụng sinh trắc học như máy quét vân tay để điểm danh.',
        category: 'vocabulary'
      },
      {
        id: 'u11-2',
        unitId: 11,
        word: 'eye-tracking',
        phonetic: '/ˈaɪ ˌtrækɪŋ/',
        partOfSpeech: 'noun',
        meaningVi: 'công nghệ theo dõi cử động mắt',
        exampleEn: 'Teachers can use eye-tracking applications to check students’ understanding.',
        exampleVi: 'Giáo viên có thể dùng ứng dụng theo dõi mắt để kiểm tra mức độ hiểu bài của học sinh.',
        category: 'vocabulary'
      },
      {
        id: 'u11-3',
        unitId: 11,
        word: 'nanolearning',
        phonetic: '/ˈnænəʊˌlɜːnɪŋ/',
        partOfSpeech: 'noun',
        meaningVi: 'phương pháp học vi mô (học từng mẩu nhỏ 2-5 phút)',
        exampleEn: 'Nanolearning provides students with small bits of information to increase attention.',
        exampleVi: 'Nanolearning cung cấp từng lượng thông tin nhỏ giúp nâng cao sự tập trung của học sinh.',
        category: 'vocabulary'
      },
      {
        id: 'u11-4',
        unitId: 11,
        word: 'breakout room',
        phonetic: '/ˈbreɪkaʊt ruːm/',
        partOfSpeech: 'noun',
        meaningVi: 'phòng học chia nhỏ trực tuyến để thảo luận nhóm',
        exampleEn: 'During our online lesson, the teacher puts us into breakout rooms for discussion.',
        exampleVi: 'Trong tiết học online, thầy giáo chia chúng tôi vào các phòng nhỏ để thảo luận.',
        category: 'vocabulary'
      }
    ],
    grammar: [
      {
        title: 'Câu gián tiếp dạng câu trần thuật (Reported Speech - Statements)',
        formula: 'S + said (that) / told + O + (that) + S + V(lùi thì)',
        explanation: 'Khi chuyển từ câu trực tiếp sang gián tiếp, ta lùi 1 thì (Hiện tại đơn -> Quá khứ đơn; Hiện tại tiếp diễn -> Quá khứ tiếp diễn; will -> would; can -> could), đổi đại từ nhân xưng và đổi trạng từ thời gian/nơi chốn (now -> then, today -> that day, tomorrow -> the following day, here -> there).',
        examples: [
          { en: 'Direct: "I want a new computer," Mi said.\nReported: Mi said that she wanted a new computer.', vi: 'Mi nói rằng bạn ấy muốn một chiếc máy tính mới.' },
          { en: 'Direct: "We will live much longer," said the scientist.\nReported: The scientist said that they would live much longer.', vi: 'Nhà khoa học nói rằng họ sẽ sống thọ hơn nhiều.' }
        ]
      }
    ],
    pronunciation: {
      title: 'Trọng âm câu (Sentence Stress)',
      description: 'Trong tiếng Anh, các từ mang nội dung chính (danh từ, động từ chính, tính từ, trạng từ) được nhấn trọng âm. Các từ chức năng (đại từ, mạo từ, giới từ) thường không nhấn.',
      pairs: {
        sound1: 'Từ mang nội dung',
        words1: ['SCIENCE', 'STUDENTS', 'LEARN', 'IMPORTANT'],
        sound2: 'Từ chức năng',
        words2: ['to', 'the', 'is', 'a', 'can']
      },
      examples: [
        'How IMPORTANT is SCIENCE to STUDENTS?',
        'Did he BUY a NEW SMARTPHONE yesterday? - NO, he DIDN’T.'
      ]
    },
    communication: {
      situation: 'Báo tin vui và chúc mừng (Giving & Responding to good news)',
      expressions: [
        { en: 'Great news for us!', vi: 'Tin tuyệt vời cho chúng mình đây!' },
        { en: 'Congratulations!', vi: 'Xin chúc mừng bạn!' }
      ],
      sampleDialogue: [
        { speaker: 'Nick', text: 'I won first prize in the science contest and got a tablet!', vi: 'Tớ vừa giành giải nhất cuộc thi khoa học và được thưởng một chiếc máy tính bảng!' },
        { speaker: 'Mi', text: 'Congratulations!', vi: 'Chúc mừng cậu nhé!' }
      ]
    },
    quizQuestions: [
      {
        id: 'q11-1',
        unitId: 11,
        question: '"I will take an online course," Nam said. -> Nam said that he ________ an online course.',
        options: ['A. will take', 'B. would take', 'C. takes', 'D. took'],
        correctAnswerIndex: 1,
        explanationVi: 'Lùi thì từ "will" thành "would" trong câu tường thuật gián tiếp.',
        type: 'grammar'
      },
      {
        id: 'q11-2',
        unitId: 11,
        question: 'Thomas Edison ________ the light bulb in 1880.',
        options: ['A. invented', 'B. discovered', 'C. created', 'D. developed'],
        correctAnswerIndex: 0,
        explanationVi: '"invented" nghĩa là phát minh ra một thiết bị mới chưa từng có trước đó (bóng đèn điện).',
        type: 'vocabulary'
      }
    ],
    sentencePuzzles: [
      {
        scrambled: ['said', 'Tom', 'he', 'that', 'would', 'the', 'join', 'club.'],
        correct: 'Tom said that he would join the club.',
        translationVi: 'Tom nói rằng bạn ấy sẽ tham gia câu lạc bộ.',
        hint: 'Câu gián tiếp với said that'
      }
    ]
  },
  {
    id: 12,
    title: 'Unit 12: Life on Other Planets',
    englishTitle: 'Life on Other Planets',
    theme: 'Visions of the Future',
    description: 'Sự sống ngoài hành tinh, hệ mặt trời, UFO, người ngoài hành tinh và Câu gián tiếp dạng câu hỏi (Reported speech questions).',
    vocabulary: [
      {
        id: 'u12-1',
        unitId: 12,
        word: 'habitable',
        phonetic: '/ˈhæbɪtəbl/',
        partOfSpeech: 'adjective',
        meaningVi: 'có thể sinh sống được (hành tinh có điều kiện sống)',
        exampleEn: 'Scientists are looking for habitable planets with liquid water and gravity.',
        exampleVi: 'Các nhà khoa học đang tìm kiếm những hành tinh có thể ở được có nước lỏng và trọng lực.',
        category: 'vocabulary'
      },
      {
        id: 'u12-2',
        unitId: 12,
        word: 'crater',
        phonetic: '/ˈkreɪtə(r)/',
        partOfSpeech: 'noun',
        meaningVi: 'miệng núi lửa, hố va chạm thiên thạch',
        exampleEn: 'There are many craters on the surface of the moon.',
        exampleVi: 'Có rất nhiều hố va chạm trên bề mặt của mặt trăng.',
        category: 'vocabulary'
      },
      {
        id: 'u12-3',
        unitId: 12,
        word: 'gravity',
        phonetic: '/ˈɡrævəti/',
        partOfSpeech: 'noun',
        meaningVi: 'trọng lực, lực hút của hành tinh',
        exampleEn: 'If a planet’s gravity is strong enough, it can hold an atmosphere around it.',
        exampleVi: 'Nếu trọng lực của một hành tinh đủ mạnh, nó có thể giữ bầu khí quyển xung quanh.',
        category: 'vocabulary'
      },
      {
        id: 'u12-4',
        unitId: 12,
        word: 'galaxy',
        phonetic: '/ˈɡæləksi/',
        partOfSpeech: 'noun',
        meaningVi: 'thiên hà',
        exampleEn: 'The Milky Way is the galaxy that includes our solar system.',
        exampleVi: 'Dải Ngân Hà là thiên hà bao gồm cả hệ mặt trời của chúng ta.',
        category: 'vocabulary'
      },
      {
        id: 'u12-5',
        unitId: 12,
        word: 'creature',
        phonetic: '/ˈkriːtʃə(r)/',
        partOfSpeech: 'noun',
        meaningVi: 'sinh vật, loài vật',
        exampleEn: 'Do you believe imaginary creatures are living on another planet?',
        exampleVi: 'Bạn có tin rằng các sinh vật tưởng tượng đang sinh sống ở một hành tinh khác không?',
        category: 'vocabulary'
      }
    ],
    grammar: [
      {
        title: 'Câu gián tiếp dạng câu hỏi (Reported Speech - Questions)',
        formula: 'Yes/No: S + asked / wondered + if / whether + S + V(lùi thì)\nWh-question: S + asked / wondered + Wh-word + S + V(lùi thì)',
        explanation: 'Khi tường thuật câu hỏi: KHÔNG dùng trợ động từ do/does/did; trật tự từ đổi về dạng trần thuật (Chủ ngữ đứng trước Động từ); bỏ dấu chấm hỏi (?).',
        examples: [
          { en: 'Direct: "What are you doing now?" she asked me.\nReported: She asked me what I was doing then.', vi: 'Cô ấy hỏi tôi lúc đó tôi đang làm gì.' },
          { en: 'Direct: "Do you like space books?" he asked.\nReported: He asked if I liked space books.', vi: 'Cậu ấy hỏi liệu tôi có thích sách vũ trụ không.' }
        ],
        note: 'Ghi nhớ: Trong câu hỏi gián tiếp, chủ ngữ đứng TRƯỚC động từ, không đảo trợ động từ lên trước!'
      }
    ],
    pronunciation: {
      title: 'Ngữ điệu khi liệt kê danh sách (Intonation for making lists)',
      description: 'Khi liệt kê các mục, giọng nói hơi lên giọng (rise ↗) ở các mục phía trước, và hạ giọng (fall ↘) ở mục cuối cùng.',
      pairs: {
        sound1: 'Lên giọng ↗',
        words1: ['Mercury ↗', 'Venus ↗', 'Earth ↗'],
        sound2: 'Hạ giọng ↘',
        words2: ['and Mars ↘']
      },
      examples: [
        'We’ve got bananas ↗, apples ↗, pears ↗, and oranges ↘.',
        'I’d like some pork ↗, some chicken ↗, some tofu ↗, and some vegetables ↘.'
      ]
    },
    communication: {
      situation: 'Bày tỏ sự không chắc chắn (Expressing uncertainty)',
      expressions: [
        { en: "I'm not sure about it.", vi: 'Mình không chắc lắm về điều đó.' },
        { en: 'I doubt it.', vi: 'Mình nghi ngờ điều đó / Mình e là không phải.' }
      ],
      sampleDialogue: [
        { speaker: 'Nick', text: 'Do you think Mars may support life?', vi: 'Cậu có nghĩ sao Hỏa có thể hỗ trợ sự sống không?' },
        { speaker: 'Mark', text: "I'm not sure about it. Scientists are still searching.", vi: 'Tớ không chắc lắm. Các nhà khoa học vẫn đang tìm kiếm.' }
      ]
    },
    quizQuestions: [
      {
        id: 'q12-1',
        unitId: 12,
        question: 'She asked me what I ________ then.',
        options: ['A. was doing', 'B. am doing', 'C. did I do', 'D. were doing'],
        correctAnswerIndex: 0,
        explanationVi: 'Câu hỏi gián tiếp có từ để hỏi: Wh-word + S + V(lùi thì) -> "what I was doing".',
        type: 'grammar'
      },
      {
        id: 'q12-2',
        unitId: 12,
        question: 'He wanted to know how many planets ________ in our solar system.',
        options: ['A. were there', 'B. there were', 'C. are there', 'D. there are'],
        correctAnswerIndex: 1,
        explanationVi: 'Trật tự câu hỏi gián tiếp không đảo ngữ: "there were" (chủ ngữ there đứng trước were).',
        type: 'grammar'
      },
      {
        id: 'q12-3',
        unitId: 12,
        question: 'A planet needs to have liquid water and sufficient ________ to be habitable.',
        options: ['A. gravity', 'B. UFO', 'C. crater', 'D. alien'],
        correctAnswerIndex: 0,
        explanationVi: 'Hành tinh cần có nước lỏng và trọng lực (gravity) đủ lớn để giữ bầu khí quyển và duy trì sự sống.',
        type: 'vocabulary'
      }
    ],
    sentencePuzzles: [
      {
        scrambled: ['me', 'what', 'asked', 'doing.', 'was', 'She', 'I'],
        correct: 'She asked me what I was doing.',
        translationVi: 'Cô ấy hỏi tôi đang làm gì.',
        hint: 'Câu hỏi gián tiếp trật tự S + V'
      }
    ]
  }
];

export const ALL_FLASHCARDS = UNITS_DATA.flatMap(u => u.vocabulary);

export const REVIEW_EXAMS: ReviewExam[] = [
  {
    id: 'rev-1',
    title: 'Review 1 (Units 1 - 2 - 3)',
    description: 'Đề ôn tập tổng hợp chuẩn 100% SGK Tiếng Anh 8 (Trang 38 & 39): Phát âm, Từ vựng, Ngữ pháp và Đọc hiểu.',
    unitIds: [1, 2, 3],
    questions: [
      {
        id: 'rev1-1',
        unitId: 1,
        question: 'Pronunciation: Circle the word whose underlined part is pronounced differently: A. good | B. cool | C. foot | D. cook',
        options: ['A. good', 'B. cool', 'C. foot', 'D. cook'],
        correctAnswerIndex: 1,
        explanationVi: '"cool" phát âm là /uː/, trong khi good, foot, cook đều phát âm là /ʊ/ (Bài 1 trang 38 SGK).',
        type: 'pronunciation'
      },
      {
        id: 'rev1-2',
        unitId: 1,
        question: 'Pronunciation: Circle the word whose underlined part is pronounced differently: A. June | B. rude | C. truth | D. put',
        options: ['A. June', 'B. rude', 'C. truth', 'D. put'],
        correctAnswerIndex: 3,
        explanationVi: '"put" phát âm là /ʊ/, trong khi June, rude, truth đều phát âm là /uː/ (Bài 1 trang 38 SGK).',
        type: 'pronunciation'
      },
      {
        id: 'rev1-3',
        unitId: 2,
        question: 'Pronunciation: Circle the word whose underlined part is pronounced differently: A. village | B. buffalo | C. cottage | D. shortage',
        options: ['A. village', 'B. buffalo', 'C. cottage', 'D. shortage'],
        correctAnswerIndex: 1,
        explanationVi: '"buffalo" chứa âm /ə/, trong khi village, cottage, shortage đều có âm /ɪ/ ở đuôi -age (Bài 1 trang 38 SGK).',
        type: 'pronunciation'
      },
      {
        id: 'rev1-4',
        unitId: 3,
        question: 'Pronunciation: Circle the word whose underlined part is pronounced differently: A. ensure | B. insure | C. picture | D. surely',
        options: ['A. ensure', 'B. insure', 'C. picture', 'D. surely'],
        correctAnswerIndex: 2,
        explanationVi: '"picture" phát âm là /tʃ/ (/ˈpɪktʃə/), trong khi ensure, insure, surely đều phát âm là /ʃ/ (Bài 1 trang 38 SGK).',
        type: 'pronunciation'
      },
      {
        id: 'rev1-5',
        unitId: 3,
        question: 'Pronunciation: Circle the word whose underlined part is pronounced differently: A. avoid | B. doing | C. choice | D. join',
        options: ['A. avoid', 'B. doing', 'C. choice', 'D. join'],
        correctAnswerIndex: 1,
        explanationVi: '"doing" chứa âm /uː/ (/ˈduːɪŋ/), trong khi avoid, choice, join đều chứa âm /ɔɪ/ (Bài 1 trang 38 SGK).',
        type: 'pronunciation'
      },
      {
        id: 'rev1-6',
        unitId: 1,
        question: 'Mi is ________ gardening in her free time.',
        options: ['A. in', 'B. into', 'C. to', 'D. at'],
        correctAnswerIndex: 1,
        explanationVi: 'Cụm từ "be into sth" nghĩa là rất thích, đam mê điều gì (Bài 2 trang 38 SGK).',
        type: 'vocabulary'
      },
      {
        id: 'rev1-7',
        unitId: 1,
        question: 'Mai is interested ________ building websites for her friends.',
        options: ['A. of', 'B. with', 'C. in', 'D. on'],
        correctAnswerIndex: 2,
        explanationVi: 'Cấu trúc "be interested in + V-ing" (Bài 2 trang 38 SGK).',
        type: 'vocabulary'
      },
      {
        id: 'rev1-8',
        unitId: 1,
        question: 'Minh is not fond of ________ puzzles because he thinks it takes a lot of time.',
        options: ['A. making', 'B. doing', 'C. building', 'D. playing'],
        correctAnswerIndex: 1,
        explanationVi: 'Cụm từ cố định: "do puzzles" (giải câu đố) (Bài 2 trang 38 SGK).',
        type: 'vocabulary'
      },
      {
        id: 'rev1-9',
        unitId: 3,
        question: "I'm not keen on ________ our class photos to the forum.",
        options: ['A. uploading', 'B. surfing', 'C. messaging', 'D. taking'],
        correctAnswerIndex: 0,
        explanationVi: 'Cụm từ: "upload photos to the forum" (đăng ảnh lên diễn đàn) (Bài 2 trang 38 SGK).',
        type: 'vocabulary'
      },
      {
        id: 'rev1-10',
        unitId: 3,
        question: 'While I was ________ some websites, I saw an advertisement about a resort.',
        options: ['A. creating', 'B. browsing', 'C. uploading', 'D. doing'],
        correctAnswerIndex: 1,
        explanationVi: '"browse websites" = lướt xem các trang web (Bài 2 trang 38 SGK).',
        type: 'vocabulary'
      },
      {
        id: 'rev1-11',
        unitId: 2,
        question: 'People in my village are very ________ to all visitors.',
        options: ['A. hospitable', 'B. bully', 'C. trained', 'D. pressure'],
        correctAnswerIndex: 0,
        explanationVi: '"hospitable" = hiếu khách, thân thiện tiếp đón khách (Bài 3 trang 38 SGK).',
        type: 'vocabulary'
      },
      {
        id: 'rev1-12',
        unitId: 3,
        question: "Parents in our village don't put much ________ on their children to do well at school.",
        options: ['A. focus', 'B. pressure', 'C. bully', 'D. trained'],
        correctAnswerIndex: 1,
        explanationVi: '"put pressure on sb" = đặt áp lực lên ai đó (Bài 3 trang 38 SGK).',
        type: 'vocabulary'
      },
      {
        id: 'rev1-13',
        unitId: 3,
        question: 'In my school, we can ________ on study and play, and do not have to worry about bullies.',
        options: ['A. focus', 'B. pressure', 'C. trained', 'D. browse'],
        correctAnswerIndex: 0,
        explanationVi: '"focus on" = tập trung vào điều gì (Bài 3 trang 38 SGK).',
        type: 'vocabulary'
      },
      {
        id: 'rev1-14',
        unitId: 1,
        question: 'Mai dislikes ________ her pictures to Facebook. She prefers not to show them to others.',
        options: ['A. to upload', 'B. uploading', 'C. upload', 'D. uploaded'],
        correctAnswerIndex: 1,
        explanationVi: 'Động từ chỉ sự không thích "dislike + V-ing" (Bài 4 trang 38 SGK).',
        type: 'grammar'
      },
      {
        id: 'rev1-15',
        unitId: 2,
        question: 'She did the puzzles ________ than I did, so I won the competition.',
        options: ['A. slowly', 'B. slower', 'C. more slowly', 'D. most slowly'],
        correctAnswerIndex: 2,
        explanationVi: 'So sánh hơn của trạng từ dài "slowly" là "more slowly than" (Bài 4 trang 38 SGK).',
        type: 'grammar'
      },
      {
        id: 'rev1-16',
        unitId: 2,
        question: 'Tom worked ________ than Mi; therefore, he got better results in the exams.',
        options: ['A. hardly', 'B. harder', 'C. more hard', 'D. more hardly'],
        correctAnswerIndex: 1,
        explanationVi: 'So sánh hơn của trạng từ ngắn "hard" là "harder" (Bài 4 trang 38 SGK).',
        type: 'grammar'
      },
      {
        id: 'rev1-17',
        unitId: 3,
        question: 'Minh is interested in painting, ________ yesterday he decided to join the arts and crafts club.',
        options: ['A. so', 'B. but', 'C. otherwise', 'D. however'],
        correctAnswerIndex: 0,
        explanationVi: 'Liên từ "so" diễn tả kết quả: vì thích vẽ tranh nên đã tham gia CLB (Bài 5 trang 38 SGK).',
        type: 'grammar'
      },
      {
        id: 'rev1-18',
        unitId: 3,
        question: "She tries to focus more on her studies; ________, she won't pass her exams.",
        options: ['A. therefore', 'B. otherwise', 'C. but', 'D. so'],
        correctAnswerIndex: 1,
        explanationVi: '"otherwise" = nếu không thì (cố gắng học, nếu không sẽ trượt kỳ thi) (Bài 5 trang 38 SGK).',
        type: 'grammar'
      },
      {
        id: 'rev1-19',
        unitId: 3,
        question: 'Reading passage: How many hours of sleep a day do teens need to manage stress?',
        options: ['A. 6 to 8 hours', 'B. 7 to 9 hours', 'C. 8 to 10 hours', 'D. 10 to 12 hours'],
        correctAnswerIndex: 2,
        explanationVi: 'Theo bài đọc SGK trang 39: "Teens need eight to ten hours of sleep a day".',
        type: 'reading'
      },
      {
        id: 'rev1-20',
        unitId: 3,
        question: 'Reading passage: How much time should teens spend on daily exercise?',
        options: ['A. At least an hour (60 minutes)', 'B. Exactly 30 minutes', 'C. No more than 45 minutes', 'D. 2 hours'],
        correctAnswerIndex: 0,
        explanationVi: 'Theo bài đọc SGK trang 39: "You should exercise for at least 60 minutes a day" = At least an hour.',
        type: 'reading'
      }
    ]
  },
  {
    id: 'rev-2',
    title: 'Review 2 (Units 4 - 5 - 6)',
    description: 'Đề ôn tập tổng hợp chuẩn SGK Tiếng Anh 8 (Trang 70 - 71) về Dân tộc Việt Nam, Phong tục tập quán và Phong cách sống.',
    unitIds: [4, 5, 6],
    questions: [
      {
        id: 'rev2-1',
        unitId: 4,
        question: 'Which word has the underlined "c" pronounced differently from the others?',
        options: ['A. culture', 'B. community', 'C. circle', 'D. custom'],
        correctAnswerIndex: 2,
        explanationVi: '"circle" có chữ c phát âm là /s/ (/ˈsɜːkl/), các từ còn lại đều phát âm là /k/ (Bài 1 trang 70 SGK).',
        type: 'pronunciation'
      },
      {
        id: 'rev2-2',
        unitId: 5,
        question: 'Which word has the underlined "n" pronounced differently from the others?',
        options: ['A. identify', 'B. thank', 'C. dance', 'D. plan'],
        correctAnswerIndex: 1,
        explanationVi: '"thank" có chữ n đứng trước k nên phát âm là âm ngạc mềm /ŋ/ (/θæŋk/), các từ còn lại phát âm là /n/ (Bài 1 trang 70 SGK).',
        type: 'pronunciation'
      },
      {
        id: 'rev2-3',
        unitId: 5,
        question: 'Which word has the underlined part pronounced differently from the others?',
        options: ['A. bring', 'B. sing', 'C. spring', 'D. longevity'],
        correctAnswerIndex: 3,
        explanationVi: '"longevity" phát âm là /n/ (/lɒnˈdʒevəti/), các từ còn lại đều có âm ngạc mềm /ŋ/ (Bài 1 trang 70 SGK).',
        type: 'pronunciation'
      },
      {
        id: 'rev2-4',
        unitId: 4,
        question: 'Which word has the underlined "g" pronounced differently from the others?',
        options: ['A. figure', 'B. danger', 'C. engine', 'D. change'],
        correctAnswerIndex: 0,
        explanationVi: '"figure" có âm /g/ (/ˈfɪɡə/), các từ còn lại đều phát âm là /dʒ/ (Bài 1 trang 70 SGK).',
        type: 'pronunciation'
      },
      {
        id: 'rev2-5',
        unitId: 4,
        question: 'Which word has the underlined "g" pronounced differently from the others?',
        options: ['A. growth', 'B. globe', 'C. ground', 'D. gender'],
        correctAnswerIndex: 3,
        explanationVi: '"gender" phát âm là /dʒ/ (/ˈdʒendə/), các từ còn lại đều phát âm là /g/ (Bài 1 trang 70 SGK).',
        type: 'pronunciation'
      },
      {
        id: 'rev2-6',
        unitId: 4,
        question: 'Match the verb with its suitable noun: Tribal women know how to "weave ________".',
        options: ['A. clothing', 'B. crops', 'C. bad spirits', 'D. terraced fields'],
        correctAnswerIndex: 0,
        explanationVi: 'Cụm từ "weave clothing" = dệt vải may quần áo (Bài 2 trang 70 SGK).',
        type: 'vocabulary'
      },
      {
        id: 'rev2-7',
        unitId: 5,
        question: 'People put up a tall bamboo pole to "chase away ________".',
        options: ['A. bad spirits', 'B. crops', 'C. clothing', 'D. terraced fields'],
        correctAnswerIndex: 0,
        explanationVi: 'Cụm từ "chase away bad spirits" = xua đuổi tà ma xui xẻo (Bài 2 trang 70 SGK).',
        type: 'vocabulary'
      },
      {
        id: 'rev2-8',
        unitId: 4,
        question: 'Farmers in the mountains work hard to "harvest ________" in autumn.',
        options: ['A. crafts', 'B. crops', 'C. bad spirits', 'D. clothing'],
        correctAnswerIndex: 1,
        explanationVi: 'Cụm từ "harvest crops" = thu hoạch hoa màu mùa màng (Bài 2 trang 70 SGK).',
        type: 'vocabulary'
      },
      {
        id: 'rev2-9',
        unitId: 4,
        question: 'Their homestay house has a scenic balcony that "overlooks ________".',
        options: ['A. bad spirits', 'B. crafts', 'C. terraced fields', 'D. clothing'],
        correctAnswerIndex: 2,
        explanationVi: 'Cụm từ "overlook terraced fields" = nhìn ra những thửa ruộng bậc thang tuyệt đẹp (Bài 2 trang 70 SGK).',
        type: 'vocabulary'
      },
      {
        id: 'rev2-10',
        unitId: 4,
        question: 'Ethnic minority girls wear a lot of beautiful ________ on special occasions.',
        options: ['A. lifestyles', 'B. decorative items', 'C. habits', 'D. minority groups'],
        correctAnswerIndex: 1,
        explanationVi: '"decorative items" = đồ trang sức, vật dụng trang trí (Bài 3 trang 70 SGK).',
        type: 'vocabulary'
      },
      {
        id: 'rev2-11',
        unitId: 4,
        question: 'The Bahnar is a large ethnic ________ living in the Central Highlands of Viet Nam.',
        options: ['A. habit', 'B. lifestyle', 'C. minority group', 'D. festival'],
        correctAnswerIndex: 2,
        explanationVi: '"minority group" = nhóm dân tộc thiểu số (Bài 3 trang 70 SGK).',
        type: 'vocabulary'
      },
      {
        id: 'rev2-12',
        unitId: 5,
        question: 'Tet is coming. I see ________ flowers and ornamental trees everywhere.',
        options: ['A. a', 'B. the', 'C. Ø (zero article)'],
        correctAnswerIndex: 2,
        explanationVi: '"flowers and ornamental trees" là danh từ số nhiều mang nghĩa chung, áp dụng quy tắc Zero article (Bài 4 trang 70 SGK).',
        type: 'grammar'
      },
      {
        id: 'rev2-13',
        unitId: 5,
        question: 'Bat Trang Village is famous for ________ traditional craft of pottery making.',
        options: ['A. a', 'B. the', 'C. Ø (zero article)'],
        correctAnswerIndex: 1,
        explanationVi: 'Nghề thủ công truyền thống đã được xác định cụ thể bằng vế "of pottery making", do đó dùng mạo từ xác định "the" (Bài 4 trang 70 SGK).',
        type: 'grammar'
      },
      {
        id: 'rev2-14',
        unitId: 6,
        question: '- Hi, Trang. ________ are things in Hue? - Everything’s great. The weather’s fantastic.',
        options: ['A. How', 'B. What', 'C. Where'],
        correctAnswerIndex: 0,
        explanationVi: 'Cụm câu hỏi thăm tình hình quen thuộc: "How are things...?" (Dạo này mọi việc thế nào?) (Bài 4 trang 70 SGK).',
        type: 'communication'
      },
      {
        id: 'rev2-15',
        unitId: 4,
        question: 'I’m searching for ________ information about the lifestyle of the Van Kieu.',
        options: ['A. some', 'B. many', 'C. an'],
        correctAnswerIndex: 0,
        explanationVi: '"information" là danh từ không đếm được, dùng lượng từ "some" (Bài 4 trang 70 SGK).',
        type: 'grammar'
      },
      {
        id: 'rev2-16',
        unitId: 6,
        question: 'Next year we ________ a house overlooking the lake.',
        options: ['A. build', 'B. will build', 'C. built'],
        correctAnswerIndex: 1,
        explanationVi: 'Dấu hiệu thời gian trong tương lai "Next year" -> Chia thì Tương lai đơn: will build (Bài 5 trang 70 SGK).',
        type: 'grammar'
      },
      {
        id: 'rev2-17',
        unitId: 6,
        question: 'If you have a chance to travel on a dogsled, you ________ it.',
        options: ['A. will never forget', 'B. never forget', 'C. forgot'],
        correctAnswerIndex: 0,
        explanationVi: 'Câu điều kiện loại 1: Mệnh đề if hiện tại đơn (have) -> Mệnh đề chính will + V (will never forget) (Bài 5 trang 70 SGK).',
        type: 'grammar'
      },
      {
        id: 'rev2-18',
        unitId: 6,
        question: 'Unless you try, you ________ if you can play football.',
        options: ['A. will never know', 'B. never know', 'C. knew'],
        correctAnswerIndex: 0,
        explanationVi: 'Câu điều kiện với Unless loại 1: Mệnh đề chính dùng "will never know" (Bài 5 trang 70 SGK).',
        type: 'grammar'
      },
      {
        id: 'rev2-19',
        unitId: 4,
        question: 'Spring Fair Reading: Ann wants to take her children out to play folk games. Which event should she attend?',
        options: ['A. Ethnic Markets', 'B. Childhood Fun', 'C. Photo Exhibition', 'D. A Pottery Village'],
        correctAnswerIndex: 1,
        explanationVi: 'Sự kiện "Childhood Fun" (Vui chơi tuổi thơ) tổ chức các trò chơi dân gian và làm thủ công cho trẻ em (Bài 1 trang 71 SGK).',
        type: 'reading'
      },
      {
        id: 'rev2-20',
        unitId: 4,
        question: 'Spring Fair Reading: Which event features Bau Truc artisans demonstrating their pottery craft?',
        options: ['A. A Pottery Village', 'B. Performances', 'C. Childhood Fun', 'D. Ethnic Markets'],
        correctAnswerIndex: 0,
        explanationVi: 'Sự kiện "A Pottery Village" (Làng gốm) giới thiệu kỹ thuật làm gốm của các nghệ nhân làng Bàu Trúc (Bài 1 trang 71 SGK).',
        type: 'reading'
      }
    ]
  },
  {
    id: 'rev-3',
    title: 'Review 3 (Units 7 - 8 - 9)',
    description: 'Đề ôn tập tổng hợp về Bảo vệ môi trường, Mua sắm và Thiên tai hiểm họa.',
    unitIds: [7, 8, 9],
    questions: [
      ...UNITS_DATA[6].quizQuestions,
      ...UNITS_DATA[7].quizQuestions,
      ...UNITS_DATA[8].quizQuestions
    ]
  },
  {
    id: 'rev-4',
    title: 'Review 4 (Units 10 - 11 - 12)',
    description: 'Đề ôn tập tổng hợp về Giao tiếp tương lai, Khoa học công nghệ và Sự sống ngoài hành tinh.',
    unitIds: [10, 11, 12],
    questions: [
      ...UNITS_DATA[9].quizQuestions,
      ...UNITS_DATA[10].quizQuestions,
      ...UNITS_DATA[11].quizQuestions
    ]
  }
];
