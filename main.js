// main.js

// 1. Global Variables
const cycleDataCache = {};
let username = "";
let currentCycle = "";
let currentWeek = "";
let currentTopic = "";
const topicsOrder = ["history", "science", "geography", "math", "english", "latin", "timeline", "finearts"];

let totalPoints = 0;
let badges = [];
let userProgress = [];
let studyTimer = null;
let quizEnabled = false; // flag to indicate quiz button can be enabled

// 2. Get DOM Elements
const loginSection = document.getElementById("loginSection");
const selectionSection = document.getElementById("selectionSection");
const studySection = document.getElementById("studySection");
const quizSection = document.getElementById("quizSection");
const progressSection = document.getElementById("progressSection");

const loginBtn = document.getElementById("loginBtn");
const startStudyBtn = document.getElementById("startStudyBtn");
const takeQuizBtn = document.getElementById("takeQuizBtn");
const nextTopicBtn = document.getElementById("nextTopicBtn");
const backBtn = document.getElementById("backBtn");
const submitQuizBtn = document.getElementById("submitQuizBtn");
const newSessionBtn = document.getElementById("newSessionBtn");

const studyContentElem = document.getElementById("studyContent");
const progressBar = document.getElementById("progressBar");
const timeDisplay = document.getElementById("timeDisplay");
const quizFeedback = document.getElementById("quizFeedback");
const totalPointsDisplay = document.getElementById("totalPoints");
const badgesEarnedDisplay = document.getElementById("badgesEarned");
const progressLog = document.getElementById("progressLog");

// 3. Lazy-load Cycle Data from GitHub
async function loadCycleData(cycleNumber) {
  if (cycleDataCache[cycleNumber]) {
    return cycleDataCache[cycleNumber];
  }
  const urlMap = {
    "1": "https://raw.githubusercontent.com/caamanoluismiguel/cc-cycles/refs/heads/main/Cycle_1.json",
    "2": "https://raw.githubusercontent.com/caamanoluismiguel/cc-cycles/refs/heads/main/Cycle_2.json",
    "3": "https://raw.githubusercontent.com/caamanoluismiguel/cc-cycles/refs/heads/main/Cycle_3.json"
  };
  const url = urlMap[cycleNumber];
  if (!url) {
    throw new Error(`No URL defined for cycle ${cycleNumber}`);
  }
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load cycle ${cycleNumber} data: ${response.status}`);
  }
  const data = await response.json();
  console.log(`Loaded cycle ${cycleNumber} data:`, data);
  cycleDataCache[cycleNumber] = data;
  return data;
}

// Utility: Map selected topic (lowercase) to JSON subject key.
function mapSubjectKey(topic) {
  if (topic === "finearts") return "Fine_Arts";
  if (topic === "english") return "English";
  if (topic === "latin") return "Latin";
  if (topic === "timeline") return "Timeline";
  return topic.charAt(0).toUpperCase() + topic.slice(1);
}

// Utility: Remove a leading "Paragraph X:" if present.
function cleanText(text) {
  if (!text) return "";
  return text.replace(/^Paragraph\s*\d+:\s*/, '');
}

// 4. Retrieve Foundation Content from the JSON structure.
async function getFoundationContent(cycle, week, subjectType) {
  const data = await loadCycleData(cycle);
  const cycleKey = "Cycle" + cycle;  // e.g., "Cycle1"
  const weekKey = "Week" + week;       // e.g., "Week1"
  const subjectKey = mapSubjectKey(subjectType); // e.g., "History" or "Fine_Arts"
  console.log(`Looking for ${cycleKey} -> ${weekKey} -> ${subjectKey}`);
  if (data[cycleKey] && data[cycleKey][weekKey] && data[cycleKey][weekKey][subjectKey]) {
    return data[cycleKey][weekKey][subjectKey];
  } else {
    return null;
  }
}

// 5. Generate Study Content HTML.
async function generateStudyContent(topic, cycle, week) {
  const subjectData = await getFoundationContent(cycle, week, topic);
  if (!subjectData) {
    return `<p>No data found for ${topic} in Cycle ${cycle}, Week ${week}.</p>`;
  }
  return generateDetailedContent(subjectData, topic, cycle, week);
}

// Generates detailed lesson content HTML using selected fields.
// This version shows only a few fields and removes the "Paragraph X:" prefix.
function generateDetailedContent(subjectData, subjectType, cycle, week) {
  const icons = {
    history: "📜",
    science: "🔬",
    geography: "🌍",
    math: "🔢",
    english: "📝",
    latin: "📚",
    timeline: "⏳",
    finearts: "🎨"
  };
  const icon = icons[subjectType.toLowerCase()] || "📗";
  // Choose fields to display.
  const fields = [
    { label: "Introduction", value: cleanText(subjectData.Introduction) },
    { label: "Deep Dive", value: cleanText(subjectData.Deep_Dive) },
    { label: "Significance", value: cleanText(subjectData.Significance) },
    { label: "Concluding Exhortation & Prayer", value: cleanText(subjectData.Concluding_Exhortation_Prayer) }
  ];
  
  let html = `<p><strong>Cycle:</strong> ${cycle} | <strong>Week:</strong> ${week}</p>
              <h3>${icon} <strong>${subjectType.charAt(0).toUpperCase() + subjectType.slice(1)} Lesson</strong></h3>`;
  fields.forEach(field => {
    if (field.value) {
      html += `<div style="margin-bottom: 1em;">
                 <h4 style="margin-bottom: 0.5em;">${field.label}:</h4>
                 <p style="line-height: 1.5; margin: 0;">${field.value}</p>
               </div>`;
    }
  });
  return html;
}

// 6. Timer Function (10-minute session; quiz enabled after 5 minutes)
function startTimer(duration) {
  clearInterval(studyTimer);
  let timer = duration;
  const totalTime = duration;
  quizEnabled = false; // reset flag for each session
  studyTimer = setInterval(() => {
    const minutes = String(Math.floor(timer / 60)).padStart(2, "0");
    const seconds = String(timer % 60).padStart(2, "0");
    timeDisplay.textContent = `Time Remaining: ${minutes}:${seconds}`;
    const progressPercent = ((totalTime - timer) / totalTime) * 100;
    progressBar.style.width = progressPercent + "%";
    
    // Enable quiz after 5 minutes (when 300 seconds or less remain)
    if (!quizEnabled && timer <= 300) {
      quizEnabled = true;
      takeQuizBtn.disabled = false;
    }
    
    if (--timer < 0) {
      clearInterval(studyTimer);
      timeDisplay.textContent = "Session complete!";
      takeQuizBtn.disabled = false;
    }
  }, 1000);
}

// 7. Event Listeners

// (A) Login Handler
loginBtn.addEventListener("click", () => {
  const inputName = document.getElementById("username").value.trim();
  if (!inputName) {
    alert("Please enter your name.");
    return;
  }
  username = inputName;
  alert("Welcome, " + username + "!");
  loginSection.classList.add("hidden");
  selectionSection.classList.remove("hidden");
});

// (B) Start Study Session Handler
startStudyBtn.addEventListener("click", async () => {
  currentCycle = document.getElementById("cycleSelect").value;
  currentWeek = document.getElementById("weekSelect").value;
  currentTopic = document.getElementById("topicSelect").value;
  selectionSection.classList.add("hidden");
  studySection.classList.remove("hidden");
  studyContentElem.innerHTML = "<p>Loading content...</p>";
  const lessonHtml = await generateStudyContent(currentTopic, currentCycle, currentWeek);
  studyContentElem.innerHTML = lessonHtml;
  progressBar.style.width = "0%";
  timeDisplay.textContent = "";
  takeQuizBtn.disabled = true; // initially disabled
  startTimer(600); // 10-minute timer
});

// (C) Take Quiz Handler
takeQuizBtn.addEventListener("click", () => {
  clearInterval(studyTimer);
  timeDisplay.textContent = "Session complete!";
  logSession();
  awardPoints(10);
  document.getElementById("quizContent").innerHTML = generateQuizContent(currentTopic, currentCycle, currentWeek);
  studySection.classList.add("hidden");
  quizSection.classList.remove("hidden");
});

// (D) Next Topic Handler
nextTopicBtn.addEventListener("click", async () => {
  clearInterval(studyTimer);
  timeDisplay.textContent = "Session complete!";
  logSession();
  awardPoints(10);
  const currentIndex = topicsOrder.indexOf(currentTopic);
  if (currentIndex < topicsOrder.length - 1) {
    currentTopic = topicsOrder[currentIndex + 1];
  } else {
    alert("You have completed all topics for this week!");
    studySection.classList.add("hidden");
    selectionSection.classList.remove("hidden");
    return;
  }
  studyContentElem.innerHTML = "<p>Loading content...</p>";
  const lessonHtml = await generateStudyContent(currentTopic, currentCycle, currentWeek);
  studyContentElem.innerHTML = lessonHtml;
  progressBar.style.width = "0%";
  timeDisplay.textContent = "";
  takeQuizBtn.disabled = true;
  quizEnabled = false; // reset flag for next topic
  startTimer(600);
});

// (E) Back Button Handler
backBtn.addEventListener("click", () => {
  clearInterval(studyTimer);
  if (confirm("Are you sure you want to exit the current session? Your progress will not be logged.")) {
    studySection.classList.add("hidden");
    selectionSection.classList.remove("hidden");
  }
});

// (F) Quiz Submit Handler
submitQuizBtn.addEventListener("click", () => {
  const answer1 = (document.getElementById("quizAnswer1") || {}).value.trim() || "";
  const answer2 = (document.getElementById("quizAnswer2") || {}).value.trim() || "";
  const answer3 = (document.getElementById("quizAnswer3") || {}).value.trim() || "";
  let score = 0;
  if (answer1) score += 10;
  if (answer2) score += 10;
  if (answer3) score += 10;
  if (score === 0) {
    quizFeedback.textContent = "Please answer all questions.";
    return;
  } else {
    quizFeedback.innerHTML = `<strong>Great job, ${username}!</strong> You scored <strong>${score}</strong> points.`;
    awardPoints(score);
  }
  userProgress[userProgress.length - 1].quizScore = score;
  quizSection.classList.add("hidden");
  updateProgressLog();
  progressSection.classList.remove("hidden");
});

// (G) New Session Handler
newSessionBtn.addEventListener("click", () => {
  progressSection.classList.add("hidden");
  selectionSection.classList.remove("hidden");
  document.getElementById("quizContent").innerHTML = "";
  quizFeedback.textContent = "";
});

// 8. Points, Badges, and Progress Functions
function awardPoints(points) {
  totalPoints += points;
  totalPointsDisplay.textContent = totalPoints;
  checkBadges();
}

function checkBadges() {
  if (totalPoints >= 30 && !badges.includes("30+ Points")) {
    badges.push("30+ Points");
  }
  if (totalPoints >= 50 && !badges.includes("50+ Points")) {
    badges.push("50+ Points");
  }
  badgesEarnedDisplay.innerHTML = badges.map(b => `<span class="badge">${b}</span>`).join("");
}

function logSession() {
  const sessionLog = {
    date: new Date().toLocaleString(),
    cycle: currentCycle,
    week: currentWeek,
    topic: capitalizeFirst(currentTopic),
    completed: true
  };
  userProgress.push(sessionLog);
}

function updateProgressLog() {
  let logHtml = "";
  userProgress.forEach((session, i) => {
    logHtml += `<p><strong>Session ${i + 1}:</strong> ${session.date} | Cycle ${session.cycle}, Week ${session.week}, Topic: ${session.topic} | Quiz Score: ${session.quizScore || 0}</p>`;
  });
  progressLog.innerHTML = logHtml;
}

function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 9. Topic-Specific Quiz Content Generator (Simplified for a 10-year-old)
function generateQuizContent(topic, cycle, week) {
  let questions = [];
  const topicKey = topic.toLowerCase();
  switch (topicKey) {
    case "history":
      questions = [
        "What did you learn about the history story?",
        "What was the most fun part of the history lesson?",
        "Why do you think learning history is important?"
      ];
      break;
    case "geography":
      questions = [
        "What did you learn about the places and lands?",
        "Can you name one cool fact about the geography lesson?",
        "Why do you think maps are useful?"
      ];
      break;
    case "science":
      questions = [
        "What did you learn about animals or plants?",
        "Can you tell one new thing about science?",
        "Why is it important to learn about living things?"
      ];
      break;
    case "math":
      questions = [
        "What did you learn about numbers today?",
        "How do you use math in your daily life?",
        "What is one fun math fact you remember?"
      ];
      break;
    case "english":
      questions = [
        "What did you learn about how words work together?",
        "Can you give an example of a sentence you learned about?",
        "Why is it important to use words carefully?"
      ];
      break;
    case "latin":
      questions = [
        "What did you learn about Latin words?",
        "What is one Latin word you remember?",
        "Why do you think learning Latin can be fun?"
      ];
      break;
    case "timeline":
      questions = [
        "What did you learn about the order of events?",
        "Why is it important to know what happened first?",
        "Can you name one event you found interesting?"
      ];
      break;
    case "finearts":
      questions = [
        "What did you learn about drawing shapes?",
        "What is your favorite shape from the art lesson?",
        "How can drawing help you share your ideas?"
      ];
      break;
    default:
      questions = [
        "What is one thing you learned today?",
        "How can this lesson help you in school?",
        "What was the best part of the lesson?"
      ];
  }
  
  let quizHtml = "";
  questions.forEach((q, idx) => {
    quizHtml += `<p><strong>Question ${idx + 1}:</strong> ${q}</p>
                 <input type="text" id="quizAnswer${idx + 1}" placeholder="Your answer here"><br>`;
  });
  return quizHtml;
}
