import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function LogoComponent(props) {
  let variantClassName = "";
  let theme = useSelector((state) => state.theme);
  switch (props.variant) {
    default:
      variantClassName = "big-logo";
      break;
    case "small":
      variantClassName = "small-logo";
      break;
  }

  return (
    <StyledLogo themes={theme}>
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
  color: ${(props) => props.themes.colors.text};
`;

export default LogoComponent;
