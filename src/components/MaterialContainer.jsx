import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import MaterialCard from "./MaterialCard";

export default function MaterialContainer() {
  return (
    <Container>
      <Box m={3} pt={2} borderRadius={5} textAlign={"center"} bgcolor={"white"}>
        <Typography variant={"h5"}>
          <Box fontWeight={700}>情報コース</Box>
        </Typography>
        <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
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
      </Box>
    </Container>
  );
}
