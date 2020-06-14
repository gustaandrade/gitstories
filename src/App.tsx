import React from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";

import Routes from "./routes";

import { changeTheme } from "./stores/actions";
import { StoreActions } from "./stores/actions/types";
import { StoreState } from "./stores/reducers/types";
import { Theme } from "./themes/types";
import { AppProps } from "./types";

import "./App.css";

function App(props: AppProps) {
  return (
    <ThemeProvider theme={props.theme}>
      <Routes />
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
