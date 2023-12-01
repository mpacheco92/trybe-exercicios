// Exercício 1
// Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:

const songs = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
const song31031685 = songs.find(({id}) => id === '31031685');
