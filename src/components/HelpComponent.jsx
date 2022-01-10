import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

function HelpComponent() {
  let [dialog, setDialog] = useState(false);

  const handleDialog = () => {
    setDialog((dialog) => !dialog);
  };

  return (
    <React.Fragment>
      <FontAwesomeIcon icon={faQuestion} onClick={handleDialog} />
      <Dialog open={dialog} onClose={handleDialog}>
        <DialogTitle>Rules of dudo: </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <ul>
              <li>On game start each player is given 5 dice.</li>
              <li>If a player loses all their dice, they lose.</li>
              <li>The last remaining player wins the game.</li>
            </ul>
          </Typography>
          <Typography gutterBottom>
            Each round consists of the following phases:
            <ul>
              <li>Players roll their dice</li>
              <li>
                The first player bets on how many dice of a given value there
                are{" "}
              </li>
              <li>
                The next player places a higher bit or calls/spots the bid
              </li>
            </ul>
          </Typography>
          <Typography gutterBottom>
            If the player decides to challenge the standing bet he can:
            <ul>
              <li>
                Call: if they think the bid is too high, and that there are not
                that many dice
              </li>
              <li>
                Spot: if they think that there are exactly as many dice as the
                bid
              </li>
            </ul>
            If they are right, the player that placed the bet loose a dice,
            otherwise they do.
          </Typography>
          <Typography gutterBottom>
            There are also two special rounds for when a player is left with
            only one dice for the first time:
            <ul>
              <li>
                Blind round: where nobody can see their dice except the player
                with only a dice
              </li>
              <li>
                Open round: where everyody gets to see the others dice, but not
                their own
              </li>
            </ul>
          </Typography>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default HelpComponent;
