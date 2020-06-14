import React, { useState } from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";

import Routes from "./routes";

import { LightTheme, DarkTheme } from "./themes";

import { changeTheme } from "./stores/actions";
import { StoreActions } from "./stores/actions/types";
import { StoreState } from "./stores/reducers/types";
import { Theme } from "./themes/types";

import "./App.css";

function App() {
  const [initialTheme, setInitialTheme] = useState(DarkTheme);

  function changeTheme() {
    setInitialTheme(initialTheme === LightTheme ? DarkTheme : LightTheme);
  }

  return (
    <ThemeProvider theme={initialTheme}>
      <Routes theme={initialTheme} changeTheme={changeTheme} />
    </ThemeProvider>
  );
}

const mapStateToProps = (state: StoreState) => ({
  theme: state.theme
});

const mapDispatchToProps = (dispatch: (dispatch: StoreActions) => void) => ({
  changeTheme: (theme: Theme) => dispatch(changeTheme(theme))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
