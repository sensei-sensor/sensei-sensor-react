import React from "react";
import {
  Box,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";

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

export default function MaterialCard() {
  const classes = useStyles();

  return (
    <Box m={2}>
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
    </Box>
  );
}
