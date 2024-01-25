import { useState } from 'react'
import './App.css'

function App() {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [schooling, setSchooling] = useState('Médio');
  const [resume, setResume] = useState('');
  const [term, setTerm] = useState(false);
  const [erro, setErro] = useState(false);
  const [empty, setEmpty] = useState(false);

  function resetForm(){
    setName('');
    setEmail('');
    setSchooling('Médio');
    setResume('');
    setTerm(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    if(name !== '' && email !== '' && resume !== ''&& term) {
      alert(
        `Nome: ${name}\nemail: ${email}\nEscolaridade: ${schooling}\nExperiências: ${resume}`
        );
      resetForm();
      setEmpty(false)
      setErro(false)
    } 
    if(name === '' || email === '' || resume === '') setEmpty(true);
  
    if(!term) setErro(true);
  }

  return (
    <form className='class-form' onSubmit={ (event) => handleSubmit(event) }>
      <label>
        Nome:
        <input value={ name } onChange={ ({target}) => setName(target.value)}/>
      </label>
      <label>
        Email:
        <input value={ email } onChange={ ({target}) => setEmail(target.value) } />
      </label>
      <label>
        Escolaridade:
        <select value={ schooling } onChange={ ({target}) => setSchooling(target.value) } >
          <option value="Médio">Médio</option>
          <option value="Superior">Superior</option>
          <option value="Pós-graduação">Pós-graduação</option>
        </select>
      </label>
      <label>
        Resumo das experiências:
        <textarea value={ resume } onChange={ ({target}) => setResume(target.value) } />
      </label>
      <button>Enviar</button>
      <label>
        Aceito os termos
        <input type="checkbox" checked={ term } onChange={ () => setTerm((prevTerms) => !prevTerms) } />
      </label>
      {erro && (
        <h4> Você precisa aceitar os termos e condições para poder enviar o
        currículo</h4>
      )}
      {empty && (
        <h4>Todos os campos são obrigatórios</h4>
      )}
    </form>
  );
}

export default App
