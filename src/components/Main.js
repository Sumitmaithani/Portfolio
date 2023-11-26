import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import Socialcons from "../subComponents/SocialIcons";
import YingYang from "../assets/svg/yingyang.svg";
import { keyframes } from "styled-components";
import Intro from "./Intro";
import { motion } from "framer-motion";
import video from "../assets/Images/video.mp4";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", snas-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: #fff;
  position: absolute;
  top: 2.5rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 3;
`;
const BLOG = styled(NavLink)`
  color: #fff;
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

const WORK = styled(NavLink)`
  color: #fff;
  position: absolute;
  top: 50%;
  left: 2.7rem;
  top: 48%;
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  z-index: 1;
`;

const SKILLS = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  z-index: 1;
`;

const rotate = keyframes`
from{
  transform: rotate(0);
}
to{
  transform: rotate(360deg);
}
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "85%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const OrangeDiv = styled.div`
  position: absolute;
  background-color: #ea5027;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;

  @media (max-width: 608px) {
    right: 0%;
    width: ${(props) => (props.click ? "100%" : "0%")};
    height: ${(props) => (props.click ? "50%" : "0%")};
    transition: height 1s ease, width 1s ease 1s;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  background-color: #000;
  left: 50%;
  bottom: 0%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  transition: height 0.5s ease, width 1s ease 0.5s;
  z-index: 1;

  @media (max-width: 608px) {
    left: 0%;
    width: ${(props) => (props.click ? "100%" : "0%")};
    height: ${(props) => (props.click ? "50%" : "0%")};
    transition: height 1s ease, width 1s ease 1s;
  }
`;

const Video = styled.video`
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Main = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <Video
        id="player-overlay"
        muted
        loop
        autoPlay
        video="100%"
        style={{ width: "100%", height: "100%" }}
      >
        <source src={video} type="video/mp4" />
      </Video>
      <OrangeDiv click={click} />
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent />
        <Socialcons theme={click ? "dark" : "light"} />

        <Center click={click}>
          {/* <YinYang onClick={ () => handleClick() } width={click ? 100 : 200} height={click ? 100 : 200} fill='currentColor' /> */}
          <img
            src={YingYang}
            onClick={() => handleClick()}
            width={click ? 80 : 200}
            height={click ? 100 : 200}
          />
          <span style={{ color: "#fff" }}>Click here</span>
        </Center>

        <Contact
          target="_blank"
          to={{ pathname: "mailto:sumitmaithani824@gmail.com" }}
        >
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Say hi..
          </motion.h2>
        </Contact>
        <BLOG to="/work">
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Work
          </motion.h2>
        </BLOG>
        <WORK to="/crafts">
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Crafts
          </motion.h2>
        </WORK>
        <BottomBar>
          <ABOUT to="/about">
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              About.
            </motion.h2>
          </ABOUT>
          <SKILLS to="/skills">
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              My Skills.
            </motion.h2>
          </SKILLS>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
