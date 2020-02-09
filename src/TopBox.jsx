import React from "react";
import styled from "styled-components";

const Fill = styled.div`
  background-color: ${props => props.theme.scarlet};
  @keyframes fillUp {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
  height: ${props => props.theme.mobileHeight};
  position: absolute;
  top: 0px;
  z-index: -1;
  animation-name: fillUp;
  animation-duration: 2s;
  animation-fill-mode: forwards;
`;
const Container = styled.div`
  width: 100%;
  height: ${props => props.theme.mobileHeight};
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const GreetingText = styled.p`
  color: ${props => props.theme.offWhite};
  font-weight: bold;
  font-family: ${props => props.theme.fontMain};
  font-size: 35px;
  margin: 0 15px 15px 0;
`;
const TopBox = () => {
  return (
    <div>
      <Fill />
      <Container>
        <GreetingText>hey there.</GreetingText>
      </Container>
    </div>
  );
};

export default TopBox;
