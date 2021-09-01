import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import MaterialCard from "../components/MaterialCard";
import MaterialHeader from "../components/MaterialHeader";

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
    <div>
      <MaterialHeader classes={classes} />
      <Box m={2}>
        <Typography variant={"h4"}>情報コース</Typography>
        <MaterialCard />
      </Box>
    </div>
  );
}
