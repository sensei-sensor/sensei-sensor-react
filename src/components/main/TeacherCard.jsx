import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

export default function TeacherCard() {
  return (
    <Box m={2}>
      <Card sx={{ minWidth: 250, width: "fit-content" }} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            吉田先生
          </Typography>
          <Typography mb={1} color="textSecondary">
            5分前
          </Typography>
          <Typography variant="body2" component="p">
            吉田教員室
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
