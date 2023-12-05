const countries = require('./countries');

// Exercício 1
// Crie a função getPopulation que retorne a quantidade total da população de todos os países.

const getPopulation = (array) => {
  const somaPop = array.reduce((acc, country) => acc + country.population, 0);
  return somaPop;
};
getPopulation(countries);

//////////////////////////

// Exercício 2
// 🚀 Crie a função longestName que deve retornar o país com o maior nome.

const longestName = (array) => {
  return array.reduce((acc, country) => acc.name.length > country.name.length ? acc : country)
};
longestName(countries);

//////////////////////////

// Exercício 3
// 🚀 Crie uma função chamada totalAreaByRegion que recebe um parâmetro opcional region com o valor padrão ‘Europe’. Essa função calcula e retorna a área total de todos os países de uma determinada região.

const totalAreaByRegion = (array, region = 'Europe') => {
  const countriesOfRegion = array.filter((country) => country.region === region);
  return countriesOfRegion.reduce((acc, country) => acc + country.area, 0);
};

totalAreaByRegion(countries, 'Asia');

//////////////////////////

// Exercício 4
// 🚀 Crie uma função chamada getLargestCountriesByRegion que retorna um objeto contendo os países com a maior área em cada região. O objeto de retorno deve ter a seguinte estrutura:
// {
//   Asia: { name: 'Afghanistan', area: 652230 },
//   Europe: { name: 'Russia', area: 17098242 },
//   // ...
// }

const getLargestCountriesByRegion = (array) => {
  const findBiggestCountry = (array, region) => {
    const countriess = array.filter((country) => country.region === region);
    const biggestCountry = countriess.reduce((acc, country) => acc.area > country.area ? acc : country);
    return { name: biggestCountry.name, area: biggestCountry.area };
  }
  const regions = [...new Set(array.map((country) => country.region))];
  const addParam = regions.reduce((obj, reg) => {
    obj[reg] = findBiggestCountry(array, `${reg}`);
    return obj;
  },{});
  return addParam;
};

getLargestCountriesByRegion(countries);
