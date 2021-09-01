import { createTheme } from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: deepOrange,
    secondary: {
      main: "#039be5",
    },
  },
  typography: {
    fontFamily: ["Roboto", "Noto Sans JP", "sans-serif"].join(","),
  },
});

export default theme;
