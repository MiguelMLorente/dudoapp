function userNameProvider() {
  // TODO: Implement random name provider ( Adjective + Animal )
  return "SillyName";
}

const initState = {
  userUuid: "",
  name: userNameProvider(),
  gameName: "",
  gamePassword: "",
  userIsReady: false,
  gameId: "",
  playerList: [],
};

const gameDataReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return { ...state };
    case "FETCH_GAME_DATA":
      //Try to get into a game
      return { ...state };
  }
};

export default gameDataReducer;
