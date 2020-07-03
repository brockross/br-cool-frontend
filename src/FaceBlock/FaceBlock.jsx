import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ClipboardJS from "clipboard";

import HeadWidget from "./HeadWidget";
import ClipboardPop from "./ClipboardPop";

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
  font-family: ${(props) => props.theme.fontMain};
  color: ${(props) => props.theme.charcoal};
  font-size: 28px;

  @media (min-width: 500px) {
    align-items: flex-start;
    justify-content: center;
    width: 300px;
    padding-left: 75px;
  }
`;

const MenuLink = styled.a`
  color: ${(props) => props.theme.charcoal};
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

const ContactItem = styled(MenuLink)`
  @media (min-width: 500px) {
    cursor: cell;
  }
`;

const FaceBlock = () => {
  new ClipboardJS("#eml");
  const [showClipboardPop, updateShowClipboardPop] = useState(false);

  const handleContactClick = () => {
    updateShowClipboardPop(true);
  };

  return (
    <BlockContainer>
      <HeadWidget />
      <MenuContainer>
        <MenuLink href={"https://www.linkedin.com/in/mbrockross/"}>
          LINKEDIN
        </MenuLink>
        <MenuLink href={"https://github.com/brockross"}>GITHUB</MenuLink>
        <MenuLink
          href={
            "https://brockross-cool.s3-us-west-2.amazonaws.com/brock-ross-software-engineer-resume.pdf"
          }
        >
          RESUME
        </MenuLink>
        <ContactItem
          id={"eml"}
          as="p"
          data-clipboard-text={"m.brock.ross@gmail.com"}
          onClick={handleContactClick}
        >
          GRAB MY EMAIL
        </ContactItem>
        <ClipboardPop show={showClipboardPop} />
      </MenuContainer>
    </BlockContainer>
  );
};

export default FaceBlock;
