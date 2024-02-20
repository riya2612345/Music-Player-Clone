var arr = [
     { songname:"Heroin",url:"./music/Heroine(PagalWorld.com.cm).mp3",img:"./images/heroin.jpg" },
     { songname:"Aa",url:"./music/Aa_Arif_Lohar_Deep_Jandu.mp3",img:"./images/Aa.jpg.jpg" },
     { songname:"Pehle bhi main",url:"./music/Pehle Bhi Main Tumse Mila Hu(PagalWorld.com.cm).mp3",img:"./images/pehlebhimain.jpg" }, 
     { songname:"Ram Siya Ram",url:"./music/128-Ram Siya Ram - Adipurush 128 Kbps.mp3",img:"./images/ramsiya.jpg.jpg" }
    ]
var allsongs = document.querySelector("#all-songs");
var poster = document.querySelector("#left");

var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");



var audio = new Audio();

var selectedSong = 0;

function mainFunction(){
    var clutter = "";

arr.forEach(function(elem, index) {
    clutter +=  `<div class="songs-card" id=${index}>
    <div class="part1">
        <img src=${elem.img} alt="">
    <h2>${elem.songname}</h2>
    </div>
    <h6>3.56</h6>
</div>`
 })
 allsongs.innerHTML = clutter;

 audio.src = arr[selectedSong].url
 poster.style.backgroundImage = `url(${arr[selectedSong].img})`
}
mainFunction();

allsongs.addEventListener("click", function (dets) {
    selectedSong = dets.target.id;
    mainFunction();
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    flag = 1;
    audio.play();
})

var flag = 0;

play.addEventListener("click",function(){
    if(flag == 0){
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
        mainFunction();
        audio.play();
        flag = 1;
    }else{
        play.innerHTML = `<i class="ri-play-fill"></i>`;
        mainFunction();
        audio.pause();
        flag = 0;
    }
})

forward.addEventListener("click", function () {
    if (selectedSong < arr.length - 1) {
        selectedSong++
        mainFunction()
        audio.play()
    }else{
        forward.style.opacity = 0.4
    }
})
backward.addEventListener("click", function () {
    if (selectedSong >= 0) {
        selectedSong--
        mainFunction()
        audio.play()
    }else{
        backward.style.opacity = 0.4
    }
    
})