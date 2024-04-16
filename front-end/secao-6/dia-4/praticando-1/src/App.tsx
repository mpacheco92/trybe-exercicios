import { useSelector, useDispatch } from "react-redux";
import { Dispatch, ReduxState } from "./types";
import { fetchAPI } from "./redux/actions";
import { useState } from "react";

export default function App() {
  const [ character, setCharacter ] = useState('');
  const rootState = useSelector((state: ReduxState) => state);
  const dispatch: Dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharacter(event.target.value)
  };

  if(rootState.isFetching) return <p>Carregando...</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Nome do personagem"
        onChange={ handleChange }
      />
      <button
        onClick={ () => { dispatch(fetchAPI(character)) } }
      >
        Buscar
      </button>
      <p>{ rootState.name }</p>
      <p>{ rootState.gender }</p>
      <p>{ rootState.born }</p>
    </div>
  )
}