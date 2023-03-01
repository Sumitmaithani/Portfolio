import React from "react";
import { NavLink } from "react-router-dom";
import { Github, Twitter, Facebook, YouTube } from "../components/AllSvgs";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";
import link from "../assets/skills/link.png";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.35rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: #fff;
`;

const Socialcons = props => {
  return (
    <Icons>
      <div>
        <a href="https://github.com/Sumitmaithani" target="_blank">
          <Github width={25} height={25} fill="white" />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/maithanisumit1" target="_blank">
          <Twitter width={25} height={25} fill="white" />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/sumit-maithani-103119228/" target="_blank">
          <Facebook width={25} height={25} fill="white" />
        </a>
      </div>

      <Line color={props.theme} />
    </Icons>
  );
};

export default Socialcons;
