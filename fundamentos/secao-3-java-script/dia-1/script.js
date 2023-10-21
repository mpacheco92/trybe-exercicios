// Exercício 1
// Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. É necessário que seu código tenha duas variáveis, num1 e num2, definidas no começo com os valores que serão operados. Escreva códigos para:

// Adição (num1 + num2)
// Subtração (num1 - num2)
// Multiplicação (num1 * num2)
// Divisão (num1 / num2)
// Módulo (num1 % num2)

let num1 = 20;
let num2 = 10;
console.log('Adição: ' + (num1 + num2));
console.log('Subtração: ' + (num1 - num2));
console.log('Multiplicação: ' + (num1 * num2));
console.log('Divisão: ' + (num1 / num2));
console.log('Módulo: ' + (num1 % num2));

////////////////////////////////////////////

// Exercício 2
// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

let numb1 = 5;
let numb2 = 10;

if (numb1 > numb2) {
    console.log('O número ' + numb1 + ' é maior que o número ' + numb2);
} else if (numb1 === numb2) {
    console.log('O número ' + numb1 + ' é igual ao número ' + numb2);
} else {
    console.log('O número ' + numb1 + ' é menor que o número ' + numb2);
}

////////////////////////////////////////////

// Exercício 3
// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

let number1 = 7;
let number2 = 8;
let number3 = 8;

if (number1 > number2 && number1 > number3) {
    console.log('O número maior é o ' + number1);
} else if (number2 > number1 && number2 > number3) {
    console.log('O número maior é o ' + number2);
} else if (number3 > number1 && number3 > number2) {
    console.log('O número maior é o ' + number3);
} else {
    console.log('Os maiores números são iguais');
}

////////////////////////////////////////////

// 🚀 Exercício 4
// Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

// 👀 Dica: para os ângulos serem de um triângulo válido, a soma dos três ângulos deve ser 180 graus. Um ângulo será considerado inválido se não tiver um valor positivo.

let angulo1 = -50;
let angulo2 = 150;
let angulo3 = 80;

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0){
    if (angulo1 + angulo2 + angulo3 === 180){
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('Ângulo inválido!');
}

////////////////////////////////////////////

// Exercício 5
// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

// Atenção ⚠️: não sabe o que é switch/case? Reveja a aula pois pode ter passado despercebido ☺️. Caso queira se aventurar na aprendizagem do switch/case através da documentação, tem um link muito bom te esperando na lição de Recursos Adicionais. Por fim, você terá mais oportunidades de sedimentar o conhecimento sobre a estrutura condicional switch/case ao longo da formação! Agora, só queremos dar visibilidade que existem outras ferramentas para fazer operações condicionais, ok?

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
// ⭐️ Desafio extra, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. Uma dica é pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

// Exemplo: Bispo -> Diagonais.

////////////////////////////////////////////

// 🚀 Exercício 6: Há um par entre nós
// 6 - Utilize if...else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.
// Faça esse exercício utilizando somente um if.

let opcao1 = 7;
let opcao2 = 6;
let opcao3 = 3;

let par = false;

if (opcao1 % 2 === 0 || opcao2 % 2 === 0 || opcao3 % 2 === 0){
    par = true;
}

console.log(par);