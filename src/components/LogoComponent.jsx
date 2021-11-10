import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";

function LogoComponent() {
  return (
    <StyledLogo className="logo">
      <FontAwesomeIcon icon={faDice} />
      DUDOAPP
    </StyledLogo>
  );
}

const StyledLogo = styled.div`
  font-family: "Amatic SC", cursive;
  font-size: 5rem;
  padding: 2rem 5rem;
`;
export default LogoComponent;
