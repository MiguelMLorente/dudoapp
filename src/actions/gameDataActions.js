export const updateUserID = (newID) => async (dispatch) => {
  dispatch({
    type: "UPDATE_USER_ID",
    payload: newID,
  });
};

export const updateGameData = (newData) => async (dispatch) => {
  dispatch({
    type: "UPDATE_GAME_DATA",
    payload: newData,
  });
};

export const updateUserName = (newName) => (dispatch) => {
  dispatch({
    type: "UPDATE_USERNAME",
    payload: newName,
  });
};
