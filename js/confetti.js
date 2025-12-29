/**
 * Confetti Animation System
 * Creates celebratory confetti animations
 */

function createConfetti(count = 50, duration = 3000) {
  const container = document.getElementById('confettiContainer');
  if (!container) return;
  
  const colors = [
    'rgb(74, 144, 226)',   // primary
    'rgb(16, 185, 129)',   // success
    'rgb(245, 158, 11)',   // warning
    'rgb(139, 92, 246)',   // purple
    'rgb(251, 113, 133)'   // coral
  ];
  
  const shapes = ['circle', 'square', 'triangle'];
  
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement('div');
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 0.5 + 's';
    confetti.style.animationDuration = (Math.random() * 1 + 2) + 's';
    
    // Different shapes
    if (shape === 'circle') {
      confetti.style.borderRadius = '50%';
    } else if (shape === 'triangle') {
      confetti.style.width = '0';
      confetti.style.height = '0';
      confetti.style.borderLeft = '5px solid transparent';
      confetti.style.borderRight = '5px solid transparent';
      confetti.style.borderBottom = '10px solid ' + confetti.style.background;
      confetti.style.background = 'transparent';
    }
    
    container.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), duration);
  }
  
  // Play success sound (optional)
  playSound('success');
}

function createFireworks(x, y) {
  const container = document.getElementById('confettiContainer');
  if (!container) return;
  
  const colors = [
    'rgb(74, 144, 226)',
    'rgb(16, 185, 129)',
    'rgb(245, 158, 11)',
    'rgb(139, 92, 246)',
    'rgb(251, 113, 133)'
  ];
  
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '8px';
    particle.style.height = '8px';
    particle.style.borderRadius = '50%';
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    
    const angle = (Math.PI * 2 * i) / 30;
    const velocity = 100 + Math.random() * 100;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    
    container.appendChild(particle);
    
    let posX = x;
    let posY = y;
    let life = 1;
    
    const animate = () => {
      posX += vx * 0.016;
      posY += vy * 0.016 + 50 * 0.016; // gravity
      life -= 0.02;
      
      particle.style.left = posX + 'px';
      particle.style.top = posY + 'px';
      particle.style.opacity = life;
      
      if (life > 0) {
        requestAnimationFrame(animate);
      } else {
        particle.remove();
      }
    };
    
    requestAnimationFrame(animate);
  }
}

function playSound(type) {
  // Optional: Add sound effects
  // For now, just vibrate on mobile if available
  if ('vibrate' in navigator) {
    if (type === 'success') {
      navigator.vibrate(50);
    } else if (type === 'error') {
      navigator.vibrate([50, 50, 50]);
    }
  }
}

console.log('✨ Confetti system loaded');
