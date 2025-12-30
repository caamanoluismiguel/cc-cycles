/**
 * ESSENTIALS CURRICULUM DATA
 * Complete 24-week Spanish Grammar Course
 * Each week covers ALL topics with comprehensive practice
 */

var ESSENTIALS_DATA = {
  
  // ==========================================
  // WEEK 1: Introduction to Grammar
  // ==========================================
  1: {
    title: "Introducción a la Gramática",
    subtitle: "Estructura, Propósitos, Sujeto y Predicado",
    pattern: "S + V",
    concepts: [
      {
        name: "Estructura de la Oración",
        icon: "🏗️",
        definition: "Se refiere a cómo está construida la oración.",
        types: [
          { term: "Simple", desc: "Un solo sujeto y un solo verbo.", example: "El gato duerme." },
          { term: "Compuesta", desc: "Dos oraciones simples unidas.", example: "Juan corre y Ana salta." },
          { term: "Compleja", desc: "Una principal y una subordinada.", example: "Yo como cuando tengo hambre." }
        ]
      },
      {
        name: "Los 6 Propósitos",
        icon: "🎯",
        definition: "¿Qué intención tiene el que habla?",
        types: [
          { term: "Declarativo", desc: "Afirma o niega un hecho.", example: "El sol brilla." },
          { term: "Interrogativo", desc: "Hace una pregunta.", example: "¿Dónde está María?" },
          { term: "Exclamativo", desc: "Expresa emoción fuerte.", example: "¡Qué hermoso día!" },
          { term: "Imperativo", desc: "Da una orden o mandato.", example: "Cierra la puerta." },
          { term: "Desiderativo", desc: "Expresa un deseo.", example: "Ojalá llueva mañana." },
          { term: "Dubitativo", desc: "Expresa duda.", example: "Quizás venga Pedro." }
        ]
      },
      {
        name: "Sujeto (S)",
        icon: "👤",
        definition: "¿Quién o qué realiza la acción?",
        tip: "Pregunta: ¿Quién + verbo? La respuesta es el sujeto.",
        example: { sentence: "El perro ladra.", answer: "El perro", explanation: "¿Quién ladra? → El perro" }
      },
      {
        name: "Predicado",
        icon: "💬",
        definition: "Todo lo que se dice del sujeto. Incluye el verbo y sus complementos.",
        example: { sentence: "María come una manzana.", subject: "María", predicate: "come una manzana" }
      }
    ],
    examples: [
      { sentence: "El gato duerme.", analysis: { sujeto: "El gato", predicado: "duerme", estructura: "Simple", propósito: "Declarativo" }, explanation: "¿Quién duerme? El gato. Simple porque tiene un verbo. Declarativo porque afirma." },
      { sentence: "¿Los niños juegan?", analysis: { sujeto: "Los niños", predicado: "juegan", estructura: "Simple", propósito: "Interrogativo" }, explanation: "Es pregunta pero el sujeto sigue siendo 'Los niños'." },
      { sentence: "¡Qué bella es la luna!", analysis: { sujeto: "la luna", predicado: "es bella", estructura: "Simple", propósito: "Exclamativo" }, explanation: "Expresa emoción con ¡!" }
    ],
    practice: [
      // ESTRUCTURA
      { sentence: "El pájaro vuela.", q: "structure", options: ["Simple", "Compuesta", "Compleja"], correct: "Simple" },
      { sentence: "Juan corre y Ana salta.", q: "structure", options: ["Simple", "Compuesta", "Compleja"], correct: "Compuesta" },
      { sentence: "Como cuando tengo hambre.", q: "structure", options: ["Simple", "Compuesta", "Compleja"], correct: "Compleja" },
      // PROPÓSITOS - todos los 6
      { sentence: "El sol brilla.", q: "purpose", options: ["Declarativo", "Interrogativo", "Exclamativo", "Imperativo"], correct: "Declarativo" },
      { sentence: "¿Dónde está tu hermano?", q: "purpose", options: ["Declarativo", "Interrogativo", "Exclamativo", "Imperativo"], correct: "Interrogativo" },
      { sentence: "¡Qué lindo día!", q: "purpose", options: ["Declarativo", "Interrogativo", "Exclamativo", "Imperativo"], correct: "Exclamativo" },
      { sentence: "Cierra la puerta.", q: "purpose", options: ["Declarativo", "Interrogativo", "Exclamativo", "Imperativo"], correct: "Imperativo" },
      { sentence: "Ojalá gane el equipo.", q: "purpose", options: ["Declarativo", "Desiderativo", "Dubitativo", "Exclamativo"], correct: "Desiderativo" },
      { sentence: "Tal vez llueva hoy.", q: "purpose", options: ["Declarativo", "Desiderativo", "Dubitativo", "Imperativo"], correct: "Dubitativo" },
      // SUJETO
      { sentence: "El pájaro vuela.", q: "subject", options: ["El pájaro", "vuela", "El", "pájaro"], correct: "El pájaro" },
      { sentence: "María come pizza.", q: "subject", options: ["María", "come", "pizza", "come pizza"], correct: "María" },
      { sentence: "Los estudiantes estudian.", q: "subject", options: ["Los estudiantes", "estudian", "Los", "estudiantes"], correct: "Los estudiantes" },
      // PREDICADO
      { sentence: "El gato duerme.", q: "predicate", options: ["El gato", "duerme", "El gato duerme", "gato"], correct: "duerme" },
      { sentence: "María come una manzana.", q: "predicate", options: ["María", "come una manzana", "una manzana", "come"], correct: "come una manzana" },
      { sentence: "Mi hermano juega fútbol.", q: "predicate", options: ["Mi hermano", "juega fútbol", "fútbol", "juega"], correct: "juega fútbol" }
    ]
  },

  // ==========================================
  // WEEK 2: The Verb and Tenses
  // ==========================================
  2: {
    title: "El Verbo y sus Tiempos",
    subtitle: "Tipos de verbo, tiempos simples y compuestos",
    pattern: "Tiempos Verbales",
    concepts: [
      {
        name: "¿Qué es el Verbo?",
        icon: "💪",
        definition: "Palabra que indica acción, estado o proceso. Es el núcleo del predicado.",
        types: [
          { term: "Acción", desc: "Algo que se hace", example: "correr, saltar, escribir" },
          { term: "Estado", desc: "Cómo está o es algo", example: "ser, estar, parecer" },
          { term: "Proceso", desc: "Cambio o transformación", example: "crecer, envejecer, mejorar" }
        ]
      },
      {
        name: "Tiempos Simples",
        icon: "1️⃣",
        definition: "El verbo es UNA SOLA palabra.",
        types: [
          { term: "Presente", desc: "Ocurre ahora", example: "Yo canto" },
          { term: "Pretérito", desc: "Ya ocurrió", example: "Yo canté" },
          { term: "Futuro", desc: "Ocurrirá después", example: "Yo cantaré" }
        ]
      },
      {
        name: "Tiempos Compuestos",
        icon: "2️⃣",
        definition: "Usan HABER + Participio (-ado, -ido).",
        types: [
          { term: "Perfecto", desc: "He + participio", example: "He cantado" },
          { term: "Pluscuamperfecto", desc: "Había + participio", example: "Había cantado" },
          { term: "Futuro Perfecto", desc: "Habré + participio", example: "Habré cantado" }
        ]
      },
      {
        name: "Identificar el Verbo",
        icon: "🔍",
        definition: "Pregúntate: ¿Qué palabra indica lo que está pasando?",
        tip: "Cambia 'hoy' por 'ayer'. La palabra que cambia es el verbo."
      }
    ],
    examples: [
      { sentence: "Los niños juegan.", analysis: { verbo: "juegan", tipo: "Simple", tiempo: "Presente", acción: "Acción" }, explanation: "Una sola palabra, indica acción presente." },
      { sentence: "Nosotros hemos comido.", analysis: { verbo: "hemos comido", tipo: "Compuesto", tiempo: "Perfecto" }, explanation: "Auxiliar 'haber' + participio 'comido'." },
      { sentence: "El árbol crece.", analysis: { verbo: "crece", tipo: "Simple", acción: "Proceso" }, explanation: "'Crecer' indica un proceso de cambio." }
    ],
    practice: [
      // IDENTIFICAR VERBO
      { sentence: "El perro corre.", q: "verb", options: ["El perro", "corre", "El", "perro"], correct: "corre" },
      { sentence: "María ha llegado.", q: "verb", options: ["María", "ha llegado", "llegado", "ha"], correct: "ha llegado" },
      { sentence: "Los pájaros cantan.", q: "verb", options: ["Los pájaros", "cantan", "Los", "pájaros"], correct: "cantan" },
      // SIMPLE VS COMPUESTO
      { sentence: "Juan come.", q: "verbType", options: ["Simple", "Compuesto"], correct: "Simple" },
      { sentence: "María ha llegado.", q: "verbType", options: ["Simple", "Compuesto"], correct: "Compuesto" },
      { sentence: "Ellos habían terminado.", q: "verbType", options: ["Simple", "Compuesto"], correct: "Compuesto" },
      { sentence: "El sol brilla.", q: "verbType", options: ["Simple", "Compuesto"], correct: "Simple" },
      // TIEMPOS
      { sentence: "Yo canto.", q: "tense", options: ["Presente", "Pasado", "Futuro"], correct: "Presente" },
      { sentence: "Ayer estudié mucho.", q: "tense", options: ["Presente", "Pasado", "Futuro"], correct: "Pasado" },
      { sentence: "Mañana vendrán mis primos.", q: "tense", options: ["Presente", "Pasado", "Futuro"], correct: "Futuro" },
      { sentence: "El niño duerme.", q: "tense", options: ["Presente", "Pasado", "Futuro"], correct: "Presente" },
      // ACCIÓN, ESTADO, PROCESO
      { sentence: "La niña salta.", q: "verbAction", options: ["Acción", "Estado", "Proceso"], correct: "Acción" },
      { sentence: "El árbol es alto.", q: "verbAction", options: ["Acción", "Estado", "Proceso"], correct: "Estado" },
      { sentence: "La planta crece.", q: "verbAction", options: ["Acción", "Estado", "Proceso"], correct: "Proceso" },
      { sentence: "Juan corre.", q: "verbAction", options: ["Acción", "Estado", "Proceso"], correct: "Acción" },
      { sentence: "María está feliz.", q: "verbAction", options: ["Acción", "Estado", "Proceso"], correct: "Estado" }
    ]
  },

  // ==========================================
  // WEEK 3: Pattern S-Vi + Nouns + Articles
  // ==========================================
  3: {
    title: "Patrón S-Vi, Sustantivos y Artículos",
    subtitle: "Verbos intransitivos y las palabras que forman el sujeto",
    pattern: "S-Vi",
    concepts: [
      {
        name: "Vi = Verbo Intransitivo",
        icon: "🔒",
        definition: "Verbo cuya acción es COMPLETA en sí misma. NO pasa a nadie.",
        tip: "Si después del verbo NO necesitas preguntar '¿qué?' o '¿a quién?', es intransitivo.",
        types: [
          { term: "Ejemplos", example: "dormir, correr, nadar, volar, llegar, nacer, morir" }
        ]
      },
      {
        name: "Sustantivo",
        icon: "📦",
        definition: "Nombres de personas, lugares, cosas o ideas.",
        types: [
          { term: "Persona", example: "María, doctor, niño" },
          { term: "Lugar", example: "ciudad, parque, escuela" },
          { term: "Cosa", example: "mesa, libro, carro" },
          { term: "Idea", example: "amor, libertad, felicidad" }
        ]
      },
      {
        name: "Artículo",
        icon: "📎",
        definition: "Palabras que acompañan al sustantivo.",
        types: [
          { term: "Definidos", desc: "Algo específico", example: "el, la, los, las" },
          { term: "Indefinidos", desc: "Algo no específico", example: "un, una, unos, unas" }
        ]
      }
    ],
    examples: [
      { sentence: "El pájaro vuela.", analysis: { patrón: "S-Vi", sujeto: "El pájaro", verbo: "vuela", tipoVerbo: "Intransitivo" }, explanation: "¿Vuela algo? NO. La acción no pasa a nada." },
      { sentence: "Un niño duerme.", analysis: { patrón: "S-Vi", artículo: "Un (indefinido)", sustantivo: "niño (persona)" }, explanation: "'Un' es artículo indefinido, 'niño' es sustantivo de persona." }
    ],
    practice: [
      // PATRÓN S-Vi
      { sentence: "El pájaro vuela.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A"], correct: "S-Vi" },
      { sentence: "La bebé llora.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A"], correct: "S-Vi" },
      { sentence: "El sol sale.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A"], correct: "S-Vi" },
      { sentence: "Los niños duermen.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A"], correct: "S-Vi" },
      // TIPO DE VERBO
      { sentence: "El pájaro vuela.", q: "verbType", options: ["Intransitivo", "Transitivo", "Copulativo"], correct: "Intransitivo" },
      { sentence: "Mi hermano nada.", q: "verbType", options: ["Intransitivo", "Transitivo", "Copulativo"], correct: "Intransitivo" },
      // SUSTANTIVOS
      { sentence: "El doctor llegó.", q: "nounType", options: ["Persona", "Lugar", "Cosa", "Idea"], correct: "Persona" },
      { sentence: "La ciudad duerme.", q: "nounType", options: ["Persona", "Lugar", "Cosa", "Idea"], correct: "Lugar" },
      { sentence: "El libro cayó.", q: "nounType", options: ["Persona", "Lugar", "Cosa", "Idea"], correct: "Cosa" },
      { sentence: "El amor existe.", q: "nounType", options: ["Persona", "Lugar", "Cosa", "Idea"], correct: "Idea" },
      // ARTÍCULOS
      { sentence: "El pájaro vuela.", q: "article", options: ["Definido", "Indefinido"], correct: "Definido" },
      { sentence: "Un perro ladra.", q: "article", options: ["Definido", "Indefinido"], correct: "Indefinido" },
      { sentence: "La luna brilla.", q: "article", options: ["Definido", "Indefinido"], correct: "Definido" },
      { sentence: "Una niña canta.", q: "article", options: ["Definido", "Indefinido"], correct: "Indefinido" },
      { sentence: "Los pájaros vuelan.", q: "article", options: ["Definido", "Indefinido"], correct: "Definido" }
    ]
  },

  // ==========================================
  // WEEK 4: S-Vi + Interrogative/Exclamative + Pronouns
  // ==========================================
  4: {
    title: "S-Vi con Propósitos y Pronombres",
    subtitle: "Interrogativo, Exclamativo y sustitución de sustantivos",
    pattern: "S-Vi",
    concepts: [
      {
        name: "Propósito Interrogativo",
        icon: "❓",
        definition: "Hace una pregunta. Usa signos ¿?",
        types: [
          { term: "Pregunta total", desc: "Se responde sí/no", example: "¿Llegó Juan?" },
          { term: "Pregunta parcial", desc: "Usa palabras interrogativas", example: "¿Cuándo llegó?" }
        ]
      },
      {
        name: "Propósito Exclamativo",
        icon: "❗",
        definition: "Expresa emoción fuerte. Usa signos ¡!",
        example: { sentence: "¡El bebé camina!", explanation: "Expresa sorpresa o alegría" }
      },
      {
        name: "Pronombres Personales",
        icon: "🔄",
        definition: "Palabras que SUSTITUYEN al sustantivo.",
        types: [
          { term: "Yo, tú, él, ella", desc: "Singular" },
          { term: "Nosotros, ustedes, ellos, ellas", desc: "Plural" }
        ]
      }
    ],
    examples: [
      { sentence: "¿Ellos llegaron?", analysis: { patrón: "S-Vi", sujeto: "Ellos (pronombre)", propósito: "Interrogativo" }, explanation: "'Ellos' sustituye un grupo de personas." },
      { sentence: "¡Ella canta!", analysis: { patrón: "S-Vi", sujeto: "Ella (pronombre)", propósito: "Exclamativo" }, explanation: "Expresa admiración." }
    ],
    practice: [
      // PROPÓSITOS
      { sentence: "¿Ellos llegaron?", q: "purpose", options: ["Declarativo", "Interrogativo", "Exclamativo", "Imperativo"], correct: "Interrogativo" },
      { sentence: "¡Nosotros ganamos!", q: "purpose", options: ["Declarativo", "Interrogativo", "Exclamativo", "Imperativo"], correct: "Exclamativo" },
      { sentence: "Ella duerme.", q: "purpose", options: ["Declarativo", "Interrogativo", "Exclamativo", "Imperativo"], correct: "Declarativo" },
      { sentence: "¿Cuándo llegas tú?", q: "purpose", options: ["Declarativo", "Interrogativo", "Exclamativo", "Imperativo"], correct: "Interrogativo" },
      // SUJETO SUSTANTIVO VS PRONOMBRE
      { sentence: "Ella duerme.", q: "subjectType", options: ["Sustantivo", "Pronombre"], correct: "Pronombre" },
      { sentence: "María duerme.", q: "subjectType", options: ["Sustantivo", "Pronombre"], correct: "Sustantivo" },
      { sentence: "Ellos corren.", q: "subjectType", options: ["Sustantivo", "Pronombre"], correct: "Pronombre" },
      { sentence: "Los niños corren.", q: "subjectType", options: ["Sustantivo", "Pronombre"], correct: "Sustantivo" },
      // IDENTIFICAR PRONOMBRE
      { sentence: "Yo corro.", q: "pronoun", options: ["Yo", "Tú", "Él", "Nosotros"], correct: "Yo" },
      { sentence: "Tú nadas.", q: "pronoun", options: ["Yo", "Tú", "Él", "Nosotros"], correct: "Tú" },
      { sentence: "Nosotros llegamos.", q: "pronoun", options: ["Yo", "Tú", "Ellos", "Nosotros"], correct: "Nosotros" },
      // PATRÓN
      { sentence: "¿Ustedes vienen?", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A"], correct: "S-Vi" },
      { sentence: "¡Él salta!", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A"], correct: "S-Vi" },
      // SUJETO
      { sentence: "¿Cuándo llegas tú?", q: "subject", options: ["Cuándo", "llegas", "tú"], correct: "tú" },
      { sentence: "¡Ellas bailan!", q: "subject", options: ["Ellas", "bailan", "¡Ellas!"], correct: "Ellas" }
    ]
  },

  // ==========================================
  // WEEK 5: Pattern S-Vt-OD
  // ==========================================
  5: {
    title: "Patrón S-Vt-OD",
    subtitle: "Verbos transitivos y Objeto Directo",
    pattern: "S-Vt-OD",
    concepts: [
      {
        name: "Vt = Verbo Transitivo",
        icon: "➡️",
        definition: "Verbo cuya acción PASA del sujeto hacia un objeto.",
        tip: "Pregunta: Sujeto + Verbo + ¿QUÉ? o ¿A QUIÉN? Si hay respuesta, es transitivo.",
        types: [
          { term: "Ejemplos", example: "comer, beber, leer, escribir, ver, comprar" }
        ]
      },
      {
        name: "OD = Objeto Directo",
        icon: "🎯",
        definition: "Es quien RECIBE directamente la acción del verbo.",
        tip: "Pregunta: ¿Qué + verbo + sujeto?",
        example: { sentence: "Juan come pizza.", question: "¿Qué come Juan?", answer: "pizza = OD" }
      },
      {
        name: "Intransitivo vs Transitivo",
        icon: "⚖️",
        types: [
          { term: "Intransitivo", desc: "No pasa", example: "El pájaro vuela. (¿Vuela qué? Nada)" },
          { term: "Transitivo", desc: "Sí pasa", example: "Juan come pizza. (¿Come qué? Pizza)" }
        ]
      },
      {
        name: "Propósito Imperativo",
        icon: "👆",
        definition: "Da una ORDEN. El sujeto (Tú) suele ser tácito.",
        example: { sentence: "¡Lava los platos!", explanation: "Sujeto (Tú) implícito" }
      }
    ],
    examples: [
      { sentence: "María lee un libro.", analysis: { patrón: "S-Vt-OD", sujeto: "María", verbo: "lee", od: "un libro" }, explanation: "¿Lee qué? → un libro" },
      { sentence: "¡Lava el plato!", analysis: { patrón: "S-Vt-OD", sujeto: "(Tú)", verbo: "Lava", od: "el plato", propósito: "Imperativo" }, explanation: "Orden con sujeto tácito." }
    ],
    practice: [
      // PATRÓN
      { sentence: "María lee un libro.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A"], correct: "S-Vt-OD" },
      { sentence: "El niño come una manzana.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A"], correct: "S-Vt-OD" },
      { sentence: "El pájaro vuela.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A"], correct: "S-Vi" },
      { sentence: "Ana compra flores.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A"], correct: "S-Vt-OD" },
      // OBJETO DIRECTO
      { sentence: "María lee un libro.", q: "directObject", options: ["María", "lee", "un libro"], correct: "un libro" },
      { sentence: "El perro come carne.", q: "directObject", options: ["El perro", "come", "carne"], correct: "carne" },
      { sentence: "Nosotros vemos la película.", q: "directObject", options: ["Nosotros", "vemos", "la película"], correct: "la película" },
      { sentence: "¡Lava el plato!", q: "directObject", options: ["Lava", "el plato", "(Tú)"], correct: "el plato" },
      // TIPO DE VERBO
      { sentence: "Juan come pizza.", q: "verbType", options: ["Intransitivo", "Transitivo"], correct: "Transitivo" },
      { sentence: "El bebé llora.", q: "verbType", options: ["Intransitivo", "Transitivo"], correct: "Intransitivo" },
      { sentence: "Ella escribe cartas.", q: "verbType", options: ["Intransitivo", "Transitivo"], correct: "Transitivo" },
      // IMPERATIVO
      { sentence: "¡Cierra la puerta!", q: "purpose", options: ["Declarativo", "Interrogativo", "Imperativo", "Exclamativo"], correct: "Imperativo" },
      { sentence: "¡Lava el plato!", q: "purpose", options: ["Declarativo", "Interrogativo", "Imperativo", "Exclamativo"], correct: "Imperativo" },
      // SUJETO TÁCITO
      { sentence: "¡Cierra la puerta!", q: "subject", options: ["Cierra", "la puerta", "(Tú)"], correct: "(Tú)" },
      { sentence: "Come tu comida.", q: "subject", options: ["Come", "tu comida", "(Tú)"], correct: "(Tú)" }
    ]
  },

  // ==========================================
  // WEEK 6: S-Vt-OD + Dubitative + Adverbs
  // ==========================================
  6: {
    title: "S-Vt-OD con Dubitativo y Adverbios",
    subtitle: "Expresar duda y modificar el verbo",
    pattern: "S-Vt-OD",
    concepts: [
      {
        name: "Propósito Dubitativo",
        icon: "🤔",
        definition: "Expresa DUDA o probabilidad.",
        tip: "Palabras clave: quizás, tal vez, probablemente, acaso",
        types: [
          { term: "Quizás", example: "Quizás Juan venga." },
          { term: "Tal vez", example: "Tal vez llueva hoy." },
          { term: "Probablemente", example: "Probablemente ella estudie." }
        ]
      },
      {
        name: "Adverbio",
        icon: "📍",
        definition: "Palabras que MODIFICAN al verbo. Dicen CÓMO, CUÁNDO, DÓNDE o CUÁNTO.",
        types: [
          { term: "Modo (¿Cómo?)", example: "rápidamente, lentamente, bien, mal" },
          { term: "Tiempo (¿Cuándo?)", example: "hoy, ayer, mañana, ahora, siempre" },
          { term: "Lugar (¿Dónde?)", example: "aquí, allí, cerca, lejos, arriba" },
          { term: "Cantidad (¿Cuánto?)", example: "mucho, poco, muy, bastante" },
          { term: "Duda", example: "quizás, tal vez, probablemente" }
        ]
      },
      {
        name: "El adverbio NO es el OD",
        icon: "⚠️",
        definition: "El adverbio modifica al verbo pero NO es el objeto directo.",
        example: { sentence: "Juan come pizza rápidamente.", od: "pizza", adverb: "rápidamente" }
      }
    ],
    examples: [
      { sentence: "Quizás Juan compre pan hoy.", analysis: { patrón: "S-Vt-OD", propósito: "Dubitativo", od: "pan", adverbios: "Quizás (duda), hoy (tiempo)" }, explanation: "'Quizás' indica duda, 'hoy' indica cuándo." }
    ],
    practice: [
      // PROPÓSITO DUBITATIVO
      { sentence: "Quizás Juan compre pan.", q: "purpose", options: ["Declarativo", "Dubitativo", "Desiderativo", "Imperativo"], correct: "Dubitativo" },
      { sentence: "Tal vez María escriba la carta.", q: "purpose", options: ["Declarativo", "Dubitativo", "Desiderativo", "Interrogativo"], correct: "Dubitativo" },
      { sentence: "Probablemente ella venga.", q: "purpose", options: ["Declarativo", "Dubitativo", "Desiderativo", "Imperativo"], correct: "Dubitativo" },
      // IDENTIFICAR ADVERBIO
      { sentence: "María lee rápidamente.", q: "adverb", options: ["María", "lee", "rápidamente"], correct: "rápidamente" },
      { sentence: "Ayer comí pizza.", q: "adverb", options: ["Ayer", "comí", "pizza"], correct: "Ayer" },
      { sentence: "El gato duerme aquí.", q: "adverb", options: ["El gato", "duerme", "aquí"], correct: "aquí" },
      { sentence: "Como mucho arroz.", q: "adverb", options: ["Como", "mucho", "arroz"], correct: "mucho" },
      // TIPO DE ADVERBIO
      { sentence: "Corre rápidamente.", q: "adverbType", options: ["Modo", "Tiempo", "Lugar", "Cantidad"], correct: "Modo" },
      { sentence: "Llegó ayer.", q: "adverbType", options: ["Modo", "Tiempo", "Lugar", "Cantidad"], correct: "Tiempo" },
      { sentence: "Vive cerca.", q: "adverbType", options: ["Modo", "Tiempo", "Lugar", "Cantidad"], correct: "Lugar" },
      { sentence: "Estudia mucho.", q: "adverbType", options: ["Modo", "Tiempo", "Lugar", "Cantidad"], correct: "Cantidad" },
      // OD VS ADVERBIO
      { sentence: "Juan come pizza rápidamente.", q: "directObject", options: ["Juan", "pizza", "rápidamente"], correct: "pizza" },
      { sentence: "María lee libros siempre.", q: "directObject", options: ["María", "libros", "siempre"], correct: "libros" },
      // PATRÓN
      { sentence: "Quizás compre pan.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A"], correct: "S-Vt-OD" }
    ]
  },

  // ==========================================
  // WEEK 7: Pattern S-Vc-A
  // ==========================================
  7: {
    title: "Patrón S-Vc-A",
    subtitle: "Verbos copulativos y Atributo",
    pattern: "S-Vc-A",
    concepts: [
      {
        name: "Vc = Verbo Copulativo",
        icon: "🔗",
        definition: "Verbos que sirven de PUENTE. NO indican acción, sino que el sujeto ES o ESTÁ de cierta manera.",
        tip: "Si puedes sustituir el verbo por = (igual), es copulativo.",
        types: [
          { term: "SER", desc: "Características permanentes", example: "Juan ES alto." },
          { term: "ESTAR", desc: "Estados temporales", example: "Juan ESTÁ cansado." },
          { term: "PARECER", desc: "Apariencia", example: "Juan PARECE feliz." }
        ]
      },
      {
        name: "A = Atributo",
        icon: "🏷️",
        definition: "Palabra después del verbo copulativo que dice una CUALIDAD del sujeto.",
        tip: "Pregunta: ¿Cómo es? o ¿Qué es? el sujeto.",
        example: { sentence: "El cielo es azul.", question: "¿Cómo es el cielo?", answer: "azul = Atributo" }
      },
      {
        name: "Adjetivo",
        icon: "🎨",
        definition: "Palabras que DESCRIBEN al sustantivo: color, tamaño, forma, etc.",
        types: [
          { term: "Ejemplos", example: "grande, pequeño, rojo, hermoso, inteligente" }
        ]
      }
    ],
    examples: [
      { sentence: "El cielo es azul.", analysis: { patrón: "S-Vc-A", sujeto: "El cielo", verbo: "es", atributo: "azul" }, explanation: "El cielo = azul. 'Es' conecta, 'azul' describe." },
      { sentence: "María está cansada.", analysis: { patrón: "S-Vc-A", verbo: "está (ESTAR)", atributo: "cansada" }, explanation: "Estado temporal." }
    ],
    practice: [
      // PATRÓN
      { sentence: "El cielo es azul.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A"], correct: "S-Vc-A" },
      { sentence: "La sopa está caliente.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A"], correct: "S-Vc-A" },
      { sentence: "Tú pareces feliz.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A"], correct: "S-Vc-A" },
      { sentence: "Juan come pizza.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A"], correct: "S-Vt-OD" },
      // ATRIBUTO
      { sentence: "El cielo es azul.", q: "attribute", options: ["El cielo", "es", "azul"], correct: "azul" },
      { sentence: "La sopa está caliente.", q: "attribute", options: ["La sopa", "está", "caliente"], correct: "caliente" },
      { sentence: "Mi hermano es alto.", q: "attribute", options: ["Mi hermano", "es", "alto"], correct: "alto" },
      { sentence: "Ella parece triste.", q: "attribute", options: ["Ella", "parece", "triste"], correct: "triste" },
      // TIPO DE VERBO COPULATIVO
      { sentence: "El perro es grande.", q: "copVerb", options: ["SER", "ESTAR", "PARECER"], correct: "SER" },
      { sentence: "Ella está triste.", q: "copVerb", options: ["SER", "ESTAR", "PARECER"], correct: "ESTAR" },
      { sentence: "Juan parece cansado.", q: "copVerb", options: ["SER", "ESTAR", "PARECER"], correct: "PARECER" },
      { sentence: "La casa es grande.", q: "copVerb", options: ["SER", "ESTAR", "PARECER"], correct: "SER" },
      // TIPO DE VERBO
      { sentence: "El libro es interesante.", q: "verbType", options: ["Intransitivo", "Transitivo", "Copulativo"], correct: "Copulativo" },
      { sentence: "María corre.", q: "verbType", options: ["Intransitivo", "Transitivo", "Copulativo"], correct: "Intransitivo" },
      // SUJETO
      { sentence: "El libro es interesante.", q: "subject", options: ["El libro", "es", "interesante"], correct: "El libro" }
    ]
  },

  // ==========================================
  // WEEK 8: Compound Coordinated Structure
  // ==========================================
  8: {
    title: "Estructura Compuesta Coordinada",
    subtitle: "Unir oraciones con conjunciones",
    pattern: "Coordinada",
    concepts: [
      {
        name: "Estructura Compuesta",
        icon: "➕",
        definition: "DOS oraciones (o más) unidas.",
        tip: "Como vagones de tren unidos por un gancho."
      },
      {
        name: "Coordinada",
        icon: "⚖️",
        definition: "Ambas partes tienen IGUAL importancia. Ninguna depende de la otra.",
        tip: "Si separas las oraciones, AMBAS tienen sentido solas."
      },
      {
        name: "Cláusula Independiente",
        icon: "🔲",
        definition: "Oración con sentido COMPLETO por sí sola. Tiene su propio S + V."
      },
      {
        name: "Conjunciones Coordinantes",
        icon: "🔗",
        definition: "Los 'ganchos' que unen oraciones coordinadas.",
        types: [
          { term: "Copulativas", desc: "Suman", example: "y, e, ni" },
          { term: "Disyuntivas", desc: "Elegir", example: "o, u" },
          { term: "Adversativas", desc: "Contraste", example: "pero, mas, sino" }
        ]
      }
    ],
    examples: [
      { sentence: "Juan corre y Ana lee.", analysis: { estructura: "Compuesta Coordinada", cláusula1: "Juan corre", conjunción: "y", cláusula2: "Ana lee", tipo: "Copulativa" }, explanation: "Ambas funcionan solas. 'Y' las suma." }
    ],
    practice: [
      // ESTRUCTURA
      { sentence: "Juan corre y Ana lee.", q: "structure", options: ["Simple", "Compuesta Coordinada", "Compuesta Subordinada"], correct: "Compuesta Coordinada" },
      { sentence: "El perro ladra.", q: "structure", options: ["Simple", "Compuesta Coordinada", "Compuesta Subordinada"], correct: "Simple" },
      { sentence: "Llueve pero salgo.", q: "structure", options: ["Simple", "Compuesta Coordinada", "Compuesta Subordinada"], correct: "Compuesta Coordinada" },
      { sentence: "María canta y Pedro baila.", q: "structure", options: ["Simple", "Compuesta Coordinada", "Compuesta Subordinada"], correct: "Compuesta Coordinada" },
      // CONJUNCIÓN
      { sentence: "Juan corre y Ana lee.", q: "conjunction", options: ["Juan", "corre", "y", "Ana"], correct: "y" },
      { sentence: "Llueve pero salgo.", q: "conjunction", options: ["Llueve", "pero", "salgo"], correct: "pero" },
      { sentence: "No como ni bebo.", q: "conjunction", options: ["No", "como", "ni", "bebo"], correct: "ni" },
      { sentence: "¿Estudias o juegas?", q: "conjunction", options: ["Estudias", "o", "juegas"], correct: "o" },
      // TIPO DE CONJUNCIÓN
      { sentence: "Juan corre y Ana lee.", q: "conjunctionType", options: ["Copulativa", "Disyuntiva", "Adversativa"], correct: "Copulativa" },
      { sentence: "Llueve pero salgo.", q: "conjunctionType", options: ["Copulativa", "Disyuntiva", "Adversativa"], correct: "Adversativa" },
      { sentence: "¿Estudias o juegas?", q: "conjunctionType", options: ["Copulativa", "Disyuntiva", "Adversativa"], correct: "Disyuntiva" },
      { sentence: "No canto ni bailo.", q: "conjunctionType", options: ["Copulativa", "Disyuntiva", "Adversativa"], correct: "Copulativa" },
      // NÚMERO DE CLÁUSULAS
      { sentence: "María canta y Pedro baila.", q: "clauseCount", options: ["1", "2", "3"], correct: "2" },
      { sentence: "El sol brilla.", q: "clauseCount", options: ["1", "2", "3"], correct: "1" },
      // PROPÓSITO
      { sentence: "¿Vienes o te quedas?", q: "purpose", options: ["Declarativo", "Interrogativo", "Imperativo"], correct: "Interrogativo" }
    ]
  }
};

console.log('✨ Essentials Data loaded: Weeks 1-8');

// ==========================================
// WEEKS 9-12
// ==========================================

ESSENTIALS_DATA[9] = {
  title: "Patrón S-Vt-OD-OI",
  subtitle: "Objeto Indirecto y Preposiciones",
  pattern: "S-Vt-OD-OI",
  concepts: [
    {
      name: "OI = Objeto Indirecto",
      icon: "🎁",
      definition: "Persona que RECIBE el Objeto Directo. Es el destinatario final.",
      tip: "Pregunta: ¿A QUIÉN? o ¿PARA QUIÉN? Siempre va con 'a' o 'para'.",
      example: { sentence: "Juan da flores a María.", question: "¿A quién da las flores?", answer: "a María = OI" }
    },
    {
      name: "Preposiciones",
      icon: "🔗",
      definition: "Palabras que relacionan elementos.",
      types: [
        { term: "Comunes", example: "a, ante, bajo, con, de, desde, en, entre, hacia, hasta, para, por, sin, sobre" }
      ]
    },
    {
      name: "OD vs OI",
      icon: "⚖️",
      types: [
        { term: "OD", desc: "Recibe la acción directamente", example: "la carta" },
        { term: "OI", desc: "Recibe el beneficio", example: "a Juan" }
      ]
    },
    {
      name: "Interjecciones",
      icon: "😮",
      definition: "Expresiones de emoción súbita: ¡Ay!, ¡Oh!, ¡Uy!, ¡Vaya!"
    }
  ],
  examples: [
    { sentence: "El cartero entregó la carta a mamá.", analysis: { patrón: "S-Vt-OD-OI", od: "la carta", oi: "a mamá" }, explanation: "¿Qué entregó? la carta. ¿A quién? a mamá." }
  ],
  practice: [
    // PATRÓN
    { sentence: "Juan da flores a María.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vt-OD-OI"], correct: "S-Vt-OD-OI" },
    { sentence: "María come pizza.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vt-OD-OI"], correct: "S-Vt-OD" },
    { sentence: "Escribí una carta a mi abuela.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vt-OD-OI"], correct: "S-Vt-OD-OI" },
    // OBJETO DIRECTO
    { sentence: "Juan da flores a María.", q: "directObject", options: ["Juan", "flores", "a María", "da"], correct: "flores" },
    { sentence: "El profesor explica la lección a los estudiantes.", q: "directObject", options: ["El profesor", "la lección", "a los estudiantes"], correct: "la lección" },
    // OBJETO INDIRECTO
    { sentence: "Juan da flores a María.", q: "indirectObject", options: ["Juan", "flores", "a María", "da"], correct: "a María" },
    { sentence: "Escribí una carta a mi abuela.", q: "indirectObject", options: ["una carta", "a mi abuela", "Escribí"], correct: "a mi abuela" },
    { sentence: "Mamá prepara comida para nosotros.", q: "indirectObject", options: ["Mamá", "comida", "para nosotros"], correct: "para nosotros" },
    // PREPOSICIÓN
    { sentence: "Envié un mensaje a Pedro.", q: "preposition", options: ["Envié", "un", "mensaje", "a"], correct: "a" },
    { sentence: "Compré flores para mamá.", q: "preposition", options: ["Compré", "flores", "para", "mamá"], correct: "para" },
    // INTERJECCIÓN
    { sentence: "¡Ay! Me duele la cabeza.", q: "interjection", options: ["¡Ay!", "Me", "duele", "la cabeza"], correct: "¡Ay!" },
    { sentence: "¡Oh! Qué sorpresa.", q: "interjection", options: ["¡Oh!", "Qué", "sorpresa"], correct: "¡Oh!" },
    // DIFERENCIAR OD Y OI
    { sentence: "Dio el libro a Juan.", q: "whatIsElLibro", options: ["Objeto Directo", "Objeto Indirecto"], correct: "Objeto Directo" },
    { sentence: "Dio el libro a Juan.", q: "whatIsAJuan", options: ["Objeto Directo", "Objeto Indirecto"], correct: "Objeto Indirecto" }
  ]
};

ESSENTIALS_DATA[10] = {
  title: "Repaso con Imperativo",
  subtitle: "Órdenes con OD y OI",
  pattern: "S-Vt-OD-OI",
  concepts: [
    {
      name: "Imperativo con OD y OI",
      icon: "👆",
      definition: "En órdenes, el sujeto (Tú) es tácito pero los objetos permanecen.",
      example: { sentence: "¡Dale el libro a tu hermano!", od: "el libro", oi: "a tu hermano" }
    },
    {
      name: "Pronombres de OI",
      icon: "🔄",
      definition: "me, te, le, nos, les pueden reemplazar al OI.",
      types: [
        { term: "me", example: "Dame el libro (a mí)" },
        { term: "te", example: "Te doy el libro (a ti)" },
        { term: "le", example: "Le doy el libro (a él/ella)" }
      ]
    }
  ],
  examples: [
    { sentence: "Escribe una carta a tu abuela.", analysis: { patrón: "S-Vt-OD-OI", sujeto: "(Tú)", od: "una carta", oi: "a tu abuela", propósito: "Imperativo" } }
  ],
  practice: [
    // PROPÓSITO
    { sentence: "Escribe una carta a tu abuela.", q: "purpose", options: ["Declarativo", "Interrogativo", "Imperativo", "Exclamativo"], correct: "Imperativo" },
    { sentence: "Dame el libro.", q: "purpose", options: ["Declarativo", "Interrogativo", "Imperativo", "Exclamativo"], correct: "Imperativo" },
    // SUJETO TÁCITO
    { sentence: "Escribe una carta a tu abuela.", q: "subject", options: ["Escribe", "una carta", "a tu abuela", "(Tú)"], correct: "(Tú)" },
    { sentence: "Pásame la sal.", q: "subject", options: ["Pásame", "la sal", "(Tú)", "me"], correct: "(Tú)" },
    // OD
    { sentence: "Dame el libro.", q: "directObject", options: ["Dame", "el libro", "me", "(Tú)"], correct: "el libro" },
    { sentence: "Trae agua para mamá.", q: "directObject", options: ["Trae", "agua", "para mamá"], correct: "agua" },
    // OI / PRONOMBRE OI
    { sentence: "Dame el libro.", q: "indirectObject", options: ["Dame", "el libro", "me", "(Tú)"], correct: "me" },
    { sentence: "Cuéntale la historia.", q: "indirectObject", options: ["Cuéntale", "la historia", "le"], correct: "le" },
    { sentence: "Trae agua para mamá.", q: "indirectObject", options: ["Trae", "agua", "para mamá"], correct: "para mamá" },
    // PATRÓN
    { sentence: "Dame el libro.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vt-OD-OI"], correct: "S-Vt-OD-OI" },
    { sentence: "Cierra la puerta.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vt-OD-OI"], correct: "S-Vt-OD" },
    // IDENTIFICAR PRONOMBRE
    { sentence: "Te doy mi lápiz.", q: "pronounOI", options: ["Te", "doy", "mi", "lápiz"], correct: "Te" },
    { sentence: "Nos contó una historia.", q: "pronounOI", options: ["Nos", "contó", "una", "historia"], correct: "Nos" }
  ]
};

ESSENTIALS_DATA[11] = {
  title: "Patrón S-Vprep-ORég",
  subtitle: "Verbos prepositivos y Objeto de Régimen",
  pattern: "S-Vprep-ORég",
  concepts: [
    {
      name: "Vprep = Verbo Prepositivo",
      icon: "🔐",
      definition: "Verbos que EXIGEN una preposición específica.",
      types: [
        { term: "Confiar EN", example: "Confío en ti." },
        { term: "Soñar CON", example: "Sueño con viajar." },
        { term: "Pensar EN", example: "Pienso en mi familia." },
        { term: "Hablar DE", example: "Hablamos de política." },
        { term: "Arrepentirse DE", example: "Me arrepiento de eso." }
      ]
    },
    {
      name: "ORég = Objeto de Régimen",
      icon: "📎",
      definition: "La parte que sigue a la preposición obligatoria.",
      tip: "Sin la preposición, la frase suena MAL.",
      example: { wrong: "Yo confío tú", correct: "Yo confío EN ti" }
    },
    {
      name: "Primera Conjugación (-ar)",
      icon: "1️⃣",
      definition: "Verbos terminados en -AR: amar, cantar, bailar, pensar, soñar, confiar"
    }
  ],
  examples: [
    { sentence: "Pienso en mi familia.", analysis: { patrón: "S-Vprep-ORég", verbo: "pienso", preposición: "en", orég: "mi familia" }, explanation: "No dices 'pienso mi familia'. La preposición es obligatoria." }
  ],
  practice: [
    // PATRÓN
    { sentence: "Pienso en mi familia.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vprep-ORég"], correct: "S-Vprep-ORég" },
    { sentence: "Confío en mis amigos.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vprep-ORég"], correct: "S-Vprep-ORég" },
    { sentence: "Juan come pizza.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vprep-ORég"], correct: "S-Vt-OD" },
    { sentence: "Me arrepiento de mis errores.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vprep-ORég"], correct: "S-Vprep-ORég" },
    // PREPOSICIÓN
    { sentence: "Pienso en mi familia.", q: "preposition", options: ["Pienso", "en", "mi", "familia"], correct: "en" },
    { sentence: "Sueño con viajar.", q: "preposition", options: ["Sueño", "con", "viajar"], correct: "con" },
    { sentence: "Hablamos de política.", q: "preposition", options: ["Hablamos", "de", "política"], correct: "de" },
    // OBJETO DE RÉGIMEN
    { sentence: "Confío en ti.", q: "regimenObject", options: ["Confío", "en", "ti"], correct: "ti" },
    { sentence: "Sueño con viajar.", q: "regimenObject", options: ["Sueño", "con", "viajar"], correct: "viajar" },
    { sentence: "Pienso en mi familia.", q: "regimenObject", options: ["Pienso", "en", "mi familia"], correct: "mi familia" },
    // VERBO PREPOSITIVO
    { sentence: "Confío en ti.", q: "prepVerb", options: ["Confiar EN", "Confiar DE", "Confiar CON"], correct: "Confiar EN" },
    { sentence: "Sueño con viajar.", q: "prepVerb", options: ["Soñar EN", "Soñar DE", "Soñar CON"], correct: "Soñar CON" },
    // CONJUGACIÓN
    { sentence: "cantar", q: "conjugation", options: ["Primera (-ar)", "Segunda (-er)", "Tercera (-ir)"], correct: "Primera (-ar)" },
    { sentence: "pensar", q: "conjugation", options: ["Primera (-ar)", "Segunda (-er)", "Tercera (-ir)"], correct: "Primera (-ar)" }
  ]
};

ESSENTIALS_DATA[12] = {
  title: "Conjugaciones y Modo Subjuntivo",
  subtitle: "El modo de la 'no-realidad'",
  pattern: "Subjuntivo",
  concepts: [
    {
      name: "Segunda Conjugación (-er)",
      icon: "2️⃣",
      definition: "Verbos en -ER: comer, beber, leer, correr, tener, hacer, ver"
    },
    {
      name: "Tercera Conjugación (-ir)",
      icon: "3️⃣",
      definition: "Verbos en -IR: vivir, escribir, dormir, salir, ir, decir"
    },
    {
      name: "Indicativo vs Subjuntivo",
      icon: "🔀",
      definition: "INDICATIVO = realidad. SUBJUNTIVO = deseos, dudas, hipótesis.",
      types: [
        { term: "Indicativo", desc: "Hechos reales", example: "Yo como (está pasando)" },
        { term: "Subjuntivo", desc: "No-realidad", example: "Ojalá yo coma (deseo)" }
      ],
      tip: "Truco: Pon 'OJALÁ' antes. Si encaja, es subjuntivo."
    },
    {
      name: "Propósitos con Subjuntivo",
      icon: "🎯",
      definition: "Desiderativo y Dubitativo usan subjuntivo frecuentemente.",
      types: [
        { term: "Desiderativo", example: "¡Ojalá ganemos!" },
        { term: "Dubitativo", example: "Tal vez vayamos." }
      ]
    }
  ],
  examples: [
    { sentence: "Ojalá Juan coma bien.", analysis: { verbo: "coma", modo: "Subjuntivo", propósito: "Desiderativo" }, explanation: "'Coma' es subjuntivo (deseo). Indicativo sería 'come'." }
  ],
  practice: [
    // MODO
    { sentence: "Ojalá llueva mañana.", q: "mode", options: ["Indicativo", "Subjuntivo"], correct: "Subjuntivo" },
    { sentence: "María come pizza.", q: "mode", options: ["Indicativo", "Subjuntivo"], correct: "Indicativo" },
    { sentence: "Tal vez venga Pedro.", q: "mode", options: ["Indicativo", "Subjuntivo"], correct: "Subjuntivo" },
    { sentence: "Juan estudia mucho.", q: "mode", options: ["Indicativo", "Subjuntivo"], correct: "Indicativo" },
    { sentence: "Quiero que estudies.", q: "modeOfEstudies", options: ["Indicativo", "Subjuntivo"], correct: "Subjuntivo" },
    // PROPÓSITO
    { sentence: "Ojalá llueva mañana.", q: "purpose", options: ["Declarativo", "Desiderativo", "Dubitativo", "Imperativo"], correct: "Desiderativo" },
    { sentence: "Tal vez venga Pedro.", q: "purpose", options: ["Declarativo", "Desiderativo", "Dubitativo", "Imperativo"], correct: "Dubitativo" },
    { sentence: "Juan estudia mucho.", q: "purpose", options: ["Declarativo", "Desiderativo", "Dubitativo", "Imperativo"], correct: "Declarativo" },
    // CONJUGACIÓN
    { sentence: "comer", q: "conjugation", options: ["Primera (-ar)", "Segunda (-er)", "Tercera (-ir)"], correct: "Segunda (-er)" },
    { sentence: "vivir", q: "conjugation", options: ["Primera (-ar)", "Segunda (-er)", "Tercera (-ir)"], correct: "Tercera (-ir)" },
    { sentence: "escribir", q: "conjugation", options: ["Primera (-ar)", "Segunda (-er)", "Tercera (-ir)"], correct: "Tercera (-ir)" },
    { sentence: "beber", q: "conjugation", options: ["Primera (-ar)", "Segunda (-er)", "Tercera (-ir)"], correct: "Segunda (-er)" },
    { sentence: "cantar", q: "conjugation", options: ["Primera (-ar)", "Segunda (-er)", "Tercera (-ir)"], correct: "Primera (-ar)" },
    // IDENTIFICAR VERBO EN SUBJUNTIVO
    { sentence: "Espero que vengas.", q: "subjunctiveVerb", options: ["Espero", "vengas", "que"], correct: "vengas" },
    { sentence: "Quiero que estudies.", q: "subjunctiveVerb", options: ["Quiero", "estudies", "que"], correct: "estudies" }
  ]
};

console.log('✨ Weeks 9-12 added');

// ==========================================
// WEEKS 13-18
// ==========================================

ESSENTIALS_DATA[13] = {
  title: "Estructura Subordinada y Patrón S-Vp-CPS",
  subtitle: "Oraciones dependientes y Complemento Predicativo del Sujeto",
  pattern: "S-Vp-CPS",
  concepts: [
    {
      name: "Estructura Subordinada",
      icon: "👩‍👧",
      definition: "Una oración DEPENDE de la otra. La 'hija' no tiene sentido sin la 'madre'.",
      types: [
        { term: "Principal", desc: "Tiene sentido sola" },
        { term: "Subordinada", desc: "Depende de la principal" }
      ],
      tip: "Nexos: que, cuando, donde, porque, quien, aunque"
    },
    {
      name: "Vp = Verbo Predicativo",
      icon: "🏃",
      definition: "Verbo de ACCIÓN (no copulativo). Ej: llegar, correr, dormir."
    },
    {
      name: "CPS = Complemento Predicativo del Sujeto",
      icon: "🏷️",
      definition: "Adjetivo que describe al SUJETO mientras hace la acción.",
      tip: "Pregunta: ¿CÓMO realiza la acción?",
      example: { sentence: "El atleta llegó agotado.", question: "¿Cómo llegó?", answer: "agotado (describe al atleta)" }
    },
    {
      name: "Atributo vs CPS",
      icon: "⚖️",
      types: [
        { term: "Atributo", desc: "Con verbo copulativo", example: "Juan ES alto." },
        { term: "CPS", desc: "Con verbo de acción", example: "Juan llegó cansado." }
      ]
    }
  ],
  examples: [
    { sentence: "El atleta llegó agotado.", analysis: { patrón: "S-Vp-CPS", sujeto: "El atleta", verbo: "llegó", cps: "agotado" }, explanation: "'Agotado' describe al atleta mientras llega." }
  ],
  practice: [
    // ESTRUCTURA
    { sentence: "Yo como cuando tengo hambre.", q: "structure", options: ["Simple", "Compuesta Coordinada", "Compuesta Subordinada"], correct: "Compuesta Subordinada" },
    { sentence: "Juan corre y Ana lee.", q: "structure", options: ["Simple", "Compuesta Coordinada", "Compuesta Subordinada"], correct: "Compuesta Coordinada" },
    { sentence: "Salí porque llovía.", q: "structure", options: ["Simple", "Compuesta Coordinada", "Compuesta Subordinada"], correct: "Compuesta Subordinada" },
    // PATRÓN
    { sentence: "El atleta llegó agotado.", q: "pattern", options: ["S-Vi", "S-Vc-A", "S-Vp-CPS"], correct: "S-Vp-CPS" },
    { sentence: "Juan está cansado.", q: "pattern", options: ["S-Vi", "S-Vc-A", "S-Vp-CPS"], correct: "S-Vc-A" },
    { sentence: "La niña volvió feliz.", q: "pattern", options: ["S-Vi", "S-Vc-A", "S-Vp-CPS"], correct: "S-Vp-CPS" },
    { sentence: "El agua corre cristalina.", q: "pattern", options: ["S-Vi", "S-Vc-A", "S-Vp-CPS"], correct: "S-Vp-CPS" },
    // CPS
    { sentence: "El atleta llegó agotado.", q: "cps", options: ["El atleta", "llegó", "agotado"], correct: "agotado" },
    { sentence: "La niña volvió feliz.", q: "cps", options: ["La niña", "volvió", "feliz"], correct: "feliz" },
    { sentence: "El agua corre cristalina.", q: "cps", options: ["El agua", "corre", "cristalina"], correct: "cristalina" },
    // CLÁUSULA PRINCIPAL VS SUBORDINADA
    { sentence: "Yo como cuando tengo hambre.", q: "mainClause", options: ["Yo como", "cuando tengo hambre"], correct: "Yo como" },
    { sentence: "Yo como cuando tengo hambre.", q: "subordinateClause", options: ["Yo como", "cuando tengo hambre"], correct: "cuando tengo hambre" },
    // NEXO
    { sentence: "Salí porque llovía.", q: "nexus", options: ["Salí", "porque", "llovía"], correct: "porque" },
    { sentence: "Yo como cuando tengo hambre.", q: "nexus", options: ["Yo", "como", "cuando", "tengo"], correct: "cuando" }
  ]
};

ESSENTIALS_DATA[14] = {
  title: "Voz Activa y Voz Pasiva",
  subtitle: "¿Quién realiza la acción?",
  pattern: "Voz",
  concepts: [
    {
      name: "Voz Activa",
      icon: "➡️",
      definition: "El SUJETO hace la acción.",
      example: { sentence: "Juan come la manzana.", explanation: "Juan hace la acción." }
    },
    {
      name: "Voz Pasiva",
      icon: "⬅️",
      definition: "El SUJETO recibe la acción.",
      tip: "Formación: SER + Participio (-ado/-ido)",
      example: { sentence: "La manzana es comida por Juan.", explanation: "La manzana recibe la acción." }
    },
    {
      name: "Transformación",
      icon: "🔄",
      types: [
        { term: "Activa", example: "El perro mordió el hueso." },
        { term: "Pasiva", example: "El hueso fue mordido por el perro." }
      ],
      tip: "El OD se vuelve Sujeto. El Sujeto se vuelve Agente (por + sustantivo)."
    }
  ],
  examples: [
    { sentence: "La carta fue escrita por María.", analysis: { voz: "Pasiva", sujeto: "La carta", verbo: "fue escrita", agente: "por María" }, explanation: "La carta RECIBE la acción." }
  ],
  practice: [
    // VOZ
    { sentence: "Juan come pizza.", q: "voice", options: ["Activa", "Pasiva"], correct: "Activa" },
    { sentence: "La pizza es comida por Juan.", q: "voice", options: ["Activa", "Pasiva"], correct: "Pasiva" },
    { sentence: "La casa fue construida.", q: "voice", options: ["Activa", "Pasiva"], correct: "Pasiva" },
    { sentence: "Los niños cantan.", q: "voice", options: ["Activa", "Pasiva"], correct: "Activa" },
    { sentence: "El libro fue leído.", q: "voice", options: ["Activa", "Pasiva"], correct: "Pasiva" },
    { sentence: "María escribió la carta.", q: "voice", options: ["Activa", "Pasiva"], correct: "Activa" },
    // AGENTE
    { sentence: "El libro fue leído por María.", q: "agent", options: ["El libro", "fue leído", "por María"], correct: "por María" },
    { sentence: "La casa fue construida por los obreros.", q: "agent", options: ["La casa", "fue construida", "por los obreros"], correct: "por los obreros" },
    // SUJETO PACIENTE
    { sentence: "La ventana fue rota.", q: "subject", options: ["La ventana", "fue", "rota"], correct: "La ventana" },
    { sentence: "El pastel fue comido.", q: "subject", options: ["El pastel", "fue", "comido"], correct: "El pastel" },
    // PARTICIPIO
    { sentence: "fue escrita", q: "participle", options: ["fue", "escrita"], correct: "escrita" },
    { sentence: "fue leído", q: "participle", options: ["fue", "leído"], correct: "leído" },
    // TRANSFORMAR (identificar)
    { sentence: "El gato cazó el ratón.", q: "whatBecomesSubjectInPassive", options: ["El gato", "cazó", "el ratón"], correct: "el ratón" }
  ]
};

ESSENTIALS_DATA[15] = {
  title: "Patrón S-Vp-OD-CPO",
  subtitle: "Complemento Predicativo del Objeto",
  pattern: "S-Vp-OD-CPO",
  concepts: [
    {
      name: "CPO = Complemento Predicativo del Objeto",
      icon: "🎯",
      definition: "Adjetivo que califica al OBJETO DIRECTO (no al sujeto).",
      tip: "Pregunta: ¿Quién tiene la cualidad? ¿El sujeto o el objeto?",
      types: [
        { term: "Verbos típicos", example: "considerar, llamar, nombrar, elegir, encontrar, dejar, declarar" }
      ]
    },
    {
      name: "CPS vs CPO",
      icon: "⚖️",
      types: [
        { term: "CPS", desc: "Describe al SUJETO", example: "Juan llegó cansado (Juan está cansado)" },
        { term: "CPO", desc: "Describe al OBJETO", example: "Considero válida tu idea (la idea es válida)" }
      ]
    }
  ],
  examples: [
    { sentence: "El juez declaró inocente al acusado.", analysis: { patrón: "S-Vp-OD-CPO", sujeto: "El juez", od: "al acusado", cpo: "inocente" }, explanation: "¿Quién es inocente? El acusado (OD), no el juez." }
  ],
  practice: [
    // PATRÓN
    { sentence: "El juez declaró inocente al acusado.", q: "pattern", options: ["S-Vp-CPS", "S-Vp-OD-CPO", "S-Vc-A"], correct: "S-Vp-OD-CPO" },
    { sentence: "Encontré vacía la casa.", q: "pattern", options: ["S-Vp-CPS", "S-Vp-OD-CPO", "S-Vc-A"], correct: "S-Vp-OD-CPO" },
    { sentence: "Juan llegó cansado.", q: "pattern", options: ["S-Vp-CPS", "S-Vp-OD-CPO", "S-Vc-A"], correct: "S-Vp-CPS" },
    { sentence: "Considero interesante el libro.", q: "pattern", options: ["S-Vp-CPS", "S-Vp-OD-CPO", "S-Vc-A"], correct: "S-Vp-OD-CPO" },
    // CPO
    { sentence: "El juez declaró inocente al acusado.", q: "cpo", options: ["El juez", "declaró", "inocente", "al acusado"], correct: "inocente" },
    { sentence: "Encontré vacía la casa.", q: "cpo", options: ["Encontré", "vacía", "la casa"], correct: "vacía" },
    { sentence: "Considero interesante el libro.", q: "cpo", options: ["Considero", "interesante", "el libro"], correct: "interesante" },
    // OD
    { sentence: "El juez declaró inocente al acusado.", q: "directObject", options: ["El juez", "inocente", "al acusado"], correct: "al acusado" },
    { sentence: "Encontré vacía la casa.", q: "directObject", options: ["Encontré", "vacía", "la casa"], correct: "la casa" },
    { sentence: "Llamaron tonto a Pedro.", q: "directObject", options: ["Llamaron", "tonto", "a Pedro"], correct: "a Pedro" },
    // CPS VS CPO
    { sentence: "Juan llegó cansado.", q: "predicativeType", options: ["CPS", "CPO"], correct: "CPS" },
    { sentence: "Encontré rota la silla.", q: "predicativeType", options: ["CPS", "CPO"], correct: "CPO" },
    { sentence: "Ella volvió feliz.", q: "predicativeType", options: ["CPS", "CPO"], correct: "CPS" },
    { sentence: "Dejé abierta la puerta.", q: "predicativeType", options: ["CPS", "CPO"], correct: "CPO" }
  ]
};

ESSENTIALS_DATA[16] = {
  title: "Imperativo con CPO",
  subtitle: "Órdenes con predicativo del objeto",
  pattern: "S-Vp-OD-CPO",
  concepts: [
    {
      name: "CPO en Órdenes",
      icon: "👆",
      definition: "En órdenes, describimos cómo queremos que quede el objeto.",
      example: { sentence: "¡Mantén limpia tu habitación!", explanation: "La habitación (OD) debe estar limpia (CPO)" }
    }
  ],
  examples: [
    { sentence: "¡Mantén limpia tu habitación!", analysis: { sujeto: "(Tú)", od: "tu habitación", cpo: "limpia", propósito: "Imperativo" } }
  ],
  practice: [
    // OD
    { sentence: "¡Mantén limpia tu habitación!", q: "directObject", options: ["Mantén", "limpia", "tu habitación"], correct: "tu habitación" },
    { sentence: "Deja cerrada la ventana.", q: "directObject", options: ["Deja", "cerrada", "la ventana"], correct: "la ventana" },
    { sentence: "Pinta roja la pared.", q: "directObject", options: ["Pinta", "roja", "la pared"], correct: "la pared" },
    // CPO
    { sentence: "¡Mantén limpia tu habitación!", q: "cpo", options: ["Mantén", "limpia", "tu habitación"], correct: "limpia" },
    { sentence: "Deja cerrada la ventana.", q: "cpo", options: ["Deja", "cerrada", "la ventana"], correct: "cerrada" },
    { sentence: "Pinta roja la pared.", q: "cpo", options: ["Pinta", "roja", "la pared"], correct: "roja" },
    // PROPÓSITO
    { sentence: "¡Mantén limpia tu habitación!", q: "purpose", options: ["Declarativo", "Interrogativo", "Imperativo", "Exclamativo"], correct: "Imperativo" },
    { sentence: "Deja abierta la puerta.", q: "purpose", options: ["Declarativo", "Interrogativo", "Imperativo", "Exclamativo"], correct: "Imperativo" },
    // PATRÓN
    { sentence: "Deja cerrada la ventana.", q: "pattern", options: ["S-Vp-CPS", "S-Vp-OD-CPO", "S-Vc-A"], correct: "S-Vp-OD-CPO" },
    // SUJETO
    { sentence: "¡Mantén limpia tu habitación!", q: "subject", options: ["Mantén", "limpia", "tu habitación", "(Tú)"], correct: "(Tú)" }
  ]
};

ESSENTIALS_DATA[17] = {
  title: "Voz Pasiva + Cláusulas Adverbiales",
  subtitle: "Subordinadas de tiempo, lugar, modo y causa",
  pattern: "Adverbiales",
  concepts: [
    {
      name: "Cláusulas Adverbiales",
      icon: "📍",
      definition: "Oraciones subordinadas que funcionan como ADVERBIO.",
      types: [
        { term: "Temporales (cuándo)", example: "cuando, mientras, después de que" },
        { term: "Locativas (dónde)", example: "donde, adonde" },
        { term: "Modales (cómo)", example: "como, según" },
        { term: "Causales (por qué)", example: "porque, ya que, puesto que" },
        { term: "Condicionales (si)", example: "si, a menos que" },
        { term: "Concesivas (aunque)", example: "aunque, a pesar de que" }
      ]
    }
  ],
  examples: [
    { sentence: "La carta fue escrita mientras dormías.", analysis: { principal: "La carta fue escrita (Pasiva)", subordinada: "mientras dormías (Temporal)" } }
  ],
  practice: [
    // TIPO DE SUBORDINADA
    { sentence: "Salí cuando dejó de llover.", q: "subordinateType", options: ["Temporal", "Causal", "Condicional", "Concesiva"], correct: "Temporal" },
    { sentence: "Salí porque llovía.", q: "subordinateType", options: ["Temporal", "Causal", "Condicional", "Concesiva"], correct: "Causal" },
    { sentence: "Iré si me invitas.", q: "subordinateType", options: ["Temporal", "Causal", "Condicional", "Concesiva"], correct: "Condicional" },
    { sentence: "Salí aunque llovía.", q: "subordinateType", options: ["Temporal", "Causal", "Condicional", "Concesiva"], correct: "Concesiva" },
    { sentence: "Trabajo donde vivo.", q: "subordinateType", options: ["Temporal", "Locativa", "Modal", "Causal"], correct: "Locativa" },
    { sentence: "Lo hice como me dijiste.", q: "subordinateType", options: ["Temporal", "Locativa", "Modal", "Causal"], correct: "Modal" },
    // VOZ EN LA PRINCIPAL
    { sentence: "La carta fue escrita mientras dormías.", q: "voiceMainClause", options: ["Activa", "Pasiva"], correct: "Pasiva" },
    { sentence: "Juan come cuando tiene hambre.", q: "voiceMainClause", options: ["Activa", "Pasiva"], correct: "Activa" },
    // NEXO
    { sentence: "Salí porque llovía.", q: "nexus", options: ["Salí", "porque", "llovía"], correct: "porque" },
    { sentence: "Iré si me invitas.", q: "nexus", options: ["Iré", "si", "me", "invitas"], correct: "si" },
    { sentence: "Voy aunque llueva.", q: "nexus", options: ["Voy", "aunque", "llueva"], correct: "aunque" },
    // ESTRUCTURA
    { sentence: "Salí porque llovía.", q: "structure", options: ["Simple", "Compuesta Coordinada", "Compuesta Subordinada"], correct: "Compuesta Subordinada" }
  ]
};

ESSENTIALS_DATA[18] = {
  title: "Repaso del Trimestre 3",
  subtitle: "CPS, CPO, Voz y Subordinadas",
  pattern: "Integración",
  concepts: [
    {
      name: "Resumen",
      icon: "📋",
      types: [
        { term: "CPS", desc: "Describe al SUJETO con verbo de acción" },
        { term: "CPO", desc: "Describe al OBJETO DIRECTO" },
        { term: "Atributo", desc: "Describe al sujeto con verbo copulativo" },
        { term: "Voz Activa", desc: "El sujeto HACE la acción" },
        { term: "Voz Pasiva", desc: "El sujeto RECIBE la acción" }
      ]
    }
  ],
  practice: [
    // PREDICATIVO TYPE
    { sentence: "El niño llegó feliz.", q: "predicativeType", options: ["CPS", "CPO", "Atributo"], correct: "CPS" },
    { sentence: "Encontré rota la silla.", q: "predicativeType", options: ["CPS", "CPO", "Atributo"], correct: "CPO" },
    { sentence: "La silla está rota.", q: "predicativeType", options: ["CPS", "CPO", "Atributo"], correct: "Atributo" },
    { sentence: "Juan es alto.", q: "predicativeType", options: ["CPS", "CPO", "Atributo"], correct: "Atributo" },
    { sentence: "Dejé abierta la puerta.", q: "predicativeType", options: ["CPS", "CPO", "Atributo"], correct: "CPO" },
    // VOZ
    { sentence: "La tarea fue hecha.", q: "voice", options: ["Activa", "Pasiva"], correct: "Pasiva" },
    { sentence: "Juan escribió la carta.", q: "voice", options: ["Activa", "Pasiva"], correct: "Activa" },
    // SUBORDINADA
    { sentence: "Aunque llueva, saldré.", q: "subordinateType", options: ["Temporal", "Causal", "Condicional", "Concesiva"], correct: "Concesiva" },
    { sentence: "Fui porque me llamaste.", q: "subordinateType", options: ["Temporal", "Causal", "Condicional", "Concesiva"], correct: "Causal" },
    // PATRÓN
    { sentence: "Juan llegó cansado.", q: "pattern", options: ["S-Vc-A", "S-Vp-CPS", "S-Vp-OD-CPO"], correct: "S-Vp-CPS" },
    { sentence: "Considero válida tu idea.", q: "pattern", options: ["S-Vc-A", "S-Vp-CPS", "S-Vp-OD-CPO"], correct: "S-Vp-OD-CPO" },
    { sentence: "Juan es alto.", q: "pattern", options: ["S-Vc-A", "S-Vp-CPS", "S-Vp-OD-CPO"], correct: "S-Vc-A" }
  ]
};

// WEEKS 19-24: MASTERY

ESSENTIALS_DATA[19] = {
  title: "Cláusulas Adjetivas (Relativas)",
  subtitle: "Oraciones que modifican sustantivos",
  pattern: "Relativas",
  concepts: [
    { name: "Cláusula Adjetiva", icon: "📝", definition: "Oración completa que MODIFICA a un sustantivo.", tip: "Empiezan con: que, quien, el cual, cuyo" },
    { name: "Pronombres Relativos", icon: "🔗", definition: "que, quien, el cual, cuyo conectan la cláusula." },
    { name: "Antecedente", icon: "🎯", definition: "El sustantivo que la cláusula modifica." }
  ],
  practice: [
    { sentence: "El niño que llora está triste.", q: "adjectiveClause", options: ["El niño", "que llora", "está triste"], correct: "que llora" },
    { sentence: "La casa que compramos es grande.", q: "adjectiveClause", options: ["La casa", "que compramos", "es grande"], correct: "que compramos" },
    { sentence: "El niño que llora está triste.", q: "antecedent", options: ["El niño", "que", "llora"], correct: "El niño" },
    { sentence: "La mujer a quien vi es mi tía.", q: "relativePronoun", options: ["La mujer", "a quien", "vi"], correct: "a quien" },
    { sentence: "El libro que leí es interesante.", q: "hasAdjectiveClause", options: ["Sí", "No"], correct: "Sí" },
    { sentence: "El libro interesante está aquí.", q: "hasAdjectiveClause", options: ["Sí", "No"], correct: "No" },
    { sentence: "El niño que llora está triste.", q: "structure", options: ["Simple", "Compuesta Coordinada", "Compuesta Subordinada"], correct: "Compuesta Subordinada" }
  ]
};

ESSENTIALS_DATA[20] = {
  title: "Preposiciones en Preguntas",
  subtitle: "Orden invertido con verbos prepositivos",
  pattern: "S-Vprep-ORég",
  concepts: [
    { name: "Orden en Preguntas", icon: "🔄", definition: "El Objeto de Régimen va AL PRINCIPIO con su preposición." }
  ],
  practice: [
    { sentence: "¿De qué hablas?", q: "preposition", options: ["De", "qué", "hablas"], correct: "De" },
    { sentence: "¿En quién confías?", q: "preposition", options: ["En", "quién", "confías"], correct: "En" },
    { sentence: "¿Con qué sueñas?", q: "preposition", options: ["Con", "qué", "sueñas"], correct: "Con" },
    { sentence: "¿De qué hablas?", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vprep-ORég"], correct: "S-Vprep-ORég" },
    { sentence: "¿De qué hablas?", q: "regimenObject", options: ["De", "qué", "hablas"], correct: "qué" },
    { sentence: "¿De qué hablas?", q: "purpose", options: ["Declarativo", "Interrogativo", "Exclamativo"], correct: "Interrogativo" },
    { sentence: "¡De qué manera cantó!", q: "purpose", options: ["Declarativo", "Interrogativo", "Exclamativo"], correct: "Exclamativo" }
  ]
};

ESSENTIALS_DATA[21] = {
  title: "Estructura Compleja y Participio",
  subtitle: "Coordinación + Subordinación",
  pattern: "Compleja",
  concepts: [
    { name: "Estructura Compleja", icon: "🏰", definition: "Combina COORDINACIÓN y SUBORDINACIÓN." },
    { name: "Participio", icon: "📋", definition: "Forma no personal: -ado, -ido, -to, -so, -cho" }
  ],
  practice: [
    { sentence: "Juan cocina y María lee el libro que compró.", q: "structure", options: ["Simple", "Compuesta Coordinada", "Compuesta Subordinada", "Compleja"], correct: "Compleja" },
    { sentence: "Llueve pero salgo porque tengo cita.", q: "structure", options: ["Simple", "Compuesta Coordinada", "Compuesta Subordinada", "Compleja"], correct: "Compleja" },
    { sentence: "comido", q: "verbForm", options: ["Infinitivo", "Participio", "Gerundio"], correct: "Participio" },
    { sentence: "escrito", q: "verbForm", options: ["Infinitivo", "Participio", "Gerundio"], correct: "Participio" },
    { sentence: "La tarea terminada está en la mesa.", q: "participleFunction", options: ["Tiempo compuesto", "Adjetivo"], correct: "Adjetivo" },
    { sentence: "He estudiado mucho.", q: "participleFunction", options: ["Tiempo compuesto", "Adjetivo"], correct: "Tiempo compuesto" }
  ]
};

ESSENTIALS_DATA[22] = {
  title: "Gerundio",
  subtitle: "La acción en desarrollo",
  pattern: "Gerundio",
  concepts: [
    { name: "Gerundio", icon: "🔄", definition: "Forma no personal: -ando, -iendo. Funciona como ADVERBIO." }
  ],
  practice: [
    { sentence: "cantando", q: "verbForm", options: ["Infinitivo", "Participio", "Gerundio"], correct: "Gerundio" },
    { sentence: "comiendo", q: "verbForm", options: ["Infinitivo", "Participio", "Gerundio"], correct: "Gerundio" },
    { sentence: "Llegó corriendo.", q: "gerundFunction", options: ["Adverbio", "Adjetivo", "Sustantivo"], correct: "Adverbio" },
    { sentence: "Estoy estudiando.", q: "hasGerund", options: ["Sí", "No"], correct: "Sí" },
    { sentence: "He estudiado.", q: "hasGerund", options: ["Sí", "No"], correct: "No" },
    { sentence: "comer", q: "verbForm", options: ["Infinitivo", "Participio", "Gerundio"], correct: "Infinitivo" },
    { sentence: "comido", q: "verbForm", options: ["Infinitivo", "Participio", "Gerundio"], correct: "Participio" }
  ]
};

ESSENTIALS_DATA[23] = {
  title: "Infinitivo Nominal",
  subtitle: "Verbos como sustantivos",
  pattern: "Infinitivo",
  concepts: [
    { name: "Infinitivo", icon: "📖", definition: "El NOMBRE del verbo: -ar, -er, -ir. Puede ser Sujeto u OD." }
  ],
  practice: [
    { sentence: "comer", q: "verbForm", options: ["Infinitivo", "Participio", "Gerundio"], correct: "Infinitivo" },
    { sentence: "vivir", q: "verbForm", options: ["Infinitivo", "Participio", "Gerundio"], correct: "Infinitivo" },
    { sentence: "Caminar es bueno.", q: "infinitiveFunction", options: ["Sujeto", "Objeto Directo"], correct: "Sujeto" },
    { sentence: "Quiero dormir.", q: "infinitiveFunction", options: ["Sujeto", "Objeto Directo"], correct: "Objeto Directo" },
    { sentence: "Leer es importante.", q: "subject", options: ["Leer", "es", "importante"], correct: "Leer" },
    { sentence: "Prefiero estudiar.", q: "directObject", options: ["Prefiero", "estudiar"], correct: "estudiar" },
    { sentence: "bailar", q: "verbForm", options: ["Infinitivo", "Participio", "Gerundio"], correct: "Infinitivo" },
    { sentence: "bailado", q: "verbForm", options: ["Infinitivo", "Participio", "Gerundio"], correct: "Participio" },
    { sentence: "bailando", q: "verbForm", options: ["Infinitivo", "Participio", "Gerundio"], correct: "Gerundio" }
  ]
};

ESSENTIALS_DATA[24] = {
  title: "Consolidación Final",
  subtitle: "¡Graduación! Análisis completo",
  pattern: "TODOS",
  concepts: [
    { name: "Análisis Integral", icon: "🎓", definition: "Aplicar TODAS las tareas: Estructura, Propósito, Patrón, S, V, OD, OI, CPS, CPO, ORég, Infinitivo, Participio, Gerundio" }
  ],
  practice: [
    { sentence: "El pájaro vuela.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A", "S-Vprep-ORég"], correct: "S-Vi" },
    { sentence: "Juan come pizza.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A", "S-Vprep-ORég"], correct: "S-Vt-OD" },
    { sentence: "El cielo es azul.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A", "S-Vprep-ORég"], correct: "S-Vc-A" },
    { sentence: "Pienso en ti.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A", "S-Vprep-ORég"], correct: "S-Vprep-ORég" },
    { sentence: "Juan llegó cansado.", q: "pattern", options: ["S-Vc-A", "S-Vp-CPS", "S-Vp-OD-CPO"], correct: "S-Vp-CPS" },
    { sentence: "Considero válida tu idea.", q: "pattern", options: ["S-Vc-A", "S-Vp-CPS", "S-Vp-OD-CPO"], correct: "S-Vp-OD-CPO" },
    { sentence: "El sol brilla.", q: "structure", options: ["Simple", "Compuesta Coordinada", "Compuesta Subordinada", "Compleja"], correct: "Simple" },
    { sentence: "Juan corre y Ana lee aunque llueva.", q: "structure", options: ["Simple", "Compuesta Coordinada", "Compuesta Subordinada", "Compleja"], correct: "Compleja" },
    { sentence: "Ojalá llueva.", q: "purpose", options: ["Declarativo", "Interrogativo", "Desiderativo", "Dubitativo"], correct: "Desiderativo" },
    { sentence: "Tal vez venga.", q: "purpose", options: ["Declarativo", "Interrogativo", "Desiderativo", "Dubitativo"], correct: "Dubitativo" },
    { sentence: "comer", q: "verbForm", options: ["Infinitivo", "Participio", "Gerundio"], correct: "Infinitivo" },
    { sentence: "comido", q: "verbForm", options: ["Infinitivo", "Participio", "Gerundio"], correct: "Participio" },
    { sentence: "comiendo", q: "verbForm", options: ["Infinitivo", "Participio", "Gerundio"], correct: "Gerundio" },
    { sentence: "El libro fue leído.", q: "voice", options: ["Activa", "Pasiva"], correct: "Pasiva" },
    { sentence: "Ojalá vengas.", q: "mode", options: ["Indicativo", "Subjuntivo"], correct: "Subjuntivo" }
  ]
};

console.log('✨ Essentials Data Complete: 24 weeks!');
