import * as actionTypes from "./actionTypes";

const initialState = {
  tryingLogin: false,
  tryingLogout: false,
  loggedIn: false,
  user: ""
};

const handleLoginLogoutAttempt = (state, isTrying, fieldName) => {
  return Object.assign({}, state, {
    [fieldName]: isTrying
  });
};

const handleLoginAttempt = (state, isTryingLogin) =>
  handleLoginLogoutAttempt(state, isTryingLogin, "tryingLogin");

const handleLogoutAttempt = (state, isTryingLogout) =>
  handleLoginLogoutAttempt(state, isTryingLogout, "tryingLogout");

const handleLogin = (state, action) => {
  return Object.assign({}, handleLoginAttempt(state, false), {
    user: action.user
  });
};

const handleLogout = state => {
  return Object.assign({}, handleLogoutAttempt(state, false), {
    user: ""
  });
};

const reducer = (state = initialState, action) => {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case actionTypes.TRY_LOGIN:
      return handleLoginAttempt(state, true);
    case actionTypes.LOGIN:
      return handleLogin(state, action);
    case actionTypes.TRY_LOGOUT:
      return handleLogoutAttempt(state, true);
    case actionTypes.LOGOUT:
      return handleLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
