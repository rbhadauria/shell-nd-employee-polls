import api from '../utils/api';

export const ALL_USERS = 'ALL_USERS';

export const getAllUsers = () => (dispatch) => {
  api.getAllUsers().then((res) => {
    dispatch({
      type: ALL_USERS,
      payload: res,
    });
  });
};
