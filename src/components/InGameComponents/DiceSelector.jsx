import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { valueToDiceIcon } from "./utils";
import { styled } from "@mui/system";
import { useDispatch } from "react-redux";
import { updateBidSelector } from "../../actions/gameStatusActions";

function DiceSelector() {
  let bidSelector = useSelector((state) => state.gameStatus.bidSelector);
  const dispatch = useDispatch();

  const handleDiceValueChange = (signIndicator) => {
    let targetValue = (bidSelector.diceValue + signIndicator) % 6;
    if (targetValue === 0) {
      targetValue = 6;
    }
    const payload = { ...bidSelector, diceValue: targetValue };
    dispatch(updateBidSelector(payload));
  };

  const handleDiceNumberChange = (signIndicator) => {
    let targetValue = bidSelector.diceNumber + signIndicator;

    if (targetValue === 0) {
      targetValue = 1;
    }
    const payload = { ...bidSelector, diceNumber: targetValue };
    dispatch(updateBidSelector(payload));
  };

  return (
    <React.Fragment>
      <StyledPaper elevation={1}>
        <Grid container wrap="nowrap" spacing={3}>
          <Grid container direction="column" item>
            <Grid item>
              <FontAwesomeIcon
                icon={faChevronUp}
                onClick={() => {
                  handleDiceValueChange(1);
                }}
              />
            </Grid>
            <Grid item>{valueToDiceIcon(bidSelector.diceValue)}</Grid>
            <Grid item>
              <FontAwesomeIcon
                icon={faChevronDown}
                onClick={() => {
                  handleDiceValueChange(-1);
                }}
              />
            </Grid>
          </Grid>
          <Grid item>
            <FontAwesomeIcon icon={faTimes} />
          </Grid>
          <Grid container direction="column" item>
            <Grid item>
              <FontAwesomeIcon
                icon={faChevronUp}
                onClick={() => {
                  handleDiceNumberChange(1);
                }}
              />
            </Grid>
            <Grid item>{bidSelector.diceNumber}</Grid>
            <Grid item>
              <FontAwesomeIcon
                icon={faChevronDown}
                onClick={() => {
                  handleDiceNumberChange(-1);
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </StyledPaper>
    </React.Fragment>
  );
}

const StyledPaper = styled(Paper)`
  font-size: 1.5rem;
  padding: 0.5rem 2.5rem 0.5rem 2.5rem;
`;

export default DiceSelector;
