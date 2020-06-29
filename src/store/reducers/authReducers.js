import { SIGNUP, LOGIN, LOGOUT } from '../actions/authActions';

const initialState = {
  loginData: { user: null, token: null },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        loginData: { user: action.user, token: action.token },
      };
    case LOGIN:
      return {
        loginData: { user: action.user, token: action.token },
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
