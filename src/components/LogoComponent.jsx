import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";

function LogoComponent(props) {
  let variantClassName = "";
  switch (props.variant) {
    default:
      variantClassName = "big-logo";
      break;
    case "small":
      variantClassName = "small-logo";
      break;
  }

  return (
    <StyledLogo>
      <div className={variantClassName}>
        <FontAwesomeIcon icon={faDice} />
        DUDOAPP
      </div>
    </StyledLogo>
  );
}

const StyledLogo = styled.div`
  font-family: "Amatic SC";
  .big-logo {
    font-size: 5rem;
    padding: 2rem 5rem;
  }
  .small-logo {
    font-size: 3rem;
    padding: 2rem 2rem;
  }
`;

export default LogoComponent;
