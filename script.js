const calendar = document.getElementById("calendar");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

const days = [
  "🌹 \nRose Day",
  "💌 \nPropose Day",
  "🍫 \nChocolate\nDay",
  "🧸 \nTeddy Day",
  "🤝 \nPromise Day",
  "🤗 \nHug Day",
  "💋 \nKiss Day",
  "💖 \nValentine’s\nDay"
];

days.forEach((day, i) => {
  const d = document.createElement("div");
  d.className = "day";
  d.innerText = day;
  d.onclick = () => openDay(i);
  calendar.appendChild(d);
});

function openDay(i) {
  modal.classList.remove("hidden");

  switch(i) {
    case 0: 
      modalContent.innerHTML = `
        <h2>Pick a Rose 🌹</h2>
        <div class="choices">
          <div class="choice" onclick="showMsg('Love ❤️')">🌹</div>
          <div class="choice" onclick="showMsg('Admiration 💗')">🌷</div>
          <div class="choice" onclick="showMsg('Something more 👀')">🌼</div>
        </div>
      `;
      break;

    case 1: // Propose Day
      modalContent.innerHTML = `
        <h2>Type slowly…</h2>
        <p style="margin-top:1rem">
          Somewhere between conversations and silence…  
          I fell for you 💕
        </p>
        <button onclick="closeModal()">💌</button>
      `;
      break;

    case 2: // Chocolate Day
      modalContent.innerHTML = `
        <h2>Chocolate for you 🍫</h2>
        <p>You’re sweet, comforting, and my favorite treat.</p>
        <button onclick="closeModal()">🍬</button>
      `;
      break;

    case 3: // Teddy Day
      modalContent.innerHTML = `
        <h2>Hold the Teddy 🧸</h2>
        <p style="margin-top:1rem">
          If I could, I’d hug you like this in real life.
        </p>
        <button onclick="closeModal()">🤍</button>
      `;
      break;

    case 4: // Promise Day
      modalContent.innerHTML = `
        <h2>A Promise 🤝</h2>
        <p>I promise to choose you, even on hard days.</p>
        <button onclick="closeModal()">✨</button>
      `;
      break;

    case 5: // Hug Day
      modalContent.innerHTML = `
        <h2>A Warm Hug 🤗</h2>
        <p>This hug lasts as long as you need it to.</p>
        <button onclick="closeModal()">🫶</button>
      `;
      break;

    case 6: // Kiss Day
      modalContent.innerHTML = `
        <h2>Don’t rush 💋</h2>
        <p>Some things are better when unhurried.</p>
        <button onclick="closeModal()">💞</button>
      `;
      break;

    case 7: // Valentine’s Day
      modalContent.innerHTML = `
        <h2>Will you be my Valentine? 💘</h2>
        <div class="buttons">
          <button class="yes" onclick="yes()">Yes 💕</button>
          <button class="no" id="noBtn">No 🙃</button>
        </div>
      `;

      const noBtn = document.getElementById("noBtn");
      noBtn.addEventListener("mouseenter", () => {
        noBtn.style.top = Math.random()*80 + "%";
        noBtn.style.left = Math.random()*80 + "%";
      });
      break;
  }
}

function showMsg(msg) {
  modalContent.innerHTML = `
    <h2>${msg}</h2>
    <button onclick="closeModal()">Close</button>
  `;
}

function yes() {
  modalContent.innerHTML = `
    <div class="final-card">
      <h1 class="yay">YAAAYYY 🥰</h1>
      
      <p class="main-msg">
        You just made my heart do a happy dance 💃❤️
      </p>

      <p class="love-note">
        From today onwards…  
        you’re officially my favorite person,
        my safe place,
        and my Valentine 💖
      </p>

      <div class="hearts">💖 💕 💗 💞 💘</div>

      <button class="replay" onclick="closeModal()">
        Open Again ✨
      </button>
    </div>
  `;

  createFloatingHearts();
}

function closeModal() {
  modal.classList.add("hidden");
}

function createFloatingHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.className = "floating-heart";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }
}

function startCountdown() {
  const target = new Date("Feb 14, 2026 00:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) return;

    document.getElementById("days").innerText =
      Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("hours").innerText =
      Math.floor((diff / (1000 * 60 * 60)) % 24);

    document.getElementById("minutes").innerText =
      Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById("seconds").innerText =
      Math.floor((diff / 1000) % 60);
  }, 1000);
}

startCountdown();

function createBackgroundHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.className = "bg-heart";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
  }, 500);
}

createBackgroundHearts();