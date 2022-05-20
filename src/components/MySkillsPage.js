import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";



import a from "../assets/skills/html.svg";
import b from "../assets/skills/css.svg";
import c from "../assets/skills/js.svg";
import d from "../assets/skills/jquery.svg";
import e from "../assets/skills/git.svg";
import f from "../assets/skills/github.svg";
import g from "../assets/skills/react.svg";
import h from "../assets/skills/api.svg";
import i from "../assets/skills/antd.svg";
import j from "../assets/skills/scss.svg";
import k from "../assets/skills/styled.svg";
import l from "../assets/skills/bootstrap.svg";
import m from "../assets/skills/vscode.svg";
import n from "../assets/skills/codepen.svg";



const Box = styled.div`
background-color: #1a1a1a;
  
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
`;

const Main = styled.div`
background-color: #fff;
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  width: 60vw;
  height: 70vh;
  margin-top: 40px;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const Img = styled.img`
    width:50px;
    margin: 5px;
    @media (max-width: 608px) {
        width: 30px;
}
`

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Develope width={40} height={40} /> Frontend Developer
          </Title>
          <Description>
            I value a business or brand for which I'm creating 
            websites with responsive and elegant JavaScript.
            Looking for an opportunity to grow my frontend development
            skills in an innovative environment.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
            <Img src={a} />
            <Img src={b} />
            <Img src={c} />
            <Img src={d} />
            <Img src={e} />
            <Img src={f} />
            <Img src={g} />
            <Img src={h} />
            <Img src={i} />
            <Img src={j} />
            <Img src={k} />
            <Img src={l} />
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>
            <Img src={m} />
            <Img src={n} />
            </p>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
