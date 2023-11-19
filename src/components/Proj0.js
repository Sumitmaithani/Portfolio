import React from "react";
import styled from "styled-components";

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

const Proj0 = () => {
  return (
    <Container>
      <Div className="proj">
        <H>Planitar</H>
        <P>
          Planitar is a team management app built using React Native. It helps
          teams effectively manage tasks, assign work, and facilitate
          communication among team members. Planitar offers features such as
          task assignment, messaging, and other tools that can streamline team
          collaboration and productivity.
        </P>
        <Center>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Hh8la10Ql80?si=8Tx0KSeAHPfuvkQA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </Center>
        <H>Tech stack used</H>
        <P>React Native, Redux, Node.js, Express.js, MongoDB, Twilio</P>
        <H>
          Why are we different from the rest of all available team management
          apps?
        </H>
        <P>
          • We take a unique approach to user onboarding by allowing you to
          invite team members through your contacts. This not only makes it
          incredibly easy to join a team but also eliminates fake and spoof
          accounts. By using your real contacts, we ensure that every member is
          genuine, promoting a safe and harassment-free environment. It's all
          about connecting with your trusted network, fostering a personal
          connection that truly matters. <br />
          <br />• No Logout Feature: In a world where instant gratification
          often leads to impulsive decisions, we've embraced the 'WhatsApp
          effect.' Our app doesn't offer a logout feature. This intentional
          choice is designed to keep you connected and engaged. It not only
          reduces the prevalence of fake accounts but also creates a sense of
          commitment. When you can't simply log out and disappear, you'll think
          ten times before considering deleting the app. We believe that
          fostering strong connections and meaningful collaboration is what
          truly sets us apart.
        </P>
        <H>Planitar App Features:</H>
        <P
          style={{ textDecoration: "underline", fontWeight: 800, fontSize: 18 }}
        >
          1. Task Management:
        </P>
        <P>
          • Efficiently manage tasks within your team. <br />
          • Assign tasks to specific team members. <br />
          • Track the progress of tasks and projects.
          <br />
        </P>
        <br />
        <P
          style={{ textDecoration: "underline", fontWeight: 800, fontSize: 18 }}
        >
          2. Communication Tools:
        </P>
        <P>
          • In-app messaging system for seamless communication. <br />•
          Real-time updates and notifications to keep everyone in the loop.
          <br />
          • Foster collaboration through easy and quick communication.
          <br />
        </P>
        <br />
        <P
          style={{ textDecoration: "underline", fontWeight: 800, fontSize: 18 }}
        >
          3. User Onboarding:
        </P>
        <P>
          • Unique user onboarding process via contacts. <br />
          • Invite team members directly from your phone contacts. <br />
          • Ensures genuine team members and prevents fake or spoof accounts.
          <br />
        </P>
        <br />
        <P
          style={{ textDecoration: "underline", fontWeight: 800, fontSize: 18 }}
        >
          4. Safety and Harassment Prevention:
        </P>
        <P>
          • Promotes a safe and harassment-free environment. <br />
          • By connecting with real contacts, the app ensures the authenticity
          of team members. <br />
        </P>
        <br />
        <P
          style={{ textDecoration: "underline", fontWeight: 800, fontSize: 18 }}
        >
          5. Tech Stack:
        </P>
        <P>
          • Developed using React Native for a cross-platform mobile experience.{" "}
          <br />
          • State management implemented with Redux for efficient data handling.
          <br />
          • Backend powered by Node.js and Express.js for robust server-side
          functionality.
          <br />
          • MongoDB used as the database for storing app data. <br />
          • Integration of Twilio for additional communication features. <br />
        </P>
        <br />
        <P
          style={{ textDecoration: "underline", fontWeight: 800, fontSize: 18 }}
        >
          6. No Logout Feature:
        </P>
        <P>
          • Intentional exclusion of a logout feature. <br />
          • Designed to keep users connected and engaged at all times. <br />
          • Aims to create a sense of commitment among users. <br />
          • Fosters strong connections and meaningful collaboration.
          <br />
        </P>
        <br />
        <P
          style={{ textDecoration: "underline", fontWeight: 800, fontSize: 18 }}
        >
          7. WhatsApp Effect:
        </P>
        <P>
          • Inspired by the 'WhatsApp effect' to promote continuous engagement.
          <br />• Reduction in fake accounts due to the absence of a logout
          option. <br />
          • Encourages users to think twice before considering app deletion.
          <br />
        </P>
        <br />
        <P
          style={{ textDecoration: "underline", fontWeight: 800, fontSize: 18 }}
        >
          8. Commitment and Engagement:
        </P>
        <P>
          • Users are encouraged to stay connected for better collaboration.
          <br />
          • Builds a sense of commitment to the team and ongoing projects.
          <br />
        </P>
        <br />
        <P
          style={{ textDecoration: "underline", fontWeight: 800, fontSize: 18 }}
        >
          9. Personal Connection:
        </P>
        <P>
          • Emphasis on connecting with your trusted network. <br />
          • Fosters a personal connection among team members.
          <br />
          • Prioritizes relationships that truly matter for effective teamwork.
          <br />
        </P>

        <a href="https://github.com/ProtoDrive/PushNote" target="_blank">
          <Btn>
            <Button>Visit Link</Button>
          </Btn>
        </a>
      </Div>
    </Container>
  );
};

export default Proj0;
