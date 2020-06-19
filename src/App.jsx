import React from "react";
import styled, { ThemeProvider } from "styled-components";

import TopBox from "./TopBox";
import IntroBlock from "./IntroBlock";
import ToCBlock from "./ToCBlock/ToCBlock";
import SkillsBlock from "./SkillsBlock";
import PortfolioBlock from "./PortfolioBlock/PortfolioBlock";
import WorkExpBlock from "./WorkExpBlock/WorkExpBlock";
import AboutThisAppBlock from "./AboutThisAppBlock";

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
        <ToCBlock />
        <SkillsBlock />
        <PortfolioBlock />
        <WorkExpBlock />
      </ThemeProvider>
    );
  }
}

export default App;
