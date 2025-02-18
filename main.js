document.addEventListener("DOMContentLoaded", function() {
  // DOM Elements
  const heroSection       = document.getElementById("heroSection");
  const loginForm         = document.getElementById("loginForm");
  const loginFeedback     = document.getElementById("loginFeedback");
  const usernameInput     = document.getElementById("username");
  const loginBtn          = document.getElementById("loginBtn");
  const navLinks          = document.getElementById("navLinks");

  const selectionSection  = document.getElementById("selectionSection");
  const startStudyBtn     = document.getElementById("startStudyBtn");
  const viewLogBtn        = document.getElementById("viewLogBtn");

  const studySection      = document.getElementById("studySection");
  const progressSection   = document.getElementById("progressSection");
  const homeworkBtn       = document.getElementById("homeworkBtn");
  const backBtn           = document.getElementById("backBtn");
  const newSessionBtn     = document.getElementById("newSessionBtn");

  const studyContentElem  = document.getElementById("studyContent");
  const progressBar       = document.getElementById("progressBar");
  const timeDisplay       = document.getElementById("timeDisplay");
  const progressLog       = document.getElementById("progressLog");

  // Homework modal elements
  const homeworkModal     = document.getElementById("homeworkModal");
  const homeworkContent   = document.getElementById("homeworkContent");
  const submitHomeworkBtn = document.getElementById("submitHomeworkBtn");
  const nextLessonBtn     = document.getElementById("nextLessonBtn");
  const homeworkFeedback  = document.getElementById("homeworkFeedback");
  const modalClose        = document.querySelector(".modal-content .close");

  // Variables
  let username        = "";
  let currentCycle    = "";
  let currentWeek     = "";
  let currentTopic    = "";
  let studyTimer      = null;
  let sessionStartTime= null;
  let userProgress    = [];
  const cycleDataCache= {};
  const topicsOrder   = ["history", "science", "geography", "math", "english", "latin", "finearts"];

  // Check if user is already logged in
  if (localStorage.getItem("username")) {
    username = localStorage.getItem("username");
    // Show nav links
    navLinks.style.display = "flex";
    // Hide hero section, show selection
    heroSection.classList.add("hidden");
    selectionSection.classList.remove("hidden");
  }

  // --- EVENT LISTENERS ---

  // Login
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const inputName = usernameInput.value.trim();
      if (!inputName) {
        loginFeedback.textContent = "Please enter your name.";
        return;
      }
      loginFeedback.textContent = "";
      username = inputName;
      localStorage.setItem("username", username);

      // Hide hero login
      heroSection.classList.add("hidden");
      // Show nav links
      navLinks.style.display = "flex";
      // Show selection section
      selectionSection.classList.remove("hidden");
    });
  }

  // Start Study Session
  if (startStudyBtn) {
    startStudyBtn.addEventListener("click", async () => {
      currentCycle = document.getElementById("cycleSelect").value;
      currentWeek  = document.getElementById("weekSelect").value;
      currentTopic = document.getElementById("topicSelect").value;
      sessionStartTime = new Date();

      // Hide selection, show study
      selectionSection.classList.add("hidden");
      studySection.classList.remove("hidden");

      studyContentElem.innerHTML = "<p>Loading content...</p>";
      progressBar.style.width = "0%";
      timeDisplay.textContent = "";
      homeworkBtn.disabled = false;

      const lessonHtml = await generateStudyContent(currentTopic, currentCycle, currentWeek);
      studyContentElem.innerHTML = lessonHtml;
      startTimer(900); // 15 minutes
    });
  }

  // View Logs
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

  // New Session
  if (newSessionBtn) {
    newSessionBtn.addEventListener("click", () => {
      progressSection.classList.add("hidden");
      selectionSection.classList.remove("hidden");
      homeworkContent.innerHTML = "";
      homeworkFeedback.textContent = "";
    });
  }

  // Back button
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      clearInterval(studyTimer);
      studySection.classList.add("hidden");
      selectionSection.classList.remove("hidden");
    });
  }

  // Homework
  if (homeworkBtn) {
    homeworkBtn.addEventListener("click", () => {
      clearInterval(studyTimer);
      logSession();
      homeworkContent.innerHTML = generateHomeworkContent(currentTopic, currentCycle, currentWeek);
      homeworkFeedback.classList.add("hidden");
      submitHomeworkBtn.disabled = false;
      homeworkModal.style.display = "block";
      homeworkModal.setAttribute("aria-hidden", "false");
    });
  }

  // Modal Close
  if (modalClose) {
    modalClose.addEventListener("click", () => {
      homeworkModal.style.display = "none";
      homeworkModal.setAttribute("aria-hidden", "true");
      sessionStartTime = new Date();
      startTimer(900);
    });
  }

  // Submit Homework
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

  // Next Lesson
  if (nextLessonBtn) {
    nextLessonBtn.addEventListener("click", async () => {
      let currentIndex = topicsOrder.indexOf(currentTopic);
      if (currentIndex < topicsOrder.length - 1) {
        currentTopic = topicsOrder[currentIndex + 1];
        homeworkModal.style.display = "none";
        homeworkModal.setAttribute("aria-hidden", "true");
        studyContentElem.innerHTML = "<p>Loading content...</p>";
        sessionStartTime = new Date();
        const lessonHtml = await generateStudyContent(currentTopic, currentCycle, currentWeek);
        studyContentElem.innerHTML = lessonHtml;
        startTimer(900);
      } else {
        alert("You have completed all topics for this week!");
        homeworkModal.style.display = "none";
        homeworkModal.setAttribute("aria-hidden", "true");
        studySection.classList.add("hidden");
        selectionSection.classList.remove("hidden");
      }
    });
  }

  // --- HELPER FUNCTIONS ---

  function logSession() {
    const endTime = new Date();
    const durationSeconds = Math.round((endTime - sessionStartTime) / 1000);
    const sessionLog = {
      date: sessionStartTime.toLocaleString() + " - " + endTime.toLocaleTimeString(),
      duration: durationSeconds,
      cycle: currentCycle,
      week: currentWeek,
      topic: currentTopic
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

  async function generateStudyContent(topic, cycle, week) {
    const subjectData = await getFoundationContent(cycle, week, topic);
    if (!subjectData) {
      return `<p>No data found for ${topic} in Cycle ${cycle}, Week ${week}.</p>`;
    }
    return buildLessonHTML(subjectData, topic, cycle, week);
  }

  async function getFoundationContent(cycle, week, topic) {
    if (cycleDataCache[cycle]) {
      return extractSubject(cycleDataCache[cycle], cycle, week, topic);
    } else {
      const data = await loadCycleData(cycle);
      cycleDataCache[cycle] = data;
      return extractSubject(data, cycle, week, topic);
    }
  }

  function extractSubject(data, cycle, week, topic) {
    const cycleKey = "Cycle" + cycle;
    const weekKey = "Week" + week;
    const subjectKey = mapSubjectKey(topic);

    if (
      data[cycleKey] &&
      data[cycleKey][weekKey] &&
      data[cycleKey][weekKey][subjectKey]
    ) {
      return data[cycleKey][weekKey][subjectKey];
    }
    return null;
  }

  function mapSubjectKey(topic) {
    if (topic === "finearts") return "Fine_Arts";
    if (topic === "english") return "English";
    if (topic === "latin") return "Latin";
    return topic.charAt(0).toUpperCase() + topic.slice(1);
  }

  async function loadCycleData(cycleNumber) {
    const urlMap = {
      "1": "https://raw.githubusercontent.com/caamanoluismiguel/cc-cycles/refs/heads/main/Cycle_1.json",
      "2": "https://raw.githubusercontent.com/caamanoluismiguel/cc-cycles/refs/heads/main/Cycle_2.json",
      "3": "https://raw.githubusercontent.com/caamanoluismiguel/cc-cycles/refs/heads/main/Cycle_3.json"
    };
    const url = urlMap[cycleNumber];
    if (!url) throw new Error(`No URL defined for cycle ${cycleNumber}`);

    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to load cycle ${cycleNumber} data: ${response.status}`);
    return await response.json();
  }

  function buildLessonHTML(subjectData, topic, cycle, week) {
    const icons = {
      history: "📜",
      science: "🔬",
      geography: "🌍",
      math: "🔢",
      english: "📝",
      latin: "📚",
      finearts: "🎨"
    };
    const icon = icons[topic] || "📗";

    const fields = [
      { label: "Introduction", text: cleanText(subjectData.Introduction) },
      { label: "Deep Dive", text: cleanText(subjectData.Deep_Dive) },
      { label: "Significance", text: cleanText(subjectData.Significance) },
      { label: "Concluding Exhortation & Prayer", text: cleanText(subjectData.Concluding_Exhortation_Prayer) }
    ].filter(f => f.text);

    let html = `<p><strong>Cycle:</strong> ${cycle} | <strong>Week:</strong> ${week}</p>
                <h3>${icon} <strong>${capitalize(topic)} Lesson</strong></h3>`;
    fields.forEach(field => {
      html += `<div style="margin-bottom: 1em;">
                 <h4 style="margin-bottom: 0.5em;">${field.label}:</h4>
                 <p style="line-height: 1.5;">${field.text}</p>
               </div>`;
    });
    return html;
  }

  function cleanText(text) {
    if (!text) return "";
    return text.replace(/^Paragraph\s*\d+:\s*/i, '');
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

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
});
