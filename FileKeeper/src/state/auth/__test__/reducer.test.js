import { actionTypes, auth as reducer } from "../index";

const initialState = {
  tryingLogin: false,
  tryingLogout: false,
  loggedIn: false,
  user: ""
};

describe("auth", () => {
  it("Reducer initial state", () => {
    expect(reducer(undefined)).toEqual(initialState);
  });

  it("Login attempt.", () => {
    const expectedState = Object.assign({}, initialState, {
      tryingLogin: true
    });

    expect(
      reducer(initialState, {
        type: actionTypes.TRY_LOGIN
      })
    ).toEqual(expectedState);
  });

  it("Login completed.", () => {
    const userName = "foo";
    const expectedState = Object.assign({}, initialState, {
      user: userName
    });

    expect(
      reducer(initialState, { type: actionTypes.LOGIN, user: userName })
    ).toEqual(expectedState);
  });

  it("Logout attempt.", () => {
    const expectedState = Object.assign({}, initialState, {
      tryingLogout: true
    });

    expect(
      reducer(initialState, {
        type: actionTypes.TRY_LOGOUT
      })
    ).toEqual(expectedState);
  });

  it("Logout completed.", () => {
    expect(reducer(initialState, { type: actionTypes.LOGOUT })).toEqual(
      initialState
    );
  });
});
