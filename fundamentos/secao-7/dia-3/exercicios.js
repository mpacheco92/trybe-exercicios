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


// Exercício 3
// Escreva uma função chamada findCountry que recebe dois parâmetros: o array de países e o nome do país desejado. Ao receber esses valores, a função deve retornar o elemento do país desejado. Caso não seja encontrado, a função deve lançar um erro com a mensagem: “País não encontrado!”.

const findCountry = (array, countryName) => {
  const findCountry = array.find((country) => country.name === countryName);
  if (findCountry) {
    return findCountry;
  } return 'País não encontrado!';
};
