const DOGS_API = 'https://dog.ceo/api/breeds/image/random';
const CATS_API = 'https://api.thecatapi.com/v1/images/search'

const btnDog = document.querySelector('#dog');
const btnCat = document.querySelector('#cat');
const btnSurprise = document.querySelector('#surprise');
const imgPet = document.querySelector('#randompet');

btnDog.addEventListener('click', (event) => {
    event.preventDefault();

    fetch(DOGS_API)
    .then((response) => response.json())
    .then((data) => {
      const petURL = data.message;
      imgPet.src = petURL;
    });
});

btnCat.addEventListener('click', (event) => {
  event.preventDefault();

  fetch(CATS_API)
  .then((response) => response.json())
  .then(([data]) => {
    const petURL = data.url;
    imgPet.src = petURL;
  });
});

btnSurprise.addEventListener('click', (event) => {
  event.preventDefault();

  Promise.any([
    fetch(DOGS_API),
    fetch(CATS_API),
  ])
  .then((response) => response.json())
  .then((data) => {
    const petURL = data.message || data[0].url;
    imgPet.src = petURL;
  });
});