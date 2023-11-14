import "./switch-stations.js";
import * as FocusTimer from "./FocusTimer/index.js";

FocusTimer.start(25, 0);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
  }
});
