import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FaceContainer = styled.div`
  border: 2px solid charcoal;
  width: 375px;
  position: relative;
  height: 400px;
`;
const Head = styled.img`
  width: 100%;
  position: absolute;
`;
const EyesOpen = styled.img`
  width: 100%;
  position: absolute;
  display: ${props => (props.open ? "block" : "none")};
`;
const EyesClosed = styled.img`
  width: 100%;
  position: absolute;
  display: ${props => (props.open ? "none" : "block")};
`;

const HeadWidget = () => {
  const [eyesOpen, setEyes] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setEyes(false);
      setTimeout(() => {
        setEyes(true);
      }, 350);
    }, 3200);
    return () => clearInterval(interval);
  });

  return (
    <FaceContainer>
      <EyesOpen src={"./imgs/eyes-open.png"} open={eyesOpen}></EyesOpen>
      <EyesClosed src={"./imgs/eyes-closed.png"} open={eyesOpen}></EyesClosed>
      <Head src={"./imgs/face-no-eyes.png"}></Head>
    </FaceContainer>
  );
};

export default HeadWidget;
