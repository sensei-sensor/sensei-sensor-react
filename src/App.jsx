import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderBar from "./components/common/HeaderBar";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";
import MaterialTheme from "./styles/Theme";

export default function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={MaterialTheme}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <HeaderBar />
          </Grid>
          <Grid item xs={12}>
            <Switch>
              <Route exact path={"/"} component={MainPage} />
              <Route path={"/UserPage"} component={UserPage} />
            </Switch>
          </Grid>
        </Grid>
      </ThemeProvider>
    </BrowserRouter>
  );
}
