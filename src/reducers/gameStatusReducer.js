const initState = {};

const gameStatusReducer = (state = initState, action) => {
  let payload = action.payload;
  switch (action.type) {
    default:
      return { ...state };
    case "UPDATE_GAMESTATUS":
      return { ...payload };
  }
};

export default gameStatusReducer;
