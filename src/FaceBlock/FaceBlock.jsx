import React, { useState, useEffect } from "react";
import styled from "styled-components";

import HeadWidget from "./HeadWidget";

const BlockContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.offWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 100px;
`;

const MenuItem = styled.a`
  font-family: ${(props) => props.theme.fontMain};
  color: ${(props) => props.theme.charcoal};
  font-size: 24px;
  text-decoration: none;
  margin: 5px 0;
  letter-spacing: normal;
  transition: letter-spacing 0.5s;

  &:hover {
    color: ${(props) => props.theme.turq};
    letter-spacing: 3px;
  }
`;

const FaceBlock = () => {
  return (
    <BlockContainer>
      <HeadWidget />
      <MenuItem href={"https://www.linkedin.com/in/mbrockross/"}>
        LINKEDIN
      </MenuItem>
      <MenuItem href={"https://github.com/brockross"}>GITHUB</MenuItem>
      <MenuItem href={"#"}>RESUME</MenuItem>
      <MenuItem href={"mailto:m.brock.ross@gmail.com"}>
        SEND ME A MESSAGE
      </MenuItem>
    </BlockContainer>
  );
};

export default FaceBlock;
