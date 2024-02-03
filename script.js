let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;

function StartStop() {
  if (isRunning) {
    clearInterval(timer); // Clears the interval timer
  } else {
    timer = setInterval(updateDisplay, 1000); // Sets up the interval timer
  }
  isRunning = !isRunning;
  console.log("timer:", timer);
}

function reset() {
  isRunning = false;
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  const display = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  document.getElementById("display").textContent = display;
}

function updateDisplay() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  const display = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  document.getElementById("display").textContent = display;
}

function pad(value) {
  return value < 10 ? "0" + value : value; //used to add 0 before single digits i.e,<10.
}
