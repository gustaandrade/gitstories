import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Routes from "./routes";

import { LightTheme, DarkTheme } from "./themes";

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

export default App;
