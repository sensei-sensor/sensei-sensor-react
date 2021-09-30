import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import MaterialTheme from "../../styles/Theme";

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
