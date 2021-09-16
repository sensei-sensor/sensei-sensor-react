import React from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";

export default function OpenDays() {
  const [state, setState] = React.useState({
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.monday}
            onChange={handleChange}
            name="monday"
          />
        }
        label="月曜日"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.tuesday}
            onChange={handleChange}
            name="tuesday"
          />
        }
        label="火曜日"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.wednesday}
            onChange={handleChange}
            name="wednesday"
          />
        }
        label="水曜日"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.thursday}
            onChange={handleChange}
            name="thursday"
          />
        }
        label="木曜日"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.friday}
            onChange={handleChange}
            name="friday"
          />
        }
        label="金曜日"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.all}
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
