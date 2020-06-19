import React from "react";
import styled from "styled-components";

const BlockContainer = styled.div`
  width: 100%;
  height: ${props => props.theme.mobileHeight};
  background-color: ${props => props.theme.offWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 200px 0;
`;
const Heading = styled.p`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  font-family: ${props => props.theme.fontMain};
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
      <Heading>I'm Brock. Great to meet you.</Heading>
    </BlockContainer>
  );
};

export default IntroBlock;
