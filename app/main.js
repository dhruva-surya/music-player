
let flag=true;
let audio=document.getElementById("audio");
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


audio.ontimeupdate = function() {myFunction()};

function myFunction() {

  console.log(audio.currentTime)
}


