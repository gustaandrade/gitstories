import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";

import { RouterProps } from "./types";

const Routes: React.FC<RouterProps> = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Home theme={props.theme} changeTheme={props.changeTheme} />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <Search theme={props.theme} changeTheme={props.changeTheme} />
          )}
        />
        <Route path="/search" component={Search} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
