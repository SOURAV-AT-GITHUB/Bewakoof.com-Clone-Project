import { OPEN_SNACKNAR, CLOSE_SNACKNAR } from "../actionTypes";
const defaultState = {
  open: false,
  message: "Default mesage",
  severity: "info",
};

export function snackbar(state = defaultState, { type, payload }) {
  switch (type) {
    case OPEN_SNACKNAR:
      return payload;
    case CLOSE_SNACKNAR:
      return defaultState;
    default:
      return state
  }
}
