import { Grid } from "@mui/material";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledGrid = ({ children }) => {
  let theme = useSelector((state) => state.theme);
  return (
    <TextColouredGrid item themes={theme}>
      {children}
    </TextColouredGrid>
  );
}
const TextColouredGrid = styled(Grid)`
  color: ${(props) => props.themes.colors["text"]};
`
export default StyledGrid;