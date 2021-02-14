import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CocoaBean from "../assets/CocoaBean.svg";
import JellyBean from "../assets/JellyBean.svg";
import GardenBean from "../assets/GardenBean.svg";
import SoyBean from "../assets/SoyBean.svg";
import MagicBean from "../assets/MagicBean.svg";
import CabinCupLogo from "../assets/CabinCupLogo.svg";

import useAirtableAPI from "../hooks/api-hook";

const WelcomeIntro = () => {
  const { data } = useAirtableAPI("appLHUnzVRxpj7Nx1", "Raffle");
  var cabinPoints = {
    "Jelly Beans": 0,
    "Cocoa Beans": 0,
    "Soy Beans": 0,
    "Garden Beans": 0,
    "Magic Beans": 0,
  };

  data.forEach((data) => {
    var cabin = data.fields["Cabins"];
    cabinPoints[cabin] += 1;
  });
  return (
    <Container>
      <Row>
        <Col lg={6} className="cabin-cup">
            <Row>
              <Col md={{ span: 7, offset: 1 }}>
                <div className="cabin-cup-intro">
                  <h2>Cabin Cup</h2>
                  <p>
                    Earn points for your cabin by bonding with you cabin mates
                    and participating in cabin events! Use your points in the
                    end to enter raffles for awesome prizes!
                  </p>
                </div>
                <br />
              </Col>
              <Col className="cabin-logo" md={{ span: 3, offset: 1 }}>
                <img src={CabinCupLogo} alt="Cabin cup logo" />
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col xs="auto" className="cabin-wrapper">
                  <p className="bean-points">{cabinPoints["Jelly Beans"]}pts </p>
                  <img src={JellyBean} alt="Jelly Bean" className="cabin-image"/>
              </Col>
              <Col xs="auto" className="cabin-wrapper">
                  <p className="bean-points">{cabinPoints["Cocoa Beans"]}pts</p>
                  <img src={CocoaBean} alt="Cocoa Bean" className="cabin-image"/>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md="1"></Col>
              <Col xs="auto" className="cabin-wrapper">
                  <p className="bean-points">{cabinPoints["Garden Beans"]}pts</p>
                  <img src={GardenBean} alt="Garden Bean" className="cabin-image"/>
              </Col>
              <Col xs="auto" className="cabin-wrapper">
                  <p className="bean-points">{cabinPoints["Soy Beans"]}pts</p>
                  <img src={SoyBean} alt="Soy Bean" className="cabin-image"/>
              </Col>
              <Col xs="auto" className="cabin-wrapper">
                  <p className="bean-points">{cabinPoints["Magic Beans"]}pts</p>
                  <img src={MagicBean} alt="Magic Bean" className="cabin-image"/>
              </Col>
            </Row>
        </Col>

        <Col className="pt-5">
          <h2>Welcome to HackBeanpot 2021!</h2>
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

