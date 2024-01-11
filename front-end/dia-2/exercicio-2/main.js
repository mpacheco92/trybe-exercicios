import Swal from 'sweetalert2';

const HEROES_API = 'https://akabab.github.io/superhero-api/api';
const MAX_HEROES = 1000;

const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

const randomId = () => Math.floor(Math.random() * MAX_HEROES);

button.addEventListener('click', (event) => {
  event.preventDefault();

  const id = randomId();

  fetch(`${HEROES_API}/id/${id}.json`)
    .then((response) => response.json())
    .then((data) => {
      img.src = data.images.md;
      name.innerHTML = data.name;
    })
    .catch((error) => {
      Swal.fire({
        title: 'Hero not found',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Cool',
      });
    });
});
