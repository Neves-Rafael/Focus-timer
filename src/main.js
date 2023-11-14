import "./switch-stations.js";
import * as FocusTimer from "./FocusTimer/index.js";

FocusTimer.start(25, 0);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.key === "v") {
    e.preventDefault();
  }
});

document.addEventListener('DOMContentLoaded', function() {
    var spanElement = document.getElementById('minutes');

    // Adicione um ouvinte para a entrada de texto no span
    spanElement.addEventListener('input', function() {
      // Limita o conteúdo do span a 2 caracteres
      spanElement.textContent = spanElement.textContent.slice(0, 2);
    });
  });