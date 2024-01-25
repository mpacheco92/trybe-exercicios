import { useState } from 'react'
import './App.css'

function App() {
 
  const [name, setName] = useState('');

  return (
    <>
      <label>
        Nome:
        <input value={ name } onChange={ ({target}) => setName(target.value) } />
      </label>
      <button onClick={ () => setName('') }>Reset</button>
      <h1>Olá, {name}!</h1>
    </>
  );
}

export default App
