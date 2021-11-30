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
