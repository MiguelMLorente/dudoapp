import React, { createContext } from "react";
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import { updateUserID } from "./actions/gameDataActions";

const WebSocketContext = createContext(null);

export { WebSocketContext };

const WebSocketProvider = ({ children }) => {
  let socket;
  let ws;

  const dispatch = useDispatch();

  if (!socket) {
    socket = io("ws://localhost:8081");

    socket.on("new-user", (data) => {
      dispatch(updateUserID(data));
    });

    ws = {
      socket: socket,
    };
  }
  return (
    <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>
  );
};

export default WebSocketProvider;
