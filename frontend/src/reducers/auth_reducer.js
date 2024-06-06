import { createSelector } from 'reselect';
import { AUTHENTICATE, LOAD_PROFILE_REQUEST, LOAD_PROFILE_SUCCESS } from "../actions";
import { setSession } from "../utils/auth";

export const unauthenticatedState = {
  isAuthenticated: false,
  isLoaded: true,
  isLoading: false,
  profile: null,
};

export const authenticatedState = {
  isAuthenticated: true,
  isLoaded: false, // profile not loaded
  isLoading: false,
  profile: null,
};

const authReducer = (state = unauthenticatedState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      setSession(action.payload);

      return {
        ...state,
        isAuthenticated: true,
      };
    case LOAD_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_PROFILE_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoaded: true,
        isLoading: false,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export const selectProfileDue = createSelector(
  [
    state => state.auth.isAuthenticated,
    state => state.auth.isLoaded,
    state => state.auth.isLoading,
  ],
  (isAuthenticated, isLoaded, isLoading) => {
    return isAuthenticated && !isLoaded && !isLoading;
  }
);

export default authReducer;
