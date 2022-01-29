import React from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  Paper,
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

function EndOfRoundComponent() {
  let playersInfo = useSelector((state) => state.gameStatus.playersInfo);
  let requesterName = useSelector((state) => state.gameStatus.requesterName);
  let winnerName = useSelector((state) => state.gameStatus.winnerName);
  let loserName = useSelector((state) => state.gameStatus.loserName);
  let action = useSelector((state) => state.gameStatus.action);
  let currentBid = useSelector((state) => state.gameStatus.currentBid);
  let endOfGame = useSelector((state) => state.gameStatus.endOfGame);
  let totalBidDieNumber = 0;
  let theme = useSelector((state) => state.theme);

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
            <ColouredGrid item themes={theme}>
              <Typography>{loserName} looses a dice</Typography>
            </ColouredGrid>
            <ColouredGrid item themes={theme}>
              <FontAwesomeIcon icon={faDice} />
            </ColouredGrid>
            <ColouredGrid item themes={theme}>
              <FontAwesomeIcon icon={faArrowDown} />
            </ColouredGrid>
          </Grid>
        );
      case "SPOT ON":
        return (
          <Grid item container justifyContent="center" spacing={3}>
            <ColouredGrid item themes={theme}>
              <Typography>{winnerName} wins a dice</Typography>
            </ColouredGrid>
            <ColouredGrid item themes={theme}>
              <FontAwesomeIcon icon={faDice} />
            </ColouredGrid>
            <ColouredGrid item themes={theme}>
              <FontAwesomeIcon icon={faArrowUp} />
            </ColouredGrid>
          </Grid>
        );
      default:
        return "";
    }
  };

  return (
    <React.Fragment>
      <StyledContainer>
        <StyledGrid container>
          <Grid item xs={12} sm={10} md={8}>
            <StyledPaper elevation={1} style={{backgroundColor: theme.colors.background }}>
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
                <ColouredGrid item themes={theme}>
                  <Typography variant="h5">{requesterName} bidded: </Typography>
                </ColouredGrid>
                <Grid item>
                  <StyledPaper elevation={2} style={{backgroundColor: theme.colors.paper2 }}>
                    <Grid container item>
                      <Grid container item direction="column" xs={6}>
                        <ColouredGrid item themes={theme}>
                          {action}
                        </ColouredGrid>
                        {currentBid ? (
                          <StyledDieAction
                            container
                            item
                            justifyContent="center"
                            spacing={2}
                          >
                            <ColouredGrid item themes={theme}>
                              {valueToDiceIcon(currentBid.diceValue)}
                            </ColouredGrid>
                            <ColouredGrid item themes={theme}>
                              <FontAwesomeIcon icon={faTimes} />
                              </ColouredGrid>
                            <ColouredGrid item themes={theme}>
                              {currentBid.diceNumber}
                            </ColouredGrid>
                          </StyledDieAction>
                        ) : (
                          ""
                        )}
                      </Grid>
                      <Grid container item direction="column" xs={6}>
                        <ColouredGrid item themes={theme}>
                          There were
                        </ColouredGrid>
                        {currentBid ? (
                          <StyledDieAction
                            container
                            item
                            justifyContent="center"
                            spacing={2}
                          >
                            <ColouredGrid item themes={theme}>
                              {valueToDiceIcon(currentBid.diceValue)}
                            </ColouredGrid>
                            <ColouredGrid item themes={theme}>
                              <FontAwesomeIcon icon={faTimes} />
                            </ColouredGrid>
                            <ColouredGrid item themes={theme}>
                              {totalBidDieNumber}
                            </ColouredGrid>
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
        </StyledGrid>
      </StyledContainer>
    </React.Fragment>
  );
}

const StyledPaper = styled(Paper)`
  padding: 2rem;
`;
const StyledContainer = styled.div`
  padding: 2rem;
  margin-top: 10vh;
`;
const StyledGrid = styled(Grid)`
  justify-content: center;
`;
const StyledDieAction = styled(Grid)`
  font-size: 2rem;
`;
const ColouredGrid = styled(Grid)`
color: ${(props) => props.themes.colors.text};
`

export default EndOfRoundComponent;
