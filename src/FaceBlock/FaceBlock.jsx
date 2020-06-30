import React, { useState, useEffect } from "react";
import styled from "styled-components";

import HeadWidget from "./HeadWidget";

const BlockContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.offWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 100px;

  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 500px) {
    align-items: flex-start;
    justify-content: center;
    width: 300px;
    padding-left: 75px;
  }
`;

const MenuItem = styled.a`
  font-family: ${(props) => props.theme.fontMain};
  color: ${(props) => props.theme.charcoal};
  font-size: 24px;
  text-decoration: none;
  margin: 5px 0;
  letter-spacing: normal;
  transition: letter-spacing 0.5s;

  @media (min-width: 500px) {
    &:hover {
      color: ${(props) => props.theme.turq};
      letter-spacing: 3px;
    }
  }
`;

const FaceBlock = () => {
  return (
    <BlockContainer>
      <HeadWidget />
      <MenuContainer>
        <MenuItem href={"https://www.linkedin.com/in/mbrockross/"}>
          LINKEDIN
        </MenuItem>
        <MenuItem href={"https://github.com/brockross"}>GITHUB</MenuItem>
        <MenuItem href={"#"}>RESUME</MenuItem>
        <MenuItem href={"mailto:m.brock.ross@gmail.com"}>CONTACT</MenuItem>
      </MenuContainer>
    </BlockContainer>
  );
};

export default FaceBlock;
