import React, { createContext } from "react";
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import {
  updateError,
  updateGameData,
  updateLobby,
  updateUserID,
} from "./actions/gameDataActions";
import {
  changeToGameInProgress,
  changeToJoinRoom,
  changeToLoby,
  updateKickStatus,
} from "./actions/appStatusActions";
import { updateGameStatus } from "./actions/gameStatusActions";

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

  const sendCreateGame = (userUuid, userName, requestedGamePassword) => {
    const payload = {
      requester: {
        uuid: userUuid,
        name: userName,
      },
      actionType: "CREATE GAME",
      actionData: {
        gamePassword: requestedGamePassword,
      },
    };
    socket.emit("action", payload);
  };
  const sendReadyUpdate = (userUuid, gameUuid, readyBool) => {
    const payload = {
      requester: {
        uuid: userUuid,
      },
      actionType: "PLAYER READY",
      actionData: {
        gameId: gameUuid,
        ready: readyBool,
      },
    };
    socket.emit("action", payload);
  };

  const sendKickRequest = (userUuid, gameUuid, kickedUserRequest) => {
    const payload = {
      requester: {
        uuid: userUuid,
      },
      actionType: "KICK USER",
      actionData: {
        gameId: gameUuid,
        kickedUser: kickedUserRequest,
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
    socket.on("lobby-update", (data) => {
      dispatch(updateLobby(data));
    });
    socket.on("game-status", (data) => {
      dispatch(updateGameStatus(data));
      dispatch(changeToGameInProgress());
    });
    socket.on("kicked-player", () => {
      //This case is special, the server only sends
      // an empty string, so we pass the bool to the store.
      dispatch(updateKickStatus(true));
      dispatch(changeToJoinRoom());
    });
    socket.on("error", (error) => {
      dispatch(updateError(error));
    });

    ws = {
      socket: socket,
      sendJoinRequest,
      sendCreateGame,
      sendReadyUpdate,
      sendKickRequest,
    };
  }
  return (
    <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>
  );
};

export default WebSocketProvider;
