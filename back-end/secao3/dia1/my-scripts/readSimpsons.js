const fs = require('fs').promises;

async function readAll() {
  const file = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(file);
  const string = simpsons.map(({ id, name }) => `${id} - ${name}`);

  string.forEach((string) => console.log(string));
}

async function getSimpsonsById(id) {
  const file = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(file);

  const findSimpsons = simpsons.find((simp) => Number(simp.id) === id);

  if(!findSimpsons) {
    throw new Error ('id não encontrado');
  }

  return findSimpsons;
}

async function deleteSimpsons() {
  const file = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(file);

  const newSimpsons = simpsons.filter((simp) => simp.id !== '10' && simp.id !== '6');
  return newSimpsons;
}

async function createSimpsonsFamily() {
  const simpsonsFamilyId = [1, 2, 3, 4];
  const file = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(file);

  const simpsonsFamily = simpsons.filter((simp) => simpsonsFamilyId.includes(Number(simp.id)));
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

async function addNewMemberToSimpsonsFamily() {
  const file = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(file);

  simpsons.push({ id: '8', name: 'Nelson Muntz' });
  fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsons));
}

async function alterMembersFamily() {
  const file = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(file);
  const simpsonsWithoutNelson = simpsons.filter((simp) => simp.id !== '8');
  const simpsonsWithMaggie = [...simpsonsWithoutNelson, { id: '15', name: 'Maggie Simpsons' }];

  fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
}

async function main() {
  alterMembersFamily();
};

main();
