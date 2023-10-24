// 🚀 Array e loop for
// Percorra o array imprimindo todos os valores contidos nele com a função console.log().
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
}

// Some todos os valores contidos no array e imprima o resultado.
let resultado = 0;

for (let index = 0; index < numbers.length; index += 1){
    resultado += numbers[index];
}

console.log(resultado);

// Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

console.log(resultado / numbers.length);

// Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.

let media = resultado / numbers.length;
let mensagem = '';

if (media > 20){
    mensagem = 'O valor da média aritmética é maior que 20';
} else {
    mensagem = 'O valor da média aritmética é menor ou igual a 20'
}

console.log(mensagem);

// Utilizando for, descubra o maior valor contido no array e imprima-o.

let maiorNumero = 0;

for (let index = 0; index < numbers.length; index += 1){
    if (maiorNumero < numbers[index]){
    maiorNumero = numbers[index];
    }
}

console.log(maiorNumero);

let menorNumero = numbers[0];

for (let index = 1; index < numbers.length; index += 1){
    if (menorNumero > numbers[index]){
        menorNumero = numbers[index];
    }
}

console.log(menorNumero);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

let qtdNumImpar = 0;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 !== 0){
        qtdNumImpar += 1;
    }
};

if (qtdNumImpar === 0){
    console.log('Nenhum valor ímpar encontrado');
} else {
    console.log(qtdNumImpar);
}

console.log(qtdNumImpar);
