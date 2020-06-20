import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Fill = styled.div`
  background-color: ${(props) => props.theme.scarlet};
  height: ${(props) => props.theme.mobileHeight};
  position: absolute;
  width: 100%;
  top: 0px;
  z-index: -1;
  transform: translateX(${(props) => (props.fill ? "0%" : "-100%")});
  transition: all 2s ease;
  transition-delay: 200ms;
`;
const Container = styled.div`
  width: 100%;
  height: ${(props) => props.theme.mobileHeight};
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const GreetingText = styled.p`
  color: ${(props) => props.theme.offWhite};
  font-weight: bold;
  font-family: ${(props) => props.theme.fontMain};
  font-size: 35px;
  margin: 0 15px 15px 0;
`;
const TopBox = () => {
  const [fill, updateFill] = useState(false);
  useEffect(() => {
    updateFill(true);
  }, []);
  return (
    <div>
      <Fill fill={fill} />
      <Container>
        <GreetingText>hey there.</GreetingText>
      </Container>
    </div>
  );
};

export default TopBox;
