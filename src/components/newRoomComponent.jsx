import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { TextField, Grid, Button, Paper } from "@mui/material";

function NewRoomComponent() {
  return (
    <React.Fragment>
      <StyledContainer>
        <StyledGrid container>
          <Grid item s={12} sm={10} md={8} lg={6}>
            <StyledPaper>
              <StyledLogo className="logo">
                <FontAwesomeIcon icon={faDice} />
                DUDOAPP
              </StyledLogo>
              <Grid
                container
                direction="column"
                justifyContent="center"
                spacing={5}
                className="textFields"
              >
                <Grid item>
                  <TextField
                    id="roomCode"
                    label="RoomID"
                    defaultValue="A34BERS"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="passwordInput"
                    label="Password: "
                    defaultValue="*******"
                  />
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    fullWidth={true}
                    color="secondary"
                  >
                    Copy Code
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" fullWidth={true}>
                    Create Room
                  </Button>
                </Grid>
              </Grid>
            </StyledPaper>
          </Grid>
        </StyledGrid>
      </StyledContainer>
    </React.Fragment>
  );
}
const StyledPaper = styled(Paper)`
  padding: 2rem;
`;
const StyledContainer = styled.div`
  padding: 2rem;
  margin-top: 10vh;
`;
const StyledLogo = styled.div`
  font-family: "Amatic SC", cursive;
  font-size: 5rem;
  padding: 2rem 5rem;
`;
const StyledGrid = styled(Grid)`
  justify-content: center;
`;

export default NewRoomComponent;
