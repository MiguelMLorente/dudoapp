import React from "react";
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { valueToDiceIcon } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function BidDisplayComponent(props) {
  function timerOrDiceHandler() {
    if (props.isPlaying) {
      return <div></div>;
    } else {
      return (
        <Grid container spacing={2}>
          <Grid item>{valueToDiceIcon(props.value)}</Grid>
          <Grid item>
            <FontAwesomeIcon icon={faTimes} />
          </Grid>
          <Grid item>{props.number}</Grid>
        </Grid>
      );
    }
  }
  return (
    <StyledPaper elevation={2} className={props.isReady ? "isReady" : ""}>
      <Grid container justifyContent="space-around" direction="row">
        <Grid item>{props.name}</Grid>
        <Grid item>{timerOrDiceHandler()}</Grid>
      </Grid>
    </StyledPaper>
  );
}

const StyledPaper = styled(Paper)`
  font-size: 1.5rem;
`;
export default BidDisplayComponent;
