import {
  Box,
  FormControl,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";

export default function PublicationTime(props) {
  const [publicationTime, setPublicationTime] = React.useState(null);

  const handleStartTimeChange = (event) => {
    axios
      .put(
        import.meta.env.VITE_API_HOST +
          "sensei-sensor-php/WebAPI/users/publicationTime/",
        {
          publicationTime: {
            start: event.target.value * 60,
            end: publicationTime.end * 60,
          },
        },
        { withCredentials: true }
      )
      .then(() => {
        setPublicationTime({
          start: event.target.value,
          end: publicationTime.end,
        });
        props.setSnackbarStatus({
          message: "正常に更新されました",
          severity: "success",
        });
        props.setSnackbarOpen(true);
      })
      .catch(() => {
        props.setSnackbarStatus({
          message: "更新に失敗しました",
          severity: "error",
        });
        props.setSnackbarOpen(true);
      });
  };

  const handleEndTimeChange = (event) => {
    axios
      .put(
        import.meta.env.VITE_API_HOST +
          "sensei-sensor-php/WebAPI/users/publicationTime/",
        {
          publicationTime: {
            start: publicationTime.start * 60,
            end: event.target.value * 60,
          },
        },
        { withCredentials: true }
      )
      .then(() => {
        setPublicationTime({
          start: publicationTime.start,
          end: event.target.value,
        });
        props.setSnackbarStatus({
          message: "正常に更新されました",
          severity: "success",
        });
        props.setSnackbarOpen(true);
      })
      .catch(() => {
        props.setSnackbarStatus({
          message: "更新に失敗しました",
          severity: "error",
        });
        props.setSnackbarOpen(true);
      });
  };

  useEffect(() => {
    axios
      .get(
        import.meta.env.VITE_API_HOST +
          "sensei-sensor-php/WebAPI/users/publicationTime/",
        { withCredentials: true }
      )
      .then((response) => {
        setPublicationTime({
          start: response.data.publicationTime.start / 60,
          end: response.data.publicationTime.end / 60,
        });
      });
  }, []);

  if (publicationTime === null) {
    return <LinearProgress />;
  } else {
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
}
