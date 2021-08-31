import React from "react";
import { createTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  makeStyles,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { blue, deepOrange } from "@material-ui/core/colors";
import MaterialCard from "../components/MaterialCard";

const theme = createTheme({
  palette: {
    primary: deepOrange,
    secondary: blue,
  },
  typography: {
    fontFamily: ["Roboto", "Noto Sans JP", "sans-serif"].join(","),
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MaterialViewPage() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          />
          <Typography variant="h6" className={classes.title}>
            Sensei Sensor
          </Typography>
          <Button color="inherit">ログイン</Button>
        </Toolbar>
      </AppBar>
      <Box m={2}>
        <Typography variant={"h4"}>情報コース</Typography>
        <MaterialCard />
      </Box>
    </ThemeProvider>
  );
}
