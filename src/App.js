import React from "react";
import styled from "styled-components";
import { Grid, Paper } from "@mui/material";
import LandingComponent from "./components/LandingComponent";

function App() {
  return (
    <React.Fragment key="App">
      <StyledGrid container spacing={3}>
        <StyledGrid item xs={12} sm={10} md={8} lg={6}>
          <Paper className="Content" elevation={1}>
            <LandingComponent />
          </Paper>
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
