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

export const updateAdminPrivilege = (newBool) => (dispatch) => {
  dispatch({
    type: "UPDATE_ADMIN",
    payload: newBool,
  });
};

export const updateLobby = (newLobby) => (dispatch) => {
  dispatch({
    type: "UPDATE_LOBBY",
    payload: newLobby,
  });
};

export const updateError = (newError) => (dispatch) => {
  dispatch({
    type: "UPDATE_ERROR",
    payload: newError,
  });
};
