import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} from "../constants/userConstants";

import axios from "axios";

var csrfToken = document.cookie?.split(';')?.find(cookie => cookie.trim()?.startsWith('csrf_token='))?.split('=')[1];

// Login User
export const login = (email, password, navigate) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        // "X-CSRFToken":
        //   "dLprynZdMMuMldj1rI1LIL2uHAIHu0uYh0L7zkERFb9r6432JXaN5UhSWSPu9IWf",
      },
    };
    console.log(email, password);
    const { data } = await axios.post(
      `api/login/`,
      { username: email, password },
      config
    );
    
      navigate("/");
      dispatch({ type: LOGIN_SUCCESS, payload: data?.user });
  

  } catch (error) {
    console.log(error);
    dispatch({
      type: LOGIN_FAIL,
      // payload: error.response?.data.non_field_errors,
      payload:error
    });
  }
};

// Register User
export const register = (userData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
    console.log(userData);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(`api/register/`, userData, config);
    console.log(data);
    navigate("/login");

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
    console.log(data);
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.non_field_errors,
    });
  }
};

export const getUser =()=>async(dispatch)=>{
  try {
    dispatch({type:"GET_USER_REQUEST"});
    const config = {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken":csrfToken,
      },
    };
    
    const { data } = await axios.get(
      `api/login/`,
      config
    );
    console.log(data);
    dispatch({ type: "GET_USER_SUCCESS",payload:data });

    
  } catch (error) {
    dispatch({
      type: "GET_USER_FAIL",
      payload: error.response?.data.non_field_errors,
    });
    
    
  }
}