import React from "react";
import {
  AppBar,
  Box,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MaterialTheme from "../styles/MaterialTheme";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  "@global": {
    body: {
      backgroundColor: MaterialTheme.palette.background.default,
    },
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontWeight: 700,
    textDecoration: "none",
  },
}));

export default function HeaderBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color={"default"}>
        <Toolbar>
          <Typography
            variant="h5"
            color={"primary"}
            className={classes.title}
            component={Link}
            to={"/"}
          >
            <Box fontWeight={700}>College Sensor</Box>
          </Typography>
          <Button color="primary" component={Link} to={"/UserPage"}>
            <Box fontWeight={700}>先生向けログイン</Box>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
