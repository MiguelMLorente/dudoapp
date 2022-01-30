import React, { useContext, useState } from "react";
import styled from "styled-components";
import { TextField, Grid, Button } from "@mui/material";
import LogoComponent from "./LogoComponent";
import { changeToJoinRoom } from "../actions/appStatusActions";
import { useDispatch, useSelector } from "react-redux";
import { WebSocketContext } from "../WebSocket";
import {
  updateAdminPrivilege,
  updateUserName,
} from "../actions/gameDataActions";
import CenteredGrid from "./StyledComponents/CenteredGrid";
import StyledPaper from "./StyledComponents/StyledPaper";

function NewRoomComponent() {
  const ws = useContext(WebSocketContext);
  const userUuid = useSelector((state) => state.gameData.userId);
  const dispatch = useDispatch();
  let [userName, setUserName] = useState(
    useSelector((state) => state.gameData.name)
  );
  let [password, setPassword] = useState("");
  let theme = useSelector((state) => state.theme);

  const handleBack = () => {
    dispatch(updateUserName(userName));
    dispatch(changeToJoinRoom());
  };
  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = () => {
    dispatch(updateAdminPrivilege(true));
    ws.sendCreateGame(userUuid, userName, password);
  };

  return (
    <React.Fragment>
      <StyledContainer>
        <CenteredGrid container>
          <Grid item s={12} sm={10} md={8} lg={6}>
            <StyledPaper color={"background"} padding={"big"}>
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
                    sx={{ input: { color: theme.colors.text } }}
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
                    sx={{ input: { color: theme.colors.text } }}
                  />
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    fullWidth={true}
                    color="secondary"
                    onClick={submitHandler}
                    style={{backgroundColor: theme.colors.primary, color: theme.colors.text}}
                  >
                    Create Room
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    fullWidth={true}
                    onClick={handleBack}
                    style={{backgroundColor: theme.colors.secondary, color: theme.colors.text}}
                  >
                    BACK
                  </Button>
                </Grid>
              </Grid>
            </StyledPaper>
          </Grid>
        </CenteredGrid>
      </StyledContainer>
    </React.Fragment>
  );
}
const StyledContainer = styled.div`
  padding: 2rem;
  margin-top: 10vh;
`;

export default NewRoomComponent;
