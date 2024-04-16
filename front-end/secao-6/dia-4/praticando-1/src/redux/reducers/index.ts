import { REQUIRED_FAILED, REQUIRED_STARTED, REQUIRED_SUCESSFUL } from "../actions"

const initialState = {
  isFetching: false,
  name: '',
  gender: '',
  born: '',
}

type ActionType = {
  type: string,
  payload: {
    name: string,
    gender: string,
    born: string,
  },
}

export const reduce = (state = initialState, action: ActionType) => {
  switch(action.type) {
    case REQUIRED_STARTED:
      return {
        ...state,
        isFetching: true,
        name: '',
        gender: '',
        born: '',
      }
    case REQUIRED_SUCESSFUL:
      return {
        ...state,
        isFetching: false,
        name: action.payload.name,
        gender: action.payload.gender,
        born: action.payload.born,
      }
    case REQUIRED_FAILED:
      return {
        ...state,
        isFetching: false,
        name: '',
        gender: '',
        born: '',
      }
    default:
      return state;
  }
};
