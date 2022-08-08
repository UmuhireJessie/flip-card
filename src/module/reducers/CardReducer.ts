import {
    POST_CARD,
    GET_ALL_CARDS
  } from "../index";
  
  const initialState = {
    isLoaded: false,
    data: [],
    values: [],
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_ALL_CARDS:
        return {
          ...state,
          isLoaded: true,
          data: payload,
        };
      case POST_CARD:
        return {
          ...state,
          isLoaded: true,
          data: [...state.data, payload],
        };
      default:
        return state;
    }
  };
  