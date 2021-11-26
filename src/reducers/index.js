import { combineReducers } from "redux";
import gameDataReducer from "./gameDataReducer";
import gameStatusReducer from "./gameStatusReducer";
import appStatusReducer from "./appStatusReducer";

const rootReducer = combineReducers({
  gameData: gameDataReducer,
  gameStatus: gameStatusReducer,
  appStatus: appStatusReducer,
});

export default rootReducer;
