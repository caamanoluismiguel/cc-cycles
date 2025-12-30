/**
 * ESSENTIALS CURRICULUM DATA
 * Complete 24-week Spanish Grammar Course
 * Each week has: concepts, examples, practice sentences, and quiz questions
 */

var ESSENTIALS_DATA = {
  
  // ==========================================
  // WEEK 1: Introduction to Grammar
  // ==========================================
  1: {
    title: "Introducción a la Gramática y Estructura General",
    subtitle: "La vista de pájaro - Clasificar cualquier oración",
    pattern: "S + V",
    concepts: [
      {
        name: "Estructura de la Oración",
        icon: "🏗️",
        definition: "Se refiere a cómo está construida la oración.",
        types: [
          { term: "Simple", desc: "Tiene un solo sujeto y un solo verbo (una sola cláusula independiente).", example: "El gato duerme." },
          { term: "Compuesta", desc: "Dos oraciones simples unidas.", example: "Juan corre y Ana salta." },
          { term: "Compleja", desc: "Una oración principal y una subordinada que depende de ella.", example: "Yo como cuando tengo hambre." }
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
          { term: "Dubitativo", desc: "Expresa duda o probabilidad.", example: "Quizás venga Pedro." }
        ]
      },
      {
        name: "Sujeto (S)",
        icon: "👤",
        definition: "¿Quién o qué realiza la acción o de quién se habla?",
        tip: "Pregunta: ¿Quién + verbo? La respuesta es el sujeto.",
        example: { sentence: "El perro ladra.", answer: "El perro", explanation: "¿Quién ladra? → El perro" }
      },
      {
        name: "Predicado",
        icon: "💬",
        definition: "Es todo lo que se dice del sujeto. Incluye el verbo y sus complementos.",
        example: { sentence: "María come una manzana.", subject: "María", predicate: "come una manzana" }
      }
    ],
    examples: [
      {
        sentence: "El gato duerme.",
        analysis: {
          subject: "El gato",
          predicate: "duerme",
          structure: "Simple",
          purpose: "Declarativo"
        },
        explanation: "¿Quién duerme? El gato. Es simple porque tiene un solo verbo. Es declarativo porque afirma un hecho."
      },
      {
        sentence: "¿Los niños juegan?",
        analysis: {
          subject: "Los niños",
          predicate: "juegan",
          structure: "Simple",
          purpose: "Interrogativo"
        },
        explanation: "Aunque es una pregunta, el sujeto sigue siendo 'Los niños'. El propósito es interrogativo por los signos de pregunta."
      },
      {
        sentence: "¡Qué bella es la luna!",
        analysis: {
          subject: "la luna",
          predicate: "es bella",
          structure: "Simple",
          purpose: "Exclamativo"
        },
        explanation: "El propósito exclamativo expresa emoción. Los signos ¡! lo indican."
      }
    ],
    practice: [
      { sentence: "El pájaro vuela.", q: "subject", options: ["El pájaro", "vuela", "El", "pájaro"], correct: "El pájaro" },
      { sentence: "El pájaro vuela.", q: "predicate", options: ["El pájaro", "vuela", "El pájaro vuela", "pájaro"], correct: "vuela" },
      { sentence: "El pájaro vuela.", q: "structure", options: ["Simple", "Compuesta", "Compleja"], correct: "Simple" },
      { sentence: "El pájaro vuela.", q: "purpose", options: ["Declarativo", "Interrogativo", "Imperativo", "Exclamativo"], correct: "Declarativo" },
      { sentence: "¿Dónde está tu hermano?", q: "purpose", options: ["Declarativo", "Interrogativo", "Imperativo", "Exclamativo"], correct: "Interrogativo" },
      { sentence: "¡Cierra la ventana!", q: "purpose", options: ["Declarativo", "Interrogativo", "Imperativo", "Exclamativo"], correct: "Imperativo" },
      { sentence: "Ojalá gane el equipo.", q: "purpose", options: ["Declarativo", "Desiderativo", "Dubitativo", "Exclamativo"], correct: "Desiderativo" },
      { sentence: "Tal vez llueva hoy.", q: "purpose", options: ["Declarativo", "Desiderativo", "Dubitativo", "Imperativo"], correct: "Dubitativo" },
      { sentence: "María estudia y Pedro juega.", q: "structure", options: ["Simple", "Compuesta", "Compleja"], correct: "Compuesta" },
      { sentence: "La maestra explica la lección.", q: "subject", options: ["La maestra", "explica", "la lección", "La"], correct: "La maestra" }
    ]
  },

  // ==========================================
  // WEEK 2: The Verb and Tenses
  // ==========================================
  2: {
    title: "El Verbo y sus Tiempos",
    subtitle: "El corazón de la oración - Sin verbo, no hay oración",
    pattern: "Tiempos Verbales",
    concepts: [
      {
        name: "¿Qué es el Verbo?",
        icon: "💪",
        definition: "Es la palabra que indica acción, estado o proceso. Es el núcleo del predicado.",
        types: [
          { term: "Acción", desc: "Indica algo que se hace.", example: "correr, saltar, escribir, comer" },
          { term: "Estado", desc: "Indica cómo está o es algo.", example: "ser, estar, parecer" },
          { term: "Proceso", desc: "Indica un cambio o transformación.", example: "crecer, envejecer, mejorar" }
        ]
      },
      {
        name: "Tiempos Simples",
        icon: "1️⃣",
        definition: "El verbo es UNA SOLA palabra.",
        types: [
          { term: "Presente", desc: "Acción que ocurre ahora.", example: "Yo canto" },
          { term: "Pretérito (Pasado)", desc: "Acción que ya ocurrió.", example: "Yo canté" },
          { term: "Futuro", desc: "Acción que ocurrirá.", example: "Yo cantaré" }
        ]
      },
      {
        name: "Tiempos Compuestos",
        icon: "2️⃣",
        definition: "Usan el verbo auxiliar HABER + Participio (-ado, -ido).",
        types: [
          { term: "Pretérito Perfecto", desc: "He + participio", example: "Yo he cantado" },
          { term: "Pluscuamperfecto", desc: "Había + participio", example: "Yo había cantado" },
          { term: "Futuro Perfecto", desc: "Habré + participio", example: "Yo habré cantado" }
        ]
      },
      {
        name: "Cómo Identificar el Verbo",
        icon: "🔍",
        definition: "Pregúntate: ¿Cuál palabra indica lo que está pasando? ¿Qué palabra cambia si cambio el tiempo?",
        tip: "Cambia 'hoy' por 'ayer'. La palabra que cambia es el verbo.",
        example: { sentence: "Los niños juegan. → Los niños jugaron.", answer: "juegan/jugaron", explanation: "La palabra que cambió es el verbo." }
      }
    ],
    examples: [
      {
        sentence: "Nosotros hemos comido.",
        analysis: {
          verb: "hemos comido",
          type: "Compuesto",
          tense: "Pretérito Perfecto",
          subject: "Nosotros"
        },
        explanation: "Es tiempo compuesto porque tiene el auxiliar 'haber' (hemos) + participio (comido)."
      },
      {
        sentence: "El sol brilla.",
        analysis: {
          verb: "brilla",
          type: "Simple",
          tense: "Presente",
          subject: "El sol"
        },
        explanation: "Es tiempo simple porque el verbo es una sola palabra. Indica acción en el presente."
      },
      {
        sentence: "Mañana iré al parque.",
        analysis: {
          verb: "iré",
          type: "Simple",
          tense: "Futuro",
          subject: "Yo (tácito)"
        },
        explanation: "El verbo 'iré' indica una acción futura. El sujeto 'yo' está implícito."
      }
    ],
    practice: [
      { sentence: "El perro corre.", q: "verb", options: ["El perro", "corre", "El", "perro"], correct: "corre" },
      { sentence: "María ha llegado.", q: "verb", options: ["María", "ha llegado", "llegado", "ha"], correct: "ha llegado" },
      { sentence: "María ha llegado.", q: "verbType", options: ["Simple", "Compuesto"], correct: "Compuesto" },
      { sentence: "Los pájaros cantan.", q: "verb", options: ["Los pájaros", "cantan", "Los", "pájaros"], correct: "cantan" },
      { sentence: "Los pájaros cantan.", q: "tense", options: ["Presente", "Pasado", "Futuro"], correct: "Presente" },
      { sentence: "Ayer estudié mucho.", q: "tense", options: ["Presente", "Pasado", "Futuro"], correct: "Pasado" },
      { sentence: "Mañana vendrán mis primos.", q: "tense", options: ["Presente", "Pasado", "Futuro"], correct: "Futuro" },
      { sentence: "Ellos habían terminado.", q: "verbType", options: ["Simple", "Compuesto"], correct: "Compuesto" },
      { sentence: "La niña salta.", q: "verbAction", options: ["Acción", "Estado", "Proceso"], correct: "Acción" },
      { sentence: "El árbol es alto.", q: "verbAction", options: ["Acción", "Estado", "Proceso"], correct: "Estado" }
    ]
  },

  // ==========================================
  // WEEK 3: Pattern S-Vi
  // ==========================================
  3: {
    title: "Patrón S-Vi (Sujeto - Verbo Intransitivo)",
    subtitle: "La estructura más básica - La acción no pasa a nadie",
    pattern: "S-Vi",
    concepts: [
      {
        name: "S = Sujeto",
        icon: "👤",
        definition: "La persona o cosa que realiza la acción o de quien se habla.",
        tip: "Pregunta: ¿Quién + verbo?"
      },
      {
        name: "Vi = Verbo Intransitivo",
        icon: "🔒",
        definition: "Es un verbo cuya acción es COMPLETA en sí misma. La acción NO PASA a nadie más. Se queda en el sujeto.",
        tip: "Prueba: Si después del verbo NO necesitas preguntar '¿qué cosa?' o '¿a quién?', es intransitivo.",
        types: [
          { term: "Verbos intransitivos comunes", desc: "dormir, correr, nadar, volar, llegar, salir, nacer, morir, crecer" }
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
        definition: "Palabras que acompañan al sustantivo para determinarlo.",
        types: [
          { term: "Definidos", desc: "Algo específico", example: "el, la, los, las" },
          { term: "Indefinidos", desc: "Algo no específico", example: "un, una, unos, unas" }
        ]
      }
    ],
    examples: [
      {
        sentence: "El pájaro vuela.",
        analysis: {
          pattern: "S-Vi",
          subject: "El pájaro",
          verb: "vuela",
          verbType: "Intransitivo"
        },
        explanation: "¿El pájaro vuela 'algo'? NO. Simplemente vuela. La acción no se transfiere a nada.",
        breakdown: [
          { word: "El", role: "Artículo definido" },
          { word: "pájaro", role: "Sustantivo (cosa)" },
          { word: "vuela", role: "Verbo Intransitivo" }
        ]
      },
      {
        sentence: "Los niños duermen.",
        analysis: {
          pattern: "S-Vi",
          subject: "Los niños",
          verb: "duermen",
          verbType: "Intransitivo"
        },
        explanation: "¿Duermen 'algo'? NO. Simplemente duermen. Es intransitivo.",
        breakdown: [
          { word: "Los", role: "Artículo definido" },
          { word: "niños", role: "Sustantivo (persona)" },
          { word: "duermen", role: "Verbo Intransitivo" }
        ]
      },
      {
        sentence: "Mi abuela camina.",
        analysis: {
          pattern: "S-Vi",
          subject: "Mi abuela",
          verb: "camina",
          verbType: "Intransitivo"
        },
        explanation: "Caminar es intransitivo porque la acción no requiere un objeto."
      }
    ],
    practice: [
      { sentence: "El pájaro vuela.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A"], correct: "S-Vi" },
      { sentence: "El pájaro vuela.", q: "subject", options: ["El pájaro", "vuela", "El", "pájaro"], correct: "El pájaro" },
      { sentence: "El pájaro vuela.", q: "verbType", options: ["Intransitivo", "Transitivo", "Copulativo"], correct: "Intransitivo" },
      { sentence: "La bebé llora.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A"], correct: "S-Vi" },
      { sentence: "El avión aterrizó.", q: "verb", options: ["El avión", "aterrizó", "El", "avión"], correct: "aterrizó" },
      { sentence: "Las flores crecen.", q: "subject", options: ["Las flores", "crecen", "Las", "flores"], correct: "Las flores" },
      { sentence: "Mi hermano nada.", q: "verbType", options: ["Intransitivo", "Transitivo", "Copulativo"], correct: "Intransitivo" },
      { sentence: "El sol sale.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A"], correct: "S-Vi" },
      { sentence: "Un perro ladra.", q: "article", options: ["Definido", "Indefinido"], correct: "Indefinido" },
      { sentence: "La luna brilla.", q: "article", options: ["Definido", "Indefinido"], correct: "Definido" }
    ]
  },

  // ==========================================
  // WEEK 4: S-Vi + Interrogative/Exclamative + Pronouns
  // ==========================================
  4: {
    title: "S-Vi + Interrogativo/Exclamativo y Pronombres",
    subtitle: "El mismo patrón, pero cambiamos la intención y sustituimos nombres",
    pattern: "S-Vi",
    concepts: [
      {
        name: "Propósito Interrogativo",
        icon: "❓",
        definition: "Hace una pregunta. Usa signos de interrogación ¿?",
        tip: "Aunque sea pregunta, la estructura gramatical sigue igual. Solo cambia la intención.",
        types: [
          { term: "Pregunta total", desc: "Se responde sí/no", example: "¿Llegó Juan?" },
          { term: "Pregunta parcial", desc: "Usa palabras interrogativas", example: "¿Cuándo llegó Juan?" }
        ]
      },
      {
        name: "Propósito Exclamativo",
        icon: "❗",
        definition: "Expresa emoción fuerte: sorpresa, alegría, enojo, admiración. Usa signos ¡!",
        example: { sentence: "¡El bebé camina!", explanation: "Expresa sorpresa o alegría" }
      },
      {
        name: "Pronombres",
        icon: "🔄",
        definition: "Palabras que SUSTITUYEN al sustantivo para no repetirlo.",
        types: [
          { term: "Personales", desc: "yo, tú, él, ella, nosotros, ustedes, ellos, ellas" },
          { term: "Demostrativos", desc: "este, ese, aquel, esta, esa, aquella" },
          { term: "Posesivos", desc: "mío, tuyo, suyo, nuestro" }
        ],
        example: { sentence: "María corre. → Ella corre.", explanation: "'Ella' sustituye a 'María'" }
      }
    ],
    examples: [
      {
        sentence: "¿Ellos llegaron?",
        analysis: {
          pattern: "S-Vi",
          subject: "Ellos",
          verb: "llegaron",
          purpose: "Interrogativo",
          subjectType: "Pronombre personal"
        },
        explanation: "El pronombre 'Ellos' sustituye a un grupo de personas. El propósito es interrogativo (pregunta)."
      },
      {
        sentence: "¡Ella canta!",
        analysis: {
          pattern: "S-Vi",
          subject: "Ella",
          verb: "canta",
          purpose: "Exclamativo",
          subjectType: "Pronombre personal"
        },
        explanation: "Expresa admiración o emoción. 'Ella' es pronombre que sustituye un nombre femenino."
      },
      {
        sentence: "¿Tú nadas?",
        analysis: {
          pattern: "S-Vi",
          subject: "Tú",
          verb: "nadas",
          purpose: "Interrogativo"
        },
        explanation: "'Tú' es pronombre personal de segunda persona."
      }
    ],
    practice: [
      { sentence: "¿Ellos llegaron?", q: "purpose", options: ["Declarativo", "Interrogativo", "Exclamativo", "Imperativo"], correct: "Interrogativo" },
      { sentence: "¿Ellos llegaron?", q: "subject", options: ["Ellos", "llegaron", "¿Ellos?", "llegaron?"], correct: "Ellos" },
      { sentence: "¡Nosotros ganamos!", q: "purpose", options: ["Declarativo", "Interrogativo", "Exclamativo", "Imperativo"], correct: "Exclamativo" },
      { sentence: "Ella duerme.", q: "subjectType", options: ["Sustantivo", "Pronombre", "Artículo"], correct: "Pronombre" },
      { sentence: "María duerme.", q: "subjectType", options: ["Sustantivo", "Pronombre", "Artículo"], correct: "Sustantivo" },
      { sentence: "¿Ustedes vienen?", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A"], correct: "S-Vi" },
      { sentence: "Yo corro.", q: "pronoun", options: ["Yo", "corro", "Yo corro"], correct: "Yo" },
      { sentence: "¡Él salta!", q: "verb", options: ["Él", "salta", "¡Él!", "salta!"], correct: "salta" },
      { sentence: "¿Cuándo llegas tú?", q: "subject", options: ["Cuándo", "llegas", "tú", "¿Cuándo?"], correct: "tú" },
      { sentence: "Este corre rápido.", q: "pronounType", options: ["Personal", "Demostrativo", "Posesivo"], correct: "Demostrativo" }
    ]
  },

  // ==========================================
  // WEEK 5: Pattern S-Vt-OD
  // ==========================================
  5: {
    title: "Patrón S-Vt-OD (Sujeto - Verbo Transitivo - Objeto Directo)",
    subtitle: "La acción ahora VIAJA del sujeto a otra cosa",
    pattern: "S-Vt-OD",
    concepts: [
      {
        name: "Vt = Verbo Transitivo",
        icon: "➡️",
        definition: "Es un verbo cuya acción TRANSITA (pasa) del sujeto hacia un objeto. La acción NO se queda en el sujeto; IMPACTA a algo más.",
        tip: "Prueba: Di el Sujeto y el Verbo y pregunta ¿QUÉ? o ¿A QUIÉN? Si hay respuesta en la oración, es transitivo.",
        types: [
          { term: "Verbos transitivos comunes", desc: "comer, beber, leer, escribir, ver, comprar, hacer, tener, querer" }
        ]
      },
      {
        name: "OD = Objeto Directo",
        icon: "🎯",
        definition: "Es quien RECIBE directamente la acción del verbo. Es el 'golpe' de la acción.",
        tip: "Pregunta: ¿Qué + verbo + sujeto? o ¿A quién + verbo + sujeto?",
        example: { sentence: "Juan come pizza.", question: "¿Qué come Juan?", answer: "pizza = OD" }
      },
      {
        name: "Propósito Imperativo",
        icon: "👆",
        definition: "Da una ORDEN o MANDATO. El sujeto (Tú/Usted) suele ser tácito (no está escrito).",
        example: { sentence: "¡Lava los platos!", explanation: "El sujeto (Tú) está implícito" }
      },
      {
        name: "Intransitivo vs Transitivo",
        icon: "⚖️",
        definition: "La diferencia clave es si la acción PASA a algo o no.",
        types: [
          { term: "Intransitivo", desc: "La acción NO pasa", example: "El pájaro vuela. (¿Vuela qué? Nada)" },
          { term: "Transitivo", desc: "La acción SÍ pasa", example: "Juan come pizza. (¿Come qué? Pizza)" }
        ]
      }
    ],
    examples: [
      {
        sentence: "¡Lava el plato!",
        analysis: {
          pattern: "S-Vt-OD",
          subject: "(Tú) - tácito",
          verb: "Lava",
          directObject: "el plato",
          purpose: "Imperativo"
        },
        explanation: "¿Lava qué? → El plato. Hay respuesta, entonces es Transitivo. El sujeto 'Tú' está implícito porque es una orden."
      },
      {
        sentence: "María lee un libro.",
        analysis: {
          pattern: "S-Vt-OD",
          subject: "María",
          verb: "lee",
          directObject: "un libro",
          purpose: "Declarativo"
        },
        explanation: "¿Lee qué? → un libro. La acción de leer pasa al libro."
      },
      {
        sentence: "El niño come una manzana.",
        analysis: {
          pattern: "S-Vt-OD",
          subject: "El niño",
          verb: "come",
          directObject: "una manzana"
        },
        explanation: "¿Come qué? → una manzana. 'Comer' es transitivo porque requiere algo que se come."
      }
    ],
    practice: [
      { sentence: "¡Lava el plato!", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A"], correct: "S-Vt-OD" },
      { sentence: "¡Lava el plato!", q: "directObject", options: ["Lava", "el plato", "(Tú)", "¡Lava!"], correct: "el plato" },
      { sentence: "¡Lava el plato!", q: "purpose", options: ["Declarativo", "Interrogativo", "Imperativo", "Exclamativo"], correct: "Imperativo" },
      { sentence: "María lee un libro.", q: "verb", options: ["María", "lee", "un libro", "libro"], correct: "lee" },
      { sentence: "María lee un libro.", q: "directObject", options: ["María", "lee", "un libro", "libro"], correct: "un libro" },
      { sentence: "El perro come carne.", q: "verbType", options: ["Intransitivo", "Transitivo", "Copulativo"], correct: "Transitivo" },
      { sentence: "¡Cierra la puerta!", q: "subject", options: ["Cierra", "la puerta", "(Tú)", "¡Cierra!"], correct: "(Tú)" },
      { sentence: "Nosotros vemos la película.", q: "directObject", options: ["Nosotros", "vemos", "la película", "película"], correct: "la película" },
      { sentence: "El bebé llora.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A"], correct: "S-Vi" },
      { sentence: "Ana compra flores.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A"], correct: "S-Vt-OD" }
    ]
  },

  // ==========================================
  // WEEK 6: S-Vt-OD + Dubitative + Adverbs
  // ==========================================
  6: {
    title: "S-Vt-OD + Propósito Dubitativo y Adverbios",
    subtitle: "Añadimos duda y modificadores al verbo",
    pattern: "S-Vt-OD",
    concepts: [
      {
        name: "Propósito Dubitativo",
        icon: "🤔",
        definition: "Expresa DUDA, probabilidad o incertidumbre sobre algo.",
        tip: "Palabras clave: quizás, tal vez, probablemente, acaso, posiblemente",
        types: [
          { term: "Quizás", example: "Quizás Juan venga mañana." },
          { term: "Tal vez", example: "Tal vez llueva hoy." },
          { term: "Probablemente", example: "Probablemente ella estudie." }
        ]
      },
      {
        name: "Adverbio",
        icon: "📍",
        definition: "Palabras que MODIFICAN al verbo. Te dicen CÓMO, CUÁNDO, DÓNDE o CUÁNTO ocurre la acción.",
        types: [
          { term: "De modo (¿Cómo?)", desc: "Describen la manera", example: "rápidamente, lentamente, bien, mal" },
          { term: "De tiempo (¿Cuándo?)", desc: "Indican momento", example: "hoy, ayer, mañana, ahora, siempre" },
          { term: "De lugar (¿Dónde?)", desc: "Indican ubicación", example: "aquí, allí, cerca, lejos, arriba" },
          { term: "De cantidad (¿Cuánto?)", desc: "Indican intensidad", example: "mucho, poco, muy, bastante" },
          { term: "De duda", desc: "Expresan incertidumbre", example: "quizás, tal vez, probablemente" }
        ]
      },
      {
        name: "El adverbio NO es el OD",
        icon: "⚠️",
        definition: "El adverbio modifica al verbo pero NO es el objeto directo.",
        example: { sentence: "Juan come pizza rápidamente.", od: "pizza", adverb: "rápidamente", explanation: "El OD es 'pizza' (¿qué come?). 'Rápidamente' es adverbio (¿cómo come?)." }
      }
    ],
    examples: [
      {
        sentence: "Quizás Juan compre hoy pan.",
        analysis: {
          pattern: "S-Vt-OD",
          subject: "Juan",
          verb: "compre",
          directObject: "pan",
          purpose: "Dubitativo",
          adverbs: ["Quizás (duda)", "hoy (tiempo)"]
        },
        explanation: "¿Compre qué? → pan (OD). 'Quizás' indica duda. 'Hoy' indica cuándo."
      },
      {
        sentence: "Tal vez María escriba la carta mañana.",
        analysis: {
          pattern: "S-Vt-OD",
          subject: "María",
          verb: "escriba",
          directObject: "la carta",
          purpose: "Dubitativo",
          adverbs: ["Tal vez (duda)", "mañana (tiempo)"]
        },
        explanation: "La duda se expresa con 'Tal vez'. El adverbio 'mañana' indica cuándo."
      },
      {
        sentence: "El niño come lentamente su comida.",
        analysis: {
          pattern: "S-Vt-OD",
          subject: "El niño",
          verb: "come",
          directObject: "su comida",
          adverbs: ["lentamente (modo)"]
        },
        explanation: "'Lentamente' nos dice CÓMO come. El OD es 'su comida' (¿qué come?)."
      }
    ],
    practice: [
      { sentence: "Quizás Juan compre pan.", q: "purpose", options: ["Declarativo", "Dubitativo", "Desiderativo", "Imperativo"], correct: "Dubitativo" },
      { sentence: "Quizás Juan compre pan.", q: "directObject", options: ["Juan", "compre", "pan", "Quizás"], correct: "pan" },
      { sentence: "María lee rápidamente.", q: "adverb", options: ["María", "lee", "rápidamente"], correct: "rápidamente" },
      { sentence: "María lee rápidamente.", q: "adverbType", options: ["Modo", "Tiempo", "Lugar", "Cantidad"], correct: "Modo" },
      { sentence: "Ayer comí pizza.", q: "adverb", options: ["Ayer", "comí", "pizza"], correct: "Ayer" },
      { sentence: "Ayer comí pizza.", q: "adverbType", options: ["Modo", "Tiempo", "Lugar", "Cantidad"], correct: "Tiempo" },
      { sentence: "El gato duerme aquí.", q: "adverbType", options: ["Modo", "Tiempo", "Lugar", "Cantidad"], correct: "Lugar" },
      { sentence: "Probablemente ella venga.", q: "purpose", options: ["Declarativo", "Dubitativo", "Desiderativo", "Imperativo"], correct: "Dubitativo" },
      { sentence: "Como mucho arroz.", q: "adverbType", options: ["Modo", "Tiempo", "Lugar", "Cantidad"], correct: "Cantidad" },
      { sentence: "Tal vez llueva hoy.", q: "adverbCount", options: ["1", "2", "3"], correct: "2" }
    ]
  },

  // ==========================================
  // WEEK 7: Pattern S-Vc-A
  // ==========================================
  7: {
    title: "Patrón S-Vc-A (Sujeto - Verbo Copulativo - Atributo)",
    subtitle: "Dejamos los verbos de acción y pasamos a verbos de estado",
    pattern: "S-Vc-A",
    concepts: [
      {
        name: "Vc = Verbo Copulativo",
        icon: "🔗",
        definition: "Son verbos que sirven de PUENTE o CÓPULA (unión). NO indican acción, sino que el sujeto ES o ESTÁ de cierta manera.",
        tip: "Prueba: Si puedes sustituir el verbo por un signo IGUAL (=), es copulativo.",
        types: [
          { term: "SER", desc: "Características permanentes o esenciales", example: "Juan ES alto." },
          { term: "ESTAR", desc: "Estados temporales o condiciones", example: "Juan ESTÁ cansado." },
          { term: "PARECER", desc: "Apariencia", example: "Juan PARECE feliz." }
        ]
      },
      {
        name: "A = Atributo",
        icon: "🏷️",
        definition: "Es la palabra que viene después del verbo copulativo y nos dice una CUALIDAD o ESTADO del sujeto.",
        tip: "Pregunta: ¿Cómo es? o ¿Qué es? el sujeto.",
        example: { sentence: "El cielo es azul.", question: "¿Cómo es el cielo?", answer: "azul = Atributo" }
      },
      {
        name: "Adjetivo",
        icon: "🎨",
        definition: "Palabras que DESCRIBEN o MODIFICAN al sustantivo. Nos dicen color, tamaño, forma, personalidad, etc.",
        types: [
          { term: "Calificativos", example: "grande, pequeño, rojo, hermoso, inteligente" },
          { term: "En el patrón S-Vc-A", desc: "El adjetivo funciona como ATRIBUTO" }
        ]
      },
      {
        name: "Diferencia clave",
        icon: "⚖️",
        definition: "En S-Vt-OD la acción PASA a algo. En S-Vc-A el verbo solo CONECTA sujeto con atributo.",
        types: [
          { term: "S-Vt-OD", example: "Juan come pizza. (La acción pasa a pizza)" },
          { term: "S-Vc-A", example: "Juan es alto. (No hay acción, solo descripción)" }
        ]
      }
    ],
    examples: [
      {
        sentence: "El cielo es azul.",
        analysis: {
          pattern: "S-Vc-A",
          subject: "El cielo",
          verb: "es",
          attribute: "azul",
          verbType: "Copulativo (SER)"
        },
        explanation: "El cielo = azul. El verbo 'es' solo conecta. 'Azul' es el atributo que describe al cielo."
      },
      {
        sentence: "María está cansada.",
        analysis: {
          pattern: "S-Vc-A",
          subject: "María",
          verb: "está",
          attribute: "cansada",
          verbType: "Copulativo (ESTAR)"
        },
        explanation: "María = cansada (temporalmente). 'Está' indica estado, 'cansada' es el atributo."
      },
      {
        sentence: "Ojalá el cielo sea azul.",
        analysis: {
          pattern: "S-Vc-A",
          subject: "el cielo",
          verb: "sea",
          attribute: "azul",
          purpose: "Desiderativo"
        },
        explanation: "'Ojalá' indica deseo (propósito desiderativo). El patrón sigue siendo S-Vc-A."
      }
    ],
    practice: [
      { sentence: "El cielo es azul.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A"], correct: "S-Vc-A" },
      { sentence: "El cielo es azul.", q: "attribute", options: ["El cielo", "es", "azul"], correct: "azul" },
      { sentence: "El cielo es azul.", q: "verbType", options: ["Intransitivo", "Transitivo", "Copulativo"], correct: "Copulativo" },
      { sentence: "La sopa está caliente.", q: "verb", options: ["La sopa", "está", "caliente"], correct: "está" },
      { sentence: "La sopa está caliente.", q: "attribute", options: ["La sopa", "está", "caliente"], correct: "caliente" },
      { sentence: "Tú pareces feliz.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A"], correct: "S-Vc-A" },
      { sentence: "El perro es grande.", q: "copVerb", options: ["SER", "ESTAR", "PARECER"], correct: "SER" },
      { sentence: "Ella está triste.", q: "copVerb", options: ["SER", "ESTAR", "PARECER"], correct: "ESTAR" },
      { sentence: "Juan come pizza.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A"], correct: "S-Vt-OD" },
      { sentence: "El libro es interesante.", q: "subject", options: ["El libro", "es", "interesante"], correct: "El libro" }
    ]
  },

  // ==========================================
  // WEEK 8: Compound Coordinated Structure
  // ==========================================
  8: {
    title: "Estructura Compuesta Coordinada",
    subtitle: "Aprendemos a SUMAR oraciones",
    pattern: "Coordinada",
    concepts: [
      {
        name: "Estructura Compuesta",
        icon: "➕",
        definition: "Ya no tenemos UNA sola oración, sino DOS (o más) unidas.",
        tip: "Piensa en vagones de tren unidos por un gancho."
      },
      {
        name: "Coordinada",
        icon: "⚖️",
        definition: "Ambas partes tienen la MISMA importancia. Ninguna DEPENDE de la otra. Son 'hermanas'.",
        tip: "Prueba: Si separas las oraciones, AMBAS tienen sentido completo por sí solas."
      },
      {
        name: "Cláusula Independiente",
        icon: "🔲",
        definition: "Una oración que tiene sentido COMPLETO por sí sola. Tiene su propio Sujeto + Verbo.",
        example: { sentence: "Juan corre.", explanation: "Tiene sentido completo = cláusula independiente" }
      },
      {
        name: "Conjunciones Coordinantes",
        icon: "🔗",
        definition: "Son los 'ganchos' o NEXOS que unen las oraciones coordinadas.",
        types: [
          { term: "Copulativas (suman)", example: "y, e, ni" },
          { term: "Disyuntivas (elegir)", example: "o, u" },
          { term: "Adversativas (contraste)", example: "pero, mas, sino, sin embargo" }
        ]
      }
    ],
    examples: [
      {
        sentence: "Juan corre y Ana lee.",
        analysis: {
          structure: "Compuesta Coordinada",
          clause1: "Juan corre (S-Vi)",
          conjunction: "y",
          clause2: "Ana lee (S-Vi)",
          conjunctionType: "Copulativa"
        },
        explanation: "Si quitas la 'y', tienes dos oraciones que funcionan perfectamente solas. Eso es coordinación."
      },
      {
        sentence: "Quiero ir pero estoy cansado.",
        analysis: {
          structure: "Compuesta Coordinada",
          clause1: "Quiero ir",
          conjunction: "pero",
          clause2: "estoy cansado",
          conjunctionType: "Adversativa"
        },
        explanation: "'Pero' une dos ideas que contrastan. Ambas cláusulas son independientes."
      },
      {
        sentence: "¿Vienes o te quedas?",
        analysis: {
          structure: "Compuesta Coordinada",
          clause1: "Vienes",
          conjunction: "o",
          clause2: "te quedas",
          conjunctionType: "Disyuntiva"
        },
        explanation: "'O' presenta una elección entre dos opciones."
      }
    ],
    practice: [
      { sentence: "Juan corre y Ana lee.", q: "structure", options: ["Simple", "Compuesta Coordinada", "Compuesta Subordinada"], correct: "Compuesta Coordinada" },
      { sentence: "Juan corre y Ana lee.", q: "conjunction", options: ["Juan", "corre", "y", "Ana"], correct: "y" },
      { sentence: "Juan corre y Ana lee.", q: "conjunctionType", options: ["Copulativa", "Disyuntiva", "Adversativa"], correct: "Copulativa" },
      { sentence: "Llueve pero salgo.", q: "conjunction", options: ["Llueve", "pero", "salgo"], correct: "pero" },
      { sentence: "Llueve pero salgo.", q: "conjunctionType", options: ["Copulativa", "Disyuntiva", "Adversativa"], correct: "Adversativa" },
      { sentence: "¿Estudias o juegas?", q: "conjunctionType", options: ["Copulativa", "Disyuntiva", "Adversativa"], correct: "Disyuntiva" },
      { sentence: "El perro ladra.", q: "structure", options: ["Simple", "Compuesta Coordinada", "Compuesta Subordinada"], correct: "Simple" },
      { sentence: "No como ni bebo.", q: "conjunction", options: ["No", "como", "ni", "bebo"], correct: "ni" },
      { sentence: "María canta y Pedro baila.", q: "clauseCount", options: ["1", "2", "3"], correct: "2" },
      { sentence: "Es tarde, sin embargo voy.", q: "conjunctionType", options: ["Copulativa", "Disyuntiva", "Adversativa"], correct: "Adversativa" }
    ]
  },

  // Continue with weeks 9-24...
  // (I'll add them in the next part due to length)
};

// Export for use
if (typeof module !== 'undefined') module.exports = ESSENTIALS_DATA;

// ==========================================
// WEEKS 9-12: Advanced Patterns
// ==========================================

ESSENTIALS_DATA[9] = {
  title: "Patrón S-Vt-OD-OI (Objeto Indirecto)",
  subtitle: "¿Quién se beneficia de la acción?",
  pattern: "S-Vt-OD-OI",
  concepts: [
    {
      name: "OI = Objeto Indirecto",
      icon: "🎁",
      definition: "Es la persona (o cosa) que RECIBE el Objeto Directo. Es el DESTINATARIO final de la acción.",
      tip: "Pregunta: ¿A QUIÉN? o ¿PARA QUIÉN? se realiza la acción. Siempre va con preposición 'a' o 'para'.",
      example: { sentence: "Juan da flores a María.", question: "¿A quién da las flores?", answer: "a María = OI" }
    },
    {
      name: "Preposiciones",
      icon: "🔗",
      definition: "Palabras que RELACIONAN elementos. El OI suele usar 'a' o 'para'.",
      types: [
        { term: "Lista común", example: "a, ante, bajo, con, contra, de, desde, en, entre, hacia, hasta, para, por, según, sin, sobre, tras" }
      ]
    },
    {
      name: "Diferencia OD vs OI",
      icon: "⚖️",
      definition: "OD recibe la acción directamente. OI recibe el beneficio de esa acción.",
      example: { sentence: "María entrega la carta a Juan.", od: "la carta (¿Qué entrega?)", oi: "a Juan (¿A quién la entrega?)" }
    },
    {
      name: "Interjecciones",
      icon: "😮",
      definition: "Expresiones de impresión súbita o emoción.",
      types: [
        { term: "Ejemplos", example: "¡Ay!, ¡Oh!, ¡Uy!, ¡Vaya!, ¡Caramba!" }
      ]
    }
  ],
  examples: [
    {
      sentence: "El cartero entregó la carta a mamá.",
      analysis: {
        pattern: "S-Vt-OD-OI",
        subject: "El cartero",
        verb: "entregó",
        directObject: "la carta",
        indirectObject: "a mamá"
      },
      explanation: "¿Qué entregó? → la carta (OD). ¿A quién se la entregó? → a mamá (OI)."
    },
    {
      sentence: "Compré un regalo para mi hermana.",
      analysis: {
        pattern: "S-Vt-OD-OI",
        subject: "(Yo)",
        verb: "Compré",
        directObject: "un regalo",
        indirectObject: "para mi hermana"
      },
      explanation: "¿Qué compré? → un regalo (OD). ¿Para quién? → para mi hermana (OI)."
    }
  ],
  practice: [
    { sentence: "Juan da flores a María.", q: "directObject", options: ["Juan", "flores", "a María", "da"], correct: "flores" },
    { sentence: "Juan da flores a María.", q: "indirectObject", options: ["Juan", "flores", "a María", "da"], correct: "a María" },
    { sentence: "Juan da flores a María.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vt-OD-OI"], correct: "S-Vt-OD-OI" },
    { sentence: "Escribí una carta a mi abuela.", q: "indirectObject", options: ["una carta", "a mi abuela", "Escribí", "(Yo)"], correct: "a mi abuela" },
    { sentence: "El profesor explica la lección a los estudiantes.", q: "directObject", options: ["El profesor", "la lección", "a los estudiantes", "explica"], correct: "la lección" },
    { sentence: "Mamá prepara comida para nosotros.", q: "indirectObject", options: ["Mamá", "comida", "para nosotros", "prepara"], correct: "para nosotros" },
    { sentence: "¡Ay! Me duele la cabeza.", q: "interjection", options: ["¡Ay!", "Me", "duele", "la cabeza"], correct: "¡Ay!" },
    { sentence: "Envié un mensaje a Pedro.", q: "preposition", options: ["Envié", "un", "mensaje", "a"], correct: "a" }
  ]
};

ESSENTIALS_DATA[10] = {
  title: "Repaso con Propósito Imperativo",
  subtitle: "Consolidación - Órdenes con objetos directos e indirectos",
  pattern: "S-Vt-OD-OI",
  concepts: [
    {
      name: "Imperativo con OD y OI",
      icon: "👆",
      definition: "Cuando damos órdenes, el sujeto (Tú/Usted) suele ser tácito, pero los objetos siguen presentes.",
      example: { sentence: "¡Dale el libro a tu hermano!", subject: "(Tú)", od: "el libro", oi: "a tu hermano" }
    },
    {
      name: "Identificar todas las partes",
      icon: "🔍",
      definition: "En una oración compleja, debemos identificar: Sujeto, Verbo, OD, OI, y cualquier modificador.",
      tip: "Pregunta sistemáticamente: ¿Quién? (S), ¿Qué hace? (V), ¿Qué? (OD), ¿A quién/Para quién? (OI)"
    }
  ],
  examples: [
    {
      sentence: "Escribe una carta a tu abuela.",
      analysis: {
        pattern: "S-Vt-OD-OI",
        subject: "(Tú) - tácito",
        verb: "Escribe",
        directObject: "una carta",
        indirectObject: "a tu abuela",
        purpose: "Imperativo"
      },
      explanation: "Es una orden. ¿Qué debes escribir? → una carta. ¿A quién va dirigida? → a tu abuela."
    },
    {
      sentence: "¡Pásame la sal!",
      analysis: {
        pattern: "S-Vt-OD-OI",
        subject: "(Tú)",
        verb: "Pasa",
        directObject: "la sal",
        indirectObject: "me (a mí)"
      },
      explanation: "'Me' es el pronombre de OI. ¿Qué pasa? → la sal. ¿A quién? → a mí."
    }
  ],
  practice: [
    { sentence: "Escribe una carta a tu abuela.", q: "purpose", options: ["Declarativo", "Interrogativo", "Imperativo", "Exclamativo"], correct: "Imperativo" },
    { sentence: "Escribe una carta a tu abuela.", q: "subject", options: ["Escribe", "una carta", "a tu abuela", "(Tú)"], correct: "(Tú)" },
    { sentence: "Dame el libro.", q: "directObject", options: ["Dame", "el libro", "me", "(Tú)"], correct: "el libro" },
    { sentence: "Dame el libro.", q: "indirectObject", options: ["Dame", "el libro", "me", "(Tú)"], correct: "me" },
    { sentence: "Trae agua para mamá.", q: "indirectObject", options: ["Trae", "agua", "para mamá", "(Tú)"], correct: "para mamá" },
    { sentence: "Cuéntale la historia al niño.", q: "directObject", options: ["Cuéntale", "la historia", "al niño", "le"], correct: "la historia" }
  ]
};

ESSENTIALS_DATA[11] = {
  title: "Patrón S-Vprep-ORég (Verbo Prepositivo)",
  subtitle: "Verbos que EXIGEN una preposición específica",
  pattern: "S-Vprep-ORég",
  concepts: [
    {
      name: "Vprep = Verbo Prepositivo",
      icon: "🔐",
      definition: "Son verbos que EXIGEN una preposición específica para tener sentido. No puedes usar el verbo sin esa preposición.",
      types: [
        { term: "Confiar EN", example: "Yo confío en ti." },
        { term: "Soñar CON", example: "Sueño con viajar." },
        { term: "Pensar EN", example: "Pienso en mi familia." },
        { term: "Hablar DE", example: "Hablamos de política." },
        { term: "Arrepentirse DE", example: "Me arrepiento de eso." }
      ]
    },
    {
      name: "ORég = Objeto de Régimen",
      icon: "📎",
      definition: "Es la parte que sigue a la preposición. El verbo 'rige' (manda) que esa preposición esté ahí.",
      tip: "A diferencia del OD, si quitas la preposición, la frase suena MAL.",
      example: { wrong: "Yo confío tú", correct: "Yo confío EN ti", explanation: "La preposición 'en' es obligatoria." }
    },
    {
      name: "Primera Conjugación (-ar)",
      icon: "1️⃣",
      definition: "Verbos terminados en -AR: amar, cantar, bailar, estudiar, hablar, pensar, soñar, confiar",
      tip: "Son los verbos más comunes en español."
    }
  ],
  examples: [
    {
      sentence: "El estudiante piensa en su tarea.",
      analysis: {
        pattern: "S-Vprep-ORég",
        subject: "El estudiante",
        verb: "piensa",
        preposition: "en",
        regimenObject: "su tarea"
      },
      explanation: "NO dices 'piensa la tarea'. Dices 'piensa EN la tarea'. La preposición es obligatoria."
    },
    {
      sentence: "Confío en mis amigos.",
      analysis: {
        pattern: "S-Vprep-ORég",
        subject: "(Yo)",
        verb: "Confío",
        preposition: "en",
        regimenObject: "mis amigos"
      },
      explanation: "'Confiar' siempre pide 'en'. No puedes decir 'confío mis amigos'."
    }
  ],
  practice: [
    { sentence: "Pienso en mi familia.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vprep-ORég"], correct: "S-Vprep-ORég" },
    { sentence: "Pienso en mi familia.", q: "preposition", options: ["Pienso", "en", "mi", "familia"], correct: "en" },
    { sentence: "Sueño con viajar.", q: "regimenObject", options: ["Sueño", "con", "viajar", "con viajar"], correct: "viajar" },
    { sentence: "Hablamos de política.", q: "preposition", options: ["Hablamos", "de", "política"], correct: "de" },
    { sentence: "Me arrepiento de mis errores.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vprep-ORég"], correct: "S-Vprep-ORég" },
    { sentence: "Juan come pizza.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vprep-ORég"], correct: "S-Vt-OD" },
    { sentence: "Confío en ti.", q: "regimenObject", options: ["Confío", "en", "ti", "en ti"], correct: "ti" }
  ]
};

ESSENTIALS_DATA[12] = {
  title: "Conjugaciones (-er, -ir) y Modo Subjuntivo",
  subtitle: "El modo de la 'no-realidad'",
  pattern: "Subjuntivo",
  concepts: [
    {
      name: "Segunda Conjugación (-er)",
      icon: "2️⃣",
      definition: "Verbos terminados en -ER: comer, beber, leer, correr, tener, hacer, ver"
    },
    {
      name: "Tercera Conjugación (-ir)",
      icon: "3️⃣",
      definition: "Verbos terminados en -IR: vivir, escribir, dormir, salir, ir, decir, sentir"
    },
    {
      name: "Modo Indicativo vs Subjuntivo",
      icon: "🔀",
      definition: "El INDICATIVO habla de la REALIDAD (hechos). El SUBJUNTIVO habla de deseos, dudas, probabilidades o situaciones hipotéticas.",
      types: [
        { term: "Indicativo", desc: "Hechos reales", example: "Yo como (es real, está pasando)" },
        { term: "Subjuntivo", desc: "No-realidad", example: "Ojalá yo coma (es un deseo, no es real todavía)" }
      ],
      tip: "Truco: Pon 'OJALÁ' antes del verbo. Si encaja, está en subjuntivo."
    },
    {
      name: "Propósitos que usan Subjuntivo",
      icon: "🎯",
      definition: "Desiderativo (deseo) y Dubitativo (duda) 'aman' el modo subjuntivo.",
      types: [
        { term: "Desiderativo", example: "¡Ojalá ganemos!" },
        { term: "Dubitativo", example: "Tal vez vayamos." }
      ]
    }
  ],
  examples: [
    {
      sentence: "Ojalá Juan coma bien.",
      analysis: {
        subject: "Juan",
        verb: "coma",
        mode: "Subjuntivo",
        purpose: "Desiderativo"
      },
      explanation: "'Coma' es subjuntivo (deseo). Indicativo sería 'Juan come' (hecho real)."
    },
    {
      sentence: "Tal vez María escriba la carta.",
      analysis: {
        subject: "María",
        verb: "escriba",
        mode: "Subjuntivo",
        purpose: "Dubitativo"
      },
      explanation: "'Escriba' es subjuntivo porque hay duda. Indicativo sería 'María escribe'."
    }
  ],
  practice: [
    { sentence: "Ojalá llueva mañana.", q: "mode", options: ["Indicativo", "Subjuntivo"], correct: "Subjuntivo" },
    { sentence: "Ojalá llueva mañana.", q: "purpose", options: ["Declarativo", "Desiderativo", "Dubitativo", "Imperativo"], correct: "Desiderativo" },
    { sentence: "María come pizza.", q: "mode", options: ["Indicativo", "Subjuntivo"], correct: "Indicativo" },
    { sentence: "Tal vez venga Pedro.", q: "mode", options: ["Indicativo", "Subjuntivo"], correct: "Subjuntivo" },
    { sentence: "Tal vez venga Pedro.", q: "purpose", options: ["Declarativo", "Desiderativo", "Dubitativo", "Imperativo"], correct: "Dubitativo" },
    { sentence: "Quiero que estudies.", q: "verbMode", options: ["estudies = Indicativo", "estudies = Subjuntivo"], correct: "estudies = Subjuntivo" },
    { sentence: "comer", q: "conjugation", options: ["Primera (-ar)", "Segunda (-er)", "Tercera (-ir)"], correct: "Segunda (-er)" },
    { sentence: "vivir", q: "conjugation", options: ["Primera (-ar)", "Segunda (-er)", "Tercera (-ir)"], correct: "Tercera (-ir)" }
  ]
};

// ==========================================
// WEEKS 13-18: Complex Structures
// ==========================================

ESSENTIALS_DATA[13] = {
  title: "Estructura Subordinada y Patrón S-Vp-CPS",
  subtitle: "La relación de 'madre e hija' entre oraciones",
  pattern: "S-Vp-CPS",
  concepts: [
    {
      name: "Estructura Compuesta Subordinada",
      icon: "👩‍👧",
      definition: "Una oración DEPENDE de la otra. La 'hija' no tiene sentido sin la 'madre'.",
      types: [
        { term: "Cláusula Principal (Madre)", desc: "Tiene sentido por sí sola" },
        { term: "Cláusula Subordinada (Hija)", desc: "NO tiene sentido si la separas. Depende de la principal." }
      ],
      tip: "Nexos de subordinación: que, cuando, donde, porque, quien, aunque"
    },
    {
      name: "Vp = Verbo Predicativo",
      icon: "🏃",
      definition: "Es cualquier verbo 'normal' de ACCIÓN (correr, llegar, dormir). NO es copulativo (no es ser/estar)."
    },
    {
      name: "CPS = Complemento Predicativo del Sujeto",
      icon: "🏷️",
      definition: "Es un adjetivo que hace DOS cosas: describe al SUJETO y complementa la acción del VERBO.",
      tip: "Pregunta: ¿CÓMO realiza la acción? Si la respuesta es un adjetivo que concuerda con el sujeto, es CPS.",
      example: { sentence: "El atleta llegó agotado.", question: "¿Cómo llegó?", answer: "agotado (describe al atleta mientras llega)" }
    },
    {
      name: "Diferencia: Atributo vs CPS",
      icon: "⚖️",
      types: [
        { term: "Atributo (S-Vc-A)", desc: "Verbo copulativo (ser/estar)", example: "Juan ES alto." },
        { term: "CPS (S-Vp-CPS)", desc: "Verbo de acción", example: "Juan llegó cansado." }
      ]
    }
  ],
  examples: [
    {
      sentence: "El atleta llegó agotado porque corrió mucho.",
      analysis: {
        structure: "Compuesta Subordinada",
        mainClause: "El atleta llegó agotado (S-Vp-CPS)",
        subordinate: "porque corrió mucho (Causal)",
        subject: "El atleta",
        verb: "llegó",
        cps: "agotado"
      },
      explanation: "'Agotado' describe al atleta mientras llega. La subordinada explica la causa."
    },
    {
      sentence: "El agua baja turbia.",
      analysis: {
        pattern: "S-Vp-CPS",
        subject: "El agua",
        verb: "baja",
        cps: "turbia"
      },
      explanation: "'Turbia' describe al agua. Si fuera 'El río', sería 'turbio' (concuerda con el sujeto)."
    }
  ],
  practice: [
    { sentence: "El atleta llegó agotado.", q: "pattern", options: ["S-Vi", "S-Vc-A", "S-Vp-CPS"], correct: "S-Vp-CPS" },
    { sentence: "El atleta llegó agotado.", q: "cps", options: ["El atleta", "llegó", "agotado"], correct: "agotado" },
    { sentence: "Juan está cansado.", q: "pattern", options: ["S-Vi", "S-Vc-A", "S-Vp-CPS"], correct: "S-Vc-A" },
    { sentence: "La niña volvió feliz.", q: "pattern", options: ["S-Vi", "S-Vc-A", "S-Vp-CPS"], correct: "S-Vp-CPS" },
    { sentence: "Yo como cuando tengo hambre.", q: "structure", options: ["Simple", "Compuesta Coordinada", "Compuesta Subordinada"], correct: "Compuesta Subordinada" },
    { sentence: "Yo como cuando tengo hambre.", q: "subordinateType", options: ["Principal", "Subordinada"], correct: "Subordinada" },
    { sentence: "El agua corre cristalina.", q: "cps", options: ["El agua", "corre", "cristalina"], correct: "cristalina" }
  ]
};

ESSENTIALS_DATA[14] = {
  title: "Modo y Voz",
  subtitle: "¿Quién realiza la acción?",
  pattern: "Voz",
  concepts: [
    {
      name: "Voz Activa",
      icon: "➡️",
      definition: "El SUJETO hace la acción. El sujeto es el 'actor'.",
      example: { sentence: "Juan come la manzana.", explanation: "Juan (sujeto) hace la acción de comer." }
    },
    {
      name: "Voz Pasiva",
      icon: "⬅️",
      definition: "El SUJETO recibe la acción. El sujeto es el 'paciente'.",
      tip: "Formación: Verbo SER + Participio (-ado/-ido)",
      example: { sentence: "La manzana es comida por Juan.", explanation: "La manzana (sujeto) recibe la acción." }
    },
    {
      name: "Transformación Activa → Pasiva",
      icon: "🔄",
      types: [
        { term: "Activa", example: "El perro (S) mordió (V) el hueso (OD)." },
        { term: "Pasiva", example: "El hueso (S) fue mordido (V) por el perro (Agente)." }
      ],
      tip: "Lo que era OD se vuelve Sujeto. Lo que era Sujeto se vuelve 'Agente' (por + sustantivo)."
    }
  ],
  examples: [
    {
      sentence: "La carta fue escrita por María.",
      analysis: {
        voice: "Pasiva",
        subject: "La carta",
        verb: "fue escrita",
        agent: "por María"
      },
      explanation: "La carta RECIBE la acción de ser escrita. María es el agente que la escribió."
    },
    {
      sentence: "María escribió la carta.",
      analysis: {
        voice: "Activa",
        subject: "María",
        verb: "escribió",
        directObject: "la carta"
      },
      explanation: "María HACE la acción. Es voz activa."
    }
  ],
  practice: [
    { sentence: "Juan come pizza.", q: "voice", options: ["Activa", "Pasiva"], correct: "Activa" },
    { sentence: "La pizza es comida por Juan.", q: "voice", options: ["Activa", "Pasiva"], correct: "Pasiva" },
    { sentence: "La casa fue construida.", q: "voice", options: ["Activa", "Pasiva"], correct: "Pasiva" },
    { sentence: "El libro fue leído por María.", q: "agent", options: ["El libro", "fue leído", "por María"], correct: "por María" },
    { sentence: "La ventana fue rota.", q: "subject", options: ["La ventana", "fue", "rota"], correct: "La ventana" },
    { sentence: "Los niños cantan.", q: "voice", options: ["Activa", "Pasiva"], correct: "Activa" }
  ]
};

ESSENTIALS_DATA[15] = {
  title: "Patrón S-Vp-OD-CPO",
  subtitle: "El adjetivo describe al OBJETO, no al sujeto",
  pattern: "S-Vp-OD-CPO",
  concepts: [
    {
      name: "CPO = Complemento Predicativo del Objeto",
      icon: "🎯",
      definition: "Es un adjetivo que califica exclusivamente al OBJETO DIRECTO (no al sujeto).",
      tip: "Pregunta: ¿Quién tiene la cualidad? ¿El sujeto o el objeto? Si es el objeto → CPO",
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
    {
      sentence: "El juez declaró inocente al acusado.",
      analysis: {
        pattern: "S-Vp-OD-CPO",
        subject: "El juez",
        verb: "declaró",
        directObject: "al acusado",
        cpo: "inocente"
      },
      explanation: "¿Quién es inocente? ¿El juez o el acusado? EL ACUSADO (OD). Por tanto, 'inocente' es CPO."
    },
    {
      sentence: "Juan compró baratos los zapatos.",
      analysis: {
        pattern: "S-Vp-OD-CPO",
        subject: "Juan",
        verb: "compró",
        directObject: "los zapatos",
        cpo: "baratos"
      },
      explanation: "¿Quién es barato? ¿Juan o los zapatos? LOS ZAPATOS (OD). 'Baratos' es CPO."
    }
  ],
  practice: [
    { sentence: "El juez declaró inocente al acusado.", q: "cpo", options: ["El juez", "declaró", "inocente", "al acusado"], correct: "inocente" },
    { sentence: "Encontré vacía la casa.", q: "pattern", options: ["S-Vp-CPS", "S-Vp-OD-CPO", "S-Vc-A"], correct: "S-Vp-OD-CPO" },
    { sentence: "Encontré vacía la casa.", q: "directObject", options: ["Encontré", "vacía", "la casa"], correct: "la casa" },
    { sentence: "Considero interesante el libro.", q: "cpo", options: ["Considero", "interesante", "el libro"], correct: "interesante" },
    { sentence: "Juan llegó cansado.", q: "pattern", options: ["S-Vp-CPS", "S-Vp-OD-CPO", "S-Vc-A"], correct: "S-Vp-CPS" },
    { sentence: "Llamaron tonto a Pedro.", q: "directObject", options: ["Llamaron", "tonto", "a Pedro"], correct: "a Pedro" }
  ]
};

ESSENTIALS_DATA[16] = {
  title: "Imperativo con S-Vp-OD-CPO",
  subtitle: "Órdenes con predicativo del objeto",
  pattern: "S-Vp-OD-CPO",
  concepts: [
    {
      name: "CPO en Órdenes",
      icon: "👆",
      definition: "Cuando damos órdenes, a menudo describimos cómo queremos que quede el objeto.",
      example: { sentence: "¡Mantén limpia tu habitación!", explanation: "Queremos que la habitación (OD) esté limpia (CPO)" }
    }
  ],
  examples: [
    {
      sentence: "¡Mantén limpia tu habitación!",
      analysis: {
        pattern: "S-Vp-OD-CPO",
        subject: "(Tú) - tácito",
        verb: "Mantén",
        directObject: "tu habitación",
        cpo: "limpia",
        purpose: "Imperativo"
      },
      explanation: "'Limpia' describe a la habitación (OD), no a 'tú'. Es el estado deseado del objeto."
    },
    {
      sentence: "Deja abierta la puerta.",
      analysis: {
        pattern: "S-Vp-OD-CPO",
        subject: "(Tú)",
        verb: "Deja",
        directObject: "la puerta",
        cpo: "abierta"
      },
      explanation: "'Abierta' describe cómo debe quedar la puerta (OD)."
    }
  ],
  practice: [
    { sentence: "¡Mantén limpia tu habitación!", q: "directObject", options: ["Mantén", "limpia", "tu habitación"], correct: "tu habitación" },
    { sentence: "¡Mantén limpia tu habitación!", q: "cpo", options: ["Mantén", "limpia", "tu habitación"], correct: "limpia" },
    { sentence: "Deja cerrada la ventana.", q: "pattern", options: ["S-Vp-CPS", "S-Vp-OD-CPO", "S-Vc-A"], correct: "S-Vp-OD-CPO" },
    { sentence: "Pinta roja la pared.", q: "cpo", options: ["Pinta", "roja", "la pared"], correct: "roja" }
  ]
};

ESSENTIALS_DATA[17] = {
  title: "Voz Pasiva + Cláusulas Adverbiales",
  subtitle: "Transformaciones y subordinadas de tiempo/lugar/modo",
  pattern: "Voz Pasiva + Adverbiales",
  concepts: [
    {
      name: "Cláusulas Adverbiales",
      icon: "📍",
      definition: "Son oraciones subordinadas que funcionan como un ADVERBIO. Nos dicen cuándo, dónde, cómo o por qué.",
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
    {
      sentence: "La carta fue escrita mientras tú dormías.",
      analysis: {
        mainClause: "La carta fue escrita (Pasiva)",
        subordinate: "mientras tú dormías (Adverbial Temporal)",
        subordinateFunction: "Indica CUÁNDO fue escrita"
      },
      explanation: "La subordinada 'mientras tú dormías' funciona como adverbio de tiempo."
    }
  ],
  practice: [
    { sentence: "La carta fue escrita mientras dormías.", q: "subordinateType", options: ["Temporal", "Causal", "Condicional", "Modal"], correct: "Temporal" },
    { sentence: "Salí porque llovía.", q: "subordinateType", options: ["Temporal", "Causal", "Condicional", "Concesiva"], correct: "Causal" },
    { sentence: "Iré si me invitas.", q: "subordinateType", options: ["Temporal", "Causal", "Condicional", "Concesiva"], correct: "Condicional" },
    { sentence: "Trabajo donde vivo.", q: "subordinateType", options: ["Temporal", "Locativa", "Modal", "Causal"], correct: "Locativa" },
    { sentence: "Salí aunque llovía.", q: "subordinateType", options: ["Temporal", "Causal", "Condicional", "Concesiva"], correct: "Concesiva" }
  ]
};

ESSENTIALS_DATA[18] = {
  title: "Repaso del Trimestre",
  subtitle: "Integración de CPS, CPO, Voz y Subordinadas",
  pattern: "Integración",
  concepts: [
    {
      name: "Resumen de Diferencias",
      icon: "📋",
      types: [
        { term: "CPS", desc: "Adjetivo que describe al SUJETO con verbo de acción" },
        { term: "CPO", desc: "Adjetivo que describe al OBJETO DIRECTO" },
        { term: "Voz Activa", desc: "El sujeto HACE la acción" },
        { term: "Voz Pasiva", desc: "El sujeto RECIBE la acción" }
      ]
    }
  ],
  examples: [
    {
      sentence: "Ojalá consideres válida mi oferta aunque llegue tarde.",
      analysis: {
        structure: "Compuesta Subordinada",
        purpose: "Desiderativo",
        mainClause: "Ojalá consideres válida mi oferta (S-Vp-OD-CPO)",
        subordinate: "aunque llegue tarde (Concesiva)",
        subject: "(Tú)",
        verb: "consideres",
        directObject: "mi oferta",
        cpo: "válida"
      }
    }
  ],
  practice: [
    { sentence: "El niño llegó feliz.", q: "predicativeType", options: ["CPS", "CPO", "Atributo"], correct: "CPS" },
    { sentence: "Encontré rota la silla.", q: "predicativeType", options: ["CPS", "CPO", "Atributo"], correct: "CPO" },
    { sentence: "La silla está rota.", q: "predicativeType", options: ["CPS", "CPO", "Atributo"], correct: "Atributo" },
    { sentence: "La tarea fue hecha.", q: "voice", options: ["Activa", "Pasiva"], correct: "Pasiva" },
    { sentence: "Aunque llueva, saldré.", q: "subordinateType", options: ["Temporal", "Causal", "Condicional", "Concesiva"], correct: "Concesiva" }
  ]
};
)",
        verb: "Quiero",
        directObject: "comer (Infinitivo)",
        infinitiveFunction: "Objeto Directo"
      },
      explanation: "¿Qué quiero? → comer. El infinitivo funciona como OD."
    },
    {
      sentence: "Cantar alegra el alma.",
      analysis: {
        subject: "Cantar (Infinitivo)",
        verb: "alegra",
        directObject: "el alma"
      },
      explanation: "'Cantar' es el SUJETO. ¿Qué alegra el alma? Cantar."
    }
  ],
  practice: [
    { sentence: "comer", q: "verbForm", options: ["Infinitivo", "Participio", "Gerundio"], correct: "Infinitivo" },
    { sentence: "Caminar es bueno.", q: "infinitiveFunction", options: ["Sujeto", "Objeto Directo", "Adverbio"], correct: "Sujeto" },
    { sentence: "Quiero dormir.", q: "infinitiveFunction", options: ["Sujeto", "Objeto Directo", "Adverbio"], correct: "Objeto Directo" },
    { sentence: "Leer es importante.", q: "subject", options: ["Leer", "es", "importante"], correct: "Leer" },
    { sentence: "Prefiero estudiar.", q: "directObject", options: ["Prefiero", "estudiar", "(Yo)"], correct: "estudiar" }
  ]
};

ESSENTIALS_DATA[24] = {
  title: "La Gran Consolidación Final",
  subtitle: "¡Graduación! Análisis completo de oraciones complejas",
  pattern: "TODOS",
  concepts: [
    {
      name: "Análisis Integral",
      icon: "🎓",
      definition: "Aplicar TODAS las tareas analíticas a una oración compleja.",
      types: [
        { term: "Identificar", desc: "Estructura, Propósito, Patrón" },
        { term: "Analizar", desc: "S, V, OD, OI, CPS, CPO, ORég" },
        { term: "Clasificar", desc: "Cláusulas principales y subordinadas" },
        { term: "Reconocer", desc: "Formas no personales (Infinitivo, Participio, Gerundio)" }
      ]
    },
    {
      name: "Resumen de Patrones",
      icon: "📋",
      types: [
        { term: "S-Vi", desc: "Acción intransitiva" },
        { term: "S-Vt-OD", desc: "Acción transitiva" },
        { term: "S-Vt-OD-OI", desc: "Con destinatario" },
        { term: "S-Vc-A", desc: "Verbo copulativo" },
        { term: "S-Vprep-ORég", desc: "Verbo prepositivo" },
        { term: "S-Vp-CPS", desc: "Predicativo del sujeto" },
        { term: "S-Vp-OD-CPO", desc: "Predicativo del objeto" }
      ]
    }
  ],
  examples: [
    {
      sentence: "Cantar alegra el alma y, aunque llovía fuerte, los músicos siguieron tocando para el público emocionado.",
      analysis: {
        structure: "Compleja",
        clause1: {
          text: "Cantar alegra el alma",
          subject: "Cantar (Infinitivo Nominal)",
          verb: "alegra",
          directObject: "el alma"
        },
        conjunction: "y",
        subordinate: {
          text: "aunque llovía fuerte",
          type: "Concesiva"
        },
        clause2: {
          text: "los músicos siguieron tocando para el público emocionado",
          subject: "los músicos",
          verb: "siguieron tocando (Perífrasis con Gerundio)",
          indirectObject: "para el público emocionado",
          participle: "emocionado (modifica a público)"
        }
      },
      explanation: "Esta oración tiene: coordinación (y), subordinación (aunque), infinitivo nominal (Cantar), gerundio (tocando), y participio/adjetivo (emocionado)."
    }
  ],
  practice: [
    { sentence: "Cantar es divertido.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vc-A"], correct: "S-Vc-A" },
    { sentence: "Cantar es divertido.", q: "subject", options: ["Cantar", "es", "divertido"], correct: "Cantar" },
    { sentence: "Juan corre y María lee aunque llueva.", q: "structure", options: ["Simple", "Compuesta Coordinada", "Compuesta Subordinada", "Compleja"], correct: "Compleja" },
    { sentence: "El niño llegó llorando.", q: "verbForm", options: ["Infinitivo", "Participio", "Gerundio"], correct: "Gerundio" },
    { sentence: "La puerta cerrada está allí.", q: "verbForm", options: ["Infinitivo", "Participio", "Gerundio"], correct: "Participio" },
    { sentence: "Ojalá vengas.", q: "mode", options: ["Indicativo", "Subjuntivo"], correct: "Subjuntivo" },
    { sentence: "El libro fue leído.", q: "voice", options: ["Activa", "Pasiva"], correct: "Pasiva" },
    { sentence: "Pienso en ti.", q: "pattern", options: ["S-Vi", "S-Vt-OD", "S-Vprep-ORég"], correct: "S-Vprep-ORég" }
  ]
};

console.log('✨ Essentials Data loaded: 24 weeks of content');
