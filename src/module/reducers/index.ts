import cardReducer from "./CardReducer";
import userReducer from "./UserReducer";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  cardReducer: cardReducer,
  userReducer: userReducer,
});

export default allReducers;
