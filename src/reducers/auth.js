import { LOGOUT, SET_AUTHED_USER, SET_AUTH_ERROR } from '../actions/auth';
const initialState = {
  authedUser: undefined,
  error: undefined,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return { authedUser: action.payload, error: undefined };
    case SET_AUTH_ERROR:
      return { authedUser: undefined, error: action.payload };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
