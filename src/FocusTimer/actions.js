import { minutes } from "./elements.js";
import state from "./state.js";
import * as timer from "./timer.js";
import * as station from "../switch-stations.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");
  const toggleSound = new Audio("assets/button-press.wav");
  toggleSound.volume = 0.1;
  toggleSound.play();
  timer.countDown();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  timer.tudoOuNada();
}

export function set() {
  let verificando = document.documentElement.classList.toggle("set");

  if (verificando) {
    minutes.setAttribute("contenteditable", true);
    const valueMinutesSpan = minutes.innerText;

    timer.updateMinutesHandler(valueMinutesSpan);
  } else {
    minutes.setAttribute("contenteditable", false);
  }

  const valueMinutesSpan = minutes.innerText;
  minutes.focus();
  timer.updateMinutesHandler(valueMinutesSpan);
}

export function plusCount() {
  timer.updateSum(5);
}

export function minusCount() {
  timer.updateSub(5);
}

export function toggleMusic() {
  state.isMuted = document.documentElement.classList.toggle("music-on");
  state.isMuted ? station.playMusic() : station.stopMusic();
}

export function toggleAnimate() {
  state.isAnimate = document.documentElement.classList.toggle("animate-on");

  const videoUpdate = document.querySelectorAll("video");
  videoUpdate.forEach((video) => {
    state.isAnimate ? video.play() : video.pause();
  });
}
