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
    //   case GET_ALL_ERROR:
    //     return {
    //       ...state,
    //       isLoaded: false,
    //     };
    //   case GET_ALL_USERS_DRIVERS:
    //     return {
    //       ...state,
    //       isLoaded: true,
    //       drivers: payload,
    //       isLoading: false,
    //     };
      case GET_ALL_CARDS:
        return {
          ...state,
          isLoaded: true,
          data: payload,
        };
    //   case GET_ONE_USER:
    //     return {
    //       ...state,
    //       isLoading: false,
    //       isLoaded: true,
    //       values: payload,
    //     };
      case POST_CARD:
        return {
          ...state,
          isLoaded: true,
          data: [...state.data, payload],
        };
    //   case POST_ONE_USER_ERROR:
    //     return {
    //       ...state,
    //       isLoading: false,
    //       isLoaded: true,
    //       error: payload,
    //     };
    //   case UPDATE_ONE_USER:
    //     return {
    //       isLoaded: false,
    //       isLoading: true,
    //       data: payload,
    //     };
    //   case DELETE_USER:
    //     const remain = state.data.filter(({ id }) => id !== payload);
    //     return {
    //       isLoaded: true,
    //       isLoading: false,
    //       data: remain,
    //     };
      default:
        return state;
    }
  };
  