import { START_LOADING, STOP_LOADING } from "./actionTypes";
export default function loadingReducer(state = false, { type }) {
  switch (type) {
    case START_LOADING:
      return true;
    case STOP_LOADING:
      return false;
    default:
      return state;
  }
}
