

// const url = 'https://api.thecatapi.com/v1';
// const api_key = "live_I5FpNZQDL4q7DeAS9449DfZd6i9OoAP7qNjLaxzN0t0zarCUpnIqARC9ELIn8uYP";

// export function fetchBreeds() {
//     return fetch(`${url}/breeds?api_key=${api_key}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         });       
// };

// export function fetchCatByBreed(breedId) {
//     return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         });  
// };


'use strict';

const LIST_URL = 'https://api.thecatapi.com/v1/breeds/';
const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
const API_KEY =
  'live_I5FpNZQDL4q7DeAS9449DfZd6i9OoAP7qNjLaxzN0t0zarCUpnIqARC9ELIn8uYP';

// Коллекция пород

function fetchBreeds() {
  return fetch(`${LIST_URL}`)
    .then(resp => {
      // console.log(resp)       // приходит ответ на запрос пород
      if (!resp.ok) {
        if (response.status === 404) {
          return [];
        }
        throw new Error(resp.statusText);
      }
      return resp.json();
    })
    .catch(err => console.error(err));
}

// Информация о коте

function fetchCatByBreed(breedId) {
  return fetch(`${BASE_URL}?breed_ids=${breedId}&api_key=${API_KEY}`)
    .then(resp => {
      // console.log(resp);      // приходит ответ на запрос
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    })
    .catch(err => console.error(err));
}

export { fetchBreeds, fetchCatByBreed };