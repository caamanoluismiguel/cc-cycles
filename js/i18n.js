/**
 * Classical Kids Study Hub
 * Internationalization (i18n) System
 * English / Spanish Support
 */

const i18n = {
  currentLang: localStorage.getItem('ck_lang') || 'en',
  
  translations: {
    en: {
      // General
      appName: 'Classical Kids Study Hub',
      home: 'Home',
      resources: 'Resources',
      math: 'Math',
      dashboard: 'Dashboard',
      parents: 'Parents',
      back: 'Back',
      start: 'Start',
      continue: 'Continue',
      submit: 'Submit',
      clear: 'Clear',
      close: 'Close',
      loading: 'Loading...',
      
      // Login
      welcome: 'Welcome!',
      welcomeBack: 'Welcome back',
      enterName: "What's your name?",
      namePlaceholder: 'Enter your name',
      startLearning: 'Start Learning',
      
      // Study
      chooseCycle: 'Choose Your Cycle',
      cycle: 'Cycle',
      week: 'Week',
      selectWeek: 'Select Week',
      
      // Cycles
      cycle1Name: 'Ancient History',
      cycle2Name: 'Medieval → Modern', 
      cycle3Name: 'US History',
      
      // Topics
      history: 'History',
      science: 'Science',
      geography: 'Geography',
      mathTopic: 'Math',
      english: 'English',
      latin: 'Latin',
      fineArts: 'Fine Arts',
      
      // Lesson sections
      introduction: 'Introduction',
      deepDive: 'Deep Dive',
      historicalContext: 'Historical Context',
      significance: 'Significance',
      funFact: 'Fun Fact',
      theologicalReflection: 'Theological Reflection',
      practicalApplication: 'Practical Application',
      assignment: 'Assignment',
      prayer: 'Prayer',
      
      // Timer
      timeRemaining: 'Time Remaining',
      pause: 'Pause',
      play: 'Play',
      reset: 'Reset',
      complete: 'Complete',
      
      // Homework
      homework: 'Homework & Reflection',
      homeworkIntro: 'Take a moment to reflect on what you learned. Choose a creative activity (draw, write a story, or make a poster) and answer these questions:',
      question1: 'What is one key idea you learned today?',
      question2: 'How will you apply this in your daily life?',
      question3: 'Which creative activity did you choose and why?',
      submitHomework: 'Submit & Continue',
      
      // Math Games
      mathPractice: 'Math Practice',
      selectTopic: 'Select a topic to begin:',
      counting: 'Counting',
      addition: 'Addition',
      subtraction: 'Subtraction',
      multiplication: 'Multiplication',
      division: 'Division',
      fractions: 'Fractions',
      geometry: 'Geometry',
      time: 'Time',
      money: 'Money',
      measurement: 'Measurement',
      patterns: 'Patterns',
      
      // Game UI
      score: 'Score',
      streak: 'Streak',
      level: 'Level',
      highScore: 'High Score',
      timeLeft: 'Time',
      correct: 'Correct!',
      incorrect: 'Incorrect',
      tryAgain: 'Try Again',
      nextQuestion: 'Next',
      changeTopic: 'Change Topic',
      beginPractice: 'Begin Practice',
      practiceComplete: 'Practice Complete!',
      finalScore: 'Your final score',
      returnToMenu: 'Return to Menu',
      yourAnswer: 'Your answer',
      
      // Game Instructions
      countApples: 'Count the apples:',
      whatIs: 'What is',
      howManySides: 'How many sides does this shape have?',
      whatTimeIn: 'What time will it be in',
      minutes: 'minutes',
      totalCents: 'Total cents?',
      completeSequence: 'Complete the sequence:',
      lookAtBar: 'Look at the bar and type the fraction (e.g. 2/3)',
      lookAtGrid: 'Look at the grid and type the fraction (e.g. 3/9)',
      
      // Dashboard
      totalMinutes: 'Total Minutes',
      lessonsCompleted: 'Lessons Completed',
      dayStreak: 'Day Streak',
      studyCalendar: 'Study Calendar',
      recentSessions: 'Recent Sessions',
      achievements: 'Achievements',
      noSessionsYet: 'No sessions yet. Start studying to track your progress!',
      
      // Achievements
      firstSteps: 'First Steps',
      firstStepsDesc: 'Complete your first lesson',
      bookworm: 'Bookworm',
      bookwormDesc: 'Complete 10 lessons',
      onFire: 'On Fire',
      onFireDesc: '3 day streak',
      risingStar: 'Rising Star',
      risingStarDesc: '7 day streak',
      champion: 'Champion',
      championDesc: '14 day streak',
      master: 'Master',
      masterDesc: 'Complete a full week',
      
      // Resources
      educationalResources: 'Educational Resources',
      recommendedReading: 'Recommended Reading',
      ages5to7: 'Ages 5-7 (Early Grammar Stage)',
      ages8to10: 'Ages 8-10 (Late Grammar Stage)',
      ages11to13: 'Ages 11-13 (Dialectic Stage)',
      ages17to18: 'Ages 17-18 (Advanced Rhetoric Stage)',
      focus: 'Focus',
      disclaimer: 'Disclaimer',
      
      // Parents Guide
      parentsGuide: 'Parents Guide',
      welcomeParents: 'Welcome, Parents!',
      parentsIntro: 'A guide to help you support your child\'s classical education journey',
      aboutApp: 'About Classical Kids Study Hub',
      howToUse: 'How to Use This App',
      understandingCycles: 'Understanding the Three Cycles',
      trackingProgress: 'Tracking Your Child\'s Progress',
      tipsForParents: 'Tips for Parent Involvement',
      
      // Messages
      greatJob: 'Great job!',
      excellent: 'Excellent!',
      amazing: 'Amazing!',
      perfect: 'Perfect!',
      keepGoing: 'Keep going!',
      almostThere: 'Almost there!',
      timesUp: "Time's up!",
      lessonComplete: 'Lesson Complete!',
      homeworkSubmitted: 'Homework Submitted!',
      
      // Footer
      copyright: '© 2025 Classical Kids Study Hub. All rights reserved.',
      madeWithLove: 'Made with ❤️ for homeschooling families'
    },
    
    es: {
      // General
      appName: 'Classical Kids - Centro de Estudio',
      home: 'Inicio',
      resources: 'Recursos',
      math: 'Matemáticas',
      dashboard: 'Progreso',
      parents: 'Padres',
      back: 'Volver',
      start: 'Comenzar',
      continue: 'Continuar',
      submit: 'Enviar',
      clear: 'Borrar',
      close: 'Cerrar',
      loading: 'Cargando...',
      
      // Login
      welcome: '¡Bienvenido!',
      welcomeBack: 'Bienvenido de nuevo',
      enterName: '¿Cuál es tu nombre?',
      namePlaceholder: 'Escribe tu nombre',
      startLearning: 'Comenzar a Aprender',
      
      // Study
      chooseCycle: 'Elige Tu Ciclo',
      cycle: 'Ciclo',
      week: 'Semana',
      selectWeek: 'Selecciona la Semana',
      
      // Cycles
      cycle1Name: 'Historia Antigua',
      cycle2Name: 'Medieval → Moderno',
      cycle3Name: 'Historia de EE.UU.',
      
      // Topics
      history: 'Historia',
      science: 'Ciencias',
      geography: 'Geografía',
      mathTopic: 'Matemáticas',
      english: 'Inglés',
      latin: 'Latín',
      fineArts: 'Bellas Artes',
      
      // Lesson sections
      introduction: 'Introducción',
      deepDive: 'Profundización',
      historicalContext: 'Contexto Histórico',
      significance: 'Importancia',
      funFact: 'Dato Curioso',
      theologicalReflection: 'Reflexión Teológica',
      practicalApplication: 'Aplicación Práctica',
      assignment: 'Tarea',
      prayer: 'Oración',
      
      // Timer
      timeRemaining: 'Tiempo Restante',
      pause: 'Pausar',
      play: 'Iniciar',
      reset: 'Reiniciar',
      complete: 'Completar',
      
      // Homework
      homework: 'Tarea y Reflexión',
      homeworkIntro: 'Tómate un momento para reflexionar sobre lo que aprendiste. Elige una actividad creativa (dibujar, escribir una historia o hacer un póster) y responde estas preguntas:',
      question1: '¿Cuál es una idea clave que aprendiste hoy?',
      question2: '¿Cómo aplicarás esto en tu vida diaria?',
      question3: '¿Qué actividad creativa elegiste y por qué?',
      submitHomework: 'Enviar y Continuar',
      
      // Math Games
      mathPractice: 'Práctica de Matemáticas',
      selectTopic: 'Selecciona un tema para comenzar:',
      counting: 'Conteo',
      addition: 'Suma',
      subtraction: 'Resta',
      multiplication: 'Multiplicación',
      division: 'División',
      fractions: 'Fracciones',
      geometry: 'Geometría',
      time: 'Tiempo',
      money: 'Dinero',
      measurement: 'Medidas',
      patterns: 'Patrones',
      
      // Game UI
      score: 'Puntos',
      streak: 'Racha',
      level: 'Nivel',
      highScore: 'Récord',
      timeLeft: 'Tiempo',
      correct: '¡Correcto!',
      incorrect: 'Incorrecto',
      tryAgain: 'Intenta de nuevo',
      nextQuestion: 'Siguiente',
      changeTopic: 'Cambiar Tema',
      beginPractice: 'Comenzar Práctica',
      practiceComplete: '¡Práctica Completada!',
      finalScore: 'Tu puntuación final',
      returnToMenu: 'Volver al Menú',
      yourAnswer: 'Tu respuesta',
      
      // Game Instructions
      countApples: 'Cuenta las manzanas:',
      whatIs: 'Cuánto es',
      howManySides: '¿Cuántos lados tiene esta figura?',
      whatTimeIn: '¿Qué hora será en',
      minutes: 'minutos',
      totalCents: '¿Total de centavos?',
      completeSequence: 'Completa la secuencia:',
      lookAtBar: 'Mira la barra y escribe la fracción (ej. 2/3)',
      lookAtGrid: 'Mira la cuadrícula y escribe la fracción (ej. 3/9)',
      
      // Dashboard
      totalMinutes: 'Minutos Totales',
      lessonsCompleted: 'Lecciones Completadas',
      dayStreak: 'Días Seguidos',
      studyCalendar: 'Calendario de Estudio',
      recentSessions: 'Sesiones Recientes',
      achievements: 'Logros',
      noSessionsYet: 'Aún no hay sesiones. ¡Comienza a estudiar para seguir tu progreso!',
      
      // Achievements
      firstSteps: 'Primeros Pasos',
      firstStepsDesc: 'Completa tu primera lección',
      bookworm: 'Ratón de Biblioteca',
      bookwormDesc: 'Completa 10 lecciones',
      onFire: 'En Llamas',
      onFireDesc: 'Racha de 3 días',
      risingStar: 'Estrella Naciente',
      risingStarDesc: 'Racha de 7 días',
      champion: 'Campeón',
      championDesc: 'Racha de 14 días',
      master: 'Maestro',
      masterDesc: 'Completa una semana entera',
      
      // Resources
      educationalResources: 'Recursos Educativos',
      recommendedReading: 'Lectura Recomendada',
      ages5to7: 'Edades 5-7 (Etapa Gramática Temprana)',
      ages8to10: 'Edades 8-10 (Etapa Gramática Tardía)',
      ages11to13: 'Edades 11-13 (Etapa Dialéctica)',
      ages17to18: 'Edades 17-18 (Etapa Retórica Avanzada)',
      focus: 'Enfoque',
      disclaimer: 'Aviso',
      
      // Parents Guide
      parentsGuide: 'Guía para Padres',
      welcomeParents: '¡Bienvenidos, Padres!',
      parentsIntro: 'Una guía para ayudarles a apoyar el viaje de educación clásica de sus hijos',
      aboutApp: 'Acerca de Classical Kids',
      howToUse: 'Cómo Usar Esta Aplicación',
      understandingCycles: 'Entendiendo los Tres Ciclos',
      trackingProgress: 'Seguimiento del Progreso de Tu Hijo',
      tipsForParents: 'Consejos para la Participación de los Padres',
      
      // Messages
      greatJob: '¡Muy bien!',
      excellent: '¡Excelente!',
      amazing: '¡Increíble!',
      perfect: '¡Perfecto!',
      keepGoing: '¡Sigue así!',
      almostThere: '¡Ya casi!',
      timesUp: '¡Se acabó el tiempo!',
      lessonComplete: '¡Lección Completada!',
      homeworkSubmitted: '¡Tarea Enviada!',
      
      // Footer
      copyright: '© 2025 Classical Kids Study Hub. Todos los derechos reservados.',
      madeWithLove: 'Hecho con ❤️ para familias que educan en casa'
    }
  },
  
  // Get translation
  t(key) {
    return this.translations[this.currentLang][key] || this.translations['en'][key] || key;
  },
  
  // Set language
  setLang(lang) {
    if (this.translations[lang]) {
      this.currentLang = lang;
      localStorage.setItem('ck_lang', lang);
      this.updatePage();
      return true;
    }
    return false;
  },
  
  // Toggle between languages
  toggle() {
    const newLang = this.currentLang === 'en' ? 'es' : 'en';
    this.setLang(newLang);
  },
  
  // Update all elements on page with data-i18n attribute
  updatePage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.t(key);
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = this.t(key);
    });
    
    // Update language toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
    });
    
    // Dispatch event for custom updates
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: this.currentLang } }));
  },
  
  // Initialize
  init() {
    this.updatePage();
  }
};

// Auto-initialize when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => i18n.init());
} else {
  i18n.init();
}
