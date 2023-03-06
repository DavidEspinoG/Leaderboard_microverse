import baseUrl from './baseUrl.js';

const createGame = async (name) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
    }),
  };
  const res = await fetch(baseUrl, config);
  const data = await res.json();
  return data;
};

export default createGame;