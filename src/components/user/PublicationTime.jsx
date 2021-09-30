import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  Select,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function PublicationTime() {
  const classes = useStyles();
  const [time, setTime] = React.useState({
    start: 9,
    end: 17,
  });

  const handleChange = (event) => {
    setTime({
      ...time,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box display={"flex"} alignItems={"center"}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>開始時間</InputLabel>
        <Select
          native
          value={time.start}
          onChange={handleChange}
          label="開始時間"
          inputProps={{
            name: "start",
          }}
        >
          <option aria-label="None" value="" />
          <option value={8}>8時</option>
          <option value={9}>9時</option>
          <option value={10}>10時</option>
        </Select>
      </FormControl>
      <Typography>から</Typography>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>終了時間</InputLabel>
        <Select
          native
          value={time.end}
          onChange={handleChange}
          label="終了時間"
          inputProps={{
            name: "end",
          }}
        >
          <option aria-label="None" value="" />
          <option value={15}>15時</option>
          <option value={16}>16時</option>
          <option value={17}>17時</option>
        </Select>
      </FormControl>
      <Typography>まで</Typography>
      <Box ml={3}>
        <FormControlLabel
          control={<Checkbox name="private" color="primary" />}
          label="非公開"
        />
      </Box>
    </Box>
  );
}
