const generateHtml = (obj) => {
  const container = document.createElement('div');
  container.classList.add('score');
  const name = document.createElement('p');
  const score = document.createElement('p');
  name.innerText = obj.user;
  score.innerText = obj.score;
  container.append(name, score);
  return container;
};

export default generateHtml;