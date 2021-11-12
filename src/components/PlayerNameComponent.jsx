import React from "react";
import { Paper, Typography } from "@mui/material";

function PlayerNameComponent(props) {
  return (
    <Paper elevation={2} className={props.isReady ? "isReady" : ""}>
      <Typography variant="h4">{props.name}</Typography>
    </Paper>
  );
}
export default PlayerNameComponent;
