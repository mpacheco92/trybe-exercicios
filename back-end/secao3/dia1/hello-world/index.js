const readline = require('readline-sync');

const name = readline.question('Digite seu nome: ');
const lastName = readline.question('Digite seu Sobrenome: ');

console.log(`Hello, ${name} ${lastName}`);
