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
  const [privatePlace, setPrivatePlace] = React.useState(null);
  const [publicPlace, setPublicPlace] = React.useState(null);

  const leftChecked = intersection(checked, privatePlace);
  const rightChecked = intersection(checked, publicPlace);

  const handleToggle = (value, publication) => () => {
    const currentIndex = checked.indexOf(
      publication ? publicPlace[value] : privatePlace[value]
    );
    const newChecked = [...checked];

    if (currentIndex === -1) {
      publication
        ? newChecked.push(publicPlace[value])
        : newChecked.push(privatePlace[value]);
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
      .put(
        import.meta.env.VITE_API_HOST +
          "sensei-sensor-php/WebAPI/users/publicationPlace/",
        {
          publicationPlace: {
            public: publicPlace,
            private: privatePlace,
          },
        },
        { withCredentials: true }
      )
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  }, [publicPlace, privatePlace]);

  useEffect(() => {
    axios
      .get(
        import.meta.env.VITE_API_HOST +
          "sensei-sensor-php/WebAPI/users/publicationPlace/",
        { withCredentials: true }
      )
      .then((response) => {
        setPublicPlace(response.data.public);
        setPrivatePlace(response.data.private);
      });
  }, []);

  const customList = (items, publication) => (
    <Paper sx={{ width: 200, height: 230, overflow: "auto" }}>
      <List dense component="div" role="list">
        {Object.keys(items).map((value) => {
          const roomId = publication
            ? publicPlace[value].roomId
            : privatePlace[value].roomId;
          const labelId = `transfer-list-item-${roomId}-label`;

          return (
            <ListItem
              key={value}
              role="listItem"
              button
              onClick={handleToggle(value, publication)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={
                    checked.indexOf(
                      publication ? publicPlace[value] : privatePlace[value]
                    ) !== -1
                  }
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    "aria-labelledby": labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={`${
                  publication
                    ? publicPlace[value].roomName
                    : privatePlace[value].roomName
                }`}
              />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  if (publicPlace === null || privatePlace === null) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Typography variant={"h6"}>
          <Box fontWeight={700}>公開場所</Box>
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>非公開{customList(privatePlace, false)}</Grid>
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
          <Grid item>公開{customList(publicPlace, true)}</Grid>
        </Grid>
      </>
    );
  }
}
