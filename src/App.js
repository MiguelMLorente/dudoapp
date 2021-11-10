import React from "react";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import { Grid } from "@mui/material";
// import RoomJoinComponent from "./components/roomJoinComponent";
import NewRoomComponent from "./components/newRoomComponent";

function App() {
  return (
    <React.Fragment key="App">
      <GlobalStyle />
      <StyledGrid container>
        <StyledGrid item xs={12} sm={10} md={8} lg={6}>
          <NewRoomComponent />
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
