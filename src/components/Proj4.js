import React from "react";
import styled from "styled-components";

//img
import port1 from "../assets/work/port (1).png";
import port2 from "../assets/work/port (2).png";
import port3 from "../assets/work/port (3).png";
import port4 from "../assets/work/port (4).png";

const Container = styled.div`
  background-color: #1a1a1a;
  height: 100% ;
  color: #fff;
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
  width: 30%;
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

  &:hover{
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
  cursor: pointer;
  @media (max-width: 608px) {
}
`

const Btn = styled.div`
margin: auto;
width: 20%;
align-items: center;
padding: 40px;


@media (max-width: 608px) {
width: 65%;
}
`

const Proj4 = () => {
  return (
    <Container>
      <Div className="proj">
        <H>Portfolio</H>
        <P>
        I value a business or brand for which I'm creating websites with responsive and elegant JavaScript. Looking for an opportunity to grow my frontend development skills in an innovative environment.
        </P>
        <br />
        <P> 
          <Img src={port1} />
          <Img src={port2} />
          <Img src={port4} />
        </P>
        <br />
        <H>About Project :</H>
        <P>
        This portfolio is created using framer-motion for cool transitions and animation. By using advanced css properties to make website design more professional.</P> 
          
          <a href="https://sumitmaithani.netlify.app" target="_blank">
          <Btn>
          <Button>Visit website</Button>
          </Btn>
          </a>
      </Div>
    </Container>
  );
};

export default Proj4;
