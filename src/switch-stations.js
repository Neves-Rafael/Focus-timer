// import * as state from "./FocusTimer/state.js";
import { toggleMusic } from "./FocusTimer/actions.js";

const winter = document.getElementById("winter");
winter.addEventListener("click", () => {
  switchStation("winter");
  updateIconMusic()
});

const summer = document.getElementById("summer");
summer.addEventListener("click", () => {
  switchStation("summer");
  updateIconMusic()
});

const fall = document.getElementById("fall");
fall.addEventListener("click", () => {
  switchStation("fall");
  updateIconMusic()
});

const spring = document.getElementById("spring");
spring.addEventListener("click", () => {
  switchStation("spring");
  updateIconMusic()
});

let atualStation = "";

export function switchStation(station) {
  const htmlUpdate = document.documentElement;
  htmlUpdate.classList.remove("winter", "summer", "fall", "spring");
  htmlUpdate.classList.add(station);
  atualStation = station;

  stopMusic();
  playMusic(station);
}

const winterAudio = new Audio("assets/lofi-1.mp3");
winterAudio.loop = true;
const summerAudio = new Audio("assets/lofi-2.mp3");
summerAudio.loop = true;
const fallAudio = new Audio("assets/lofi-3.mp3");
fallAudio.loop = true;
const springAudio = new Audio("assets/lofi-4.mp3");
springAudio.loop = true;



export function stopMusic() {
  winterAudio.pause();
  summerAudio.pause();
  fallAudio.pause();
  springAudio.pause();
}

export function playMusic() {
  switch (atualStation) {
    case "winter":
      winterAudio.play();
      break;
    case "summer":
      summerAudio.play();
      break;
    case "fall":
      fallAudio.play();
      break;
    case "spring":
      springAudio.play();
      break;
    default:
      winterAudio.play();
  }
}

let currentVolume = 0.5;
updateVolume();

document.addEventListener('DOMContentLoaded', function () {
  const rangeInput = document.getElementById('rangeSelector');

  rangeInput.addEventListener('input', function () {
    const rangeValue = rangeInput.value;
    currentVolume = rangeValue / 100;
    updateVolume();
  });
});

function updateVolume() {
  winterAudio.volume = currentVolume;
  summerAudio.volume = currentVolume;
  fallAudio.volume = currentVolume;
  springAudio.volume = currentVolume;
}

function updateIconMusic(){
  document.documentElement.classList.add("music-on");
  console.log("music-on")
}