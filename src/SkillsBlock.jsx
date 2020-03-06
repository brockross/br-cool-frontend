import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.turq};
  /* background: linear-gradient(#F2F2F2, #89d9bb, #F2F2F2); */
  font-family: ${props => props.theme.fontMain};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 200px 20px;
`;
const Heading = styled.h2`
  color: ${props => props.theme.charcoal};
  /* text-align: center; */
  margin: 15px 10px 0 10px;
  padding-bottom: 10px;
`;
const LogosContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const TechLogo = styled.img`
  width: 100px;
  height: 100px;
`;

const ListsContainer = styled.div`
  width: 100%;
  display: flex;
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
    <Container id={"SkillsBlock"}>
      <Heading>SKILLS</Heading>
      <span>
        <em>
          bowhunting skills... computer hacking skills... girls only want
          boyfriends with good skills
        </em>
      </span>
      <p>
        <strong>I ❤️JavaScript:</strong> vanilla, React, and Node. Other close
        friends include RESTful APIs (building & using), AWS, server-side
        templating, git, and more.
      </p>
      <LogosContainer>
        <TechLogo src={"./imgs/js-logo.png"} />
        <TechLogo src={"./imgs/react-logo.png"} />
        <TechLogo src={"./imgs/nodejs-logo.png"} />
      </LogosContainer>
    </Container>
  );
};

export default SkillsBlock;
