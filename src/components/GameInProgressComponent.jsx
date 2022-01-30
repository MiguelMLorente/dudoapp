import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Grid, Typography, Divider } from "@mui/material";
import LogoComponent from "./LogoComponent";
import BidDisplayComponent from "./InGameComponents/BidDisplayComponent";
import DiceDisplayComponent from "./InGameComponents/DiceDisplayComponent";
import ButtonField from "./InGameComponents/ButtonField";
import StyledGrid from "./StyledComponents/StyledGrid"
import StyledPaper from "./StyledComponents/StyledPaper";

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
            <StyledPaper elevate={1} color={"background"} padding={"big"} radius={"big"}>
              <LogoComponent variant="small" />
              <Grid
                container
                direction="column"
                justifyContent="center"
                spacing={3}
                className="dashBoard"
              >
                <StyledGrid>
                  {selfInfo.isAlive ? (
                    <React.Fragment>
                      <Typography>Your Dice </Typography>
                      <DiceDisplayComponent diceValues={selfInfo.diceValue} />
                    </React.Fragment>
                  ) : (
                    <Typography variant="h4">You lost</Typography>
                  )}
                </StyledGrid>
                <Grid item>
                  <Divider />
                </Grid>
                {currentBid ? (
                  <React.Fragment>
                    <StyledGrid>
                      Current bid:
                      <BidDisplayComponent
                        name={currentBid.doneBy}
                        value={currentBid.diceValue}
                        number={currentBid.diceNumber}
                      />
                    </StyledGrid>
                    <Grid item>
                      <Divider />
                    </Grid>
                  </React.Fragment>
                ) : (
                  ""
                )}
                <StyledGrid>
                  Now Playing:
                  <StyledPaper elevate={2} color={"paper2"} radius={"big"}>
                    <StyledGrid container justifyContent="space-around">
                      <Grid item>{activePlayer.playerName}</Grid>
                    </StyledGrid>
                  </StyledPaper>
                </StyledGrid>
                {activePlayer.playerName === "You" ? (
                  <React.Fragment>
                    <Grid item>
                      <Divider />
                    </Grid>
                    <Grid item>
                      <ButtonField />
                    </Grid>
                  </React.Fragment>
                ) : (
                  ""
                )}
                <Grid item>
                  <Divider />
                </Grid>
                <Grid item container direction="column" spacing={4}>
                  {playersInfo.map((player) => {
                    if (
                      player.isAlive &&
                      player.diceValue &&
                      !(player.playerName === userName)
                    ) {
                      return (
                        <Grid item key={player.playerName} s={12}>
                          <DiceDisplayComponent
                            playerName={player.playerName}
                            diceValues={player.diceValue}
                            variant="small"
                          />
                        </Grid>
                      );
                    } else return null;
                  })}
                </Grid>
              </Grid>
            </StyledPaper>
          </Grid>
        </Grid>
      </StyledContainer>
    </React.Fragment>
  );
}
const StyledContainer = styled.div`
  padding: 2rem;
  margin-top: 10vh;
`;
export default GameInProgressComponent;
