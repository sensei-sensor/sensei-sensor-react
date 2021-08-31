import React from "react";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: "fit-content",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function MaterialCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          吉田先生
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          5分前
        </Typography>
        <Typography variant="body2" component="p">
          吉田教員室
        </Typography>
      </CardContent>
    </Card>
  );
}
