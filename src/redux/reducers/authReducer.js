import {
  AUTH_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  LOG_OUT,
  GETUSER_SUCCESS,
} from "../types/index";

const initialState = {
  token: localStorage.getItem("token"),
  loading: false,
  error: null,
  authenticated: null,
  user: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_LOADING:
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

    case AUTH_ERROR:
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
