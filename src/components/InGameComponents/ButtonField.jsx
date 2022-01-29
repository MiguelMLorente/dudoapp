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
  let theme = useSelector((state) => state.theme);

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
    <StyledPaper elevation={3} style={{backgroundColor: theme.colors.paper}}>
      <Grid container justifyContent="center">
        <Grid container item justifyContent="space-around">
          <Paper elevation={1} style={{backgroundColor: theme.colors.paper2, padding: "1rem"}}>
            <Grid container wrap="nowrap">
              <StyledButtonGrid item>
                <Button variant="contained" onClick={handleBid} style={{backgroundColor: theme.colors.buttonField, color: theme.colors.text}} >
                  Bid
                </Button>
              </StyledButtonGrid>
              <Grid item>
                <DiceSelector />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <StyledButtonGrid container item justifyContent="space-around" spacing={0}>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => {
                handleEndOfRoundRequest("CALL");
              }}
              style={{backgroundColor: theme.colors.buttonField, color: theme.colors.text}}
            >
              Call
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => {
                handleEndOfRoundRequest("KILL");
              }}
              style={{backgroundColor: theme.colors.buttonField, color: theme.colors.text}}
            >
              Kill
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => {
                handleEndOfRoundRequest("SPOT ON");
              }}
              style={{backgroundColor: theme.colors.buttonField, color: theme.colors.text}}
            >
              Spot
            </Button>
          </Grid>
        </StyledButtonGrid>
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
  margin-left: 0.4rem;
`;
export default ButtonField;
