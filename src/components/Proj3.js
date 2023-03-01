import React from "react";
import styled from "styled-components";

//img
import mango1 from "../assets/work/mango (1).png";
import mango2 from "../assets/work/mango (2).png";
import mango3 from "../assets/work/mango (3).png";
import mango4 from "../assets/work/mango (4).png";
import mango5 from "../assets/work/mango (5).png";
import mango6 from "../assets/work/mango (6).png";

const Container = styled.div`
  background-color: #1a1a1a;
  height: 100%;
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

const Proj3 = () => {
  return (
    <Container>
      <Div className="proj">
        <H>Mango</H>
        <P>
        Mango is a ecommerce website UI design with a Admin pannel with all functionality by using React.js, styled-components and recharts.
        </P>
        <P>
          <Img src={mango2} />
          <Img src={mango3} />
          <Img src={mango4} />
        </P>
        <P>
          <Img src={mango5} />
          <Img src={mango6} />
          <Img src={mango1} />
        </P>
        <H>Tech stack used</H>
        <P>
        React, recharts, react-dom, react-router-dom, material UI</P> 
          
          <H>Details</H> 
          <P>Mango is a multipage website which made with advanced React best practices, Folder structuring, UI creation using MUI design, creating Charts using rechart and having a admin panel also.</P>
          
          <a href="https://github.com/Sumitmaithani/Mango" target="_blank">
          <Btn>
          <Button>Visit website</Button>
          </Btn>
          </a>
      </Div>
    </Container>
  );
};

export default Proj3;
