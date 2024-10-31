import {
  UPDATE_DRAFT, INIT, UNSET_DRAFT_FIELDS, CLEAR_DRAFT,
  SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAIL,
} from '../actions/signup_actions';

export const initialSignupState = {
  draft: {},
  signingUp: false,
  signUpSuccess: false,
  signUpError: null,
};

const signupReducer = (state = initialSignupState, { type, payload }) => {
  switch (type) {
    case INIT:
      return initialSignupState;
    case CLEAR_DRAFT:
      return {
        ...state,
        draft: {},
      };
    case UPDATE_DRAFT:
      return {
        ...state,
        draft: {
          ...state.draft,
          ...payload,
        },
      };
    case UNSET_DRAFT_FIELDS:
      const newDraft = { ...state.draft };
      const fields = payload;
      for (let field of fields) {
        delete newDraft[field];
      }

      return {
        ...state,
        draft: newDraft,
      };
    case SIGN_UP:
      return {
        ...state,
        signingUp: true,
        signUpError: null,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signingUp: false,
        signUpSuccess: true,
      };
    case SIGN_UP_FAIL:
      return {
        ...state,
        signingUp: false,
        signUpError: payload,
      };
    default:
      return state;
  }
};

export default signupReducer;
