
let flag=true;
let audio=document.getElementById("audio");
let progress=document.getElementById("progress");
let progressCont=document.getElementById("progressContainer");
let canvas=document.getElementById("canvas");







let twoD=canvas.getContext("2d");







let harr=[];
let yarr=[];





 for(let i=2;i<=298;i=i+2){
     let h=Math.floor(Math.random() * (20-5)+5);
    let y= Math.floor(Math.random() * (32-27)+27);
    console.log(h)
  
  harr.push(h);
  yarr.push(y);
     
 }

 function dis(x){
twoD.fillStyle="greenyellow"
twoD.fillRect(21,7,1,21);
twoD.beginPath();
twoD.fillStyle = "greenyellow";
twoD.arc(21.5, 30, 2, 0, 2 * Math.PI);
twoD.strokeStyle = "greenyellow";
twoD.fill();
twoD.stroke();


twoD.fillStyle="#0288D1"
twoD.fillRect(49,7,1,21);
twoD.beginPath();
twoD.fillStyle = "g#0288D1";
twoD.arc(49.5, 30, 2, 0, 2 * Math.PI);
twoD.strokeStyle = "#0288D1";
twoD.fill();
twoD.stroke();
     
    
     let j=0;
     twoD.fillStyle="black";
  for(let i=2;i<=298;i=i+2){
     if(i==x){ 
   twoD.fillStyle="#9E9E9E"
     }
     twoD.fillRect(i,yarr[j],1,harr[j])
    j++
  }


 }


 dis()







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

let prev=0;




function updateProgress(e){

   

        const {duration,currentTime}=e.srcElement;
        var progressPer=(currentTime/duration)*100;
        let x=Math.floor(progressPer*2.98);
      
     
       twoD.fillStyle="red" 
       if(x%2==0){ 
         if(x!=prev)  {
            twoD.clearRect(0, 0, canvas.width, canvas.height);
      
            dis(x);
           prev=x;
         }
       }
 
   



  
     
   }





 


canvas.addEventListener("click",setProgress)

function setProgress(e){
 const width=this.clientWidth;
 const clickX=e.offsetX;
  const duration=audio.duration;
  audio.currentTime=(clickX/width)*duration;

}



