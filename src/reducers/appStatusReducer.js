const initState = {
  component: "RoomJoin",
};

const appStatusReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return { ...state };
    case "LOBBY":
      return { ...state, component: "Lobby" };
  }
};

export default appStatusReducer;
