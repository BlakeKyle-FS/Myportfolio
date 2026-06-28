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

/* Falling Navy Anchors */
const anchorContainer = document.getElementById("anchor-container");

let anchorInterval;

function startAnchors() {
  if (anchorInterval) return;

  anchorInterval = setInterval(() => {
    const anchor = document.createElement("div");

    anchor.className = "anchor";
    anchor.innerHTML = "⚓";

    anchor.style.left = Math.random() * 100 + "vw";
    anchor.style.animationDuration = Math.random() * 4 + 5 + "s";
    anchor.style.fontSize = Math.random() * 18 + 24 + "px";

    anchorContainer.appendChild(anchor);

    setTimeout(() => {
      anchor.remove();
    }, 9000);
  }, 300);
}

function stopAnchors() {
  clearInterval(anchorInterval);
  anchorInterval = null;
  anchorContainer.innerHTML = "";
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
      startAnchors();
      message.textContent = "⚓ NAVY MODE ACTIVATED ⚓";
    } else {
      stopAnchors();
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

      document.querySelector(".typing-text").classList.add("start-typing");
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

/* Matrix rain background */
const matrixCanvas = document.getElementById("matrix-rain");
const matrixCtx = matrixCanvas.getContext("2d");

const matrixLetters =
  "アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const fontSize = 16;
let columns;
let drops;

function resizeMatrixCanvas() {
  matrixCanvas.width = window.innerWidth;
  matrixCanvas.height = window.innerHeight;

  columns = Math.floor(matrixCanvas.width / fontSize);
  drops = Array(columns).fill(1);
}

resizeMatrixCanvas();
window.addEventListener("resize", resizeMatrixCanvas);

function drawMatrixRain() {
  if (!document.body.classList.contains("matrix-mode")) {
    requestAnimationFrame(drawMatrixRain);
    return;
  }

  matrixCtx.fillStyle = "rgba(0, 0, 0, 0.08)";
  matrixCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

  matrixCtx.fillStyle = "#00ff41";
  matrixCtx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text =
      matrixLetters[Math.floor(Math.random() * matrixLetters.length)];

    matrixCtx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }

  requestAnimationFrame(drawMatrixRain);
}

drawMatrixRain();
