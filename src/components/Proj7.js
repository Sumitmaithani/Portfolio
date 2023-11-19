import React from "react";
import styled from "styled-components";

import fold from "../assets/work/fold.png";
import fold2 from "../assets/work/fold2.png";

const Container = styled.div`
  background-color: #1a1a1a;
  height: 100%;
  color: #fff;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  @media (max-width: 608px) {
    display: block;
  }
`;

const Div = styled.div`
  padding: 20px 40px;
`;

const H = styled.h1`
  padding: 20px 0;
`;

const P = styled.p`
  letter-spacing: 0.1em;
  word-spacing: 0.3em;
  line-height: 1.3em;
  width: 95%;
  display: flex;
  @media (max-width: 608px) {
    display: block;
  }
`;

const Img = styled.img`
  width: 80%;
  margin: auto;
  margin-top: 20px;
  @media (max-width: 608px) {
    display: block;
    width: 100%;
  }
`;

const Button = styled.button`
  background-color: #000;
  border: 1px solid #fff;
  color: white;
  padding: 15px 52px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5%;
  font-weight: 600;

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
  cursor: pointer;
  @media (max-width: 608px) {
  }
`;

const Btn = styled.div`
  margin: auto;
  width: 20%;
  align-items: center;
  padding: 40px;

  @media (max-width: 608px) {
    width: 65%;
  }
`;

export default function Proj7() {
  return (
    <Container>
      <Div className="proj">
        <H>Fold money</H>
        <P>This is landing page build using next.js & frammer-motion.</P>
        <Center>
          <Img src={fold} />
        </Center>
        <Center>
          <Img src={fold2} />
        </Center>

        <H>Tech stack used</H>
        <P>Next Js, Framer-motion</P>

        <a href="https://github.com/Sumitmaithani/fold.money" target="_blank">
          <Btn>
            <Button>Visit Link</Button>
          </Btn>
        </a>
      </Div>
    </Container>
  );
}
