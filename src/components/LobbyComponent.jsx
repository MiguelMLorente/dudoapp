import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Button, Grid, Typography, Divider } from "@mui/material";
import LogoComponent from "./LogoComponent";
import PlayerNameComponent from "./PlayerNameComponent";
import { useSelector } from "react-redux";
import { WebSocketContext } from "../WebSocket";
import CenteredGrid from "./StyledComponents/CenteredGrid";
import StyledGrid from "./StyledComponents/StyledGrid";
import StyledPaper from "./StyledComponents/StyledPaper";

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
        <CenteredGrid container>
          <Grid item s={12} sm={10} md={8} lg={6}>
            <StyledPaper color={"background"} padding={"big"}>
              <LogoComponent variant="small" />
              <Grid
                container
                direction="column"
                justifyContent="center"
                spacing={3}
                className="playerFields"
              >
                <StyledGrid>
                  <Typography variant="h5">Room: {roomId}</Typography>
                </StyledGrid>
                <Grid item>
                  <Grid container justifyContent="space-between">
                    <StyledGrid>
                      <Typography variant="h4">Players:</Typography>
                    </StyledGrid>
                    <StyledGrid>
                      <Typography variant="h4">
                        {playerList.length} / 8
                      </Typography>
                    </StyledGrid>
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
export default LobbyComponent;
