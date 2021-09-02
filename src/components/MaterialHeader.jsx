import React from "react";
import {
  AppBar,
  Box,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontWeight: 700,
  },
}));

export default function MaterialHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color={"common.white"}>
        <Toolbar>
          <Typography variant="h5" color={"primary"} className={classes.title}>
            <Box fontWeight={700}>College Sensor</Box>
          </Typography>
          <Button color="primary">
            <Box fontWeight={700}>ログイン</Box>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
