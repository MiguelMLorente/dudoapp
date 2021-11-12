import React from "react";
import styled from "styled-components";
import { Button, Grid, Paper, Typography, Divider } from "@mui/material";
import LogoComponent from "./LogoComponent";
import PlayerNameComponent from "./PlayerNameComponent";

function LobbyComponent() {
  const exampleJoinGameRequestResponse = {
    gameId: "12334abcd",
    playersList: [
      { name: "Fancy Rhino", ready: true },
      { name: "Brave Octopus", ready: true },
      { name: "Reactive Chicken", ready: true },
      { name: "Ludicrous Beaver", ready: false },
    ],
  };
  return (
    <React.Fragment>
      <StyledContainer>
        <StyledGrid container>
          <Grid item s={12} sm={10} md={8} lg={6}>
            <StyledPaper>
              <LogoComponent variant="small" />
              <Grid
                container
                direction="column"
                justifyContent="center"
                spacing={3}
                className="playerFields"
              >
                <Grid item>
                  <Typography variant="h5">
                    Room ID: {exampleJoinGameRequestResponse.gameId}
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="h4">Players:</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h4">
                        {exampleJoinGameRequestResponse.playersList.length} / 8
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                </Grid>
                {exampleJoinGameRequestResponse.playersList.map(
                  (player, index) => {
                    return (
                      <Grid item key={index}>
                        <PlayerNameComponent
                          name={player.name}
                          isReady={player.ready}
                        />
                      </Grid>
                    );
                  }
                )}
                <Grid item>
                  <Divider />
                </Grid>
                <Grid item>
                  <Button fullWidth={true} variant="contained">
                    READY
                  </Button>
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
`;
const StyledContainer = styled.div`
  padding: 2rem;
  margin-top: 10vh;
`;
const StyledGrid = styled(Grid)`
  justify-content: center;
`;

export default LobbyComponent;
