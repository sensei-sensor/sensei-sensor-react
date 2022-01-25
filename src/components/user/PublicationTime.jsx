import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";

export default function PublicationTime() {
  const [publicationTime, setPublicationTime] = React.useState({
    start: 9,
    end: 17,
  });

  const handleStartTimeChange = (event) => {
    setPublicationTime.start(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setPublicationTime.end(event.target.value);
  };

  useEffect(() => {
    axios
      .get(
        import.meta.env.VITE_API_HOST +
          "sensei-sensor-php/WebAPI/users/publicationTime/",
        { withCredentials: true }
      )
      .then((responce) => {
        console.log;
        setPublicationTime({
          start: responce.data.publicationTime.start / 60,
          end: responce.data.publicationTime.end / 60,
        });
      });
  }, []);

  return (
    <Box display={"flex"} alignItems={"center"}>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel>開始時間</InputLabel>
        <Select
          value={publicationTime.start}
          onChange={handleStartTimeChange}
          autoWidth
          label="開始時間"
        >
          <MenuItem value={8}>8時</MenuItem>
          <MenuItem value={9}>9時</MenuItem>
          <MenuItem value={10}>10時</MenuItem>
          <MenuItem value={11}>11時</MenuItem>
        </Select>
      </FormControl>
      <Typography>から</Typography>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel>終了時間</InputLabel>
        <Select
          value={publicationTime.end}
          onChange={handleEndTimeChange}
          autoWidth
          label="終了時間"
        >
          <MenuItem value={15}>15時</MenuItem>
          <MenuItem value={16}>16時</MenuItem>
          <MenuItem value={17}>17時</MenuItem>
          <MenuItem value={18}>18時</MenuItem>
        </Select>
      </FormControl>
      <Typography>まで</Typography>
    </Box>
  );
}
