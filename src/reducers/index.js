import { combineReducers } from "redux";
import gameDataReducer from "./gameDataReducer";
import gameStatusReducer from "./gameStatusReducer";

const rootReducer = combineReducers({
  gameData: gameDataReducer,
  gameStatus: gameStatusReducer,
});

export default rootReducer;
