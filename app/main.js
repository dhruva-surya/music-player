
let flag=true;
let audio=document.getElementById("audio");
let progress=document.getElementById("progress");
let progressCont=document.getElementById("progressContainer");
let canvas=document.getElementById("canvas");

console.log(canvas.clientWidth)

let twoD=canvas.getContext("2d");



let harr=[];
let yarr=[];

//  twoD.fillStyle="red"
//  twoD.fillRect(0,14,1,17);
//  twoD.fillStyle="black";


 for(let i=2;i<=298;i=i+2){
     let h=Math.floor(Math.random() * 20)+5;
    let y= Math.floor(Math.random() * 6)+8;
  
    twoD.fillRect(i,y,1,h)
  harr.push(h);
  yarr.push(y);
     
 }

 

// function displ(arr){
// for(let i=0;i<arr.length;i++){
//     arr[i]
// }
// }





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
let j=0;
let prev=0;




function updateProgress(e){

    

        const {duration,currentTime}=e.srcElement;
        var progressPer=(currentTime/duration)*100;
        let x=Math.floor(progressPer*2.98);
      
     //  progress.style.width=`${progressPer}%`
       twoD.fillStyle="red" 
       if(x%2==0){ 
         if(x!=prev)  {
     twoD.fillRect(x,yarr[j],1,harr[j]);
     j++;
     prev=x
         }
       }
    
         console.log(x,j)

 



  
     
   }





 


canvas.addEventListener("click",setProgress)

function setProgress(e){
 const width=this.clientWidth;
 const clickX=e.offsetX;
  const duration=audio.duration;
  audio.currentTime=(clickX/width)*duration;

}



