const playBtn = document.getElementById("playBtn");
const music = document.getElementById("bgMusic");
const startContainer = document.getElementById("startContainer");
const nextButtons = document.querySelectorAll(".nextBtn");
const backButtons = document.querySelectorAll(".backBtn");
const heartBtn = document.getElementById("heartBtn");

const playlist = [
    "Moira Dela Torre - Kumpas (Official Lyric Video).mp3",
    "Ikaw at ako ( with lyrics)  johnoy danao.mp3",
    "NIKI - You'll be in my heart.mp3",
    "Hale - Kung Wala Ka (Lyrics).mp3",
    "Tothapi - Panata (Official Performance Video).mp3"
];

let currentTrack = 0;

// Play next song when one ends
function playNextSong() {
    currentTrack++;
    if (currentTrack < playlist.length) {
        music.src = playlist[currentTrack];
        music.play().catch(err => console.log("Autoplay blocked:", err));
    }
}

// Next button
nextButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const currentContainer = btn.closest(".container");
        const nextContainer = document.getElementById(btn.dataset.next);

        currentContainer.classList.remove("visible");
        currentContainer.classList.add("hidden");

        setTimeout(() => {
            nextContainer.classList.remove("hidden");
            nextContainer.classList.add("visible");
            window.scrollTo(0, 0);
        }, 500);
    });
});

// Back button
backButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const currentContainer = btn.closest(".container");
        const prevContainer = document.getElementById(btn.dataset.prev);

        currentContainer.classList.remove("visible");
        currentContainer.classList.add("hidden");

        setTimeout(() => {
            prevContainer.classList.remove("hidden");
            prevContainer.classList.add("visible");
            window.scrollTo(0, 0);
        }, 500);
    });
});

// Play music and start first message
playBtn.addEventListener("click", () => {
    music.src = playlist[currentTrack];
    music.play().then(() => {
        startContainer.classList.remove("visible");
        startContainer.classList.add("hidden");

        setTimeout(() => {
            const msg1 = document.getElementById("messageContainer1");
            msg1.classList.remove("hidden");
            msg1.classList.add("visible");
            window.scrollTo(0, 0);
        }, 500);
    }).catch(err => {
        console.log("Autoplay blocked:", err);
        startContainer.classList.remove("visible");
        startContainer.classList.add("hidden");
        setTimeout(() => {
            const msg1 = document.getElementById("messageContainer1");
            msg1.classList.remove("hidden");
            msg1.classList.add("visible");
            window.scrollTo(0, 0);
        }, 500);
    });
});

music.addEventListener("ended", playNextSong);

// Heart button shows final message
heartBtn.addEventListener("click", () => {
    const finalMessage = document.createElement("p");
    finalMessage.textContent = "I love you always mommy ko 💖";
    finalMessage.style.fontSize = "2em";
    finalMessage.style.fontStyle = "italic";
    finalMessage.style.marginTop = "30px";
    finalMessage.style.color = "#ffccd5";

    heartBtn.parentNode.appendChild(finalMessage);
    heartBtn.disabled = true;
});

// Audio error handling
music.addEventListener("error", (e) => {
    console.log("Audio error:", e);
    playNextSong();
});
