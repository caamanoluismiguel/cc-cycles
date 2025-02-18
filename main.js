document.addEventListener("DOMContentLoaded", function() {
  // 1. Global Variables
  const cycleDataCache = {};
  let username = "";
  let currentCycle = "";
  let currentWeek = "";
  let currentTopic = "";
  const topicsOrder = ["history", "science", "geography", "math", "english", "latin", "finearts"];

  let totalPoints = 0; // Not used in homework
  let badges = [];     // Not used in homework
  let userProgress = [];
  let studyTimer = null;
  let sessionStartTime = null; // To record session start time
  
  window.currentLessonData = null; // For homework generation

  // 2. Get DOM Elements
  const loginSection = document.getElementById("loginSection");
  const selectionSection = document.getElementById("selectionSection");
  const studySection = document.getElementById("studySection");
  const progressSection = document.getElementById("progressSection");

  const loginBtn = document.getElementById("loginBtn");
  const startStudyBtn = document.getElementById("startStudyBtn");
  const homeworkBtn = document.getElementById("homeworkBtn"); // Homework button
  const backBtn = document.getElementById("backBtn");
  const viewLogBtn = document.getElementById("viewLogBtn");
  const newSessionBtn = document.getElementById("newSessionBtn");

  const studyContentElem = document.getElementById("studyContent");
  const progressBar = document.getElementById("progressBar");
  const timeDisplay = document.getElementById("timeDisplay");
  const totalPointsDisplay = document.getElementById("totalPoints");
  const badgesEarnedDisplay = document.getElementById("badgesEarned");
  const progressLog = document.getElementById("progressLog");

  // Modal elements for Homework
  const homeworkModal = document.getElementById("homeworkModal");
  const homeworkContentElem = document.getElementById("homeworkContent");
  const submitHomeworkBtn = document.getElementById("submitHomeworkBtn");
  const nextLessonBtn = document.getElementById("nextLessonBtn");
  const homeworkFeedback = document.getElementById("homeworkFeedback");
  const modalClose = document.querySelector(".modal-content .close");

  // Check for stored username to keep user logged in
  if (localStorage.getItem("username")) {
    username = localStorage.getItem("username");
    document.getElementById("loggedInLinks").style.display = "flex";
  }
  // If returning via hash "#selectionSection", show the selection section
  if (window.location.hash === "#selectionSection" && username) {
    loginSection.classList.add("hidden");
    selectionSection.classList.remove("hidden");
  }

  // 3. Helper Functions
  function mapSubjectKey(topic) {
    if (topic === "finearts") return "Fine_Arts";
    if (topic === "english") return "English";
    if (topic === "latin") return "Latin";
    return topic.charAt(0).toUpperCase() + topic.slice(1);
  }
  function cleanText(text) {
    if (!text) return "";
    return text.replace(/^Paragraph\s*\d+:\s*/i, '');
  }
  function getFirstSentence(text) {
    if (!text) return "";
    let sentence = text.split('. ')[0];
    return sentence.endsWith('.') ? sentence : sentence + ".";
  }
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  function truncateText(text, maxLength = 50) {
    if (!text) return "";
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  }
  // 4. Lazy-load Cycle Data from GitHub.
  async function loadCycleData(cycleNumber) {
    if (cycleDataCache[cycleNumber]) return cycleDataCache[cycleNumber];
    const urlMap = {
      "1": "https://raw.githubusercontent.com/caamanoluismiguel/cc-cycles/refs/heads/main/Cycle_1.json",
      "2": "https://raw.githubusercontent.com/caamanoluismiguel/cc-cycles/refs/heads/main/Cycle_2.json",
      "3": "https://raw.githubusercontent.com/caamanoluismiguel/cc-cycles/refs/heads/main/Cycle_3.json"
    };
    const url = urlMap[cycleNumber];
    if (!url) throw new Error(`No URL defined for cycle ${cycleNumber}`);
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to load cycle ${cycleNumber} data: ${response.status}`);
    const data = await response.json();
    console.log(`Loaded cycle ${cycleNumber} data:`, data);
    cycleDataCache[cycleNumber] = data;
    return data;
  }
  // 5. Retrieve Lesson Content from JSON.
  async function getFoundationContent(cycle, week, subjectType) {
    const data = await loadCycleData(cycle);
    const cycleKey = "Cycle" + cycle;
    const weekKey = "Week" + week;
    const subjectKey = mapSubjectKey(subjectType);
    console.log(`Looking for ${cycleKey} -> ${weekKey} -> ${subjectKey}`);
    if (data[cycleKey] && data[cycleKey][weekKey] && data[cycleKey][weekKey][subjectKey])
      return data[cycleKey][weekKey][subjectKey];
    else return null;
  }
  // 6. Generate Study Content HTML.
  async function generateStudyContent(topic, cycle, week) {
    const subjectData = await getFoundationContent(cycle, week, topic);
    window.currentLessonData = subjectData;
    if (!subjectData)
      return `<p>No data found for ${topic} in Cycle ${cycle}, Week ${week}.</p>`;
    return generateDetailedContent(subjectData, topic, cycle, week);
  }
  // 7. Generate Detailed Lesson Content HTML.
  function generateDetailedContent(subjectData, subjectType, cycle, week) {
    const icons = {
      history: "📜",
      science: "🔬",
      geography: "🌍",
      math: "🔢",
      english: "📝",
      latin: "📚",
      finearts: "🎨"
    };
    const icon = icons[subjectType.toLowerCase()] || "📗";
    const fields = [
      { label: "Introduction", text: cleanText(subjectData.Introduction) },
      { label: "Deep Dive", text: cleanText(subjectData.Deep_Dive) },
      { label: "Significance", text: cleanText(subjectData.Significance) },
      { label: "Concluding Exhortation & Prayer", text: cleanText(subjectData.Concluding_Exhortation_Prayer) }
    ].filter(f => f.text);
    
    let html = `<p><strong>Cycle:</strong> ${currentCycle} | <strong>Week:</strong> ${currentWeek}</p>
                <h3>${icon} <strong>${subjectType.charAt(0).toUpperCase() + subjectType.slice(1)} Lesson</strong></h3>`;
    fields.forEach(field => {
      html += `<div style="margin-bottom: 1em;">
                 <h4 style="margin-bottom: 0.5em;">${field.label}:</h4>
                 <p style="line-height: 1.5;">${field.text}</p>
               </div>`;
    });
    return html;
  }
  // 8. Generate Homework Content (Generic)
  function generateHomeworkContent(topic, cycle, week) {
    return `
      <p><em>Homework Assignment:</em> Now that you have studied today's lesson on <strong>${mapSubjectKey(topic)}</strong>, choose one of the following creative activities:</p>
      <ul style="margin-left: 20px;">
        <li>Draw a picture representing this idea.</li>
        <li>Write a short story about how this idea can help you.</li>
        <li>Create a simple poster or presentation summarizing the lesson.</li>
      </ul>
      <p>Then answer the following questions in your own words:</p>
      <p><strong>1. What is one key idea you learned today?</strong></p>
      <textarea id="response0" rows="3" placeholder="Type your answer here..."></textarea>
      <p><strong>2. How will you apply what you learned in your daily life?</strong></p>
      <textarea id="response1" rows="3" placeholder="Type your answer here..."></textarea>
      <p><strong>3. Which creative activity did you choose and why?</strong></p>
      <textarea id="response2" rows="3" placeholder="Type your answer here..."></textarea>
    `;
  }
  // 9. Timer Function (15 minutes)
  function startTimer(duration) {
    clearInterval(studyTimer);
    let timer = duration;
    const totalTime = duration;
    homeworkBtn.disabled = false;
    studyTimer = setInterval(() => {
      const minutes = String(Math.floor(timer / 60)).padStart(2, "0");
      const seconds = String(timer % 60).padStart(2, "0");
      timeDisplay.textContent = `Time Remaining: ${minutes}:${seconds}`;
      const progressPercent = ((totalTime - timer) / totalTime) * 100;
      progressBar.style.width = progressPercent + "%";
      if (--timer < 0) {
        clearInterval(studyTimer);
        timeDisplay.textContent = "Session complete!";
      }
    }, 1000);
  }
  // 10. Log Session Data and Save Locally
  function logSession() {
    const endTime = new Date();
    const durationSeconds = Math.round((endTime - sessionStartTime) / 1000);
    const sessionLog = {
      date: sessionStartTime.toLocaleString() + " - " + endTime.toLocaleTimeString(),
      duration: durationSeconds,
      cycle: currentCycle,
      week: currentWeek,
      topic: capitalizeFirst(currentTopic)
    };
    userProgress.push(sessionLog);
    localStorage.setItem("studyLogs", JSON.stringify(userProgress));
  }
  function updateProgressLog() {
    const storedLogs = localStorage.getItem("studyLogs");
    if (storedLogs) userProgress = JSON.parse(storedLogs);
    let logHtml = "";
    userProgress.forEach((session, i) => {
      logHtml += `<p>
        <strong>Session ${i + 1}:</strong> ${session.date} | Cycle ${session.cycle}, Week ${session.week}, Topic: ${session.topic} | Duration: ${session.duration} sec
      </p>`;
    });
    progressLog.innerHTML = logHtml;
  }
  // 11. Utility Functions
  function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  // 12. Event Listeners
  // (A) Login Handler
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const inputName = document.getElementById("username").value.trim();
      if (!inputName) {
        alert("Please enter your name.");
        return;
      }
      username = inputName;
      localStorage.setItem("username", username);
      alert("Welcome, " + username + "!");
      document.getElementById("loggedInLinks").style.display = "flex";
      loginSection.classList.add("hidden");
      selectionSection.classList.remove("hidden");
    });
  }
  // (B) Start Study Session Handler
  if (startStudyBtn) {
    startStudyBtn.addEventListener("click", async () => {
      currentCycle = document.getElementById("cycleSelect").value;
      currentWeek = document.getElementById("weekSelect").value;
      currentTopic = document.getElementById("topicSelect").value;
      sessionStartTime = new Date();
      selectionSection.classList.add("hidden");
      studySection.classList.remove("hidden");
      studyContentElem.innerHTML = "<p>Loading content...</p>";
      const lessonHtml = await generateStudyContent(currentTopic, currentCycle, currentWeek);
      studyContentElem.innerHTML = lessonHtml;
      progressBar.style.width = "0%";
      timeDisplay.textContent = "";
      homeworkBtn.disabled = false;
      startTimer(900);
    });
  }
  // (C) Homework Button Handler – Open homework modal.
  if (homeworkBtn) {
    homeworkBtn.addEventListener("click", () => {
      clearInterval(studyTimer);
      logSession();
      const homeworkHtml = generateHomeworkContent(currentTopic, currentCycle, currentWeek);
      homeworkContentElem.innerHTML = homeworkHtml;
      homeworkFeedback.classList.add("hidden");
      submitHomeworkBtn.disabled = false;
      homeworkModal.style.display = "block";
    });
  }
  // (D) Back Button Handler – Always return to the selection screen.
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      clearInterval(studyTimer);
      studySection.classList.add("hidden");
      selectionSection.classList.remove("hidden");
    });
  }
  // (E) Homework Submit Handler – Collect responses and display a thank-you message.
  if (submitHomeworkBtn) {
    submitHomeworkBtn.addEventListener("click", () => {
      const response0 = document.getElementById("response0").value.trim();
      const response1 = document.getElementById("response1").value.trim();
      const response2 = document.getElementById("response2").value.trim();
      if (!response0 || !response1 || !response2) {
        homeworkFeedback.textContent = "Please answer all questions.";
        homeworkFeedback.classList.remove("hidden");
        return;
      }
      homeworkFeedback.innerHTML = `<strong>Thank you, ${username}!</strong> Your homework has been submitted.`;
      homeworkFeedback.classList.remove("hidden");
      submitHomeworkBtn.disabled = true;
      updateProgressLog();
      progressSection.classList.remove("hidden");
    });
  }
  // (F) Next Lesson Button Handler – In the modal, go to the next lesson topic.
  if (nextLessonBtn) {
    nextLessonBtn.addEventListener("click", async () => {
      let currentIndex = topicsOrder.indexOf(currentTopic);
      if (currentIndex < topicsOrder.length - 1) {
        currentTopic = topicsOrder[currentIndex + 1];
        homeworkModal.style.display = "none";
        studyContentElem.innerHTML = "<p>Loading content...</p>";
        const lessonHtml = await generateStudyContent(currentTopic, currentCycle, currentWeek);
        studyContentElem.innerHTML = lessonHtml;
        sessionStartTime = new Date();
        startTimer(900);
      } else {
        alert("You have completed all topics for this week!");
        homeworkModal.style.display = "none";
        studySection.classList.add("hidden");
        selectionSection.classList.remove("hidden");
      }
    });
  }
  // (G) New Session Handler
  if (newSessionBtn) {
    newSessionBtn.addEventListener("click", () => {
      progressSection.classList.add("hidden");
      selectionSection.classList.remove("hidden");
      homeworkContentElem.innerHTML = "";
      homeworkFeedback.textContent = "";
    });
  }
  // (H) View Logs Button Handler
  if (viewLogBtn) {
    viewLogBtn.addEventListener("click", () => {
      if (progressSection.classList.contains("hidden")) {
        updateProgressLog();
        progressSection.classList.remove("hidden");
      } else {
        progressSection.classList.add("hidden");
      }
    });
  }
  // (I) Modal Close Handler – Closes the homework modal and resumes timer.
  if (modalClose) {
    modalClose.addEventListener("click", () => {
      homeworkModal.style.display = "none";
      sessionStartTime = new Date();
      startTimer(900);
    });
  }
});
