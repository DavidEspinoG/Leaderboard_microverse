import './style.scss';
import newScore from './modules/newScore.js';
import generateHtml from './modules/generateHtml.js';
import getScores from './modules/getScores.js';

const form = document.getElementById('newScore');
const scoreContainer = document.getElementById('scores__container');
const refreshButton = document.getElementById('refresh-button');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.elements.name.value;
  const score = parseInt(form.elements.score.value);
  newScore(name, score);
});

refreshButton.addEventListener('click', () => {
  scoreContainer.innerHTML = '';
  getScores().then((data) => {
    data.forEach((element) => {
      scoreContainer.appendChild(generateHtml(element));
    });
  });
});

window.addEventListener('DOMContentLoaded', () => {
  getScores().then((data) => {
    data.forEach((element) => {
      scoreContainer.appendChild(generateHtml(element));
    });
  });
});