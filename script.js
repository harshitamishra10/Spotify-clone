console.log("Welcome to Spotify")
//initialize the variables
let songIndex = 0;
let AudioElement= new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let Gif = document.getElementById('Gif');
let songs = [
    { songName: "Tumhi mera mandir ", filePath: "C:\Users\neeta\OneDrive\Documents\spotify\WhatsApp Audio 2025-07-18 at 11.17.40 AM.mpeg", coverPath: "cover/1.jpeg" },
    { songName: "Dil Dhadakne Do", filePath: "2.mp3", coverPath: "cover/2.jpeg" },
    { songName: "Tum Hi Ho", filePath: "3.mp3", coverPath: "cover/3.jpeg" },
    { songName: "Shape of You", filePath: "4.mp3", coverPath: "cover/4.jpeg" },
    { songName: "Senorita", filePath: "5.mp3", coverPath: "cover/5.jpeg" },
    { songName: "Despacito", filePath: "6.mp3", coverPath: "cover/6.jpeg" },
    { songName: "Lean On", filePath: "7.mp3", coverPath: "cover/7.jpeg" },
    { songName: "Rockabye", filePath: "8.mp3", coverPath: "cover/8.jpeg" },
    { songName: "Cheap Thrills", filePath: "9.mp3", coverPath: "cover/9.jpeg" },
    { songName: "Faded", filePath: "10.mp3", coverPath: "cover/10.jpeg" }
]
//audioElement.play();
//Handle play/pause click;
masterPlay.addEventListener('click' ,() => {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa play-circle');
        masterPlay.classList.add('fa pause-circle');
     Gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa pause-circle');
        masterPlay.classList.add('fa play-circle');
        Gif.style.opacity = 0;
    }
});

myprogressBar.addEventListener("timeupdate", (event) => {
    console.log('timeupdate')
});