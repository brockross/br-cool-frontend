import React from "react";
import styled from "styled-components";

import mockResponse from "./dummyData";
import JobWidget from "./JobWidget";

const Container = styled.div`
  background-color: ${props => props.theme.scarlet};
  width: 100%;
  height: 300px;
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
      <Container>
        {this.state.workExperience.map(job => {
          return <JobWidget jobData={job} />;
        })}
      </Container>
    );
  }
}

export default WorkExpBlock;
