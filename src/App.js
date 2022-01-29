import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import RoomJoinComponent from "./components/RoomJoinComponent";
import NewRoomComponent from "./components/newRoomComponent";
import LobbyComponent from "./components/LobbyComponent";
import GameInProgressComponent from "./components/GameInProgressComponent";
import HelpComponent from "./components/HelpComponent";
import EndOfRoundComponent from "./components/InGameComponents/EndOfRoundComponent";

function App() {
  let currentComponent = useSelector((state) => state.appStatus.component);
  let theme = useSelector((state) => state.theme);

  const componentHandler = (selectedComponent) => {
    switch (selectedComponent) {
      default:
        return <RoomJoinComponent />;
      case "Lobby":
        return <LobbyComponent />;
      case "NewRoom":
        return <NewRoomComponent />;
      case "GameInProgress":
        return <GameInProgressComponent />;
      case "EndOfRound":
        return <EndOfRoundComponent />;
    }
  };

  return (
    <React.Fragment key="App">
      <StyledGrid container themes={theme}>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          {componentHandler(currentComponent)}
          <HelpComponent />
        </Grid>
      </StyledGrid>
    </React.Fragment>
  );
}

const StyledGrid = styled(Grid)`
  justify-content: center;
  text-align: center;
  background-color: ${(props) => props.themes.colors.appBackground};
  height: ${(props) => props.themes.sizes.windowHeight + "px"};
`;
export default App;
