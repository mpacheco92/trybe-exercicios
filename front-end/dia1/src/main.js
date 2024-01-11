import validator from 'validator';

const btnValid = document.querySelector('#valid');

btnValid.addEventListener('click', () => {
  const text1 = document.querySelector('#text1');
  const parag = document.querySelector('#parag');
  const options = document.querySelector('#dados');

  if (text1.value === '') {
    parag.innerHTML = 'Preencha um valor';
    return parag.innerHTML;
  }
  if (options.value === 'email') {
    parag.innerHTML = `A validação retornou ${validator.isEmail(text1.value)}`;
  }
  if (options.value === 'cpf') {
    parag.innerHTML = `A validação retornou ${validator.isTaxID(text1.value, 'pt-BR')}`;
  }
  if (options.value === 'url') {
    parag.innerHTML = `A validação retornou ${validator.isURL(text1.value)}`;
  }
});
