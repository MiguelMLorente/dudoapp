function userNameProvider() {
  // TODO: Implement random name provider ( Adjective + Animal )
  return "SillyName";
}

const initState = {
  userId: "",
  name: userNameProvider(),
  gameName: "",
  gamePassword: "",
  userIsReady: false,
  gameId: "",
  playerList: [],
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
  }
};

export default gameDataReducer;
