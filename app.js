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
  upset: "images/upset.png",
};

/* =====================================================================
   Blabla Korean · Voca Bank — mockup logic
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
    statLearned: "Appris", statKnown: "Connus", statStreak: "Série record",
    play: "Commencer l'entraînement",
    playSub: "10 questions · mots + phrases",
    review: "Réviser les mots du jour",
    reviewSub: "Ce qui revient aujourd'hui",
    words: "Mes mots par date",
    wordsSub: "Tout ce qu'on a appris",
    knownMenu: "Mots connus & maîtrisés",
    knownSub: "Ta collection",
    todayReview: "à réviser",
    sectionPlay: "S'entraîner", sectionBrowse: "Parcourir",
    qCount: (a,b)=>`Question ${a} / ${b}`,
    promptKo: "Que veut dire…", promptMean: "Comment dit-on…", promptSent: "Traduis la phrase",
    correct: "Bravo !", wrong: "Aïe, ça pique !",
    answerWas: "La bonne réponse :",
    more: "10 questions de plus",
    home: "Retour à l'accueil",
    resultTitle: (n)=> n>=9?"Champion piquant !": n>=7?"Bien joué !": n>=5?"Pas mal !":"Continue !",
    resultScore: (c,t)=>`${c} bonnes réponses sur ${t}`,
    earned: "gagnés",
    known: "Connus", master: "Maîtrisés", learning: "En cours",
    emptyKnown: "Pas encore de mot connu. Réponds juste 3 fois de suite à un mot pour le débloquer !",
    navHome:"Accueil", navWords:"Mots", navKnown:"Appris", navHelp:"Aide",
    helpTitle:"Comment ça marche",
    help: [
      ["💰","La banque de wons","+100 wons par bonne réponse, −50 par erreur. Ta banque ne descend jamais sous 0."],
      ["🔥","Les séries","Enchaîne les bonnes réponses pour faire monter ta série et voir le piment danser."],
      ["⭐","Mots connus","3 bonnes réponses de suite = mot connu. Continue de le revoir pour le maîtriser."],
      ["🧠","Révision espacée","Chaque jour, on te ressort les mots au bon moment : 1, 3, 7, 14 puis 30 jours."],
    ],
    switchLang:"English",
    newTag: "Nouveau", sentenceTag: "Phrase",
    share: "Partager le résultat",
    logout: "Se déconnecter",
    logoutConfirm: "Tu veux vraiment te déconnecter ?",
    notRegistered: "Tu n'es pas dans la liste des élèves. Contacte Blabla Korean.",
    vocabLoading: "Chargement de tes mots…",
    vocabNotReady: "Ta liste de mots n'est pas encore prête. Contacte ton professeur."
  },
  en: {
    tagline: "Learn Korean the spicy way 🌶️",
    loginTitle: ["Your Korean", "word bank"],
    loginDesc: "Every correct answer earns you won. Every miss costs you. Grow your bank!",
    google: "Continue with Google",
    demoHint: "Demo — pick a student to try it:",
    hi: "Hi",
    welcome: "Ready to earn some won?",
    statLearned: "Learned", statKnown: "Known", statStreak: "Best streak",
    play: "Start practice",
    playSub: "10 questions · words + sentences",
    review: "Review today's words",
    reviewSub: "What's due today",
    words: "My words by date",
    wordsSub: "Everything we've learned",
    knownMenu: "Known & mastered words",
    knownSub: "Your collection",
    todayReview: "due",
    sectionPlay: "Practice", sectionBrowse: "Browse",
    qCount: (a,b)=>`Question ${a} / ${b}`,
    promptKo: "What does this mean…", promptMean: "How do you say…", promptSent: "Translate the sentence",
    correct: "Nice!", wrong: "Ouch, spicy!",
    answerWas: "Correct answer:",
    more: "10 more questions",
    home: "Back to home",
    resultTitle: (n)=> n>=9?"Spicy champion!": n>=7?"Well done!": n>=5?"Not bad!":"Keep going!",
    resultScore: (c,t)=>`${c} correct out of ${t}`,
    earned: "earned",
    known: "Known", master: "Mastered", learning: "Learning",
    emptyKnown: "No known words yet. Answer a word right 3 times in a row to unlock it!",
    navHome:"Home", navWords:"Words", navKnown:"Learned", navHelp:"Help",
    helpTitle:"How it works",
    help: [
      ["💰","The won bank","+100 won per correct answer, −50 per miss. Your bank never drops below 0."],
      ["🔥","Streaks","Chain correct answers to build your streak and watch the chili dance."],
      ["⭐","Known words","3 correct in a row = a known word. Keep reviewing to master it."],
      ["🧠","Spaced review","Each day we resurface words at the right time: 1, 3, 7, 14, then 30 days."],
    ],
    switchLang:"Français",
    newTag: "New", sentenceTag: "Sentence",
    share: "Share result",
    logout: "Log out",
    logoutConfirm: "Are you sure you want to log out?",
    notRegistered: "You're not on the registered student list. Please contact Blabla Korean.",
    vocabLoading: "Loading your words…",
    vocabNotReady: "Your word list isn't ready yet. Please contact your teacher."
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
let session = null;   // active quiz session
let bank = 0;
let bestStreak = 0;
let currentUserEmail = null; // Firebase 로그인 이메일 (데모 모드면 null)
let studentWhitelist = [];   // 구글시트에서 불러온 {email,name,lang,sheetTab}[]

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

async function fetchStudentWhitelist(){
  const res = await fetch(STUDENT_LIST_CSV_URL);
  const text = await res.text();
  const lines = text.trim().split(/\r?\n/);
  return lines.slice(1).map(parseCsvLine).map(cols=>{
    const [email,name,lang,sheetTab,vocabCsvUrl] = cols;
    return {email,name,lang,sheetTab,vocabCsvUrl};
  }).filter(r=>r.email);
}

/* ---------- 학생별 단어 CSV (구글시트) ---------- */
const vocabCache = {}; // 세션 동안만 유지, 새로고침하면 다시 fetch

async function fetchStudentVocab(url){
  const res = await fetch(url);
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

function loadStudent(key, langOverride){
  const s = SAMPLE[key];
  const lang = langOverride || s.lang;
  student = {
    name:s.name, lang,
    words: s.words.map((w,i)=>({...w, id:i, correctStreak:0, seen:0, totalCorrect:0, status:"new"}))
  };
  L = T[lang];
  bank = 0; bestStreak = 0;
  document.documentElement.lang = lang;
}

/* ---------- 실제 학생: 구글시트에서 받아온 단어로 세팅 ---------- */
function setupStudent(row, words, lang){
  student = {
    name: row.name, lang,
    words: words.map((w,i)=>({...w, id:i, correctStreak:0, seen:0, totalCorrect:0, status:"new"}))
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
    bank = typeof data.points === 'number' ? data.points : 0;
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
  } else {
    bank = 0;
    await window.fb.setDoc(ref, {points:0, srsProgress:{}, lastUpdated: window.fb.serverTimestamp()});
  }
}

function persistProgress(){
  if(!currentUserEmail) return; // 데모 모드는 저장 안 함
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
  try{
    const words = await getStudentVocab(row);
    setupStudent(row, words, lang);
    await restoreProgress(email);
    renderHome();
  } catch(e){
    console.error('단어 데이터 로딩 실패', e);
    renderVocabNotReady(lang);
  }
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
  studentWhitelist = await fetchStudentWhitelist().catch(e=>{ console.error('학생목록 로딩 실패', e); return []; });
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
      <div>Voca Bank<small>Blabla Korean</small></div></div>
    ${bankChip()}
  </div>`;
}

/* =====================================================================
   화면들
   ===================================================================== */

/* ---------- 로그인 ---------- */
function renderLogin(){
  botnav.classList.add('hidden');
  const showDemo = new URLSearchParams(location.search).get('demo')==='true';
  app.innerHTML = `
  <div class="login">
    <img src="${IMG.study}" alt="">
    <div class="brand" style="justify-content:center;margin-bottom:4px">
      <span class="dot" style="font-size:1.1rem">🌶️</span>
      <small style="color:var(--gold);letter-spacing:2px">BLABLA KOREAN</small>
    </div>
    <h1>${L.loginTitle[0]}<br><span>${L.loginTitle[1]}</span></h1>
    <p>${L.loginDesc}</p>
    <button class="google-btn" id="googleBtn">
      <svg viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.9 2.4 30.3 0 24 0 14.6 0 6.4 5.4 2.5 13.3l7.9 6.1C12.3 13.2 17.6 9.5 24 9.5z"/><path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.4c-.5 2.9-2.1 5.3-4.6 7l7.1 5.5c4.2-3.9 6.6-9.6 6.6-16z"/><path fill="#FBBC05" d="M10.4 28.6c-.5-1.4-.8-2.9-.8-4.6s.3-3.2.8-4.6l-7.9-6.1C.9 16.5 0 20.1 0 24s.9 7.5 2.5 10.7l7.9-6.1z"/><path fill="#34A853" d="M24 48c6.3 0 11.6-2.1 15.5-5.6l-7.1-5.5c-2 1.3-4.5 2.1-8.4 2.1-6.4 0-11.7-3.7-13.6-9.4l-7.9 6.1C6.4 42.6 14.6 48 24 48z"/></svg>
      ${L.google}
    </button>
    ${showDemo ? `
    <div class="demo-hint">${L.demoHint}</div>
    <div class="demo-pick">
      <button data-demo="jessica">🇫🇷 Jessica (FR)</button>
      <button data-demo="corine">🇬🇧 Corine (EN)</button>
    </div>` : ``}
  </div>`;

  $('#googleBtn').onclick = async ()=>{
    try{
      await window.fb.signInWithPopup(window.fb.auth, window.fb.googleProvider);
      // 성공하면 onAuthStateChanged -> handleLoginSuccess() 로 이어짐
    } catch(e){
      console.error(e);
      alert('로그인 중 오류가 발생했습니다.');
    }
  };
  if(showDemo){
    app.querySelectorAll('[data-demo]').forEach(b=>{
      b.onclick = ()=>{ currentUserEmail = null; loadStudent(b.dataset.demo); renderHome(); };
    });
  }
}

/* ---------- 오늘 복습 예정 개수 (SRS 데모) ---------- */
function dueCount(){
  // 데모: 아직 안 본 것 + status가 new/learning인 것을 "복습 대상"으로
  return student.words.filter(w=>w.status!=="master").length;
}
function stats(){
  const learned = student.words.filter(w=>w.totalCorrect>0).length;
  const known = student.words.filter(w=>w.status==="known"||w.status==="master").length;
  return {learned, known};
}

/* ---------- 홈 ---------- */
function renderHome(){
  botnav.classList.remove('hidden');
  setNav('home');
  const s = stats();
  app.innerHTML = topbar() + `
    <div class="hello">
      <img src="${IMG.excited}" alt="">
      <div>
        <h2>${L.hi}, ${student.name} 👋</h2>
        <div class="sub">${L.welcome}</div>
      </div>
    </div>

    <div class="stat-grid">
      <div class="stat"><b>${s.learned}</b><span>${L.statLearned}</span></div>
      <div class="stat"><b>${s.known}</b><span>${L.statKnown}</span></div>
      <div class="stat"><b>${bestStreak}🔥</b><span>${L.statStreak}</span></div>
    </div>

    <div class="section-title">${L.sectionPlay}</div>
    <button class="menu-btn" id="playBtn" style="border-color:var(--gold)">
      <span class="emoji">🎯</span>
      <span class="mtext"><b>${L.play}</b><span>${L.playSub}</span></span>
      <span class="arrow">→</span>
    </button>
    <button class="menu-btn" id="reviewBtn">
      <span class="emoji">🧠</span>
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
      <span class="emoji">⭐</span>
      <span class="mtext"><b>${L.knownMenu}</b><span>${L.knownSub}</span></span>
      <span class="arrow">→</span>
    </button>
  `;
  $('#playBtn').onclick = ()=>startSession(student.words);
  $('#reviewBtn').onclick = ()=>startSession(student.words.filter(w=>w.status!=="master"));
  $('#wordsBtn').onclick = renderWords;
  $('#knownBtn').onclick = renderKnown;
}

/* ---------- 날짜별 단어 ---------- */
function renderWords(){
  botnav.classList.remove('hidden');
  setNav('words');
  const byDate = {};
  student.words.forEach(w=>{ (byDate[w.date] ||= []).push(w); });
  const dates = Object.keys(byDate).sort().reverse();

  let html = backBtn() + topbar() + `<h2 style="margin:6px 2px 4px">📖 ${L.words}</h2>
    <div class="sub" style="color:var(--cream-dim);font-size:.85rem;margin-bottom:6px">${L.wordsSub}</div>`;
  dates.forEach(d=>{
    const list = byDate[d];
    html += `<div class="day-block">
      <div class="day-head">📅 ${fmtDate(d)} <span class="count">· ${list.length}</span></div>`;
    list.forEach(w=>{
      html += `<div class="word-row">
        <span class="ko kr">${w.ko}</span>
        <span class="mean">${w.mean}</span>
        <span class="tag ${statusTag(w).cls}">${statusTag(w).txt}</span>
      </div>`;
    });
    html += `</div>`;
  });
  app.innerHTML = html;
  wireBackBtn();
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

/* ---------- 아는 단어 / 마스터 ---------- */
function renderKnown(){
  botnav.classList.remove('hidden');
  setNav('known');
  const known = student.words.filter(w=>w.status==="known"||w.status==="master");
  let html = backBtn() + topbar() + `<div class="hello">
      <img src="${IMG.money}" alt="" style="width:70px">
      <div><h2>⭐ ${L.knownMenu}</h2>
      <div class="sub">${known.length} · ${L.knownSub}</div></div></div>`;
  if(known.length===0){
    html += `<div class="card" style="text-align:center;color:var(--cream-dim)">
      <img src="${IMG.grumpy}" style="width:120px;margin-bottom:10px" alt="">
      <p>${L.emptyKnown}</p></div>`;
  } else {
    known.forEach(w=>{
      html += `<div class="word-row">
        <span class="ko kr">${w.ko}</span>
        <span class="mean">${w.mean}</span>
        <span class="tag ${statusTag(w).cls}">${statusTag(w).txt}</span></div>`;
    });
  }
  app.innerHTML = html;
  wireBackBtn();
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
  app.innerHTML = html;
  wireBackBtn();
  $('#switchLang').onclick = ()=>{ L = (L===T.fr)?T.en:T.fr; renderHelp(); };
  $('#logoutBtn').onclick = doLogout;
}

/* =====================================================================
   퀴즈 세션
   ===================================================================== */

function buildQuestion(w, allWords){
  // 방향 랜덤: ko->mean (뜻 고르기) 또는 mean->ko (한국어 고르기)
  // 문장은 항상 뜻 고르기(길어서)
  const dir = (w.type==="sentence") ? "ko2mean" : (Math.random()<0.5?"ko2mean":"mean2ko");
  const answer = dir==="ko2mean" ? w.mean : w.ko;
  const promptText = dir==="ko2mean" ? w.ko : w.mean;

  // 오답 후보: 같은 타입 우선, 같은 방향의 필드
  const field = dir==="ko2mean" ? "mean" : "ko";
  let candidates = allWords
    .filter(x=>x.id!==w.id && x[field] && x[field]!==answer)
    .map(x=>x[field]);
  candidates = [...new Set(candidates)];
  // 후보가 3개 미만이면(단어 수가 적은 학생) 그만큼만 오답 보기로 사용
  // (다른 학생 데이터에서 빌려오지 않음 — 데모/타 학생 콘텐츠 혼입 방지)
  const distractors = shuffle(candidates).slice(0,3);
  const options = shuffle([answer, ...distractors]);
  return {w, dir, promptText, answer, options,
          label: dir==="mean2ko" ? L.promptMean : (w.type==="sentence"?L.promptSent:L.promptKo)};
}

function composeSession(sourceWords, size=10){
  const words = sourceWords.filter(w=>w.type==="word");
  const sents = sourceWords.filter(w=>w.type==="sentence");
  // 문장 최대 2개, 나머지는 단어
  const chosenSents = shuffle(sents).slice(0, Math.min(2, sents.length));
  const nWords = size - chosenSents.length;
  const chosenWords = shuffle(words).slice(0, Math.min(nWords, words.length));
  let picked = shuffle([...chosenWords, ...chosenSents]);
  // 부족하면 채우기
  if(picked.length<size){
    const rest = shuffle(sourceWords.filter(w=>!picked.includes(w)));
    picked = picked.concat(rest).slice(0,size);
  }
  return picked.map(w=>buildQuestion(w, student.words));
}

function startSession(sourceWords){
  const qs = composeSession(sourceWords, 10);
  session = { qs, i:0, correct:0, streak:0, earned:0, answered:false, source:sourceWords };
  renderQuestion();
}

function renderQuestion(){
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
    <div class="q-count">${L.qCount(s.i+1, s.qs.length)}</div>
    <div class="card">
      <div class="prompt">
        <div class="plabel">${q.label}</div>
        <div class="pword kr ${q.w.type==='sentence'?'sentence':''}">${q.promptText}</div>
        ${(q.dir==="ko2mean" && q.w.pron)?`<div class="pron">${q.w.pron}</div>`:""}
      </div>
      <div class="options" id="options"></div>
    </div>
    <div id="noteSlot"></div>
  `;
  const optEl = $('#options');
  q.options.forEach(opt=>{
    const b = document.createElement('button');
    b.className = "opt";
    b.innerHTML = `<span class="mark"></span><span class="kr">${opt}</span>`;
    b.onclick = ()=>answer(b, opt, q);
    optEl.appendChild(b);
  });
  $('#quitBtn').onclick = ()=>renderHome();
}

function answer(btn, chosen, q){
  if(session.answered) return;
  session.answered = true;
  const correct = chosen===q.answer;
  const opts = app.querySelectorAll('.opt');
  opts.forEach(o=>{
    o.disabled = true;
    const txt = o.querySelector('.kr').textContent;
    if(txt===q.answer){ o.classList.add('correct'); o.querySelector('.mark').textContent="✓"; }
    else if(o===btn){ o.classList.add('wrong'); o.querySelector('.mark').textContent="✕"; }
  });

  // SRS + stats
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
    if(w.status==="known") w.status="learning"; // 살짝 강등
    updateBank(-PENALTY);
    showFeedback(false, 0);
    // 오답이면 정답 노트 표시
    $('#noteSlot').innerHTML = `<div class="answer-note">
      <div>${L.answerWas} <span class="cor kr">${q.answer}</span></div>
      ${q.w.type==='sentence'?'':`<div class="ex kr">${q.w.ko} — ${q.w.mean}</div>`}
    </div>`;
  }

  // 스트릭 표시 갱신
  const st = $('#streak');
  if(st){ st.textContent = `🔥 ${session.streak}`; st.className = "streak "+(session.streak===0?"off":""); }

  // Firestore에 백그라운드 저장 (optimistic — 화면은 이미 갱신된 상태)
  persistProgress();

  // 다음으로
  setTimeout(()=>nextQuestion(), correct? 1050 : 1750);
}

function nextQuestion(){
  session.i++;
  if(session.i>=session.qs.length){ renderResult(); }
  else renderQuestion();
}

/* ---------- 일러스트 피드백 ---------- */
let fbTimer=null;
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

/* ---------- 결과 ---------- */
function renderResult(){
  botnav.classList.add('hidden');
  const s = session;
  const img = s.correct>=7 ? IMG.money : s.correct>=5 ? IMG.excited : IMG.surprised;
  app.innerHTML = backBtn() + topbar() + `
    <div class="result">
      <div id="captureArea">
        <img src="${img}" alt="">
        <h2>${L.resultTitle(s.correct)}</h2>
        <div class="score">${L.resultScore(s.correct, s.qs.length)}</div>
        <div class="earned">💰 +${wonFmt(s.earned)} ${L.earned}</div>
      </div>
      <div class="btn-row" style="flex-direction:column">
        <button class="btn" id="moreBtn">${L.more}</button>
        <button class="btn secondary" id="homeBtn">${L.home}</button>
        <button class="btn secondary" id="shareBtn">📤 ${L.share}</button>
      </div>
    </div>`;
  wireBackBtn();
  $('#moreBtn').onclick = ()=>startSession(s.source);
  $('#homeBtn').onclick = ()=>renderHome();
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
    else if(nav==="known") renderKnown();
    else if(nav==="help") renderHelp();
  };
});

/* ---------- 시작 ---------- */
if(window.fb) initApp();
else window.addEventListener('fb-ready', initApp);
