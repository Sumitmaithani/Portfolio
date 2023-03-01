import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #1a1a1a;
  height: 100%;
  color: #fff;
`;

const Div = styled.div`padding: 20px 40px;`;

const H = styled.h1`padding: 20px 0;`;

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

const Proj5 = () => {
  return (
    <Container>
      <Div className="proj">
        <H>InHouse</H>
        <P>
          InHouse is a platform that aims to solve the problem of collaborating
          on code and code-pairing remotely. It offers a way for developers to
          work on code together in real-time, similar to using a tool like
          Visual Studio Code, but with a focus on being lightweight and easy to
          use. It also includes text messaging functionality, which can be
          helpful for communicating and coordinating during a code-pairing
          session.
        </P>
        <P>
          <Img src="https://user-images.githubusercontent.com/86047367/211190376-0eff44f1-18af-4ddd-918a-746ff488c45c.png" />
          <Img src="https://user-images.githubusercontent.com/86047367/211190380-00e101bf-7b50-4092-8eed-0f24f0e0f214.png" />
          <Img src="https://user-images.githubusercontent.com/86047367/211190390-1d533087-2f29-4e62-b06a-5fff46216c06.png" />
        </P>
        <P>
          <Img src="https://user-images.githubusercontent.com/86047367/211190392-4a5d4bd6-c296-4789-a6c9-af922d249540.png" />
          <Img src="https://user-images.githubusercontent.com/86047367/211190526-91715dcb-c0ef-4f85-98b9-c7e02c9c8e42.png" />
          <Img src="https://user-images.githubusercontent.com/86047367/211190396-d2e1a5e2-e0cc-4786-b419-164c4bac16a9.png" />
        </P>
        <H>Tech stack used</H>
        <P>
          React, Redux, codemirror, Node.js, Express.js, MongoDB, Socket.IO,
          JWT, CI/CD, Twilio
        </P>
        <H>Details</H>
        <P>
          Metaverse is a multipage website which made with advanced React best
          practices, state management using Redux toolkit, UI creation using Ant
          design, creating Charts using chartjs and fetching data from multiple
          sources API's.{" "}
        </P>
        <H>Features : </H>
        <ul>
          <li>
            <P>
              Difficulties collaborating remotely: InHouse makes it easier for
              developers to collaborate on code and work on projects together,
              even when they are not in the same physical location. It's a great
              way to overcome the challenges of working remotely and stay
              connected with team members.
            </P>
            <li>
              <P>
                Poor connectivity issues: InHouse has low bandwidth
                requirements, which means it can be used even on connections
                with low speeds. This can be especially helpful for developers
                who don't have access to a high-speed internet connection or who
                experience connectivity issues.
              </P>
            </li>
            <li>
              <P>
                Distractions and cluttered interfaces: InHouse has a more
                focused and streamlined interface compared to other code-pairing
                tools, which can help reduce distractions and make it easier to
                use. This can be particularly helpful when working on complex
                projects and trying to stay focused.
              </P>
            </li>
            <li>
              <P>
                Limited collaboration options: InHouse allows developers to
                create both public and private rooms, which gives them the
                flexibility to choose who they want to collaborate with. It also
                supports multiple users, which makes it easier for teams to work
                together and share ideas.
              </P>
            </li>
          </li>
        </ul>
        <a href="https://github.com/Sumitmaithani/InHouse" target="_blank">
          <Btn>
            <Button>Visit website</Button>
          </Btn>
        </a>
      </Div>
    </Container>
  );
};

export default Proj5;
