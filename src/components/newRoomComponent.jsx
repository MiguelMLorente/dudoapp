import React, { useContext, useState } from "react";
import styled from "styled-components";
import { TextField, Grid, Button, Paper } from "@mui/material";
import LogoComponent from "./LogoComponent";
import { changeToJoinRoom } from "../actions/appStatusActions";
import { useDispatch, useSelector } from "react-redux";
import { WebSocketContext } from "../WebSocket";

function NewRoomComponent() {
  const ws = useContext(WebSocketContext);
  const userUuid = useSelector((state) => state.gameData.userId);
  const dispatch = useDispatch();
  let [userName, setUserName] = useState(
    useSelector((state) => state.gameData.name)
  );
  let [password, setPassword] = useState("");

  const handleBack = () => {
    dispatch(changeToJoinRoom());
  };

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <React.Fragment>
      <StyledContainer>
        <StyledGrid container>
          <Grid item s={12} sm={10} md={8} lg={6}>
            <StyledPaper>
              <LogoComponent />
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
                    value={userName}
                    onChange={userNameHandler}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    type="password"
                    id="passwordInput"
                    label="Password "
                    value={password}
                    onChange={passwordHandler}
                    helperText="Optional"
                  />
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    fullWidth={true}
                    color="secondary"
                  >
                    Create Room
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    fullWidth={true}
                    onClick={handleBack}
                  >
                    BACK
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
const StyledGrid = styled(Grid)`
  justify-content: center;
`;

export default NewRoomComponent;
