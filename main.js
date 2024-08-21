let mins = document.getElementById("mins");
let secs = document.getElementById("secs");
let milisecs = document.getElementById("milisecs");
let start_btn = document.getElementById("start-btn");
let stop_btn = document.getElementById("stop-btn");
let Reset_btn = document.getElementById("Reset-btn");
let red = document.querySelector(".red");
let blue = document.querySelector(".blue");
let pink = document.querySelector(".pink");
let container = document.querySelector(".container");
let heading = document.getElementById("heading");


let minutes = 0;
let seconds = 0;
let miliSeconds = 0;

let watchInterval;

function start() {
  watchInterval = setInterval(function () {
    miliSeconds++;
    if (miliSeconds >= 99) {
      seconds++;
      miliSeconds = 0;
    }
    if (seconds >= 59) {
      minutes++;
      seconds = 0;
    }
    milisecs.innerText = miliSeconds;
    secs.innerText = seconds < 10 ? "0" + seconds : seconds;
    mins.innerText = minutes < 10 ? "0" + minutes : minutes;
    start_btn.disabled = true;
  }, 10);
}
function stop() {
  clearInterval(watchInterval);
  start_btn.disabled = false;
}
function reset() {
  clearInterval(watchInterval);
  miliSeconds = 0;
  seconds = 0;
  minutes = 0;
  mins.innerText = "00";
  secs.innerText = "00";
  milisecs.innerText = "00";
  start_btn.disabled = false;
}

red.addEventListener("click", function () {
  container.style.boxShadow =
    "4px 4px 25px red,inset 4px 4px 15px red,inset -4px -4px 15px red";
    start_btn.style.boxShadow = "4px 4px 15px red";
    stop_btn.style.boxShadow = "4px 4px 15px red";
    Reset_btn.style.boxShadow = "4px 4px 15px red";
    heading.style.textShadow = "6px 8px 20px red"
});

blue.addEventListener("click", function () {
  container.style.boxShadow =
    "4px 4px 25px blue,inset 4px 4px 15px blue,inset -4px -4px 15px blue";
    start_btn.style.boxShadow = "4px 4px 15px blue";
    stop_btn.style.boxShadow = "4px 4px 15px blue";
    Reset_btn.style.boxShadow = "4px 4px 15px blue";
    heading.style.textShadow = "6px 8px 20px blue"
});

pink.addEventListener("click", function () {
  container.style.boxShadow =
    "4px 4px 25px pink,inset 4px 4px 15px pink,inset -4px -4px 15px pink";
    start_btn.style.boxShadow = "4px 4px 15px pink";
    stop_btn.style.boxShadow = "4px 4px 15px pink";
    Reset_btn.style.boxShadow = "4px 4px 15px pink";
    heading.style.textShadow = "6px 8px 20px pink"
});
