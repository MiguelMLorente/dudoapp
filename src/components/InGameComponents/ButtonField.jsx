import React, { useContext } from "react";
import { Button, Grid } from "@mui/material";
import styled from "styled-components";
import DiceSelector from "./DiceSelector";
import { useSelector } from "react-redux";
import { WebSocketContext } from "../../WebSocket";
import StyledPaper from "../StyledComponents/StyledPaper";

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
    <StyledPaper padding={"big"} elevate={3} color={"paper"}>
      <Grid container justifyContent="center">
        <Grid container item justifyContent="space-around">
          <StyledPaper elevate={3} color={"paper2"} padding={"small"}>
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
          </StyledPaper>
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
const StyledButtonGrid = styled(Grid)`
  padding-top: 2.5rem;
  margin-left: 0.8rem !important;
`;
export default ButtonField;
