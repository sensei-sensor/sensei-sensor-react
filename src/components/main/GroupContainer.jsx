import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import TeacherCard from "./TeacherCard";

export default function GroupContainer() {
  return (
    <Grid item>
      <Container>
        <Box borderRadius={2} pb={2} textAlign={"center"} bgcolor={"white"}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant={"h5"}>
                <Box fontWeight={700}>情報コース</Box>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3} justifyContent={"center"}>
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
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Grid>
  );
}
