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

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
    if (angulo1 + angulo2 + angulo3 === 180) {
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

let peça = 'Bispo'

switch (peça.toLowerCase()) {
    case 'peão':
        console.log('Peão - move-se sempre para frente, uma casa por vez.');
        break;
    case 'cavalo':
        console.log('Cavalo - move-se duas casas na horizontal ou na vertical e depois uma para o lado.');
        break;
    case 'bispo':
        console.log('Bispo - movimenta-se em diagonais.');
        break;
    case 'torre':
        console.log('Torre - move-se em linhas horizontais ou verticais.');
        break;
    case 'rainha':
        console.log('Rainha - move-se quantas casas desejar nas retas horizontais, verticais e diagonais.');
        break;
    case 'rei':
        console.log('Rei - move-se uma casa por vez em qualquer direção ou sentido.');
        break;
    default:
        console.log('Peça inválida!');
}

////////////////////////////////////////////

// 🚀 Exercício 6: Há um par entre nós
// 6 - Utilize if...else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.
// Faça esse exercício utilizando somente um if.

let opcao1 = 7;
let opcao2 = 6;
let opcao3 = 3;

let par = false;

if (opcao1 % 2 === 0 || opcao2 % 2 === 0 || opcao3 % 2 === 0) {
    par = true;
}

console.log(par);

////////////////////////////////////////////

// Exercício 7
// Utilize if...else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS (Instituto Nacional do Seguro Social) e o IR (Imposto de Renda).

// ⭐️ A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10.

// Para as faixas de impostos, use as seguintes referências:

// INSS
// Salário bruto até R$ 1.556,94: alíquota de 8%;
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%;
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%;
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88.
// IR
// Até R$ 1.903,98: isento de imposto de renda;
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto;
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto;
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto;
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// O cálculo deve ser o demonstrado a seguir
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para o INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

// Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, em que a alíquota é de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, tem-se:

// R$ 2.670,00 - salário com INSS já deduzido;
// 7.5% - alíquota de imposto de renda, que representa um desconto de R$ 200,25;
// R$ 142,80 - parcela a ser deduzida do imposto de renda.
// Para obter o valor do imposto de renda, calcula-se: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45.

// Para obter o salário líquido, calcula-se: R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

// Resultado: R$ 2.612,55.

// 👀 Dica: Que tal identificar as alíquotas com variáveis de nomes explicativos?

let salarioBruto = 2500
let aliquotaInss;
let impostoRenda;

if (salarioBruto <= 1556.94) {
    aliquotaInss = salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    aliquotaInss = salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaInss = salarioBruto * 0.11;
} else {
    aliquotaInss = 570.88;
}

let salarioBase = salarioBruto - aliquotaInss;

if (salarioBruto <= 1903.98) {
    impostoRenda = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    impostoRenda = salarioBase * 0.075 - 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    impostoRenda = salarioBase * 0, 15 - 354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    impostoRenda = salarioBase * 0.225 - 636.13;
} else {
    impostoRenda = salarioBase * 0.275 - 869.36;
}

let salarioLiquido = salarioBase - impostoRenda;

console.log(salarioLiquido);