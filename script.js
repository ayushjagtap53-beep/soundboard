const sounds = {
  dog: new Audio("sounds/dog.mp3"),
  clap: new Audio("sounds/clap.mp3"),
  pop: new Audio("sounds/pop.mp3"),
  laugh: new Audio("sounds/laugh.mp3"),
  ding: new Audio("sounds/ding.mp3"),
  coin: new Audio("sounds/coin.mp3"),
};

let isMuted = false;

function playSound(name) {
  const audio = sounds[name];
  audio.currentTime = 0;
  audio.play();
}

document.querySelectorAll(".sound-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    playSound(btn.dataset.sound);
  });
});

const volumeSlider = document.getElementById("volume");
volumeSlider.addEventListener("input", () => {
  Object.values(sounds).forEach(s => (s.volume = volumeSlider.value));
});

document.getElementById("muteBtn").addEventListener("click", () => {
  isMuted = !isMuted;
  Object.values(sounds).forEach(s => (s.muted = isMuted));
  muteBtn.textContent = isMuted ? "Unmute" : "Mute";
});
document.addEventListener("keydown", e => {
  const key = e.key.toUpperCase();

  const button = [...document.querySelectorAll(".sound-btn")].find(
    b => b.dataset.key === key
  );

  if (button) {
    button.classList.add("active");
    playSound(button.dataset.sound);
  }
});

document.addEventListener("keyup", e => {
  const key = e.key.toUpperCase();

  document.querySelectorAll(".sound-btn").forEach(btn => {
    if (btn.dataset.key === key) btn.classList.remove("active");
  });
});
