import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import authReducer from "./Auth/reducer"
import { thunk } from "redux-thunk"
import { snackbar } from "./Snackbar/reducer"
import loadingReducer from "./loading.reducer"

const rootReducer = combineReducers({
    auth:authReducer,
    snackbar:snackbar,
    isLoading:loadingReducer
})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))