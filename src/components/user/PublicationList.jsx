import {
  Box,
  Button,
  Checkbox,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

export default function PublicationList() {
  const [checked, setChecked] = React.useState([]);
  const [privatePlace, setPrivatePlace] = React.useState([0, 1, 2, 3]);
  const [publicPlace, setPublicPlace] = React.useState([4, 5, 6, 7]);

  const leftChecked = intersection(checked, privatePlace);
  const rightChecked = intersection(checked, publicPlace);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setPublicPlace(publicPlace.concat(privatePlace));
    setPrivatePlace([]);
  };

  const handleCheckedRight = () => {
    setPublicPlace(publicPlace.concat(leftChecked));
    setPrivatePlace(not(privatePlace, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setPrivatePlace(privatePlace.concat(rightChecked));
    setPublicPlace(not(publicPlace, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setPrivatePlace(privatePlace.concat(publicPlace));
    setPublicPlace([]);
  };

  useEffect(() => {
    axios
      .get(
        import.meta.env.VITE_API_HOST +
          "sensei-sensor-php/WebAPI/users/publicationPlace/",
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
      });
  }, []);

  const customList = (items) => (
    <Paper sx={{ width: 200, height: 230, overflow: "auto" }}>
      <List dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role="listItem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    "aria-labelledby": labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`List item ${value + 1}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  return (
    <>
      <Typography variant={"h6"}>
        <Box fontWeight={700}>公開場所</Box>
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>非公開{customList(privatePlace)}</Grid>
        <Grid item>
          <Grid container direction="column">
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleAllRight}
              disabled={privatePlace.length === 0}
              aria-label="move all right"
            >
              すべて公開
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
              aria-label="move selected right"
            >
              選択した場所を公開
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
              aria-label="move selected left"
            >
              選択した場所を非公開
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleAllLeft}
              disabled={publicPlace.length === 0}
              aria-label="move all left"
            >
              すべて非公開
            </Button>
          </Grid>
        </Grid>
        <Grid item>公開{customList(publicPlace)}</Grid>
      </Grid>
    </>
  );
}
