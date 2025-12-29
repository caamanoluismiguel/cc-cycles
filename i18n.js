/**
 * Internationalization (i18n) System
 * English and Spanish translations
 */

const translations = {
  en: {
    // Navigation
    nav_home: 'Home',
    nav_guide: 'Parents Guide',
    nav_resources: 'Resources',
    nav_math: 'Math Practice',
    nav_dashboard: 'Dashboard',
    nav_logout: 'Logout',
    
    // Homepage
    hero_title: 'Classical Kids Study Hub',
    hero_subtitle: 'Your companion for Classical Conversations',
    hero_cta: 'Start Learning',
    hero_cta_secondary: 'Learn More',
    
    welcome_back: 'Welcome back',
    start_session: 'Start Study Session',
    continue_learning: 'Continue Learning',
    
    // Study Session
    select_cycle: 'Select Cycle',
    select_week: 'Select Week',
    select_topic: 'Select Topic',
    start_timer: 'Start 15-Minute Timer',
    pause: 'Pause',
    resume: 'Resume',
    complete_session: 'Complete Session',
    
    // Math Games
    math_title: 'Math Practice',
    math_subtitle: 'Master arithmetic through fun games',
    select_game: 'Select a Game',
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
    
    score: 'Score',
    streak: 'Streak',
    level: 'Level',
    high_score: 'High Score',
    correct: 'Correct! Great job!',
    incorrect: 'Not quite. Try again!',
    
    // Resources
    resources_title: 'Educational Resources',
    books_by_age: 'Books by Age',
    memory_work: 'Memory Work',
    ages: 'Ages',
    search_books: 'Search books...',
    filter_by: 'Filter by',
    
    // Dashboard
    dashboard_title: 'Your Progress',
    study_time: 'Study Time',
    completed_lessons: 'Completed Lessons',
    current_streak: 'Current Streak',
    achievements: 'Achievements',
    weekly_goal: 'Weekly Goal',
    
    // Common
    loading: 'Loading...',
    save: 'Save',
    cancel: 'Cancel',
    edit: 'Edit',
    delete: 'Delete',
    confirm: 'Confirm',
    back: 'Back',
    next: 'Next',
    finish: 'Finish',
    close: 'Close',
    
    // Time
    days: 'days',
    hours: 'hours',
    minutes: 'minutes',
    seconds: 'seconds',
    
    // Messages
    success_saved: 'Saved successfully!',
    error_occurred: 'An error occurred',
    confirm_logout: 'Are you sure you want to logout?',
    session_complete: 'Session complete! Great work!',
  },
  
  es: {
    // Navegación
    nav_home: 'Inicio',
    nav_guide: 'Guía para Padres',
    nav_resources: 'Recursos',
    nav_math: 'Práctica de Matemáticas',
    nav_dashboard: 'Panel',
    nav_logout: 'Cerrar Sesión',
    
    // Página Principal
    hero_title: 'Centro de Estudio Classical Kids',
    hero_subtitle: 'Tu compañero para Classical Conversations',
    hero_cta: 'Comenzar a Aprender',
    hero_cta_secondary: 'Saber Más',
    
    welcome_back: 'Bienvenido de nuevo',
    start_session: 'Iniciar Sesión de Estudio',
    continue_learning: 'Continuar Aprendiendo',
    
    // Sesión de Estudio
    select_cycle: 'Seleccionar Ciclo',
    select_week: 'Seleccionar Semana',
    select_topic: 'Seleccionar Tema',
    start_timer: 'Iniciar Temporizador de 15 Minutos',
    pause: 'Pausar',
    resume: 'Reanudar',
    complete_session: 'Completar Sesión',
    
    // Juegos de Matemáticas
    math_title: 'Práctica de Matemáticas',
    math_subtitle: 'Domina la aritmética con juegos divertidos',
    select_game: 'Selecciona un Juego',
    counting: 'Contar',
    addition: 'Suma',
    subtraction: 'Resta',
    multiplication: 'Multiplicación',
    division: 'División',
    fractions: 'Fracciones',
    geometry: 'Geometría',
    time: 'Tiempo',
    money: 'Dinero',
    measurement: 'Medición',
    patterns: 'Patrones',
    
    score: 'Puntuación',
    streak: 'Racha',
    level: 'Nivel',
    high_score: 'Puntuación Más Alta',
    correct: '¡Correcto! ¡Buen trabajo!',
    incorrect: 'No exactamente. ¡Intenta de nuevo!',
    
    // Recursos
    resources_title: 'Recursos Educativos',
    books_by_age: 'Libros por Edad',
    memory_work: 'Trabajo de Memoria',
    ages: 'Edades',
    search_books: 'Buscar libros...',
    filter_by: 'Filtrar por',
    
    // Panel
    dashboard_title: 'Tu Progreso',
    study_time: 'Tiempo de Estudio',
    completed_lessons: 'Lecciones Completadas',
    current_streak: 'Racha Actual',
    achievements: 'Logros',
    weekly_goal: 'Meta Semanal',
    
    // Común
    loading: 'Cargando...',
    save: 'Guardar',
    cancel: 'Cancelar',
    edit: 'Editar',
    delete: 'Eliminar',
    confirm: 'Confirmar',
    back: 'Atrás',
    next: 'Siguiente',
    finish: 'Terminar',
    close: 'Cerrar',
    
    // Tiempo
    days: 'días',
    hours: 'horas',
    minutes: 'minutos',
    seconds: 'segundos',
    
    // Mensajes
    success_saved: '¡Guardado exitosamente!',
    error_occurred: 'Ocurrió un error',
    confirm_logout: '¿Estás seguro de que quieres cerrar sesión?',
    session_complete: '¡Sesión completa! ¡Buen trabajo!',
  }
};

class I18n {
  constructor() {
    this.currentLang = localStorage.getItem('language') || 'en';
    this.translations = translations;
  }

  setLanguage(lang) {
    if (this.translations[lang]) {
      this.currentLang = lang;
      localStorage.setItem('language', lang);
      this.updatePageText();
      document.documentElement.lang = lang;
    }
  }

  t(key) {
    return this.translations[this.currentLang][key] || key;
  }

  updatePageText() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.t(key);
      
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    });
  }

  getCurrentLanguage() {
    return this.currentLang;
  }
}

// Create global instance
window.i18n = new I18n();

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  window.i18n.updatePageText();
});

console.log('✨ i18n system loaded');
