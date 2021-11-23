export const updateUserID = (newID) => async (dispatch) => {
  console.log("updateUserID dispatched with data: ");
  console.log(newID);
  dispatch({
    type: "UPDATE_USER_ID",
    payload: newID,
  });
};
