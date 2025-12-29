/**
 * Math Games - All 11 Games with Visual Learning
 */

let currentGame = '';
let score = 0;
let streak = 0;
let level = 1;
let currentAnswer = null;
const canvas = document.getElementById('mathCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;

function startGame(game) {
  currentGame = game;
  score = 0;
  streak = 0;
  level = 1;
  
  // Hide selection, show game
  document.getElementById('gameSelection').classList.add('hidden');
  document.getElementById('gamePlay').classList.remove('hidden');
  
  // Update title
  const titles = {
    counting: '🍎 Counting',
    addition: '➕ Addition',
    subtraction: '➖ Subtraction',
    multiplication: '✖️ Multiplication',
    division: '➗ Division',
    fractions: '½ Fractions',
    geometry: '🔺 Geometry',
    time: '🕐 Time',
    money: '💰 Money',
    measurement: '📏 Measurement',
    patterns: '🔢 Patterns'
  };
  document.getElementById('gameTitle').textContent = titles[game];
  
  // Update stats
  updateStats();
  
  // Generate first problem
  newProblem();
  
  // Confetti!
  createConfetti(30, 2000);
  showToast(`Let's practice ${titles[game]}! 🎯`, 'info');
}

function backToSelection() {
  document.getElementById('gamePlay').classList.add('hidden');
  document.getElementById('gameSelection').classList.remove('hidden');
  document.getElementById('canvasContainer').classList.add('hidden');
  
  // Save high score
  saveHighScore();
}

function updateStats() {
  document.getElementById('score').textContent = score;
  document.getElementById('streak').textContent = streak;
  document.getElementById('level').textContent = level;
}

function newProblem() {
  document.getElementById('answerInput').value = '';
  document.getElementById('feedback').textContent = '';
  
  const problems = {
    counting: generateCounting,
    addition: generateAddition,
    subtraction: generateSubtraction,
    multiplication: generateMultiplication,
    division: generateDivision,
    fractions: generateFractions,
    geometry: generateGeometry,
    time: generateTime,
    money: generateMoney,
    measurement: generateMeasurement,
    patterns: generatePatterns
  };
  
  if (problems[currentGame]) {
    problems[currentGame]();
  }
  
  document.getElementById('answerInput').focus();
}

// Game Generators
function generateCounting() {
  document.getElementById('canvasContainer').classList.add('hidden');
  const count = Math.floor(Math.random() * (5 * level) + 1);
  currentAnswer = count;
  let apples = '';
  for (let i = 0; i < count; i++) apples += '🍎 ';
  document.getElementById('problemDisplay').innerHTML = `Count the apples:<br><br>${apples}`;
}

function generateAddition() {
  document.getElementById('canvasContainer').classList.add('hidden');
  const a = Math.floor(Math.random() * (10 * level) + 1);
  const b = Math.floor(Math.random() * (10 * level) + 1);
  currentAnswer = a + b;
  document.getElementById('problemDisplay').textContent = `${a} + ${b} = ?`;
}

function generateSubtraction() {
  document.getElementById('canvasContainer').classList.add('hidden');
  const a = Math.floor(Math.random() * (10 * level) + 5);
  const b = Math.floor(Math.random() * a + 1);
  currentAnswer = a - b;
  document.getElementById('problemDisplay').textContent = `${a} - ${b} = ?`;
}

function generateMultiplication() {
  document.getElementById('canvasContainer').classList.add('hidden');
  const a = Math.floor(Math.random() * (5 * level) + 1);
  const b = Math.floor(Math.random() * (5 * level) + 1);
  currentAnswer = a * b;
  document.getElementById('problemDisplay').textContent = `${a} × ${b} = ?`;
}

function generateDivision() {
  document.getElementById('canvasContainer').classList.add('hidden');
  const divisor = Math.floor(Math.random() * 5 + 2);
  const quotient = Math.floor(Math.random() * 5 + 1);
  const dividend = divisor * quotient;
  currentAnswer = quotient;
  document.getElementById('problemDisplay').textContent = `${dividend} ÷ ${divisor} = ?`;
}

function generateFractions() {
  document.getElementById('canvasContainer').classList.remove('hidden');
  const denominator = Math.floor(Math.random() * 4 + 3);
  const numerator = Math.floor(Math.random() * (denominator - 1) + 1);
  currentAnswer = `${numerator}/${denominator}`;
  
  // Draw fraction bar
  ctx.clearRect(0, 0, 400, 400);
  const barWidth = 60;
  const barHeight = 150;
  const totalWidth = denominator * barWidth;
  const offsetX = (400 - totalWidth) / 2;
  const offsetY = (400 - barHeight) / 2;
  
  for (let i = 0; i < denominator; i++) {
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.strokeRect(offsetX + i * barWidth, offsetY, barWidth, barHeight);
    
    if (i < numerator) {
      ctx.fillStyle = '#4A90E2';
      ctx.fillRect(offsetX + i * barWidth, offsetY, barWidth, barHeight);
    }
  }
  
  document.getElementById('problemDisplay').textContent = 'What fraction is colored? (e.g., 2/3)';
}

function generateGeometry() {
  document.getElementById('canvasContainer').classList.remove('hidden');
  const sides = [3, 4, 5, 6, 8][Math.floor(Math.random() * 5)];
  currentAnswer = sides;
  
  // Draw polygon
  ctx.clearRect(0, 0, 400, 400);
  const centerX = 200, centerY = 200, radius = 100;
  const angleStep = (2 * Math.PI) / sides;
  
  ctx.beginPath();
  for (let i = 0; i < sides; i++) {
    const x = centerX + radius * Math.cos(i * angleStep - Math.PI / 2);
    const y = centerY + radius * Math.sin(i * angleStep - Math.PI / 2);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.strokeStyle = '#4A90E2';
  ctx.lineWidth = 3;
  ctx.stroke();
  
  document.getElementById('problemDisplay').textContent = 'How many sides does this shape have?';
}

function generateTime() {
  document.getElementById('canvasContainer').classList.remove('hidden');
  const hour = Math.floor(Math.random() * 12 + 1);
  const minute = Math.floor(Math.random() * 12) * 5;
  currentAnswer = `${hour}:${minute.toString().padStart(2, '0')}`;
  
  // Draw clock
  ctx.clearRect(0, 0, 400, 400);
  const centerX = 200, centerY = 200, radius = 100;
  
  // Clock circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = '#4A90E2';
  ctx.lineWidth = 3;
  ctx.stroke();
  
  // Hour marks
  for (let i = 0; i < 12; i++) {
    const angle = i * Math.PI / 6 - Math.PI / 2;
    const x1 = centerX + (radius - 10) * Math.cos(angle);
    const y1 = centerY + (radius - 10) * Math.sin(angle);
    const x2 = centerX + radius * Math.cos(angle);
    const y2 = centerY + radius * Math.sin(angle);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
  }
  
  // Hour hand
  const hourAngle = ((hour % 12) + minute / 60) * Math.PI / 6 - Math.PI / 2;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + 60 * Math.cos(hourAngle), centerY + 60 * Math.sin(hourAngle));
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 4;
  ctx.stroke();
  
  // Minute hand
  const minuteAngle = minute * Math.PI / 30 - Math.PI / 2;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + 80 * Math.cos(minuteAngle), centerY + 80 * Math.sin(minuteAngle));
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  document.getElementById('problemDisplay').textContent = 'What time is shown? (H:MM)';
}

function generateMoney() {
  document.getElementById('canvasContainer').classList.remove('hidden');
  const pennies = Math.floor(Math.random() * 4);
  const nickels = Math.floor(Math.random() * 4);
  const dimes = Math.floor(Math.random() * 4);
  const quarters = Math.floor(Math.random() * 3);
  currentAnswer = pennies + nickels * 5 + dimes * 10 + quarters * 25;
  
  // Draw coins
  ctx.clearRect(0, 0, 400, 400);
  let y = 40;
  const coinRadius = 15;
  
  // Helper function
  const drawCoins = (label, count, color) => {
    ctx.font = '14px Arial';
    for (let i = 0; i < count; i++) {
      const x = 30 + i * 35;
      ctx.beginPath();
      ctx.arc(x, y, coinRadius, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.strokeStyle = '#000';
      ctx.stroke();
      ctx.fillStyle = '#000';
      ctx.fillText(label, x - 10, y + 4);
    }
    y += 50;
  };
  
  drawCoins('1¢', pennies, '#b87333');
  drawCoins('5¢', nickels, '#c0c0c0');
  drawCoins('10¢', dimes, '#aaaaaa');
  drawCoins('25¢', quarters, '#888888');
  
  document.getElementById('problemDisplay').textContent = 'How many cents total?';
}

function generateMeasurement() {
  document.getElementById('canvasContainer').classList.remove('hidden');
  const a = Math.floor(Math.random() * 10 + 1);
  const b = Math.floor(Math.random() * 10 + 1);
  const op = Math.random() < 0.5 ? '+' : '-';
  
  if (op === '+') {
    currentAnswer = a + b;
  } else {
    currentAnswer = a > b ? a - b : b - a;
  }
  
  // Draw bars
  ctx.clearRect(0, 0, 400, 400);
  const factor = 20;
  const barHeight = 25;
  const offsetY = 180;
  
  ctx.fillStyle = '#4A90E2';
  ctx.fillRect(30, offsetY, a * factor, barHeight);
  ctx.fillStyle = '#000';
  ctx.fillText(`${a} cm`, 30 + (a * factor) / 2 - 10, offsetY - 5);
  
  ctx.fillStyle = op === '+' ? '#10B981' : '#EF4444';
  ctx.fillRect(30 + (op === '+' ? a * factor + 10 : 0), offsetY + (op === '+' ? 0 : 40), b * factor, barHeight);
  ctx.fillText(`${op === '+' ? '' : '-'}${b} cm`, 30 + (op === '+' ? a * factor + 10 : 0) + (b * factor) / 2 - 15, offsetY + (op === '+' ? -5 : 75));
  
  document.getElementById('problemDisplay').textContent = `What is ${a} cm ${op} ${b} cm?`;
}

function generatePatterns() {
  document.getElementById('canvasContainer').classList.add('hidden');
  const start = Math.floor(Math.random() * 5 + 1);
  const diff = Math.floor(Math.random() * 5 + 1);
  const seq = [start, start + diff, start + 2 * diff];
  currentAnswer = start + 3 * diff;
  document.getElementById('problemDisplay').textContent = `Complete the pattern: ${seq.join(', ')}, ?`;
}

function checkAnswer() {
  const userAnswer = document.getElementById('answerInput').value.trim();
  const feedback = document.getElementById('feedback');
  
  if (!userAnswer) return;
  
  let isCorrect = false;
  
  if (currentGame === 'fractions' || currentGame === 'time') {
    isCorrect = userAnswer === currentAnswer.toString();
  } else {
    isCorrect = parseFloat(userAnswer) === parseFloat(currentAnswer);
  }
  
  if (isCorrect) {
    score++;
    streak++;
    
    feedback.textContent = window.i18n.t('correct');
    feedback.style.color = 'var(--success)';
    
    // Confetti!
    createConfetti(50, 2000);
    
    // Level up every 5 correct
    if (score % 5 === 0 && level < 5) {
      level++;
      showToast(`Level ${level} unlocked! 🎉`, 'warning');
    }
    
    updateStats();
    setTimeout(newProblem, 1500);
  } else {
    streak = 0;
    feedback.textContent = `${window.i18n.t('incorrect')} Answer: ${currentAnswer}`;
    feedback.style.color = 'var(--error)';
    
    updateStats();
    setTimeout(() => {
      feedback.textContent = '';
      newProblem();
    }, 2000);
  }
}

function saveHighScore() {
  const key = `highScore_${currentGame}`;
  const current = localStorage.getItem(key) || 0;
  if (score > current) {
    localStorage.setItem(key, score);
    showToast(`New high score: ${score}! 🏆`, 'success');
  }
}

function switchLanguage(lang) {
  window.i18n.setLanguage(lang);
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  showToast(lang === 'en' ? 'Language changed 🇺🇸' : 'Idioma cambiado 🇪🇸', 'success');
}

function showToast(message, type) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed; bottom: 100px; right: 20px; background: white;
    padding: 1rem 1.5rem; border-radius: 1rem;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2); font-weight: 600;
    z-index: 10000; animation: slideInRight 0.3s ease;
  `;
  const colors = { success: '#10B981', error: '#EF4444', warning: '#F59E0B', info: '#3B82F6' };
  toast.style.borderLeft = `4px solid ${colors[type]}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

console.log('✨ Math games loaded!');
