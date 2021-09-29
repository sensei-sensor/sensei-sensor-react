import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    common: { black: "#303030", white: "#fff" },
    background: { paper: "#fff", default: "#fcd6ae" },
    primary: {
      light: "rgba(255, 189, 99, 1)",
      main: "rgba(255, 140, 51, 1)",
      dark: "rgba(198, 93, 0, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(138, 247, 255, 1)",
      main: "rgba(76, 196, 255, 1)",
      dark: "rgba(0, 148, 204, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(48, 48, 48, 1)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
  typography: {
    fontFamily: ["Roboto", "Noto Sans JP", "sans-serif"].join(","),
  },
});

export default theme;