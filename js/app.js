const playBtn = document.getElementById("play");
const audioEl = document.getElementById("audio");
const coverEl = document.getElementById("cover");
const headerEl = document.getElementById("header")
let i=document.querySelector('i')

const tracks = ["music", "music1"]; 
let a = true; i
playBtn.addEventListener('click',()=>{
    if (a){
        audioEl.play()
    }else{
        audioEl.pause()
    }
    
})
let currentTrack = 0;

// const changeTrack = (index) => {
//     audioEl.src = './music/${tracks[index]}.mp3';
//     coverEl.src = '.images/${tracks[index]}.jpg';
// };
// changeTrack(currentTrack);
// playBtn.addEventListener("click", () => {
//    if (headerEl.classList.add("play")){

//    }
//     audioEl.play();
// });