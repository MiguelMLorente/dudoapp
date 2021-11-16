import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function valueToDiceIcon(value) {
  const diceIconMap = {
    1: faDiceOne,
    2: faDiceTwo,
    3: faDiceThree,
    4: faDiceFour,
    5: faDiceFive,
    6: faDiceSix,
  };
  if (value in diceIconMap) {
    return <FontAwesomeIcon icon={diceIconMap[value]} />;
  } else {
    return;
  }
}
