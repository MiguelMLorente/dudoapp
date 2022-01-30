import { Paper } from "@mui/material";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledPaper = ({ children, color, padding, fontSize, elevate, radius }) => {
  let theme = useSelector((state) => state.theme);
  console.log(elevate)
  return (
    <ColouredPaper 
        elevation={elevate} 
        themes={theme} 
        color={color} 
        padding={padding} 
        radius={radius} >
      {children}
    </ColouredPaper>
  );
}
const ColouredPaper = styled(Paper)`
  background-color: ${(props) => props.color ? props.themes.colors[props.color] + " !important": ""};
  padding: ${(props) => props.padding ? props.themes.sizes.paddings[props.padding] : ""};
  font-size ${(props) => props.themes.sizes.fontSize};
  border-radius ${(props) => props.radius ? props.themes.sizes.borderRads[props.radius] : ""};
  color ${(props) => props.themes ? props.themes.colors["text"] : ""};
`
export default StyledPaper;