export const changeToLoby = () => (dispatch) => {
  dispatch({
    type: "LOBBY",
  });
};

export const changeToNewRoom = () => (dispatch) => {
  dispatch({
    type: "NEW_ROOM",
  });
};

export const changeToJoinRoom = () => (dispatch) => {
  dispatch({
    type: "JOIN_ROOM",
  });
};

export const changeToGameInProgress = () => (dispatch) => {
  dispatch({
    type: "GAME_IN_PROGRESS",
  });
};

export const changeToEndOfRound = () => (dispatch) => {
  dispatch({
    type: 'END_OF_ROUND'
  })  
}

export const updateKickStatus = (newBool) => (dispatch) => {
  dispatch({
    type: "UPDATE_KICKED_STATUS",
    payload: newBool,
  });
};
