import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import MaterialTheme from "./styles/MaterialTheme";
import MaterialHeader from "./components/MaterialHeader";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MaterialViewPage from "./pages/MaterialViewPage";
import MaterialUserPage from "./pages/MaterialUserPage";

export default function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={MaterialTheme}>
        <MaterialHeader />
        <Switch>
          <Route exact path={"/"} component={MaterialViewPage} />
          <Route path={"/UserPage"} component={MaterialUserPage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}
