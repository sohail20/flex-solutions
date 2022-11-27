import { combineReducers } from "redux";
import venueReducer from "./venues";
import authReducer from "./auth";
import registerUser from "./users"
export default combineReducers({
  venues: venueReducer,
  auth:authReducer,
  user:registerUser
});
