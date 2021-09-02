import React from "react";
import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import MaterialCard from "./MaterialCard";

export const useStyles = makeStyles({
  card: {
    minWidth: 275,
    width: "fit-content",
  },
  userName: {
    fontSize: 14,
  },
  discoveryTime: {
    marginBottom: 12,
  },
  root: {
    background: "#FFC599",
  },
  header: {
    background: "#FFFFFF",
  },
  title: {
    flexGrow: 1,
  },
  container: {
    background: "#FFF",
  },
});

export default function MaterialContainer() {
  const classes = useStyles();

  return (
    <Box m={3}>
      <Container className={classes.container}>
        <Typography variant={"h6"}>
          <Box fontWeight={700}>情報コース</Box>
        </Typography>
        <Box display={"flex"} flexWrap={"wrap"}>
          <MaterialCard />
          <MaterialCard />
          <MaterialCard />
          <MaterialCard />
          <MaterialCard />
        </Box>
      </Container>
    </Box>
  );
}
