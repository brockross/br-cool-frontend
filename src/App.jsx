import React from "react";
import styled, { ThemeProvider } from "styled-components";

import TopBox from "./TopBox";
import IntroBlock from "./IntroBlock";
import FaceBlock from "./FaceBlock/FaceBlock";

const theme = {
  scarlet: "#F24E29",
  scarletDark: "#ab371d",
  turq: "#89d9bb",
  sand: "#D9C49C",
  crimson: "#BF2E21",
  offWhite: "#F2F2F2",
  charcoal: "#262626",
  fontMain: "Raleway",
  mobileHeight: "300px",
  desktopHeight: "600px",
};

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <TopBox />
      <IntroBlock />
      <FaceBlock />
    </ThemeProvider>
  );
};

export default App;
