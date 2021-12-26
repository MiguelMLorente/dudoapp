const initState = {
  component: "RoomJoin",
  userKicked: false,
};

const appStatusReducer = (state = initState, action) => {
  let payload = action.payload;
  switch (action.type) {
    default:
      return { ...state };
    case "LOBBY":
      return { ...state, component: "Lobby" };
    case "NEW_ROOM":
      return { ...state, component: "NewRoom" };
    case "JOIN_ROOM":
      return { ...state, component: "" };
    case "GAME_IN_PROGRESS":
      return { ...state, component: "GameInProgress" };
    case "UPDATE_KICKED_STATUS":
      return { ...state, userKicked: payload };
    case "END_OF_ROUND":
      return {...state, component: "EndOfRound"}
  }
};

export default appStatusReducer;
