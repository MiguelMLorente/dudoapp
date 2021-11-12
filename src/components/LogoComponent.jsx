import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";

function LogoComponent(props) {
  switch (props.variant) {
    case "small":
      return (
        <StyledSmallLogo className="logo">
          <FontAwesomeIcon icon={faDice} />
          DUDOAPP
        </StyledSmallLogo>
      );

    default:
      return (
        <StyledLogo className="logo">
          <FontAwesomeIcon icon={faDice} />
          DUDOAPP
        </StyledLogo>
      );
  }
}

const StyledLogo = styled.div`
  font-family: "Amatic SC", cursive;
  font-size: 5rem;
  padding: 2rem 5rem;
`;
const StyledSmallLogo = styled.div`
  font-family: "Amatic SC", cursive;
  font-size: 3rem;
  padding: 2rem 2rem;
`;
export default LogoComponent;
