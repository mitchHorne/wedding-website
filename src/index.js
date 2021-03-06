import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Main from "./main/Main";
import Dashboard from "./Dashboard";
import "./index.css";
import { theme } from "./theme";

const serverUrl = "https://wedding-server-t7jck.ondigitalocean.app";

const Router = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          <Main url={serverUrl} />
        </Route>
        <Route path="/adminDash">
          <Dashboard />
        </Route>
      </Switch>
    </ThemeProvider>
  </BrowserRouter>
);

ReactDOM.render(<Router />, document.getElementById("root"));
