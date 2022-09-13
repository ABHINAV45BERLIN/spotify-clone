console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songsItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"Let me love you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"see you again", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"my heart will go on", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"we don't talk anyomre", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"despacito", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"dark is the night", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"hello", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"always and forever", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName:"smoke in the air", filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},
    
  
]

songsItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
})

//audioElement.play();
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    
    //update seekabar

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
