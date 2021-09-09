import React from "react";
import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function MaterialUserPage() {
  const classes = useStyles();

  return (
    <Container>
      <Box m={3} pt={2} borderRadius={5} textAlign={"center"} bgcolor={"white"}>
        <Typography variant={"h5"}>
          <Box fontWeight={700}>ユーザー情報</Box>
        </Typography>
        <Box mt={3} display={"flex"} alignItems={"center"}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">公開時間</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={10}>9時</MenuItem>
              <MenuItem value={20}>10時</MenuItem>
              <MenuItem value={30}>11時</MenuItem>
            </Select>
          </FormControl>
          <Typography>から</Typography>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">公開時間</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={10}>15時</MenuItem>
              <MenuItem value={20}>16時</MenuItem>
              <MenuItem value={30}>17時</MenuItem>
            </Select>
          </FormControl>
          <Typography>まで</Typography>
          <Box ml={3}>
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="非公開"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
