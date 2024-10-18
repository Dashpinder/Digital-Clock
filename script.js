
function updateTimer() {
  let clockTimer= document.getElementById("clockTimer");

  let today= new Date();

  let hours = today.getHours();
  let minutes= today.getMinutes();
  let seconds= today.getSeconds();

hours = hours < 10 ? "0"+ hours : hours;
minutes= minutes < 10 ? "0"+ minutes : minutes;
seconds= seconds < 10 ? "0"+ seconds : seconds; 


clockTimer.innerHTML= `${hours} : ${minutes} : ${seconds}`;


}
setInterval(updateTimer, 1000);


