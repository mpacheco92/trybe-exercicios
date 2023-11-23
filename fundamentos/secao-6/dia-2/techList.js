// A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array, a função cria, em ordem alfabética, um objeto com a seguinte estrutura:

const techList = (array, string) => {
  if (array.length === 0) {
    return "Vazio!";
  };

  const arrayOrdenado = array.sort();
  const arrayTech = [];
  for (let index = 0; index < arrayOrdenado.length; index += 1) {
    arrayTech.push({
      tech: arrayOrdenado[index],
      name: string,
    })
  }

  return arrayTech;
};

module.exports = techList;