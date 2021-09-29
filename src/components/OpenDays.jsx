import React from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";

export default function OpenDays() {
  const [day, setDay] = React.useState({
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    all: true,
  });

  const handleChange = (event) => {
    setDay({ ...day, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={day.monday}
            onChange={handleChange}
            name="monday"
          />
        }
        label="月曜日"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={day.tuesday}
            onChange={handleChange}
            name="tuesday"
          />
        }
        label="火曜日"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={day.wednesday}
            onChange={handleChange}
            name="wednesday"
          />
        }
        label="水曜日"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={day.thursday}
            onChange={handleChange}
            name="thursday"
          />
        }
        label="木曜日"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={day.friday}
            onChange={handleChange}
            name="friday"
          />
        }
        label="金曜日"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={day.all}
            onChange={handleChange}
            name="all"
            color={"primary"}
          />
        }
        label="すべて"
      />
    </FormGroup>
  );
}
