import { Dispatch } from "../../types";

export const REQUIRED_STARTED = 'REQUIRED_STARTED';
export const REQUIRED_SUCESSFUL = 'REQUIRED_SUCESSFUL';
export const REQUIRED_FAILED = 'REQUIRED_FAILED';

function requiredStarted() {
  return {
    type: REQUIRED_STARTED,
  }
}

function requiredSucessful(obj: {}) {
  return {
    type: REQUIRED_SUCESSFUL,
    payload: obj,
  }
}

function requiredFailed(erro: string) {
  return {
    type: REQUIRED_FAILED,
    payload: erro,
  }
}

export function fetchAPI(character: string) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requiredStarted());
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${character}`);
      const data = await response.json();
      dispatch(requiredSucessful(data[0]));
    } catch (erro: any) {
      dispatch(requiredFailed(erro));
    }
  }
}
