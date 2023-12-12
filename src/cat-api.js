
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



const url = 'https://api.thecatapi.com/v1';
const api_key = "live_I5FpNZQDL4q7DeAS9449DfZd6i9OoAP7qNjLaxzN0t0zarCUpnIqARC9ELIn8uYP";

export function fetchBreeds() {
    return fetch(`${url}/breeds?api_key=${api_key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });       
};

export function fetchCatByBreed(breedId) {
    return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });  
};