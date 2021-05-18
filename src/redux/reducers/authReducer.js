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
  GETUSER_ERROR,
} from "../types/index";

const initialState = {
  token: localStorage.getItem("token"),
  loading: false,
  error: null,
  authenticated: null,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    
    case GETUSER_PROCESS:
    case SIGNUP_PROCESS:
    case LOGIN_PROCESS:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
      };
    case SIGNUP_ERROR:
    case LOGIN_ERROR:
    case GETUSER_ERROR:
    case LOG_OUT:
      localStorage.removeItem("token");
      return {
        ...state,
        error: true,
        loading: false,
        authenticated:null,
        token:null
      };

    case GETUSER_SUCCESS:
      return {
        user: action.payload,
        authenticated: true,
        loading: false,
      };
    default:
      return state;
  }
}
