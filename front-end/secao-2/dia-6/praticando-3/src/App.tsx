import { useState } from 'react'
import './App.css'

function App() {
 
  const [term, setTerm] = useState(false);
  const [erro, setErro] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    schooling: 'Médio',
    resume: '',
  })

  function handleChage (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function resetForm(){
    setFormData({
      name: '',
      email: '',
      schooling: 'Médio',
      resume: '',
    })
    setTerm(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    if(formData.name !== '' && formData.email !== '' && formData.resume !== '' && term) {
      alert(
        `Nome: ${formData.name}\nemail: ${formData.email}\nEscolaridade: ${formData.schooling}\nExperiências: ${formData.resume}`
        );
      resetForm();
      setEmpty(false)
      setErro(false)
    } 
    if(formData.name === '' || formData.email === '' || formData.resume === '') setEmpty(true);
  
    if(!term) setErro(true);
  }

  return (
    <form className='class-form' onSubmit={ (event) => handleSubmit(event) }>
      <label>
        Nome:
        <input value={ formData.name } onChange={ handleChage } name='name' />
      </label>
      <label>
        Email:
        <input value={ formData.email } onChange={ handleChage } name='email' />
      </label>
      <label>
        Escolaridade:
        <select value={ formData.schooling } onChange={ handleChage } name='schooling' >
          <option value="Médio">Médio</option>
          <option value="Superior">Superior</option>
          <option value="Pós-graduação">Pós-graduação</option>
        </select>
      </label>
      <label>
        Resumo das experiências:
        <textarea value={ formData.resume } onChange={ handleChage } name='resume' />
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
