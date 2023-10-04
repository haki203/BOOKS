export const loginSuccess = (userData) => ({
    type: 'LOGIN_SUCCESS',
    payload: userData,
  });
  
  export const logoutSuccess = () => ({
    type: 'LOGOUT_SUCCESS',
  });