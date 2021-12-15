export const updateGameStatus = (newGameStatus) => (dispatch) => {
  dispatch({
    type: "UPDATE_GAMESTATUS",
    payload: newGameStatus,
  });
};

export const updateBidSelector = (newBidSelector) => (dispatch) =>{
  dispatch({
    type: 'UPDATE_BID_SELECTOR',
    payload: newBidSelector
  })
}