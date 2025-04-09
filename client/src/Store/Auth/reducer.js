import {ADD_EMAIL,LOGIN,LOGOUT} from '../actionTypes'
const defaultUser = {
  token: null,
  name: "",
  email: "",
  gender:"",
  mobile:""
};
export default function authReducer(state = JSON.parse(localStorage.getItem("auth")) ||defaultUser, { type, payload }) {
  switch (type) {
    case ADD_EMAIL: return {...state,email:payload}
    case LOGIN : {
      localStorage.setItem("auth",JSON.stringify(payload))
      return payload
    }
    case LOGOUT:{
      localStorage.removeItem('auth')
      return defaultUser
    }
    default:
      return state;
  }
}
