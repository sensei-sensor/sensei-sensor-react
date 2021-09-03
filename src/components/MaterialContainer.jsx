import React from "react";
import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import MaterialCard from "./MaterialCard";

export const useStyles = makeStyles({
  container: {
    background: "#FFF",
  },
});

export default function MaterialContainer() {
  const classes = useStyles();

  return (
    <Box
      m={3}
      p={2}
      bgcolor={"common.white"}
      borderRadius={5}
      display={"flex"}
      textAlign={"center"}
    >
      <Container className={classes.container}>
        <Typography variant={"h5"}>
          <Box fontWeight={700}>情報コース</Box>
        </Typography>
        <Box display={"flex"} flexWrap={"wrap"}>
          <MaterialCard />
          <MaterialCard />
          <MaterialCard />
          <MaterialCard />
          <MaterialCard />
          <MaterialCard />
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
