import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer"
import challengesReducer from "../reducers/challengesReducer"
export default combineReducers(
    {
        auth: authReducer,
        challenges:challengesReducer
    }
) 