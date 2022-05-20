import React from "react";
import styled from "styled-components";

//img
import jarvis1 from "../assets/work/jarvis (1).png";
import jarvis2 from "../assets/work/jarvis (2).png";
import jarvis3 from "../assets/work/jarvis (3).png";

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

const Proj2 = () => {
  return (
    <Container>
      <Div className="proj">
        <H>J.A.R.V.I.S</H>
        <P>
          J.A.R.V.I.S is a Artificial intelligence React news website using Alan
          AI. In this website you can talk with Jarvis and get information. It's
          AI speech recognition software that allows us to add voice
          capabilities to our website. It allows us to control absolutely
          everything in the website using our voice.
        </P>
        <P>
          <Img src={jarvis3} />
          <Img src={jarvis1} />
          <Img src={jarvis2} />
        </P>
        <H>Tech stack used</H>
        <P>React and Alan AI</P>
        <H>API's</H>
        <P>NewsApi, CoinDesk api</P>
        <H>Details</H>
        <P>
          Jarvis is a news website for responsing correctly you can ask
          following commands:{" "}
        </P>
        <H>Commands : </H>
        <ul>
          <li>
            <P>
              For casual talk you can say: "what is your name?" , "Where you
              live", "My name is [YOUR_NAME]" ..etc.{" "}
            </P>
            <li>
              <P>For News you can say :</P>
            </li>
            <li>
              <P>
                "Give me the news from [SOURCE]" : SOURCE-could be like "BBC
                news", "ABC news", "CNN news", "Buzzfeed"... etc.
              </P>
            </li>
            <li>
              <P>
                "What's up with [TERM]" : TERM-could be anything "Elon Musk",
                "Bitcoin price", or anything you want.
              </P>
            </li>
            <li>
              <P>
                "Show the latest news about [CATEGORY]" : CATEGORY-could be
                'business', 'entertainment', 'general', 'health', 'science',
                'sports', 'technology'.
              </P>
            </li>
            <li>
              <P>
                for calulation : "calculate a (plus/divide/minus/multiply) b"
              </P>
            </li>
          </li>
        </ul>
        <H>Features : </H>
          <ul>
              <li><P>It can read articles, for that you only say "yes" when jarvis ask you. </P></li>
          <li><P>
          You also say "Open article number [NUMBER]." it open article in new tab.
          </P></li> 
          <li><P>You can say "back" in search page and it back you in home screen.</P></li>
          </ul>
        <a href="https://jarvis2point0.netlify.app" target="_blank">
          <Btn>
            <Button>Visit website</Button>
          </Btn>
        </a>
      </Div>
    </Container>
  );
};

export default Proj2;
