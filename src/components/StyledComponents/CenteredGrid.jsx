import { Grid } from "@mui/material";
import styled from "styled-components";

const CenteredGrid = ({ children }) => {
  return (
    <TextCenteredGrid container>
      {children}  
    </TextCenteredGrid>
  );
}
const TextCenteredGrid = styled(Grid)`
  justify-content: center;
`;
export default CenteredGrid;