import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} from "../constants/userConstants";

export const loginuserReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };

    case LOGIN_SUCCESS:
      console.log("Setting isAuthenticated to true");
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const registerUserReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        loading: true,
        isRegistered: false,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isRegistered: true,
        user: action.payload,
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        isRegistered: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getUserReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case "GET_USER_REQUEST":
      return {
        loading: true,
        isAuthenticated: true,
      };

    case "GET_USER_SUCCESS":
      localStorage.setItem("user", JSON.stringify(action.payload));
      console.log("login success");

      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case "GET_USER_FAIL":
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
