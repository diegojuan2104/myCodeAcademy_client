import {
    GETCHALLENGES_SUCCESS,
    CHALLENGES_LOADING,
    CHALLENGES_ERROR,
    GETONECHALLENGE_SUCCESS
  } from "../types/index";
  
  const initialState = {
    challenges_loading: false,  
    challengesList: [], 
    challenges_error: false,
    challenge_selected: null
  };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default function (state = initialState, action) {
    switch (action.type) {
      case CHALLENGES_LOADING:
        return {
          ...state,
          loading_challenges: true,
        };
      case GETCHALLENGES_SUCCESS:
        return {
          ...state,
          challengesList: action.payload.challenges,
          challenges_error: false,
          loading_challenges: false,
        };
      case CHALLENGES_ERROR:
        return {
            ...state,
            challenges_error: true,
          };
      case GETONECHALLENGE_SUCCESS:
        return {
          ...state,
          challenge_selected: action.payload.challenge,
        };
      default:
        return state;
    }
  }
  