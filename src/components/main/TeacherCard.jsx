import { Card, CardContent, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    width: "fit-content",
  },
  userName: {
    fontSize: 14,
  },
  discoveryTime: {
    marginBottom: 12,
  },
});

export default function TeacherCard() {
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            吉田先生
          </Typography>
          <Typography className={classes.discoveryTime} color="textSecondary">
            5分前
          </Typography>
          <Typography variant="body2" component="p">
            吉田教員室
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
