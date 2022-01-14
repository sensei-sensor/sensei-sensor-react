import { Box, Container, Typography } from "@mui/material";
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
          <Typography variant={"h5"}>
            <Box fontWeight={700}>このセンサーで検出済み</Box>
          </Typography>
        </Box>
      </Container>
      <Container>
        <Box
          borderRadius={5}
          m={3}
          p={2}
          textAlign={"center"}
          bgcolor={"white"}
        >
          <Typography variant={"h5"}>
            <Box fontWeight={700} color={"red"}>
              このセンサーで未検出
            </Box>
          </Typography>
        </Box>
      </Container>
    </GenericTemplate>
  );
}
