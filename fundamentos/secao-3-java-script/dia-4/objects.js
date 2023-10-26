const reader = {
    name: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
      {
        title: 'O Senhor dos Anéis - a Sociedade do Anel',
        author: 'J. R. R. Tolkien',
        publisher: 'Martins Fontes',
      },
    ],
  };


//   🚀 Manipulação de objetos: Parte 1

//   1 - Acesse as chaves name, lastName e title e exiba informações em um console.log() no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a Sociedade do Anel’.”.

console.log(`O livro favorito de ${reader.name} ${reader.lastName} se chama ${reader.favoriteBooks[0].title}.`);


// 2 - Adicione um novo livro favorito na chave favoriteBooks, que é um array de objetos. Atribua a essa chave um objeto que contenha as seguintes informações:

// {
//     title: 'Harry Potter e o Prisioneiro de Azkaban',
//     author: 'JK Rowling',
//     publisher: 'Rocco',
//   }

reader.favoriteBooks.push({
    title: 'Harry Potter e o Prisioneiro de Azkaban',
    author: 'JK Rowling',
    publisher: 'Rocco',
  });

  console.log(reader.favoriteBooks);


//   3 - Acesse as chaves name e favoriteBooks e faça um console.log() no seguinte formato:

// “Julia tem {quantidade} livros favoritos.”

// {quantidade} corresponde à quantidade de livros favoritos, sendo um número gerado automaticamente pelo seu código. Caso a quantidade seja igual a 1, a frase deve ser:

// “Julia tem 1 livro favorito.”

console.log(`${reader.name} tem ${reader.favoriteBooks.length} livros favoritos.`);



// 🚀 Manipulação de objetos: Parte 2
// Imagine que você seja responsável por cuidar do sistema de entrega de um restaurante e que precise enviar mensagens com as informações da compra. Para isso, use o seguinte código:

const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  //   Complete a função customerInfo() para que seu retorno seja: 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, Número: 389, AP: 701.'.

  const customerInfo = () => {
    return `Olá, ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Número: ${order.address.number}, AP: ${order.address.apartment}.`
  }
  
  console.log(customerInfo(order));


  //   Complete a função orderModifier() para que seu retorno seja: 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'.
// Modifique o nome da pessoa compradora para Luiz Silva;
// Modifique o valor total da compra para R$ 50,00.
  
  const orderModifier = () => {
    order.name = 'Luiz Silva';
    order.payment.total = 50.00;
    return `Olá, ${order.name}, o valor total de seu pedido de marguerita, pepperoni e ${order.order.drinks.coke.type} é ${order.payment.total}.`
  }
  
  console.log(orderModifier(order));




//   🚀 Manipulação de objetos: Parte 3
// Suponha que você esteja trabalhando para uma escola e precise fazer algumas atualizações no sistema. Para isso, considere a seguinte base de dados:

const school = {
  lessons: [
    {
      course: 'Python',
      students: 20,
      professor: 'Carlos Patrício',
      shift: 'Manhã',
    },
    {
      course: 'Kotlin',
      students: 10,
      professor: 'Gabriel Oliva',
      shift: 'Noite',
    },
    {
      course: 'JavaScript',
      students: 738,
      professor: 'Gustavo Caetano',
      shift: 'Tarde',
    },
    {
      course: 'MongoDB',
      students: 50,
      shift: 'Noite',
    },
  ]
};


// Crie uma função que obtenha o valor da chave de acordo com sua posição no array. Essa função deve possuir dois parâmetros: o objeto e a posição no array.

const GetValueKey = (object, index) => Object.values(object)[index];

console.log(GetValueKey(school,0));


// Crie uma função que retorne a soma do número total de estudantes em todos os cursos.

const GetSomaAlunos = (array) => {
  let somaAlunos = 0;
  for (let index = 0; index < school.lessons.length; index += 1){
    somaAlunos += array[index].students
  } return somaAlunos;
};

console.log(GetSomaAlunos(school.lessons));


// Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.

const verificaChave = (objeto, nomeChave) => {
  for (let index = 0; index < objeto.lessons.length; index += 1) {
      if (objeto.lessons[index][nomeChave] === undefined) {
          return false;
      }
  } return true;
}

console.log(verificaChave(school, 'aluno'));



// Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.

// 1 - achar o objeto que contem Python com o for
// 2 - achar a chave 'shift' dentro da objeto que contem Python
// 3 - passar o valor noite para shift

const changeShift = (objeto, courseName, newValue) => {
  let newShift;
  for (let index = 0; index < objeto.length; index += 1){
    if (objeto[index].course === courseName){
      newShift = objeto[index];
      newShift.shift = newValue;
    }
  } return newShift;
};

console.log(changeShift(school.lessons, 'Python', 'Noite'));