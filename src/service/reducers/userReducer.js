import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  COMPLETE_REGISTER_USER_REQUEST,
  COMPLETE_REGISTER_USER_SUCCESS,
  COMPLETE_REGISTER_USER_FAIL,
  POST_ENQUIRY_SUCCESS,
  POST_ENQUIRY_FAIL,
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
        // isRegistered: false,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        // isRegistered: true,
        // isAuthenticated: true,
        user: action.payload,
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        // isRegistered: false,
        user: null,
        error: action.payload,
      };
    case "REGISTER_USER_CLEAR":
      return {
        ...state,
        user: null,
        error: null,
      };
    default:
      return state;
  }
};

export const completeRegisterUserReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case COMPLETE_REGISTER_USER_REQUEST:
      return {
        loading: true,
        isRegistered: false,
      };
    case COMPLETE_REGISTER_USER_SUCCESS:
    case "FORGOT_PASSWORD_SUCCESS":
    case "RESET_PASSWORD_SUCCESS":
      return {
        ...state,
        loading: false,
        isRegistered: true,
        isAuthenticated: true,
        user: action.payload,
      };
    case COMPLETE_REGISTER_USER_FAIL:
    case "FORGOT_PASSWORD_FAIL":
      return {
        ...state,
        loading: false,
        user: null,
        err: action.payload,
      };
    case "REGISTER_COMPLETE_USER_CLEAR":
      return {
        ...state,
        user: null,
        err: null,
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

export const LogoutReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case "LOGOUT_REQUEST":
      return {
        loading: true,
        isAuthenticated: true,
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
      };
    case "LOGOUT_FAIL":
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

export const enquiryReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_ENQUIRY_SUCCESS:
      return {
        message: action.payload,
      };

    case POST_ENQUIRY_FAIL:
      return {
        message: action.payload,
      };
    case "CLEAR_ENQUIRY_MESSAGE":
      return {
        message: "",
      };

    default:
      return state;
  }
};
