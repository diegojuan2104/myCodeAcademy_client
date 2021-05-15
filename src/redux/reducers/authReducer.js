import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_PROCESS,
  SIGNUP_PROCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOG_OUT,
  GET_USER,
} from "../types/index";

const initialState = {
  token: "",
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGNUP_PROCESS:
    case LOGIN_PROCESS:
      return {
        ...state,
        loading: action.payload,
      };
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
    localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        loading: false,
        token: action.payload.token,
      };
    case SIGNUP_ERROR:
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
