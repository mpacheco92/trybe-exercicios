const countries = require('./countriesData');

// Exercício 1
// Adicione a propriedade planet com o valor Earth em todos os países diretamente no array countries.

countries.forEach((country) => country.planet = 'Earth');


// Exercício 2
// Para cada país, crie um objeto apenas com as informação do nome, código da moeda e nome da moeda. Essas informações devem ser armazenadas em um novo array. Faça esse exercício usando o método forEach, não vale map.

const currencyArray = [];

countries.forEach((country) => {
  const currencyObj = {
    name: country.name,
    currencyCode: country.currencies[0].code,
    currencyName: country.currencies[0].name,
  };
  currencyArray.push(currencyObj);
});
