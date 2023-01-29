import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} from "../constants/userConstants";

import axios from "axios";

// Login User
export const login = (email, password, csrf_token,navigate) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrf_token,
      },
    };
    console.log(email, password, csrf_token);
    const { data } = await axios.post(
      `http://35.90.144.161/api/login/`,
      { username: email, password },
      config
    );
    console.log(data);
    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    navigate('/');
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Register User
export const register =
  (userData, navigate, csrf_token) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });
      console.log(userData);

      const config = {
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrf_token,
        },
      };
      const { data } = await axios.post(
        `http://35.90.144.161/api/register/`,
        userData,
        config
      );
      console.log(data);
      navigate("/");

      dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };
