import { MOVIES_FRONT_URL } from "./constants";

export function checkAnswer(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export const getMovies = () => {
  return fetch(`${MOVIES_FRONT_URL}/beatfilm-movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkAnswer);
};
