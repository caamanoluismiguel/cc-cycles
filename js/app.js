/**
 * Classical Kids Study Hub
 * Award-Winning Main Application
 */

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
    history: { key: 'History', icon: '📜', name: 'History' },
    science: { key: 'Science', icon: '🔬', name: 'Science' },
    geography: { key: 'Geography', icon: '🌍', name: 'Geography' },
    math: { key: 'Math', icon: '🔢', name: 'Math' },
    english: { key: 'English', icon: '📝', name: 'English' },
    latin: { key: 'Latin', icon: '📚', name: 'Latin' },
    finearts: { key: 'Fine_Arts', icon: '🎨', name: 'Fine Arts' }
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
  
  if (!name) { toast('Please enter your name', 'warning'); return; }
  
  state.user = name;
  saveState();
  
  var welcome = document.getElementById('welcomeSection');
  var app = document.getElementById('appSection');
  if (welcome) welcome.classList.add('hidden');
  if (app) app.classList.remove('hidden');
  
  initApp();
  toast('Welcome, ' + name + '! 🎉', 'success');
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
    if (title) title.textContent = 'Cycle ' + state.cycle + ' • Week ' + state.week;
    if (topic) topic.textContent = CONFIG.TOPIC_MAP[state.topic].name;
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
    var dayTime = today.getTime() - (i * 86400000);
    if (days[dayTime]) streak++;
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
  if (title) title.textContent = 'Cycle ' + state.cycle;
  
  for (var w = 1; w <= CONFIG.WEEKS; w++) {
    var btn = document.createElement('button');
    btn.className = 'week-btn';
    btn.dataset.week = w;
    if (isWeekComplete(state.cycle, w)) btn.classList.add('completed');
    if (state.week === w) btn.classList.add('current');
    btn.innerHTML = '<span class="week-label">Week</span><span class="week-num">' + w + '</span>';
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
  
  if (timerCycle) timerCycle.textContent = 'Cycle ' + state.cycle;
  if (timerWeek) timerWeek.textContent = 'Week ' + state.week;
  if (lessonMeta) lessonMeta.textContent = 'Cycle ' + state.cycle + ' • Week ' + state.week;
  if (lessonTitle) lessonTitle.innerHTML = '<span>' + topic.icon + '</span> ' + topic.name;
  
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
  toast('Lesson Complete! ⭐', 'success');
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
      toast('Week complete! 🏆', 'success');
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
  toast('Cleared', 'info');
};

window.submitHomework = function() {
  var hw1 = document.getElementById('hw1'), hw2 = document.getElementById('hw2'), hw3 = document.getElementById('hw3');
  var v1 = hw1 ? hw1.value.trim() : '', v2 = hw2 ? hw2.value.trim() : '', v3 = hw3 ? hw3.value.trim() : '';
  
  if (!v1 || !v2 || !v3) { toast('Please answer all questions', 'warning'); return; }
  
  state.progress.homework.push({ date: new Date().toISOString(), cycle: state.cycle, week: state.week, topic: state.topic, answers: [v1, v2, v3] });
  markComplete();
  clearHomework();
  
  var card = document.getElementById('homeworkCard');
  if (card) card.classList.remove('expanded');
  
  toast('Homework submitted! 🎉', 'success');
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
// LANGUAGE (simple toggle)
// ============================================
window.setLang = function(lang) {
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  localStorage.setItem('ck_lang', lang);
};

// ============================================
// UI UTILITIES
// ============================================
function toast(message, type) {
  type = type || 'info';
  var container = document.getElementById('toastContainer');
  if (!container) { console.log('Toast:', message); return; }
  
  var icons = { success: '✓', warning: '⚠️', error: '✕', info: 'ℹ️' };
  var t = document.createElement('div');
  t.className = 'toast ' + type;
  t.innerHTML = '<span>' + (icons[type] || '') + '</span><span>' + message + '</span>';
  container.appendChild(t);
  
  setTimeout(function() {
    t.style.opacity = '0';
    t.style.transform = 'translateY(-10px) scale(0.9)';
    t.style.transition = 'all 0.3s ease';
    setTimeout(function() { t.remove(); }, 300);
  }, 3000);
}

function confetti(count) {
  count = count || 50;
  var colors = ['#4A90D9', '#5DB075', '#F5C842', '#E8845F', '#9B5DE5', '#F28482'];
  for (var i = 0; i < count; i++) {
    var c = document.createElement('div');
    c.className = 'confetti';
    c.style.cssText = 'position:fixed;left:' + (Math.random()*100) + 'vw;top:-10px;width:' + (6 + Math.random()*8) + 'px;height:' + (6 + Math.random()*8) + 'px;background:' + colors[Math.floor(Math.random()*colors.length)] + ';z-index:9999;pointer-events:none;border-radius:' + (Math.random()>0.5?'50%':'2px') + ';animation:confetti-fall ' + (2+Math.random()*2) + 's linear forwards;animation-delay:' + (Math.random()*0.5) + 's;';
    document.body.appendChild(c);
    setTimeout(function(el) { el.remove(); }, 4500, c);
  }
}

console.log('✨ Classical Kids Study Hub loaded!');
