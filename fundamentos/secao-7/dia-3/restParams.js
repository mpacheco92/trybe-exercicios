const soma = (...numeros) => {
  let total = 0;
  numeros.forEach((numero) => {
    total += numero
  });
  return total;
}

console.log(soma(1, 2, 3));