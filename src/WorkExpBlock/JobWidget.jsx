import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.scarletDark};
  font-family: ${props => props.theme.fontMain};
  border: 2px solid;
  border-color: ${props => props.theme.charcoal};
`;

const DeetsContainer = styled.div`
  display: ${props => (props.isExpanded ? "block" : "none")};
  color: ${props => props.theme.offWhite};
  width: 100%;
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
        <h3 onClick={() => this.toggle()}>
          {jobData.company}&nbsp;
          {isExpanded ? "-" : "+"}
        </h3>
        <DeetsContainer isExpanded={isExpanded}>
          <p>
            {jobData.jobTitle} | {jobData.timespan}
          </p>
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