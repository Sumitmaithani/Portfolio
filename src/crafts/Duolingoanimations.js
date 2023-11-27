import React from "react";
import styled from "styled-components";

import screen from "../assets/crafts/craft2.gif";

const Container = styled.div``;

const ImgContainer = styled.div`
  margin-top: 2%;
  display: flex;
  justify-content: center;
  align-item: center;
  text-align: center;
`;

const Image = styled.img`
  height: 85vh;
`;

const H1 = styled.div`
  font-size: calc(1rem + 2vw);
  font-family: poppins;
  font-weight: 400;
  color: #2e2020d4;
  margin: 2% 0%;

  display: flex;
  justify-content: center;
  align-item: center;
  text-align: center;
`;

const Duolingoanimations = () => {
  return (
    <Container>
      <H1>Duolingo scrolling animations</H1>
      <ImgContainer>
        <Image src={screen} alt="animation screen" />
      </ImgContainer>
    </Container>
  );
};

export default Duolingoanimations;
