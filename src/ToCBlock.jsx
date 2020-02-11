import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: ${props => props.theme.mobileHeight};
  background-color: ${props => props.theme.sand};
  display: flex;
  align-items: center;
`;

const TextBox = styled.div`
  width: 80%;
  background-color: ${props => props.theme.offWhite};
  font-family: ${props => props.theme.fontMain};
  font-size: 20px;
  padding: 10px;
  border-radius: 0 5px 5px 0;
`;

const sections = [
  "About This App",
  "Stuff I'm Good At",
  "Work Experience",
  "But Who Am I, Really?"
];

const ToCBlock = () => {
  return (
    <Container>
      <TextBox>
        {sections.map((title, idx) => {
          return <p key={idx}># {title.toUpperCase()}</p>;
        })}
      </TextBox>
    </Container>
  );
};

export default ToCBlock;
