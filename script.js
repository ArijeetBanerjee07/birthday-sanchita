const btn = document.getElementById("surpriseBtn");
const gallery = document.querySelector(".gallery");
const music = document.getElementById("music");

btn.addEventListener("click", () => {
  music.play();
  gallery.classList.remove("hidden");
  setTimeout(() => gallery.classList.add("show"), 200);
  launchConfetti();
  btn.textContent = "Enjoy the Show 🎉";
  btn.disabled = true;
});
document.addEventListener("click", e => {
  const heart = document.createElement("div");
  heart.textContent = "💖";
  heart.style.position = "absolute";
  heart.style.left = e.pageX + "px";
  heart.style.top = e.pageY + "px";
  heart.style.fontSize = "24px";
  heart.style.animation = "fly 1.5s ease-out";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1500);
});
document.getElementById("toggleMode").onclick = () =>
  document.body.classList.toggle("night");

// Simple confetti
function launchConfetti() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const pieces = [];
  for (let i = 0; i < 150; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 8 + 2,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`,
      speed: Math.random() * 3 + 2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });
  }

  function update() {
    pieces.forEach(p => {
      p.y += p.speed;
      if (p.y > canvas.height) p.y = 0;
    });
  }

  function loop() {
    draw();
    update();
    requestAnimationFrame(loop);
  }
  loop();
}


