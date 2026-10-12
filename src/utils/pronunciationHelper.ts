/**
 * Pronunciation & Reading Tips Helper
 * Hỗ trợ phiên âm IPA, gợi ý cách đọc tiếng Việt dễ hiểu và mẹo nhấn trọng âm cho học sinh.
 */

// Bảng từ điển gợi ý cách đọc chuẩn Việt hóa bám sát SGK Tiếng Anh 8 Global Success
export const CURATED_READING_TIPS: Record<string, string> = {
  // UNIT 1: Leisure Time
  'origami': '🗣️ Đọc: [ô-ri-GA-mi] • Nhấn âm 3 GA, âm g đọc rõ.',
  'diy (do-it-yourself)': '🗣️ Đọc: [Đi - Ai - Oai] • Đọc từng chữ cái D-I-Y.',
  'fond of': '🗣️ Đọc: [PHON-đơv] • Nhấn PHON, nối âm /d/ sang /əv/.',
  'keen on': '🗣️ Đọc: [KIN-on] • Nhấn KIN (i kéo dài), nối n sang on.',
  'crazy about': '🗣️ Đọc: [CRÂY-zi ờ-bao-t] • Nhấn CRÂY, âm /z/ rung nhẹ.',
  'into': '🗣️ Đọc: [IN-tu] • Nhấn âm 1 IN, âm tu đọc nhẹ.',
  'interested in': '🗣️ Đọc: [IN-trơ-stịt in] • Nhấn IN, 3 âm tiết (không đọc te-re).',
  'leisure': '🗣️ Đọc: [LEI-zhờ] • Nhấn LEI, âm zh rung lưỡi nhẹ như gi.',
  'knitting': '🗣️ Đọc: [NÍT-ting] • Âm k câm, chỉ đọc NÍT.',
  'beading': '🗣️ Đọc: [BI-đing] • Nhấn BI (i kéo dài), âm đing đọc lướt.',
  'snowboarding': '🗣️ Đọc: [SNÔU-bót-đing] • Nhấn SNÔU, s lướt nhẹ.',
  'relaxing': '🗣️ Đọc: [ri-LÁC-sing] • Nhấn LÁC, có âm s nhẹ ở cuối.',
  'satisfying': '🗣️ Đọc: [SE-tít-sfai-ing] • Nhấn SE, phát âm rõ 4 âm tiết.',
  'harmful': '🗣️ Đọc: [HAM-phu-l] • Nhấn HAM (a kéo dài), phu uốn môi.',
  'socialise': '🗣️ Đọc: [SÔU-shơ-laiz] • Nhấn SÔU, sh uốn lưỡi, đuôi z rung.',

  // UNIT 2: Life in the Countryside
  'harvest': '🗣️ Đọc: [HA-vịt-st] • Nhấn HA (a dài), đuôi st bật nhẹ.',
  'hospitable': '🗣️ Đọc: [hót-S-PI-tơ-bồ] • Nhấn PI, s gió nhẹ sau hót.',
  'vast': '🗣️ Đọc: [Va-st] • Âm a dài, nhớ bật âm đuôi st.',
  'picturesque': '🗣️ Đọc: [píc-chơ-RÉSC] • Nhấn mạnh âm cuối RÉSC.',
  'peaceful': '🗣️ Đọc: [PÍS-phu-l] • Nhấn PÍS (i dài), đuôi s rõ ràng.',
  'nomad': '🗣️ Đọc: [NÔU-mát-d] • Nhấn NÔU, đuôi d bật nhẹ.',
  'nomadic': '🗣️ Đọc: [nâu-ME-đích] • Nhấn ME (e bẹt mở rộng miệng).',
  'paddy field': '🗣️ Đọc: [PE-đi fild] • Nhấn PE, field kéo dài i.',
  'cattle': '🗣️ Đọc: [KÉT-tồ] • Nhấn KÉT, đuôi l uốn lưỡi.',
  'herder': '🗣️ Đọc: [HƠ-đờ] • Nhấn HƠ, âm ơ dài.',
  'combine harvester': '🗣️ Đọc: [CÓM-bain HA-vơ-stờ] • Nhấn CÓM và HA.',
  'canal': '🗣️ Đọc: [kơ-NEN-l] • Nhấn âm 2 NEN, âm 1 kơ nhẹ.',
  'cottage': '🗣️ Đọc: [CÓT-tịt-j] • Nhấn CÓT, đuôi j giật nhẹ cằm.',
  'orchard': '🗣️ Đọc: [Ó-chợt-d] • Nhấn Ó, ch đọc bật hơi.',
  'well-trained': '🗣️ Đọc: [Wel-TREIN-d] • Nhấn TREIN, đuôi d bật nhẹ.',

  // UNIT 3: Teenagers
  'bully': '🗣️ Đọc: [BU-li] • Nhấn BU, không đọc bâu.',
  'pressure': '🗣️ Đọc: [PRE-shờ] • Nhấn PRE, sh uốn lưỡi dày.',
  'browse': '🗣️ Đọc: [Brao-z] • Đọc vần ao, đuôi z rung nhẹ.',
  'forum': '🗣️ Đọc: [PHO-rờm] • Nhấn PHO (o dài), rờm đọc lướt.',
  'coach': '🗣️ Đọc: [CÔU-ch] • Vần ôu, đuôi ch bật hơi dứt khoát.',
  'tournament': '🗣️ Đọc: [TUA-nơ-mơnt] • Nhấn TUA, đuôi nt nhẹ.',
  'concentrate': '🗣️ Đọc: [CÓN-sừn-treit] • Nhấn CÓN, âm 3 treit.',
  'expectation': '🗣️ Đọc: [éc-spéc-TEI-shừn] • Nhấn TEI, sh uốn lưỡi.',
  'frustrated': '🗣️ Đọc: [phrơ-STREI-tịt-d] • Nhấn STREI, âm r rõ.',
  'midterm': '🗣️ Đọc: [MÍT-tơm] • Nhấn MÍT, tơm đọc ơ dài.',
  'schoolwork': '🗣️ Đọc: [SKU-l wớc] • Nhấn SKU (u dài), k bật nhẹ.',
  'confident': '🗣️ Đọc: [CÓN-phi-đừnt] • Nhấn CÓN, phi-đừnt lướt.',

  // UNIT 4: Ethnic Groups of Viet Nam
  'ethnic': '🗣️ Đọc: [ETH-ních] • Âm th đặt đầu lưỡi giữa 2 hàm răng.',
  'minority': '🗣️ Đọc: [mai-NO-rơ-ti] • Nhấn âm 2 NO, mai đọc lướt.',
  'stilt house': '🗣️ Đọc: [Stiu-t Hao-s] • Âm ilt đọc liu-t, house bật s.',
  'communal house': '🗣️ Đọc: [CÓM-yơ-nồ Hao-s] • Nhấn CÓM, yơ-nồ lướt.',
  'rong house': '🗣️ Đọc: [Rông Hao-s] • Nhà Rông Tây Nguyên.',
  'terraced fields': '🗣️ Đọc: [TE-rơ-st fild-z] • Nhấn TE, field kéo dài i.',
  'waterwheel': '🗣️ Đọc: [OA-tờ-huyl] • Nhấn OA, huyl uốn lưỡi l.',
  'gong': '🗣️ Đọc: [Gong] • Âm g rõ, đọc tròn miệng.',
  'costume': '🗣️ Đọc: [CÓS-tyum] • Nhấn CÓS, có âm s gió.',
  'weaving': '🗣️ Đọc: [UY-ving] • Nhấn UY (i dài), ving nhẹ.',
  'heritage': '🗣️ Đọc: [HE-ri-tịt-j] • Nhấn HE, đuôi j giật nhẹ.',
  'custom': '🗣️ Đọc: [CÁST-từm] • Nhấn CÁST, s gió rõ ràng.',
  'tradition': '🗣️ Đọc: [trơ-ĐÍ-shừn] • Nhấn ĐÍ, sh uốn lưỡi.',
  'open-air market': '🗣️ Đọc: [ÔU-pừn E MA-kịt] • Chợ phiên ngoài trời.',
  'bamboo': '🗣️ Đọc: [băm-BU] • Nhấn mạnh âm 2 BU (u dài).',

  // UNIT 5: Our Customs and Traditions
  'longevity party': '🗣️ Đọc: [lon-JE-vơ-ti PA-ti] • Nhấn JE và PA, Lễ mừng thọ.',
  'bamboo pole': '🗣️ Đọc: [băm-BU Pôu-l] • Cây nêu ngày Tết.',
  'ancestor': '🗣️ Đọc: [EN-sét-stờ] • Nhấn EN, s gió ở giữa.',
  'worship': '🗣️ Đọc: [UỚ-ship] • Nhấn UỚ (ơ dài), sh uốn lưỡi.',
  'whale festival': '🗣️ Đọc: [Uêi-l PHÉ-sti-vồ] • Lễ hội Nghinh Ông.',
  'table manners': '🗣️ Đọc: [TEI-bồ ME-nờ-z] • Phép lịch sự bàn ăn.',
  'host': '🗣️ Đọc: [Hôu-st] • Vần ôu, bật âm st dứt khoát.',
  'guest': '🗣️ Đọc: [Gét-st] • Bật âm st ở cuối.',
  'pray': '🗣️ Đọc: [Prei] • Chùm âm pr, vần ây.',
  'offering': '🗣️ Đọc: [Ó-phơ-ring] • Nhấn Ó, đồ cúng lễ vật.',
  'spirit': '🗣️ Đọc: [SPÍ-rịt] • Nhấn SPÍ, âm p rõ.',
  'respect': '🗣️ Đọc: [ri-SPÉC-t] • Nhấn SPÉC, kính trọng.',
  'elderly': '🗣️ Đọc: [ÉL-đơ-li] • Nhấn ÉL, người cao tuổi.',
  'elders': '🗣️ Đọc: [ÉL-đờ-z] • Nhấn ÉL, bậc bề trên.',
  'chase away': '🗣️ Đọc: [Chei-s ờ-UEI] • Nhấn UEI, xua đuổi.',

  // UNIT 6: Lifestyles
  'dogsled': '🗣️ Đọc: [ĐÓG-slét-d] • Nhấn ĐÓG, xe chó kéo.',
  'musher': '🗣️ Đọc: [MÁ-shờ] • Nhấn MÁ, người điều khiển xe trượt tuyết.',
  'street food': '🗣️ Đọc: [Stơ-rít Phút-d] • Âm i và u kéo dài.',
  'online learning': '🗣️ Đọc: [ÓN-lain LƠ-ning] • Học trực tuyến.',
  'serve': '🗣️ Đọc: [Sơ-v] • Âm ơ dài, đuôi v khép răng môi.',
  'bow': '🗣️ Đọc: [Bao] • Đọc như bao, cúi đầu chào.',
  'hongi': '🗣️ Đọc: [HÔNG-gi] • Nghi thức chào chạm mũi Maori.',
  'sawadee': '🗣️ Đọc: [sơ-oa-ĐI] • Nhấn ĐI, chào kiểu Thái.',
  'shaking hands': '🗣️ Đọc: [SHEI-king Hen-dz] • Bắt tay chào hỏi.',
  'leisurely coffee': '🗣️ Đọc: [LEI-zhơ-li CÓ-phi] • Uống cà phê thong thả.',
  'traditional cuisine': '🗣️ Đọc: [trơ-ĐÍ-shơ-nồ kwi-ZIN] • Ẩm thực truyền thống.',
  'curry': '🗣️ Đọc: [CỚ-ri] • Nhấn CỚ, món cà ri.',
  'maintain': '🗣️ Đọc: [mein-TEIN] • Nhấn TEIN, duy trì giữ gìn.',
  'preserve': '🗣️ Đọc: [pri-ZƠ-v] • Nhấn ZƠ, bảo tồn.',
  'iditarod trail': '🗣️ Đọc: [ai-ĐÍT-tơ-rọt Trei-l] • Đường đua trượt tuyết.',
  'independent': '🗣️ Đọc: [in-đi-PÉN-đừnt] • Nhấn PÉN, tự lập.',

  // REVIEWS & GENERAL VOCABULARY
  'habit': '🗣️ Đọc: [HE-bịt] • Nhấn HE (e bẹt), thói quen.',
  'lifestyle': '🗣️ Đọc: [LAI-ph-stai-l] • Nhấn LAI, phong cách sống.',
  'minority group': '🗣️ Đọc: [mai-NO-rơ-ti Grúp] • Nhấn NO, nhóm dân tộc.',
  'decorative items': '🗣️ Đọc: [ĐÉ-cơ-rơ-tiv AI-từm-z] • Đồ trang sức, trang trí.',
  'festivals': '🗣️ Đọc: [PHÉ-sti-vồ-z] • Nhấn PHÉ, các lễ hội.',
  'clothing': '🗣️ Đọc: [CLÔU-thing] • Nhấn CLÔU, th cắn nhẹ răng.',
  'crafts': '🗣️ Đọc: [Cráp-ft-s] • Đồ thủ công mỹ nghệ.',
  'crops': '🗣️ Đọc: [Cróp-s] • Hoa màu, mùa màng.',

  // Review 1 & 2 Phonetics & Vocabulary
  'culture': '🗣️ Đọc: [CÁL-chờ] • Nhấn CÁL, đuôi ch bật hơi • Nghĩa: Văn hóa.',
  'community': '🗣️ Đọc: [kơ-MIU-nơ-ti] • Nhấn MIU, 4 âm tiết • Nghĩa: Cộng đồng.',
  'circle': '🗣️ Đọc: [SƠ-kồ] • Âm c đọc là /s/, nhấn SƠ • Nghĩa: Vòng tròn, khoanh tròn.',
  'identify': '🗣️ Đọc: [ai-ĐEN-ti-phai] • Nhấn ĐEN, âm n rõ • Nghĩa: Nhận biết, nhận diện.',
  'thank': '🗣️ Đọc: [THENG-k] • Âm th cắn răng thổi gió, đuôi ngk • Nghĩa: Cảm ơn.',
  'dance': '🗣️ Đọc: [Đan-s] (UK) / [Đen-s] (US) • Bật âm đuôi s • Nghĩa: Điệu múa, khiêu vũ.',
  'plan': '🗣️ Đọc: [PLEN] • Âm e bẹt, âm n rõ • Nghĩa: Kế hoạch.',
  'bring': '🗣️ Đọc: [BRING] • Nhấn BRING, âm ng ngạc mềm • Nghĩa: Mang theo, đem lại.',
  'sing': '🗣️ Đọc: [SING] • Âm ng trong họng • Nghĩa: Hát ca.',
  'spring': '🗣️ Đọc: [SPRÍNG] • Bật sp rồi ring • Nghĩa: Mùa xuân.',
  'longevity': '🗣️ Đọc: [lon-JE-vơ-ti] • Nhấn JE, g đọc là /dʒ/ • Nghĩa: Tuổi thọ, mừng thọ.',
  'figure': '🗣️ Đọc: [PHÍ-gờ] • Nhấn PHÍ, g đọc là /g/ • Nghĩa: Nhân vật, hình dung.',
  'danger': '🗣️ Đọc: [ĐEIN-dʒờ] • Nhấn ĐEIN, g đọc là /dʒ/ • Nghĩa: Sự nguy hiểm.',
  'engine': '🗣️ Đọc: [ÉN-dʒɪn] • Nhấn ÉN, g đọc là /dʒ/ • Nghĩa: Động cơ, đầu máy.',
  'change': '🗣️ Đọc: [Tshein-dʒ] • Đầu ch, đuôi j giật nhẹ • Nghĩa: Thay đổi.',
  'growth': '🗣️ Đọc: [GRÔU-th] • Đầu gr, th cắn răng thổi gió • Nghĩa: Sự tăng trưởng.',
  'globe': '🗣️ Đọc: [GLÔU-b] • Đầu gl, đuôi b nhẹ • Nghĩa: Quả địa cầu, toàn cầu.',
  'ground': '🗣️ Đọc: [GRAO-n-d] • Vần ao, đuôi nd • Nghĩa: Mặt đất.',
  'gender': '🗣️ Đọc: [DʒÉN-đờ] • g đọc là /dʒ/, nhấn ÉN • Nghĩa: Giới tính.',

  // Review 1 Words
  'good': '🗣️ Đọc: [Gút-d] • Âm /ʊ/ ngắn tròn môi • Nghĩa: Tốt, hay.',
  'cool': '🗣️ Đọc: [Cu-l] • Âm /uː/ dài chu môi • Nghĩa: Mát mẻ, tuyệt vời.',
  'foot': '🗣️ Đọc: [Phút-t] • Âm /ʊ/ ngắn dứt khoát • Nghĩa: Bàn chân.',
  'cook': '🗣️ Đọc: [Cúc] • Âm /ʊ/ ngắn dứt khoát • Nghĩa: Nấu ăn, đầu bếp.',
  'june': '🗣️ Đọc: [Jun] • Âm /uː/ dài, j giật cằm • Nghĩa: Tháng Sáu.',
  'rude': '🗣️ Đọc: [Rút-d] • Âm /uː/ dài, d bật nhẹ • Nghĩa: Thô lỗ, bất lịch sự.',
  'truth': '🗣️ Đọc: [Tru-th] • Âm /uː/ dài, th cắn lưỡi • Nghĩa: Sự thật.',
  'put': '🗣️ Đọc: [Pút-t] • Âm /ʊ/ ngắn dứt khoát • Nghĩa: Đặt, để.',
  'village': '🗣️ Đọc: [VÍ-lit-j] • Nhấn VÍ, đuôi age đọc /ɪdʒ/ • Nghĩa: Ngôi làng.',
  'buffalo': '🗣️ Đọc: [BÁ-fơ-lôu] • Nhấn BÁ, chữ a đọc /ə/ • Nghĩa: Con trâu.',
  'shortage': '🗣️ Đọc: [SHÓ-tit-j] • Nhấn SHÓ, đuôi /ɪdʒ/ • Nghĩa: Sự thiếu hụt.',
  'ensure': '🗣️ Đọc: [in-SHUA] • Nhấn SHUA, s nặng uốn lưỡi • Nghĩa: Đảm bảo.',
  'insure': '🗣️ Đọc: [in-SHUA] • Nhấn SHUA, âm /ʃ/ • Nghĩa: Mua bảo hiểm.',
  'picture': '🗣️ Đọc: [PÍC-chờ] • Nhấn PÍC, đuôi ture đọc /tʃə/ • Nghĩa: Bức tranh.',
  'surely': '🗣️ Đọc: [SHUA-li] • Nhấn SHUA, s nặng • Nghĩa: Chắc chắn.',
  'avoid': '🗣️ Đọc: [ờ-VOI-d] • Nhấn VOI, nguyên âm đôi /ɔɪ/ • Nghĩa: Tránh né.',
  'doing': '🗣️ Đọc: [ĐU-ing] • Nhấn ĐU, âm /uː/ dài • Nghĩa: Đang làm.',
  'choice': '🗣️ Đọc: [CHOI-s] • Âm đôi /ɔɪ/, đuôi s gió • Nghĩa: Sự lựa chọn.',
  'join': '🗣️ Đọc: [JOIN] • Âm j giật cằm, vần oi • Nghĩa: Tham gia.',

  // Unit 6 Cluster /br/ vs /pr/
  'bridge': '🗣️ Đọc: [BRÍT-j] • Chùm /br/, đuôi /dʒ/ giật cằm • Nghĩa: Cây cầu.',
  'broccoli': '🗣️ Đọc: [BRÓ-cơ-li] • Nhấn BRÓ, 3 âm tiết • Nghĩa: Súp lơ xanh.',
  'breakfast': '🗣️ Đọc: [BRÉC-phợst] • Nhấn BRÉC, đuôi st bật nhẹ • Nghĩa: Bữa ăn sáng.',
  'algebra': '🗣️ Đọc: [EN-dʒɪ-brə] • Nhấn EN, chùm /br/ ở cuối • Nghĩa: Môn Đại số.',
  'celebrate': '🗣️ Đọc: [SÉ-li-breit] • Nhấn SÉ, âm 3 breit • Nghĩa: Kỷ niệm, ăn mừng.',
  'present': '🗣️ Đọc: [PRÉ-zừnt] • Nhấn PRÉ, chùm /pr/ bật hơi • Nghĩa: Món quà / hiện tại.',
  'practise': '🗣️ Đọc: [PRÉC-tịt-s] • Nhấn PRÉC, chùm /pr/ • Nghĩa: Thực hành, luyện tập.',
  'precious': '🗣️ Đọc: [PRÉ-shợs] • Nhấn PRÉ, sh uốn lưỡi • Nghĩa: Quý giá.',
  'programme': '🗣️ Đọc: [PRÔU-græm] • Nhấn PRÔU, chùm /pr/ • Nghĩa: Chương trình.',
  'express': '🗣️ Đọc: [ik-SPRÉS] • Nhấn SPRÉS, đuôi s • Nghĩa: Bày tỏ, biểu đạt.'
};

/**
 * Trả về gợi ý cách đọc tiếng Việt dễ hiểu
 * @param word Từ tiếng Anh
 * @param phonetic Phiên âm IPA chuẩn
 * @param customTip Gợi ý tùy chỉnh (nếu có)
 */
export function getReadingTip(word: string, phonetic?: string, customTip?: string): string {
  if (customTip && customTip.trim().length > 0) {
    return customTip;
  }

  const cleanWord = word.trim().toLowerCase();
  
  // 1. Kiểm tra trong từ điển có sẵn
  if (CURATED_READING_TIPS[cleanWord]) {
    return CURATED_READING_TIPS[cleanWord];
  }

  // 2. Kiểm tra nếu có cụm từ chứa từ này
  for (const [key, tip] of Object.entries(CURATED_READING_TIPS)) {
    if (cleanWord.includes(key) || key.includes(cleanWord)) {
      return tip;
    }
  }

  // 3. Fallback: Tự động phân tích từ phiên âm IPA
  if (phonetic && phonetic.trim().length > 0) {
    return generateReadingTipFromIPA(word, phonetic);
  }

  // 4. Default fallback
  return `🗣️ Đọc: [${word}] • Bấm loa để nghe phát âm bản xứ.`;
}

/**
 * Tự động tạo gợi ý đọc dựa trên phiên âm IPA
 */
function generateReadingTipFromIPA(word: string, phonetic: string): string {
  const cleanPhonetic = phonetic.replace(/[/]/g, '').trim();

  // Xác định vị trí trọng âm chính (ký hiệu ˈ)
  const hasStress = cleanPhonetic.includes('ˈ');
  let stressNote = '';
  if (hasStress) {
    stressNote = ' • Chú ý nhấn mạnh âm tiết có dấu trọng âm (ˈ).';
  }

  // Ghi chú một số âm khó nếu có trong phiên âm
  const trickyNotes: string[] = [];
  if (cleanPhonetic.includes('θ')) trickyNotes.push("âm 'th' (θ) đặt đầu lưỡi giữa 2 hàm răng thổi gió");
  if (cleanPhonetic.includes('ð')) trickyNotes.push("âm 'đ' (ð) đặt lưỡi giữa răng rung nhẹ");
  if (cleanPhonetic.includes('ʃ')) trickyNotes.push("âm 'sh' (ʃ) uốn cong lưỡi thổi mạnh");
  if (cleanPhonetic.includes('ʒ')) trickyNotes.push("âm 'zh' (ʒ) rung lưỡi như chữ 'gi'");
  if (cleanPhonetic.includes('tʃ')) trickyNotes.push("âm 'ch' (tʃ) bật hơi dứt khoát");
  if (cleanPhonetic.includes('dʒ')) trickyNotes.push("âm 'j' (dʒ) giật nhẹ cằm dưới");
  if (cleanPhonetic.includes('ŋ')) trickyNotes.push("âm 'ng' (ŋ) ngạc mềm trong vòm họng");
  if (cleanPhonetic.includes('æ')) trickyNotes.push("âm 'e bẹt' (æ) mở rộng miệng phát âm giữa a và e");

  let result = `🗣️ Phiên âm: ${phonetic}`;
  if (trickyNotes.length > 0) {
    result += ` • Mẹo đọc: ${trickyNotes.slice(0, 2).join(', ')}.`;
  } else {
    result += `${stressNote} Bấm loa để nghe chuẩn bản xứ.`;
  }

  return result;
}

// Từ điển IPA và Nghĩa tiếng Việt mở rộng cho các bài tập & cặp âm tối thiểu
export const VOCABULARY_INFO_DICTIONARY: Record<string, { ipa: string; vi: string; tip?: string }> = {
  // Unit 1 (/ʊ/ vs /uː/)
  'cook': { ipa: '/kʊk/', vi: 'nấu nướng', tip: '🗣️ [Cúc] • Âm /ʊ/ tròn môi ngắn' },
  'look': { ipa: '/lʊk/', vi: 'nhìn ngắm', tip: '🗣️ [Lúc] • Âm /ʊ/ ngắn' },
  'book': { ipa: '/bʊk/', vi: 'quyển sách', tip: '🗣️ [Búc] • Âm /ʊ/ ngắn' },
  'foot': { ipa: '/fʊt/', vi: 'bàn chân', tip: '🗣️ [Phút-t] • Âm /ʊ/ ngắn' },
  'good': { ipa: '/ɡʊd/', vi: 'tốt, hay', tip: '🗣️ [Gút-d] • Âm /ʊ/ ngắn' },
  'push': { ipa: '/pʊʃ/', vi: 'đẩy', tip: '🗣️ [Pút-sh] • Âm /ʊ/ ngắn' },
  'school': { ipa: '/skuːl/', vi: 'trường học', tip: '🗣️ [S-kool] • Âm /uː/ dài' },
  'cool': { ipa: '/kuːl/', vi: 'mát mẻ, tuyệt', tip: '🗣️ [Cu-l] • Âm /uː/ dài' },
  'pool': { ipa: '/puːl/', vi: 'hồ bơi', tip: '🗣️ [Phu-l] • Âm /uː/ dài' },
  'food': { ipa: '/fuːd/', vi: 'thức ăn', tip: '🗣️ [Phút-d] • Âm /uː/ dài' },
  'soup': { ipa: '/suːp/', vi: 'món súp', tip: '🗣️ [Súp] • Âm /uː/ dài' },
  'group': { ipa: '/ɡruːp/', vi: 'nhóm', tip: '🗣️ [Grúp] • Âm /uː/ dài' },
  'june': { ipa: '/dʒuːn/', vi: 'tháng Sáu', tip: '🗣️ [Jun] • Âm /uː/ dài' },

  // Unit 2 (/ə/ vs /ɪ/)
  'water': { ipa: '/ˈwɔːtə(r)/', vi: 'nước', tip: '🗣️ [OA-tờ] • Âm /ə/ lướt nhẹ' },
  'farmers': { ipa: '/ˈfɑːməz/', vi: 'người nông dân', tip: '🗣️ [PHA-mờ-z] • Âm /ə/ cuối' },
  'garden': { ipa: '/ˈɡɑːdn/', vi: 'khu vườn', tip: '🗣️ [GA-đừn] • Âm /ə/ nhẹ' },
  'gather': { ipa: '/ˈɡæðə(r)/', vi: 'thu gom, tụ họp', tip: '🗣️ [GE-đờ] • Âm /ə/ cuối' },
  'activity': { ipa: '/ækˈtɪvəti/', vi: 'hoạt động', tip: '🗣️ [ec-TÍ-vơ-ti] • Âm /ə/ nhẹ' },
  'village': { ipa: '/ˈvɪlɪdʒ/', vi: 'ngôi làng', tip: '🗣️ [VÍ-lit-j] • Đuôi /ɪdʒ/' },
  'harvest': { ipa: '/ˈhɑːvɪst/', vi: 'mùa gặt', tip: '🗣️ [HA-vịt-st] • Âm /ɪ/ ở giữa' },
  'busy': { ipa: '/ˈbɪzi/', vi: 'bận rộn', tip: '🗣️ [BÍ-zi] • Âm /ɪ/ ngắn' },
  'cottage': { ipa: '/ˈkɒtɪdʒ/', vi: 'nhà tranh', tip: '🗣️ [CÓT-tit-j] • Đuôi /ɪdʒ/' },
  'canal': { ipa: '/kəˈnæl/', vi: 'kênh đào', tip: '🗣️ [kơ-NEN-l] • Âm /ə/ đầu' },
  'paddy': { ipa: '/ˈpædi/', vi: 'thóc lúa', tip: '🗣️ [PE-đi] • Âm /i/ cuối' },

  // Unit 3 (/ʊə/ vs /ɔɪ/)
  'tourist': { ipa: '/ˈtʊərɪst/', vi: 'khách du lịch', tip: '🗣️ [TUA-rịt-st] • Âm /ʊə/' },
  'tournament': { ipa: '/ˈtʊənəmənt/', vi: 'giải thi đấu', tip: '🗣️ [TUA-nơ-mơnt] • Âm /ʊə/' },
  'curious': { ipa: '/ˈkjʊəriəs/', vi: 'tò mò', tip: '🗣️ [KIU-ri-ợs] • Âm /ʊə/' },
  'mature': { ipa: '/məˈtʃʊə(r)/', vi: 'trưởng thành', tip: '🗣️ [mơ-CHUA] • Âm /ʊə/' },
  'sure': { ipa: '/ʃʊə(r)/', vi: 'chắc chắn', tip: '🗣️ [SHUA] • Âm /ʊə/' },
  'avoid': { ipa: '/əˈvɔɪd/', vi: 'tránh né', tip: '🗣️ [ờ-VOI-d] • Âm /ɔɪ/' },
  'choice': { ipa: '/tʃɔɪs/', vi: 'lựa chọn', tip: '🗣️ [CHOI-s] • Âm /ɔɪ/' },
  'voice': { ipa: '/vɔɪs/', vi: 'giọng nói', tip: '🗣️ [VOI-s] • Âm /ɔɪ/' },
  'noisy': { ipa: '/ˈnɔɪzi/', vi: 'ồn ào', tip: '🗣️ [NOI-zi] • Âm /ɔɪ/' },
  'join': { ipa: '/dʒɔɪn/', vi: 'tham gia', tip: '🗣️ [JOIN] • Âm /ɔɪ/' },

  // Unit 4 (/k/ vs /g/)
  'cultural': { ipa: '/ˈkʌltʃərəl/', vi: 'thuộc văn hóa', tip: '🗣️ [CÁL-chơ-rồ] • Âm /k/ bật hơi' },
  'communal': { ipa: '/kəˈmjuːnl/', vi: 'thuộc cộng đồng', tip: '🗣️ [kơ-MIU-nồ] • Âm /k/ đầu' },
  'musical': { ipa: '/ˈmjuːzɪkl/', vi: 'thuộc âm nhạc', tip: '🗣️ [MIU-zi-cồ] • Âm /k/ cuối' },
  'folk': { ipa: '/fəʊk/', vi: 'dân gian', tip: '🗣️ [Phôu-k] • Âm /k/ bật nhẹ' },
  'overlook': { ipa: '/ˌəʊvəˈlʊk/', vi: 'nhìn ra', tip: '🗣️ [ôu-vơ-LÚC] • Âm /k/ cuối' },
  'gong': { ipa: '/ɡɒŋ/', vi: 'cồng chiêng', tip: '🗣️ [GONG] • Âm /g/ rung cổ' },
  'gathering': { ipa: '/ˈɡæðərɪŋ/', vi: 'tụ họp', tip: '🗣️ [GE-đơ-ring] • Âm /g/ đầu' },
  'tiger': { ipa: '/ˈtaɪɡə(r)/', vi: 'con hổ', tip: '🗣️ [TAI-gờ] • Âm /g/ giữa' },
  'pig': { ipa: '/pɪɡ/', vi: 'con lợn', tip: '🗣️ [Pik-g] • Âm /g/ cuối' },

  // Unit 5 (/n/ vs /ŋ/)
  'thin': { ipa: '/θɪn/', vi: 'mảnh khảnh', tip: '🗣️ [Thin] • Lưỡi chạm nướu trên' },
  'son': { ipa: '/sʌn/', vi: 'con trai', tip: '🗣️ [Săn] • Âm /n/ đầu lưỡi' },
  'ten': { ipa: '/ten/', vi: 'số mười', tip: '🗣️ [Ten] • Âm /n/ đầu lưỡi' },
  'kin': { ipa: '/kɪn/', vi: 'dòng họ', tip: '🗣️ [Kin] • Âm /n/ đầu lưỡi' },
  'run': { ipa: '/rʌn/', vi: 'chạy', tip: '🗣️ [Răn] • Âm /n/ đầu lưỡi' },
  'ceremony': { ipa: '/ˈserəməni/', vi: 'nghi lễ', tip: '🗣️ [SÉ-rơ-mơ-ni] • Âm /n/ rõ' },
  'thing': { ipa: '/θɪŋ/', vi: 'đồ vật', tip: '🗣️ [Thing] • Ngạc mềm sau họng' },
  'song': { ipa: '/sɒŋ/', vi: 'bài hát', tip: '🗣️ [Song] • Ngạc mềm sau họng' },
  'ring': { ipa: '/rɪŋ/', vi: 'chiếc nhẫn / rung', tip: '🗣️ [Ring] • Ngạc mềm sau họng' },
  'king': { ipa: '/kɪŋ/', vi: 'vua', tip: '🗣️ [King] • Ngạc mềm sau họng' },
  'running': { ipa: '/ˈrʌnɪŋ/', vi: 'đang chạy', tip: '🗣️ [RĂ-ning] • Ngạc mềm sau họng' },

  // Unit 6 (/br/ vs /pr/)
  'bridge': { ipa: '/brɪdʒ/', vi: 'cây cầu', tip: '🗣️ [BRIT-j] • Rung môi /br/' },
  'broccoli': { ipa: '/ˈbrɒkəli/', vi: 'súp lơ xanh', tip: '🗣️ [BRÓ-kơ-li] • Rung môi /br/' },
  'breakfast': { ipa: '/ˈbrekfəst/', vi: 'bữa sáng', tip: '🗣️ [BRÉC-phơst] • Rung môi /br/' },
  'algebra': { ipa: '/ˈældʒɪbrə/', vi: 'môn đại số', tip: '🗣️ [en-JI-brơ] • Âm /br/' },
  'celebrate': { ipa: '/ˈselɪbreɪt/', vi: 'kỷ niệm, ăn mừng', tip: '🗣️ [SÉ-li-breyt] • Âm /br/' },
  'present': { ipa: '/ˈpreznt/', vi: 'món quà / hiện tại', tip: '🗣️ [PRÉ-zừnt] • Bật hơi /pr/' },
  'practise': { ipa: '/ˈpræktɪs/', vi: 'luyện tập', tip: '🗣️ [PRÉC-tịt-s] • Bật hơi /pr/' },
  'precious': { ipa: '/ˈpreʃəs/', vi: 'quý giá', tip: '🗣️ [PRÉ-sợs] • Bật hơi /pr/' },
  'programme': { ipa: '/ˈprəʊɡræm/', vi: 'chương trình', tip: '🗣️ [PRÂU-grem] • Bật hơi /pr/' },
  'express': { ipa: '/ɪkˈspres/', vi: 'bày tỏ, thể hiện', tip: '🗣️ [ik-SPRÉS] • Cụm /pr/' },

  // Review 1 & Review 2 vocabulary box
  'bully': { ipa: '/ˈbʊli/', vi: 'kẻ bắt nạt', tip: '🗣️ [BÚ-li] • Nhấn BÚ' },
  'trained': { ipa: '/treɪnd/', vi: 'được huấn luyện bài bản', tip: '🗣️ [TRÂY-n-đ] • Bật âm /d/ nhẹ' },
  'hospitable': { ipa: '/hɒˈspɪtəbl/', vi: 'hiếu khách, niềm nở', tip: '🗣️ [ho-SPÍ-tơ-bl] • Nhấn SPÍ' },
  'pressure': { ipa: '/ˈpreʃə(r)/', vi: 'áp lực điểm số, cuộc sống', tip: '🗣️ [PRÉ-sờ] • Nhấn PRÉ' },
  'focus': { ipa: '/ˈfəʊkəs/', vi: 'tập trung cao độ', tip: '🗣️ [PHÂU-kợs] • Nhấn PHÂU' },
  'culture': { ipa: '/ˈkʌltʃə(r)/', vi: 'văn hóa', tip: '🗣️ [CÁL-chờ] • Nhấn CÁL' },
  'community': { ipa: '/kəˈmjuːnəti/', vi: 'cộng đồng', tip: '🗣️ [kơ-MIU-nơ-ti] • Nhấn MIU' },
  'custom': { ipa: '/ˈkʌstəm/', vi: 'phong tục tập quán', tip: '🗣️ [CÁST-từm] • Nhấn CÁST' },
  'costume': { ipa: '/ˈkɒstjuːm/', vi: 'trang phục dân tộc', tip: '🗣️ [CÓS-tium] • Nhấn CÓS' },
  'tradition': { ipa: '/trəˈdɪʃn/', vi: 'truyền thống', tip: '🗣️ [trơ-ĐÍ-sừn] • Nhấn ĐÍ' }
};

/**
 * Tra cứu thông tin đầy đủ gồm IPA, nghĩa tiếng Việt và gợi ý cách đọc
 */
export function getWordPhoneticsInfo(word: string): { word: string; ipa: string; vi: string; tip: string } {
  const clean = word.trim().toLowerCase();
  if (VOCABULARY_INFO_DICTIONARY[clean]) {
    const item = VOCABULARY_INFO_DICTIONARY[clean];
    return {
      word,
      ipa: item.ipa,
      vi: item.vi,
      tip: item.tip || getReadingTip(word, item.ipa)
    };
  }

  // Fallback
  return {
    word,
    ipa: '',
    vi: '',
    tip: getReadingTip(word)
  };
}
