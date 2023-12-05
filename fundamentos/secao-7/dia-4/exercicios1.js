// Exercício 1
// Faça uma função que some todos os números pares do array numbers usando reduce.

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const somaPares = (array) => {
  const arrayPares = numbers.filter((number) => number % 2 === 0)
  const soma = arrayPares.reduce((acc, number) => acc + number, 0);
  return soma;
}
somaPares(numbers);

//////////////////////////

// Exercício 2
// Crie uma função usando dados de estudantes, para mostrar na tela um relatório que diz em qual matéria a pessoa foi melhor. Você usará tanto o map quanto o reduce dentro dele.

const students = require('./students');

const arrayStudents = (array) => array.map((student) => (
  {
    name: student.name,
    course: student.courses.reduce((acc, course) => (acc.grade > course.grade) ? acc : course).name
  }
));
arrayStudents(students);

//////////////////////////

// Escreva uma função chamada multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1, caso não seja passado nenhum valor como segundo parâmetro.


const multiply = (numb, value = 1) => numb * value;

console.log(multiply(8));