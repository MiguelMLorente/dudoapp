import React from "react";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import { Grid } from "@mui/material";
import RoomJoinComponent from "./components/RoomJoinComponent";
// import NewRoomComponent from "./components/newRoomComponent";
// import LobbyComponent from "./components/LobbyComponent";
// import GameInProgressComponent from "./components/GameInProgressComponent";

function App() {
  return (
    <React.Fragment key="App">
      <GlobalStyle />
      <StyledGrid container>
        <StyledGrid item xs={12} sm={10} md={8} lg={6}>
          <RoomJoinComponent />
        </StyledGrid>
      </StyledGrid>
    </React.Fragment>
  );
}

const StyledGrid = styled(Grid)`
  justify-content: center;
  text-align: center;
`;
export default App;
