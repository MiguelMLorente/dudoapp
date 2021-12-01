import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

function PlayerNameComponent(props) {
  let isAdmin = useSelector((state) => state.gameData.isAdmin);

  const kickDisplay = () => {
    return (
      <Grid item>
        <StyledFontAwesomeIcon icon={faMinusSquare} />
      </Grid>
    );
  };
  return (
    <Paper elevation={2} className={props.isReady ? "isReady" : ""}>
      <Grid container justifyContent="space-between">
        <Grid item>
          <StyledTypography variant="h4">{props.name}</StyledTypography>
        </Grid>
        {isAdmin ? kickDisplay() : ""}
      </Grid>
    </Paper>
  );
}
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 0.25rem;
  font-size: 2rem;
`;
const StyledTypography = styled(Typography)`
  padding-left: 1rem;
`;

export default PlayerNameComponent;
