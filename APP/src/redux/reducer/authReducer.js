const initialState = {
    isLoggedIn: false,
    user: null,
  };
  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          isLoggedIn: true,
          user: action.payload,
        };
      case 'LOGOUT_SUCCESS':
        return {
          isLoggedIn: false,
          user: null,
        };
      default:
        return state;
    }
  }
  