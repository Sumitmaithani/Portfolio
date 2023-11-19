import React from "react";
import styled from "styled-components";

import Hdoc1 from "../assets/work/hdocwork.png";
import Hdoc2 from "../assets/work/hdocwork2.png";

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

const Proj6 = () => {
  return (
    <Container>
      <Div className="proj">
        <H>HDOC</H>
        <P>
          HDOC stands for "Hundred Days of Code". It is a gamified learning
          experience that helps users learn about data structures and algorithms
          by covering a different topic each day for 100 days. The app includes
          theory, important questions, and quizzes for each topic and has a
          beautiful UI/UX design to make learning fun and engaging.
        </P>

        <Center>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SOMtBLFMrt8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </Center>
        <Center>
          <Img src="https://user-images.githubusercontent.com/86047367/273393327-095e88c9-e663-4027-a503-1dcc9dc6ebfd.png" />
        </Center>
        <Center>
          <Img src={Hdoc1} />
        </Center>
        <Center>
          <Img src={Hdoc2} />
        </Center>

        <H>Tech stack used</H>
        <P>React Native, Figma, lottie animations, Google Authentication</P>

        <H>Details</H>
        <P>
          Are you ready to take your data structure and algorithm skills to the
          next level? Introducing HDOC - Hundred Days of Code - the gamified app
          that helps you learn data structure and algorithm topics in just 100
          days! <br />
          With HDOC, you'll get a new topic to learn each day, complete with
          theory, important questions, and a quiz to test your knowledge. Our
          beautiful UI/UX makes learning a breeze, and our gamification elements
          will keep you motivated and engaged throughout the 100-day journey.
          <br />
          Whether you're a beginner looking to build a strong foundation or an
          experienced developer looking to level up your skills, HDOC is the
          perfect app for you. Join our community of learners today and take the
          first step towards mastering data structure and algorithm topics.
          <br />
          Download HDOC now and start your Hundred Days of Code journey today!
          <br />
        </P>

        <a href="https://github.com/Sumitmaithani/HDOC" target="_blank">
          <Btn>
            <Button>Visit Link</Button>
          </Btn>
        </a>
      </Div>
    </Container>
  );
};

export default Proj6;
