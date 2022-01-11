import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import styled from "styled-components";
import { useSelector } from "react-redux";
import DiceDisplayComponent from "./DiceDisplayComponent";
import { red } from "@mui/material/colors";

function EndOfRoundComponent() {
  let playersInfo = useSelector((state) => state.gameStatus.playersInfo);
  let requesterName = useSelector((state) => state.gameStatus.requesterName);
  let winnerName = useSelector((state) => state.gameStatus.winnerName);
  let loserName = useSelector((state) => state.gameStatus.loserName);
  let action = useSelector((state) => state.gameStatus.action);

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
                        <Grid container item justifyContent="center">
                          <Grid item>val</Grid>
                          <Grid item>num</Grid>
                        </Grid>
                      </Grid>
                      <Grid container item direction="column" xs={6}>
                        <Grid item>Actual</Grid>
                        <Grid container item justifyContent="center">
                          <Grid item>val</Grid>
                          <Grid item>num</Grid>
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
