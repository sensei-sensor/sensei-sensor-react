import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant={"h5"} gutterBottom>
        吉田先生
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        5分前
      </Typography>
      <Typography variant="body2">吉田教員室</Typography>
    </CardContent>
  </React.Fragment>
);

export default function TeacherCard() {
  return (
    <Grid item>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </Grid>
  );
}
