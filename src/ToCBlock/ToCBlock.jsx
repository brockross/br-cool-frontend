import React, { useState, useEffect } from "react";
import styled from "styled-components";

import HeadWidget from "./HeadWidget";

const BlockContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.offWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 100px;
`;

const TocItem = styled.a`
  font-family: ${props => props.theme.fontMain};
  color: ${props => props.theme.charcoal};
  font-size: 24px;
  text-decoration: none;
  margin: 5px 0;
  letter-spacing: normal;
  transition: letter-spacing 0.5s;

  &:hover {
    color: ${props => props.theme.turq};
    letter-spacing: 3px;
  }
`;

const ToCBlock = () => {
  return (
    <BlockContainer>
      <HeadWidget />
      <TocItem href={"#SkillsBlock"}># MY SKILLS</TocItem>
      <TocItem href={"#WorkExpBlock"}># WORK EXPERIENCE</TocItem>
      <TocItem href={"#"}># STUFF I'VE MADE</TocItem>
      <TocItem href={"#"}># ABOUT THIS APP</TocItem>
      <TocItem href={"#"}># BUT WHO AM I, REALLY</TocItem>
    </BlockContainer>
  );
};

export default ToCBlock;
