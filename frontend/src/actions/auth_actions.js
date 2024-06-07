export const LOGIN_REQUEST = 'auth/login_request';
export const AUTHENTICATE = 'auth/authenticate';
export const LOAD_PROFILE_REQUEST = 'auth/load_profile_request';
export const LOAD_PROFILE_SUCCESS = 'auth/load_profile_success';
export const LOAD_PROFILE_FAILURE = 'auth/load_profile_failure';  

export const login = (payload) => ({
  type: LOGIN_REQUEST,
  payload,
});

export const authenticate = (payload) => ({
  type: AUTHENTICATE,
  payload,
});

export const loadProfile = () => ({
  type: LOAD_PROFILE_REQUEST,
});
