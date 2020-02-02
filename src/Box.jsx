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
  height: 300px;
  position: absolute;
  top: 0px;
  z-index: -1;
  animation-name: fillUp;
  animation-duration: 2s;
  animation-fill-mode: forwards;
`;
const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const GreetingText = styled.p`
  color: ${props => props.theme.offWhite};
  font-weight: bold;
  font-family: Raleway, Helvetica, sans-serif;
  font-size: 35px;
  margin: 0 15px 15px 0;
`;
const Box = () => {
  return (
    <div>
      <Fill />
      <Container>
        <GreetingText>hello there.</GreetingText>
      </Container>
    </div>
  );
};

export default Box;
