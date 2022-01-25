import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

export default function TeacherCard(props) {
  const convertRelativeTime = () => {};

  return (
    <Box m={2}>
      <Card sx={{ minWidth: 250, width: "fit-content" }} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.userName}
          </Typography>
          <Typography mb={1} color="textSecondary">
            {props.detectionTime}
          </Typography>
          <Typography variant="body2" component="p">
            {props.roomName}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
