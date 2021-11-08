import React from "react";
import styled from "styled-components";
import { Hidden, Grid, Paper } from "@mui/material";

function App() {
  return (
    <React.Fragment key="App">
      <StyledGrid container spacing={3}>
        <Hidden only="xs">
          <StyledGrid item sm={1} md={3}>
            <Paper>GUTTER</Paper>
          </StyledGrid>
        </Hidden>
        <StyledGrid item xs={12} sm={10} md={6}>
          <Paper className="Content"> Here goes the content</Paper>
        </StyledGrid>
        <Hidden only="xs">
          <StyledGrid item sm={1} md={3}>
            <Paper>GUTTER</Paper>
          </StyledGrid>
        </Hidden>
      </StyledGrid>
    </React.Fragment>
  );
}

const StyledGrid = styled(Grid)`
  text-align: center;
`;
export default App;
