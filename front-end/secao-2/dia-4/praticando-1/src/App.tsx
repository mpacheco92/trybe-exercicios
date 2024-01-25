import { useState } from 'react'
import './App.css'

function App() {

  const toolKit = [
    'JavaScript',
    'TypeScript',
    'React',
    'HTML',
    'CSS',
    'Node',
    'Testes automatizados',
  ];

  const [toolList, setToolList] = useState('');
  const [tools, setTools] = useState<string | string[]>([])

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setToolList(event.target.value)
  }

  function handleAddClick() {
    setTools([...tools, toolList] )
  }


  return (
    <>
      <h1>Caixa de ferramentas de um DEV</h1>
      <ul>
        {tools.map((tool) => (
          <li>{tool}</li>
        ))}
      </ul>
      <input type="text" placeholder='Nova ferramenta'value={ toolList } onChange={ handleChange } />
      <button onClick={ handleAddClick }>Adicionar</button>
    </>
  );
}

export default App;
