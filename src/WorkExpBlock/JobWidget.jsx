import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.scarlet};
  font-family: ${props => props.theme.fontMain};
  padding: 10px 20px;
`;

const DeetsContainer = styled.div`
  display: ${props => (props.isExpanded ? "flex" : "none")};
  /* background-color: ${props => props.theme.scarletDark}; */
  background: linear-gradient(#F24E29, #ab371d);
  color: ${props => props.theme.offWhite};
  width: 100%;
  /* border: 2px solid;
  border-color: hsla(11, 88%, 55%, 0.5); */
  padding: 5px;
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
            {jobData.bullets.map((item, idx) => {
              return <li key={idx}>{item}</li>;
            })}
          </ul>
        </DeetsContainer>
      </Container>
    );
  }
}

export default JobWidget;
