import { Grid } from "@material-ui/core";
import React from "react";
import GroupContainer from "../components/main/GroupContainer";

export default function MainPage() {
  return (
    <div>
      <Grid container spacing={4} justifyContent={"center"}>
        <GroupContainer />
        <GroupContainer />
      </Grid>
    </div>
  );
}
