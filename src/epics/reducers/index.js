import { combineReducers } from "redux";
import apiReducer from "./api";
import commonReducer from './common'

const rootReducer = combineReducers({
  api: apiReducer,
  common: commonReducer,
});

export default rootReducer;
