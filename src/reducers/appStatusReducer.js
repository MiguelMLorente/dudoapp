const initState = {
  component: "RoomJoin",
};

const appStatusReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return { ...state };
    case "LOBBY":
      return { ...state, component: "Lobby" };
    case "NEW_ROOM":
      return { ...state, component: "NewRoom" };
    case "JOIN_ROOM":
      return { ...state, component: "" };
  }
};

export default appStatusReducer;
