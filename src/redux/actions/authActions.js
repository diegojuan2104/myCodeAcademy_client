import {
  AUTH_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  GETUSER_SUCCESS,
  LOG_OUT,
} from "../types/index";
import axiosClient from "../../config/axios";
import Swal from "sweetalert2";
import tokenAuth from "../../config/token";

export function loginAction(user) {
  return async (dispatch) => {
    dispatch(login());
    try {
      const res = await axiosClient.post("/api/auth/", user);
      console.log(res);
      dispatch(loginSuccess(res.data));
      dispatch(authenticatedUser());

    } catch (error) {
     
      dispatch(loginError(error.response?.data.msg));

      alert(error.response?.data.msg);
    }
  };
}

const login = () => ({
  type: AUTH_LOADING,
});

const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

const loginError = (estado) => ({
  type: AUTH_ERROR,
  payload: estado,
});

export function signupAction(user) {
  return async (dispatch) => {
    dispatch(signup());
    try {
      const res = await axiosClient.post("/api/users/", user);
      console.log(res);
      dispatch(signupSuccess(res.data));
      
      dispatch(authenticatedUser());

      Swal.fire("Succed", "Sing Up Completed!", "success");
    } catch (error) {
      dispatch(signupError(error.response.data));
      alert(error.response?.data.errors ?  error.response?.data.errors[0].msg : error.response?.data.msg,
      )
    }
  };
}

const signup = () => ({
  type: AUTH_LOADING,
});

const signupSuccess = (token) => ({
  type: SIGNUP_SUCCESS,
  payload: token,
});

const signupError = (state) => ({
  type: AUTH_ERROR,
  payload: state,
});

//Returns the user if there is a token
export function authenticatedUser() {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      tokenAuth(token);
    }
    try {
      dispatch(getUser());
      const res = await axiosClient.get("/api/auth/");
      console.log(res);
      dispatch(getUserSuccess(res.data.user));
    } catch (error) {
      dispatch(getUserError());
    }
  };
}

const getUser = () => ({
  type: AUTH_LOADING,
});


const getUserSuccess = (user) => ({
  type: GETUSER_SUCCESS,
  payload: user,
});

const getUserError = () => ({
  type: AUTH_ERROR,
});

//User logout
export function logoutAction() {
  return async (dispatch) => {
      dispatch(logout());
  };
}

const logout = () => ({
  type: LOG_OUT,
});
