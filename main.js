/**
 * Classical Kids - Main Application Logic
 * Contest-winning version with full wow factor
 */

// State Management
const AppState = {
  userName: '',
  selectedCycle: null,
  selectedWeek: null,
  timerRunning: false,
  timerSeconds: 900, // 15 minutes
  timerInterval: null,
  studySessions: [],
  homework: []
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
  loadUserData();
  setupEventListeners();
});

function initializeApp() {
  // Get or set username
  let userName = localStorage.getItem('username');
  if (!userName) {
    userName = prompt('Welcome! What\'s your name?') || 'Student';
    localStorage.setItem('username', userName);
    createConfetti(100);
  }
  AppState.userName = userName;
  document.getElementById('userName').textContent = userName;
  
  // Load saved state
  const savedState = localStorage.getItem('appState');
  if (savedState) {
    Object.assign(AppState, JSON.parse(savedState));
  }
  
  // Show welcome message
  setTimeout(() => {
    showToast(`Welcome back, ${userName}! 👋`, 'success');
  }, 500);
}

function loadUserData() {
  // Load homework
  const homework = localStorage.getItem('homework');
  if (homework) {
    AppState.homework = JSON.parse(homework);
    displayHomeworkHistory();
  }
  
  // Load study sessions
  const sessions = localStorage.getItem('studySessions');
  if (sessions) {
    AppState.studySessions = JSON.parse(sessions);
  }
}

function setupEventListeners() {
  // Auto-save homework
  const homeworkText = document.getElementById('homeworkText');
  if (homeworkText) {
    homeworkText.addEventListener('input', () => {
      localStorage.setItem('homeworkDraft', homeworkText.value);
    });
    
    // Load draft
    const draft = localStorage.getItem('homeworkDraft');
    if (draft) homeworkText.value = draft;
  }
}

// Section Navigation
function showSection(section) {
  // Hide all sections
  document.querySelectorAll('.demo-section').forEach(s => s.classList.add('hidden'));
  
  // Show selected section
  const sections = {
    'welcome': 'welcomeSection',
    'study': 'studySection',
    'homework': 'homeworkSection'
  };
  
  const sectionId = sections[section];
  if (sectionId) {
    document.getElementById(sectionId).classList.remove('hidden');
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Show cycle selection if starting study
    if (section === 'study') {
      document.getElementById('cycleStep').classList.remove('hidden');
      document.getElementById('weekStep').classList.add('hidden');
      document.getElementById('timerStep').classList.add('hidden');
    }
  }
}

function backToSection(section) {
  if (section === 'cycle') {
    document.getElementById('cycleStep').classList.remove('hidden');
    document.getElementById('weekStep').classList.add('hidden');
    document.getElementById('timerStep').classList.add('hidden');
  } else if (section === 'week') {
    document.getElementById('weekStep').classList.remove('hidden');
    document.getElementById('timerStep').classList.add('hidden');
  }
}

// Cycle Selection
function selectCycle(cycle) {
  AppState.selectedCycle = cycle;
  
  // Update UI
  document.querySelectorAll('.cycle-card').forEach(card => {
    card.classList.remove('selected');
  });
  event.target.closest('.cycle-card').classList.add('selected');
  
  // Animate transition
  setTimeout(() => {
    document.getElementById('cycleStep').classList.add('hidden');
    document.getElementById('weekStep').classList.remove('hidden');
    generateWeekGrid();
    
    // Confetti!
    createConfetti(30, 2000);
  }, 500);
  
  saveState();
}

// Week Grid Generation
function generateWeekGrid() {
  const grid = document.getElementById('weekGrid');
  grid.innerHTML = '';
  
  for (let week = 1; week <= 24; week++) {
    const btn = document.createElement('button');
    btn.className = 'week-btn';
    btn.innerHTML = `
      <div style="font-size: 0.75rem; opacity: 0.7;">Week</div>
      <div style="font-size: 1.5rem;">${week}</div>
    `;
    
    // Check if completed
    const isCompleted = AppState.studySessions.some(
      s => s.cycle === AppState.selectedCycle && s.week === week
    );
    if (isCompleted) {
      btn.classList.add('completed');
    }
    
    btn.onclick = () => selectWeek(week);
    grid.appendChild(btn);
  }
}

function selectWeek(week) {
  AppState.selectedWeek = week;
  
  // Update UI
  document.querySelectorAll('.week-btn').forEach(btn => {
    btn.classList.remove('selected');
  });
  event.target.closest('.week-btn').classList.add('selected');
  
  // Animate transition
  setTimeout(() => {
    document.getElementById('weekStep').classList.add('hidden');
    document.getElementById('timerStep').classList.remove('hidden');
    
    // Update display
    document.getElementById('displayCycle').textContent = AppState.selectedCycle;
    document.getElementById('displayWeek').textContent = AppState.selectedWeek;
    
    // Load memory work
    loadMemoryWork(AppState.selectedCycle, AppState.selectedWeek);
    
    // Small confetti
    createConfetti(20, 1500);
  }, 300);
  
  saveState();
}

// Timer Functions
function startTimer() {
  if (AppState.timerRunning) return;
  
  AppState.timerRunning = true;
  document.getElementById('startBtn').classList.add('hidden');
  document.getElementById('pauseBtn').classList.remove('hidden');
  document.getElementById('completeBtn').classList.remove('hidden');
  
  AppState.timerInterval = setInterval(() => {
    if (AppState.timerSeconds > 0) {
      AppState.timerSeconds--;
      updateTimerDisplay();
      
      // Celebrate milestones
      if (AppState.timerSeconds === 600) { // 10 min
        showToast('10 minutes done! Keep going! 💪', 'success');
      } else if (AppState.timerSeconds === 300) { // 5 min
        showToast('5 minutes left! Almost there! 🎯', 'warning');
      }
    } else {
      completeSession(true);
    }
  }, 1000);
  
  showToast('Timer started! You got this! 🚀', 'info');
}

function pauseTimer() {
  if (!AppState.timerRunning) return;
  
  AppState.timerRunning = false;
  clearInterval(AppState.timerInterval);
  
  document.getElementById('startBtn').classList.remove('hidden');
  document.getElementById('pauseBtn').classList.add('hidden');
  
  showToast('Timer paused ⏸️', 'info');
}

function completeSession(auto = false) {
  clearInterval(AppState.timerInterval);
  AppState.timerRunning = false;
  
  // Save session
  const session = {
    cycle: AppState.selectedCycle,
    week: AppState.selectedWeek,
    date: new Date().toISOString(),
    duration: 900 - AppState.timerSeconds
  };
  AppState.studySessions.push(session);
  localStorage.setItem('studySessions', JSON.stringify(AppState.studySessions));
  
  // Reset timer
  AppState.timerSeconds = 900;
  updateTimerDisplay();
  
  // Big celebration!
  createConfetti(150, 4000);
  showToast(
    auto ? '🎉 15 minutes complete! Great job!' : '✨ Session saved! Awesome work!',
    'success'
  );
  
  // Show completion animation
  const timerDisplay = document.getElementById('timerDisplay');
  timerDisplay.style.animation = 'none';
  setTimeout(() => {
    timerDisplay.style.animation = 'pulse 0.5s ease 3';
  }, 10);
  
  // Update UI
  document.getElementById('startBtn').classList.remove('hidden');
  document.getElementById('pauseBtn').classList.add('hidden');
  document.getElementById('completeBtn').classList.add('hidden');
  
  saveState();
}

function updateTimerDisplay() {
  const minutes = Math.floor(AppState.timerSeconds / 60);
  const seconds = AppState.timerSeconds % 60;
  document.getElementById('timerDisplay').textContent = 
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Memory Work Loading
function loadMemoryWork(cycle, week) {
  // This would load from Cycle JSON files
  // For now, show placeholder
  showToast(`Loading Cycle ${cycle}, Week ${week} content...`, 'info');
}

// Homework Functions
function saveHomework() {
  const text = document.getElementById('homeworkText').value.trim();
  if (!text) {
    showToast('Please write something first!', 'warning');
    return;
  }
  
  const entry = {
    date: new Date().toISOString(),
    text: text,
    cycle: AppState.selectedCycle,
    week: AppState.selectedWeek
  };
  
  AppState.homework.push(entry);
  localStorage.setItem('homework', JSON.stringify(AppState.homework));
  localStorage.removeItem('homeworkDraft');
  
  document.getElementById('homeworkText').value = '';
  displayHomeworkHistory();
  
  createConfetti(50);
  showToast('Homework saved! 💾', 'success');
}

function clearHomework() {
  if (confirm('Clear your notes?')) {
    document.getElementById('homeworkText').value = '';
    localStorage.removeItem('homeworkDraft');
    showToast('Notes cleared', 'info');
  }
}

function displayHomeworkHistory() {
  const container = document.getElementById('homeworkHistory');
  if (!container) return;
  
  if (AppState.homework.length === 0) {
    container.innerHTML = '';
    return;
  }
  
  container.innerHTML = '<h3 style="margin-bottom: 1rem;">📚 Previous Entries</h3>';
  
  // Show last 5 entries
  const recent = AppState.homework.slice(-5).reverse();
  recent.forEach((entry, index) => {
    const date = new Date(entry.date);
    const card = document.createElement('div');
    card.className = 'memory-card';
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
        <strong style="color: var(--primary);">${date.toLocaleDateString()}</strong>
        <button class="btn btn-sm" style="padding: 0.25rem 0.75rem; font-size: 0.75rem;" onclick="deleteHomework(${AppState.homework.length - 1 - index})">
          🗑️
        </button>
      </div>
      <p style="margin: 0; white-space: pre-wrap;">${entry.text}</p>
    `;
    container.appendChild(card);
  });
}

function deleteHomework(index) {
  if (confirm('Delete this entry?')) {
    AppState.homework.splice(index, 1);
    localStorage.setItem('homework', JSON.stringify(AppState.homework));
    displayHomeworkHistory();
    showToast('Entry deleted', 'info');
  }
}

// Language Switching
function switchLanguage(lang) {
  window.i18n.setLanguage(lang);
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  showToast(
    lang === 'en' ? 'Language changed to English 🇺🇸' : 'Idioma cambiado a Español 🇪🇸',
    'success'
  );
}

// Toast Notifications
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    bottom: 100px;
    right: 20px;
    background: white;
    padding: 1rem 1.5rem;
    border-radius: 1rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    font-weight: 600;
    z-index: 10000;
    max-width: 300px;
    animation: slideInRight 0.3s ease;
  `;
  
  const colors = {
    success: 'rgb(16, 185, 129)',
    error: 'rgb(239, 68, 68)',
    warning: 'rgb(245, 158, 11)',
    info: 'rgb(59, 130, 246)'
  };
  
  toast.style.borderLeft = `4px solid ${colors[type] || colors.info}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Settings Modal
function showSettings() {
  alert('Settings coming soon! 🎨');
}

// Mobile Menu
function toggleMobileMenu() {
  alert('Mobile menu - use bottom navigation! 📱');
}

// Save State
function saveState() {
  localStorage.setItem('appState', JSON.stringify({
    selectedCycle: AppState.selectedCycle,
    selectedWeek: AppState.selectedWeek,
    timerSeconds: AppState.timerSeconds,
    studySessions: AppState.studySessions
  }));
}

// Add animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideOutRight {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(style);

console.log('✨ App loaded successfully!');
