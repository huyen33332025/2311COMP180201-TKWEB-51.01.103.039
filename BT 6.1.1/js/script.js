const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
let isPlaying = false;

musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
        music.play();
        musicBtn.textContent = "⏸ Dừng nhạc";
    } else {
        music.pause();
        musicBtn.textContent = "🎵 Phát nhạc";
    }
    isPlaying = !isPlaying;
});

const aquarium = document.getElementById("aquarium");
const bgImages = [
    "../images/nen-1.jpeg",
    "../images/nen-2.jpg",
    "../images/nen-3.webp",
];
let currentBg = 0;
aquarium.style.backgroundImage = `url('${bgImages[currentBg]}')`;

document.getElementById("changeBgBtn").addEventListener("click", () => {
    currentBg = (currentBg + 1) % bgImages.length;
    aquarium.style.backgroundImage = `url('${bgImages[currentBg]}')`;
});