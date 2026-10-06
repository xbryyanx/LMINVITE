document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const welcome = document.getElementById("welcome");
  const openButton = document.getElementById("openBtn");
  const music = document.getElementById("music");
  const musicButton = document.getElementById("musicButton");

  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => loader.remove(), 700);
    }, 700);
  });

  function updateMusicButton() {
    musicButton.textContent = music.paused ? "♪" : "Ⅱ";
    musicButton.setAttribute("aria-label", music.paused ? "Play music" : "Pause music");
  }

  async function playMusic() {
    try {
      music.volume = 0.7;
      await music.play();
    } catch (error) {
      console.log("Music could not start:", error);
    }
    updateMusicButton();
  }

  openButton.addEventListener("click", () => {
    welcome.classList.add("open");
    playMusic();
  });

  musicButton.addEventListener("click", async () => {
    if (music.paused) {
      await playMusic();
    } else {
      music.pause();
      updateMusicButton();
    }
  });

  music.addEventListener("play", updateMusicButton);
  music.addEventListener("pause", updateMusicButton);
});
