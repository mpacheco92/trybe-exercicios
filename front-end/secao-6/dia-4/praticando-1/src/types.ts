import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export type ReduxState = {
  isFetching: boolean,
  name: string,
  gender: string,
  born: string,
}

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;
