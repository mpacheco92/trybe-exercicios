function calcularDivisao(num1, num2) {
  if(num2 === 0) throw new Error ('Não pode pode ser feita uma divisão por zero');
  
  return num1 / num2;
}

try {
  const resultado = calcularDivisao(2, 1);
  console.log('resultado: %s', resultado);
} catch (e) {
  console.log('Erro: %s', e.message);
}