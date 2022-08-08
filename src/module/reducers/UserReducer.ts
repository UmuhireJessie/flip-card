import {
    SIGN_UP_USER,
    LOGIN_USER
  } from "../index";
  
  const initialState = {
    isLoaded: false,
    data: [],
    values: [],
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case SIGN_UP_USER:
        return {
          ...state,
          isLoaded: true,
          data: [...state.data, payload],
        };
      case LOGIN_USER:
        return {
          ...state,
          isLoaded: true,
          data: [...state.data, payload],
        };
      default:
        return state;
    }
  };
  