import baseUrl from './baseUrl.js';
import gameId from './gameId.js';

const newScore = async (user, score) => {
  const url = `${baseUrl + gameId}/scores/`;
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  };
  const res = await fetch(url, config);
  const data = await res.json();
  return data;
};

export default newScore;