import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.scarlet};
  font-family: ${props => props.theme.fontMain};
  padding: 10px 0px;
`;

const DeetsContainer = styled.div`
  display: ${props => (props.isExpanded ? "flex" : "none")};
  background-color: ${props => props.theme.scarletDark};
  color: ${props => props.theme.offWhite};
  width: 100%;
  border-bottom: 3px solid;
  border-color: ${props => props.theme.charcoal};
`;

class JobWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false
    };
  }

  toggle() {
    this.setState(prevState => {
      return { isExpanded: !prevState.isExpanded };
    });
  }

  render() {
    const { jobData } = this.props;
    const { isExpanded } = this.state;

    return (
      <Container>
        <h4>
          {jobData.company} | {jobData.jobTitle} | {jobData.timespan}
        </h4>
        <p>
          <em>{jobData.shortSummary}</em>&nbsp;
          <span onClick={() => this.toggle()}>
            {isExpanded ? "[--]" : "[++]"}
          </span>
        </p>
        <DeetsContainer isExpanded={isExpanded}>
          <ul>
            {jobData.bullets.map(item => {
              return <li>{item}</li>;
            })}
          </ul>
        </DeetsContainer>
      </Container>
    );
  }
}

export default JobWidget;
