import baseUrl from './baseUrl.js';
import gameId from './gameId.js';

const getScores = async () => {
  const url = `${baseUrl + gameId}/scores/`;
  const res = await fetch(url);
  const data = await res.json();
  return data.result;
};

export default getScores;