import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {loginuserReducer, getUserReducer, registerUserReducer } from "./service/reducers/userReducer";

const reducer = combineReducers({
  loginUser: loginuserReducer,
  registerUser: registerUserReducer,
  getUser: getUserReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
