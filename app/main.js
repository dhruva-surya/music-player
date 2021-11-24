
let flag=true;
let audio=document.getElementById("audio");
let progress=document.getElementById("progress");
let progressCont=document.getElementById("progressContainer");
let canvas=document.getElementById("canvas");

let twoD=canvas.getContext("2d");


 twoD.fillStyle="green"
 twoD.fillRect(2,3,1,30)
 twoD.fillRect(4,10,1,30-20)
 twoD.fillRect(6,30-20,1,30-10)
 




function playPause(){
    let button=document.getElementById("playAndPause")
    
    if(flag){
    audio.play();
    button.innerHTML="&#9208";
    flag=false;
    }else{
        audio.pause();
        flag=true;
        button.innerHTML="&#9658"
    }
  
}




audio.addEventListener("timeupdate",updateProgress);
let i=0;
function updateProgress(e){
  
  const {duration,currentTime}=e.srcElement;
  var progressPer=(currentTime/duration)*100;
 
 // progress.style.width=`${progressPer}%`
 
 
}

canvas.addEventListener("click",setProgress)

function setProgress(e){
 const width=this.clientWidth;
 const clickX=e.offsetX;
  const duration=audio.duration;
  audio.currentTime=(clickX/width)*duration;

}



