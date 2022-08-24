import api from '../utils/api';

export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const SET_AUTH_ERROR = 'SET_AUTH_ERROR';
export const LOGOUT = 'LOGOUT';

export const login =
  ({ username, password }) =>
  (dispatch) => {
    api
      .login({ username, password })
      .then((res) => {
        dispatch({
          type: SET_AUTHED_USER,
          payload: res,
        });
      })
      .catch((err) => {
        dispatch({
          type: SET_AUTH_ERROR,
          payload: err.message,
        });
      });
  };

export const logout = () => (dispatch) =>
  dispatch({
    type: LOGOUT,
  });
