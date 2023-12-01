const countries = require('./countriesData');

// Exercício 1
// Adicione a propriedade planet com o valor Earth em todos os países diretamente no array countries.

const addPlanet = countries.forEach((country) => {
    country.planet = 'Earth';
});
