import React from "react";
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { valueToDiceIcon } from "./utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import StyledGrid from "../StyledComponents/StyledGrid";

function BidDisplayComponent(props) {
  
  let theme = useSelector((state) => state.theme);

  return (
    <StyledPaper elevation={2} style={{ backgroundColor: theme.colors.paper2 }}>
      <StyledGrid>
        <Grid container justifyContent="space-around" direction="row">
          <Grid item>
            {props.name}
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>{valueToDiceIcon(props.value)}</Grid>
              <Grid item>
                <FontAwesomeIcon icon={faTimes} />
              </Grid>
              <Grid item>{props.number}</Grid>
            </Grid>  
          </Grid>
        </Grid>
      </StyledGrid>
    </StyledPaper>
  );
}

const StyledPaper = styled(Paper)`
  font-size: 1.5rem;
  border-radius: 6px;
`;
export default BidDisplayComponent;
