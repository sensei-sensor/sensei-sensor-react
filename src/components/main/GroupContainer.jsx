import { Box, Container, Typography } from "@mui/material";
import React from "react";
import TeacherCard from "./TeacherCard";

export default function GroupContainer() {
  return (
    <Container>
      <Box m={3} pt={2} borderRadius={5} textAlign={"center"} bgcolor={"white"}>
        <Typography variant={"h5"}>
          <Box fontWeight={700}>情報コース</Box>
        </Typography>
        <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
        </Box>
      </Box>
    </Container>
  );
}
