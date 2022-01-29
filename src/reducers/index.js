import { combineReducers } from "redux";
import gameDataReducer from "./gameDataReducer";
import gameStatusReducer from "./gameStatusReducer";
import appStatusReducer from "./appStatusReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  gameData: gameDataReducer,
  gameStatus: gameStatusReducer,
  appStatus: appStatusReducer,
  theme: themeReducer,
});

export default rootReducer;
