import React from "react";
import Box from "./Box";
import styled, { ThemeProvider } from "styled-components";

const theme = {
  scarlet: "#F24E29",
  turq: "#89D9BB",
  sand: "#D9C49C",
  crimson: "#BF2E21",
  offWhite: "#F2F2F2"
};

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Box />
      </ThemeProvider>
    );
  }
}

export default App;
