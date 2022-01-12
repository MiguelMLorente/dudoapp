import React from "react";
import { Divider, Grid, Paper, Typography } from "@mui/material";
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

function EndOfRoundComponent() {
  let playersInfo = useSelector((state) => state.gameStatus.playersInfo);
  let requesterName = useSelector((state) => state.gameStatus.requesterName);
  let winnerName = useSelector((state) => state.gameStatus.winnerName);
  let loserName = useSelector((state) => state.gameStatus.loserName);
  let action = useSelector((state) => state.gameStatus.action);
  let currentBid = useSelector((state) => state.gameStatus.currentBid);
  let totalBidDieNumber = 0;

  playersInfo.forEach((player) => {
    player.diceValue.forEach((die) => {
      if (die === currentBid.diceValue || die === 1) {
        totalBidDieNumber += 1;
      }
    });
  });

  const looserWinnerDisplay = (action) => {
    switch (action) {
      case "CALL":
      case "KILL":
        return (
          <Grid item container justifyContent="center" spacing={3}>
            <Grid item>
              <Typography>{loserName} looses a dice</Typography>
            </Grid>
            <Grid item>
              <FontAwesomeIcon icon={faDice} />
            </Grid>
            <Grid item>
              <FontAwesomeIcon icon={faArrowDown} />
            </Grid>
          </Grid>
        );
      case "SPOT ON":
        return (
          <Grid item container justifyContent="center" spacing={3}>
            <Grid item>
              <Typography>{winnerName} wins a dice</Typography>
            </Grid>
            <Grid item>
              <FontAwesomeIcon icon={faDice} />
            </Grid>
            <Grid item>
              <FontAwesomeIcon icon={faArrowUp} />
            </Grid>
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
            <StyledPaper elevation={1}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                spacing={5}
                className="EndOfRoundContainer"
              >
                {" "}
                <Grid item>
                  <Typography variant="h5">{requesterName} bidded: </Typography>
                </Grid>
                <Grid item>
                  <StyledPaper elevation={2}>
                    <Grid container item>
                      <Grid container item direction="column" xs={6}>
                        <Grid item>{action}</Grid>
                        <StyledDieAction
                          container
                          item
                          justifyContent="center"
                          spacing={2}
                        >
                          <Grid item>
                            {valueToDiceIcon(currentBid.diceValue)}
                          </Grid>
                          <Grid item>
                            <FontAwesomeIcon icon={faTimes} />
                          </Grid>
                          <Grid item>{currentBid.diceNumber}</Grid>
                        </StyledDieAction>
                      </Grid>
                      <Grid container item direction="column" xs={6}>
                        <Grid item>There were</Grid>
                        <StyledDieAction
                          container
                          item
                          justifyContent="center"
                          spacing={2}
                        >
                          <Grid item>
                            {valueToDiceIcon(currentBid.diceValue)}
                          </Grid>
                          <Grid item>
                            <FontAwesomeIcon icon={faTimes} />
                          </Grid>
                          <Grid item>{totalBidDieNumber}</Grid>
                        </StyledDieAction>
                      </Grid>
                    </Grid>
                  </StyledPaper>
                  <Grid item>
                    <Divider />
                  </Grid>
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

export default EndOfRoundComponent;
