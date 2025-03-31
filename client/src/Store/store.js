import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import authReducer from "./Auth/reducer"
import { thunk } from "redux-thunk"
import { snackbar } from "./Snackbar/reducer"

const rootReducer = combineReducers({
    auth:authReducer,
    snackbar:snackbar
})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))