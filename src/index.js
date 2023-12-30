import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import './styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css';

const ref = {
    selector: document.querySelector('.breed-select'),
    divCatInfo: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
};
const { selector, divCatInfo, loader, error } = ref;

loader.classList.replace('loader', 'is-hidden');
error.classList.add('is-hidden');
divCatInfo.classList.add('is-hidden');

let arrBreedsId = [];
fetchBreeds()
.then(data => {
    data.forEach(element => {
        arrBreedsId.push({text: element.name, value: element.id});
    });
    new SlimSelect({
        select: selector,
        data: arrBreedsId
    });
    })
.catch(onFetchError);

selector.addEventListener('change', onSelectBreed);

function onSelectBreed(event) {
    loader.classList.replace('is-hidden', 'loader');
    selector.classList.add('is-hidden');
    divCatInfo.classList.add('is-hidden');

    const breedId = event.currentTarget.value;
    fetchCatByBreed(breedId)
    .then(data => {
        loader.classList.replace('loader', 'is-hidden');
        selector.classList.remove('is-hidden');
        const { url, breeds } = data[0];
        
        divCatInfo.innerHTML = `<div class="box-img">
<img src="${url}" alt="${breeds[0].name}" width="400"/></div>
<div class="box"><h1>${breeds[0].name}</h1><p>${breeds[0].description}</p>
<p><b>Temperament:</b> ${breeds[0].temperament}</p></div>`
        divCatInfo.classList.remove('is-hidden');
    })
    .catch(onFetchError);
};

function onFetchError(error) {
    selector.classList.remove('is-hidden');
    loader.classList.replace('loader', 'is-hidden');

    Notify.failure('Oops! Something went wrong! Try reloading the page or select another cat breed!', {
        position: 'center-center',
        timeout: 5000,
        width: '400px',
        fontSize: '24px'
    });
};
   






    




// 'use strict';
// import SlimSelect from 'slim-select';
// import 'slim-select/dist/slimselect.css';
// import { Loading } from 'notiflix';
// import { Notify } from 'notiflix';
// import './styles.css';
// import { fetchBreeds, fetchCatByBreed } from './cat-api';

// const refs = {
//   select: document.querySelector('.breed-select'),
//   loader: document.querySelector('.loader'),
//   textError: document.querySelector('.error'),
//   catInfo: document.querySelector('.cat-info'),
 
// };

// refs.loader.style.display = 'none';
// refs.textError.style.display = 'none';
// refs.select.style.display = 'none';
// refs.catInfo.style.display = 'none';


// Loading.dots({
//   svgColor: '#5897fb',
//   svgSize: '130px',
//   messageFontSize: '30px',
// });

// // Коллекция пород

// fetchBreeds()
//   .then(data => {
//     refs.select.style.display = 'flex';
//     refs.loader.style.display = 'none';

//     if (Object.keys(data).length === 0) {
//       Notify.failure(refs.textError.textContent);
//       return;
//     }
//     createOptions(data)
//   })
//   .catch(err => {
//     Notify.failure(refs.textError.textContent);
//   })
//   .finally(result => Loading.remove());

// function createOptions(arr) {
//   const markup = arr.map(item => `<option value="${item.id}">${item.name}</option>`).join('');

//   refs.select.innerHTML = markup;

//   new SlimSelect({
//     select: '#selectElement',
//   })
// };

// refs.select.addEventListener('change', onSearch);

// // Информация о коте

// function onSearch(evt) {
//   // evt.preventDefault();
//   const breedId = evt.currentTarget.value.trim();
//   // console.log(breedId);

//   Loading.dots({
//     svgColor: '#5897fb',
//     svgSize: '130px',
//     messageFontSize: '30px',
//   });

//   if (!breedId) {
//     Notify.failure('Empty field');
//     return;
//   } else if (breedId === '') {
//     Notify.failure(refs.textError.textContent)
//     return;
//   }
//   fetchCatByBreed(breedId)
//     .then(data => {
//       // console.log(data);      //object
//       refs.catInfo.style.display = 'block';
//       createMarkup(data);
//     }).catch(err => {
//       Notify.failure(refs.textError.textContent);
//     })
//     .finally(result => Loading.remove());

// };


// function createMarkup(arr) {
//   console.log(arr);        //object

//   const markup = arr.map(({ breeds, id, url, width }) =>
//     `<p>Breed: ${breeds[0].name}</p>
//     <img src="${url}" width="400" height="200" alt="${breeds[0].name}">
//     <p>Temperament: ${breeds[0].temperament}</p>
//     <p>Description: ${breeds[0].description}</p>`
//   )
//     .join('');

//   refs.catInfo.insertAdjacentHTML('beforeend', markup)
// };







