import state from "./state.js";
import * as elements from "./elements.js";
import { reset } from "./actions.js";

let minutes = 25;
let seconds = 0;

minutes = Number(elements.minutes.textContent);
seconds = Number(elements.seconds.textContent);

export function countDown() {
  if (state.isRunning === false) return;

  clearInterval(state.countDownId);
  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    const finishSound = new Audio("assets/kichen-timer.mp3");
    finishSound.volume = 0.1;
    finishSound.play();
    reset();
    return;
  }

  updateDisplay(minutes, seconds);
  state.countDownId = setTimeout(() => countDown(), 1000);
}

export function updateSum(sum) {
  minutes += sum;
  if (minutes > 60) {
    minutes = 60;
    seconds = 0;
  }

  updateDisplay(minutes, seconds);
}

export function updateSub(sub) {
  minutes -= sub;
  if (minutes < 0) {
    seconds = 0;
    minutes = 0;
    reset();
    seconds = state.seconds;
    minutes = state.minutes;
  }
  updateDisplay(minutes, seconds);
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  elements.minutes.textContent = String(minutes).padStart(2, "0");
  elements.seconds.textContent = String(seconds).padStart(2, "0");
}

export function tudoOuNada() {
  minutes = state.minutes;
  seconds = state.seconds;
  updateDisplay(minutes, seconds);
}

export function updateMinutesHandler(count) {
  minutes = Number(count);
  minutes.toFixed(2);
  if (minutes > 60) {
    minutes = 60;
    seconds = 0;
  }

  if (isNaN(minutes)) {
    minutes = state.minutes;
  }

  updateDisplay(minutes, seconds);
}
