import './style.scss';
import newScore from './modules/newScore.js';
import generateHtml from './modules/generateHtml.js';
import getScores from './modules/getScores.js';

const form = document.getElementById('newScore');
const scoreContainer = document.getElementById('scores__container');
const refreshButton = document.getElementById('refresh-button');
const messageContainer = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.elements.name.value;
  const score = parseInt(form.elements.score.value, 10);
  newScore(name, score);
  messageContainer.innerText = '';
  const message = document.createElement('p');
  message.innerText = 'New score succesfully created';
  messageContainer.appendChild(message);
  setTimeout(() => {
    messageContainer.innerHTML = '';
  }, 4000);
  setTimeout(() => {
    scoreContainer.innerHTML = '';
    getScores().then((data) => {
      data.forEach((element) => {
        scoreContainer.appendChild(generateHtml(element));
      });
    });
  }, 2000);
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
  getScores()
    .then((data) => {
      data.forEach((element) => {
        scoreContainer.appendChild(generateHtml(element));
      });
    });
});