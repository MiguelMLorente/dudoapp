const initState = {
  bidSelector: {
    diceValue: 1,
    diceNumber:1
  },


};

const gameStatusReducer = (state = initState, action) => {
  let payload = action.payload;
  switch (action.type) {
    default:
      return { ...state };
    case "UPDATE_GAMESTATUS":
      return {...state, ...payload};
    case 'UPDATE_BID_SELECTOR':
      return {...state, bidSelector: payload}
  }
};

export default gameStatusReducer;
