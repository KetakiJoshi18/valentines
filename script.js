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
    <h1>YAY 🥰</h1>
    <p>You’re officially my Valentine 💖</p>
    <p style="opacity:0.7;margin-top:1rem">Screenshot this 😌</p>
  `;
}

function closeModal() {
  modal.classList.add("hidden");
}