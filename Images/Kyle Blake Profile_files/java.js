/* this handles the easter egg when my name in header is clicked 5x */
/* const logo = document.getElementById("logo");
const message = document.getElementById("navy-message");

let clickCount = 0;

logo.addEventListener("click", () => {
  clickCount++;

  if (clickCount === 5) {
    document.body.classList.toggle("navy-mode");

    unlockAchievement("navy", "Found Navy Mode");

    if (document.body.classList.contains("navy-mode")) {
      message.textContent = "⚓ NAVY MODE ACTIVATED ⚓";
    } else {
      message.textContent = "⚓ NAVY MODE DEACTIVATED ⚓";
    }

    message.style.opacity = "1";

    setTimeout(() => {
      message.style.opacity = "0";
    }, 2500);

    clickCount = 0;
  }
});

/* this automatically updates the date at the bottom of the page 
const dateElement = document.getElementById("current-date");

const today = new Date();

dateElement.textContent = today.toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

const matrixMessage = document.getElementById("matrix-message");

let typedKeys = "";

document.addEventListener("keydown", (event) => {
  typedKeys += event.key.toLowerCase();

  if (typedKeys.length > 6) {
    typedKeys = typedKeys.slice(-6);
  }

  if (typedKeys === "matrix") {
    document.body.classList.toggle("matrix-mode");

    unlockAchievement("matrix", "Entered the Matrix");

    if (document.body.classList.contains("matrix-mode")) {
      matrixMessage.textContent = "💻 MATRIX MODE ACTIVATED 💻";
    } else {
      matrixMessage.textContent = "💻 MATRIX MODE DEACTIVATED 💻";
    }

    matrixMessage.style.opacity = "1";

    setTimeout(() => {
      matrixMessage.style.opacity = "0";
    }, 2500);

    typedKeys = "";
  }
});

const beginMission = document.getElementById("begin-mission");
const welcomeScreen = document.getElementById("welcome-screen");

beginMission.addEventListener("click", () => {
  welcomeScreen.style.opacity = "0";

  setTimeout(() => {
    welcomeScreen.style.display = "none";
  }, 800);
});

beginMission.addEventListener("click", () => {
  beginMission.textContent = "Initializing Mission...";

  beginMission.disabled = true;

  setTimeout(() => {
    welcomeScreen.style.opacity = "0";

    setTimeout(() => {
      welcomeScreen.style.display = "none";
    }, 800);
  }, 1500);
});

const classifiedScreen = document.getElementById("classified-screen");

const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

let konamiIndex = 0;

document.addEventListener("keydown", (event) => {
  if (event.key === konamiCode[konamiIndex]) {
    konamiIndex++;

    if (konamiIndex === konamiCode.length) {
      classifiedScreen.classList.add("active");

      unlockAchievement("konami", "Accessed Classified Files");

      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    classifiedScreen.classList.remove("active");
  }
});

const achievementCount = document.getElementById("achievement-count");
const achievementPopup = document.getElementById("achievement-popup");

const achievements = {
  navy: false,
  matrix: false,
  konami: false,
};

function unlockAchievement(type, message) {
  if (!achievements[type]) {
    achievements[type] = true;

    const totalUnlocked = Object.values(achievements).filter(Boolean).length;

    achievementCount.textContent = totalUnlocked;

    achievementPopup.textContent = `🏆 Achievement Unlocked: ${message}`;
    achievementPopup.classList.add("show");

    setTimeout(() => {
      achievementPopup.classList.remove("show");
    }, 2500);
  }
} */

/* Achievement system */
const achievementCount = document.getElementById("achievement-count");
const achievementPopup = document.getElementById("achievement-popup");
const achievementCounter = document.getElementById("achievement-counter");

const achievements = {
  navy: false,
  matrix: false,
  konami: false,
};

function unlockAchievement(type, message) {
  if (!achievements[type]) {
    achievements[type] = true;

    const totalUnlocked = Object.values(achievements).filter(Boolean).length;

    achievementCount.textContent = totalUnlocked;

    if (totalUnlocked === 3) {
      achievementCounter.innerHTML =
        "🏆 Achievements 3 / 3 ✓<br><small>Elite Clearance Earned</small>";

      achievementPopup.innerHTML = `
        <h3>🏆 ELITE CLEARANCE ACHIEVED</h3>
        <hr>
        <p>Congratulations, Agent.</p>
        <p>You discovered every hidden operation embedded throughout my portfolio.</p>
        <p><strong>Mission Status:</strong> COMPLETE ✅</p>
        <p><strong>Clearance Level:</strong> ELITE</p>
        <button id="mission-complete">🫡 Dismiss Briefing</button>
      `;

      achievementPopup.classList.add("show");

      document
        .getElementById("mission-complete")
        .addEventListener("click", () => {
          achievementPopup.classList.remove("show");
        });

      return;
    }

    achievementPopup.textContent = `🏆 Achievement Unlocked: ${message}`;
    achievementPopup.classList.add("show");

    setTimeout(() => {
      achievementPopup.classList.remove("show");
    }, 2500);
  }
}

/* Navy Mode: click name 5 times */
const logo = document.getElementById("logo");
const message = document.getElementById("navy-message");

let clickCount = 0;

logo.addEventListener("click", () => {
  clickCount++;

  if (clickCount === 5) {
    document.body.classList.toggle("navy-mode");
    unlockAchievement("navy", "Found Navy Mode");

    if (document.body.classList.contains("navy-mode")) {
      message.textContent = "⚓ NAVY MODE ACTIVATED ⚓";
    } else {
      message.textContent = "⚓ NAVY MODE DEACTIVATED ⚓";
    }

    message.style.opacity = "1";

    setTimeout(() => {
      message.style.opacity = "0";
    }, 2500);

    clickCount = 0;
  }
});

/* Automatically updates footer date */
const dateElement = document.getElementById("current-date");
const today = new Date();

dateElement.textContent = today.toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

/* Matrix Mode: type "matrix" */
const matrixMessage = document.getElementById("matrix-message");

let typedKeys = "";

document.addEventListener("keydown", (event) => {
  typedKeys += event.key.toLowerCase();

  if (typedKeys.length > 6) {
    typedKeys = typedKeys.slice(-6);
  }

  if (typedKeys === "matrix") {
    document.body.classList.toggle("matrix-mode");
    unlockAchievement("matrix", "Entered the Matrix");

    if (document.body.classList.contains("matrix-mode")) {
      matrixMessage.textContent = "💻 MATRIX MODE ACTIVATED 💻";
    } else {
      matrixMessage.textContent = "💻 MATRIX MODE DEACTIVATED 💻";
    }

    matrixMessage.style.opacity = "1";

    setTimeout(() => {
      matrixMessage.style.opacity = "0";
    }, 2500);

    typedKeys = "";
  }
});

/* Welcome screen */
const beginMission = document.getElementById("begin-mission");
const welcomeScreen = document.getElementById("welcome-screen");

beginMission.addEventListener("click", () => {
  beginMission.textContent = "Initializing Mission...";
  beginMission.disabled = true;

  setTimeout(() => {
    welcomeScreen.style.opacity = "0";

    setTimeout(() => {
      welcomeScreen.style.display = "none";
    }, 800);
  }, 1500);
});

/* Konami Code: Up Up Down Down Left Right Left Right B A */
const classifiedScreen = document.getElementById("classified-screen");

const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

let konamiIndex = 0;

document.addEventListener("keydown", (event) => {
  if (event.key === konamiCode[konamiIndex]) {
    konamiIndex++;

    if (konamiIndex === konamiCode.length) {
      classifiedScreen.classList.add("active");
      unlockAchievement("konami", "Accessed Classified Files");
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

/* Close classified screen with Escape */
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    classifiedScreen.classList.remove("active");
  }
});
