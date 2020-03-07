import React from "react";
import styled from "styled-components";

import mockResponse from "./dummyData";
import JobWidget from "./JobWidget";

const Container = styled.div`
  background-color: ${props => props.theme.scarlet};
  width: 100%;
  font-family: ${props => props.theme.fontMain};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 130px 0px;
`;
const Title = styled.h3`
  text-align: center;
`;
class WorkExpBlock extends React.Component {
  constructor() {
    super();

    this.state = {
      workExperience: mockResponse
    };
  }

  render() {
    return (
      <Container id={"WorkExpBlock"}>
        <Title>WORK</Title>
        {this.state.workExperience.map(job => {
          return <JobWidget jobData={job} key={job.company} />;
        })}
      </Container>
    );
  }
}

export default WorkExpBlock;
