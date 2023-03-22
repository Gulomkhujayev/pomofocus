const startBtn = document.getElementById("start-btn");
const times = document.querySelector(".times");
const pomodoroTime = document.querySelector(".pomodoro");
const shortTime = document.querySelector(".short");
const longTime = document.querySelector(".long");
let interVal;
let seconds;
let minute = 25;
seconds = minute * 60;
pomodoroTime.addEventListener("click", () => {
    document.body.style.background = '#4295bf'
  if (startBtn.classList.contains("active")) {
    alert("are you sure?");
  }
  minute = 25;
  seconds = minute * 60;
  times.textContent = "25:00";
  resetTime();
});
shortTime.addEventListener("click", () => {
    document.body.style.background = '#54cd78'
  if (startBtn.classList.contains("active")) {
    alert("are you sure?");
  }
  minute = 5;
  seconds = minute * 60;
  times.textContent = "05:00";
  resetTime();
});
longTime.addEventListener("click", () => {
    document.body.style.background = '#bb4949'
  if (startBtn.classList.contains("active")) {
    alert("are you sure?");
  }
  minute = 15;
  seconds = minute * 60;
  times.textContent = "15:00";
  resetTime();
});

function startTime() {
  let minutes = Math.floor(seconds / 60);
  let second = seconds % 60;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  second = second < 10 ? `0${second}` : second;
  times.textContent = `${minutes}:${second}`;
  seconds--;
}

startBtn.addEventListener("click", () => {
  startBtn.classList.toggle("active");
  if (startBtn.classList.contains("active")) {
    startBtn.textContent = "Pause";
    interVal = setInterval(startTime, 1000);
  } else {
    resetTime();
  }
});

function resetTime() {
  startBtn.classList.remove("active");
  startBtn.textContent = "Start";
  clearInterval(interVal);
}
