import sillyNameGenerator from "../userNameUtils";

const initState = {
  userId: "",
  name: sillyNameGenerator(),
  gameName: "",
  gamePassword: "",
  userIsReady: false,
  gameId: "",
  playerList: [],
  error: {},
};

const gameDataReducer = (state = initState, action) => {
  console.log("Reducer fired with action: ");
  console.log(action);
  let payload = action.payload;
  switch (action.type) {
    default:
      return { ...state };
    case "UPDATE_USER_ID":
      return { ...state, userId: payload.userId };
    case "UPDATE_USERNAME":
      return { ...state, name: payload };
    case "UPDATE_GAME_DATA":
      return {
        ...state,
        gameName: payload.gameShortId,
        gameId: payload.gameId,
        playerList: payload.playerList,
      };
    case "UPDATE_LOBBY": {
      return { ...state, playerList: payload.playerList };
    }
    case "UPDATE_ERROR":
      return {
        ...state,
        error: payload,
      };
  }
};

export default gameDataReducer;
