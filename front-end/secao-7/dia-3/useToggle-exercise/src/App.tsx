import Form from './components/form';
import './App.css';
import useToggle from './hooks/useToggle';

function App() {
  const toggle = useToggle(true);

  return (
    <div className="container">
      { toggle.value && (
        <button onClick={ toggle.toggleValue } >Cadastre-se agora!</button>
      ) }
      { !toggle.value && (
        <Form toggle={ toggle.toggleValue }/>
      ) }
    </div>
  );
}

export default App;
