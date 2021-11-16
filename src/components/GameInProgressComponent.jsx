import React from "react";
import styled from "styled-components";
import { Button, Grid, Paper, Typography, Divider } from "@mui/material";
import LogoComponent from "./LogoComponent";
import BidDisplayComponent from "./BidDisplayComponent";
import DiceDisplayComponent from "./DiceDisplayComponent";

function GameInProgressComponent() {
  return (
    <React.Fragment>
      <StyledContainer>
        <StyledGrid container>
          <Grid item s={12} sm={10} md={8} lg={6}>
            <StyledPaper elevation={1}>
              <LogoComponent variant="small" />
              <Grid
                container
                direction="column"
                justifyContent="center"
                spacing={3}
                className="dashBoard"
              >
                <Grid item>
                  <Typography>Your Dice </Typography>
                  <DiceDisplayComponent diceValues={[1, 1, 5, 1, 1]} />
                </Grid>
                <Grid item>
                  <Divider />
                </Grid>
                <Grid item>
                  Current bid:
                  <BidDisplayComponent
                    name="Biggus Biddus"
                    value={5}
                    number={10}
                  />
                </Grid>
                <Grid item>
                  <Divider />
                </Grid>
                <Grid item>
                  Now Playing:
                  <BidDisplayComponent name="Incontinentia Timus" isPlaying />
                </Grid>
                <Grid item>
                  <Divider />
                </Grid>
                <Grid item>
                  <StyledPaper elevation={3}>
                    <Grid container justifyContent="center">
                      <Grid container item justifyContent="space-around">
                        <Grid item>
                          <Button variant="outlined">Bid</Button>
                        </Grid>
                        <Grid item>CAROSUEL</Grid>
                      </Grid>
                      <Grid
                        container
                        item
                        justifyContent="space-around"
                        spacing={3}
                      >
                        <Grid item>
                          <Button variant="outlined">Kill</Button>
                        </Grid>
                        <Grid item>
                          <Button variant="outlined">Call</Button>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Button variant="outlined">Spot</Button>
                      </Grid>
                    </Grid>
                  </StyledPaper>
                </Grid>
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
  button {
    margin: 0.6rem;
  }
`;
const StyledContainer = styled.div`
  padding: 2rem;
  margin-top: 10vh;
`;
const StyledGrid = styled(Grid)`
  justify-content: center;
`;
export default GameInProgressComponent;
