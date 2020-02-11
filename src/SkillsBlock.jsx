import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.turq};
  font-family: ${props => props.theme.fontMain};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Heading = styled.h2`
  color: ${props => props.theme.charcoal};
  text-align: center;
  margin: 15px 10px 0 10px;
`;

const ListsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding: 15px;
`;

const ListCol = styled.div`
  width: 45%;
  padding: 5px;
  border-radius: 5px;
`;

const ColTitle = styled.h3`
  text-align: center;
`;

const techList = [
  { name: "JavaScript", icon: null },
  { name: "React", icon: null },
  { name: "Node", icon: null },
  { name: "HTML/CSS", icon: null },
  { name: "AWS", icon: null },
  { name: "MongoDB", icon: null },
  { name: "Google Tag Manager", icon: null }
];
const miscList = [
  { name: "REST APIs" },
  { name: "Git", icon: null },
  { name: "Agile/Scrum", icon: null },
  { name: "Server-side templating", icon: null },
  { name: "CMS Architecture", icon: null },
  { name: "Remote work", icon: null },
  { name: "Adobe Creative Suite", icon: null }
];
const SkillsBlock = () => {
  return (
    <Container>
      <Heading>WHAT I CAN DO</Heading>
      <ListsContainer>
        <ListCol>
          <ColTitle>Technologies</ColTitle>
          <ul>
            {techList.map((item, idx) => {
              return <li key={idx}>{item.name}</li>;
            })}
          </ul>
        </ListCol>
        <ListCol>
          <ColTitle>Other Skills</ColTitle>
          <ul>
            {miscList.map((item, idx) => {
              return <li key={idx}>{item.name}</li>;
            })}
          </ul>
        </ListCol>
      </ListsContainer>
    </Container>
  );
};

export default SkillsBlock;
