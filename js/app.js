/**
 * Classical Kids Study Hub
 * Main Application Logic
 */

// ============================================
// CONFIG
// ============================================
const CONFIG = {
  CYCLE_URLS: {
    1: "https://raw.githubusercontent.com/caamanoluismiguel/cc-cycles/refs/heads/main/Cycle_1.json",
    2: "https://raw.githubusercontent.com/caamanoluismiguel/cc-cycles/refs/heads/main/Cycle_2.json",
    3: "https://raw.githubusercontent.com/caamanoluismiguel/cc-cycles/refs/heads/main/Cycle_3.json"
  },
  TIMER_DURATION: 900,
  WEEKS: 24,
  TOPICS: ['history', 'science', 'geography', 'math', 'english', 'latin', 'finearts'],
  TOPIC_KEYS: { history: 'History', science: 'Science', geography: 'Geography', math: 'Math', english: 'English', latin: 'Latin', finearts: 'Fine_Arts' },
  TOPIC_ICONS: { history: '📜', science: '🔬', geography: '🌍', math: '🔢', english: '📝', latin: '📚', finearts: '🎨' },
  SECTIONS: [
    { key: 'Introduction', icon: '📖' },
    { key: 'Deep_Dive', icon: '🔍' },
    { key: 'Historical_Context', icon: '📜' },
    { key: 'Significance', icon: '💡' },
    { key: 'Fun_Fact', icon: '✨' },
    { key: 'Theological_Reflection', icon: '✝️' },
    { key: 'Practical_Application', icon: '🔨' },
    { key: 'Assignment_Reflection', icon: '📝' },
    { key: 'Concluding_Exhortation_Prayer', icon: '🙏' }
  ]
};

// ============================================
// STATE
// ============================================
const State = {
  user: { name: null, loggedIn: false },
  session: { cycle: null, week: null, topic: 'history' },
  timer: { seconds: CONFIG.TIMER_DURATION, running: false, interval: null },
  cache: {},
  progress: { sessions: [], completed: {}, homework: [] }
};

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  setupListeners();
  checkLogin();
});

function loadState() {
  try {
    const name = localStorage.getItem('ck_username');
    if (name) { State.user.name = name; State.user.loggedIn = true; }
    
    const progress = localStorage.getItem('ck_progress');
    if (progress) State.progress = JSON.parse(progress);
    
    const session = localStorage.getItem('ck_session');
    if (session) Object.assign(State.session, JSON.parse(session));
  } catch (e) { console.error('Load error:', e); }
}

function saveState() {
  try {
    localStorage.setItem('ck_username', State.user.name || '');
    localStorage.setItem('ck_progress', JSON.stringify(State.progress));
    localStorage.setItem('ck_session', JSON.stringify(State.session));
  } catch (e) { console.error('Save error:', e); }
}

function setupListeners() {
  // Login
  document.getElementById('loginForm')?.addEventListener('submit', handleLogin);
  
  // Cycle selection
  document.getElementById('cycleGrid')?.addEventListener('click', e => {
    const card = e.target.closest('.cycle-card');
    if (card) selectCycle(parseInt(card.dataset.cycle));
  });
  
  // Week selection
  document.getElementById('weekGrid')?.addEventListener('click', e => {
    const btn = e.target.closest('.week-btn');
    if (btn) selectWeek(parseInt(btn.dataset.week));
  });
  
  // Topic tabs
  document.getElementById('topicTabs')?.addEventListener('click', e => {
    const tab = e.target.closest('.topic-tab');
    if (tab) selectTopic(tab.dataset.topic);
  });
  
  // Continue card
  document.getElementById('continueCard')?.addEventListener('click', continueLearning);
  
  // Timer
  document.getElementById('btnPlayPause')?.addEventListener('click', toggleTimer);
  document.getElementById('btnResetTimer')?.addEventListener('click', resetTimer);
  document.getElementById('btnComplete')?.addEventListener('click', completeLesson);
}

// ============================================
// AUTH
// ============================================
function checkLogin() {
  if (State.user.loggedIn) {
    showMainApp();
  } else {
    document.getElementById('welcomeScreen')?.classList.remove('hidden');
    document.getElementById('mainApp')?.classList.add('hidden');
  }
}

function handleLogin(e) {
  e.preventDefault();
  const name = document.getElementById('nameInput')?.value.trim();
  if (!name) { toast(i18n.t('enterName'), 'warning'); return; }
  
  State.user.name = name;
  State.user.loggedIn = true;
  saveState();
  showMainApp();
  toast(`${i18n.t('welcome')} ${name}! 🎉`, 'success');
  confetti(50);
}

function showMainApp() {
  document.getElementById('welcomeScreen')?.classList.add('hidden');
  document.getElementById('mainApp')?.classList.remove('hidden');
  
  const nameEl = document.getElementById('displayName');
  if (nameEl) nameEl.textContent = State.user.name || 'Student';
  
  showScreen('home');
  updateStats();
  updateContinueCard();
}

// ============================================
// NAVIGATION
// ============================================
function showScreen(screen) {
  ['homeScreen', 'weekScreen', 'lessonScreen'].forEach(id => {
    document.getElementById(id)?.classList.add('hidden');
  });
  document.getElementById(screen + 'Screen')?.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// HOME
// ============================================
function updateContinueCard() {
  const card = document.getElementById('continueCard');
  if (!card) return;
  
  if (State.session.cycle && State.session.week) {
    card.classList.remove('hidden');
    document.getElementById('continueTitle').textContent = `${i18n.t('cycle')} ${State.session.cycle} • ${i18n.t('week')} ${State.session.week}`;
    document.getElementById('continueMeta').textContent = i18n.t(State.session.topic) || State.session.topic;
  } else {
    card.classList.add('hidden');
  }
}

function continueLearning() {
  if (State.session.cycle && State.session.week) {
    loadLesson();
    showScreen('lesson');
  }
}

function updateStats() {
  const minutes = State.progress.sessions.reduce((sum, s) => sum + Math.floor((s.duration || 0) / 60), 0);
  const lessons = Object.keys(State.progress.completed).length;
  const streak = calculateStreak();
  
  const timeEl = document.getElementById('statTime');
  const lessonsEl = document.getElementById('statLessons');
  const streakEl = document.getElementById('statStreak');
  
  if (timeEl) timeEl.textContent = minutes;
  if (lessonsEl) lessonsEl.textContent = lessons;
  if (streakEl) streakEl.textContent = streak + '🔥';
}

function calculateStreak() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const days = [...new Set(State.progress.sessions.map(s => {
    const d = new Date(s.date);
    d.setHours(0, 0, 0, 0);
    return d.getTime();
  }))].sort((a, b) => b - a);
  
  let streak = 0;
  for (let i = 0; i < 30; i++) {
    const dayTime = today.getTime() - (i * 86400000);
    if (days.includes(dayTime)) streak++;
    else if (i > 0) break;
  }
  return streak;
}

// ============================================
// CYCLE SELECTION
// ============================================
function selectCycle(cycle) {
  document.querySelectorAll('.cycle-card').forEach(c => c.classList.remove('selected'));
  document.querySelector(`.cycle-card[data-cycle="${cycle}"]`)?.classList.add('selected');
  
  State.session.cycle = cycle;
  saveState();
  
  setTimeout(() => {
    buildWeekGrid();
    showScreen('week');
  }, 200);
}

// ============================================
// WEEK SELECTION
// ============================================
function buildWeekGrid() {
  const grid = document.getElementById('weekGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  document.getElementById('weekScreenTitle').textContent = `${i18n.t('cycle')} ${State.session.cycle} • ${i18n.t('selectWeek')}`;
  
  for (let w = 1; w <= CONFIG.WEEKS; w++) {
    const btn = document.createElement('button');
    btn.className = 'week-btn';
    btn.dataset.week = w;
    
    if (isWeekComplete(State.session.cycle, w)) btn.classList.add('completed');
    if (State.session.week === w) btn.classList.add('current');
    
    btn.innerHTML = `<span class="week-label">${i18n.t('week')}</span><span class="week-num">${w}</span>`;
    grid.appendChild(btn);
  }
}

function selectWeek(week) {
  State.session.week = week;
  State.session.topic = 'history';
  saveState();
  loadLesson();
  showScreen('lesson');
}

function isWeekComplete(cycle, week) {
  return CONFIG.TOPICS.every(t => State.progress.completed[`${cycle}-${week}-${t}`]);
}

// ============================================
// LESSON
// ============================================
async function loadLesson() {
  const { cycle, week, topic } = State.session;
  
  // Update UI
  document.getElementById('timerCycleBadge').textContent = `${i18n.t('cycle')} ${cycle}`;
  document.getElementById('timerWeekBadge').textContent = `${i18n.t('week')} ${week}`;
  document.getElementById('lessonMeta').textContent = `${i18n.t('cycle')} ${cycle} • ${i18n.t('week')} ${week}`;
  document.getElementById('lessonTitle').textContent = `${CONFIG.TOPIC_ICONS[topic]} ${i18n.t(topic)}`;
  
  updateTopicTabs();
  resetTimer();
  
  // Show loading
  document.getElementById('lessonBody').innerHTML = `<div class="lesson-section text-center"><p>${i18n.t('loading')}</p></div>`;
  
  try {
    const data = await fetchCycleData(cycle);
    const content = data[`Cycle${cycle}`]?.[`Week${week}`]?.[CONFIG.TOPIC_KEYS[topic]];
    
    if (content) {
      renderLesson(content);
    } else {
      document.getElementById('lessonBody').innerHTML = `<div class="lesson-section text-center"><p>Content not available.</p></div>`;
    }
  } catch (err) {
    console.error('Load error:', err);
    document.getElementById('lessonBody').innerHTML = `<div class="lesson-section text-center"><p style="color: var(--danger);">Error loading lesson. Please try again.</p></div>`;
  }
}

async function fetchCycleData(cycle) {
  if (State.cache[cycle]) return State.cache[cycle];
  
  const res = await fetch(CONFIG.CYCLE_URLS[cycle]);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  
  const data = await res.json();
  State.cache[cycle] = data;
  return data;
}

function renderLesson(content) {
  const body = document.getElementById('lessonBody');
  if (!body) return;
  
  let html = '';
  CONFIG.SECTIONS.forEach(sec => {
    const text = content[sec.key];
    if (text) {
      const clean = text.replace(/^Paragraph\s*\d+:\s*/i, '');
      const label = i18n.t(sec.key.toLowerCase().replace(/_/g, '')) || sec.key.replace(/_/g, ' ');
      html += `
        <div class="lesson-section">
          <div class="section-label">${sec.icon} ${label}</div>
          <p>${clean}</p>
        </div>
      `;
    }
  });
  
  body.innerHTML = html || '<div class="lesson-section text-center"><p>No content available.</p></div>';
}

function updateTopicTabs() {
  document.querySelectorAll('.topic-tab').forEach(tab => {
    const topic = tab.dataset.topic;
    tab.classList.toggle('active', topic === State.session.topic);
  });
}

function selectTopic(topic) {
  if (topic === State.session.topic) return;
  State.session.topic = topic;
  saveState();
  updateTopicTabs();
  loadLesson();
}

// ============================================
// TIMER
// ============================================
function toggleTimer() {
  State.timer.running ? pauseTimer() : startTimer();
}

function startTimer() {
  if (State.timer.running) return;
  State.timer.running = true;
  State.session.startTime = Date.now();
  
  document.getElementById('btnPlayPause').textContent = '⏸️';
  
  State.timer.interval = setInterval(() => {
    if (State.timer.seconds > 0) {
      State.timer.seconds--;
      updateTimerDisplay();
      
      if (State.timer.seconds === 600) toast(`${i18n.t('keepGoing')} 💪`, 'success');
      if (State.timer.seconds === 300) toast(`${i18n.t('almostThere')} 🎯`, 'warning');
      if (State.timer.seconds === 0) {
        pauseTimer();
        toast(`${i18n.t('timesUp')} 🎉`, 'success');
        confetti(100);
      }
    }
  }, 1000);
}

function pauseTimer() {
  State.timer.running = false;
  clearInterval(State.timer.interval);
  document.getElementById('btnPlayPause').textContent = '▶️';
}

function resetTimer() {
  pauseTimer();
  State.timer.seconds = CONFIG.TIMER_DURATION;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const m = Math.floor(State.timer.seconds / 60);
  const s = State.timer.seconds % 60;
  const display = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  document.getElementById('timerDisplay').textContent = display;
}

function completeLesson() {
  logSession();
  markComplete();
  toast(`${i18n.t('lessonComplete')} ⭐`, 'success');
  confetti(80);
  
  setTimeout(() => {
    const idx = CONFIG.TOPICS.indexOf(State.session.topic);
    if (idx < CONFIG.TOPICS.length - 1) {
      State.session.topic = CONFIG.TOPICS[idx + 1];
      saveState();
      updateTopicTabs();
      loadLesson();
      resetTimer();
    } else {
      toast(i18n.t('greatJob') + ' 🏆', 'success');
      setTimeout(() => showScreen('home'), 1500);
    }
  }, 1500);
}

function logSession() {
  const duration = State.session.startTime ? Math.round((Date.now() - State.session.startTime) / 1000) : CONFIG.TIMER_DURATION - State.timer.seconds;
  State.progress.sessions.push({
    date: new Date().toISOString(),
    cycle: State.session.cycle,
    week: State.session.week,
    topic: State.session.topic,
    duration
  });
  saveState();
  updateStats();
}

function markComplete() {
  const key = `${State.session.cycle}-${State.session.week}-${State.session.topic}`;
  State.progress.completed[key] = true;
  saveState();
}

// ============================================
// HOMEWORK
// ============================================
function toggleHomework() {
  document.getElementById('homeworkCard')?.classList.toggle('expanded');
}

function clearHomework() {
  document.getElementById('hw1').value = '';
  document.getElementById('hw2').value = '';
  document.getElementById('hw3').value = '';
}

function submitHomework() {
  const hw1 = document.getElementById('hw1')?.value.trim();
  const hw2 = document.getElementById('hw2')?.value.trim();
  const hw3 = document.getElementById('hw3')?.value.trim();
  
  if (!hw1 || !hw2 || !hw3) {
    toast('Please answer all questions', 'warning');
    return;
  }
  
  State.progress.homework.push({
    date: new Date().toISOString(),
    cycle: State.session.cycle,
    week: State.session.week,
    topic: State.session.topic,
    answers: [hw1, hw2, hw3]
  });
  
  markComplete();
  clearHomework();
  document.getElementById('homeworkCard')?.classList.remove('expanded');
  toast(`${i18n.t('homeworkSubmitted')} 🎉`, 'success');
  confetti(60);
  
  setTimeout(() => {
    const idx = CONFIG.TOPICS.indexOf(State.session.topic);
    if (idx < CONFIG.TOPICS.length - 1) {
      State.session.topic = CONFIG.TOPICS[idx + 1];
      saveState();
      updateTopicTabs();
      loadLesson();
      resetTimer();
    }
  }, 1500);
}

// ============================================
// UI HELPERS
// ============================================
function toast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  
  const icons = { success: '✓', warning: '⚠️', error: '✕', info: 'ℹ️' };
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<span>${icons[type] || ''}</span><span>${message}</span>`;
  container.appendChild(t);
  
  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transform = 'translateY(-10px)';
    setTimeout(() => t.remove(), 300);
  }, 3000);
}

function confetti(count = 50) {
  const colors = ['#0056b3', '#28a745', '#ffc107', '#dc3545', '#17a2b8'];
  for (let i = 0; i < count; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.cssText = `
      left: ${Math.random() * 100}vw;
      top: -10px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation: confetti-fall ${2 + Math.random() * 2}s linear forwards;
      animation-delay: ${Math.random() * 0.5}s;
      border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
    `;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}

// Language change handler
document.addEventListener('langchange', () => {
  updateContinueCard();
  if (State.session.cycle) buildWeekGrid();
});

console.log('✨ Classical Kids Study Hub loaded!');
