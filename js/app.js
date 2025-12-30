/**
 * Classical Kids Study Hub
 * Award-Winning Main Application with i18n
 */

// ============================================
// TRANSLATIONS
// ============================================
var translations = {
  en: {
    appName: 'Classical Kids',
    welcomeBack: 'Welcome back',
    readyToExplore: 'Ready to explore today?',
    continueWhere: 'Continue where you left off',
    chooseCycle: '📚 Choose Your Cycle',
    cycle: 'Cycle',
    week: 'Week',
    cycle1Name: 'Ancient History',
    cycle2Name: 'Medieval → Modern',
    cycle3Name: 'US History',
    minutes: 'Minutes',
    lessons: 'Lessons',
    dayStreak: 'Day Streak',
    selectWeek: 'Select a week to begin studying',
    backToCycles: '← Back to Cycles',
    backToWeeks: '← Back to Weeks',
    history: 'History', science: 'Science', geography: 'Geography',
    math: 'Math', english: 'English', latin: 'Latin', fineArts: 'Fine Arts',
    loading: 'Loading...',
    homework: 'Homework & Reflection',
    homeworkIntro: 'Take a moment to reflect on what you learned. Choose a creative activity and answer:',
    question1: 'What is one key idea you learned today?',
    question2: 'How will you apply this in your daily life?',
    question3: 'Which creative activity did you choose and why?',
    clear: 'Clear', submitContinue: '✓ Submit & Continue',
    home: 'Home', resources: 'Resources', books: 'Books', progress: 'Progress', parents: 'Parents',
    startLearning: 'Start Learning 🚀',
    enterName: "What's your name?",
    welcome: 'Welcome',
    lessonComplete: 'Lesson Complete!',
    weekComplete: 'Week complete!',
    cleared: 'Cleared',
    homeworkSubmitted: 'Homework submitted!',
    answerAll: 'Please answer all questions'
  },
  es: {
    appName: 'Classical Kids',
    welcomeBack: 'Bienvenido de nuevo',
    readyToExplore: '¿Listo para explorar hoy?',
    continueWhere: 'Continúa donde lo dejaste',
    chooseCycle: '📚 Elige Tu Ciclo',
    cycle: 'Ciclo',
    week: 'Semana',
    cycle1Name: 'Historia Antigua',
    cycle2Name: 'Medieval → Moderno',
    cycle3Name: 'Historia de EE.UU.',
    minutes: 'Minutos',
    lessons: 'Lecciones',
    dayStreak: 'Racha de Días',
    selectWeek: 'Selecciona una semana para comenzar',
    backToCycles: '← Volver a Ciclos',
    backToWeeks: '← Volver a Semanas',
    history: 'Historia', science: 'Ciencias', geography: 'Geografía',
    math: 'Matemáticas', english: 'Inglés', latin: 'Latín', fineArts: 'Bellas Artes',
    loading: 'Cargando...',
    homework: 'Tarea y Reflexión',
    homeworkIntro: 'Tómate un momento para reflexionar sobre lo que aprendiste:',
    question1: '¿Cuál es una idea clave que aprendiste hoy?',
    question2: '¿Cómo aplicarás esto en tu vida diaria?',
    question3: '¿Qué actividad creativa elegiste y por qué?',
    clear: 'Limpiar', submitContinue: '✓ Enviar y Continuar',
    home: 'Inicio', resources: 'Recursos', books: 'Libros', progress: 'Progreso', parents: 'Padres',
    startLearning: 'Comenzar a Aprender 🚀',
    enterName: '¿Cómo te llamas?',
    welcome: 'Bienvenido',
    lessonComplete: '¡Lección Completa!',
    weekComplete: '¡Semana completa!',
    cleared: 'Limpiado',
    homeworkSubmitted: '¡Tarea enviada!',
    answerAll: 'Por favor responde todas las preguntas'
  }
};

var currentLang = localStorage.getItem('ck_lang') || 'en';

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
}

window.setLang = function(lang) {
  currentLang = lang;
  localStorage.setItem('ck_lang', lang);
  
  // Update toggle buttons
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  // Update all i18n elements
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    var text = t(key);
    if (text) el.textContent = text;
  });
  
  // Update dynamic content
  updateContinueCard();
  if (state.cycle) buildWeekGrid();
};

// ============================================
// CONFIGURATION
// ============================================
var CONFIG = {
  URLS: {
    1: "https://raw.githubusercontent.com/caamanoluismiguel/cc-cycles/refs/heads/main/Cycle_1.json",
    2: "https://raw.githubusercontent.com/caamanoluismiguel/cc-cycles/refs/heads/main/Cycle_2.json",
    3: "https://raw.githubusercontent.com/caamanoluismiguel/cc-cycles/refs/heads/main/Cycle_3.json"
  },
  TIMER: 900,
  WEEKS: 24,
  TOPICS: ['history', 'science', 'geography', 'math', 'english', 'latin', 'finearts'],
  TOPIC_MAP: {
    history: { key: 'History', icon: '📜', nameKey: 'history' },
    science: { key: 'Science', icon: '🔬', nameKey: 'science' },
    geography: { key: 'Geography', icon: '🌍', nameKey: 'geography' },
    math: { key: 'Math', icon: '🔢', nameKey: 'math' },
    english: { key: 'English', icon: '📝', nameKey: 'english' },
    latin: { key: 'Latin', icon: '📚', nameKey: 'latin' },
    finearts: { key: 'Fine_Arts', icon: '🎨', nameKey: 'fineArts' }
  },
  SECTIONS: [
    { key: 'Introduction', label: 'Introduction', icon: '📖' },
    { key: 'Deep_Dive', label: 'Deep Dive', icon: '🔍' },
    { key: 'Historical_Context', label: 'Historical Context', icon: '📜' },
    { key: 'Significance', label: 'Significance', icon: '💡' },
    { key: 'Fun_Fact', label: 'Fun Fact', icon: '✨' },
    { key: 'Theological_Reflection', label: 'Theological Reflection', icon: '✝️' },
    { key: 'Practical_Application', label: 'Practical Application', icon: '🔨' },
    { key: 'Assignment_Reflection', label: 'Assignment', icon: '📝' },
    { key: 'Concluding_Exhortation_Prayer', label: 'Prayer', icon: '🙏' }
  ]
};

// ============================================
// STATE
// ============================================
var state = {
  user: null,
  cycle: null,
  week: null,
  topic: 'history',
  startTime: null,
  timerSeconds: CONFIG.TIMER,
  timerRunning: false,
  timerInterval: null,
  cache: {},
  progress: { sessions: [], completed: {}, homework: [] }
};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  loadState();
  setupEventListeners();
  setLang(currentLang); // Apply translations
  checkAuth();
});

function loadState() {
  try {
    var user = localStorage.getItem('ck_user');
    if (user) state.user = user;
    
    var saved = localStorage.getItem('ck_state');
    if (saved) {
      var parsed = JSON.parse(saved);
      state.cycle = parsed.cycle || null;
      state.week = parsed.week || null;
      state.topic = parsed.topic || 'history';
    }
    
    var progress = localStorage.getItem('ck_progress');
    if (progress) state.progress = JSON.parse(progress);
  } catch (e) { console.error('Load error:', e); }
}

function saveState() {
  try {
    if (state.user) localStorage.setItem('ck_user', state.user);
    localStorage.setItem('ck_state', JSON.stringify({ cycle: state.cycle, week: state.week, topic: state.topic }));
    localStorage.setItem('ck_progress', JSON.stringify(state.progress));
  } catch (e) { console.error('Save error:', e); }
}

function setupEventListeners() {
  var loginForm = document.getElementById('loginForm');
  if (loginForm) loginForm.addEventListener('submit', handleLogin);
  
  var cycleGrid = document.getElementById('cycleGrid');
  if (cycleGrid) cycleGrid.addEventListener('click', function(e) {
    var card = e.target.closest('.cycle-card');
    if (card) selectCycle(parseInt(card.dataset.cycle));
  });
  
  var weekGrid = document.getElementById('weekGrid');
  if (weekGrid) weekGrid.addEventListener('click', function(e) {
    var btn = e.target.closest('.week-btn');
    if (btn) selectWeek(parseInt(btn.dataset.week));
  });
  
  var topicTabs = document.getElementById('topicTabs');
  if (topicTabs) topicTabs.addEventListener('click', function(e) {
    var tab = e.target.closest('.topic-tab');
    if (tab) selectTopic(tab.dataset.topic);
  });
  
  var btnPlayPause = document.getElementById('btnPlayPause');
  if (btnPlayPause) btnPlayPause.addEventListener('click', toggleTimer);
  
  var btnReset = document.getElementById('btnReset');
  if (btnReset) btnReset.addEventListener('click', resetTimer);
  
  var btnComplete = document.getElementById('btnComplete');
  if (btnComplete) btnComplete.addEventListener('click', completeLesson);
}

// ============================================
// AUTHENTICATION
// ============================================
function checkAuth() {
  var welcome = document.getElementById('welcomeSection');
  var app = document.getElementById('appSection');
  
  if (state.user) {
    if (welcome) welcome.classList.add('hidden');
    if (app) app.classList.remove('hidden');
    initApp();
  } else {
    if (welcome) welcome.classList.remove('hidden');
    if (app) app.classList.add('hidden');
  }
}

function handleLogin(e) {
  e.preventDefault();
  var input = document.getElementById('nameInput');
  var name = input ? input.value.trim() : '';
  
  if (!name) { toast(t('enterName'), 'warning'); return; }
  
  state.user = name;
  saveState();
  
  var welcome = document.getElementById('welcomeSection');
  var app = document.getElementById('appSection');
  if (welcome) welcome.classList.add('hidden');
  if (app) app.classList.remove('hidden');
  
  initApp();
  toast(t('welcome') + ', ' + name + '! 🎉', 'success');
  confetti(60);
}

function initApp() {
  var nameEl = document.getElementById('userName');
  if (nameEl) nameEl.textContent = state.user || 'Student';
  updateStats();
  updateContinueCard();
  showScreen('home');
}

// ============================================
// NAVIGATION
// ============================================
window.showScreen = function(screen) {
  ['homeScreen', 'weekScreen', 'lessonScreen'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
  var target = document.getElementById(screen + 'Screen');
  if (target) target.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ============================================
// HOME SCREEN
// ============================================
function updateContinueCard() {
  var card = document.getElementById('continueCard');
  if (!card) return;
  
  if (state.cycle && state.week) {
    card.classList.remove('hidden');
    var title = document.getElementById('continueTitle');
    var topic = document.getElementById('continueTopic');
    if (title) title.textContent = t('cycle') + ' ' + state.cycle + ' • ' + t('week') + ' ' + state.week;
    if (topic) {
      var topicData = CONFIG.TOPIC_MAP[state.topic];
      topic.textContent = t(topicData.nameKey);
    }
  } else {
    card.classList.add('hidden');
  }
}

window.continueLesson = function() {
  if (state.cycle && state.week) { loadLesson(); showScreen('lesson'); }
};

function updateStats() {
  var minutes = state.progress.sessions.reduce(function(sum, s) { return sum + Math.floor((s.duration || 0) / 60); }, 0);
  var lessons = Object.keys(state.progress.completed).length;
  var streak = calcStreak();
  
  var el1 = document.getElementById('statMinutes');
  var el2 = document.getElementById('statLessons');
  var el3 = document.getElementById('statStreak');
  if (el1) el1.textContent = minutes;
  if (el2) el2.textContent = lessons;
  if (el3) el3.textContent = streak;
}

function calcStreak() {
  if (!state.progress.sessions.length) return 0;
  var today = new Date(); today.setHours(0, 0, 0, 0);
  var days = {};
  state.progress.sessions.forEach(function(s) {
    var d = new Date(s.date); d.setHours(0, 0, 0, 0);
    days[d.getTime()] = true;
  });
  var streak = 0;
  for (var i = 0; i < 30; i++) {
    if (days[today.getTime() - i * 86400000]) streak++;
    else if (i > 0) break;
  }
  return streak;
}

// ============================================
// CYCLE SELECTION
// ============================================
function selectCycle(cycle) {
  document.querySelectorAll('.cycle-card').forEach(function(c) { c.classList.remove('selected'); });
  var selected = document.querySelector('.cycle-card[data-cycle="' + cycle + '"]');
  if (selected) selected.classList.add('selected');
  
  state.cycle = cycle;
  saveState();
  setTimeout(function() { buildWeekGrid(); showScreen('week'); }, 150);
}

// ============================================
// WEEK SELECTION
// ============================================
function buildWeekGrid() {
  var grid = document.getElementById('weekGrid');
  var title = document.getElementById('weekTitle');
  if (!grid) return;
  
  grid.innerHTML = '';
  if (title) title.textContent = t('cycle') + ' ' + state.cycle;
  
  for (var w = 1; w <= CONFIG.WEEKS; w++) {
    var btn = document.createElement('button');
    btn.className = 'week-btn';
    btn.dataset.week = w;
    if (isWeekComplete(state.cycle, w)) btn.classList.add('completed');
    if (state.week === w) btn.classList.add('current');
    btn.innerHTML = '<span class="week-label">' + t('week') + '</span><span class="week-num">' + w + '</span>';
    grid.appendChild(btn);
  }
}

function selectWeek(week) {
  state.week = week;
  state.topic = 'history';
  saveState();
  loadLesson();
  showScreen('lesson');
}

function isWeekComplete(cycle, week) {
  return CONFIG.TOPICS.every(function(t) { return state.progress.completed[cycle + '-' + week + '-' + t]; });
}

// ============================================
// LESSON
// ============================================
function loadLesson() {
  var topic = CONFIG.TOPIC_MAP[state.topic];
  
  var timerCycle = document.getElementById('timerCycle');
  var timerWeek = document.getElementById('timerWeek');
  var lessonMeta = document.getElementById('lessonMeta');
  var lessonTitle = document.getElementById('lessonTitle');
  var lessonBody = document.getElementById('lessonBody');
  
  if (timerCycle) timerCycle.textContent = t('cycle') + ' ' + state.cycle;
  if (timerWeek) timerWeek.textContent = t('week') + ' ' + state.week;
  if (lessonMeta) lessonMeta.textContent = t('cycle') + ' ' + state.cycle + ' • ' + t('week') + ' ' + state.week;
  if (lessonTitle) lessonTitle.innerHTML = '<span>' + topic.icon + '</span> ' + t(topic.nameKey);
  
  updateTopicTabs();
  resetTimer();
  
  if (lessonBody) lessonBody.innerHTML = '<div class="loading"><div class="loading-spinner"></div></div>';
  
  fetchCycleData(state.cycle).then(function(data) {
    var content = data && data['Cycle' + state.cycle] && data['Cycle' + state.cycle]['Week' + state.week] && data['Cycle' + state.cycle]['Week' + state.week][topic.key];
    if (content) {
      renderLesson(content);
    } else {
      if (lessonBody) lessonBody.innerHTML = '<div class="text-center" style="padding: var(--space-2xl);"><p class="text-muted">Content not available for this lesson.</p></div>';
    }
  }).catch(function(err) {
    console.error('Fetch error:', err);
    if (lessonBody) lessonBody.innerHTML = '<div class="text-center" style="padding: var(--space-2xl);"><p style="color: var(--coral);">Error loading. Check your connection.</p><button class="btn btn-primary mt-lg" onclick="loadLesson()">Retry</button></div>';
  });
}

function fetchCycleData(cycle) {
  return new Promise(function(resolve, reject) {
    if (state.cache[cycle]) { resolve(state.cache[cycle]); return; }
    fetch(CONFIG.URLS[cycle])
      .then(function(res) { if (!res.ok) throw new Error('HTTP ' + res.status); return res.json(); })
      .then(function(data) { state.cache[cycle] = data; resolve(data); })
      .catch(reject);
  });
}

function renderLesson(content) {
  var body = document.getElementById('lessonBody');
  if (!body) return;
  
  var html = '';
  CONFIG.SECTIONS.forEach(function(sec, idx) {
    var text = content[sec.key];
    if (text) {
      var clean = text.replace(/^Paragraph\s*\d+:\s*/i, '').trim();
      html += '<div class="lesson-section" style="animation-delay: ' + (idx * 0.08) + 's;">' +
        '<div class="section-label">' + sec.icon + ' ' + sec.label + '</div>' +
        '<div class="section-content"><p>' + clean + '</p></div></div>';
    }
  });
  body.innerHTML = html || '<div class="text-center" style="padding: var(--space-2xl);"><p class="text-muted">No content available.</p></div>';
}

function updateTopicTabs() {
  document.querySelectorAll('.topic-tab').forEach(function(tab) {
    tab.classList.toggle('active', tab.dataset.topic === state.topic);
  });
}

function selectTopic(topic) {
  if (topic === state.topic) return;
  state.topic = topic;
  saveState();
  updateTopicTabs();
  loadLesson();
}

// ============================================
// TIMER
// ============================================
function toggleTimer() {
  state.timerRunning ? pauseTimer() : startTimer();
}

function startTimer() {
  if (state.timerRunning) return;
  state.timerRunning = true;
  state.startTime = Date.now();
  var btn = document.getElementById('btnPlayPause');
  if (btn) btn.textContent = '⏸️';
  
  state.timerInterval = setInterval(function() {
    if (state.timerSeconds > 0) {
      state.timerSeconds--;
      updateTimerDisplay();
      if (state.timerSeconds === 600) toast('10 minutes done! 💪', 'success');
      if (state.timerSeconds === 300) toast('5 minutes left! 🎯', 'warning');
      if (state.timerSeconds === 0) { pauseTimer(); toast("Time's up! 🎉", 'success'); confetti(100); }
    }
  }, 1000);
}

function pauseTimer() {
  state.timerRunning = false;
  clearInterval(state.timerInterval);
  var btn = document.getElementById('btnPlayPause');
  if (btn) btn.textContent = '▶️';
}

function resetTimer() {
  pauseTimer();
  state.timerSeconds = CONFIG.TIMER;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  var m = Math.floor(state.timerSeconds / 60);
  var s = state.timerSeconds % 60;
  var el = document.getElementById('timerDisplay');
  if (el) el.textContent = String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
}

function completeLesson() {
  logSession();
  markComplete();
  toast(t('lessonComplete') + ' ⭐', 'success');
  confetti(80);
  
  setTimeout(function() {
    var idx = CONFIG.TOPICS.indexOf(state.topic);
    if (idx < CONFIG.TOPICS.length - 1) {
      state.topic = CONFIG.TOPICS[idx + 1];
      saveState();
      updateTopicTabs();
      loadLesson();
      resetTimer();
    } else {
      toast(t('weekComplete') + ' 🏆', 'success');
      setTimeout(function() { updateContinueCard(); updateStats(); showScreen('home'); }, 1500);
    }
  }, 1500);
}

function logSession() {
  var duration = state.startTime ? Math.round((Date.now() - state.startTime) / 1000) : CONFIG.TIMER - state.timerSeconds;
  state.progress.sessions.push({ date: new Date().toISOString(), cycle: state.cycle, week: state.week, topic: state.topic, duration: Math.max(duration, 60) });
  saveState();
  updateStats();
}

function markComplete() {
  state.progress.completed[state.cycle + '-' + state.week + '-' + state.topic] = true;
  saveState();
}

// ============================================
// HOMEWORK
// ============================================
window.toggleHomework = function() {
  var card = document.getElementById('homeworkCard');
  if (card) card.classList.toggle('expanded');
};

window.clearHomework = function() {
  ['hw1', 'hw2', 'hw3'].forEach(function(id) { var el = document.getElementById(id); if (el) el.value = ''; });
  toast(t('cleared'), 'info');
};

window.submitHomework = function() {
  var hw1 = document.getElementById('hw1'), hw2 = document.getElementById('hw2'), hw3 = document.getElementById('hw3');
  var v1 = hw1 ? hw1.value.trim() : '', v2 = hw2 ? hw2.value.trim() : '', v3 = hw3 ? hw3.value.trim() : '';
  
  if (!v1 || !v2 || !v3) { toast(t('answerAll'), 'warning'); return; }
  
  state.progress.homework.push({ date: new Date().toISOString(), cycle: state.cycle, week: state.week, topic: state.topic, answers: [v1, v2, v3] });
  markComplete();
  clearHomework();
  
  var card = document.getElementById('homeworkCard');
  if (card) card.classList.remove('expanded');
  
  toast(t('homeworkSubmitted') + ' 🎉', 'success');
  confetti(60);
  
  setTimeout(function() {
    var idx = CONFIG.TOPICS.indexOf(state.topic);
    if (idx < CONFIG.TOPICS.length - 1) {
      state.topic = CONFIG.TOPICS[idx + 1];
      saveState();
      updateTopicTabs();
      loadLesson();
      resetTimer();
    }
  }, 1500);
};

// ============================================
// UI UTILITIES
// ============================================
function toast(message, type) {
  type = type || 'info';
  var container = document.getElementById('toastContainer');
  if (!container) { console.log('Toast:', message); return; }
  
  var icons = { success: '✓', warning: '⚠️', error: '✕', info: 'ℹ️' };
  var toastEl = document.createElement('div');
  toastEl.className = 'toast ' + type;
  toastEl.innerHTML = '<span>' + (icons[type] || '') + '</span><span>' + message + '</span>';
  container.appendChild(toastEl);
  
  setTimeout(function() {
    toastEl.style.opacity = '0';
    toastEl.style.transform = 'translateY(-10px) scale(0.9)';
    toastEl.style.transition = 'all 0.3s ease';
    setTimeout(function() { toastEl.remove(); }, 300);
  }, 3000);
}

function confetti(n) {
  n = n || 50;
  var colors = ['#4A90D9','#5DB075','#F5C842','#E8845F','#9B5DE5','#F28482'];
  for (var i = 0; i < n; i++) {
    var c = document.createElement('div');
    var size = 6 + Math.random() * 10;
    c.style.cssText = 'position:fixed;width:' + size + 'px;height:' + size + 'px;top:-20px;left:' + (Math.random()*100) + 'vw;background:' + colors[Math.floor(Math.random()*6)] + ';z-index:9999;pointer-events:none;border-radius:' + (Math.random()>.5?'50%':'2px') + ';animation:confetti-fall ' + (2+Math.random()*2) + 's linear forwards;animation-delay:' + (Math.random()*0.5) + 's;';
    document.body.appendChild(c);
    setTimeout(function(el) { el.remove(); }, 4500, c);
  }
}

console.log('✨ Classical Kids Study Hub loaded!');
