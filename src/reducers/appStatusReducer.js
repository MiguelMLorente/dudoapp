const initState = {
  component: "RoomJoin",
};

const appStatusReducer = (state = initState, action) => {
  let payload = action.payload;

  switch (action.type) {
    default:
      return { ...state };
    case "LOBBY":
      return { ...state, component: "Lobby" };
  }
};

export default appStatusReducer;
