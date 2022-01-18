import React, { useContext } from "react";
import { useSelector } from "react-redux";
import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { WebSocketContext } from "../../WebSocket";

function SpecialRoundComponent() {
  const ws = useContext(WebSocketContext);
  const userUuid = useSelector((state) => state.gameData.userId);
  const gameUuid = useSelector((state) => state.gameData.gameId);
  let specialRound = useSelector((state) => state.gameStatus.specialRound);
  let userName = useSelector((state) => state.gameData.name);
  let [dialog, setDialog] = useState(false);

  useEffect(() => {
    if (specialRound) {
      setDialog(true);
    }
  }, [specialRound, dialog, setDialog]);

  const sendOptionHandler = (option) => {
    ws.selectSpecialRound(userUuid, option, gameUuid);
  };

  if (specialRound) {
    return (
      <React.Fragment>
        <Dialog open={dialog}>
          <DialogTitle>
            {specialRound.playerRequested === userName
              ? "Select special round"
              : `Waiting for ${specialRound.playerRequested} to select round type`}
          </DialogTitle>
          {specialRound.playerRequested === userName ? (
            <List sx={{ pt: 0 }}>
              <ListItem button onClick={() => sendOptionHandler("open")}>
                <ListItemText primary="Open Round" />
              </ListItem>
              <ListItem button onClick={() => sendOptionHandler("blind")}>
                <ListItemText primary="Blind Round" />
              </ListItem>
            </List>
          ) : (
            ""
          )}
        </Dialog>
      </React.Fragment>
    );
  } else {
    return null;
  }
}

export default SpecialRoundComponent;
