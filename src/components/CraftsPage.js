import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 3% 0 0 5%;
`;

const MegaContainer = styled.div`
  display: block;
`;

const Head = styled.div`
  display: flex;
  font-size: 90px;
  font-family: poppins;
  font-weight: 600;
  color: #2e2020d4;

  @media (max-width: 608px) {
    font-size: 45px;
  }
`;

const H1 = styled.div``;

const H2 = styled.div`
  text-decoration: underline;
  margin-left: 15px;

  @media (max-width: 608px) {
    margin-left: 5px;
  }
`;

const CraftsContainer = styled.div`
  padding: 5% 0;
  display: inline-grid;
`;

const Craft = styled(NavLink)`
  text-decoration: underline;
  font-size: 20px;
  font-family: poppins;
  font-weight: 400;
  color: #2e2020d4;
  margin: 10px 0;

  &:hover {
    color: #ea5027;
    transition: all 0.3s ease;
  }
`;

const CraftsPage = () => {
  return (
    <Container>
      <Head>
        <H1>crafting space of sumit</H1>
      </Head>
      <MegaContainer>
        <CraftsContainer>
          <Craft to="/crafts/onboardingwithframer">
            onboarding screen using framer-motion
          </Craft>
          <Craft to="/crafts/duolingoanimations">
            Duolingo scrolling animations
          </Craft>
        </CraftsContainer>
      </MegaContainer>
    </Container>
  );
};

export default CraftsPage;
