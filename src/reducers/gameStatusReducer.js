const initState = {
  playersInfo: [],
  currentBid: [],
};

const gameStatusReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default gameStatusReducer;
