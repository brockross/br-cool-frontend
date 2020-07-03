import React from "react";
import styled from "styled-components";

const Msg = styled.span`
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  background-color: ${(props) => props.theme.charcoal};
  opacity: 0.75;
  border-radius: 5px;
  color: ${(props) => props.theme.offWhite};
  text-align: center;
  font-size: 12px;
  padding: 3px;
`;

const ClipboardPop = (props) => {
  return <Msg show={props.show}>copied!</Msg>;
};

export default ClipboardPop;
