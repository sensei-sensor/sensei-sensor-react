import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const theme = createTheme({
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
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Sensei Sensor
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Box m={2}>
        <Button variant={"contained"} color={"primary"}>
          あいうえお
        </Button>
      </Box>
    </ThemeProvider>
  );
}
