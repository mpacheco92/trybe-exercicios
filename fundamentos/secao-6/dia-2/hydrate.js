// A função hydrate recebe uma string no formato “número bebida” e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água, a fim de evitar ressaca.

const hydrate = (string) => {
  const split = string.split('');
  let coposAgua = 0;

  for (let index = 0; index < split.length; index += 1) {
    if (!isNaN(parseInt(split[index]))) {
      coposAgua += parseInt(split[index]);
    }
  }
  
  let copoOuCopos = 'copo';
  if (coposAgua > 1) {
    copoOuCopos = 'copos';
  }
  return `${coposAgua} ${copoOuCopos} de água`;

}

module.exports = hydrate;