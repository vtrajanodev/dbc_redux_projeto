import { combineReducers } from "redux";

import authReducer from "./authReducer";
import pessoaReducer from "./pessoaReducer";

export default combineReducers({
  authReducer,
  pessoaReducer
})