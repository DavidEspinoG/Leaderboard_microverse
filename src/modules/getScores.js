import baseUrl from './baseUrl.js';
import gameId from './gameId.js';

const getScores = async () => {
  const url = `${baseUrl + gameId}/scores/`;
  const res = await fetch(url);
  const data = await res.json();
  const sorted = await data.result.sort((a, b) => b.score - a.score);
  return sorted;
};

export default getScores;