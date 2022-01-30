import React from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { useSelector } from "react-redux";
import DiceDisplayComponent from "./DiceDisplayComponent";
import { valueToDiceIcon } from "./utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faDice,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import SpecialRoundComponent from "./SpecialRoundComponent";
import CenteredGrid from "../StyledComponents/CenteredGrid";
import StyledGrid from "../StyledComponents/StyledGrid";
import StyledPaper from "../StyledComponents/StyledPaper";

function EndOfRoundComponent() {
  let playersInfo = useSelector((state) => state.gameStatus.playersInfo);
  let requesterName = useSelector((state) => state.gameStatus.requesterName);
  let winnerName = useSelector((state) => state.gameStatus.winnerName);
  let loserName = useSelector((state) => state.gameStatus.loserName);
  let action = useSelector((state) => state.gameStatus.action);
  let currentBid = useSelector((state) => state.gameStatus.currentBid);
  let endOfGame = useSelector((state) => state.gameStatus.endOfGame);
  let totalBidDieNumber = 0;

  playersInfo.forEach((player) => {
    if (player.diceValue && currentBid) {
      player.diceValue.forEach((die) => {
        if (die === currentBid.diceValue || die === 1) {
          totalBidDieNumber += 1;
        }
      });
    }
  });

  const looserWinnerDisplay = (action) => {
    switch (action) {
      case "CALL":
      case "KILL":
        return (
          <Grid item container justifyContent="center" spacing={3}>
            <StyledGrid>
              <Typography>{loserName} looses a dice</Typography>
            </StyledGrid>
            <StyledGrid>
              <FontAwesomeIcon icon={faDice} />
            </StyledGrid>
            <StyledGrid>
              <FontAwesomeIcon icon={faArrowDown} />
            </StyledGrid>
          </Grid>
        );
      case "SPOT ON":
        return (
          <Grid item container justifyContent="center" spacing={3}>
            <StyledGrid>
              <Typography>{winnerName} wins a dice</Typography>
            </StyledGrid>
            <StyledGrid>
              <FontAwesomeIcon icon={faDice} />
            </StyledGrid>
            <StyledGrid>
              <FontAwesomeIcon icon={faArrowUp} />
            </StyledGrid>
          </Grid>
        );
      default:
        return "";
    }
  };

  return (
    <React.Fragment>
      <StyledContainer>
        <CenteredGrid container>
          <Grid item xs={12} sm={10} md={8}>
            <StyledPaper elevate={1} color={"background"} padding={"big"}>
              {endOfGame ? (
                <Dialog open={endOfGame}>
                  <DialogTitle>{endOfGame.winner} won!</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Refresh to create a new room and play again
                    </DialogContentText>
                  </DialogContent>
                </Dialog>
              ) : (
                ""
              )}
              <SpecialRoundComponent />
              <Grid
                container
                direction="column"
                justifyContent="center"
                spacing={5}
                className="EndOfRoundContainer"
              >
                <StyledGrid>
                  <Typography variant="h5">{requesterName} bidded: </Typography>
                </StyledGrid>
                <Grid item>
                  <StyledPaper elevation={2} color={"paper2"} padding={"big"}>
                    <Grid container item>
                      <Grid container item direction="column" xs={6}>
                        <StyledGrid>
                          {action}
                        </StyledGrid>
                        {currentBid ? (
                          <StyledDieAction
                            container
                            item
                            justifyContent="center"
                            spacing={2}
                          >
                            <StyledGrid>
                              {valueToDiceIcon(currentBid.diceValue)}
                            </StyledGrid>
                            <StyledGrid>
                              <FontAwesomeIcon icon={faTimes} />
                            </StyledGrid>
                            <StyledGrid>
                              {currentBid.diceNumber}
                            </StyledGrid>
                          </StyledDieAction>
                        ) : (
                          ""
                        )}
                      </Grid>
                      <Grid container item direction="column" xs={6}>
                        <StyledGrid>
                          There were
                        </StyledGrid>
                        {currentBid ? (
                          <StyledDieAction
                            container
                            item
                            justifyContent="center"
                            spacing={2}
                          >
                            <StyledGrid>
                              {valueToDiceIcon(currentBid.diceValue)}
                            </StyledGrid>
                            <StyledGrid>
                              <FontAwesomeIcon icon={faTimes} />
                            </StyledGrid>
                            <StyledGrid>
                              {totalBidDieNumber}
                            </StyledGrid>
                          </StyledDieAction>
                        ) : (
                          ""
                        )}
                      </Grid>
                    </Grid>
                  </StyledPaper>
                  {looserWinnerDisplay(action)}
                  <Grid item>
                    <Divider />
                  </Grid>
                </Grid>
                {playersInfo.map((player) => {
                  return (
                    <Grid item key={player.playerName} s={12}>
                      <DiceDisplayComponent
                        playerName={player.playerName}
                        diceValues={player.diceValue}
                        variant="small"
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </StyledPaper>
          </Grid>
        </CenteredGrid>
      </StyledContainer>
    </React.Fragment>
  );
}
const StyledContainer = styled.div`
  padding: 2rem;
  margin-top: 10vh;
`;
const StyledDieAction = styled(Grid)`
  font-size: 2rem;
`;
export default EndOfRoundComponent;
