const readLine = require('readline-sync');
const BMI_MAX_AND_MIN = require('./bmiValues');

const weightInKg = readLine.questionFloat('What’s your weight?');
const heightInCm = readLine.questionInt('What’s your height?');


function makeBmi(weight, height) {
  heightBmi = (height / 100) ** 2;

  const bmi = weight / heightBmi;

  return bmi;
}

function handleBmiResult(bmi) {
  const estados = Object.keys(BMI_MAX_AND_MIN);  

  const resultFind = estados.find((estado) => {
    const { minBMI, maxBMI } = BMI_MAX_AND_MIN[estado];

    return bmi >= minBMI && bmi <= maxBMI;
  })

  return resultFind;
}

function main () {
  const bmi = makeBmi(weightInKg, heightInCm);
  const bmiResults = handleBmiResult(bmi);
  
  console.log(`BMI: ${bmi.toFixed(2)}`);
  console.log(bmiResults);
}

main();
