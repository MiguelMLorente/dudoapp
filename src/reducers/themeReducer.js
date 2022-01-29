const colorTheme = {
  primary: "#2A9D8F",
  secondary: "#E9C46A",
  tertiary: "#F4A261",
  lightBox: "#77DFD2",
  background: "#e4e4e4",
  appBackground: "#264653",
  textBackground: "#ffffff",
  paper: "#c4c4c4",
  paper2: "#dddddd",
  text: "#000000",
  name: "#2A9D8F",
  buttonField: "#E9C46A",
};

const darkTheme = {
  primary: "#0c1821",
  secondary: "#1b2a41",
  tertiary: "#324a5f",
  lightBox: "#2d5562",
  background: "#2B2B2B",
  appBackground: "#555555",
  textBackground: "#336270",
  paper: "#333333",
  paper2: "#444444",
  text: "#ffffff",
  name: "#0c1821",
  buttonField: "#1b2a41",
};

const lightTheme = {
  primary: "#1976d2",
  secondary: "#9c27b0",
  tertiary: "#9c27b0",
  lightBox: "#1976d2",
  background: "#f8f9fa",
  appBackground: "#adb5bd",
  textBackground: "#ffffff",
  paper: "#ffffff",
  paper2: "#ffffff",
  text: "#000000",
  name: "#f0f8ff",
  buttonField: "#ffffff",
};

let size = { windowHeight: window.innerHeight };

const initState = { colors: darkTheme, sizes: size };

const themeReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return { ...state };
    case "color":
      return { ...state, colors: colorTheme };
    case "dark":
      return { ...state, colors: darkTheme };
  }
};

export default themeReducer;
