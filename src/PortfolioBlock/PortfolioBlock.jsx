import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.sand};
  padding: 200px 0;
  font-family: ${props => props.theme.fontMain};
`;
const Title = styled.h2`
  text-align: center;
`;

const PortfolioBlock = () => {
  return (
    <Container>
      <Title>STUFF I'VE MADE</Title>
      <ul>
        <li>Bodybuilding.com Work</li>
        <li>
          GAMES
          <ul>
            <li>Connect Four</li>
            <li>Tic Tac Toe</li>
            <li>Brickbreaker</li>
          </ul>
        </li>
        <li>Jerry the Giraffe</li>
      </ul>
    </Container>
  );
};

export default PortfolioBlock;
