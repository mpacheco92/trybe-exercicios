const { pokemons } = require('./data');
// console.log(pokemons);

// Exercício 1
// Utilizando o método filter e object destructuring, crie uma função filterStrongPokemons que retorna um novo array contendo apenas os Pokémons com nível superior a 30.
// const filterStrongPokemons = (array) => array.filter((pokemon) => pokemon.level > 30);

const filterStrongPokemons = (array) => array.filter(({ level }) => level > 30);

filterStrongPokemons(pokemons);


// Exercício 2
// Utilizando os métodos filter e map encadeados, crie uma função getStrongPokemonNames que retorna um novo array contendo apenas os nomes dos Pokémons com nível superior a 50.

const getStrongPokemonNames = (array) => array
  .filter(({ level }) => level > 50)
  .map(({ name }) => name);

getStrongPokemonNames(pokemons)


// Exercício 3
// Utilize o método sort para ordenar o array de Pokémons em ordem crescente com base no nível de cada Pokémon.

const pokemonsOrdenados = pokemons.sort((a, b) => a.level - b.level);


// Exercício 4
// Utilizando o método sort e default destructuring, crie uma função chamada sortPokemons que retorna o array de Pokémons ordenado por nível em ordem decrescente. Caso dois Pokémons tenham o mesmo nível, a ordenação deve ser feita pelo nome em ordem alfabética crescente.

const sortPokemons = (array) => array
.sort(({level: levelA, name: nameA}, { level: levelB, name: nameB}) => {
    if (levelA === levelB) {
      return nameA.localeCompare(nameB)
    } return levelA - levelB
  });

sortPokemons(pokemons);