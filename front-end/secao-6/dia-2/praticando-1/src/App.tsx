import { useSelector, useDispatch } from "react-redux";
import { actionCreator } from "./redux/action";

type RootState = {
  counterReducer: {
    clicks: number;
    count: number;
  }
};

function App() {
  const rootState = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Contador</h1>
      <h2>{ rootState.counterReducer.count }</h2>
      <h2>{ rootState.counterReducer.clicks }</h2>
      <button onClick={ () => dispatch(actionCreator()) }>Incrementa 1</button>
      <button onClick={ () => dispatch(actionCreator(5)) }>Incrementa 5</button>
    </div>
  );
}

export default App;
