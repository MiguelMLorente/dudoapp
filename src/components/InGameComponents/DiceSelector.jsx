import React from "react";
import { Grid, Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { valueToDiceIcon } from "./utils";
import { styled } from "@mui/system";

function DiceSelector() {
  return (
    <React.Fragment>
      <StyledPaper elevation={1}>
        <Grid container wrap="nowrap" spacing={3}>
          <Grid container direction="column" item>
            <Grid item>
              <FontAwesomeIcon icon={faChevronUp} />
            </Grid>
            <Grid item>{valueToDiceIcon(5)}</Grid>
            <Grid item>
              <FontAwesomeIcon icon={faChevronDown} />
            </Grid>
          </Grid>
          <Grid container direction="column" item>
            <Grid item>
              <FontAwesomeIcon icon={faChevronUp} />
            </Grid>
            <Grid item>5</Grid>
            <Grid item>
              <FontAwesomeIcon icon={faChevronDown} />
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
