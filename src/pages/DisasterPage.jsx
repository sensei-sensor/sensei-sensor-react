import { Box, Container } from "@mui/material";
import React from "react";
import GenericTemplate from "../GenericTemplate";

export default function DisasterPage() {
  return (
    <GenericTemplate>
      <Container>
        <Box
          borderRadius={5}
          m={3}
          p={2}
          textAlign={"center"}
          bgcolor={"white"}
        >
          <h1>Disaster Page</h1>
        </Box>
      </Container>
    </GenericTemplate>
  );
}
