import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { TextField, Grid, Button, Paper } from "@mui/material";

function LandingComponent() {
  return (
    <React.Fragment>
      <StyledLanding>
        <StyledLogo className="logo">
          <FontAwesomeIcon icon={faDice} /> DUDOAPP
        </StyledLogo>
        <StyledPaper elevation={2}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            spacing={5}
            className="textFields"
          >
            <Grid item>
              <TextField
                id="nameInput"
                label="Username"
                defaultValue="FancyPlatypus"
              />
            </Grid>
            <Grid item>
              <TextField
                id="roomInput"
                label="RoomID: "
                defaultValue="123456"
              />
            </Grid>
            <Grid item>
              <Button variant="contained">Join Room</Button>
            </Grid>
            <Grid item>
              <Button variant="contained">Create Room</Button>
            </Grid>
          </Grid>
        </StyledPaper>
      </StyledLanding>
    </React.Fragment>
  );
}
const StyledPaper = styled(Paper)`
  padding: 2rem;
`;
const StyledLanding = styled.div`
  padding: 2rem;
  margin-top: 20vh;
`;
const StyledLogo = styled.div`
  font-family: "Amatic SC", cursive;
  font-size: 5rem;
  padding: 2rem 5rem;
`;

export default LandingComponent;
