// Exercício 1
// Dado um array de temperaturas em graus Celsius, crie uma função que retorne um novo array com as temperaturas convertidas para Fahrenheit. A fórmula de conversão é: Fahrenheit = (Celsius * 9/5) + 32.

// Temperaturas em graus Celsius
const temperaturesCelsius = [23, 10, 32, 21, 47];

const temperaturesCelsiusToFahrenheit = temperaturesCelsius.map((number) => (number * 9/5) + 32);


// Exercício 2
// Dado um array de números, crie uma função que retorne um novo array com as raízes quadradas dos números. No entanto, se um número for negativo, a função deve substituí-lo por NaN (Não é um Número).

const numbers = [4, 9, -1, 16, -5, 25];
const numbersAoQuadrado = numbers.map((number) => number ** 0.5);

console.log(numbersAoQuadrado);