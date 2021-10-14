import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";

export default function PublicationTime() {
  const [startTime, setStartTime] = React.useState(9);
  const [endTime, setEndTime] = React.useState(17);

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  return (
    <Box display={"flex"} alignItems={"center"}>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel>開始時間</InputLabel>
        <Select
          value={startTime}
          onChange={handleStartTimeChange}
          autoWidth
          label="開始時間"
        >
          <MenuItem value={9}>9時</MenuItem>
          <MenuItem value={10}>10時</MenuItem>
          <MenuItem value={11}>11時</MenuItem>
        </Select>
      </FormControl>
      <Typography>から</Typography>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel>終了時間</InputLabel>
        <Select
          value={endTime}
          onChange={handleEndTimeChange}
          autoWidth
          label="終了時間"
        >
          <MenuItem value={15}>15時</MenuItem>
          <MenuItem value={16}>16時</MenuItem>
          <MenuItem value={17}>17時</MenuItem>
        </Select>
      </FormControl>
      <Typography>まで</Typography>
    </Box>
  );
}
