export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const MODAL_ClOSE = 'MODAL_CLOSE';

export const signUp = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      const expirationDate = new Date(
        new Date().getTime() + parseInt(resData.expiresIn)
      );

      dispatch({
        type: SIGNUP,
        token: resData.token,
        user: resData.user,
      });
      dispatch({
        type: MODAL_ClOSE,
      });
      setLogoutTimer(parseInt(resData.expiresIn));
      saveDataToStorage(resData.token, resData.user, expirationDate);
    } catch (error) {
      console.log(error);
    }
  };
};
export const signIn = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/users/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      const expirationDate = new Date(
        new Date().getTime() + parseInt(resData.expiresIn)
      );

      dispatch({
        type: LOGIN,
        token: resData.token,
        user: resData.user,
      });
      dispatch({
        type: MODAL_ClOSE,
      });
      setLogoutTimer(parseInt(resData.expiresIn));
      saveDataToStorage(resData.token, resData.user, expirationDate);
    } catch (error) {
      console.log(error);
    }
  };
};

export const logout = () => {
  clearLogoutTimer();
  localStorage.removeItem('userData');
  return { type: LOGOUT };
};

let timer;

const clearLogoutTimer = () => {
  if (timer) {
    clearTimeout(timer);
  }
};

const setLogoutTimer = (expirationTime) => {
  return (dispatch) => {
    timer = setTimeout(() => {
      dispatch(logout());
    }, expirationTime);
  };
};

const saveDataToStorage = (token, user, expirationDate) => {
  localStorage.setItem(
    'userData',
    JSON.stringify({
      token: token,
      user: user,
      expiryDate: expirationDate.toISOString(),
    })
  );
};
