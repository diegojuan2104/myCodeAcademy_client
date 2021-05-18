import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_PROCESS,
  SIGNUP_PROCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOG_OUT,
  GETUSER_PROCESS,
  GETUSER_SUCCESS,
  GETUSER_ERROR
} from "../types/index";
import axiosClient from "../../config/axios";
import Swal from "sweetalert2";
import tokenAuth from "../../config/token";

//LOGIN ACTION
export function loginAction(user) {
  return async (dispatch) => {
    dispatch(login());
    try {
      const res = await axiosClient.post("/api/auth/", user);
      console.log(res);
      dispatch(loginSuccess(res.data));

      //Get user
      dispatch(authenticatedUser());

    } catch (error) {
     
      dispatch(loginError(error.response.data.msg));

      Swal.fire({
        icon: "error",
        title: error.response.data.msg,
        text: "error",
      });
    }
  };
}

const login = () => ({
  type: LOGIN_PROCESS,
  payload: true,
});

const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

const loginError = (estado) => ({
  type: LOGIN_ERROR,
  payload: estado,
});

//SIGNUP
export function signupAction(user) {
  return async (dispatch) => {
    dispatch(signup());
    try {
      const res = await axiosClient.post("/api/users/", user);
      console.log(res);
      dispatch(signupSuccess(res.data));

      //Get user
      dispatch(authenticatedUser());

      //Alert
      Swal.fire("Succed", "Sing Up Completed!", "success");
    } catch (error) {

      dispatch(signupError(error.response.data));

      Swal.fire({
        icon: "error",
        title: "There was an error",
        text: error.response.data.errors ?  error.response.data.errors[0].msg : error.response.data.msg,
      });
    }
  };
}

const signup = () => ({
  type: SIGNUP_PROCESS,
  payload: true,
});

const signupSuccess = (token) => ({
  type: SIGNUP_SUCCESS,
  payload: token,
});

const signupError = (state) => ({
  type: SIGNUP_ERROR,
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
  type: GETUSER_PROCESS,
});


const getUserSuccess = (user) => ({
  type: GETUSER_SUCCESS,
  payload: user,
});

const getUserError = () => ({
  type: GETUSER_ERROR,
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
