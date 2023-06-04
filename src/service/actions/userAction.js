import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  POST_ENQUIRY_SUCCESS,
  POST_ENQUIRY_FAIL,
  COMPLETE_REGISTER_USER_REQUEST,
  COMPLETE_REGISTER_USER_SUCCESS,
  COMPLETE_REGISTER_USER_FAIL,
} from "../constants/userConstants";
import api from "./api";

// Login User
export const login = (email, password, navigate) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const response = await api.post(`/login/`, { username: email, password });
    console.log(response);
    const data = response.data;
    // console.log(getCSRFToken());
    console.log(response.headers);
    const setCookieHeader = response.headers.get("Set-Cookie");
    console.log(setCookieHeader);

    // Store access token in local storage
    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);
    //  localStorage.setItem("csrftoken", headers["Set-Cookie"].split(";")[0].split("=")[1]);
    // console.log(headers["Set-Cookie"].split(";")[0].split("=")[1]);
    // console.log(data.headers);
    navigate("/");
    dispatch({ type: LOGIN_SUCCESS, payload: data?.user });
    // dispatch(getUser());
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOGIN_FAIL,
      // payload: error.response.data?.non_field_errors || error.response.data.detail,
      payload: error.response.data.non_field_errors,
    });
  }
};

// Register User
export const register = (userData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
    const { data } = await api.post(`/register/`, userData);

    // navigate("/login");
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
    // dispatch(getUser());
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.non_field_errors,
    });
  }
};

export const registerComplete = (userData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: COMPLETE_REGISTER_USER_REQUEST });
    const { data } = await api.post(`/register/complete/`, userData);
    navigate("/");
    dispatch({ type: COMPLETE_REGISTER_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: COMPLETE_REGISTER_USER_FAIL,
      payload: error.response.data.non_field_errors,
    });
  }
};

export const getUser = () => async (dispatch) => {
  try {
    const { data } = await api.get(`/login/`);

    dispatch({ type: "GET_USER_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "GET_USER_FAIL",
      payload: error.response.data.non_field_errors,
    });
  }
};

export const postEnquiry = (bannerform) => async (dispatch) => {
  try {
    // const {data} = await api.post(`/enquiry/`,bannerform);
    const { data } = await api.post("/enquiry/", "POST", { bannerform });

    console.log(data);
    dispatch({ type: POST_ENQUIRY_SUCCESS, payload: data.message });
  } catch (error) {
    console.log(error);
    dispatch({
      type: POST_ENQUIRY_FAIL,
      payload: error.response?.data?.non_field_errors,
    });
  }
};

// Helper function to get CSRF token from cookies
const getCSRFToken = () => {
  const cookieValue = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("csrftoken="))
    .split("=")[1];
  return cookieValue;
};
