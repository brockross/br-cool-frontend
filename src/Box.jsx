import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const BoxFill = styled.div`
  background-color: ${props => props.color};
  @keyframes fillUp {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
  height: 100%;
  animation-name: fillUp;
  animation-duration: 3s;
  animation-fill-mode: forwards;
`;
const TestP = styled.p`
  color: #f2f2f2;
  font-family: Raleway, Helvetica, sans-serif;
  font-size: 30px;
  margin: 0 10px 10px 0;
`;
const Box = () => {
  return (
    <div>
      <Container>
        <BoxFill color={"#F24E29"} />
      </Container>
    </div>
  );
};

export default Box;
