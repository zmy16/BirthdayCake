document.addEventListener("DOMContentLoaded", function () {
    const confetti = document.querySelector(".confetti");
    const colors = ["#ff69b4", "#ffc0cb", "#ff1493", "#ffee54", "#ffb6c1", "#ffd700"];
    const numParticles = 100;
  
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
  
      const color = colors[Math.floor(Math.random() * colors.length)];
      const dx = (Math.random() - 0.5) * 400;
      const uy = -(Math.random() * 150 + 100);
      const dy = Math.random() * 300 + 100;
      const rot = (Math.random() - 0.5) * 1440;
      const delay = Math.random() * 0.5;
  
      const isDot = Math.random() < 0.3;
      let width, height, br;
      if (isDot) {
        const size = Math.random() * 10 + 5;
        width = size;
        height = size;
        br = "50%";
      } else {
        width = Math.random() * 8 + 2;
        height = Math.random() * 20 + 5;
        br = "2px";
      }
  
      particle.style.setProperty("--color", color);
      particle.style.setProperty("--dx", `${dx}px`);
      particle.style.setProperty("--uy", `${uy}px`);
      particle.style.setProperty("--dy", `${dy}px`);
      particle.style.setProperty("--rot", `${rot}deg`);
      particle.style.setProperty("--delay", `${delay}s`);
      particle.style.setProperty("--width", `${width}px`);
      particle.style.setProperty("--height", `${height}px`);
      particle.style.setProperty("--br", br);
  
      confetti.appendChild(particle);
    }
  
    const emojiBackground = document.querySelector(".emoji-background");
    const emojis = ["🎂", "🎉", "🎈", "🥳", "🎁", "🍰", "🥂", "🎊"];
    const numEmojis = 20;
  
    for (let i = 0; i < numEmojis; i++) {
      const emojiElem = document.createElement("div");
      emojiElem.classList.add("emoji");
      emojiElem.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      emojiElem.style.left = `${Math.random() * 100}%`;
      emojiElem.style.top = `${Math.random() * 100}%`;
      emojiElem.style.animationDelay = `${Math.random() * 5}s`;
      emojiBackground.appendChild(emojiElem);
    }
  
    function startCelebration(name) {
      document.querySelector("h1").textContent = `Happy Birthday ${name}!`;
      document.title = `Happy Birthday ${name}`;
  
      const inputOverlay = document.querySelector(".input-overlay");
      inputOverlay.classList.add("hidden");
  
      setTimeout(() => {
        inputOverlay.style.display = "none";
        document.querySelector(".wrapper").style.display = "block";
        document.querySelector(".emoji-background").style.display = "block";
        document.querySelector(".container").classList.add("animated");
  
        setTimeout(() => {
          document.querySelector(".wrapper").classList.add("visible");
          document.querySelector(".emoji-background").classList.add("visible");
        }, 10);
      }, 1000);
    }
  
    const startBtn = document.getElementById("start-btn");
    const nameInput = document.getElementById("name-input");
  
    startBtn.addEventListener("click", () => {
      const name = nameInput.value.trim();
      if (name) {
        startCelebration(name);
      } else {
        alert("Please enter a name!");
      }
    });
  
    nameInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const name = nameInput.value.trim();
        if (name) {
          startCelebration(name);
        } else {
          alert("Please enter a name!");
        }
      }
    });
  });