import React from "react";
import styled from "styled-components";

const BlockContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.offWhite};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FaceContainer = styled.div`
  border: 2px solid charcoal;
  width: 400px;
  height: 800px;
  position: relative;
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

const ToCBlock = () => {
  const [eyesOpen, setEyes] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setEyes(false);
      setTimeout(() => {
        setEyes(true);
      }, 350);
    }, 4000);
    return () => clearInterval(interval);
  });

  return (
    <BlockContainer>
      <FaceContainer>
        <EyesOpen src={"./imgs/eyes-open.png"} open={eyesOpen}></EyesOpen>
        <EyesClosed src={"./imgs/eyes-closed.png"} open={eyesOpen}></EyesClosed>
        <Head src={"./imgs/face-no-eyes.png"}></Head>
      </FaceContainer>
    </BlockContainer>
  );
};

export default ToCBlock;
