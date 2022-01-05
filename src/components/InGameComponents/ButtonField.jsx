import React, { useContext } from "react";
import { Button, Grid, Paper } from "@mui/material";
import styled from "styled-components";
import DiceSelector from "./DiceSelector";
import { useSelector } from "react-redux";
import { WebSocketContext } from "../../WebSocket";

function ButtonField() {
  const ws = useContext(WebSocketContext);
  const gameUuid = useSelector((state) => state.gameData.gameId);
  const userUuid = useSelector((state) => state.gameData.userId);
  let bidSelector = useSelector((state) => state.gameStatus.bidSelector);

  const handleEndOfRoundRequest = (actionType) => {
    ws.sendEndOfRoundRequest(userUuid, actionType, gameUuid);
  };

  const handleBid = () => {
    ws.sendBidRequest(
      userUuid,
      gameUuid,
      bidSelector.diceNumber,
      bidSelector.diceValue
    );
  };
  return (
    <StyledPaper elevation={3}>
      <Grid container justifyContent="center">
        <Grid container item justifyContent="space-around">
          <StyledButtonGrid item>
            <Button variant="outlined" onClick={handleBid}>
              Bid
            </Button>
          </StyledButtonGrid>
          <Grid item>
            <DiceSelector />
          </Grid>
        </Grid>
        <Grid container item justifyContent="space-around" spacing={3}>
          <Grid item>
            <Button
              variant="outlined"
              onClick={() => {
                handleEndOfRoundRequest("KILL");
              }}
            >
              Kill
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              onClick={() => {
                handleEndOfRoundRequest("CALL");
              }}
            >
              Call
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            onClick={() => {
              handleEndOfRoundRequest("SPOT ON");
            }}
          >
            Spot
          </Button>
        </Grid>
      </Grid>
    </StyledPaper>
  );
}
const StyledPaper = styled(Paper)`
  padding: 2rem;
  button {
    margin: 0.6rem;
  }
`;

const StyledButtonGrid = styled(Grid)`
  padding-top: 1.6rem;
`;

export default ButtonField;
