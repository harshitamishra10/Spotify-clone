console.log("Welcome to Spotify");

// Initialize variables
let songIndex = 0;
let audioElement = new Audio();
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let masterSongName = document.getElementById("masterSongName");
let gif = document.getElementById("gif");

let songs = [
    { songName: "Let me love you", filePath: "WhatsApp Audio 2025-07-18 at 11.17.40 AM.mpeg" },
    { songName: "Faded", filePath: "WhatsApp Audio 2025-07-18 at 11.17.40 AM.mpeg" },
    { songName: "Alone", filePath: "WhatsApp Audio 2025-07-18 at 11.17.40 AM.mpeg" },
    { songName: "Spectre", filePath: "WhatsApp Audio 2025-07-18 at 11.17.40 AM.mpeg" },
    { songName: "Fearless", filePath: "WhatsApp Audio 2025-07-18 at 11.17.40 AM.mpeg" },
    { songName: "Heroes Tonight", filePath: "WhatsApp Audio 2025-07-18 at 11.17.40 AM.mpeg" },
    { songName: "On & On", filePath: "WhatsApp Audio 2025-07-18 at 11.17.40 AM.mpeg" },
    { songName: "Force", filePath: "WhatsApp Audio 2025-07-18 at 11.17.40 AM.mpeg" },
    { songName: "Elektronomia - Sky High", filePath: "WhatsApp Audio 2025-07-18 at 11.17.40 AM.mpeg" },
    { songName: "Different Heaven - My Heart", filePath: "WhatsApp Audio 2025-07-18 at 11.17.40 AM.mpeg" }
];

// Reset all play buttons
function makeAllPlays() {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    });
}

// Play song from list
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays();

        songIndex = parseInt(e.target.id);

        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");

        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;

        audioElement.currentTime = 0;
        audioElement.play();

        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    });
});

// Master Play Button
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
});

// Progress Bar Update
audioElement.addEventListener("timeupdate", () => {
    if (audioElement.duration) {
        let progress = parseInt(
            (audioElement.currentTime / audioElement.duration) * 100
        );
        myProgressBar.value = progress;
    }
});

// Seek
myProgressBar.addEventListener("input", () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

// Previous Button
document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
});

// Next Button
document.getElementById("next").addEventListener("click", () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
});
