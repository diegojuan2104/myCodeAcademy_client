import {
    GETCHALLENGES_SUCCESS,
    CHALLENGES_LOADING,
    CHALLENGES_ERROR,
    GETONECHALLENGE_SUCCESS
} from "../types/index";
  import axiosClient from "../../config/axios";
  
  export function getChallengesAction() {
    return async (dispatch) => {
      dispatch(challengesLoading());
      try {
        const res = await axiosClient.get("/api/challenges");
        console.log(res);
        dispatch(getChallengesSuccess(res.data));
      } catch (error) {
        dispatch(challengesError());
        alert("Ha ocurrido un error");
      }
    };
  }
  
  const challengesLoading = () => ({
    type: CHALLENGES_LOADING,
  });
  
  const getChallengesSuccess = (challenges) => ({
    type: GETCHALLENGES_SUCCESS,
    payload: challenges,
  });
  
  const challengesError = (estado) => ({
    type: CHALLENGES_ERROR,
    payload: estado,
  });

  export function getOneChallengeAction(id) {
    return async (dispatch) => {
      dispatch(challengesLoading());
      try {
        console.log(id)
        const res = await axiosClient.get("/api/challenges/"+id);
        console.log(res);
        dispatch(getOneChallengesSuccess(res.data));
      } catch (error) {
        dispatch(challengesError());
        alert("Ha ocurrido un error");
      }
    };
  }
  
  const getOneChallengesSuccess = (challenges) => ({
    type: GETONECHALLENGE_SUCCESS,
    payload: challenges,
  });
  