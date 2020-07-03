import React from "react";
import styled from "styled-components";

const BlockContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.offWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 200px 20px;

  @media (min-width: 500px) {
    padding-top: 150px;
    padding-bottom: 100px;
    padding-left: 27%;
    padding-right: 27%;
  }
`;
const TextBox = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  font-family: ${(props) => props.theme.fontMain};
  font-size: 22px;
  margin: 0 20px;
  animation-name: fadeIn;
  animation-duration: 1.5s;
  animation-delay: 2.1s;
  animation-fill-mode: both;
`;
const IntroBlock = () => {
  return (
    <BlockContainer>
      <TextBox>
        <p>
          I'm Brock. I currently work at Bodybuilding.com as a full-stack
          engineer, building APIs and user interfaces alike. I'm proficient in
          React, Node, Mongo, and more.
        </p>
        <p>Great to meet you.</p>
      </TextBox>
    </BlockContainer>
  );
};

export default IntroBlock;
