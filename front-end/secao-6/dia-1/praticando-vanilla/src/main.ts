import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

type ActionType = {
  type: string,
}

const INITIAL_STATE = {
  count: 0,
};

const reducer = (state = INITIAL_STATE, action: ActionType) => {
  if (action.type === 'INCREMENT_COUNTER') {
    return { count: state.count + 1 }
  } 
  return state;
};

const store = createStore(reducer, composeWithDevTools());

const action = { type: 'INCREMENT_COUNTER' };

const btnElement = document.querySelector('button') as HTMLButtonElement;
btnElement.addEventListener('click', () => {
  store.dispatch(action) 
});

store.subscribe(() => {
  const globalState = store.getState();
  const countEl = document.querySelector('h2') as HTMLHeadingElement;
  countEl.innerHTML = globalState.count.toString();
  
})