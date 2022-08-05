import cardReducer from "./CardReducer";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  cardReducer: cardReducer,
});

export default allReducers;
