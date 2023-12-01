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


// Exercício 4
// Desenvolva uma função que crie uma cópia do array countries e adicione a Alemanha a esse novo array através do spread operator.

const newCountry = {
  name: 'Germany',
  region: 'Europe',
  currencies: [{ code: 'EUR', name: 'Euro' }],
  capital: 'Berlin',
  population: 83190556,
  area: 357386
};

const addCountry = (array, obj) => [...array, obj];


// Exercício 5
// Desenvolva uma solução para percorrer o array countries e construir uma string para cada país com informações e formatação específicas. As propriedades são passadas como argumentos para a função buildString e adicionadas à string final. A string deverá ser construída com as propriedades name, capital, currencies.code e currencies.name separadas por um -.

const buildString = (array, name, ...arg) => {
  array.find((country) => country.name === name)
  let string = `${name}`;
  arg.forEach((item) => string += ` - ${item}`)
  return string;
}

const addParam = () => {
  countries.forEach((country) => {
    console.log(buildString(countries, country.name, country.region, country.currencies[0].code, country.currencies[0].name));
  })
}

addParam();


// const buildString = (array, name, ...arg) => {
//   const string = array.find((country) => country.name === name)
//   console.log(string);
//   return `${string.name} - ${arg[0]} - ${arg[1]} - ${arg[2]}`
// }

// const addParam = () => {
//   countries.forEach((country) => {
//     console.log(buildString(countries, country.name, country.region, country.currencies[0].code, country.currencies[0].name));
//   })
// }

// addParam();
