import React from "react";
import { Grid } from "@mui/material";
import { valueToDiceIcon } from "./utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import StyledGrid from "../StyledComponents/StyledGrid";
import StyledPaper from "../StyledComponents/StyledPaper";

function BidDisplayComponent(props) {
  return (
    <StyledPaper elevate={2} color={"paper2"} radius={"big"}>
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
export default BidDisplayComponent;
