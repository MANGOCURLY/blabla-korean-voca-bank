const IMG = {
  bad: "images/bad.png",
  conversation: "images/conversation.png",
  cry: "images/cry.png",
  dance: "images/dance.png",
  excited: "images/excited.png",
  food: "images/food.png",
  grumpy: "images/grumpy.png",
  insult: "images/insult.png",
  love: "images/love.png",
  money: "images/money.png",
  study: "images/study.png",
  surprised: "images/surprised.png",
  together: "images/together.png",
};

/* 커스텀 단어 색상 팔레트 (gold / chili / leaf / violet / blue) */
const WORD_COLORS = ["#E8B04B","#F2685E","#4FBE6C","#8A7FFF","#5BA8E5"];

/* =====================================================================
   Blabla Korea · Voca Bank — mockup logic
   - 다국어 UI (fr / en)
   - 구글 로그인 자리 (지금은 데모: 학생 선택)
   - 날짜별 단어 보기 / 랜덤 연습 / 머니뱅크 / 아는단어·마스터 / 복습
   ===================================================================== */

/* ---------- UI 텍스트 (학생 언어별) ---------- */
const T = {
  fr: {
    tagline: "Apprends le coréen en piquant 🌶️",
    loginTitle: ["Ta banque de", "mots coréens"],
    loginDesc: "Chaque bonne réponse te rapporte des wons. Chaque erreur t'en coûte. Fais grossir ta banque !",
    google: "Continuer avec Google",
    demoHint: "Démo — choisis un élève pour tester :",
    hi: "Salut",
    welcome: "Prêt à gagner des wons ?",
    statLearned: "Appris", statKnown: "Mémorisés", statStreak: "Série record",
    play: "Prendre le train 🚂",
    playSub: "10 gares · choisis ta voie · 3 vies",
    review: "Réviser mes mots 🃏",
    reviewSub: "Cartes-mémo · sans score, sans stress",
    words: "Mes mots par date",
    wordsSub: "Tout ce qu'on a appris",
    knownMenu: "Mots mémorisés & maîtrisés",
    knownSub: "Ta collection",
    todayReview: "à réviser",
    sectionPlay: "S'entraîner", sectionBrowse: "Parcourir",
    qCount: (a,b)=>`Gare ${a} / ${b}`,
    promptKo: "Que veut dire…", promptMean: "Comment dit-on…",
    correct: "Bravo !", wrong: "Aïe, ça pique !",
    answerWas: "La bonne réponse :",
    more: "Reprendre le train 🚂",
    next: "Continuer →",
    home: "Retour à l'accueil",
    resultTitle: (n)=> n>=9?"Champion piquant !": n>=7?"Bien joué !": n>=5?"Pas mal !":"Continue !",
    resultScore: (c,t)=>`${c} bonnes réponses sur ${t}`,
    earned: "gagnés",
    /* 🚂 기차 게임 */
    livesLabel: "Vies",
    trainSafe: "Le train passe ! 🚂",
    trainCrash: "Le train déraille ! 💥",
    gameOverTitle: "Train détruit !",
    gameOverSub: "Tu n'as plus de vies. Le voyage s'arrête ici.",
    gameOverBtn: "Voir le résultat →",
    clearTitle: "Terminus atteint ! 🚩",
    stationsPassed: (n)=>`${n} gares franchies`,
    livesLeft: (n)=>`${n} vie${n>1?'s':''} restante${n>1?'s':''}`,
    notEnoughTitle: "Pas assez de mots",
    notEnoughSub: "Il te faut au moins 2 mots (les phrases ne comptent pas) pour prendre le train. Ajoute des mots ou attends le prochain cours !",
    rgHint: "👆 Touche à gauche ou à droite pour changer de voie",
    rgRestart: "🚂 Repartir",
    coinsPicked: (n)=>`${n} ₩ de pièces ramassées`,
    /* 🎯 quiz de mots classique */
    quiz: "Quiz de mots 🎯",
    quizSub: "4 choix · à ton rythme, sans chrono",
    qCountQ: (a,b)=>`Question ${a} / ${b}`,
    moreQuiz: "10 questions de plus",
    /* 🃏 cartes-mémo */
    reviewTitle: "Cartes-mémo",
    flipHint: "Touche la carte 👆",
    sideKo: "Coréen", sideMean: "Français",
    cardCount: (a,b)=>`Carte ${a} / ${b}`,
    prevCard: "Précédent", nextCard: "Suivant",
    shuffleCards: "🔀 Mélanger",
    reviewOnlyDue: "À réviser seulement",
    reviewAllWords: "Tous mes mots",
    reviewDoneTitle: "Révision terminée ! 🎉",
    reviewDoneSub: "Tu as parcouru toutes tes cartes. Prêt à monter dans le train ?",
    reviewAgain: "🔁 Revoir les cartes",
    goTrain: "🚂 Jouer au train",
    reviewEmptyTitle: "Rien à réviser",
    reviewEmptySub: "Aucun mot à réviser pour l'instant. Ajoute des mots ou attends le prochain cours !",
    known: "Mémorisés", master: "Maîtrisés", learning: "En cours",
    emptyKnown: "Pas encore de mot mémorisé. Réponds juste 3 fois de suite à un mot pour le débloquer !",
    navHome:"Accueil", navWords:"Mots", navLearned:"Appris", navKnown:"Mémorisés", navHelp:"Aide",
    helpTitle:"Comment ça marche",
    help: [
      ["🚂","Le jeu du train","Ton train avance tout seul sur 3 voies. Deux panneaux arrivent : touche à gauche ou à droite pour te placer sur la bonne réponse. Reste au milieu et tu percutes la barrière ! Chaque erreur coûte un cœur ❤️, et à 0 cœur le voyage s'arrête. Seuls les mots sont posés en question, jamais les phrases."],
      ["💰","Les pièces","Ramasse les pièces sur les voies pour gagner des wons en plus. 3 bonnes réponses d'affilée : ton train s'enflamme 🔥 et tout compte double !"],
      ["🎯","Le quiz de mots","La version calme : 10 questions à 4 choix, sans train et sans chrono. Même récompense, zéro pression."],
      ["🃏","Les cartes-mémo","Le mode révision, sans score ni cœur : touche la carte pour retourner le mot et voir le sens. Prends ton temps, rien n'est compté."],
      ["💰","La banque de wons","+100 wons par bonne réponse, −50 par erreur. Ta banque ne descend jamais sous 0."],
      ["🔥","Les séries","Enchaîne les bonnes réponses pour faire monter ta série et voir le piment danser."],
      ["🧠","Mots mémorisés","3 bonnes réponses de suite = mot mémorisé. Continue de le revoir pour le maîtriser."],
      ["🧠","Révision espacée","Chaque jour, on te ressort les mots au bon moment : 1, 3, 7, 14 puis 30 jours."],
    ],
    switchLang:"English",
    newTag: "Nouveau", sentenceTag: "Phrase",
    share: "Partager le résultat",
    logout: "Se déconnecter",
    logoutConfirm: "Tu veux vraiment te déconnecter ?",
    notRegistered: "Tu n'es pas dans la liste des élèves. Contacte Blabla Korea.",
    listLoadError: "Impossible de charger la liste des élèves. Vérifie ta connexion et rafraîchis la page (ou réessaie dans quelques minutes).",
    vocabLoading: "Chargement de tes mots…",
    vocabNotReady: "Ta liste de mots n'est pas encore prête. Contacte ton professeur.",
    progressSaveOff: "Connexion au serveur impossible : ta progression ne sera pas sauvegardée pour l'instant. Rafraîchis la page pour réessayer.",
    pronToggle: "Voir la prononciation",
    inAppWarning: "Connexion Google impossible dans cette appli. Ouvre ce lien dans Chrome ou Safari.",
    copyLink: "Copier le lien",
    copiedMsg: "Lien copié ! Colle-le dans Chrome ou Safari.",
    learnedMenu: "Mots appris",
    learnedSub: "Tout ce que tu as déjà réussi une fois",
    emptyLearned: "Pas encore de mot appris. Commence l'entraînement pour en débloquer !",
    addWord: "Ajouter un mot",
    addWordSub: "Ton vocabulaire personnel",
    addWordKoLabel: "Mot en coréen",
    addWordMeanLabel: "Sens en français",
    addWordSave: "Enregistrer",
    addWordCancel: "Annuler",
    addWordEmptyError: "Remplis les deux champs.",
    addWordDuplicateError: "Ce mot existe déjà dans ta liste.",
    addWordDemoNotice: "Mode démo : ce mot ne sera pas sauvegardé après un rafraîchissement.",
    tagCustom: "Perso",
    deleteWord: "Supprimer",
    deleteWordConfirm: "Supprimer ce mot de ton vocabulaire personnel ?",
    myWords: "Mes mots à moi",
    myWordsSub: "Le vocabulaire que tu as ajouté toi-même",
    emptyMyWords: "Tu n'as pas encore ajouté de mot. Clique sur \"Ajouter un mot\" pour commencer !",
    allDates: "Toutes les dates",
    editWord: "Modifier le mot",
    editWordSub: "Change le mot, le sens ou la couleur",
    colorLabel: "Couleur (pour t'y retrouver)",
    moveUp: "Monter",
    moveDown: "Descendre",
    rightsNote: "Tous droits réservés. Blabla Korea est une marque de Jonghyuk Lee.",
  },
  en: {
    tagline: "Learn Korean the spicy way 🌶️",
    loginTitle: ["Your Korean", "word bank"],
    loginDesc: "Every correct answer earns you won. Every miss costs you. Grow your bank!",
    google: "Continue with Google",
    demoHint: "Demo — pick a student to try it:",
    hi: "Hi",
    welcome: "Ready to earn some won?",
    statLearned: "Learned", statKnown: "Memorized", statStreak: "Best streak",
    play: "Board the train 🚂",
    playSub: "10 stations · pick your track · 3 lives",
    review: "Review my words 🃏",
    reviewSub: "Flashcards · no score, no stress",
    words: "My words by date",
    wordsSub: "Everything we've learned",
    knownMenu: "Memorized & mastered words",
    knownSub: "Your collection",
    todayReview: "due",
    sectionPlay: "Practice", sectionBrowse: "Browse",
    qCount: (a,b)=>`Station ${a} / ${b}`,
    promptKo: "What does this mean…", promptMean: "How do you say…",
    correct: "Nice!", wrong: "Ouch, spicy!",
    answerWas: "Correct answer:",
    more: "Ride again 🚂",
    next: "Continue →",
    home: "Back to home",
    resultTitle: (n)=> n>=9?"Spicy champion!": n>=7?"Well done!": n>=5?"Not bad!":"Keep going!",
    resultScore: (c,t)=>`${c} correct out of ${t}`,
    earned: "earned",
    /* 🚂 train game */
    livesLabel: "Lives",
    trainSafe: "The train made it! 🚂",
    trainCrash: "The train crashed! 💥",
    gameOverTitle: "Train wrecked!",
    gameOverSub: "You're out of lives. The journey ends here.",
    gameOverBtn: "See result →",
    clearTitle: "Final stop reached! 🚩",
    stationsPassed: (n)=>`${n} station${n===1?'':'s'} cleared`,
    livesLeft: (n)=>`${n} ${n===1?'life':'lives'} left`,
    notEnoughTitle: "Not enough words",
    notEnoughSub: "You need at least 2 words (sentences don't count) to ride the train. Add some words or wait for your next class!",
    rgHint: "👆 Tap left or right to switch tracks",
    rgRestart: "🚂 Get going again",
    coinsPicked: (n)=>`${n} ₩ in coins collected`,
    /* 🎯 classic word quiz */
    quiz: "Word quiz 🎯",
    quizSub: "4 choices · your own pace, no timer",
    qCountQ: (a,b)=>`Question ${a} / ${b}`,
    moreQuiz: "10 more questions",
    /* 🃏 flashcards */
    reviewTitle: "Flashcards",
    flipHint: "Tap the card 👆",
    sideKo: "Korean", sideMean: "English",
    cardCount: (a,b)=>`Card ${a} / ${b}`,
    prevCard: "Previous", nextCard: "Next",
    shuffleCards: "🔀 Shuffle",
    reviewOnlyDue: "Due only",
    reviewAllWords: "All my words",
    reviewDoneTitle: "Review complete! 🎉",
    reviewDoneSub: "You've been through every card. Ready to board the train?",
    reviewAgain: "🔁 Review again",
    goTrain: "🚂 Play the train game",
    reviewEmptyTitle: "Nothing to review",
    reviewEmptySub: "No words to review right now. Add some words or wait for your next class!",
    known: "Memorized", master: "Mastered", learning: "Learning",
    emptyKnown: "No memorized words yet. Answer a word right 3 times in a row to unlock it!",
    navHome:"Home", navWords:"Words", navLearned:"Learned", navKnown:"Memorized", navHelp:"Help",
    helpTitle:"How it works",
    help: [
      ["🚂","The train game","Your train runs by itself across 3 tracks. Two signs come at you: tap left or right to line up with the correct answer. Stay in the middle and you smash into the barrier! Every miss costs a heart ❤️, and at 0 hearts the ride is over. Only words are quizzed — never sentences."],
      ["💰","Coins","Grab the coins on the tracks for extra won. 3 correct in a row and your train catches fire 🔥 — everything counts double!"],
      ["🎯","The word quiz","The calm version: 10 questions with 4 choices, no train and no timer. Same rewards, zero pressure."],
      ["🃏","Flashcards","The review mode, with no score and no hearts: tap a card to flip the word and see its meaning. Take your time, nothing is counted."],
      ["💰","The won bank","+100 won per correct answer, −50 per miss. Your bank never drops below 0."],
      ["🔥","Streaks","Chain correct answers to build your streak and watch the chili dance."],
      ["🧠","Memorized words","3 correct in a row = a memorized word. Keep reviewing to master it."],
      ["🧠","Spaced review","Each day we resurface words at the right time: 1, 3, 7, 14, then 30 days."],
    ],
    switchLang:"Français",
    newTag: "New", sentenceTag: "Sentence",
    share: "Share result",
    logout: "Log out",
    logoutConfirm: "Are you sure you want to log out?",
    notRegistered: "You're not on the registered student list. Please contact Blabla Korea.",
    listLoadError: "Couldn't load the student list. Check your connection and refresh the page (or try again in a few minutes).",
    vocabLoading: "Loading your words…",
    vocabNotReady: "Your word list isn't ready yet. Please contact your teacher.",
    progressSaveOff: "Couldn't reach the server: your progress won't be saved right now. Refresh the page to try again.",
    pronToggle: "Show pronunciation",
    inAppWarning: "Google sign-in isn't available in this app. Open this link in Chrome or Safari instead.",
    copyLink: "Copy link",
    copiedMsg: "Link copied! Paste it into Chrome or Safari.",
    learnedMenu: "Learned words",
    learnedSub: "Everything you've gotten right at least once",
    emptyLearned: "No learned words yet. Start practicing to unlock some!",
    addWord: "Add a word",
    addWordSub: "Your personal vocabulary",
    addWordKoLabel: "Korean word",
    addWordMeanLabel: "Meaning in English",
    addWordSave: "Save",
    addWordCancel: "Cancel",
    addWordEmptyError: "Please fill in both fields.",
    addWordDuplicateError: "This word is already in your list.",
    addWordDemoNotice: "Demo mode: this word won't be saved after a refresh.",
    tagCustom: "Mine",
    deleteWord: "Delete",
    deleteWordConfirm: "Delete this word from your personal vocabulary?",
    myWords: "My words",
    myWordsSub: "Vocabulary you've added yourself",
    emptyMyWords: "You haven't added any words yet. Tap \"Add a word\" to get started!",
    allDates: "All dates",
    editWord: "Edit word",
    editWordSub: "Change the word, meaning or color",
    colorLabel: "Color (to help you spot it)",
    moveUp: "Move up",
    moveDown: "Move down",
    rightsNote: "All rights reserved. Blabla Korea is a trademark of Jonghyuk Lee.",
  }
};

/* ---------- 샘플 학생 & 단어 (데모용) ----------
   실제로는 구글시트에서 불러옴. type: word | sentence
   상태(state)는 로컬에서만 관리(데모).                              */
const SAMPLE = {
  jessica: {
    name:"Jessica", lang:"fr",
    words:[
      {date:"2026-06-30", ko:"주말 내내", pron:"jumal naenae", mean:"tout le week-end", type:"word"},
      {date:"2026-06-30", ko:"원래", pron:"wonrae", mean:"normalement / à l'origine", type:"word"},
      {date:"2026-06-30", ko:"휴일", pron:"hyuil", mean:"jour de repos / congé", type:"word"},
      {date:"2026-06-30", ko:"질문", pron:"jilmun", mean:"une question", type:"word"},
      {date:"2026-06-30", ko:"원래 주말에 일해요?", pron:"", mean:"Tu travailles normalement le week-end ?", type:"sentence"},
      {date:"2026-06-30", ko:"다시 말해줄 수 있어요?", pron:"", mean:"Peux-tu le répéter ?", type:"sentence"},
      {date:"2026-06-25", ko:"약속", pron:"yaksok", mean:"un rendez-vous / une promesse", type:"word"},
      {date:"2026-06-25", ko:"늦잠", pron:"neutjam", mean:"grasse matinée", type:"word"},
      {date:"2026-06-25", ko:"바쁘다", pron:"bappeuda", mean:"être occupé", type:"word"},
      {date:"2026-06-25", ko:"쉬다", pron:"swida", mean:"se reposer", type:"word"},
      {date:"2026-06-25", ko:"저녁", pron:"jeonyeok", mean:"le soir / le dîner", type:"word"},
      {date:"2026-06-25", ko:"주말 잘 보내세요", pron:"", mean:"Passe un bon week-end", type:"sentence"},
      {date:"2026-06-20", ko:"날씨", pron:"nalssi", mean:"le temps (météo)", type:"word"},
      {date:"2026-06-20", ko:"덥다", pron:"deopda", mean:"avoir chaud / faire chaud", type:"word"},
      {date:"2026-06-20", ko:"춥다", pron:"chupda", mean:"avoir froid / faire froid", type:"word"},
      {date:"2026-06-20", ko:"비가 와요", pron:"", mean:"Il pleut", type:"sentence"},
      {date:"2026-06-20", ko:"우산", pron:"usan", mean:"un parapluie", type:"word"},
      {date:"2026-06-20", ko:"맑다", pron:"makda", mean:"être clair / dégagé", type:"word"},
      {date:"2026-06-20", ko:"흐리다", pron:"heurida", mean:"être nuageux", type:"word"},
      {date:"2026-06-20", ko:"바람", pron:"baram", mean:"le vent", type:"word"},
      {date:"2026-06-20", ko:"눈이 와요", pron:"", mean:"Il neige", type:"sentence"},
      {date:"2026-06-20", ko:"계절", pron:"gyejeol", mean:"la saison", type:"word"},
    ]
  },
  corine: {
    name:"Corine", lang:"en",
    words:[
      {date:"2026-06-30", ko:"주말 내내", pron:"jumal naenae", mean:"all weekend long", type:"word"},
      {date:"2026-06-30", ko:"원래", pron:"wonrae", mean:"originally / usually", type:"word"},
      {date:"2026-06-30", ko:"휴일", pron:"hyuil", mean:"day off / holiday", type:"word"},
      {date:"2026-06-30", ko:"질문", pron:"jilmun", mean:"a question", type:"word"},
      {date:"2026-06-30", ko:"약속", pron:"yaksok", mean:"appointment / promise", type:"word"},
      {date:"2026-06-30", ko:"원래 주말에 일해요?", pron:"", mean:"Do you usually work on weekends?", type:"sentence"},
      {date:"2026-06-24", ko:"시간", pron:"sigan", mean:"time / hour", type:"word"},
      {date:"2026-06-24", ko:"늦다", pron:"neutda", mean:"to be late", type:"word"},
      {date:"2026-06-24", ko:"일찍", pron:"iljjik", mean:"early", type:"word"},
      {date:"2026-06-24", ko:"바쁘다", pron:"bappeuda", mean:"to be busy", type:"word"},
      {date:"2026-06-24", ko:"쉬다", pron:"swida", mean:"to rest", type:"word"},
      {date:"2026-06-24", ko:"저녁에 시간 있어요?", pron:"", mean:"Are you free in the evening?", type:"sentence"},
      {date:"2026-06-18", ko:"음식", pron:"eumsik", mean:"food", type:"word"},
      {date:"2026-06-18", ko:"맛있다", pron:"masitda", mean:"to be delicious", type:"word"},
      {date:"2026-06-18", ko:"맵다", pron:"maepda", mean:"to be spicy", type:"word"},
      {date:"2026-06-18", ko:"배고프다", pron:"baegopeuda", mean:"to be hungry", type:"word"},
      {date:"2026-06-18", ko:"식당", pron:"sikdang", mean:"restaurant", type:"word"},
      {date:"2026-06-18", ko:"주문하다", pron:"jumunhada", mean:"to order", type:"word"},
      {date:"2026-06-18", ko:"물", pron:"mul", mean:"water", type:"word"},
      {date:"2026-06-18", ko:"이거 맵아요?", pron:"", mean:"Is this spicy?", type:"sentence"},
      {date:"2026-06-18", ko:"계산서", pron:"gyesanseo", mean:"the bill", type:"word"},
    ]
  }
};

/* ---------- 상태 ---------- */
let student = null;   // {name, lang, words:[...] with runtime stats}
let L = T.fr;         // current language pack
function detectInitialLang(){
  try{
    const saved = localStorage.getItem('blabla_login_lang');
    if(saved === 'fr' || saved === 'en') return saved;
  }catch(e){}
  try{
    const browserLang = (navigator.language || navigator.languages?.[0] || 'fr').split('-')[0];
    return (browserLang === 'en') ? 'en' : 'fr'; // T 객체에 fr/en만 있으므로 그 외는 전부 fr
  }catch(e){ return 'fr'; }
}
let loginLang = detectInitialLang();  // 로그인 화면 전용 미리보기 언어 (로그인 전에만 사용)
let session = null;   // 🚂 기차 게임 세션
let review  = null;   // 🃏 플래시카드 복습 세션
let bank = 0;
let bestStreak = 0;
let currentUserEmail = null; // Firebase 로그인 이메일 (데모 모드면 null)
let studentWhitelist = [];   // 구글시트에서 불러온 {email,name,lang,sheetTab}[]
let whitelistLoaded = false; // 명단 로딩 성공 여부 (실패와 "진짜 미등록" 구분용)
let showPron = false;        // 발음 표시 토글 (세션 전체 공용, 문제별 개별 아님)
let progressLocked = false;  // Firestore 진도 로딩 실패 시 true → 저장(덮어쓰기) 잠금으로 기존 데이터 보호

const REWARD = 100, PENALTY = 50, KNOWN_STREAK = 3;

/* ---------- 학생 화이트리스트 (구글시트 CSV) ---------- */
const STUDENT_LIST_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQlA-RFhG7AZj-_VjZYya9o_VfZv5i4RrIKuOOy_lhRPXOXnspSPEYjjSUP8n84FObqUZlmf-ngI-iQ/pub?gid=424226246&single=true&output=csv";

// 콤마가 포함된 필드("...")도 안전하게 처리하는 CSV 한 줄 파서
function parseCsvLine(line){
  const result = [];
  let cur = '', inQuotes = false;
  for(let i=0;i<line.length;i++){
    const c = line[i];
    if(inQuotes){
      if(c === '"'){
        if(line[i+1] === '"'){ cur += '"'; i++; }
        else inQuotes = false;
      } else cur += c;
    } else {
      if(c === '"') inQuotes = true;
      else if(c === ','){ result.push(cur); cur=''; }
      else cur += c;
    }
  }
  result.push(cur);
  return result.map(s=>s.trim());
}

async function fetchStudentWhitelist(retries=2){
  let lastErr;
  for(let attempt=0; attempt<=retries; attempt++){
    try{
      const res = await fetch(STUDENT_LIST_CSV_URL, {cache:'no-store'});
      if(!res.ok) throw new Error('HTTP '+res.status); // 구글이 429/5xx/에러HTML 주면 여기서 잡힘
      const text = await res.text();
      const rows = text.trim().split(/\r?\n/).slice(1).map(parseCsvLine).map(cols=>{
        const [email,name,lang,sheetTab,vocabCsvUrl] = cols;
        return {email,name,lang,sheetTab,vocabCsvUrl};
      }).filter(r=>r.email);
      if(rows.length === 0) throw new Error('빈 명단'); // 파싱은 됐지만 학생 0명 = 비정상 응답
      return rows;
    }catch(e){
      lastErr = e;
      if(attempt < retries) await new Promise(r=>setTimeout(r, 600*(attempt+1))); // 0.6s, 1.2s 백오프
    }
  }
  throw lastErr; // 재시도 다 실패 → 호출부가 "로딩 실패"로 구분 처리
}

/* ---------- 학생별 단어 CSV (구글시트) ---------- */
const vocabCache = {}; // 세션 동안만 유지, 새로고침하면 다시 fetch

async function fetchStudentVocab(url, retries=2){
  // 구글이 가끔 429/5xx를 돌려주므로 명단과 동일하게 재시도(백오프)로 방어
  let lastErr;
  for(let attempt=0; attempt<=retries; attempt++){
    try{
      const res = await fetch(url, {cache:'no-store'});
      if(!res.ok) throw new Error('단어 CSV fetch 실패: HTTP '+res.status);
      const text = await res.text();
      const lines = text.trim().split(/\r?\n/).slice(1); // 헤더(날짜,한국어,발음,뜻,예문,예문뜻,카테고리,품사,타입) 제거
      const words = [];
      lines.forEach(line=>{
        if(!line.trim()) return; // 빈 줄 건너뛰기
        const cols = parseCsvLine(line);
        if(cols.length < 9) return; // 컬럼 개수 안 맞으면 건너뛰기
        const [date, ko, pron, mean, example, exampleMean, category, pos, type] = cols;
        if(!ko || !mean) return; // 핵심 필드 비어있으면 건너뛰기
        if(type !== 'word' && type !== 'sentence') return; // 타입 값 이상하면 건너뛰기
        words.push({date, ko, pron, mean, example, exampleMean, category, pos, type});
      });
      return words;
    }catch(e){
      lastErr = e;
      if(attempt < retries) await new Promise(r=>setTimeout(r, 600*(attempt+1))); // 0.6s, 1.2s 백오프
    }
  }
  throw lastErr;
}

async function getStudentVocab(row){
  if(!row.vocabCsvUrl) throw new Error('vocabCsvUrl 없음');
  if(vocabCache[row.vocabCsvUrl]) return vocabCache[row.vocabCsvUrl];
  const words = await fetchStudentVocab(row.vocabCsvUrl);
  if(words.length === 0) throw new Error('단어 0개');
  vocabCache[row.vocabCsvUrl] = words;
  return words;
}
const app = document.getElementById('app');
const botnav = document.getElementById('botnav');
const fb = document.getElementById('feedback');

/* ---------- 유틸 ---------- */
const $ = (sel,el=document)=>el.querySelector(sel);
const shuffle = a => a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(v=>v[1]);
const wonFmt = n => "₩"+n.toLocaleString('ko-KR');

/* ---------- 퀴즈용 정규화 ----------
   시트의 뜻 칸에는 변형("가다 / 가요")·동의어("gestion, administration")·
   설명("to grill (grilled fish)")이 섞여 있다. 그대로 보기로 쓰면 정답만 유독 길어져서
   뜻을 몰라도 눈으로 골라진다. 화면 표시는 원본(ko/mean)을 쓰고, 출제·보기에만 quiz* 를 쓴다. */
const QUIZ_MEAN_MAX = 40;

function normalizeQuizText(s){
  return String(s||'')
    .split(' / ')[0]            // 변형 나열 → 첫 형태만 (공백 없는 '은/는'은 건드리지 않음)
    .replace(/\([^)]*\)/g, '')  // 괄호 설명 제거
    .split(',')[0]              // 동의어 나열 → 첫 항만
    .replace(/\s+/g, ' ')
    .trim();
}

function attachQuizFields(w){
  const quizKo = normalizeQuizText(w.ko);
  const quizMean = normalizeQuizText(w.mean);
  const quizOk = w.type !== 'sentence'
    && w.pos !== '문법'
    && !!quizKo && !!quizMean
    && /[가-힣]/.test(quizKo)      // 한국어 칸에 한글이 없으면 행이 뒤집힌 것
    && !/[가-힣]/.test(quizMean)   // 뜻에 한글이 남아 있으면 정답이 유출된 것
    && quizMean.length <= QUIZ_MEAN_MAX;
  return {...w, quizKo, quizMean, quizOk};
}

function loadStudent(key, langOverride){
  const s = SAMPLE[key];
  const lang = langOverride || s.lang;
  student = {
    name:s.name, lang,
    words: s.words.map((w,i)=>({...attachQuizFields(w), id:i, correctStreak:0, seen:0, totalCorrect:0, status:"new"}))
  };
  L = T[lang];
  bank = 0; bestStreak = 0;
  document.documentElement.lang = lang;
}

/* ---------- 실제 학생: 구글시트에서 받아온 단어로 세팅 ---------- */
function setupStudent(row, words, lang){
  student = {
    name: row.name, lang,
    words: words.map((w,i)=>({...attachQuizFields(w), id:i, correctStreak:0, seen:0, totalCorrect:0, status:"new"}))
  };
  L = T[lang] || T.fr;
  bank = 0; bestStreak = 0;
  document.documentElement.lang = lang;
}

function renderVocabLoading(lang){
  botnav.classList.add('hidden');
  app.innerHTML = `<div class="login">
    <img src="${IMG.study}" alt="">
    <p style="margin-top:18px">${(T[lang]||T.fr).vocabLoading}</p>
  </div>`;
}

function renderVocabNotReady(lang){
  botnav.classList.add('hidden');
  app.innerHTML = `<div class="login">
    <img src="${IMG.grumpy}" alt="">
    <p style="margin-top:18px;max-width:320px">${(T[lang]||T.fr).vocabNotReady}</p>
    <button class="btn secondary" id="backToLoginBtn" style="margin-top:20px;max-width:240px">←</button>
  </div>`;
  $('#backToLoginBtn').onclick = ()=>{
    currentUserEmail = null;
    window.fb.signOut(window.fb.auth).catch(e=>console.error(e));
  };
}

/* ---------- Firestore: 포인트/SRS 진도 복원 & 저장 ---------- */
async function restoreProgress(email){
  const ref = window.fb.doc(window.fb.db, 'students', email);
  const snap = await window.fb.getDoc(ref);
  if(snap.exists()){
    const data = snap.data();
    bank = typeof data.points === 'number' ? data.points : 100;
    const srs = data.srsProgress || {};
    student.words.forEach(w=>{
      const p = srs[w.ko];
      if(p){
        w.correctStreak = p.correctStreak||0;
        w.totalCorrect = p.totalCorrect||0;
        w.seen = p.seen||0;
        w.status = p.status||"new";
      }
    });
    // 학생이 직접 추가한 단어 병합
    const customWords = data.customWords || [];
    let nextId = student.words.length ? Math.max(...student.words.map(w=>w.id)) + 1 : 0;
    customWords.forEach((cw, i)=>{
      const p = srs[cw.ko] || {};
      student.words.push({
        ...attachQuizFields({ko: cw.ko, mean: cw.mean, type:"word"}),
        id: nextId++, date: cw.dateAdded, pron:"",
        source:"custom", color: cw.color || "", order: (cw.order ?? i),
        correctStreak: p.correctStreak||0, totalCorrect: p.totalCorrect||0,
        seen: p.seen||0, status: p.status||"new"
      });
    });
  } else {
    bank = 100;
    await window.fb.setDoc(ref, {points:100, srsProgress:{}, customWords:[], lastUpdated: window.fb.serverTimestamp()});
  }
}

function persistCustomWords(){
  if(!currentUserEmail || progressLocked) return; // 데모 모드/진도 로딩 실패 시 저장 안 함(기존 데이터 보호)
  const customWords = student.words
    .filter(w=>w.source==='custom')
    .sort((a,b)=>(a.order??0)-(b.order??0))
    .map(w=>({id:w.id, ko:w.ko, mean:w.mean, dateAdded:w.date, color:w.color||"", order:w.order??0}));
  const ref = window.fb.doc(window.fb.db, 'students', currentUserEmail);
  window.fb.updateDoc(ref, {customWords, lastUpdated: window.fb.serverTimestamp()})
    .catch(e=>console.error('커스텀 단어 저장 실패', e));
}

function persistProgress(){
  if(!currentUserEmail || progressLocked) return; // 데모 모드/진도 로딩 실패 시 저장 안 함(기존 데이터 보호)
  const srsProgress = {};
  student.words.forEach(w=>{
    srsProgress[w.ko] = {correctStreak:w.correctStreak, totalCorrect:w.totalCorrect, seen:w.seen, status:w.status};
  });
  const ref = window.fb.doc(window.fb.db, 'students', currentUserEmail);
  window.fb.updateDoc(ref, {points: bank, srsProgress, lastUpdated: window.fb.serverTimestamp()})
    .catch(e=>console.error('Firestore 저장 실패', e));
}

/* ---------- 로그인 성공 처리 (Google) ---------- */
async function handleLoginSuccess(email){
  // 명단을 아직 못 불러왔으면 = 미등록이 아니라 로딩 실패. 로그인 시점에 한 번 더 시도.
  if(!whitelistLoaded){
    try{
      studentWhitelist = await fetchStudentWhitelist();
      whitelistLoaded = true;
    }catch(e){
      console.error('학생목록 재로딩 실패', e);
      alert(L.listLoadError); // "미등록"이 아니라 "명단 로딩 실패, 새로고침" 안내
      currentUserEmail = null;
      await window.fb.signOut(window.fb.auth);
      return;
    }
  }
  const row = studentWhitelist.find(r=>r.email.toLowerCase()===email.toLowerCase());
  if(!row){
    alert(L.notRegistered);
    currentUserEmail = null;
    await window.fb.signOut(window.fb.auth);
    return;
  }
  currentUserEmail = email;
  const lang = (row.lang||'fr').toLowerCase();
  renderVocabLoading(lang);
  progressLocked = false;

  // ── 1단계: 단어 CSV(구글시트) 불러오기 ──
  // 여기서 실패하면 = 진짜로 단어가 준비 안 됨 → "단어 준비 안 됨" 화면
  let words;
  try{
    words = await getStudentVocab(row);
  } catch(e){
    console.error('① 단어 CSV 로딩 실패 (구글시트/CSV 링크 확인 필요):', e);
    renderVocabNotReady(lang);
    return;
  }
  setupStudent(row, words, lang);

  // ── 2단계: Firestore에서 포인트/진도 불러오기 ──
  // 여기서 실패하면 = 서버 문제일 뿐 단어는 멀쩡. 앱은 열되 저장은 잠가서 기존 데이터 보호
  try{
    await restoreProgress(email);
  } catch(e){
    console.error('② 진도 불러오기 실패 (Firestore 문제 — 앱은 열지만 저장을 잠급니다):', e);
    progressLocked = true;
    bank = 0; // 실제 저장은 잠겨 있으므로 화면 표시만 0. 기존 데이터는 덮어쓰지 않음
  }
  renderHome();
}

/* ---------- 로그아웃 ---------- */
async function doLogout(){
  if(!confirm(L.logoutConfirm)) return;
  const hadUser = !!currentUserEmail;
  currentUserEmail = null;
  if(hadUser){
    try{ await window.fb.signOut(window.fb.auth); } catch(e){ console.error(e); }
    // onAuthStateChanged가 renderLogin() 처리
  } else {
    renderLogin();
  }
}

/* ---------- 앱 시작 (Firebase 준비된 뒤) ---------- */
async function initApp(){
  try{
    studentWhitelist = await fetchStudentWhitelist();
    whitelistLoaded = true;
  }catch(e){
    console.error('학생목록 로딩 실패', e);
    studentWhitelist = []; whitelistLoaded = false; // 로그인 시 재시도로 복구됨
  }
  window.fb.onAuthStateChanged(window.fb.auth, user=>{
    if(user && user.email) handleLoginSuccess(user.email);
    else { currentUserEmail = null; renderLogin(); }
  });
}

/* ---------- 머니뱅크 표시 ---------- */
function bankChip(){
  return `<div class="bank-chip"><span class="coin">💰</span>
    <span id="bankVal">${wonFmt(bank)}</span>
    <span class="delta" id="bankDelta"></span></div>`;
}
function updateBank(delta){
  bank = Math.max(0, bank + delta);
  const v = $('#bankVal'), d = $('#bankDelta');
  if(v) v.textContent = wonFmt(bank);
  if(d){
    d.textContent = (delta>0?"+":"")+delta;
    d.className = "delta " + (delta>0?"up":"down");
    setTimeout(()=>{ if(d) d.className="delta"; }, 900);
  }
}

/* ---------- 뒤로가기 버튼 (홈이 아닌 모든 화면 공통) ---------- */
function backBtn(){
  return `<button class="btn ghost" style="width:auto;padding:8px 12px;margin-bottom:14px" id="backBtn">←</button>`;
}
function wireBackBtn(){
  const b = $('#backBtn');
  if(b) b.onclick = renderHome;
}

/* ---------- 상단바 ---------- */
function topbar(){
  return `<div class="topbar">
    <div class="brand"><span class="dot">🌶️</span>
      <div>Voca Bank<small>Blabla Korea</small></div></div>
    ${bankChip()}
  </div>`;
}

/* =====================================================================
   화면들
   ===================================================================== */

/* ---------- 로그인 ---------- */
function isInAppBrowser(){
  const ua = navigator.userAgent || navigator.vendor || window.opera || '';
  return /KAKAOTALK|Instagram|FBAN|FBAV|Line\/|NAVER\(inapp/i.test(ua);
}

function renderLogin(){
  botnav.classList.add('hidden');
  const showDemo = new URLSearchParams(location.search).get('demo')==='true';
  const Lx = T[loginLang];
  const inApp = isInAppBrowser();
  app.innerHTML = `
  <button class="lang-toggle" id="loginLangToggle">🌐 ${loginLang.toUpperCase()}</button>
  <div class="login">
    <img src="${IMG.study}" alt="">
    <div class="brand" style="justify-content:center;margin-bottom:4px">
      <span class="dot" style="font-size:1.1rem">🌶️</span>
      <small style="color:var(--gold);letter-spacing:2px">BLABLA KOREA</small>
    </div>
    <h1>${Lx.loginTitle[0]}<br><span>${Lx.loginTitle[1]}</span></h1>
    <p>${Lx.loginDesc}</p>
    ${inApp ? `
    <div class="card" style="max-width:320px;margin:0 auto">
      <p style="margin-bottom:14px">${Lx.inAppWarning}</p>
      <button class="btn" id="copyLinkBtn">${Lx.copyLink}</button>
    </div>
    ` : `
    <button class="google-btn" id="googleBtn">
      <svg viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.9 2.4 30.3 0 24 0 14.6 0 6.4 5.4 2.5 13.3l7.9 6.1C12.3 13.2 17.6 9.5 24 9.5z"/><path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.4c-.5 2.9-2.1 5.3-4.6 7l7.1 5.5c4.2-3.9 6.6-9.6 6.6-16z"/><path fill="#FBBC05" d="M10.4 28.6c-.5-1.4-.8-2.9-.8-4.6s.3-3.2.8-4.6l-7.9-6.1C.9 16.5 0 20.1 0 24s.9 7.5 2.5 10.7l7.9-6.1z"/><path fill="#34A853" d="M24 48c6.3 0 11.6-2.1 15.5-5.6l-7.1-5.5c-2 1.3-4.5 2.1-8.4 2.1-6.4 0-11.7-3.7-13.6-9.4l-7.9 6.1C6.4 42.6 14.6 48 24 48z"/></svg>
      ${Lx.google}
    </button>
    `}
    ${(!inApp && showDemo) ? `
    <div class="demo-hint">${Lx.demoHint}</div>
    <div class="demo-pick">
      <button data-demo="jessica">🇫🇷 Jessica (FR)</button>
      <button data-demo="corine">🇬🇧 Corine (EN)</button>
    </div>` : ``}
  </div>`;

  $('#loginLangToggle').onclick = ()=>{
    loginLang = (loginLang==='fr')?'en':'fr';
    try{ localStorage.setItem('blabla_login_lang', loginLang); }catch(e){}
    renderLogin();
  };
  if(inApp){
    $('#copyLinkBtn').onclick = ()=>{
      try{
        navigator.clipboard.writeText(window.location.href);
        alert(Lx.copiedMsg);
      }catch(e){
        alert(window.location.href); // 클립보드 API 실패 시 fallback으로 링크 노출
      }
    };
  } else {
    $('#googleBtn').onclick = async ()=>{
      try{
        await window.fb.signInWithPopup(window.fb.auth, window.fb.googleProvider);
        // 성공하면 onAuthStateChanged -> handleLoginSuccess() 로 이어짐
      } catch(e){
        console.error(e);
        alert('로그인 중 오류가 발생했습니다.');
      }
    };
  }
  if(!inApp && showDemo){
    app.querySelectorAll('[data-demo]').forEach(b=>{
      b.onclick = ()=>{ currentUserEmail = null; loadStudent(b.dataset.demo); renderHome(); };
    });
  }
}

/* ---------- 오늘 복습 예정 개수 (SRS 데모) ---------- */
function dueCount(){
  // 데모: 아직 안 본 것 + status가 new/learning인 것을 "복습 대상"으로
  // (문장은 퀴즈에 출제하지 않으므로 카운트에서 제외)
  return student.words.filter(w=>w.status!=="master" && w.type!=="sentence").length;
}
function stats(){
  const learned = student.words.filter(w=>w.totalCorrect>0).length;
  const known = student.words.filter(w=>w.status==="known"||w.status==="master").length;
  return {learned, known};
}

/* ---------- 홈 ---------- */
function renderHome(){
  botnav.classList.remove('hidden');
  stopGame();                  // 러너 루프 · 키보드 핸들러 정리
  review = null;
  setNav('home');
  const s = stats();
  app.innerHTML = topbar() + `
    ${progressLocked ? `<div class="save-warning">⚠️ ${L.progressSaveOff}</div>` : ''}
    <div class="hello">
      <img src="${IMG.excited}" alt="">
      <div>
        <h2>${L.hi}, ${student.name} 👋</h2>
        <div class="sub">${L.welcome}</div>
      </div>
    </div>

    <div class="stat-grid">
      <div class="stat" id="statLearned"><b>${s.learned}</b><span>${L.statLearned}</span></div>
      <div class="stat" id="statKnown"><b>${s.known}</b><span>${L.statKnown}</span></div>
      <div class="stat"><b>${bestStreak}🔥</b><span>${L.statStreak}</span></div>
    </div>

    <div class="section-title">${L.sectionPlay}</div>
    <button class="menu-btn" id="playBtn" style="border-color:var(--gold)">
      <span class="emoji">🚂</span>
      <span class="mtext"><b>${L.play}</b><span>${L.playSub}</span></span>
      <span class="arrow">→</span>
    </button>
    <button class="menu-btn" id="quizBtn">
      <span class="emoji">🎯</span>
      <span class="mtext"><b>${L.quiz}</b><span>${L.quizSub}</span></span>
      <span class="arrow">→</span>
    </button>
    <button class="menu-btn" id="reviewBtn">
      <span class="emoji">🃏</span>
      <span class="mtext"><b>${L.review}</b><span>${L.reviewSub}</span></span>
      <span class="badge">${dueCount()} ${L.todayReview}</span>
    </button>

    <div class="section-title">${L.sectionBrowse}</div>
    <button class="menu-btn" id="wordsBtn">
      <span class="emoji">📖</span>
      <span class="mtext"><b>${L.words}</b><span>${L.wordsSub}</span></span>
      <span class="arrow">→</span>
    </button>
    <button class="menu-btn" id="knownBtn">
      <span class="emoji">🧠</span>
      <span class="mtext"><b>${L.knownMenu}</b><span>${L.knownSub}</span></span>
      <span class="arrow">→</span>
    </button>
    <button class="menu-btn" id="myWordsBtn">
      <span class="emoji">📝</span>
      <span class="mtext"><b>${L.myWords}</b><span>${L.myWordsSub}</span></span>
      <span class="arrow">→</span>
    </button>
    <button class="menu-btn" id="addWordBtn">
      <span class="emoji">➕</span>
      <span class="mtext"><b>${L.addWord}</b><span>${L.addWordSub}</span></span>
      <span class="arrow">→</span>
    </button>
  `;
  $('#playBtn').onclick = ()=>startSession(student.words);
  $('#quizBtn').onclick = ()=>startQuiz(student.words);
  $('#reviewBtn').onclick = ()=>startReview('due');
  $('#wordsBtn').onclick = ()=>renderWords();
  $('#knownBtn').onclick = renderKnown;
  $('#myWordsBtn').onclick = renderMyWords;
  $('#addWordBtn').onclick = ()=>renderAddWord();
  $('#statLearned').onclick = renderLearned;
  $('#statKnown').onclick = renderKnown;
}

/* ---------- 날짜별 단어 ---------- */
function renderWords(selectedDate = "all"){
  botnav.classList.remove('hidden');
  setNav('words');
  const byDate = {};
  student.words.forEach(w=>{ (byDate[w.date] ||= []).push(w); });
  const dates = Object.keys(byDate).sort().reverse();
  const shown = selectedDate === "all" ? dates : dates.filter(d=>d===selectedDate);

  let html = backBtn() + topbar() + `<h2 style="margin:6px 2px 4px">📖 ${L.words}</h2>
    <div class="sub" style="color:var(--cream-dim);font-size:.85rem;margin-bottom:6px">${L.wordsSub}</div>
    <select id="dateFilter" style="width:100%;margin:10px 0 2px;background:var(--navy-3);border:1px solid var(--line);border-radius:12px;padding:13px 14px;font-size:1rem;color:var(--cream);font-family:inherit;cursor:pointer">
      <option value="all">📅 ${L.allDates}</option>
      ${dates.map(d=>`<option value="${d}" ${d===selectedDate?'selected':''}>${fmtDate(d)} ${d.split('-')[0]} · ${byDate[d].length}</option>`).join('')}
    </select>`;
  shown.forEach(d=>{
    const list = byDate[d];
    html += `<div class="day-block">
      <div class="day-head">📅 ${fmtDate(d)} <span class="count">· ${list.length}</span></div>`;
    list.forEach(w=>{
      html += wordRowHtml(w);
    });
    html += `</div>`;
  });
  app.innerHTML = html;
  wireBackBtn();
  wireDeleteButtons(()=>renderWords(selectedDate));
  $('#dateFilter').onchange = (e)=>renderWords(e.target.value);
}
function statusTag(w){
  if(w.type==="sentence" && w.status==="new") return {cls:"sentence", txt:L.sentenceTag};
  if(w.status==="master") return {cls:"master", txt:L.master};
  if(w.status==="known")  return {cls:"known", txt:L.known};
  if(w.status==="learning") return {cls:"known", txt:L.learning};
  return {cls:"new", txt:L.newTag};
}
function fmtDate(d){
  const [y,m,day]=d.split('-');
  const months = L===T.fr
    ? ["janv","févr","mars","avr","mai","juin","juil","août","sept","oct","nov","déc"]
    : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${parseInt(day)} ${months[parseInt(m)-1]}`;
}

/* ---------- 단어 행 렌더 (공통) + 삭제 ---------- */
function wordRowHtml(w, controls=false){
  const del = (w.source==='custom')
    ? `<button class="word-del" data-del="${w.id}" title="${L.deleteWord}">✕</button>`
    : '';
  const ctl = 'background:var(--navy-3);border:1px solid var(--line);border-radius:8px;color:var(--cream-dim);cursor:pointer;padding:3px 7px;line-height:1;font-size:.72rem;font-family:inherit';
  const move = controls
    ? `<span style="display:flex;flex-direction:column;gap:3px;flex:none">
        <button data-move-up="${w.id}" title="${L.moveUp}" style="${ctl}">▲</button>
        <button data-move-down="${w.id}" title="${L.moveDown}" style="${ctl}">▼</button>
      </span>`
    : '';
  const edit = controls
    ? `<button data-edit="${w.id}" title="${L.editWord}" style="${ctl};font-size:.9rem;padding:6px 8px;flex:none">✏️</button>`
    : '';
  const colorStyle = w.color ? ` style="border-left:4px solid ${w.color}"` : '';
  return `<div class="word-row"${colorStyle}>
    ${move}
    <span class="ko kr">${w.ko}</span>
    <span class="mean">${w.mean}</span>
    ${w.source==='custom' ? `<span class="tag custom">${L.tagCustom}</span>` : ''}
    <span class="tag ${statusTag(w).cls}">${statusTag(w).txt}</span>
    ${edit}${del}
  </div>`;
}

function wireDeleteButtons(reRenderFn){
  app.querySelectorAll('.word-del').forEach(btn=>{
    btn.onclick = (e)=>{
      e.stopPropagation();
      deleteCustomWord(Number(btn.dataset.del), reRenderFn);
    };
  });
}

function deleteCustomWord(id, reRenderFn){
  const w = student.words.find(x=>x.id===id && x.source==='custom');
  if(!w) return;
  if(!confirm(L.deleteWordConfirm)) return;

  student.words = student.words.filter(x=>x.id!==id);
  persistCustomWords();
  if(reRenderFn) reRenderFn();
}

/* ---------- 아는 단어 / 마스터 ---------- */
function renderKnown(){
  botnav.classList.remove('hidden');
  setNav('known');
  const known = student.words.filter(w=>w.status==="known"||w.status==="master");
  let html = backBtn() + topbar() + `<div class="hello">
      <img src="${IMG.money}" alt="" style="width:70px">
      <div><h2>🧠 ${L.knownMenu}</h2>
      <div class="sub">${known.length} · ${L.knownSub}</div></div></div>`;
  if(known.length===0){
    html += `<div class="card" style="text-align:center;color:var(--cream-dim)">
      <img src="${IMG.grumpy}" style="width:120px;margin-bottom:10px" alt="">
      <p>${L.emptyKnown}</p></div>`;
  } else {
    known.forEach(w=>{
      html += wordRowHtml(w);
    });
  }
  app.innerHTML = html;
  wireBackBtn();
  wireDeleteButtons(renderKnown);
}

/* ---------- 배운 단어 (한 번이라도 맞춘 단어) ---------- */
function renderLearned(){
  botnav.classList.remove('hidden');
  setNav('learned');
  const learned = student.words.filter(w=>w.totalCorrect>0);
  let html = backBtn() + topbar() + `<div class="hello">
      <img src="${IMG.excited}" alt="" style="width:70px">
      <div><h2>✅ ${L.learnedMenu}</h2>
      <div class="sub">${learned.length} · ${L.learnedSub}</div></div></div>`;
  if(learned.length===0){
    html += `<div class="card" style="text-align:center;color:var(--cream-dim)">
      <img src="${IMG.grumpy}" style="width:120px;margin-bottom:10px" alt="">
      <p>${L.emptyLearned}</p></div>`;
  } else {
    learned.forEach(w=>{
      html += wordRowHtml(w);
    });
  }
  app.innerHTML = html;
  wireBackBtn();
  wireDeleteButtons(renderLearned);
}

/* ---------- 내가 추가한 단어만 모아보기 ---------- */
function renderMyWords(){
  botnav.classList.add('hidden');
  const mine = student.words.filter(w=>w.source==='custom').sort((a,b)=>(a.order??0)-(b.order??0));
  let html = backBtn() + topbar() + `<div class="hello">
      <img src="${IMG.study}" alt="" style="width:70px">
      <div><h2>📝 ${L.myWords}</h2>
      <div class="sub">${mine.length} · ${L.myWordsSub}</div></div></div>`;
  if(mine.length===0){
    html += `<div class="card" style="text-align:center;color:var(--cream-dim)">
      <img src="${IMG.grumpy}" style="width:120px;margin-bottom:10px" alt="">
      <p>${L.emptyMyWords}</p></div>`;
  } else {
    mine.forEach(w=>{
      html += wordRowHtml(w, true);
    });
  }
  app.innerHTML = html;
  wireBackBtn();
  wireDeleteButtons(renderMyWords);
  wireMyWordControls(mine);
}

function wireMyWordControls(mine){
  app.querySelectorAll('[data-edit]').forEach(btn=>{
    btn.onclick = ()=>renderAddWord(Number(btn.dataset.edit));
  });
  const moveWord = (id, dir)=>{
    const idx = mine.findIndex(w=>w.id===id);
    const swap = idx + dir;
    if(idx < 0 || swap < 0 || swap >= mine.length) return;
    mine.forEach((w,i)=>w.order = i);        // 순서값 정규화 (기존 데이터 호환)
    mine[idx].order = swap;
    mine[swap].order = idx;
    persistCustomWords();
    renderMyWords();
  };
  app.querySelectorAll('[data-move-up]').forEach(btn=>{
    btn.onclick = ()=>moveWord(Number(btn.dataset.moveUp), -1);
  });
  app.querySelectorAll('[data-move-down]').forEach(btn=>{
    btn.onclick = ()=>moveWord(Number(btn.dataset.moveDown), 1);
  });
}

/* ---------- 나만의 단어 추가 ---------- */
function renderAddWord(editId){
  botnav.classList.add('hidden');
  const editing = (editId != null)
    ? student.words.find(w=>w.id===editId && w.source==='custom')
    : null;
  const selColor = editing?.color || "";
  const swatch = (c)=>`<button data-color="${c}" style="width:36px;height:36px;border-radius:999px;cursor:pointer;flex:none;
      border:3px solid ${c===selColor ? 'var(--cream)' : 'var(--line)'};
      background:${c || 'var(--navy-3)'};color:var(--cream-dim);font-size:.8rem;line-height:1">${c ? '' : '✕'}</button>`;
  app.innerHTML = backBtn() + topbar() + `
    <div class="hello">
      <img src="${IMG.study}" alt="" style="width:70px">
      <div><h2>${editing ? '✏️ '+L.editWord : '➕ '+L.addWord}</h2>
      <div class="sub">${editing ? L.editWordSub : L.addWordSub}</div></div>
    </div>
    <div class="card">
      <div class="field">
        <label>${L.addWordKoLabel}</label>
        <input type="text" id="newKo" class="kr" placeholder="예: 사랑">
      </div>
      <div class="field">
        <label>${L.addWordMeanLabel}</label>
        <input type="text" id="newMean">
      </div>
      <div class="field">
        <label>${L.colorLabel}</label>
        <div id="colorRow" data-sel="${selColor}" style="display:flex;gap:10px;align-items:center">
          ${swatch("")}${WORD_COLORS.map(swatch).join('')}
        </div>
      </div>
      <div id="addWordError" class="field-error hidden"></div>
      ${!currentUserEmail ? `<div class="field-error" style="color:var(--gold)">${L.addWordDemoNotice}</div>` : ""}
      <button class="btn" id="saveWordBtn" style="margin-top:6px">${L.addWordSave}</button>
      <button class="btn ghost" id="cancelWordBtn" style="margin-top:10px">${L.addWordCancel}</button>
    </div>`;
  if(editing){
    $('#newKo').value = editing.ko;
    $('#newMean').value = editing.mean;
  }
  const colorRow = $('#colorRow');
  colorRow.querySelectorAll('[data-color]').forEach(btn=>{
    btn.onclick = ()=>{
      colorRow.dataset.sel = btn.dataset.color;
      colorRow.querySelectorAll('[data-color]').forEach(b=>{
        b.style.borderColor = (b===btn) ? 'var(--cream)' : 'var(--line)';
      });
    };
  });
  wireBackBtn();
  $('#saveWordBtn').onclick = ()=>saveWordForm(editing);
  $('#cancelWordBtn').onclick = editing ? renderMyWords : renderHome;
}

function saveWordForm(editing){
  const ko = $('#newKo').value.trim();
  const mean = $('#newMean').value.trim();
  const color = $('#colorRow').dataset.sel || "";
  const errEl = $('#addWordError');
  if(!ko || !mean){
    errEl.textContent = L.addWordEmptyError;
    errEl.classList.remove('hidden');
    return;
  }
  const dup = student.words.some(w=>w.ko===ko && w!==editing);
  if(dup){
    errEl.textContent = L.addWordDuplicateError;
    errEl.classList.remove('hidden');
    return;
  }

  if(editing){
    Object.assign(editing, attachQuizFields({...editing, ko, mean}));
    editing.color = color;
    persistCustomWords();
    persistProgress(); // srsProgress가 단어 텍스트를 키로 쓰므로, 재저장하면 기록이 새 키로 이관됨
    renderMyWords();
    return;
  }

  const today = new Date().toISOString().slice(0,10);
  const newId = student.words.length
    ? Math.max(...student.words.map(w=>w.id)) + 1
    : 0;
  const newWord = {
    ...attachQuizFields({ko, mean, type:"word"}),
    id:newId, date:today, pron:"",
    source:"custom", color, order: student.words.filter(w=>w.source==='custom').length,
    correctStreak:0, seen:0, totalCorrect:0, status:"new"
  };
  student.words.push(newWord);
  persistCustomWords();
  renderHome();
}

/* ---------- 도움말 ---------- */
function renderHelp(){
  botnav.classList.remove('hidden');
  setNav('help');
  let html = backBtn() + topbar() + `<div class="hello">
    <img src="${IMG.study}" style="width:70px" alt="">
    <div><h2>❓ ${L.helpTitle}</h2></div></div>`;
  L.help.forEach(([emoji,title,desc])=>{
    html += `<div class="menu-btn" style="cursor:default">
      <span class="emoji">${emoji}</span>
      <span class="mtext"><b>${title}</b><span>${desc}</span></span></div>`;
  });
  html += `<button class="btn ghost" id="switchLang" style="margin-top:16px">🌐 ${L.switchLang}</button>`;
  html += `<button class="btn chili" id="logoutBtn" style="margin-top:10px">🚪 ${L.logout}</button>`;
  html += `<div style="text-align:center;color:var(--cream-dim);font-size:.72rem;margin-top:22px;line-height:1.7">
    © 2026 Blabla Korea · Jonghyuk Lee<br>${L.rightsNote}</div>`;
  app.innerHTML = html;
  wireBackBtn();
  $('#switchLang').onclick = ()=>{ L = (L===T.fr)?T.en:T.fr; renderHelp(); };
  $('#logoutBtn').onclick = doLogout;
}

/* =====================================================================
   🃏 단어 복습 (플래시카드)
   - 점수·하트·머니뱅크와 무관한 순수 복습 모드
   - 문장은 제외하고 단어만 (기차 게임과 동일 기준)
   ===================================================================== */

function reviewPool(mode){
  // 복습은 출제 제한과 무관 — 퀴즈에 안 나오는 문법 규칙·설명형 단어도 카드로는 보여준다
  const words = student.words.filter(w=>w.type!=="sentence" && w.ko && w.mean);
  if(mode==='all') return words;
  const due = words.filter(w=>w.status!=="master");
  return due.length ? due : words;   // 전부 마스터면 그냥 전체 보여주기
}

function startReview(mode='due'){
  stopGame();
  session = null;
  const cards = shuffle(reviewPool(mode));
  if(!cards.length){ renderReviewEmpty(); return; }
  review = { cards, i:0, flipped:false, mode, seen:new Set([0]) };
  renderReview();
}

function renderReviewEmpty(){
  botnav.classList.add('hidden');
  review = null;
  app.innerHTML = backBtn() + topbar() + `
    <div class="result">
      <img src="${IMG.surprised}" alt="">
      <h2>${L.reviewEmptyTitle}</h2>
      <div class="score" style="max-width:380px;margin:0 auto 18px">${L.reviewEmptySub}</div>
      <div class="btn-row" style="flex-direction:column">
        <button class="btn" id="addNowBtn">➕ ${L.addWord}</button>
        <button class="btn secondary" id="homeBtn">${L.home}</button>
      </div>
    </div>`;
  wireBackBtn();
  $('#addNowBtn').onclick = ()=>renderAddWord();
  $('#homeBtn').onclick = ()=>renderHome();
}

function renderReview(){
  botnav.classList.add('hidden');
  const r = review, w = r.cards[r.i];
  r.flipped = false;
  r.seen.add(r.i);

  const st = statusTag(w);
  const dots = r.cards.map((_,i)=>
    `<i class="${i===r.i?'now':(r.seen.has(i)?'seen':'')}"></i>`).join('');

  app.innerHTML = topbar() + `
    <div class="quiz-top">
      <button class="btn ghost" style="width:auto;padding:8px 12px" id="quitBtn">←</button>
      <div class="progress"><i style="width:${((r.i+1)/r.cards.length)*100}%"></i></div>
      <button class="btn ghost" style="width:auto;padding:8px 12px;font-size:.8rem" id="shuffleBtn">🔀</button>
    </div>
    <div class="q-count">🃏 ${L.reviewTitle} · ${L.cardCount(r.i+1, r.cards.length)}</div>

    <div class="flash-wrap">
      <div class="flash" id="flash">
        <div class="face front">
          <span class="fstatus tag ${st.cls}">${st.txt}</span>
          <div class="fside">${L.sideKo}</div>
          <div class="ftext kr ${w.ko.length>12?'long':''}">${w.ko}</div>
          ${w.pron ? `<div class="fpron">${w.pron}</div>` : ``}
          <div class="fhint">${L.flipHint}</div>
        </div>
        <div class="face back">
          <div class="fside">${L.sideMean}</div>
          <div class="ftext ${w.mean.length>12?'long':''}">${w.mean}</div>
          <div class="fhint">${L.flipHint}</div>
        </div>
      </div>
    </div>

    <div class="flash-nav">
      <button class="btn secondary navbtn" id="prevBtn" title="${L.prevCard}" ${r.i===0?'disabled style="opacity:.35"':''}>←</button>
      <button class="btn" id="flipBtn">🔄</button>
      <button class="btn secondary navbtn" id="nextBtn" title="${L.nextCard}">→</button>
    </div>
    <div class="flash-dots">${dots}</div>
    <div class="flash-count">${L.cardCount(r.i+1, r.cards.length)}</div>
  `;

  const flash = $('#flash');
  const flip = ()=>{ r.flipped = !r.flipped; flash.classList.toggle('flipped', r.flipped); };
  flash.onclick = flip;
  $('#flipBtn').onclick = flip;
  $('#prevBtn').onclick = ()=>{ if(r.i>0){ r.i--; renderReview(); } };
  $('#nextBtn').onclick = ()=>{
    if(r.i < r.cards.length-1){ r.i++; renderReview(); }
    else renderReviewDone();
  };
  $('#shuffleBtn').onclick = ()=>startReview(r.mode);
  $('#quitBtn').onclick = ()=>{ review = null; renderHome(); };

  // 키보드 지원 (PC): ← → 이동, space/↑↓ 뒤집기
  document.onkeydown = (e)=>{
    if(!review) return;
    if(e.key==='ArrowRight'){ e.preventDefault(); $('#nextBtn').click(); }
    else if(e.key==='ArrowLeft'){ e.preventDefault(); $('#prevBtn').click(); }
    else if(e.key===' '||e.key==='ArrowUp'||e.key==='ArrowDown'){ e.preventDefault(); flip(); }
  };
}

function renderReviewDone(){
  botnav.classList.add('hidden');
  document.onkeydown = null;
  const total = review ? review.cards.length : 0;
  const mode = review ? review.mode : 'due';
  review = null;
  app.innerHTML = backBtn() + topbar() + `
    <div class="result">
      <img src="${IMG.study}" alt="">
      <h2>${L.reviewDoneTitle}</h2>
      <div class="score">${L.cardCount(total, total)}</div>
      <div class="score" style="max-width:380px;margin:0 auto 18px">${L.reviewDoneSub}</div>
      <div class="btn-row" style="flex-direction:column">
        <button class="btn" id="trainBtn">${L.goTrain}</button>
        <button class="btn secondary" id="againBtn">${L.reviewAgain}</button>
        <button class="btn secondary" id="homeBtn">${L.home}</button>
      </div>
    </div>`;
  wireBackBtn();
  $('#trainBtn').onclick = ()=>startSession(student.words);
  $('#againBtn').onclick = ()=>startReview(mode);
  $('#homeBtn').onclick = ()=>renderHome();
}

/* =====================================================================
   🚂 기차 게임 세션
   - 문장(type==="sentence")은 출제하지 않음 — 단어만
   - 2지선다 · 하트 3개 · 하트 0개면 게임오버
   ===================================================================== */

const LIVES_MAX = 3;          // 하트 개수
const SESSION_SIZE = 10;      // 한 판 정거장 수

/* 출제 가능한 단어만 추림 — 문장·문법 규칙·정답 유출 항목은 attachQuizFields가 걸러둠 */
function quizPool(list){
  return (list||[]).filter(w=>w && w.quizOk);
}

/* 오답 보기 고르기 — 의미가 가까운 것부터 단계적으로 뽑는다.
   전체에서 무작위로 뽑으면 품사·주제가 동떨어져 소거법으로 풀리기 때문. */
function pickDistractors(w, allWords, field, answer, need){
  const key = s => s.toLowerCase();
  const taken = new Set([key(answer)]);
  const out = [];
  const rest = allWords.filter(x=>x.id!==w.id && x[field]);

  // 정답만 유독 길거나 짧으면 뜻을 몰라도 골라지므로 길이가 비슷한 후보를 우선한다
  const nearestByLength = list => [...list].sort((a,b)=>
    Math.abs(a[field].length-answer.length) - Math.abs(b[field].length-answer.length));

  const tiers = [
    rest.filter(x=>x.pos && x.pos===w.pos && x.category && x.category===w.category),
    rest.filter(x=>x.pos && x.pos===w.pos),
    rest.filter(x=>x.category && x.category===w.category),
    rest,
  ];
  for(const tier of tiers){
    if(out.length >= need) break;
    // 길이가 가까운 상위 후보군 안에서 무작위 — 매번 똑같은 오답이 나오지 않게
    for(const x of shuffle(nearestByLength(tier).slice(0, Math.max(need*4, 12)))){
      if(out.length >= need) break;
      if(taken.has(key(x[field]))) continue;   // 정규화 후 뜻이 겹치는 단어는 정답이 2개가 됨
      taken.add(key(x[field]));
      out.push(x[field]);
    }
  }
  return out;
}

function buildQuestion(w, allWords, nOpt=2){
  // 방향 랜덤: ko->mean (뜻 고르기) 또는 mean->ko (한국어 고르기)
  const dir = Math.random()<0.5 ? "ko2mean" : "mean2ko";
  const field = dir==="ko2mean" ? "quizMean" : "quizKo";
  const answer = w[field];
  const promptText = dir==="ko2mean" ? w.quizKo : w.quizMean;

  // 기차 게임은 2지선다(오답 1개), 단어 퀴즈는 4지선다(오답 3개)
  // 후보가 모자라면 있는 만큼만 사용
  // (다른 학생 데이터에서 빌려오지 않음 — 데모/타 학생 콘텐츠 혼입 방지)
  const distractors = pickDistractors(w, allWords, field, answer, nOpt-1);
  const options = shuffle([answer, ...distractors]);
  return {w, dir, promptText, answer, options,
          label: dir==="mean2ko" ? L.promptMean : L.promptKo};
}

function composeSession(sourceWords, size=SESSION_SIZE, nOpt=2){
  const all = quizPool(student.words);        // 오답 보기 후보 풀 (문장 제외)
  let pool  = quizPool(sourceWords);
  // 복습 대상이 전부 문장/마스터라 비었으면 전체 단어로 대체
  if(!pool.length) pool = all;
  const picked = shuffle(pool).slice(0, Math.min(size, pool.length));
  return picked.map(w=>buildQuestion(w, all, nOpt));
}

function startSession(sourceWords){
  stopGame();
  review = null;
  // 문장을 뺀 뒤에도 2개 이상 있어야 2지선다가 성립
  if(quizPool(student.words).length < 2){ renderNotEnoughWords(); return; }
  const qs = composeSession(sourceWords, SESSION_SIZE);
  if(!qs.length){ renderNotEnoughWords(); return; }
  session = { mode:'train', qs, i:0, correct:0, streak:0, earned:0, answered:false, coins:0,
              lives:LIVES_MAX, over:false, played:0, source:sourceWords };
  renderGame();
}

/* =====================================================================
   🎯 단어 퀴즈 (클래식 4지선다 — 기차 없이 차분하게)
   기차 게임과 마찬가지로 문장은 출제하지 않음
   ===================================================================== */

function startQuiz(sourceWords){
  stopGame();
  review = null;
  if(quizPool(student.words).length < 2){ renderNotEnoughWords(); return; }
  const qs = composeSession(sourceWords, SESSION_SIZE, 4);
  if(!qs.length){ renderNotEnoughWords(); return; }
  session = { mode:'quiz', qs, i:0, correct:0, streak:0, earned:0, answered:false,
              coins:0, lives:LIVES_MAX, over:false, played:0, source:sourceWords };
  renderQuizQuestion();
}

function renderQuizQuestion(){
  botnav.classList.add('hidden');
  const s = session, q = s.qs[s.i];
  s.answered = false;
  const streakOff = s.streak===0 ? "off" : "";
  app.innerHTML = topbar() + `
    <div class="quiz-top">
      <button class="btn ghost" style="width:auto;padding:8px 12px" id="quitBtn">←</button>
      <div class="progress"><i style="width:${(s.i/s.qs.length)*100}%"></i></div>
      <div class="streak ${streakOff}" id="streak">🔥 ${s.streak}</div>
    </div>
    <div class="q-count">🎯 ${L.qCountQ(s.i+1, s.qs.length)}</div>
    <div class="card">
      <div class="prompt">
        <div class="plabel">${q.label}</div>
        <div class="pword kr">${q.promptText}</div>
        ${(q.dir==="ko2mean" && q.w.pron) ? `
          <button class="pron-toggle ${showPron?'active':''}" id="pronToggle" title="${L.pronToggle}">🔤</button>
          <div class="pron ${showPron?'':'hidden'}" id="pronText">${q.w.pron}</div>
        ` : ""}
      </div>
      <div class="options" id="options"></div>
    </div>
    <div id="noteSlot"></div>`;

  const pronBtn = $('#pronToggle');
  if(pronBtn){
    pronBtn.onclick = ()=>{
      showPron = !showPron;
      pronBtn.classList.toggle('active', showPron);
      $('#pronText').classList.toggle('hidden', !showPron);
    };
  }
  const optEl = $('#options');
  q.options.forEach(opt=>{
    const b = document.createElement('button');
    b.className = "opt";
    b.innerHTML = `<span class="mark"></span><span class="kr"></span>`;
    b.querySelector('.kr').textContent = opt;   // 직접 추가한 단어의 HTML 주입 차단
    b.onclick = ()=>quizAnswer(b, opt, q);
    optEl.appendChild(b);
  });
  $('#quitBtn').onclick = ()=>{ session = null; renderHome(); };
}

function quizAnswer(btn, chosen, q){
  if(!session || session.answered) return;
  session.answered = true;
  session.played = session.i + 1;
  const correct = chosen===q.answer;

  app.querySelectorAll('.opt').forEach(o=>{
    o.disabled = true;
    const t = o.querySelector('.kr').textContent;
    if(t===q.answer){ o.classList.add('correct'); o.querySelector('.mark').textContent="✓"; }
    else if(o===btn){ o.classList.add('wrong');   o.querySelector('.mark').textContent="✕"; }
  });

  const w = q.w;
  w.seen++;
  if(correct){
    session.correct++; session.streak++; session.earned += REWARD;
    w.correctStreak++; w.totalCorrect++;
    if(w.correctStreak>=KNOWN_STREAK && w.status!=="master"){
      w.status = w.correctStreak>=6 ? "master" : "known";
    } else if(w.status==="new"){ w.status="learning"; }
    bestStreak = Math.max(bestStreak, session.streak);
    updateBank(REWARD);
    showFeedback(true, session.streak);
  } else {
    session.streak = 0;
    w.correctStreak = 0;
    if(w.status==="known") w.status="learning";   // 살짝 강등
    updateBank(-PENALTY);
    showFeedback(false, 0);
    $('#noteSlot').innerHTML = `<div class="answer-note">
      <div>${L.answerWas} <span class="cor kr">${q.answer}</span></div>
      <div class="ex kr">${q.w.ko} — ${q.w.mean}</div>
    </div>`;
  }

  const st = $('#streak');
  if(st){ st.textContent = `🔥 ${session.streak}`; st.className = "streak "+(session.streak===0?"off":""); }
  persistProgress();

  // 답을 다시 읽고 외울 시간을 갖도록 버튼을 눌러야 다음 문제로 진행
  $('#noteSlot').insertAdjacentHTML('beforeend',
    `<button class="btn" id="nextBtn" style="margin-top:14px">${L.next}</button>`);
  $('#nextBtn').onclick = ()=>{
    session.i++;
    if(session.i>=session.qs.length) renderResult();
    else renderQuizQuestion();
  };
}

/* 정답/오답 일러스트 오버레이 (단어 퀴즈 전용) */
let fbTimer = null;
function showFeedback(good, streak){
  clearTimeout(fbTimer);
  let img, msg, cls;
  if(good){
    if(streak>=3){ img=IMG.dance; msg="🔥 "+streak+"!"; cls="good"; }
    else { img=IMG.excited; msg=L.correct; cls="good"; }
  } else {
    img=IMG.cry; msg=L.wrong; cls="bad";
  }
  fb.innerHTML = `<img src="${img}" alt="">
    <div class="fmsg ${cls}">${msg}</div>
    <div class="fmoney" style="color:${good?'var(--gold)':'var(--chili-soft)'}">
      ${good?'+'+REWARD:'−'+PENALTY} ₩</div>`;
  fb.classList.add('show');
  fbTimer = setTimeout(()=>fb.classList.remove('show'), good?800:1000);
}

/* 단어가 2개 미만일 때 안내 화면 */
function renderNotEnoughWords(){
  botnav.classList.add('hidden');
  session = null;
  app.innerHTML = backBtn() + topbar() + `
    <div class="result">
      <img src="${IMG.surprised}" alt="">
      <h2>${L.notEnoughTitle}</h2>
      <div class="score" style="max-width:380px;margin:0 auto 18px">${L.notEnoughSub}</div>
      <div class="btn-row" style="flex-direction:column">
        <button class="btn" id="addNowBtn">➕ ${L.addWord}</button>
        <button class="btn secondary" id="homeBtn">${L.home}</button>
      </div>
    </div>`;
  wireBackBtn();
  $('#addNowBtn').onclick = ()=>renderAddWord();
  $('#homeBtn').onclick = ()=>renderHome();
}

/* 하트 3개 HTML */
function livesHtml(lives){
  let h = "";
  for(let i=0;i<LIVES_MAX;i++){
    h += `<span class="heart ${i<lives?'':'lost'}" data-heart="${i}">❤️</span>`;
  }
  return h;
}

/* =====================================================================
   러너 엔진 — CSS 3D 원근감 · 3레인
   좌/우 레인에 정답 간판, 가운데 레인은 차단벽(=미선택 시 충돌)
   ===================================================================== */

const RG = {
  LANE_X: 124,        // 레인 간격 (z=0 기준 px) — 간판 폭(112)보다 넓어야 안 겹침
  Z_SPAWN: 1050,      // 간판이 생성되는 거리
  Z_GONE: -300,       // 이 거리를 지나면 DOM에서 제거
  APPROACH_S: 6.0,    // 간판이 도달하기까지 걸리는 시간(초)
  COIN_VALUE: 20,     // 코인 1개 값
  BOOST_AT: 3,        // 연속 정답 몇 개부터 부스트
};

let game = null;      // 러너 런타임 상태 (세션과 별개)

/* 게임 정리 — 화면을 떠날 때 반드시 호출 */
function stopGame(){
  if(game){
    if(game.raf) cancelAnimationFrame(game.raf);
    clearTimeout(game.leanT);
    clearTimeout(game.nextT);
    game.running = false;
  }
  game = null;
  document.onkeydown = null;
}

/* ---------- 화면 구성 (한 판에 한 번만 그림) ---------- */
function renderGame(){
  botnav.classList.add('hidden');
  stopGame();
  const s = session;

  app.innerHTML = topbar() + `
    <div class="quiz-top">
      <button class="btn ghost" style="width:auto;padding:8px 12px" id="quitBtn">←</button>
      <div class="progress"><i id="rgProg" style="width:0%"></i></div>
      <div class="streak off" id="streak">🔥 0</div>
    </div>
    <div class="q-count" id="rgCount">${L.qCount(1, s.qs.length)}</div>

    <div class="rg-stage" id="rgStage">
      <div class="rg-world">
        <div class="rg-floor">
          <div class="rg-ballast" style="left:calc(50% - ${RG.LANE_X}px)"></div>
          <div class="rg-ballast" style="left:50%"></div>
          <div class="rg-ballast" style="left:calc(50% + ${RG.LANE_X}px)"></div>
          <div class="rg-ties"></div>
          <div class="rg-rail" style="left:calc(50% - ${RG.LANE_X}px)"></div>
          <div class="rg-rail" style="left:50%"></div>
          <div class="rg-rail" style="left:calc(50% + ${RG.LANE_X}px)"></div>
        </div>
        <div class="rg-parked l"></div>
        <div class="rg-parked r"></div>
        <div class="rg-wall l"></div>
        <div class="rg-wall r"></div>
        <div class="rg-track" id="rgTrack"></div>
      </div>

      <div class="rg-fog"></div>
      <div class="rg-vanish"></div>
      <div class="rg-speed"></div>
      <div class="rg-arrows"><i>◀</i><i>▶</i></div>

      <div class="rg-player" id="rgPlayer">
        <div class="rg-shadow"></div>
        <div class="rg-train">
          <div class="t-roof"></div>
          <div class="t-body">
            <div class="t-win"></div><div class="t-win"></div>
            <div class="t-light l"></div><div class="t-light r"></div>
          </div>
          <div class="t-wheels"></div>
        </div>
        <div class="rg-flame">🔥</div>
      </div>

      <div class="rg-hud">
        <div class="rg-prompt">
          <div class="rg-plabel" id="rgLabel"></div>
          <div class="rg-pword kr" id="rgWord"></div>
          <div class="rg-ppron" id="rgPron"></div>
        </div>
        <div class="rg-coins"><span class="mini-coin">₩</span><span id="rgCoins">0</span></div>
        <div class="rg-mult" id="rgMult">x2 🔥</div>
        <div class="rg-hint" id="rgHint">${L.rgHint}</div>
      </div>

      <div class="rg-flash" id="rgFlash"></div>
      <div class="rg-boom" id="rgBoom">💥</div>
      <div class="won-pop" id="wonPop"></div>
      <div class="won-pop coin" id="coinPop"></div>
    </div>

    <div class="lives" id="lives">${livesHtml(s.lives)}</div>
    <div id="noteSlot"></div>`;

  const stage = $('#rgStage');
  game = {
    stage, track:$('#rgTrack'), player:$('#rgPlayer'),
    objs:[], station:null, lane:0, mult:1,
    running:true, raf:0, last:0, leanT:0, nextT:0, lastTouch:0,
  };
  rgBindInput(stage);
  $('#quitBtn').onclick = ()=>{ stopGame(); session = null; renderHome(); };

  rgSpawnStation();
  game.raf = requestAnimationFrame(rgLoop);
}

/* ---------- 입력: 스와이프 / 좌우 탭 / 방향키 ---------- */
function rgBindInput(stage){
  let sx = null, sy = null, swiped = false;

  stage.addEventListener('touchstart', e=>{
    const t = e.touches[0]; sx = t.clientX; sy = t.clientY; swiped = false;
  }, {passive:true});

  stage.addEventListener('touchmove', e=>{
    if(sx===null || swiped) return;
    const t = e.touches[0], dx = t.clientX - sx, dy = t.clientY - sy;
    if(Math.abs(dx) > 26 && Math.abs(dx) > Math.abs(dy)){
      swiped = true;
      rgMove(dx > 0 ? 1 : -1);
    }
  }, {passive:true});

  stage.addEventListener('touchend', e=>{
    if(!swiped && sx!==null){          // 스와이프가 아니면 좌/우 탭으로 처리
      const r = stage.getBoundingClientRect();
      rgMove(sx - r.left < r.width/2 ? -1 : 1);
    }
    game && (game.lastTouch = Date.now());
    sx = null;
  }, {passive:true});

  stage.addEventListener('click', e=>{
    // 터치 직후 발생하는 유령 클릭 무시 (한 번 입력에 두 칸 이동 방지)
    if(game && Date.now() - game.lastTouch < 600) return;
    const r = stage.getBoundingClientRect();
    rgMove(e.clientX - r.left < r.width/2 ? -1 : 1);
  });

  document.onkeydown = e=>{
    if(!game) return;
    if(e.key==='ArrowLeft'  || e.key==='a' || e.key==='A'){ e.preventDefault(); rgMove(-1); }
    if(e.key==='ArrowRight' || e.key==='d' || e.key==='D'){ e.preventDefault(); rgMove(1);  }
  };
}

/* 레인 이동 (-1 왼쪽 / 0 가운데 / 1 오른쪽) */
function rgMove(delta){
  const g = game;
  if(!g || !g.running) return;
  const next = Math.max(-1, Math.min(1, g.lane + delta));
  if(next === g.lane) return;
  g.lane = next;
  g.player.style.transform = `translateX(${next * RG.LANE_X}px)`;
  g.player.classList.remove('lean-l','lean-r');
  g.player.classList.add(delta > 0 ? 'lean-r' : 'lean-l');
  clearTimeout(g.leanT);
  g.leanT = setTimeout(()=>{
    if(game && game.player) game.player.classList.remove('lean-l','lean-r');
  }, 200);
  const hint = $('#rgHint');
  if(hint) hint.classList.add('gone');
}

/* ---------- 오브젝트 생성/배치 ---------- */
function rgPlace(o){
  o.el.style.transform = `translate3d(${o.lane * RG.LANE_X}px,0,${-o.z}px)`;
}

function rgObj(type, html, lane, z){
  const el = document.createElement('div');
  el.className = 'rg-obj ' + type;
  el.innerHTML = html;
  game.track.appendChild(el);
  const o = {el, type, lane, z};
  game.objs.push(o);
  rgPlace(o);
  return o;
}

/* 한 정거장 = 좌/우 정답 간판 + 가운데 차단벽 + 코인 줄 */
function rgSpawnStation(){
  const g = game, s = session, q = s.qs[s.i];

  // HUD: 문제 단어
  $('#rgLabel').textContent = q.label;
  const wEl = $('#rgWord');
  wEl.textContent = q.promptText;
  wEl.classList.toggle('long', q.promptText.length > 9);
  $('#rgPron').textContent = (q.dir==='ko2mean' && q.w.pron) ? q.w.pron : '';
  $('#rgCount').textContent = L.qCount(s.i+1, s.qs.length);
  $('#rgProg').style.width = (s.i / s.qs.length * 100) + '%';

  const gateHtml = `<div class="gate-in"><div class="gate-panel"></div><div class="gate-legs"></div></div>`;
  const gL = rgObj('gate', gateHtml, -1, RG.Z_SPAWN);
  const gR = rgObj('gate', gateHtml,  1, RG.Z_SPAWN);
  rgSetPanel(gL, q.options[0]);
  rgSetPanel(gR, q.options[1]);

  const bar = rgObj('barrier', `<div class="barrier-in"></div>`, 0, RG.Z_SPAWN);

  g.station = {q, gates:{'-1':gL, '1':gR}, barrier:bar, resolved:false};

  // 코인 줄 — 정답 위치와 무관한 랜덤 레인, 간판보다 먼저 도착
  const lane = [-1,0,1][Math.floor(Math.random()*3)];
  const n = 3 + Math.floor(Math.random()*3);
  for(let k=0;k<n;k++){
    rgObj('coin', `<div class="coin-in"><div class="coin-face">₩</div></div>`,
          lane, RG.Z_SPAWN*0.58 - k*120);
  }
}

/* 간판에 보기 텍스트 넣기 — 긴 답은 글자를 줄여 넘치지 않게 */
function rgSetPanel(gate, text){
  const p = gate.el.querySelector('.gate-panel');
  p.textContent = text;              // 직접 추가한 단어의 HTML 주입 차단
  p.classList.toggle('sm', text.length > 12);
  p.classList.toggle('xs', text.length > 21);
  gate.answer = text;
}

function rgClearObjs(){
  game.objs.forEach(o=>o.el.remove());
  game.objs = [];
  game.station = null;
}

/* ---------- 메인 루프 ---------- */
function rgLoop(ts){
  const g = game;
  if(!g || !g.running) return;
  if(!g.last) g.last = ts;
  let dt = (ts - g.last) / 1000;
  g.last = ts;
  if(dt > 0.1) dt = 0.1;                      // 탭 전환 후 순간이동 방지
  const dz = (RG.Z_SPAWN / RG.APPROACH_S) * dt;

  for(let i=g.objs.length-1; i>=0; i--){
    const o = g.objs[i];
    o.z -= dz;
    rgPlace(o);
    if(o.type==='coin' && !o.taken && o.z <= 40 && o.z > -80 && o.lane === g.lane){
      rgTakeCoin(o);
    }
    if(o.z <= RG.Z_GONE){ o.el.remove(); g.objs.splice(i,1); }
  }

  const st = g.station;
  if(st && !st.resolved && st.barrier.z <= 0){
    st.resolved = true;
    rgResolve();
  }
  if(g.running) g.raf = requestAnimationFrame(rgLoop);
}

function rgTakeCoin(o){
  o.taken = true;
  o.el.style.transition = 'opacity .22s, transform .22s';
  o.el.style.opacity = '0';
  const val = RG.COIN_VALUE * game.mult;
  session.coins += val;
  session.earned += val;
  updateBank(val);
  const c = $('#rgCoins');
  if(c) c.textContent = session.coins;
  popText('#coinPop', `+${val} ₩`, 'coin');
}

/* 플로팅 텍스트 (애니메이션 재시작 포함) */
function popText(sel, text, cls){
  const el = $(sel);
  if(!el) return;
  el.textContent = text;
  el.className = `won-pop ${cls}`;
  void el.offsetWidth;
  el.classList.add('go');
}

function rgFlash(good){
  const f = $('#rgFlash');
  if(!f) return;
  f.className = 'rg-flash';
  void f.offsetWidth;
  f.className = 'rg-flash ' + (good ? 'good' : 'bad');
}

/* 하트 하나 깨뜨리기 (남은 개수 기준) */
function breakHeart(remaining){
  const el = $('#lives');
  if(!el) return;
  const heart = el.querySelector(`.heart[data-heart="${remaining}"]`);
  if(heart) heart.classList.add('losing');
}

/* ---------- 정거장 판정 ---------- */
function rgResolve(){
  const g = game, s = session, st = g.station, q = st.q;
  const gate = g.lane === 0 ? null : st.gates[String(g.lane)];
  const chosen = gate ? gate.answer : null;     // 가운데 = 미선택 → 오답 처리
  const correct = chosen === q.answer;

  s.played = s.i + 1;
  const w = q.w;
  w.seen++;

  if(correct){
    const gain = REWARD * g.mult;
    s.correct++; s.streak++; s.earned += gain;
    w.correctStreak++; w.totalCorrect++;
    if(w.correctStreak>=KNOWN_STREAK && w.status!=="master"){
      w.status = w.correctStreak>=6 ? "master" : "known";
    } else if(w.status==="new"){ w.status="learning"; }
    bestStreak = Math.max(bestStreak, s.streak);
    updateBank(gain);

    gate.el.querySelector('.gate-in').classList.add('hit');
    st.gates[String(-g.lane)].el.querySelector('.gate-in').classList.add('miss');
    rgFlash(true);
    popText('#wonPop', `+${gain} ₩`, 'good');
    rgUpdateBoost();
    rgSyncStreak();
    persistProgress();

    // 멈추지 않고 그대로 다음 정거장으로 (간판은 뒤로 흘러 지나감)
    g.nextT = setTimeout(()=>{
      if(!game || !session) return;
      s.i++;
      if(s.i >= s.qs.length){ renderResult(); return; }
      rgSpawnStation();
    }, 420);
    return;
  }

  /* ----- 충돌 ----- */
  s.streak = 0;
  s.lives--;
  w.correctStreak = 0;
  if(w.status==="known") w.status="learning";   // 살짝 강등
  updateBank(-PENALTY);

  if(gate) gate.el.querySelector('.gate-in').classList.add('miss');
  const right = st.gates['-1'].answer === q.answer ? st.gates['-1'] : st.gates['1'];
  right.el.querySelector('.gate-in').classList.add('hit');

  g.running = false;
  cancelAnimationFrame(g.raf);
  g.player.classList.add('crash');
  const boom = $('#rgBoom');
  if(boom){ void boom.offsetWidth; boom.classList.add('go'); }
  rgFlash(false);
  popText('#wonPop', `−${PENALTY} ₩`, 'bad');
  g.stage.classList.add('shake');
  document.body.classList.add('shake');
  setTimeout(()=>document.body.classList.remove('shake'), 520);
  breakHeart(s.lives);
  g.mult = 1;
  rgUpdateBoost();
  rgSyncStreak();
  persistProgress();

  $('#noteSlot').innerHTML = `<div class="answer-note">
    <div>${L.answerWas} <span class="cor kr">${q.answer}</span></div>
    <div class="ex kr">${q.w.ko} — ${q.w.mean}</div>
  </div>`;

  if(s.lives <= 0){
    s.over = true;
    $('#noteSlot').insertAdjacentHTML('beforeend', `
      <div class="gameover-note">
        <b>💥 ${L.gameOverTitle}</b>
        <span>${L.gameOverSub}</span>
      </div>
      <button class="btn chili" id="nextBtn" style="margin-top:14px">${L.gameOverBtn}</button>`);
    $('#nextBtn').onclick = ()=>renderResult();
  } else {
    // 정답을 다시 읽고 외울 시간을 주기 위해 버튼을 눌러야 재출발
    $('#noteSlot').insertAdjacentHTML('beforeend', `
      <div style="text-align:center;color:var(--cream-dim);font-size:.8rem;margin-top:10px">
        ❤️ ${L.livesLeft(s.lives)}</div>
      <button class="btn" id="nextBtn" style="margin-top:12px">${L.rgRestart}</button>`);
    $('#nextBtn').onclick = ()=>rgResume();
  }
}

/* 충돌 후 재출발 */
function rgResume(){
  const g = game, s = session;
  if(!g || !s) return;
  s.i++;
  if(s.i >= s.qs.length){ renderResult(); return; }
  $('#noteSlot').innerHTML = '';
  rgClearObjs();
  g.lane = 0;
  g.player.classList.remove('crash','lean-l','lean-r');
  g.player.style.transform = 'translateX(0)';
  g.stage.classList.remove('shake');
  const boom = $('#rgBoom');
  if(boom) boom.classList.remove('go');
  rgSpawnStation();
  g.running = true;
  g.last = 0;
  g.raf = requestAnimationFrame(rgLoop);
}

/* 연속 정답 부스트 (x2) */
function rgUpdateBoost(){
  const g = game, s = session;
  g.mult = s.streak >= RG.BOOST_AT ? 2 : 1;
  const on = g.mult > 1;
  g.stage.classList.toggle('boosting', on);
  g.player.classList.toggle('boost', on);
  const m = $('#rgMult');
  if(m) m.classList.toggle('on', on);
}

function rgSyncStreak(){
  const st = $('#streak');
  if(!st) return;
  st.textContent = `🔥 ${session.streak}`;
  st.className = 'streak ' + (session.streak===0 ? 'off' : '');
}

/* ---------- 결과 ---------- */
function renderResult(){
  botnav.classList.add('hidden');
  stopGame();
  const s = session;
  const isTrain = s.mode !== 'quiz';
  const gameOver = isTrain && s.lives<=0;
  const total = gameOver ? (s.played || s.i+1) : s.qs.length;
  const img = gameOver ? IMG.cry
            : s.correct>=8 ? IMG.money
            : s.correct>=5 ? IMG.excited : IMG.surprised;
  const title = gameOver ? L.gameOverTitle
              : (isTrain && s.correct===s.qs.length) ? L.clearTitle
              : L.resultTitle(s.correct);

  // 기차 게임만 하트·정거장·코인을 표시, 단어 퀴즈는 점수만 간결하게
  const trainStats = isTrain ? `
        <div style="font-size:1.3rem;letter-spacing:3px;margin-bottom:14px">${livesHtml(Math.max(0,s.lives))}</div>
        <div class="score" style="margin-bottom:6px">🚉 ${L.stationsPassed(s.correct)}</div>
        <div class="score" style="margin-bottom:14px;color:var(--gold)">
          <span class="mini-coin">₩</span> ${L.coinsPicked(s.coins||0)}</div>` : ``;

  app.innerHTML = backBtn() + topbar() + `
    <div class="result">
      <div id="captureArea">
        <img src="${img}" alt="">
        <h2>${title}</h2>
        <div class="score">${L.resultScore(s.correct, total)}</div>
        ${trainStats}
        <div class="earned">💰 +${wonFmt(s.earned)} ${L.earned}</div>
      </div>
      <div class="btn-row" style="flex-direction:column">
        <button class="btn" id="moreBtn">${isTrain ? L.more : L.moreQuiz}</button>
        <button class="btn secondary" id="homeBtn">${L.home}</button>
        <button class="btn secondary" id="shareBtn">📤 ${L.share}</button>
      </div>
    </div>`;
  wireBackBtn();
  $('#moreBtn').onclick = ()=> isTrain ? startSession(s.source) : startQuiz(s.source);
  $('#homeBtn').onclick = ()=>{ session = null; renderHome(); };
  $('#shareBtn').onclick = shareResult;
}

/* ---------- 결과 캡처 & 공유 ---------- */
async function shareResult(){
  if(typeof html2canvas === 'undefined'){
    alert('html2canvas not loaded');
    return;
  }
  try{
    const canvas = await html2canvas($('#captureArea'), {backgroundColor:'#151A2E'});
    canvas.toBlob(async (blob)=>{
      if(!blob) return;
      const file = new File([blob], 'voca-bank-result.png', {type:'image/png'});
      if(navigator.canShare && navigator.canShare({files:[file]})){
        try{ await navigator.share({files:[file], title:'Voca Bank'}); }
        catch(e){ /* user cancelled share */ }
      } else {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'voca-bank-result.png';
        link.click();
      }
    }, 'image/png');
  } catch(e){
    console.error(e);
  }
}

/* ---------- 하단 네비 ---------- */
function setNav(active){
  botnav.querySelectorAll('button').forEach(b=>{
    b.classList.toggle('active', b.dataset.nav===active);
  });
}
botnav.querySelectorAll('button').forEach(b=>{
  b.onclick = ()=>{
    const nav=b.dataset.nav;
    if(nav==="home") renderHome();
    else if(nav==="words") renderWords();
    else if(nav==="learned") renderLearned();
    else if(nav==="known") renderKnown();
    else if(nav==="help") renderHelp();
  };
});

/* ---------- 시작 ---------- */
if(window.fb) initApp();
else window.addEventListener('fb-ready', initApp);
