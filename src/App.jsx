import React from "react";
import styled, { ThemeProvider } from "styled-components";

import TopBox from "./TopBox";
import IntroBlock from "./IntroBlock";
import AboutThisAppBlock from "./AboutThisAppBlock";

const theme = {
  scarlet: "#F24E29",
  turq: "#89d9bb",
  sand: "#D9C49C",
  crimson: "#BF2E21",
  offWhite: "#F2F2F2",
  fontMain: "Raleway",
  mobileHeight: "300px",
  desktopHeight: "600px"
};

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <TopBox />
        <IntroBlock />
        <AboutThisAppBlock />
      </ThemeProvider>
    );
  }
}

export default App;
