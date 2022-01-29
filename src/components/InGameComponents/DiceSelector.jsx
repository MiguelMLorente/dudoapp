import React, { useEffect } from "react";
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
  let currentBid = useSelector((state) => state.gameStatus.currentBid);
  let theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentBid) {
      let payload = {
        diceValue: currentBid.diceValue,
        diceNumber: currentBid.diceNumber,
      };

      dispatch(updateBidSelector(payload));
    }
  }, [currentBid, dispatch]);

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
      <StyledPaper elevation={0} style={{backgroundColor: theme.colors.paper2, color: theme.colors.text}}>
        <Grid container wrap="nowrap" spacing={3}>
          <Grid container direction="column" item>
            <Grid item>
              <StyledIconFAChevron
                icon={faChevronUp}
                onClick={() => {
                  handleDiceValueChange(1);
                }}
              />
            </Grid>
            <Grid item>
              {valueToDiceIcon(bidSelector ? bidSelector.diceValue : 1)}
            </Grid>
            <Grid item>
              <StyledIconFAChevron
                icon={faChevronDown}
                onClick={() => {
                  handleDiceValueChange(-1);
                }}
              />
            </Grid>
          </Grid>
          <Grid item>
            <StyledIconFATimes icon={faTimes} />
          </Grid>
          <Grid container direction="column" item>
            <Grid item>
              <StyledIconFAChevron
                icon={faChevronUp}
                onClick={() => {
                  handleDiceNumberChange(1);
                }}
              />
            </Grid>
            <Grid item>{bidSelector ? bidSelector.diceNumber : 1}</Grid>
            <Grid item>
              <StyledIconFAChevron
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

const StyledIconFATimes = styled(FontAwesomeIcon)`
  margin-top: 2.5rem;
`;

const StyledIconFAChevron = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

export default DiceSelector;
