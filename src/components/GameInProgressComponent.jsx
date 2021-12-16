import React, { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { WebSocketContext } from "../WebSocket";
import styled from "styled-components";
import { Button, Grid, Paper, Typography, Divider } from "@mui/material";
import LogoComponent from "./LogoComponent";
import BidDisplayComponent from "./InGameComponents/BidDisplayComponent";
import DiceDisplayComponent from "./InGameComponents/DiceDisplayComponent";
import DiceSelector from "./InGameComponents/DiceSelector";

function GameInProgressComponent() {
  const ws = useContext(WebSocketContext);
  const gameUuid = useSelector((state) => state.gameData.gameId);
  const userUuid = useSelector((state) => state.gameData.userId);
  const userName = useSelector((state) => state.gameData.name);
  let currentBid = useSelector((state) => state.gameStatus.currentBid);
  let playersInfo = useSelector((state) => state.gameStatus.playersInfo);
  let bidSelector = useSelector((state) => state.gameStatus.bidSelector);

  let [selfInfo, setSelfInfo] = useState(
    playersInfo.filter((object) => {
      return object.playerName === userName;
    })
  );
  let [activePlayer, setActivePlayer] = useState(
    playersInfo.filter((object) => {
      return object.isActive === true;
    })
  );

  useEffect(() => {
    setSelfInfo(
      playersInfo.filter((object) => {
        return object.playerName === userName;
      })
    );

    setActivePlayer(
      playersInfo.filter((object) => {
        return object.isActive === true;
      })
    );
  }, [playersInfo, userName]);

  useEffect(() => {
    if (activePlayer[0].playerName === userName) {
      activePlayer[0].playerName = "You";
    }
  }, [activePlayer, userName]);

  const handleBid = () => {
    ws.sendBidRequest(
      userUuid,
      gameUuid,
      bidSelector.diceValue,
      bidSelector.diceNumber
    );
  };

  return (
    <React.Fragment>
      <StyledContainer>
        <Grid container justifyContent="center">
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
                  <DiceDisplayComponent diceValues={selfInfo[0].diceValue} />
                </Grid>
                <Grid item>
                  <Divider />
                </Grid>
                {currentBid ? (
                  <React.Fragment>
                    <Grid item>
                      Current bid:
                      <BidDisplayComponent
                        name={currentBid.doneBy}
                        value={currentBid.diceValue}
                        number={currentBid.diceNumber}
                      />
                    </Grid>
                    <Grid item>
                      <Divider />
                    </Grid>
                  </React.Fragment>
                ) : (
                  ""
                )}
                <Grid item>
                  Now Playing:
                  <BidDisplayComponent
                    name={activePlayer[0].playerName}
                    isPlaying
                  />
                </Grid>
                <Grid item>
                  <Divider />
                </Grid>
                <Grid item>
                  <StyledPaper elevation={3}>
                    <Grid container justifyContent="center">
                      <Grid container item justifyContent="space-around">
                        <StyledButtonGrid item>
                          <Button variant="outlined" onClick={handleBid}>
                            Bid
                          </Button>
                        </StyledButtonGrid>
                        <Grid item>
                          <DiceSelector />
                        </Grid>
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
        </Grid>
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
const StyledButtonGrid = styled(Grid)`
  padding-top: 1.6rem;
`;
export default GameInProgressComponent;
