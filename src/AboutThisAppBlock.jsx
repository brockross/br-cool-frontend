import React from "react";
import styled from "styled-components";

const BlockContainer = styled.div`
  width: 100%;
  height: ${props => props.theme.mobileHeight};
  background-color: ${props => props.theme.turq};
`;
const AboutThisAppBlock = () => {
  return <BlockContainer />;
};

export default AboutThisAppBlock;
