export const updateGameStatus = (newGameStatus) => (dispatch) => {
  dispatch({
    type: "UPDATE_GAMESTATUS",
    payload: newGameStatus,
  });
};
