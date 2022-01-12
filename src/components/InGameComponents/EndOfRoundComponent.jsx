import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import styled from "styled-components";
import { useSelector } from "react-redux";
import DiceDisplayComponent from "./DiceDisplayComponent";
import { valueToDiceIcon } from "./utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
                  <Typography>{requesterName}: </Typography>
                </Grid>
                <Grid item>
                  <StyledPaper elevation={2}>
                    <Grid container item>
                      <Grid container item direction="column" xs={6}>
                        <Grid item>{action}</Grid>
                        <Grid
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
                        </Grid>
                      </Grid>
                      <Grid container item direction="column" xs={6}>
                        <Grid item>Actual</Grid>
                        <Grid
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
                        </Grid>
                      </Grid>
                    </Grid>
                  </StyledPaper>
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

export default EndOfRoundComponent;
