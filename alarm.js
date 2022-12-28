console.log("playing audio..")
// let  audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
// audio.play();
let reex=/[a-zA-Z]/
const alarmsubmit=document.getElementById("alarmsubmit")
const alarmstop=document.getElementById("alarmstop")
const val=document.getElementById("alarm")
let strii=val.value
console.log(strii)
let  audio = new Audio("alarmsound.mp3");
alarmsubmit.addEventListener("click",setAlarm)
alarmstop.addEventListener("click",stopAlarm)


function ringBell(){

    audio.play();

}

function setAlarm(e){
 e.preventDefault();
    console.log("setting alarm");
    const alarm=document.getElementById("alarm")
   
    
if(reex.test(val.value)){
    alert("enter valid date")
    console.log("invalid")
}
else{
    alarmDate=new Date(alarm.value)
}
    let str=`alarm set for ${alarmDate}`
    document.getElementById("small").innerHTML=str
    console.log(alarmDate/1000)
    now=new Date()
    // console.log(now)
let timetoalarm=alarmDate-now
document.getElementById("small2").innerHTML="Alarm will ring after "+timetoalarm+" milliseconds"
console.log("setting alarm for..",timetoalarm)
if(timetoalarm>=0){
    setTimeout(()=>{
     ringBell()
     console.log("ringing now")
    },timetoalarm)
}}
function stopAlarm(e){
    e.preventDefault()
    audio.pause()
}

