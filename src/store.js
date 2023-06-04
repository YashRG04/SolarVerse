import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {loginuserReducer, getUserReducer, registerUserReducer, enquiryReducer, completeRegisterUserReducer } from "./service/reducers/userReducer";


const reducer = combineReducers({
  loginUser: loginuserReducer,
  registerUser: registerUserReducer,
  registerComplete: completeRegisterUserReducer,
  getUser: getUserReducer,
  enquiry:enquiryReducer
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
