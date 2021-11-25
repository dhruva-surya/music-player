
let flag=true;
let audio=document.getElementById("audio");
let progress=document.getElementById("progress");
let progressCont=document.getElementById("progressContainer");
let canvas=document.getElementById("canvas");
let twoD=canvas.getContext("2d");  //two dimension is created







let harr=[];  //to store randon height value
let yarr=[]; //to store random  y value



//adding element with random h and x value and storing in arrays respectively

 for(let i=2;i<=298;i=i+2){
     let h=Math.floor(Math.random() * (20-12)+12);
    let y= Math.floor(Math.random() * (32-22)+22);
    console.log(h)
  
  harr.push(h);
  yarr.push(y);
     
 }

 function display(x){
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


twoD.fillStyle="#0288D1"
twoD.fillRect(248,6,1,22);
twoD.beginPath();
twoD.fillStyle = "#0288D1";
twoD.arc(248.5, 30, 2, 0, 2 * Math.PI);
twoD.strokeStyle = "#0288D1";
twoD.fill();
twoD.stroke();

twoD.fillStyle="#33691E"
twoD.fillRect(275,5.8,1,22);
twoD.beginPath();
twoD.fillStyle = "#33691E";
twoD.arc(275.5, 30, 2, 0, 2 * Math.PI);
twoD.strokeStyle = "#33691E";
twoD.fill();
twoD.stroke();

twoD.fillStyle="#283593"
twoD.fillRect(290,8,1,20);
twoD.beginPath();
twoD.fillStyle = "#283593";
twoD.arc(290.5, 30, 2, 0, 2 * Math.PI);
twoD.strokeStyle = "#283593";
twoD.fill();
twoD.stroke();

twoD.fillStyle="#4A148C"
twoD.fillRect(267,16,1,14);
twoD.beginPath();
twoD.fillStyle = "#4A148C";
twoD.arc(267.5, 30, 2, 0, 2 * Math.PI);
twoD.strokeStyle = "#4A148C";
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


 display() //intinial display function is called to set 2d con






//function to pause and play
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




audio.addEventListener("timeupdate",updateProgress); //eventlistner to get current time and it is triggerd when the time of the audio changes every time.

let prev=0;

function updateProgress(e){
   const {duration,currentTime}=e.srcElement;
   var progressPer=(currentTime/duration)*100; // time coverd in percentage
   let x=Math.floor(progressPer*2.98);  //converting to 300 as canvas width is 300
      
     
       twoD.fillStyle="red" 
       if(x%2==0){ 
         if(x!=prev)  {
            twoD.clearRect(0, 0, canvas.width, canvas.height); //clearing the old canvas
      
            display(x); //display is called once again to update the canvas based on new time
           prev=x;
         }
       }
 

     
   }



canvas.addEventListener("click",setProgress)  //click event to get the audio time of the position were it is clicked 

function setProgress(e){
 const width=this.clientWidth; //this refers to canvas element
 const click=e.offsetX;   //length were it is clicked
  const duration=audio.duration;
  audio.currentTime=(click/width)*duration; 

}



