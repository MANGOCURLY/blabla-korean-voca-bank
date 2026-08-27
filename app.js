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
const WORD_COLORS = ["#A25379","#F2685E","#4FBE6C","#8A7FFF","#5BA8E5"];

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
    loginDesc: "Chaque bonne réponse te rapporte des wons. Fais grossir ta banque !",
    google: "Continuer avec Google",
    demoHint: "Démo interne. Même contenu que le mode invité.",
    hi: "Salut",
    welcome: "Prêt à gagner des wons ?",
    statLearned: "Appris", statKnown: "Mémorisés", statStreak: "Série record",
    review: "Réviser mes mots 🃏",
    reviewSub: "Cartes-mémo · sans score, sans stress",
    words: "Mes mots par date",
    wordsSub: "Tout ce qu'on a appris",
    knownMenu: "Mots mémorisés & maîtrisés",
    knownSub: "Ta collection",
    todayReview: "à réviser",
    sectionPlay: "S'entraîner", sectionTest: "Tester", sectionBrowse: "Parcourir",
    promptKo: "Que veut dire…", promptMean: "Comment dit-on…",
    correct: "Bravo !", wrong: "Aïe, ça pique !",
    answerWas: "La bonne réponse :",
    next: "Continuer →",
    home: "Retour à l'accueil",
    resultTitle: (n)=> n>=9?"Champion piquant !": n>=7?"Bien joué !": n>=5?"Pas mal !":"Continue !",
    resultScore: (c,t)=>`${c} bonnes réponses sur ${t}`,
    earned: "gagnés",
    notEnoughTitle: "Pas assez de mots",
    notEnoughSub: "Il te faut au moins 2 mots (les phrases ne comptent pas) pour jouer au quiz. Ajoute des mots ou attends le prochain cours !",
    /* 🎯 quiz de mots classique */
    quiz: "Quiz de mots 🎯",
    quizSub: "4 choix · à ton rythme, sans chrono",
    quizAll: "Quiz mélangé 🎲",
    quizAllSub: "Tout ce que tu as ouvert · 4 choix",
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
    reviewDoneSub: "Tu as parcouru toutes tes cartes. Prêt pour le quiz ?",
    reviewAgain: "🔁 Revoir les cartes",
    reviewEmptyTitle: "Rien à réviser",
    reviewEmptySub: "Aucun mot à réviser pour l'instant. Ajoute des mots ou attends le prochain cours !",
    reviewEmptyLearned: "Tu n'as pas encore de mot appris. Commence par une unité dans « Apprendre de nouveaux mots ».",
    known: "Mémorisés", master: "Maîtrisés", learning: "En cours",
    emptyKnown: "Pas encore de mot mémorisé. Réponds juste 3 fois de suite à un mot pour le débloquer !",
    navHome:"Accueil", navWords:"Mots", navLearned:"Appris", navKnown:"Mémorisés", navHelp:"Aide",
    helpTitle:"Comment ça marche",
    help: [
      ["🎯","Le quiz de mots","10 questions à 4 choix, sans chrono. Seuls les mots sont posés en question, jamais les phrases."],
      ["🃏","Les cartes-mémo","Le mode révision, sans score ni pression : touche la carte pour retourner le mot et voir le sens. Prends ton temps, rien n'est compté."],
      ["💰","La banque de wons","+100 wons par bonne réponse. Une erreur ne coûte rien : tente ta chance sans risque."],
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
    learnedSub: "Tous niveaux confondus",
    emptyLearned: "Pas encore de mot appris. Commence l'entraînement pour en débloquer !",
    emptyStudied: "Tu n'as encore étudié aucun mot. Ouvre une unité pour commencer.",
    addWord: "Ajouter un mot",
    addWordSub: "Ton vocabulaire personnel",
    addWordKoLabel: "Mot en coréen",
    addWordMeanLabel: "Sens en français",
    addWordSave: "Enregistrer",
    addWordCancel: "Annuler",
    addWordEmptyError: "Remplis les deux champs.",
    addWordDuplicateError: "Ce mot existe déjà dans ta liste.",
    addWordDemoNotice: "Mode démo : ce mot ne sera pas sauvegardé après un rafraîchissement.",
    bulkAdd: "📋 Coller plusieurs mots",
    bulkAddSub: "Un mot par ligne, séparé par « - », « : » ou une tabulation",
    bulkPlaceholder: "내일 - Demain\n매일 - Tous les jours\n오늘 - Aujourd'hui",
    bulkPreviewTitle: "Aperçu",
    bulkAddBtn: (n)=>n ? `Ajouter ${n} mot${n>1?'s':''}` : "Rien à ajouter",
    bulkNothing: "Aucun mot lisible. Vérifie le format.",
    bulkSkipped: (n)=>`${n} ligne${n>1?'s':''} ignorée${n>1?'s':''} (format ou doublon).`,
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
    loginError: "La connexion a échoué. Réessaie dans un instant.",
    /* 🧪 mode invité (v3 §5) */
    guestBtn: "Découvrir en invité",
    guestNoSave: "Ta progression ne sera pas enregistrée.",
    guestName: "Invité",
    guestLoginToSave: "Se connecter et sauvegarder",
    wallTitle: "Fin de la découverte.",
    wallBody: (n)=>`Tu as appris ${n} mot${n>1?'s':''}. Connecte-toi pour les garder et continuer.`,
    wallMore: "Explorer encore un peu",
    wallBackToLogin: "Revenir à l'écran de connexion",
    continueStudy: "Continuer",
    unitSection: "Apprendre de nouveaux mots",
    unitLocked: "Verrouillé",
    unitLockedHint: "Vois tous les mots de l'unité précédente au quiz pour ouvrir celle-ci.",
    unitLearnCards: "Apprendre avec les cartes",
    unitLearnCardsSub: "Sans score, sans stress",
    unitDoQuiz: "Faire le quiz",
    unitNamed: (n, lvl)=>`Unité ${n} · ${lvl}`,
    unitSeenLabel: "vus",
    unitCustom: "Mes mots",
    unitUnsorted: "Autres",
    levelSection: "Niveau",
    levelA: "Débutant",
    levelB: "Intermédiaire",
    levelC: "Avancé",
    packLoadError: "Impossible de charger le paquet de mots. Vérifie ta connexion et rafraîchis la page.",
    ltSkip: "Passer",
    ltRetake: "Test de niveau Voca",
    ltRetakeSub: "21 questions · environ 2 min",
    ltYourStart: "Votre point de départ",
    ltUnitLine: (n, letter, name)=>`Unité ${n} · ${letter} ${name}`,
    ltOfCorrect: (c, t)=>`${c} bonnes réponses sur ${t}`,
    ltStartHere: "Commencer ici",
    ltStartOver: "Recommencer depuis le début",
    ltStartTitle: (name, n)=>`🎉 Ton niveau : ${name} (autour de l'unité ${n})`,
    ltStartBody: "On commence par la première unité pour bien poser les bases. Tu avanceras vite sur ce que tu connais déjà.",
    ltStartBtn: "Commencer",
    feedbackTitle: "Envoyer un avis 💌",
    feedbackBody: "Voca Bank est 100 % gratuit. Dis-nous ce qui ne va pas, on l'améliorera.",
    feedbackBtn: "Écrire un e-mail",
    legalPrivacy: "Politique de confidentialité",
    legalTerms: "Mentions légales · CGU",
    siteLink: "blablakorea.fr",
    hangulTest: "Test de niveau de coréen 🇰🇷",
    hangulTestSub: "Sur blablakorea.fr. E-mail demandé. Langue réglable au début du test.",
    sheetLoadWarn: "Tes mots de cours n'ont pas pu être chargés. Les unités fonctionnent normalement. Rafraîchis la page pour réessayer.",
    saveFailWarn: "Ta progression n'a pas pu être enregistrée. Reste connecté et rafraîchis la page. Si le problème continue, écris-nous.",
    feedbackCopy: "Copier l'adresse",
    feedbackCopied: "Copié !",
    unitPickHint: "Touche l'unité pour changer d'unité.",
    unitPickTitle: "Unités",
    unitMoreLocked: (n)=>`${n} unité${n>1?'s':''} verrouillée${n>1?'s':''}`,
  },
  en: {
    tagline: "Learn Korean the spicy way 🌶️",
    loginTitle: ["Your Korean", "word bank"],
    loginDesc: "Every correct answer earns you won. Grow your bank!",
    google: "Continue with Google",
    demoHint: "Internal demo. Same content as guest mode.",
    hi: "Hi",
    welcome: "Ready to earn some won?",
    statLearned: "Learned", statKnown: "Memorized", statStreak: "Best streak",
    review: "Review my words 🃏",
    reviewSub: "Flashcards · no score, no stress",
    words: "My words by date",
    wordsSub: "Everything we've learned",
    knownMenu: "Memorized & mastered words",
    knownSub: "Your collection",
    todayReview: "due",
    sectionPlay: "Practice", sectionTest: "Test", sectionBrowse: "Browse",
    promptKo: "What does this mean…", promptMean: "How do you say…",
    correct: "Nice!", wrong: "Ouch, spicy!",
    answerWas: "Correct answer:",
    next: "Continue →",
    home: "Back to home",
    resultTitle: (n)=> n>=9?"Spicy champion!": n>=7?"Well done!": n>=5?"Not bad!":"Keep going!",
    resultScore: (c,t)=>`${c} correct out of ${t}`,
    earned: "earned",
    notEnoughTitle: "Not enough words",
    notEnoughSub: "You need at least 2 words (sentences don't count) to play the quiz. Add some words or wait for your next class!",
    /* 🎯 classic word quiz */
    quiz: "Word quiz 🎯",
    quizSub: "4 choices · your own pace, no timer",
    quizAll: "Mixed quiz 🎲",
    quizAllSub: "Everything you've unlocked · 4 choices",
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
    reviewDoneSub: "You've been through every card. Ready for the quiz?",
    reviewAgain: "🔁 Review again",
    reviewEmptyTitle: "Nothing to review",
    reviewEmptySub: "No words to review right now. Add some words or wait for your next class!",
    reviewEmptyLearned: "You have no learned words yet. Start with a unit in \"Learn new words\".",
    known: "Memorized", master: "Mastered", learning: "Learning",
    emptyKnown: "No memorized words yet. Answer a word right 3 times in a row to unlock it!",
    navHome:"Home", navWords:"Words", navLearned:"Learned", navKnown:"Memorized", navHelp:"Help",
    helpTitle:"How it works",
    help: [
      ["🎯","The word quiz","10 questions with 4 choices, no timer. Only words are quizzed, never sentences."],
      ["🃏","Flashcards","The review mode, with no score and no pressure: tap a card to flip the word and see its meaning. Take your time, nothing is counted."],
      ["💰","The won bank","+100 won per correct answer. A miss costs you nothing. Guess without fear."],
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
    learnedSub: "All levels together",
    emptyLearned: "No learned words yet. Start practicing to unlock some!",
    emptyStudied: "You haven't studied any words yet. Open a unit to start.",
    addWord: "Add a word",
    addWordSub: "Your personal vocabulary",
    addWordKoLabel: "Korean word",
    addWordMeanLabel: "Meaning in English",
    addWordSave: "Save",
    addWordCancel: "Cancel",
    addWordEmptyError: "Please fill in both fields.",
    addWordDuplicateError: "This word is already in your list.",
    addWordDemoNotice: "Demo mode: this word won't be saved after a refresh.",
    bulkAdd: "📋 Paste several words",
    bulkAddSub: "One word per line, separated by \"-\", \":\" or a tab",
    bulkPlaceholder: "내일 - Tomorrow\n매일 - Every day\n오늘 - Today",
    bulkPreviewTitle: "Preview",
    bulkAddBtn: (n)=>n ? `Add ${n} word${n>1?'s':''}` : "Nothing to add",
    bulkNothing: "No readable word. Check the format.",
    bulkSkipped: (n)=>`${n} line${n>1?'s':''} skipped (bad format or duplicate).`,
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
    loginError: "Sign-in failed. Please try again in a moment.",
    /* 🧪 guest mode (v3 §5) */
    guestBtn: "Try as a guest",
    guestNoSave: "Your progress won't be saved.",
    guestName: "Guest",
    guestLoginToSave: "Log in and save",
    wallTitle: "That's the end of the trial.",
    wallBody: (n)=>`You've learned ${n} word${n===1?'':'s'} so far. Log in to save them and keep going.`,
    wallMore: "Look around a bit more",
    wallBackToLogin: "Back to the login screen",
    continueStudy: "Continue",
    unitSection: "Learn new words",
    unitLocked: "Locked",
    unitLockedHint: "See every word of the previous unit in the quiz to unlock this one.",
    unitLearnCards: "Learn with flashcards",
    unitLearnCardsSub: "No score, no pressure",
    unitDoQuiz: "Take the quiz",
    unitNamed: (n, lvl)=>`${lvl} Unit ${n}`,
    unitSeenLabel: "seen",
    unitCustom: "My words",
    unitUnsorted: "Other",
    levelSection: "Level",
    levelA: "Beginner",
    levelB: "Intermediate",
    levelC: "Advanced",
    packLoadError: "Couldn't load the word pack. Check your connection and refresh the page.",
    ltSkip: "Skip",
    ltRetake: "Voca level test",
    ltRetakeSub: "21 questions · about 2 min",
    ltYourStart: "Your starting point",
    ltUnitLine: (n, letter, name)=>`Unit ${n} · ${letter} ${name}`,
    ltOfCorrect: (c, t)=>`${c} of ${t} correct`,
    ltStartHere: "Start here",
    ltStartOver: "Start from the beginning",
    ltStartTitle: (name, n)=>`🎉 Your level: ${name} (around unit ${n})`,
    ltStartBody: "We'll start from the first unit to build a solid base. You'll move fast through what you already know.",
    ltStartBtn: "Start here",
    feedbackTitle: "Send feedback 💌",
    feedbackBody: "Voca Bank is 100% free. Tell us what's wrong and we'll make it better.",
    feedbackBtn: "Write an email",
    legalPrivacy: "Privacy policy",
    legalTerms: "Legal notice · Terms",
    siteLink: "blablakorea.fr",
    hangulTest: "Korean level test 🇰🇷",
    hangulTestSub: "On blablakorea.fr. Email required. Language switch at the start.",
    sheetLoadWarn: "Your class words could not be loaded. Units still work. Refresh the page to try again.",
    saveFailWarn: "Your progress could not be saved. Stay signed in and refresh the page. If it keeps happening, write to us.",
    feedbackCopy: "Copy the address",
    feedbackCopied: "Copied!",
    unitPickHint: "Tap the unit to switch units.",
    unitPickTitle: "Units",
    unitMoreLocked: (n)=>`${n} more locked`,
  }
};

/* ---------- 샘플 학생 & 단어 (데모용) ----------
   실제로는 구글시트에서 불러옴. type: word | sentence
   상태(state)는 로컬에서만 관리(데모).                              */
const SAMPLE = {
  fr: {
    lang:"fr",
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
  en: {
    lang:"en",
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
let L = T.en;         // current language pack — 공개 배포 기본은 영어
function detectInitialLang(){
  try{
    const saved = localStorage.getItem('blabla_login_lang');
    if(saved === 'fr' || saved === 'en') return saved;
  }catch(e){}
  try{
    const browserLang = (navigator.language || navigator.languages?.[0] || 'en').split('-')[0];
    return (browserLang === 'fr') ? 'fr' : 'en'; // T 객체에 fr/en만 있다. 기본은 영어
  }catch(e){ return 'en'; }
}
let loginLang = detectInitialLang();  // 로그인 화면 전용 미리보기 언어 (로그인 전에만 사용)
let session = null;   // 🎯 퀴즈 세션
let review  = null;   // 🃏 플래시카드 복습 세션
let bank = 0;
let bestStreak = 0;
let currentUserEmail = null; // Firebase 로그인 이메일 (데모 모드면 null)
let currentUid = null;       // Firestore 문서 키. 이메일 평문을 키로 쓰지 않는다
let currentPackId = null;    // invites 문서의 packId
let currentPackLevel = null; // 오픈/게스트의 A/B/C. 시트 학생은 null
let currentUnitId = null;    // 지금 학습 중인 유닛
let studentProg = { cur: null, u: {}, lvl: null };  // students.prog (홈은 유닛 문서를 안 읽는다)
let loadedUnits = new Set();
let learnedCache = null;      // null = 아직 안 만듦. 세션당 1회. student.words 에 합치지 않는다
let learnedCacheEpoch = 0;
let learnedCacheInflight = null;
function dropLearnedCache(){
  learnedCache = null;
  learnedCacheEpoch++;
  learnedCacheInflight = null;
  // sheetUnitsLoaded 는 여기서 끄지 않는다.
  // 이 함수는 퀴즈 채점 중에도 불린다 (app.js 의 quizAnswer).
  // 시트 유닛 카드는 팩 퀴즈로 바뀌지 않으므로 다시 읽을 이유가 없다.
}
let customWordsLoaded = false;
let pendingUnits = new Set(); // 저널에 쌓인 유닛 (세션 종료 시 1문서씩 커밋)
let showPron = false;        // 발음 표시 토글 (세션 전체 공용, 문제별 개별 아님)
let progressLocked = false;  // Firestore 진도 로딩 실패 시 true → 저장(덮어쓰기) 잠금으로 기존 데이터 보호
let sheetFailed = false;     // 시트 CSV 실패. 팩은 있으므로 앱은 연다
let saveFailed = false;      // 세션 저장이 한 번이라도 거부됐다
let sheetUnitsLoaded; // 시트 유닛 진도 세션 가드. 계정·단어 배열이 바뀔 때만 false
let isGuest = false;         // 게스트 체험 (v3 §5). 익명 인증도, Firestore 접근도 없다
let studentDocExists = false; // 첫 오픈 로그인은 레벨 테스트 뒤에 students 문서를 1회 만든다
let pendingLevelTest = false;
let levelTest = null;
let levelTestCache = null;

/* 오답 페널티는 폐지했다 (v3 D7) — 틀린 답에서 돈을 깎으면 모르는 단어를 피하게 된다.
   틀린 문항은 돈 대신 세션 끝 재출제 1회로 되갚는다 (§3.4-1). */
const REWARD = 100, KNOWN_STREAK = 3;

/* 배포 후 실제 URL 로 바꾼다. 비어 있으면 링크를 아예 그리지 않는다 */
const LEGAL_URL = {
  fr: { privacy: 'legal/confidentialite.html', terms: 'legal/mentions-cgu.html' },
  en: { privacy: 'legal/privacy.html',         terms: 'legal/legal-terms.html'  },
};

/* ---------- 학생 초대 (Firestore invites) ----------
   공개 구글시트 학생목록 CSV는 폐기했다. 인증 없이 열리는 URL 하나에
   전 학생의 이메일·이름·개인 시트 주소가 그대로 들어 있었다.
   이제 이메일 평문은 어디에도 두지 않고 sha256(trim·소문자) 해시를 문서 ID로 쓴다. */

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

async function sha256Hex(str){
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return [...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,'0')).join('');
}

/* 초대 문서를 돌려준다. 미등록이면 null, 조회 자체가 실패하면 throw.
   호출부는 이 둘을 반드시 다른 메시지로 구분해야 한다 —
   기존 화이트리스트 코드는 로딩 실패를 "미등록"으로 오인시키는 버그가 있었다. */
async function fetchInvite(email){
  const hash = await sha256Hex(String(email).trim().toLowerCase());
  const snap = await window.fb.getDoc(window.fb.doc(window.fb.db, 'invites', hash));
  return snap.exists() ? snap.data() : null;
}

/* ---------- 학생별 단어 CSV (구글시트) ---------- */
const vocabCache = {}; // 세션 동안만 유지, 새로고침하면 다시 fetch

function isAllowedVocabUrl(url){
  try{
    const u = new URL(url);
    return u.protocol === 'https:'
      && (u.hostname === 'docs.google.com'
          || u.hostname === 'googleusercontent.com'
          || u.hostname.endsWith('.googleusercontent.com'));
  }catch(e){ return false; }
}

async function fetchStudentVocab(url, retries=2){
  // 구글이 가끔 429/5xx를 돌려주므로 명단과 동일하게 재시도(백오프)로 방어
  let lastErr;
  for(let attempt=0; attempt<=retries; attempt++){
    try{
      const res = await fetch(url, {cache:'no-store', redirect:'follow'});
      // 시트 「웹에 게시」는 docs.google.com 에서 googleusercontent.com 으로 302 한다.
      // 최초 URL만 보면 리다이렉트 목적지를 못 막으므로 최종 URL도 같은 목록으로 본다.
      if(!isAllowedVocabUrl(res.url || url)) throw new Error('단어 CSV 주소가 허용 목록 밖입니다');
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

async function getStudentVocab(invite){
  if(!invite.vocabCsvUrl) throw new Error('vocabCsvUrl 없음');
  if(!isAllowedVocabUrl(invite.vocabCsvUrl)) throw new Error('단어 CSV 주소가 허용 목록 밖입니다');
  if(vocabCache[invite.vocabCsvUrl]) return vocabCache[invite.vocabCsvUrl];
  const words = await fetchStudentVocab(invite.vocabCsvUrl);
  if(words.length === 0) throw new Error('단어 0개');
  vocabCache[invite.vocabCsvUrl] = words;
  return words;
}
const app = document.getElementById('app');
const botnav = document.getElementById('botnav');
const fb = document.getElementById('feedback');

/* ---------- 유틸 ---------- */
const $ = (sel,el=document)=>el.querySelector(sel);

/* HTML 문자열 조립이 불가피한 곳에서만 쓴다.
   값이 요소 하나를 통째로 차지하면 escapeHtml 대신 textContent 를 쓰는 쪽이 낫다.
   시트 셀과 "나만의 단어" 입력은 사용자가 내용을 정하므로 전부 이 둘 중 하나를 거쳐야 한다. */
function escapeHtml(s){
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
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

/* 품사 뱃지 번역 (v3 §2.4). 목록에 없는 값은 시트 원문을 그대로 보여준다 */
const POS_LABEL = {
  fr:{'명사':'Nom','동사':'Verbe','형용사':'Adjectif','부사':'Adverbe','문법':'Grammaire','문장':'Phrase',
      '보조용언':'Auxiliaire','의존명사':'Nom dépendant','관형사':'Déterminant','고유명사':'Nom propre',
      '대명사':'Pronom','수사':'Numéral','감탄사':'Interjection','분석불능':'Autre'},
  en:{'명사':'Noun','동사':'Verb','형용사':'Adjective','부사':'Adverb','문법':'Grammar','문장':'Sentence',
      '보조용언':'Aux. verb','의존명사':'Bound noun','관형사':'Determiner','고유명사':'Proper noun',
      '대명사':'Pronoun','수사':'Numeral','감탄사':'Interjection','분석불능':'Other'}
};
function posLabel(pos){
  const raw = String(pos||'').trim();
  if(!raw) return '';
  return POS_LABEL[(L===T.en)?'en':'fr'][raw] || raw;
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

/* ---------- 불변 wordId (v3 §2.2) ----------
   진도 키로 단어 텍스트를 쓰던 방식과 배열 인덱스(w.id) 방식을 둘 다 폐지한다.
   시트 행 순서만 바뀌어도 진도가 통째로 어긋나던 것이 현재 방식의 최악점이었다.
   시트에 id 컬럼이 생기면 getWordId() 한 곳만 고치면 된다. */
async function getWordId(w){
  if(w.id) return w.id;                      // 시트에 id가 있으면 우선
  return 'h' + (await sha256Hex(w.ko + '|' + w.mean)).slice(0, 12);
}

/* 카드가 없으면 곧 "아직 안 본 단어"다 → 저장하지 않는다.
   due/interval/ease/state/lapses/firstSeenAt 은 버린다 (SRS 없음). */
const CARD_FIELDS = ['reps','correctStreak','gradedCorrect','views'];
function blankCard(){
  return {
    reps: 0,
    correctStreak: 0,
    gradedCorrect: 0,
    views: 0,
    masteredAt: null         // 유닛 문서 m[] 로만 저장. 메모리 판정용
  };
}

/* 현재 UI의 4단계 라벨은 카드 필드에서 파생시킨다 — 별도 status 필드를 두지 않는다 */
function wordStatus(w){
  if(w.masteredAt) return 'master';
  if((w.correctStreak||0) >= KNOWN_STREAK) return 'known';
  if((w.reps||0) > 0) return 'learning';
  return 'new';
}

async function buildWords(rows){
  return Promise.all(rows.map(async w=>({
    ...attachQuizFields(w),
    ...blankCard(),
    wordId: await getWordId(w)
  })));
}

/* =====================================================================
   🧪 게스트 체험 (D14, v3 §5)
   - Firebase 익명 인증을 쓰지 않는다
   - Firestore를 읽지도 쓰지도 않는다 (currentUid=null + progressLocked=true 로 기존 가드가 전부 막는다)
   - 진도는 저장하지 않고, 로그인해도 이관하지 않는다
   - 카운터는 sessionStorage — 탭을 닫으면 사라지고 localStorage에 흔적이 남지 않는다
   ===================================================================== */
/* 공용 단어 팩 — 게스트와 오픈 사용자가 같은 JSON 을 쓴다.
   Firestore 에 넣지 않는다: 정적 파일 fetch 는 읽기 과금이 없다. */
const OPEN_PACK_ID = 's-open';
const DEFAULT_OPEN_UNIT = 'ko-A-01';
const packCache = {}; // vocabCache 와 같이 세션 동안 레벨당 1회만 fetch

function normalizePackLevel(v){
  const s = String(v || 'A').toUpperCase();
  return (s === 'B' || s === 'C') ? s : 'A';
}

async function loadPack(level){
  const lv = normalizePackLevel(level);
  if(packCache[lv]) return packCache[lv];
  const res = await fetch('packs/ko-' + lv + '.json');
  if(!res.ok) throw new Error('pack fetch HTTP ' + res.status);
  const data = await res.json();
  if(!data || !Array.isArray(data.units)) throw new Error('pack JSON 형식 오류: ' + lv);
  packCache[lv] = data;
  return data;
}

function packRowsForLang(pack, lang){
  const rows = [];
  const flags = [];
  (pack.units || []).forEach(unit=>{
    (unit.words || []).forEach(pw=>{
      rows.push({
        id: pw.id,                 // getWordId 가 이 값을 그대로 wordId 로 쓴다. 뜻으로 해시면 영↔불 때 진도가 끊긴다
        ko: pw.ko,
        pos: pw.pos,
        pron: pw.pron,            // 팩에 5,965개 다 들어 있다
        mean: lang === 'fr' ? pw.fr : pw.en,
        type: 'word',
        unitId: unit.id
      });
      flags.push(pw.quiz !== false);
    });
  });
  return { rows, flags };
}

async function wordsFromPack(level, lang){
  const pack = await loadPack(level);
  const { rows, flags } = packRowsForLang(pack, lang);
  const words = await buildWords(rows);
  words.forEach((w, i)=>{
    // 플래시카드에는 남기고 퀴즈만 뺀다. attachQuizFields 는 팩 플래그를 모른다
    if(flags[i] === false) w.quizOk = false;
  });
  return words;
}

function lastUnitForLevel(level){
  const prefix = 'ko-' + normalizePackLevel(level) + '-';
  if(studentProg.cur && String(studentProg.cur).startsWith(prefix)) return studentProg.cur;
  const ids = Object.keys(studentProg.u || {})
    .filter(id => String(id).startsWith(prefix))
    .sort();
  return ids.length ? ids[ids.length - 1] : (prefix + '01');
}

async function persistProg(){
  if(!currentUid || progressLocked) return;
  studentProg.cur = currentUnitId;
  if(currentPackLevel) studentProg.lvl = currentPackLevel;
  await D().updateDoc(studentRef(), {
    prog: studentProg,
    lastUpdated: D().serverTimestamp()
  });
}

async function switchPackLevel(level){
  const lv = normalizePackLevel(level);
  if(lv === currentPackLevel) return;
  const lang = (student && student.lang) || 'en';
  let packWords;
  try{
    packWords = await wordsFromPack(lv, lang);
  }catch(e){
    console.error('팩 전환 실패:', e);
    alert(L.packLoadError);
    return;
  }
  const keep = (student.words || []).filter(w =>
    w.source === 'custom' || !isPackUnit(unitIdForWord(w)));
  student.words = packWords.concat(keep);
  currentPackLevel = lv;
  studentProg.lvl = lv;
  // 단어를 다시 만들었으므로 예전에 읽은 팩 유닛 메모리는 무효. custom·시트는 남긴다
  loadedUnits = new Set([...loadedUnits].filter(id => !isPackUnit(id)));
  const next = lastUnitForLevel(lv);
  const available = listUnitIds();
  currentUnitId = available.includes(next) ? next : defaultUnitId();
  studentProg.cur = currentUnitId;
  await loadUnit(currentUnitId);
  try{ await persistProg(); }catch(e){ console.error('레벨 저장 실패:', e); }
  renderHome();
}

const GUEST_Q_PER_WALL = 30;   // 누적 문제 수
const GUEST_S_PER_WALL = 3;    // 완료한 세션 수 (퀴즈·플래시 공통)
const GUEST_KEY = 'vocabank_guest';

function guestState(){
  try{
    const g = JSON.parse(sessionStorage.getItem(GUEST_KEY) || 'null');
    if(g) return {q:g.q|0, s:g.s|0, walls:g.walls|0,
                  learned: Array.isArray(g.learned) ? g.learned : []};
  }catch(e){}
  return {q:0, s:0, walls:0, learned:[]};
}
function guestSave(g){
  try{ sessionStorage.setItem(GUEST_KEY, JSON.stringify(g)); }catch(e){}
}
function guestReset(){
  try{ sessionStorage.removeItem(GUEST_KEY); }catch(e){}
}
/* "N단어"는 이 체험에서 맞힌 고유 단어 수 */
function guestCountQuestion(correct, wordId){
  if(!isGuest) return;
  const g = guestState();
  g.q++;
  if(correct && wordId && !g.learned.includes(wordId)) g.learned.push(wordId);
  guestSave(g);
}
function guestCountSession(){
  if(!isGuest) return;
  const g = guestState();
  g.s++;
  guestSave(g);
}
/* 벽은 30문제·3세션마다 다시 선다. 이미 한 번 섰다면(walls>0) "조금 더"는 없다 */
function guestWallDue(){
  if(!isGuest) return false;
  const g = guestState();
  const n = g.walls + 1;
  return g.q >= GUEST_Q_PER_WALL * n || g.s >= GUEST_S_PER_WALL * n;
}

/* handleLoginSuccess 를 타지 않는다 — 초대 조회도, 학생 문서도 건드리지 않기 위해서다 */
async function startGuest(){
  isGuest = true;
  currentUserEmail = null; currentUid = null; currentPackId = null;
  pendingUnits = new Set();
  loadedUnits = new Set();
  sheetUnitsLoaded = false;
  dropLearnedCache();
  customWordsLoaded = false;
  progressLocked = true;          // 저장 경로 전체 잠금
  guestReset();
  session = null; review = null;
  const lang = (loginLang === 'en') ? 'en' : 'fr';
  L = T[lang];
  renderVocabLoading(lang);
  try{
    const words = await wordsFromPack('A', lang);
    student = { name: L.guestName, lang, words };
    currentPackLevel = 'A';
    currentUnitId = DEFAULT_OPEN_UNIT;
    studentProg = { cur: currentUnitId, u: {}, lvl: 'A' };
    bank = 0; bestStreak = 0;
    document.documentElement.lang = lang;
    renderHome();
  }catch(e){
    console.error('게스트 팩 로딩 실패:', e);
    renderPackLoadError(lang, true);
  }
}

function exitGuest(){
  isGuest = false;
  dropLearnedCache();
  student = null; session = null; review = null; levelTest = null;
  bank = 0; bestStreak = 0;
  document.onkeydown = null;
  guestReset();
  renderLogin();
}

function renderGuestWall(onContinue){
  botnav.classList.add('hidden');
  document.onkeydown = null;
  const g = guestState();
  const canMore = g.walls === 0;            // 「조금 더 둘러보기」는 1회만
  guestSave({...g, walls: g.walls + 1});
  const inApp = isInAppBrowser();
  app.innerHTML = `
    <div class="result">
      <img src="${IMG.money}" alt="">
      <h2>${L.wallTitle}</h2>
      <div class="score" style="max-width:380px;margin:0 auto 18px">${L.wallBody(g.learned.length)}</div>
      <div class="btn-row" style="flex-direction:column">
        ${inApp ? '' : `<button class="btn" id="wallLoginBtn">${L.google}</button>`}
        ${canMore ? `<button class="btn secondary" id="wallMoreBtn">${L.wallMore}</button>` : ``}
        <button class="btn ghost" id="wallBackBtn">${L.wallBackToLogin}</button>
      </div>
    </div>`;
  const loginBtn = $('#wallLoginBtn');
  // 성공하면 onAuthStateChanged -> handleLoginSuccess(). 게스트 진도는 이관하지 않는다
  if(loginBtn) loginBtn.onclick = ()=>signInWithGoogle(L);
  const moreBtn = $('#wallMoreBtn');
  if(moreBtn) moreBtn.onclick = ()=>{ if(onContinue) onContinue(); else renderHome(); };
  $('#wallBackBtn').onclick = exitGuest;
}

/* ---------- 실제 학생: 이미 만들어진 단어 배열을 그대로 받는다.
   wordsFromPack / buildWords 를 여기서 다시 부르면 wordId 가 두 번 계산된다. ---------- */
async function setupStudent(invite, words, lang){
  student = { name: invite.name, lang, words };
  L = T[lang] || T.en;
  bank = 0; bestStreak = 0;
  document.documentElement.lang = lang;
}

/* =====================================================================
   Firestore 데이터 계층
     students/{uid}                        프로필 · 통계 · 팩 · prog
     students/{uid}/units/{unitId}         유닛 1개 = 문서 1개
     students/{uid}/customWords/{wordId}   개인 단어

   홈은 students.prog 만으로 그린다. 학습을 시작할 때만 그 유닛 1개를 읽는다.
   ===================================================================== */

const D = () => window.fb;
const studentRef = ()   => D().doc(D().db, 'students', currentUid);
const unitRef    = (id) => D().doc(D().db, 'students', currentUid, 'units', id);
const customRef  = (id) => D().doc(D().db, 'students', currentUid, 'customWords', id);
const subCol     = (name) => D().collection(D().db, 'students', currentUid, name);

function isSheetUser(){
  return !!(currentPackId && currentPackId !== OPEN_PACK_ID);
}

function unitIdForWord(w){
  if(!w) return DEFAULT_OPEN_UNIT;
  if(w.source === 'custom') return 'custom';
  if(w.unitId) return w.unitId;
  if(isSheetUser()){
    const d = String(w.date || '').trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(d) ? 'sheet-' + d : 'unsorted';
  }
  return DEFAULT_OPEN_UNIT;
}

function wordsInUnit(unitId){
  return (student && student.words || []).filter(w => unitIdForWord(w) === unitId);
}

function listUnitIds(){
  const ids = [];
  const seen = new Set();
  (student && student.words || []).forEach(w=>{
    const id = unitIdForWord(w);
    if(!seen.has(id)){ seen.add(id); ids.push(id); }
  });
  const rank = id => id === 'unsorted' ? 'zz0' : id === 'custom' ? 'zz1' : id;
  ids.sort((a,b)=> rank(a).localeCompare(rank(b)));
  return ids;
}

function defaultUnitId(){
  const ids = listUnitIds().filter(id => id !== 'custom');
  return ids[0] || DEFAULT_OPEN_UNIT;
}

function currentUnitWords(){
  return wordsInUnit(currentUnitId);
}

function unitTotal(unitId){
  return wordsInUnit(unitId).filter(w => w.type !== 'sentence').length;
}

function knownCountForUnit(unitId){
  // 3연속 정답. studentProg.u 는 본 수라서 여기서 쓰지 않는다.
  return wordsInUnit(unitId).filter(w => ['known','master'].includes(wordStatus(w))).length;
}

function seenCountForUnit(unitId){
  if(!currentUid || loadedUnits.has(unitId)){
    return wordsInUnit(unitId).filter(w => w.type !== 'sentence' && (w.reps|0) > 0).length;
  }
  return (studentProg.u && studentProg.u[unitId]) || 0;
}

function unitPassed(unitId){
  const total = unitTotal(unitId);
  return total > 0 && seenCountForUnit(unitId) >= total;
}

/* 팩에서 온 유닛인가. 시트 날짜 유닛(sheet-YYYY-MM-DD)과 custom 을 가른다 */
function isPackUnit(id){
  return /^ko-[ABC]-\d+$/.test(String(id||''));
}

/* 정렬된 팩 유닛 id. 해금 계산의 기준 순서다 */
function orderedUnitIds(){
  return listUnitIds().filter(isPackUnit);
}

/* 앞에서부터 몇 개 유닛이 열려 있는가.
   - 첫 유닛은 항상 열린다
   - 단어를 전부 본(퀴즈 reps>0) 유닛의 다음 유닛이 열린다
   - 레벨 테스트 배치 유닛(studentProg.cur)과, 이미 진도가 있는 유닛은
     그보다 앞이면 무조건 열어 준다 (기존 사용자가 잠기면 안 된다)
   - 시트 학생도 팩 유닛은 같은 순차 해금이다 */
function unlockedCount(){
  const ids = orderedUnitIds();
  let n = 1;
  ids.forEach((id, i)=>{
    const hasProgress = !!(studentProg.u && studentProg.u[id] > 0);
    if(id === studentProg.cur || hasProgress) n = Math.max(n, i + 1);
    if(unitPassed(id)) n = Math.max(n, i + 2);
  });
  return Math.min(n, ids.length);
}

function unitUnlocked(unitId){
  if(unitId === 'custom') return true;
  const ids = orderedUnitIds();
  const i = ids.indexOf(unitId);
  return i >= 0 && i < unlockedCount();
}

function unlockedPoolWords(){
  const ids = orderedUnitIds().slice(0, unlockedCount());
  return ids.flatMap(id => wordsInUnit(id));
}

function unitTitle(id){
  if(id === 'custom') return L.unitCustom;
  if(id === 'unsorted') return L.unitUnsorted;
  const sheet = String(id||'').match(/^sheet-(\d{4}-\d{2}-\d{2})$/);
  if(sheet){
    try{ return fmtDate(sheet[1]); }catch(e){ return sheet[1]; }
  }
  const ko = String(id||'').match(/^ko-([ABC])-(\d+)$/);
  if(ko){
    const lvlName = ko[1]==='A' ? L.levelA : ko[1]==='B' ? L.levelB : L.levelC;
    return L.unitNamed(parseInt(ko[2], 10), lvlName);
  }
  return id;
}

function cardPayload(w){
  return [w.reps|0, w.correctStreak|0, w.gradedCorrect|0, w.views|0];
}

function packedFromMemory(unitId){
  const p = {};
  const m = [];
  wordsInUnit(unitId).forEach(w=>{
    if((w.reps|0) > 0 || (w.views|0) > 0 || (w.gradedCorrect|0) > 0 || w.masteredAt){
      p[w.wordId] = cardPayload(w);
      if(w.masteredAt) m.push(w.wordId);
    }
  });
  return { p, m };
}

function newStudentDoc(){
  return {
    profile: {
      displayName: student.name,
      uiLang: student.lang,
      meaningLang: student.lang,     // 지금은 같은 값. v1.1에서 분리된다 (D13)
      createdAt: D().serverTimestamp()
      // role 은 클라이언트가 쓰지 않는다. 브라우저에서 admin 으로 바꿀 수 있다.
      // 역할이 필요해지면 admin SDK 또는 커스텀 클레임으로 넣는다.
    },
    stats: {
      points: 100, wordsLearned: 0, wordsMastered: 0, totalReviews: 0,
      cardViews: 0, currentStreak: 0, longestStreak: 0,
      lastStudyDate: null, restTokens: 2
    },
    packs: currentPackId ? [currentPackId] : [],
    prog: {
      cur: currentUnitId || defaultUnitId(),
      u: (studentProg && studentProg.u) || {},
      ...(currentPackLevel ? { lvl: currentPackLevel } : {})
    },
    lastUpdated: D().serverTimestamp()
  };
}

function applyCard(w, c){
  if(Array.isArray(c)){
    w.reps = c[0]|0;
    w.correctStreak = c[1]|0;
    w.gradedCorrect = c[2]|0;
    w.views = c[3]|0;
    return;
  }
  if(c && typeof c === 'object'){
    CARD_FIELDS.forEach(k=>{ if(c[k] !== undefined && c[k] !== null) w[k] = c[k]; });
    if(c.masteredAt) w.masteredAt = c.masteredAt;
  }
}

function applyPackedUnit(unitId, packed){
  if(!packed) return;
  const p = packed.p || {};
  const mastered = new Set(Array.isArray(packed.m) ? packed.m : []);
  student.words.forEach(w=>{
    if(unitIdForWord(w) !== unitId) return;
    if(p[w.wordId] !== undefined) applyCard(w, p[w.wordId]);
    if(mastered.has(w.wordId) && !w.masteredAt) w.masteredAt = true;
  });
}

async function restoreProgress(preloadedSnap){
  const snap = preloadedSnap !== undefined ? preloadedSnap : await D().getDoc(studentRef());
  studentDocExists = !!(snap && snap.exists());
  if(snap.exists()){
    const data = snap.data() || {};
    bank = typeof data?.stats?.points === 'number' ? data.stats.points : 100;
    const prog = data.prog || {};
    studentProg = {
      cur: prog.cur || null,
      u: (prog.u && typeof prog.u === 'object' && !Array.isArray(prog.u)) ? prog.u : {},
      lvl: currentPackLevel || (prog.lvl ? normalizePackLevel(prog.lvl) : null)
    };
  } else {
    bank = 100;
    studentProg = { cur: null, u: {}, lvl: null };
  }
  const curFromDoc = studentProg.cur;
  await recoverJournal();
  studentProg.cur = curFromDoc;
  if(!studentProg.cur || !isPackUnit(studentProg.cur)){
    pendingLevelTest = true;
    currentUnitId = null;
    return;
  }
  const available = listUnitIds();
  if(studentProg.cur !== 'custom' && available.length && !available.includes(studentProg.cur)){
    studentProg.cur = defaultUnitId();
  }
  currentUnitId = studentProg.cur || defaultUnitId();
  await loadUnit(currentUnitId);
}

async function ensureCustomWords(){
  if(customWordsLoaded || !student) return;
  customWordsLoaded = true;
  if(!currentUid || progressLocked) return;
  const snap = await D().getDocs(subCol('customWords'));
  snap.forEach(d=>{
    if(student.words.some(w=>w.wordId===d.id)) return;
    const cw = d.data() || {};
    student.words.push({
      ...attachQuizFields({ko: cw.ko, mean: cw.mean, type:'word'}),
      ...blankCard(),
      wordId: d.id, date: cw.dateAdded || '', pron: '',
      source: 'custom', color: cw.color || '', order: cw.order ?? 0
    });
  });
}

async function loadUnit(unitId){
  if(!unitId || !currentUid || progressLocked) return;
  if(unitId === 'custom') await ensureCustomWords();
  if(loadedUnits.has(unitId)) return;
  const snap = await D().getDoc(unitRef(unitId));
  loadedUnits.add(unitId);
  if(!snap.exists()) return;
  const data = snap.data() || {};
  const p = data.p || {};
  const mastered = new Set(Array.isArray(data.m) ? data.m : []);
  student.words.forEach(w=>{
    if(unitIdForWord(w) !== unitId) return;
    if(p[w.wordId] !== undefined) applyCard(w, p[w.wordId]);
    if(mastered.has(w.wordId) && !w.masteredAt) w.masteredAt = true;
  });
}

async function selectUnit(unitId, render=true){
  currentUnitId = unitId;
  studentProg.cur = unitId;
  await loadUnit(unitId);
  if(render) renderHome();
}

/* =====================================================================
   📍 레벨 테스트 (설계결정 §1-9)
   고정 21문항. 한국어→뜻만. 오답 3개는 파일에 고정. 정답/오답 피드백 없음.
   Firestore 는 문항 로드에 쓰지 않는다. 결과는 prog 쓰기 1회.
   ===================================================================== */
const LEVEL_UNIT_COUNT = { A: 29, B: 61, C: 83 };

function unitsInLevel(level){
  const pack = packCache[level];
  if(pack && Array.isArray(pack.units) && pack.units.length) return pack.units.length;
  return LEVEL_UNIT_COUNT[level] || 29;
}

function meaningLang(){
  return ((student && student.lang) === 'fr' || L === T.fr) ? 'fr' : 'en';
}

async function loadLevelTestItems(){
  if(levelTestCache) return levelTestCache;
  const res = await fetch('packs/leveltest.json');
  if(!res.ok) throw new Error('leveltest HTTP ' + res.status);
  const data = await res.json();
  const items = Array.isArray(data.items) ? data.items.slice() : [];
  const order = { A: 0, B: 1, C: 2 };
  items.sort((a, b) => (order[a.lvl] ?? 9) - (order[b.lvl] ?? 9) || (a.band|0) - (b.band|0));
  levelTestCache = items;
  return items;
}

function placeFromScores(by){
  let level, n;
  if((by.A|0) <= 5){ level = 'A'; n = by.A|0; }
  else if((by.B|0) <= 5){ level = 'B'; n = by.B|0; }
  else { level = 'C'; n = by.C|0; }
  const unitN = Math.floor(unitsInLevel(level) * n / 8) + 1;
  return { level, unitN, by, total: (by.A|0) + (by.B|0) + (by.C|0) };
}

function scoreLevelTest(qs, picked){
  const by = { A: 0, B: 0, C: 0 };
  qs.forEach((q, i) => {
    if(picked[i] === q.answer) by[q.lvl] = (by[q.lvl]|0) + 1;
  });
  return placeFromScores(by);
}

async function persistPlacement(){
  if(!currentUid || progressLocked || isGuest) return;
  studentProg.cur = currentUnitId;
  if(currentPackLevel) studentProg.lvl = currentPackLevel;
  if(!studentDocExists){
    await D().setDoc(studentRef(), newStudentDoc());
    studentDocExists = true;
    return;
  }
  await persistProg();
}

async function applyLevelPlacement(level, unitN){
  const lv = normalizePackLevel(level);
  const unitId = `ko-${lv}-01`;
  const lang = (student && student.lang) || 'en';
  if(currentPackLevel !== lv){
    let packWords;
    try{
      packWords = await wordsFromPack(lv, lang);
    }catch(e){
      console.error('레벨 테스트 팩 전환 실패:', e);
      alert(L.packLoadError);
      return;
    }
    const keep = (student.words || []).filter(w =>
      w.source === 'custom' || !isPackUnit(unitIdForWord(w)));
    student.words = packWords.concat(keep);
    currentPackLevel = lv;
    loadedUnits = new Set([...loadedUnits].filter(id => !isPackUnit(id)));
  }
  currentUnitId = unitId;
  studentProg.cur = unitId;
  studentProg.lvl = lv;
  try{ await persistPlacement(); }catch(e){ console.error('레벨 테스트 배치 저장 실패:', e); }
  try{ await loadUnit(currentUnitId); }catch(e){ console.error(e); }
  levelTest = null;
  renderHome();
}

async function startLevelTest(){
  document.onkeydown = null;
  session = null;
  review = null;
  botnav.classList.add('hidden');
  let items;
  try{
    items = await loadLevelTestItems();
  }catch(e){
    console.error('레벨 테스트 로딩 실패:', e);
    alert(L.packLoadError);
    if(!currentUnitId){
      await applyLevelPlacement('A', 1);
      return;
    }
    renderHome();
    return;
  }
  const lang = meaningLang();
  const qs = items.map(it => {
    const side = it[lang] || it.en || {};
    const answer = side.answer;
    const options = shuffle([answer, ...(side.wrong || [])]);
    return { id: it.id, ko: it.ko, lvl: it.lvl, band: it.band, answer, options };
  });
  levelTest = { qs, i: 0, picked: [], locked: false };
  renderLevelTestQ();
}

function skipLevelTest(){
  if(!levelTest) return;
  levelTest = null;
  applyLevelPlacement('A', 1);
}

function renderLevelTestQ(){
  const t = levelTest;
  if(!t) return;
  t.locked = false;
  const q = t.qs[t.i];
  botnav.classList.add('hidden');
  app.innerHTML = topbar() + `
    <div class="quiz-top">
      <div class="progress"><i style="width:${(t.i/t.qs.length)*100}%"></i></div>
    </div>
    <div class="q-count">${t.i + 1} / ${t.qs.length}</div>
    <div class="card">
      <div class="prompt">
        <div class="plabel">${L.promptKo}</div>
        <div class="pword kr" id="ltPrompt"></div>
      </div>
      <div class="options" id="ltOptions"></div>
    </div>
    <div class="btn-row" style="margin-top:18px">
      <button class="btn secondary" id="ltSkip">${L.ltSkip}</button>
    </div>`;
  $('#ltPrompt').textContent = q.ko;
  const optEl = $('#ltOptions');
  q.options.forEach(opt => {
    const b = document.createElement('button');
    b.className = 'opt';
    b.innerHTML = `<span class="mark"></span><span class="kr"></span>`;
    b.querySelector('.kr').textContent = opt;
    b.onclick = () => answerLevelTest(opt);
    optEl.appendChild(b);
  });
  $('#ltSkip').onclick = skipLevelTest;
}

function answerLevelTest(opt){
  const t = levelTest;
  if(!t || t.locked) return;
  t.locked = true;
  t.picked[t.i] = opt;
  t.i += 1;
  if(t.i >= t.qs.length) renderLevelTestResult();
  else renderLevelTestQ();
}

function renderLevelTestResult(){
  const t = levelTest;
  if(!t) return;
  const s = scoreLevelTest(t.qs, t.picked);
  t.result = s;
  const name = s.level === 'A' ? L.levelA : s.level === 'B' ? L.levelB : L.levelC;
  botnav.classList.add('hidden');
  app.innerHTML = topbar() + `
    <div class="hello">
      <img src="${IMG.excited}" alt="">
      <div>
        <h2>${escapeHtml(L.ltStartTitle(name, s.unitN))}</h2>
        <div class="sub" style="max-width:360px;line-height:1.45">${escapeHtml(L.ltStartBody)}</div>
      </div>
    </div>
    <div class="btn-row" style="flex-direction:column;margin-top:22px">
      <button class="btn" id="ltStart">${escapeHtml(L.ltStartBtn)}</button>
    </div>`;
  $('#ltStart').onclick = () => applyLevelPlacement(s.level, 1);
}

/* ---------- 세션 배치 커밋
   세션 중에는 메모리 + localStorage 저널에만 쌓고, 종료 시 유닛 1 + students 1 = 쓰기 2회.
   중도 이탈하면 저널이 남아 다음 실행에서 복구된다. */
const journalKey = () => 'vocabank_journal_' + currentUid;

function journalCard(w){
  if(!currentUid || progressLocked) return;
  const unitId = unitIdForWord(w);
  pendingUnits.add(unitId);
  try{
    const units = {};
    pendingUnits.forEach(id=>{ units[id] = packedFromMemory(id); });
    localStorage.setItem(journalKey(), JSON.stringify({
      points: bank, cur: currentUnitId, units
    }));
  }catch(e){ /* 저장공간 부족 — 세션 종료 시 메모리에서 커밋된다 */ }
}

async function commitJournal(){
  if(!currentUid || progressLocked || pendingUnits.size === 0) return;
  const units = [...pendingUnits];
  units.forEach(id=>{ studentProg.u[id] = seenCountForUnit(id); });
  studentProg.cur = currentUnitId;
  const points = bank;
  const batch = D().writeBatch(D().db);
  units.forEach(id=>{
    const packed = packedFromMemory(id);
    batch.set(unitRef(id), {
      p: packed.p,
      m: packed.m,
      at: D().serverTimestamp()
    }, {merge:true});
  });
  batch.update(studentRef(), {
    'stats.points': points,
    prog: studentProg,
    lastUpdated: D().serverTimestamp()
  });
  try{
    await batch.commit();
    pendingUnits.clear();
    localStorage.removeItem(journalKey());
    saveFailed = false;
  }catch(e){
    saveFailed = true;
    console.error('세션 저장 실패:', e && e.code, e && e.message,
      '| units:', [...pendingUnits],
      '| p sizes:', [...pendingUnits].map(id => id + '=' + Object.keys(packedFromMemory(id).p || {}).length),
      '| prog.u keys:', Object.keys(studentProg.u || {}).length);
  }
}

async function recoverJournal(){
  if(!currentUid || progressLocked) return;
  let saved = null;
  try{ saved = JSON.parse(localStorage.getItem(journalKey()) || 'null'); }catch(e){}
  if(!saved) return;
  const hasUnits = saved.units && typeof saved.units === 'object' && Object.keys(saved.units).length;
  const hasOldCards = saved.cards && typeof saved.cards === 'object' && Object.keys(saved.cards).length;
  if(!hasUnits && !hasOldCards) return;
  console.info('이전 세션의 미저장 진도를 복구합니다.');
  if(typeof saved.points === 'number') bank = Math.max(bank, saved.points);
  if(hasUnits){
    if(saved.units.custom) await ensureCustomWords();
    Object.entries(saved.units).forEach(([unitId, packed])=>{
      applyPackedUnit(unitId, packed);
      pendingUnits.add(unitId);
      loadedUnits.add(unitId);
    });
  } else if(hasOldCards){
    await ensureCustomWords();
    student.words.forEach(w=>{
      const c = saved.cards[w.wordId];
      if(c){
        applyCard(w, c);
        pendingUnits.add(unitIdForWord(w));
      }
    });
  }
  if(saved.cur) currentUnitId = saved.cur;
  await commitJournal();
}

/* ---------- 개인 단어 (v3 §2.5) ----------
   단어 1개 추가/수정/삭제/순서변경이 90,000 B → 약 150 B. */
const ORDER_GAP = 1024;

function customList(){
  return student.words.filter(w=>w.source==='custom').sort((a,b)=>(a.order??0)-(b.order??0));
}

const customId = (n) => 'c' + String(n).padStart(4, '0');

function nextCustomSeq(){
  const nums = customList()
    .filter(w=>/^c\d+$/.test(w.wordId||''))
    .map(w=>parseInt(w.wordId.slice(1), 10));
  return (nums.length ? Math.max(...nums) : 0) + 1;
}

/* 정수 인덱스(0,1,2…)를 쓰면 중간에 하나 끼울 때 뒤의 전부를 다시 써야 한다.
   1024 간격으로 두고 사이로 옮길 때는 중간값을 넣어 쓰기 1회로 끝낸다.
   간격이 1 미만으로 좁아질 때만 전체 재번호한다. (Notion·Trello 방식) */
function orderBetween(prev, next){
  if(prev == null && next == null) return ORDER_GAP;
  if(prev == null) return next - ORDER_GAP;
  if(next == null) return prev + ORDER_GAP;
  return (prev + next) / 2;
}

function customDocData(w){
  return {ko: w.ko, mean: w.mean, color: w.color || '', order: w.order ?? 0, dateAdded: w.date || ''};
}

function saveCustomWord(w){
  if(!currentUid || progressLocked) return Promise.resolve();
  return D().setDoc(customRef(w.wordId), customDocData(w))
    .catch(e=>console.error('개인 단어 저장 실패', e));
}

function saveCustomOrder(w){
  if(!currentUid || progressLocked) return Promise.resolve();
  return D().updateDoc(customRef(w.wordId), {order: w.order})
    .catch(e=>console.error('순서 저장 실패', e));
}

async function renumberCustom(){
  const list = customList();
  list.forEach((w,i)=>{ w.order = (i + 1) * ORDER_GAP; });
  if(!currentUid || progressLocked) return;
  const batch = D().writeBatch(D().db);
  list.forEach(w=>batch.update(customRef(w.wordId), {order: w.order}));
  try{ await batch.commit(); }
  catch(e){ console.error('순서 재번호 실패', e); }
}

async function removeCustomWord(w){
  if(!currentUid || progressLocked) return;
  try{
    await D().deleteDoc(customRef(w.wordId));
    pendingUnits.add('custom');
    loadedUnits.add('custom');
    studentProg.u.custom = seenCountForUnit('custom');
    await commitJournal();
  }catch(e){ console.error('개인 단어 삭제 실패', e); }
}

/* ---------- 로그인 성공 처리 (Google) ---------- */
async function handleLoginSuccess(user){
  const email = user.email;
  // 게스트 샘플·카운터는 여기서 끊는다. 학생 문서에는 자기 시트만 들어간다
  isGuest = false;
  guestReset();
  studentDocExists = false;
  pendingLevelTest = false;
  sheetFailed = false;
  saveFailed = false;
  levelTest = null;
  // 조회 실패(네트워크·권한)와 문서 없음(미등록)은 전혀 다른 상황이다. 뭉뚱그리지 않는다.
  let invite;
  try{
    invite = await fetchInvite(email);
  }catch(e){
    console.error('초대 조회 실패 (네트워크/권한 문제 — 미등록이 아님):', e);
    alert(L.listLoadError);
    currentUserEmail = null;
    await window.fb.signOut(window.fb.auth);
    return;
  }
  // 오픈 모드 — 명단에 없어도 돌려보내지 않는다. 공용 팩으로 시작하고
  // 「단어 추가」로 자기 단어를 쌓는다. 진도·원은 등록 학생과 똑같이 저장된다.
  // 개인 시트(vocabCsvUrl)는 invites 에 있는 학생에게만 붙는다.
  const isOpenUser = !invite;
  if(isOpenUser){
    invite = {
      name: user.displayName || String(email).split('@')[0],
      lang: (loginLang === 'fr') ? 'fr' : 'en',
      packId: OPEN_PACK_ID,
      vocabCsvUrl: null
    };
  }
  currentUserEmail = email;
  currentUid = user.uid;                 // Firestore 문서 키는 uid. 콘솔 목록에 이메일이 안 보인다
  currentPackId = invite.packId || null;
  pendingUnits = new Set();
  loadedUnits = new Set();
  sheetUnitsLoaded = false;
  dropLearnedCache();
  customWordsLoaded = false;
  studentProg = { cur: null, u: {}, lvl: null };
  currentUnitId = null;
  currentPackLevel = null;
  const lang = (invite.lang||'en').toLowerCase();
  renderVocabLoading(lang);
  progressLocked = false;

  // ── 1단계: 단어 불러오기 ──
  // 팩은 전원 공통. 시트 학생은 자기 단어를 「추가로」 받는다.
  let words, studentSnap;
  try{
    studentSnap = await D().getDoc(studentRef());
    const savedLvl = studentSnap.exists() ? (studentSnap.data().prog || {}).lvl : 'A';
    currentPackLevel = normalizePackLevel(savedLvl);
    words = await wordsFromPack(currentPackLevel, lang);
  }catch(e){
    console.error('① 공용 팩 로딩 실패:', e);
    renderPackLoadError(lang, false);
    return;
  }
  if(!isOpenUser && invite.vocabCsvUrl){
    try{
      const sheetWords = await getStudentVocab(invite);
      words = words.concat(await buildWords(sheetWords));
    }catch(e){
      console.error('① 시트 단어 로딩 실패 (팩으로 계속 진행):', e);
      sheetFailed = true;
    }
  }
  await setupStudent(invite, words, lang);

  currentUnitId = defaultUnitId();
  studentProg = { cur: currentUnitId, u: {}, lvl: currentPackLevel };

  // ── 2단계: Firestore에서 포인트/prog/현재 유닛 불러오기 ──
  try{
    await restoreProgress(studentSnap);
  } catch(e){
    console.error('② 진도 불러오기 실패 (Firestore 문제 — 앱은 열지만 저장을 잠급니다):', e);
    progressLocked = true;
    bank = 0; // 실제 저장은 잠겨 있으므로 화면 표시만 0. 기존 데이터는 덮어쓰지 않음
  }
  if(pendingLevelTest){
    pendingLevelTest = false;
    startLevelTest();
    return;
  }
  renderHome();
}

/* ---------- 로그아웃 ---------- */
async function doLogout(){
  if(isGuest){ exitGuest(); return; }
  if(!confirm(L.logoutConfirm)) return;
  await commitJournal();               // 남은 진도를 먼저 저장하고 나간다
  const hadUser = !!currentUserEmail;
  currentUserEmail = null;
  currentUid = null;
  currentPackId = null;
  currentPackLevel = null;
  currentUnitId = null;
  studentProg = { cur: null, u: {}, lvl: null };
  loadedUnits = new Set();
  sheetUnitsLoaded = false;
  dropLearnedCache();
  customWordsLoaded = false;
  pendingUnits = new Set();
  studentDocExists = false;
  pendingLevelTest = false;
  sheetFailed = false;
  saveFailed = false;
  levelTest = null;
  if(hadUser){
    try{ await window.fb.signOut(window.fb.auth); } catch(e){ console.error(e); }
    // onAuthStateChanged가 renderLogin() 처리
  } else {
    renderLogin();
  }
}

/* ---------- 앱 시작 (Firebase 준비된 뒤) ---------- */
function initApp(){
  /* ?debugfs=1 일 때만 호출 횟수를 센다. window.__fs 로 확인. */
  if(window.fb && !window.fb.__fsWrapped && new URLSearchParams(location.search).has('debugfs')){
    const fb = window.fb;
    const n = window.__fs = { getDoc:0, getDocs:0, setDoc:0, updateDoc:0, deleteDoc:0, writeBatch:0, writes:0 };
    const wrap = (k) => { const orig = fb[k].bind(fb); fb[k] = (...a)=>{ n[k]++; return orig(...a); }; };
    wrap('getDoc'); wrap('getDocs'); wrap('setDoc'); wrap('updateDoc'); wrap('deleteDoc');
    const origBatch = fb.writeBatch.bind(fb);
    fb.writeBatch = (db) => {
      n.writeBatch++;
      const b = origBatch(db);
      const set = b.set.bind(b), upd = b.update.bind(b), del = b.delete.bind(b);
      b.set = (...a)=>{ n.writes++; return set(...a); };
      b.update = (...a)=>{ n.writes++; return upd(...a); };
      b.delete = (...a)=>{ n.writes++; return del(...a); };
      return b;
    };
    fb.__fsWrapped = true;
  }
  window.fb.onAuthStateChanged(window.fb.auth, user=>{
    if(user && user.email) handleLoginSuccess(user).catch(e=>{
      // 예전에는 여기서 예외가 조용히 사라져 흰 화면이 됐다
      console.error('로그인 처리 실패:', e);
      renderBootError(String((e && e.message) || e));
    });
    else { currentUserEmail = null; currentUid = null; currentPackId = null; currentPackLevel = null;
           currentUnitId = null; studentProg = { cur: null, u: {}, lvl: null };
           loadedUnits = new Set(); sheetUnitsLoaded = false; dropLearnedCache(); customWordsLoaded = false; pendingUnits = new Set();
           isGuest = false; guestReset(); renderLogin(); }
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
    ${isGuest ? '' : bankChip()}
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

/* 구글 로그인 한 곳으로 모은다. 실패 코드를 삼키면 원인을 알 수 없다 —
   auth/internal-error 는 대개 CSP 가 apis.google.com 을 막았을 때 난다. */
async function signInWithGoogle(Lx){
  try{
    await window.fb.signInWithPopup(window.fb.auth, window.fb.googleProvider);
  }catch(e){
    console.error('구글 로그인 실패:', e);
    // 팝업을 직접 닫은 것은 오류가 아니다
    if(e.code === 'auth/popup-closed-by-user' || e.code === 'auth/cancelled-popup-request') return;
    alert((Lx || T.en).loginError + (e.code ? '\n(' + e.code + ')' : ''));
  }
}

function loginLegalNoticeHtml(){
  const fr = loginLang === 'fr';
  const href = fr ? LEGAL_URL.fr.privacy : LEGAL_URL.en.privacy;
  const label = fr ? 'Politique de confidentialité' : 'Privacy policy';
  const link = href
    ? ` <a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>`
    : '';
  const text = fr
    ? "En vous connectant avec Google, nous enregistrons votre nom d’affichage et vos progrès de vocabulaire chez Firebase (Google). Pas de publicité, pas de mesure d’audience."
    : "By signing in with Google, we store your display name and vocabulary progress in Firebase (Google). No ads, no analytics.";
  return `<p class="guest-hint" id="loginLegal">${escapeHtml(text)}${link}</p>`;
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
      <small style="color:var(--accent-strong);letter-spacing:2px">BLABLA KOREA</small>
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
    ${loginLegalNoticeHtml()}
    `}
    <button class="btn secondary guest-btn" id="guestBtn">${Lx.guestBtn}</button>
    <div class="guest-hint">${Lx.guestNoSave}</div>
    ${(!inApp && showDemo) ? `
    <div class="demo-hint">${Lx.demoHint}</div>
    <div class="demo-pick">
      <button data-demo="guest">${Lx.guestBtn}</button>
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
    $('#googleBtn').onclick = ()=>signInWithGoogle(Lx);
  }
  // 게스트는 인앱 브라우저에서도 쓸 수 있다 (구글 팝업이 필요 없다)
  $('#guestBtn').onclick = ()=>startGuest();
  // ?demo=true 내부 경로는 남겨 두되, 실명 버튼 없이 게스트와 같은 샘플을 쓴다
  if(!inApp && showDemo){
    app.querySelectorAll('[data-demo]').forEach(b=>{
      b.onclick = ()=>startGuest();
    });
  }
}

/* ---------- 부팅 실패 화면 ----------
   firebase-init.js 가 죽거나 로그인 처리가 예외로 끝나면 예전에는 흰 화면만 남았다.
   무엇이 잘못됐는지 화면에 띄운다. student·L 에 의존하지 않는다. */
function renderBootError(detail){
  botnav.classList.add('hidden');
  app.innerHTML = `
    <div class="result">
      <img src="${IMG.grumpy}" alt="">
      <div class="score" style="max-width:420px;margin:0 auto 10px">
        L'application n'a pas pu démarrer.<br>The app failed to start.
      </div>
      <div class="score" id="bootErrDetail"
           style="max-width:420px;margin:0 auto 18px;font-size:.78rem;font-family:monospace"></div>
      <div class="btn-row" style="flex-direction:column">
        <button class="btn" id="bootReload">↻ Recharger / Reload</button>
      </div>
    </div>`;
  $('#bootErrDetail').textContent = detail || '';   // 예외 메시지는 HTML 로 넣지 않는다
  $('#bootReload').onclick = ()=>location.reload();
}

/* ---------- 로그인 직후 화면 (단어 CSV 로딩 / 준비 안 됨) ----------
   handleLoginSuccess 가 부르는데 정의가 없어서, 로그인한 계정은 여기서 바로 죽고
   화면이 빈 채로 남았다. student 가 아직 없는 구간이라 전역 L 대신
   invite 의 언어팩(T[lang])을 직접 쓴다. */
function renderVocabLoading(lang){
  botnav.classList.add('hidden');
  const Lx = T[lang] || T.en;
  app.innerHTML = `
    <div class="result">
      <img src="${IMG.study}" alt="">
      <div class="score">${Lx.vocabLoading}</div>
    </div>`;
}

function renderPackLoadError(lang, fromGuest){
  botnav.classList.add('hidden');
  const Lx = T[lang] || T.en;
  L = Lx;
  app.innerHTML = `
    <div class="result">
      <img src="${IMG.surprised}" alt="">
      <div class="score" style="max-width:380px;margin:0 auto 18px">${Lx.packLoadError}</div>
      <div class="btn-row" style="flex-direction:column">
        <button class="btn chili" id="packErrBtn">${fromGuest ? Lx.wallBackToLogin : '🚪 ' + Lx.logout}</button>
      </div>
    </div>`;
  $('#packErrBtn').onclick = async ()=>{
    isGuest = false;
    currentUserEmail = null; currentUid = null; currentPackId = null; currentPackLevel = null;
    currentUnitId = null; studentProg = { cur: null, u: {}, lvl: null };
    loadedUnits = new Set(); sheetUnitsLoaded = false; dropLearnedCache(); customWordsLoaded = false; pendingUnits = new Set();
    if(fromGuest){ renderLogin(); return; }
    try{ await window.fb.signOut(window.fb.auth); }
    catch(e){ console.error(e); renderLogin(); }
  };
}

function renderVocabNotReady(lang){
  botnav.classList.add('hidden');
  const Lx = T[lang] || T.en;
  app.innerHTML = `
    <div class="result">
      <img src="${IMG.surprised}" alt="">
      <div class="score" style="max-width:380px;margin:0 auto 18px">${Lx.vocabNotReady}</div>
      <div class="btn-row" style="flex-direction:column">
        <button class="btn chili" id="vocabLogoutBtn">🚪 ${Lx.logout}</button>
      </div>
    </div>`;
  // doLogout() 은 student 와 L 에 의존한다 — 여기선 둘 다 아직 없으므로 직접 로그아웃한다
  $('#vocabLogoutBtn').onclick = async ()=>{
    currentUserEmail = null; currentUid = null; currentPackId = null; currentPackLevel = null;
    currentUnitId = null; studentProg = { cur: null, u: {}, lvl: null };
    loadedUnits = new Set(); sheetUnitsLoaded = false; dropLearnedCache(); customWordsLoaded = false; pendingUnits = new Set();
    try{ await window.fb.signOut(window.fb.auth); }   // onAuthStateChanged → renderLogin()
    catch(e){ console.error(e); renderLogin(); }
  };
}

/* 시트 날짜 유닛의 진도. 기존 학생이 수업에서 쌓은 카드는 units/sheet-YYYY-MM-DD 에 있는데
   restoreProgress 는 팩 유닛 하나만 읽으므로 아무도 이걸 읽지 않는다.
   해금 계산(orderedUnitIds)은 팩 유닛만 보므로 loadedUnits 에 넣어도 해금이 흔들리지 않는다. */
async function ensureSheetUnits(){
  if(sheetUnitsLoaded) return;
  sheetUnitsLoaded = true;
  if(!currentUid || progressLocked) return;
  const ids = Object.keys(studentProg.u || {})
    .filter(id => id !== 'custom' && !isPackUnit(id));
  for(const id of ids){
    if(loadedUnits.has(id)) continue;
    try{
      const snap = await D().getDoc(unitRef(id));
      loadedUnits.add(id);
      if(snap.exists()) applyPackedUnit(id, snap.data());
    }catch(e){
      console.error('시트 유닛 읽기 실패:', id, e);
    }
  }
}

/* 레벨 A·B·C 를 가로지르는 「배운 단어」 목록.
   팩 JSON 은 정적 파일이라 몇 개를 읽든 Firestore 비용이 0이다.
   Firestore 는 studentProg.u 에 이름이 올라온 유닛만 읽는다 —
   학생이 실제로 손댄 유닛 수만큼이므로 읽기 수가 유닛 전체로 불어나지 않는다.
   팩 유닛은 loadedUnits 에 넣지 않는다 (F1 해금 입력). 시트 유닛은 아래 게으른 로더. */
async function buildLearnedCache(){
  if(learnedCache) return learnedCache;
  if(learnedCacheInflight) return learnedCacheInflight;
  const epoch = learnedCacheEpoch;
  const inflight = (async ()=>{
    await ensureSheetUnits();
    const current = (student && student.words || []).filter(w => (w.gradedCorrect||0) > 0);
    if(!currentUid || progressLocked){
      if(epoch === learnedCacheEpoch) learnedCache = current;
      return current;
    }
    const curLv = normalizePackLevel(currentPackLevel);
    const lang = (student && student.lang) || 'en';
    const extra = [];
    const seen = new Set(current.map(w => w.wordId));
    for(const lv of ['A','B','C']){
      if(lv === curLv) continue;
      const prefix = 'ko-' + lv + '-';
      const unitIds = Object.keys(studentProg.u || {}).filter(id => String(id).startsWith(prefix));
      if(!unitIds.length) continue;          // 이 레벨은 쓴 적이 없다. 팩을 받지 않는다
      let packWords;
      try{
        packWords = await wordsFromPack(lv, lang);
      }catch(e){
        console.error('learned 팩 로딩 실패:', e);
        continue;
      }
      for(const id of unitIds){
        try{
          const snap = await D().getDoc(unitRef(id));
          if(!snap.exists()) continue;
          const data = snap.data() || {};
          const p = data.p || {};
          const mastered = new Set(Array.isArray(data.m) ? data.m : []);
          packWords.forEach(w=>{
            if(unitIdForWord(w) !== id) return;
            if(p[w.wordId] !== undefined) applyCard(w, p[w.wordId]);
            if(mastered.has(w.wordId) && !w.masteredAt) w.masteredAt = true;
          });
        }catch(e){
          console.error('learned 유닛 읽기 실패:', id, e);
        }
      }
      packWords.forEach(w=>{
        if((w.gradedCorrect||0) > 0 && !seen.has(w.wordId)){
          seen.add(w.wordId);
          extra.push(w);
        }
      });
    }
    const list = current.concat(extra);
    if(epoch === learnedCacheEpoch) learnedCache = list;
    return list;
  })();
  learnedCacheInflight = inflight;
  try{ return await inflight; }
  finally{ if(learnedCacheInflight === inflight) learnedCacheInflight = null; }
}

function stats(){
  const learned = learnedCache
    ? learnedCache.length
    : student.words.filter(w=>(w.gradedCorrect||0)>0).length;
  const known = listUnitIds().reduce((n, id) => n + knownCountForUnit(id), 0);
  return {learned, known};
}

function levelSwitchHtml(){
  const lv = currentPackLevel || 'A';
  const btn = (id, label) =>
    `<button type="button" class="btn ${lv===id ? '' : 'secondary'}" data-lvl="${id}" style="flex:1;padding:10px 8px;font-size:.82rem">${id} · ${escapeHtml(label)}</button>`;
  return `<div class="section-title">${L.levelSection}</div>
    <div style="display:flex;gap:8px;margin:0 2px 16px">
      ${btn('A', L.levelA)}${btn('B', L.levelB)}${btn('C', L.levelC)}
    </div>`;
}

function unitRowHtml(id, {accent, current, clickable}){
  const locked = !unitUnlocked(id);
  const total = unitTotal(id);
  const seen = seenCountForUnit(id);
  const check = !locked && unitPassed(id) ? ' ✓' : '';
  const emoji = locked ? '🔒' : (id === 'custom' ? '📝' : (current ? '📌' : '📗'));
  const sub = locked ? L.unitLocked : `${seen}/${total}${current && clickable ? ' · ' + L.continueStudy : ''}`;
  let dataAttr = '';
  if(clickable){
    dataAttr = locked ? `data-locked="${escapeHtml(id)}"` : `data-unit="${escapeHtml(id)}"`;
  }
  const styles = [];
  if(locked) styles.push('opacity:.55','cursor:default');
  if(accent && !locked) styles.push('border-color:var(--accent)');
  if(!clickable) styles.push('cursor:default');
  const styleAttr = styles.length ? ` style="${styles.join(';')}"` : '';
  const arrow = clickable ? '<span class="arrow">→</span>' : '';
  return `<button class="menu-btn" ${dataAttr}${styleAttr}>
      <span class="emoji">${emoji}</span>
      <span class="mtext"><b>${escapeHtml(unitTitle(id))}${check}</b>
        <span>${sub}</span></span>
      ${arrow}
    </button>`;
}

function unitListHtml(){
  const ids = listUnitIds().filter(id => id !== 'custom');
  const cur = (currentUnitId && currentUnitId !== 'custom') ? currentUnitId : ids[0];
  if(!cur) return '';
  return `<div class="section-title">${L.unitSection}</div>` +
    unitRowHtml(cur, {accent:true, current:true, clickable:true}) +
    `<div style="color:var(--text-muted);font-size:.78rem;margin:6px 14px 14px;line-height:1.45">${escapeHtml(L.unitPickHint)}</div>`;
}

function unitPickerHtml(viewingId){
  const ids = orderedUnitIds();
  const nUnlock = unlockedCount();
  const unlocked = ids.slice(0, nUnlock);
  const locked = ids.slice(nUnlock);
  const shownLocked = locked.slice(0, 3);
  const moreLocked = locked.length - shownLocked.length;
  const rows = unlocked.concat(shownLocked).map(id => {
    const isCurrent = id === viewingId;
    return unitRowHtml(id, {accent:isCurrent, current:isCurrent, clickable:!isCurrent});
  }).join('');
  const more = moreLocked > 0
    ? `<div style="color:var(--text-muted);font-size:.78rem;margin:8px 14px 4px">+ ${escapeHtml(L.unitMoreLocked(moreLocked))}</div>`
    : '';
  return `<div class="section-title">${L.unitPickTitle}</div>` + rows + more;
}

function feedbackMailto(){
  const lang = (L === T.fr) ? 'fr' : 'en';
  const subject = '[Voca Bank] Feedback';
  const body = 'Language: ' + lang + '\nVersion: web\n\n';
  return 'mailto:contact.blablakorea@gmail.com?subject=' +
    encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
}

function homeFooterHtml(){
  const lang = (L === T.fr) ? 'fr' : 'en';
  const site = (L === T.en) ? 'https://en.blablakorea.fr/about' : 'https://www.blablakorea.fr/';
  const pack = LEGAL_URL[lang] || { privacy: '', terms: '' };
  const links = [];
  if(pack.privacy){
    links.push(`<a href="${escapeHtml(pack.privacy)}" target="_blank" rel="noopener noreferrer">${escapeHtml(L.legalPrivacy)}</a>`);
  }
  if(pack.terms){
    links.push(`<a href="${escapeHtml(pack.terms)}" target="_blank" rel="noopener noreferrer">${escapeHtml(L.legalTerms)}</a>`);
  }
  return `<div style="text-align:center;margin:28px 2px 12px;padding-top:20px;border-top:1px solid var(--border)">
    <div style="font-weight:700;color:var(--accent-strong)">${escapeHtml(L.feedbackTitle)}</div>
    <div style="color:var(--text-muted);font-size:.85rem;line-height:1.5;margin:8px 14px 14px">${escapeHtml(L.feedbackBody)}</div>
    <a class="btn" id="feedbackMail" style="display:block;text-decoration:none;text-align:center" href="${feedbackMailto()}">${escapeHtml(L.feedbackBtn)}</a>
    <div id="feedbackAddr" style="color:var(--text-muted);font-size:.82rem;margin-top:10px;user-select:text">contact.blablakorea@gmail.com</div>
    <button type="button" class="btn secondary" id="feedbackCopy" style="margin-top:8px">${escapeHtml(L.feedbackCopy)}</button>
    ${links.length ? `<div style="margin-top:18px;font-size:.82rem;line-height:1.8">${links.join('<br>')}</div>` : ''}
    <div style="margin-top:14px;font-size:.82rem">
      <a href="${escapeHtml(site)}" target="_blank" rel="noopener noreferrer" id="siteLink">${escapeHtml(L.siteLink)}</a>
    </div>
    <div style="color:var(--text-muted);font-size:.72rem;margin-top:12px;line-height:1.7">© 2026 Jonghyuk Lee · Blabla Korea</div>
  </div>`;
}

/* ---------- 홈 ---------- */
function renderHome(){
  botnav.classList.remove('hidden');
  document.onkeydown = null;   // 플래시카드 키보드 핸들러 정리
  review = null;
  setNav('home');
  const s = stats();
  app.innerHTML = topbar() + `
    ${(progressLocked && !isGuest) ? `<div class="save-warning">⚠️ ${L.progressSaveOff}</div>` : ''}
    ${sheetFailed ? `<div class="save-warning">⚠️ ${escapeHtml(L.sheetLoadWarn)}</div>` : ''}
    ${saveFailed ? `<div class="save-warning">⚠️ ${escapeHtml(L.saveFailWarn)}</div>` : ''}
    <div class="hello">
      <img src="${IMG.excited}" alt="">
      <div>
        <h2>${L.hi}, ${escapeHtml(student.name)} 👋</h2>
        <div class="sub">${L.welcome}</div>
      </div>
    </div>
    ${isGuest ? `<div class="guest-note">
      <span>👋 ${L.guestNoSave}</span>
      <button class="btn" id="guestLoginBtn">${L.guestLoginToSave}</button>
    </div>` : ''}

    <div class="stat-grid">
      <div class="stat" id="statLearned"><b>${s.learned}</b><span>${L.statLearned}</span></div>
      <div class="stat" id="statKnown"><b>${s.known}</b><span>${L.statKnown}</span></div>
      <div class="stat"><b>${bestStreak}🔥</b><span>${L.statStreak}</span></div>
    </div>

    ${levelSwitchHtml()}
    ${unitListHtml()}

    <div class="section-title">${L.sectionPlay}</div>
    <button class="menu-btn" id="reviewBtn">
      <span class="emoji">🃏</span>
      <span class="mtext"><b>${L.review}</b><span>${L.reviewSub}</span></span>
      <span class="arrow">→</span>
    </button>

    <div class="section-title">${L.sectionTest}</div>
    <button class="menu-btn" id="quizBtn">
      <span class="emoji">🎲</span>
      <span class="mtext"><b>${L.quizAll}</b><span>${L.quizAllSub}</span></span>
      <span class="arrow">→</span>
    </button>
    <button class="menu-btn" id="levelTestBtn">
      <span class="emoji">📍</span>
      <span class="mtext"><b>${L.ltRetake}</b><span>${L.ltRetakeSub}</span></span>
      <span class="arrow">→</span>
    </button>
    <a class="menu-btn" id="hangulTestLink" href="${escapeHtml(L===T.fr ? 'https://www.blablakorea.fr/test-coreen' : 'https://en.blablakorea.fr/test-coreen')}" target="_blank" rel="noopener noreferrer" style="text-decoration:none">
      <span class="emoji">🇰🇷</span>
      <span class="mtext"><b>${L.hangulTest}</b><span>${L.hangulTestSub}</span></span>
      <span class="arrow">→</span>
    </a>

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
    ${isGuest ? '' : `
    <button class="menu-btn" id="myWordsBtn">
      <span class="emoji">📝</span>
      <span class="mtext"><b>${L.myWords}</b><span>${L.myWordsSub}</span></span>
      <span class="arrow">→</span>
    </button>
    <button class="menu-btn" id="addWordBtn">
      <span class="emoji">➕</span>
      <span class="mtext"><b>${L.addWord}</b><span>${L.addWordSub}</span></span>
      <span class="arrow">→</span>
    </button>`}
    ${homeFooterHtml()}
  `;
  $('#quizBtn').onclick = ()=>startQuiz(unlockedPoolWords());
  $('#reviewBtn').onclick = ()=>startReview('learned');
  const ltBtn = $('#levelTestBtn');
  if(ltBtn) ltBtn.onclick = ()=>startLevelTest();
  $('#wordsBtn').onclick = ()=>renderWords();
  $('#knownBtn').onclick = renderKnown;
  if(!isGuest){
    $('#myWordsBtn').onclick = ()=>renderMyWords();
    $('#addWordBtn').onclick = ()=>renderAddWord();
  } else {
    $('#guestLoginBtn').onclick = exitGuest;
  }
  $('#statLearned').onclick = renderLearned;
  $('#statKnown').onclick = renderKnown;
  if(!learnedCache){
    buildLearnedCache().then(list=>{
      const el = $('#statLearned b');
      if(el) el.textContent = String(list.length);
    }).catch(e=>console.error(e));
  }
  app.querySelectorAll('[data-unit]').forEach(btn=>{
    btn.onclick = ()=>renderUnit(btn.dataset.unit);
  });
  app.querySelectorAll('[data-locked]').forEach(btn=>{
    btn.onclick = ()=>alert(L.unitLockedHint);
  });
  app.querySelectorAll('[data-lvl]').forEach(btn=>{
    btn.onclick = ()=>switchPackLevel(btn.dataset.lvl);
  });
  const copyBtn = $('#feedbackCopy');
  if(copyBtn){
    const addr = 'contact.blablakorea@gmail.com';
    copyBtn.onclick = async ()=>{
      try{
        await navigator.clipboard.writeText(addr);
        copyBtn.textContent = L.feedbackCopied;
        setTimeout(()=>{ if(copyBtn.isConnected) copyBtn.textContent = L.feedbackCopy; }, 1600);
      }catch(e){
        prompt(L.feedbackCopy, addr);
      }
    };
  }
}

async function renderUnit(unitId){
  if(!unitUnlocked(unitId)){
    alert(L.unitLockedHint);
    return;
  }
  botnav.classList.remove('hidden');
  document.onkeydown = null;
  review = null;
  setNav('home');
  await selectUnit(unitId, false);
  const total = unitTotal(unitId);
  const seen = seenCountForUnit(unitId);
  app.innerHTML = backBtn() + topbar() + `
    <div class="hello">
      <img src="${IMG.study}" alt="" style="width:70px">
      <div>
        <h2>📗 ${escapeHtml(unitTitle(unitId))}</h2>
        <div class="sub">${seen} / ${total} ${L.unitSeenLabel}</div>
      </div>
    </div>
    <button class="menu-btn" id="unitCardsBtn">
      <span class="emoji">🃏</span>
      <span class="mtext"><b>${L.unitLearnCards}</b><span>${L.unitLearnCardsSub}</span></span>
      <span class="arrow">→</span>
    </button>
    <button class="menu-btn" id="unitQuizBtn">
      <span class="emoji">🎯</span>
      <span class="mtext"><b>${L.unitDoQuiz}</b><span>${L.quizSub}</span></span>
      <span class="arrow">→</span>
    </button>
    ${unitPickerHtml(unitId)}
  `;
  wireBackBtn();
  $('#unitCardsBtn').onclick = ()=>startReview('unit');
  $('#unitQuizBtn').onclick = ()=>startQuiz(currentUnitWords());
  app.querySelectorAll('[data-unit]').forEach(btn=>{
    btn.onclick = ()=>renderUnit(btn.dataset.unit);
  });
  app.querySelectorAll('[data-locked]').forEach(btn=>{
    btn.onclick = ()=>alert(L.unitLockedHint);
  });
}

/* ---------- 날짜별 단어 ---------- */
/* 학습 흔적이 있는 단어 — 채점됐거나(reps) 카드로 봤거나(views) 맞힌 적(gradedCorrect) 있는 것 */
function isStudied(w){
  return (w.reps|0) > 0 || (w.views|0) > 0 || (w.gradedCorrect|0) > 0;
}

async function renderWords(selectedDate = "all"){
  botnav.classList.remove('hidden');
  setNav('words');
  await buildLearnedCache();
  const units = listUnitIds().filter(id => {
    if(id === 'custom') return wordsInUnit(id).length > 0;
    if(!isPackUnit(id)) return wordsInUnit(id).length > 0;   // 시트 날짜 유닛은 항상
    return wordsInUnit(id).some(isStudied);                  // 팩 유닛은 학습한 것만
  });
  const byUnit = {};
  units.forEach(id => {
    const list = wordsInUnit(id);
    byUnit[id] = isPackUnit(id) ? list.filter(isStudied) : list;
  });
  let html = backBtn() + topbar() + `<h2 style="margin:6px 2px 4px">📖 ${L.words}</h2>
    <div class="sub" style="color:var(--text-muted);font-size:.85rem;margin-bottom:6px">${L.wordsSub}</div>`;
  if(!units.length){
    html += `<div class="card" style="text-align:center;color:var(--text-muted)">
      <img src="${IMG.grumpy}" style="width:120px;margin-bottom:10px" alt="">
      <p>${L.emptyStudied}</p></div>`;
    app.innerHTML = html;
    wireBackBtn();
    return;
  }
  const shown = selectedDate === 'all' ? units : units.filter(id => id === selectedDate);
  html += `<select id="dateFilter" style="width:100%;margin:10px 0 2px;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:13px 14px;font-size:1rem;color:var(--text);font-family:inherit;cursor:pointer">
      <option value="all">📅 ${L.allDates}</option>
      ${units.map(id=>`<option value="${escapeHtml(id)}" ${id===selectedDate?'selected':''}>${escapeHtml(unitTitle(id))} · ${byUnit[id].length}</option>`).join('')}
    </select>`;
  shown.forEach(id=>{
    const list = byUnit[id] || [];
    html += `<div class="day-block">
      <div class="day-head">📗 ${escapeHtml(unitTitle(id))} <span class="count">· ${list.length}</span></div>`;
    list.forEach(w=>{ html += wordRowHtml(w); });
    html += `</div>`;
  });
  app.innerHTML = html;
  wireBackBtn();
  wireDeleteButtons(()=>renderWords(selectedDate));
  $('#dateFilter').onchange = (e)=>renderWords(e.target.value);
}
function statusTag(w){
  const st = wordStatus(w);
  if(w.type==="sentence" && st==="new") return {cls:"sentence", txt:L.sentenceTag};
  if(st==="master") return {cls:"master", txt:L.master};
  if(st==="known")  return {cls:"known", txt:L.known};
  if(st==="learning") return {cls:"known", txt:L.learning};
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
function wordLevelBadge(w){
  if(w.source === 'custom') return L.tagCustom;
  const m = String(unitIdForWord(w)).match(/^ko-([ABC])-/);
  return m ? m[1] : '';
}

function wordRowHtml(w, controls=false, withLevel){
  const del = (w.source==='custom')
    ? `<button class="word-del" data-del="${escapeHtml(w.wordId)}" title="${L.deleteWord}">✕</button>`
    : '';
  const ctl = 'background:var(--surface-raised);border:1px solid var(--border);border-radius:8px;color:var(--text-muted);cursor:pointer;padding:3px 7px;line-height:1;font-size:.72rem;font-family:inherit';
  const move = controls
    ? `<span style="display:flex;flex-direction:column;gap:3px;flex:none">
        <button data-move-up="${escapeHtml(w.wordId)}" title="${L.moveUp}" style="${ctl}">▲</button>
        <button data-move-down="${escapeHtml(w.wordId)}" title="${L.moveDown}" style="${ctl}">▼</button>
      </span>`
    : '';
  const edit = controls
    ? `<button data-edit="${escapeHtml(w.wordId)}" title="${L.editWord}" style="${ctl};font-size:.9rem;padding:6px 8px;flex:none">✏️</button>`
    : '';
  // 색은 고정 팔레트 값만 허용한다. 이스케이프만으로는 style 속성 안의 CSS 주입을 못 막는다
  const safeColor = WORD_COLORS.includes(w.color) ? w.color : '';
  const colorStyle = safeColor ? ` style="border-left:4px solid ${safeColor}"` : '';
  const level = withLevel ? wordLevelBadge(w) : '';
  const levelTag = level ? `<span class="tag custom">${escapeHtml(level)}</span>` : '';
  const customTag = (!withLevel && w.source==='custom') ? `<span class="tag custom">${L.tagCustom}</span>` : '';
  return `<div class="word-row"${colorStyle}>
    ${move}
    <span class="ko kr">${escapeHtml(w.ko)}</span>
    <span class="mean">${escapeHtml(w.mean)}</span>
    ${levelTag}${customTag}
    <span class="tag ${statusTag(w).cls}">${statusTag(w).txt}</span>
    ${edit}${del}
  </div>`;
}

function wireDeleteButtons(reRenderFn){
  app.querySelectorAll('.word-del').forEach(btn=>{
    btn.onclick = (e)=>{
      e.stopPropagation();
      deleteCustomWord(btn.dataset.del, reRenderFn);
    };
  });
}

function deleteCustomWord(wordId, reRenderFn){
  const w = student.words.find(x=>x.wordId===wordId && x.source==='custom');
  if(!w) return;
  if(!confirm(L.deleteWordConfirm)) return;

  student.words = student.words.filter(x=>x!==w);
  removeCustomWord(w);           // customWords 문서 + 해당 카드 문서 삭제
  if(reRenderFn) reRenderFn();
}

/* ---------- 아는 단어 / 마스터 ---------- */
async function renderKnown(){
  botnav.classList.remove('hidden');
  setNav('known');
  await ensureSheetUnits();
  const known = student.words.filter(w=>["known","master"].includes(wordStatus(w)));
  let html = backBtn() + topbar() + `<div class="hello">
      <img src="${IMG.money}" alt="" style="width:70px">
      <div><h2>🧠 ${L.knownMenu}</h2>
      <div class="sub">${known.length} · ${L.knownSub}</div></div></div>`;
  if(known.length===0){
    html += `<div class="card" style="text-align:center;color:var(--text-muted)">
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
async function renderLearned(){
  botnav.classList.remove('hidden');
  setNav('learned');
  const learned = await buildLearnedCache();
  let html = backBtn() + topbar() + `<div class="hello">
      <img src="${IMG.excited}" alt="" style="width:70px">
      <div><h2>✅ ${L.learnedMenu}</h2>
      <div class="sub">${learned.length} · ${L.learnedSub}</div></div></div>`;
  if(learned.length===0){
    html += `<div class="card" style="text-align:center;color:var(--text-muted)">
      <img src="${IMG.grumpy}" style="width:120px;margin-bottom:10px" alt="">
      <p>${L.emptyLearned}</p></div>`;
  } else {
    learned.forEach(w=>{
      html += wordRowHtml(w, false, true);
    });
  }
  app.innerHTML = html;
  wireBackBtn();
  wireDeleteButtons(renderLearned);
}

/* ---------- 내가 추가한 단어만 모아보기 ---------- */
async function renderMyWords(){
  botnav.classList.add('hidden');
  await ensureCustomWords();
  const mine = student.words.filter(w=>w.source==='custom').sort((a,b)=>(a.order??0)-(b.order??0));
  let html = backBtn() + topbar() + `<div class="hello">
      <img src="${IMG.study}" alt="" style="width:70px">
      <div><h2>📝 ${L.myWords}</h2>
      <div class="sub">${mine.length} · ${L.myWordsSub}</div></div></div>`;
  if(mine.length===0){
    html += `<div class="card" style="text-align:center;color:var(--text-muted)">
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
    btn.onclick = ()=>renderAddWord(btn.dataset.edit);
  });
  /* 이동한 단어의 order 하나만 이웃 두 개의 중간값으로 고쳐 쓴다 — 쓰기 1회.
     중간값을 넣을 자리가 없을 때(간격 < 2)만 전체 재번호한다. */
  const moveWord = async (wordId, dir)=>{
    const idx = mine.findIndex(w=>w.wordId===wordId);
    const target = idx + dir;
    if(idx < 0 || target < 0 || target >= mine.length) return;
    const prev = (dir < 0) ? mine[target-1] : mine[target];
    const next = (dir < 0) ? mine[target]   : mine[target+1];
    const a = prev ? (prev.order ?? 0) : null;
    const b = next ? (next.order ?? 0) : null;
    if(a != null && b != null && Math.abs(b - a) < 2){
      mine[idx].order = orderBetween(a, b);
      await renumberCustom();
    } else {
      mine[idx].order = orderBetween(a, b);
      await saveCustomOrder(mine[idx]);
    }
    renderMyWords();
  };
  app.querySelectorAll('[data-move-up]').forEach(btn=>{
    btn.onclick = ()=>moveWord(btn.dataset.moveUp, -1);
  });
  app.querySelectorAll('[data-move-down]').forEach(btn=>{
    btn.onclick = ()=>moveWord(btn.dataset.moveDown, 1);
  });
}

/* ---------- 나만의 단어 추가 ---------- */
async function renderAddWord(editId){
  botnav.classList.add('hidden');
  await ensureCustomWords();
  const editing = (editId != null)
    ? student.words.find(w=>w.wordId===editId && w.source==='custom')
    : null;
  // 색은 고정 팔레트 값만 허용 (§0-3: 속성 주입 차단)
  const selColor = WORD_COLORS.includes(editing?.color) ? editing.color : "";
  const swatch = (c)=>`<button data-color="${c}" style="width:36px;height:36px;border-radius:999px;cursor:pointer;flex:none;
      border:3px solid ${c===selColor ? 'var(--accent-strong)' : 'var(--border)'};
      background:${c || 'var(--surface-sunken)'};color:var(--text-muted);font-size:.8rem;line-height:1">${c ? '' : '✕'}</button>`;
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
      ${!currentUserEmail ? `<div class="field-error" style="color:var(--accent-strong)">${L.addWordDemoNotice}</div>` : ""}
      <button class="btn" id="saveWordBtn" style="margin-top:6px">${L.addWordSave}</button>
      <button class="btn ghost" id="cancelWordBtn" style="margin-top:10px">${L.addWordCancel}</button>
    </div>
    ${editing ? '' : `<button class="btn secondary" id="bulkBtn">${L.bulkAdd}</button>`}`;
  if(editing){
    $('#newKo').value = editing.ko;
    $('#newMean').value = editing.mean;
  }
  const colorRow = $('#colorRow');
  colorRow.querySelectorAll('[data-color]').forEach(btn=>{
    btn.onclick = ()=>{
      colorRow.dataset.sel = btn.dataset.color;
      colorRow.querySelectorAll('[data-color]').forEach(b=>{
        b.style.borderColor = (b===btn) ? 'var(--accent-strong)' : 'var(--border)';
      });
    };
  });
  wireBackBtn();
  $('#saveWordBtn').onclick = ()=>saveWordForm(editing);
  $('#cancelWordBtn').onclick = editing ? renderMyWords : renderHome;
  const bulk = $('#bulkBtn');
  if(bulk) bulk.onclick = ()=>renderBulkAdd();
}

/* ---------- 붙여넣기 벌크 추가 (v3 §2.5-③) ----------
   여러 줄을 파싱해 writeBatch 1회 왕복으로 커밋한다. 구분자는 -, :, 탭 모두 허용. */
function parseBulkWords(text){
  return String(text || '').split(/\r?\n/).map(line=>{
    const s = line.trim();
    if(!s) return null;
    // 한국어 쪽에서 첫 구분자까지만 끊는다 — 뜻에 하이픈이 들어가도(rendez-vous) 안전하다
    const m = s.match(/^([^\t:\-]+?)\s*[\t:\-]\s*(.+)$/);
    if(!m) return {raw:s, ko:'', mean:'', ok:false};
    const ko = m[1].trim(), mean = m[2].trim();
    return {raw:s, ko, mean, ok: !!(ko && mean)};
  }).filter(Boolean);
}

function renderBulkAdd(){
  botnav.classList.add('hidden');
  app.innerHTML = backBtn() + topbar() + `
    <div class="hello">
      <img src="${IMG.study}" alt="" style="width:70px">
      <div><h2>${L.bulkAdd}</h2>
      <div class="sub">${L.bulkAddSub}</div></div>
    </div>
    <div class="card">
      <div class="field">
        <textarea id="bulkText" rows="8" class="kr" placeholder="${escapeHtml(L.bulkPlaceholder)}"></textarea>
      </div>
      <div id="bulkPreview"></div>
      <button class="btn" id="bulkSaveBtn" disabled style="margin-top:6px;opacity:.45">${L.bulkAddBtn(0)}</button>
      <button class="btn ghost" id="bulkCancelBtn" style="margin-top:10px">${L.addWordCancel}</button>
    </div>`;
  wireBackBtn();

  let good = [];
  const refresh = ()=>{
    const parsed = parseBulkWords($('#bulkText').value);
    // 중복 검사는 로컬 캐시에서 — 서버 읽기 0회
    const seen = new Set(student.words.map(w=>w.ko));
    good = [];
    const bad = [];
    parsed.forEach(p=>{
      if(p.ok && !seen.has(p.ko)){ seen.add(p.ko); good.push(p); }
      else bad.push(p);
    });
    const box = $('#bulkPreview');
    box.innerHTML = good.length
      ? `<div class="day-head">${L.bulkPreviewTitle} · ${good.length}</div>` +
        good.map(()=>`<div class="word-row"><span class="ko kr"></span><span class="mean"></span></div>`).join('') +
        (bad.length ? `<div class="field-error">${L.bulkSkipped(bad.length)}</div>` : '')
      : `<div class="field-error">${L.bulkNothing}${bad.length ? ' ' + L.bulkSkipped(bad.length) : ''}</div>`;
    // 붙여넣은 문자열은 HTML로 넣지 않는다
    box.querySelectorAll('.word-row').forEach((row,i)=>{
      row.querySelector('.ko').textContent = good[i].ko;
      row.querySelector('.mean').textContent = good[i].mean;
    });
    const btn = $('#bulkSaveBtn');
    btn.textContent = L.bulkAddBtn(good.length);
    btn.disabled = good.length === 0;
    btn.style.opacity = good.length ? '1' : '.45';
  };
  $('#bulkText').oninput = refresh;
  $('#bulkCancelBtn').onclick = ()=>renderAddWord();
  $('#bulkSaveBtn').onclick = async ()=>{
    const btn = $('#bulkSaveBtn');
    btn.disabled = true;
    await saveBulkWords(good);
    renderMyWords();
  };
  refresh();
}

async function saveBulkWords(items){
  const today = new Date().toISOString().slice(0,10);
  let seq = nextCustomSeq();
  const last = customList().at(-1);
  let order = orderBetween(last ? (last.order ?? 0) : null, null);
  const batch = (currentUid && !progressLocked) ? D().writeBatch(D().db) : null;

  items.forEach(it=>{
    const wordId = customId(seq++);
    const w = {
      ...attachQuizFields({ko: it.ko, mean: it.mean, type:'word'}),
      ...blankCard(),
      wordId, date: today, pron: '',
      source: 'custom', color: '', order
    };
    order += ORDER_GAP;
    student.words.push(w);
    if(batch) batch.set(customRef(wordId), customDocData(w));
  });

  if(batch){
    try{ await batch.commit(); }
    catch(e){ console.error('벌크 저장 실패', e); }
  }
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
  const dup = student.words.some(w=>w.ko===ko && w!==editing);   // 로컬 캐시에서 검사 — 서버 읽기 0회
  if(dup){
    errEl.textContent = L.addWordDuplicateError;
    errEl.classList.remove('hidden');
    return;
  }

  if(editing){
    // wordId는 그대로 두므로 표기를 고쳐도 진도가 끊기지 않는다
    Object.assign(editing, attachQuizFields({...editing, ko, mean}));
    editing.color = color;
    saveCustomWord(editing);
    renderMyWords();
    return;
  }

  const today = new Date().toISOString().slice(0,10);
  const wordId = customId(nextCustomSeq());
  const last = customList().at(-1);
  const newWord = {
    ...attachQuizFields({ko, mean, type:"word"}),
    ...blankCard(),
    wordId, date:today, pron:"",
    source:"custom", color, order: orderBetween(last ? (last.order ?? 0) : null, null)
  };
  student.words.push(newWord);
  saveCustomWord(newWord);
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
  html += isGuest
    ? `<button class="btn" id="logoutBtn" style="margin-top:10px">🔐 ${L.guestLoginToSave}</button>`
    : `<button class="btn chili" id="logoutBtn" style="margin-top:10px">🚪 ${L.logout}</button>`;
  html += `<div style="text-align:center;color:var(--text-muted);font-size:.72rem;margin-top:22px;line-height:1.7">
    © 2026 Jonghyuk Lee · Blabla Korea<br>${L.rightsNote}</div>`;
  app.innerHTML = html;
  wireBackBtn();
  $('#switchLang').onclick = ()=>{ L = (L===T.fr)?T.en:T.fr; renderHelp(); };
  $('#logoutBtn').onclick = doLogout;
}

/* =====================================================================
   🃏 단어 복습 (플래시카드)
   - 점수·하트·머니뱅크와 무관한 순수 복습 모드
   - 문장은 제외하고 단어만 (퀴즈와 동일 기준)
   ===================================================================== */

function reviewPool(mode){
  if(mode === 'unit'){
    // 유닛 학습용 — 진도와 무관하게 그 유닛 전체를 보여준다
    return currentUnitWords().filter(w=>w.type!=="sentence" && w.ko && w.mean);
  }
  // 'learned' — 한 번이라도 맞힌 단어만 복습한다
  return (student.words || []).filter(w =>
    (w.gradedCorrect||0) > 0 && w.type!=="sentence" && w.ko && w.mean);
}

async function startReview(mode='learned'){
  if(guestWallDue()){ renderGuestWall(()=>startReview(mode)); return; }
  if(currentUnitId === 'custom') await ensureCustomWords();
  if(mode === 'learned') await ensureSheetUnits();
  document.onkeydown = null;
  session = null;
  const cards = shuffle(reviewPool(mode));
  if(!cards.length){ renderReviewEmpty(mode); return; }
  review = { cards, i:0, flipped:false, mode, seen:new Set([0]), viewed:new Set() };
  renderReview();
}

/* 플래시카드 조회수 (D10) — 채점이 아니라 "봤다"는 사실만 센다.
   앞뒤로 오가며 같은 카드를 여러 번 봐도 세션당 1회.
   원·스트릭·마스터·SRS와 연결하지 않는다. 서버 쓰기는 세션 종료 시 배치 1회. */
function countCardView(w){
  if(!review || review.viewed.has(w.wordId)) return;
  review.viewed.add(w.wordId);
  w.views = (w.views||0) + 1;
  journalCard(w);          // 게스트·데모는 currentUid가 없어 저장되지 않는다
}

function renderReviewEmpty(mode){
  botnav.classList.add('hidden');
  review = null;
  const sub = mode === 'learned' ? L.reviewEmptyLearned : L.reviewEmptySub;
  app.innerHTML = backBtn() + topbar() + `
    <div class="result">
      <img src="${IMG.surprised}" alt="">
      <h2>${L.reviewEmptyTitle}</h2>
      <div class="score" style="max-width:380px;margin:0 auto 18px">${sub}</div>
      <div class="btn-row" style="flex-direction:column">
        ${isGuest ? '' : `<button class="btn" id="addNowBtn">➕ ${L.addWord}</button>`}
        <button class="btn secondary" id="homeBtn">${L.home}</button>
      </div>
    </div>`;
  wireBackBtn();
  const addNow = $('#addNowBtn');
  if(addNow) addNow.onclick = ()=>renderAddWord();
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
          <div class="ftext kr ${w.ko.length>12?'long':''}" id="cardKo"></div>
          ${w.pron ? `<div class="fpron" id="cardPron"></div>` : ``}
          <div class="fhint">${L.flipHint}</div>
        </div>
        <div class="face back">
          <div class="fside">${L.sideMean}</div>
          <div class="ftext ${w.mean.length>12?'long':''}" id="cardMean"></div>
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

  // 시트/개인 단어 문자열은 HTML로 넣지 않는다
  $('#cardKo').textContent = w.ko;
  $('#cardMean').textContent = w.mean;
  if(w.pron) $('#cardPron').textContent = w.pron;

  const flash = $('#flash');
  const flip = ()=>{ r.flipped = !r.flipped; flash.classList.toggle('flipped', r.flipped); };
  flash.onclick = flip;
  $('#flipBtn').onclick = flip;
  $('#prevBtn').onclick = ()=>{ if(r.i>0){ r.i--; renderReview(); } };
  $('#nextBtn').onclick = ()=>{
    countCardView(w);      // 넘기는 순간에만 센다 — 되돌아온 카드는 다시 세지 않는다
    if(r.i < r.cards.length-1){ r.i++; renderReview(); }
    else renderReviewDone();
  };
  $('#shuffleBtn').onclick = ()=>startReview(r.mode);
  $('#quitBtn').onclick = ()=>{ commitJournal(); review = null; renderHome(); };

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
  commitJournal();               // 세션 전체의 views 를 writeBatch 1회로 커밋
  guestCountSession();
  const total = review ? review.cards.length : 0;
  const mode = review ? review.mode : 'learned';
  review = null;
  app.innerHTML = backBtn() + topbar() + `
    <div class="result">
      <img src="${IMG.study}" alt="">
      <h2>${L.reviewDoneTitle}</h2>
      <div class="score">${L.cardCount(total, total)}</div>
      <div class="score" style="max-width:380px;margin:0 auto 18px">${L.reviewDoneSub}</div>
      <div class="btn-row" style="flex-direction:column">
        <button class="btn" id="quizBtn">${L.quiz}</button>
        <button class="btn secondary" id="againBtn">${L.reviewAgain}</button>
        <button class="btn secondary" id="homeBtn">${L.home}</button>
      </div>
    </div>`;
  wireBackBtn();
  $('#quizBtn').onclick = ()=>startQuiz(currentUnitWords());
  $('#againBtn').onclick = ()=>startReview(mode);
  $('#homeBtn').onclick = ()=>renderHome();
}

/* =====================================================================
   출제 엔진 — 퀴즈와 플래시카드가 공유한다
   문장(type==="sentence")은 출제하지 않음 — 단어만
   ===================================================================== */

const SESSION_SIZE = 10;      // 한 세션 문제 수

/* 출제 가능한 단어만 추림 — 문장·문법 규칙·정답 유출 항목은 attachQuizFields가 걸러둠 */
function quizPool(list){
  return (list||[]).filter(w=>w && w.quizOk);
}

/* 오답 보기 고르기 — 의미가 가까운 것부터 단계적으로 뽑는다.
   전체에서 무작위로 뽑으면 품사·주제가 동떨어져 소거법으로 풀리기 때문. */
function pickDistractors(w, allWords, field, answer, need, meaningField){
  const key = s => s.toLowerCase();
  const taken = new Set([key(answer)]);
  const answerMean = meaningField ? key(w[meaningField] || '') : '';
  const takenMean = new Set(answerMean ? [answerMean] : []);
  const out = [];
  const rest = allWords.filter(x=>x.wordId!==w.wordId && x[field]);

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
      if(taken.has(key(x[field]))) continue;   // 선택지에 보이는 값이 겹치면 정답이 2개가 됨
      // mean2ko: 한국어는 달라도 뜻이 같으면 (것/거 = thing) 정답이 2개가 되거나, 오답끼리도 같은 뜻이 됨
      const mx = meaningField ? key(x[meaningField] || '') : '';
      if(mx && takenMean.has(mx)) continue;
      taken.add(key(x[field]));
      if(mx) takenMean.add(mx);
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

  // 4지선다 = 오답 3개. 후보가 모자라면 있는 만큼만 사용
  // (다른 학생 데이터에서 빌려오지 않음 — 데모/타 학생 콘텐츠 혼입 방지)
  const distractors = pickDistractors(w, allWords, field, answer, nOpt-1, 'quizMean');
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

/* =====================================================================
   🎯 단어 퀴즈 (4지선다)
   ===================================================================== */

async function startQuiz(sourceWords){
  if(guestWallDue()){ renderGuestWall(()=>startQuiz(sourceWords)); return; }
  if(currentUnitId === 'custom') await ensureCustomWords();
  document.onkeydown = null;
  review = null;
  const pool = sourceWords || currentUnitWords();
  // 보기는 전체 단어에서 뽑되, 출제 풀은 현재 유닛으로 한정
  if(quizPool(student.words).length < 2 || quizPool(pool).length < 1){ renderNotEnoughWords(); return; }
  const qs = composeSession(pool, SESSION_SIZE, 4);
  if(!qs.length){ renderNotEnoughWords(); return; }
  session = { mode:'quiz', qs, i:0, correct:0, streak:0, earned:0, size: qs.length, answered:false,
              source:pool };
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
    <div class="q-count" id="qCount">🎯 ${L.qCountQ(s.i+1, s.qs.length)}</div>
    <div class="card">
      <div class="prompt">
        <div class="plabel">${q.label}</div>
        <div class="pword kr" id="qPrompt"></div>
        ${(q.dir==="ko2mean" && q.w.pron) ? `
          <button class="pron-toggle ${showPron?'active':''}" id="pronToggle" title="${L.pronToggle}">🔤</button>
          <div class="pron ${showPron?'':'hidden'}" id="pronText"></div>
        ` : ""}
      </div>
      <div class="options" id="options"></div>
    </div>
    <div id="noteSlot"></div>`;

  $('#qPrompt').textContent = q.promptText;   // 시트 유래 문자열 — HTML로 넣지 않는다
  const pronBtn = $('#pronToggle');
  if(pronBtn){
    $('#pronText').textContent = q.w.pron;
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
  $('#quitBtn').onclick = ()=>{ commitJournal(); session = null; renderHome(); };
}

/* 틀린 문항은 세션 맨 뒤에 한 번만 다시 붙인다 (v3 §3.4-1).
   재출제분에서 또 틀려도 다시 붙이지 않는다 — 안 그러면 세션이 끝나지 않는다.
   분모(qs.length)는 여기서 늘어나므로 진행 바를 처음부터 부풀리지 않는다. */
function queueRetry(q){
  if(q.isRetry) return;
  session.qs.push({...q, isRetry:true});
  const el = $('#qCount');
  if(el) el.textContent = `🎯 ${L.qCountQ(session.i+1, session.qs.length)}`;
}

/* 정답 카드 (v3 §3.5) — 정규화된 보기가 아니라 시트 원본을 보여준다.
   pos·예문이 비면 그 자리를 통째로 감춘다. 문자열은 전부 textContent. */
function renderAnswerCard(w){
  const pos = posLabel(w.pos);
  const hasMeta = !!(w.pron || pos);
  const hasEx = !!(w.example || w.exampleMean);
  const slot = $('#noteSlot');
  slot.innerHTML = `<div class="answer-card">
    <div class="ac-ko kr" id="acKo"></div>
    ${hasMeta ? `<div class="ac-meta">
      ${w.pron ? `<span class="ac-pron" id="acPron"></span>` : ``}
      ${pos ? `<span class="ac-pos" id="acPos"></span>` : ``}
    </div>` : ``}
    <div class="ac-mean" id="acMean"></div>
    ${hasEx ? `<div class="ac-ex">
      ${w.example ? `<div class="ac-ex-ko kr" id="acExKo"></div>` : ``}
      ${w.exampleMean ? `<div class="ac-ex-mean" id="acExMean"></div>` : ``}
    </div>` : ``}
  </div>`;
  $('#acKo').textContent = w.ko;
  if(w.pron) $('#acPron').textContent = w.pron;
  if(pos) $('#acPos').textContent = pos;
  $('#acMean').textContent = w.mean;
  if(w.example) $('#acExKo').textContent = w.example;
  if(w.exampleMean) $('#acExMean').textContent = w.exampleMean;
}

function quizAnswer(btn, chosen, q){
  if(!session || session.answered) return;
  session.answered = true;
  const correct = chosen===q.answer;

  app.querySelectorAll('.opt').forEach(o=>{
    o.disabled = true;
    const t = o.querySelector('.kr').textContent;
    if(t===q.answer){ o.classList.add('correct'); o.querySelector('.mark').textContent="✓"; }
    else if(o===btn){ o.classList.add('wrong');   o.querySelector('.mark').textContent="✕"; }
  });

  const w = q.w;
  const now = new Date().toISOString();
  w.reps++;
  w.lastReview = now;
  if(!w.firstSeenAt) w.firstSeenAt = now;
  if(correct){
    if(!q.scored){ session.correct++; q.scored = true; }
    session.streak++; session.earned += REWARD;
    if((w.gradedCorrect||0) === 0) dropLearnedCache();
    w.correctStreak++; w.gradedCorrect++;
    if(w.correctStreak >= 6 && !w.masteredAt) w.masteredAt = now;
    bestStreak = Math.max(bestStreak, session.streak);
    updateBank(REWARD);
    showFeedback(true, session.streak);
  } else {
    session.streak = 0;
    w.lapses++;
    w.correctStreak = 0;          // 아는 단어였다면 자동으로 "학습 중"으로 강등된다
    showFeedback(false, 0);       // 원은 깎지 않는다 (D7)
    queueRetry(q);
  }
  // 정답이어도 보여준다 — 4지선다는 찍어서 맞을 수 있다 (v3 §3.5)
  renderAnswerCard(q.w);

  const st = $('#streak');
  if(st){ st.textContent = `🔥 ${session.streak}`; st.className = "streak "+(session.streak===0?"off":""); }
  guestCountQuestion(correct, w.wordId);   // 게스트일 때만 동작. sessionStorage
  journalCard(w);   // 서버 쓰기는 세션 종료 시 writeBatch 한 번으로 묶인다

  // 답을 다시 읽고 외울 시간을 갖도록 버튼을 눌러야 다음 문제로 진행
  $('#noteSlot').insertAdjacentHTML('beforeend',
    `<button class="btn" id="nextBtn" style="margin-top:14px">${L.next}</button>`);
  $('#nextBtn').onclick = ()=>{
    session.i++;
    if(session.i>=session.qs.length) renderResult();
    else if(guestWallDue()) renderGuestWall(()=>renderQuizQuestion());
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
  // 오답에는 금액을 띄우지 않는다 (깎이는 게 없다). 정답 금액은 원을 쌓는 로그인 세션에서만
  const money = (good && currentUid) ? `<div class="fmoney">+${REWARD} ₩</div>` : '';
  fb.innerHTML = `<img src="${img}" alt="">
    <div class="fmsg ${cls}">${msg}</div>${money}`;
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
        ${isGuest ? '' : `<button class="btn" id="addNowBtn">➕ ${L.addWord}</button>`}
        <button class="btn secondary" id="homeBtn">${L.home}</button>
      </div>
    </div>`;
  wireBackBtn();
  const addNow = $('#addNowBtn');
  if(addNow) addNow.onclick = ()=>renderAddWord();
  $('#homeBtn').onclick = ()=>renderHome();
}

/* ---------- 결과 ---------- */
function renderResult(){
  botnav.classList.add('hidden');
  document.onkeydown = null;
  commitJournal();               // 세션 전체를 writeBatch 1회로 커밋
  guestCountSession();
  const s = session;
  const img = s.correct>=8 ? IMG.money
            : s.correct>=5 ? IMG.excited : IMG.surprised;

  app.innerHTML = backBtn() + topbar() + `
    <div class="result">
      <div id="captureArea">
        <img src="${img}" alt="">
        <h2>${L.resultTitle(s.correct)}</h2>
        <div class="score">${L.resultScore(s.correct, s.size || s.qs.length)}</div>
        ${isGuest ? '' : `<div class="earned">💰 +${wonFmt(s.earned)} ${L.earned}</div>`}
      </div>
      <div class="btn-row" style="flex-direction:column">
        <button class="btn" id="moreBtn">${L.moreQuiz}</button>
        <button class="btn secondary" id="homeBtn">${L.home}</button>
        <button class="btn secondary" id="shareBtn">📤 ${L.share}</button>
      </div>
    </div>`;
  wireBackBtn();
  $('#moreBtn').onclick = ()=>startQuiz(s.source);
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
    const canvas = await html2canvas($('#captureArea'), {backgroundColor:'#F5ECE9'});
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
const NAV_LABEL = {home:'navHome', words:'navWords', learned:'navLearned',
                   known:'navKnown', help:'navHelp'};
function setNav(active){
  botnav.querySelectorAll('button').forEach(b=>{
    b.classList.toggle('active', b.dataset.nav===active);
    // 문구가 index.html 에 프랑스어로 박혀 있어서 영어 사용자에게도 프랑스어가 보였다
    const label = b.querySelector('.bl');
    if(label) label.textContent = L[NAV_LABEL[b.dataset.nav]] || label.textContent;
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
else {
  window.addEventListener('fb-ready', initApp);
  window.addEventListener('fb-failed', e=>renderBootError(e.detail));
  // firebase-init.js 가 아예 로드조차 못 되면 두 이벤트 다 오지 않는다
  setTimeout(()=>{ if(!window.fb) renderBootError('firebase-init.js: 응답 없음'); }, 8000);
}
