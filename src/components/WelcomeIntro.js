import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const WelcomeIntro = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <div className="cabin">Cabin Intro</div>
        </Col>
        <Col>
          <h2 className="font-weight-bold">Welcome to HackBeanpot 2021!</h2>
          <p className="introText">
            At HackBeanpot 2021, we aim to create a welcoming “campsite” by
            emphasizing our focus on exploration, creativity, and respect for
            the world around us! Camping represents community, sustainability,
            and the goal to help each other thrive. <br />
            <br />
            Hackers can expect to put their resourcefulness to the test, while
            sharing stories, and learning new skills from peers. So whether
            you're a seasoned hackathon-goer, an
            ‘I-have-never-written-a-line-of-code’ beginner, or someone in
            between, we’re excited for you to embark on this adventure with us!{" "}
            <br />
            <br />
            Learn more at&nbsp;
            <a
              className="introText__link"
              href={"https://hackbeanpot.com"}
              target="_blank"
              rel="noreferrer"
            >
              www.hackbeanpot.com
            </a>
            <br />
            <br />
          </p>
          <div>
            <a
              className="btn primary-cta mr-3 mt-2"
              // TODO: Change this link to the actual slack link when it's available
              href="#coming-soon"
              target="_blank"
              rel="noreferrer"
            >
              Join our Slack
            </a>
            <a
              className="btn primary-cta mt-2"
              // TODO: Check that this is the correct link once gathertown is set up
              href="https://gather.town/hackbeanpot2021"
              target="_blank"
              rel="noreferrer"
            >
              Visit the Hacker Lounge
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomeIntro;
