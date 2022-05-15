import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
  } from "../actions/types";
  
  const initialState = { isLoggedIn: false };
  
  const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          isLoggedIn: false,
        };
      case REGISTER_FAIL:
        return {
          ...state,
          isLoggedIn: false,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
        };
      default:
        return state;
    }
  }

export default authReducer;