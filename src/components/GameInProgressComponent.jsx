import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Grid, Paper, Typography, Divider } from "@mui/material";
import LogoComponent from "./LogoComponent";
import BidDisplayComponent from "./InGameComponents/BidDisplayComponent";
import DiceDisplayComponent from "./InGameComponents/DiceDisplayComponent";
import ButtonField from "./InGameComponents/ButtonField";

function GameInProgressComponent() {
  const userName = useSelector((state) => state.gameData.name);
  let currentBid = useSelector((state) => state.gameStatus.currentBid);
  let playersInfo = useSelector((state) => state.gameStatus.playersInfo);

  let [selfInfo, setSelfInfo] = useState(
    playersInfo
      .filter((object) => {
        return object.playerName === userName;
      })
      .shift()
  );
  let [activePlayer, setActivePlayer] = useState(
    playersInfo
      .filter((object) => {
        return object.isActive === true;
      })
      .shift()
  );

  useEffect(() => {
    setSelfInfo(
      playersInfo
        .filter((object) => {
          return object.playerName === userName;
        })
        .shift()
    );

    setActivePlayer(
      playersInfo
        .filter((object) => {
          return object.isActive === true;
        })
        .shift()
    );
  }, [playersInfo, userName]);

  useEffect(() => {
    const handleActivePlayerUpdateName = (newName) => {
      setActivePlayer({ ...activePlayer, playerName: newName });
    };

    if (activePlayer.playerName === userName) {
      handleActivePlayerUpdateName("You");
    }
  }, [activePlayer, userName]);

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
                  <DiceDisplayComponent diceValues={selfInfo.diceValue} />
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
                    name={activePlayer.playerName}
                    isPlaying
                  />
                </Grid>
                <Grid item>
                  <Divider />
                </Grid>
                <Grid item>
                  <ButtonField />
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
export default GameInProgressComponent;
