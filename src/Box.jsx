import React from "react";
import styled from "styled-components";

const Fill = styled.div`
  background-color: ${props => props.color};
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
  color: #f2f2f2;
  font-weight: bold;
  font-family: Raleway, Helvetica, sans-serif;
  font-size: 35px;
  margin: 0 15px 15px 0;
`;
const Box = () => {
  return (
    <div>
      <Fill color={"#F24E29"} />
      <Container>
        <GreetingText>hello there.</GreetingText>
      </Container>
    </div>
  );
};

export default Box;
