import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_PROCESS,
  SIGNUP_PROCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOG_OUT,
} from "../types/index";
import axiosClient from "../../config/axios";
import Swal from "sweetalert2";

//LOGIN ACTION
export function loginAction(user) {
  return async (dispatch) => {
    dispatch(login());
    try {
      const res = await axiosClient.post("/api/auth/", user);
      console.log(res);
      dispatch(loginSuccess(res));

      //Alert
      Swal.fire("Correcto", "Login success", "success");
    } catch (error) {
      console.log(error);
      dispatch(loginError(true));

      Swal.fire({
        icon: "error",
        title: "There was an error",
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
      dispatch(signupSuccess(res));

      //Alert
      Swal.fire("Correcto", "Sing Up succed", "success");
    } catch (error) {
      console.log(error);
      dispatch(signupError(true));

      Swal.fire({
        icon: "error",
        title: "There was an error",
        text: "error",
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

const signupError = (estado) => ({
  type: SIGNUP_ERROR,
  payload: estado,
});
