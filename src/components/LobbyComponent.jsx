import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Button, Grid, Paper, Typography, Divider } from "@mui/material";
import LogoComponent from "./LogoComponent";
import PlayerNameComponent from "./PlayerNameComponent";
import { useSelector } from "react-redux";
import { WebSocketContext } from "../WebSocket";

function LobbyComponent() {
  const ws = useContext(WebSocketContext);
  const roomId = useSelector((state) => state.gameData.gameName);
  const userUuid = useSelector((state) => state.gameData.userId);
  const gameUuid = useSelector((state) => state.gameData.gameId);
  let playerList = useSelector((state) => state.gameData.playerList);
  let [userReady, setUserReady] = useState(false);
  let theme = useSelector((state) => state.theme);

  const readyHandler = () => {
    ws.sendReadyUpdate(userUuid, gameUuid, !userReady);
    setUserReady((userReady) => !userReady);
  };

  return (
    <React.Fragment>
      <StyledContainer>
        <StyledGrid container>
          <Grid item s={12} sm={10} md={8} lg={6}>
            <Paper style={{padding: "2rem", backgroundColor: theme.colors.background}}>
              <LogoComponent variant="small" />
              <Grid
                container
                direction="column"
                justifyContent="center"
                spacing={3}
                className="playerFields"
              >
                <ColouredGrid item themes={theme}>
                  <Typography variant="h5">Room: {roomId}</Typography>
                </ColouredGrid>
                <Grid item>
                  <Grid container justifyContent="space-between">
                    <ColouredGrid item themes={theme}>
                      <Typography variant="h4">Players:</Typography>
                    </ColouredGrid>
                    <ColouredGrid item themes={theme}>
                      <Typography variant="h4">
                        {playerList.length} / 8
                      </Typography>
                    </ColouredGrid>
                  </Grid>
                  <Divider />
                </Grid>
                {playerList.map((player, index) => {
                  return (
                    <Grid item key={index}>
                      <PlayerNameComponent
                        name={player.playerName}
                        isReady={player.isReady}
                      />
                    </Grid>
                  );
                })}
                <Grid item>
                  <Divider />
                </Grid>
                <Grid item>
                  <Button
                    fullWidth={true}
                    variant="contained"
                    onClick={readyHandler}
                    style={{backgroundColor: theme.colors.lightBox, color: theme.colors.text}}
                  >
                    {userReady ? "NOT READY" : "READY"}
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={() => {
                      navigator.clipboard.writeText(roomId);
                    }}
                    fullWidth={true}
                    variant="contained"
                    style={{backgroundColor: theme.colors.tertiary, color: theme.colors.text}}
                  >
                    COPY ROOM CODE
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </StyledGrid>
      </StyledContainer>
    </React.Fragment>
  );
}
const StyledContainer = styled.div`
  padding: 2rem;
  margin-top: 10vh;
`;
const StyledGrid = styled(Grid)`
  justify-content: center;
`;
const ColouredGrid = styled(Grid)`
  color: ${(props) => props.themes.colors.text};
`
export default LobbyComponent;
