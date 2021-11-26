import React, { createContext } from "react";
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import {
  updateError,
  updateGameData,
  updateUserID,
} from "./actions/gameDataActions";
import { changeToLoby } from "./actions/appStatusActions";

const WebSocketContext = createContext(null);

export { WebSocketContext };

const WebSocketProvider = ({ children }) => {
  let socket;
  let ws;

  const dispatch = useDispatch();

  const sendJoinRequest = (
    userId,
    userName,
    requestedGameName,
    requestedGamePassword
  ) => {
    const payload = {
      requester: {
        uuid: userId,
        name: userName,
      },
      actionType: "JOIN GAME",
      actionData: {
        gameShortId: requestedGameName,
        gamePassword: requestedGamePassword,
      },
    };
    socket.emit("action", payload);
  };

  if (!socket) {
    socket = io("ws://localhost:8081");

    socket.on("new-user", (data) => {
      dispatch(updateUserID(data));
    });
    socket.on("joined-game", (data) => {
      dispatch(updateGameData(data));
      dispatch(changeToLoby());
    });
    socket.on("error", (error) => {
      dispatch(updateError(error));
    });

    ws = {
      socket: socket,
      sendJoinRequest,
    };
  }
  return (
    <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>
  );
};

export default WebSocketProvider;
