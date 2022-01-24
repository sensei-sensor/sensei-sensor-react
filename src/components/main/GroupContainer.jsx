import { Box, Container, Typography } from "@mui/material";
import React from "react";
import TeacherCard from "./TeacherCard";

export default function GroupContainer(props) {
  return (
    <Container>
      <Box m={3} pt={2} borderRadius={5} textAlign={"center"} bgcolor={"white"}>
        <Typography variant={"h5"}>
          <Box fontWeight={700}>{props.groupName}</Box>
        </Typography>
        <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
          {Object.keys(props.users).map((key) => {
            return (
              <TeacherCard
                key={key}
                userName={props.users[key].userName}
                detectionTime={props.users[key].detectionTime}
                roomName={props.users[key].roomName}
              />
            );
          })}
        </Box>
      </Box>
    </Container>
  );
}
