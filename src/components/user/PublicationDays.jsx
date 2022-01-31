import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";

export default function PublicationDays(props) {
  const [days, setDays] = React.useState(null);

  const handleChange = (event) => {
    axios
      .put(
        import.meta.env.VITE_API_HOST +
          "sensei-sensor-php/WebAPI/users/publicationDays/",
        {
          publicationDays: {
            ...days,
            [event.target.name]: event.target.checked,
          },
        },
        { withCredentials: true }
      )
      .then(() => {
        setDays({
          ...days,
          [event.target.name]: !event.target.checked,
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
          "sensei-sensor-php/WebAPI/users/publicationDays/",
        { withCredentials: true }
      )
      .then((response) => {
        setDays(response.data.publicationDays);
      });
  }, []);

  if (days === null) {
    return null;
  } else {
    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={days.monday}
              onChange={handleChange}
              name="monday"
            />
          }
          label="月曜日"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={days.tuesday}
              onChange={handleChange}
              name="tuesday"
            />
          }
          label="火曜日"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={days.wednesday}
              onChange={handleChange}
              name="wednesday"
            />
          }
          label="水曜日"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={days.thursday}
              onChange={handleChange}
              name="thursday"
            />
          }
          label="木曜日"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={days.friday}
              onChange={handleChange}
              name="friday"
            />
          }
          label="金曜日"
        />
      </FormGroup>
    );
  }
}
