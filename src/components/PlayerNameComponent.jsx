import React, { useContext } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { WebSocketContext } from "../WebSocket";

function PlayerNameComponent(props) {
  const ws = useContext(WebSocketContext);
  const userName = useSelector((state) => state.gameData.name);
  const userUuid = useSelector((state) => state.gameData.userId);
  const gameUuid = useSelector((state) => state.gameData.gameId);
  let isAdmin = useSelector((state) => state.gameData.isAdmin);

  const kickHandler = () => {
    ws.sendKickRequest(userUuid, gameUuid, props.name);
  };

  const kickDisplay = () => {
    if (props.name === userName) {
      return;
    } else {
      return (
        <Grid item>
          <StyledFontAwesomeIcon icon={faMinusSquare} onClick={kickHandler} />
        </Grid>
      );
    }
  };
  return (
    <Paper elevation={2} className={props.isReady ? "isReady" : ""}>
      <Grid container justifyContent="space-between">
        <Grid item>
          <StyledTypography variant="h4">{props.name}</StyledTypography>
        </Grid>
        {isAdmin ? kickDisplay() : ""}
      </Grid>
    </Paper>
  );
}
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 0.25rem;
  font-size: 2rem;
`;
const StyledTypography = styled(Typography)`
  padding-left: 1rem;
`;

export default PlayerNameComponent;
