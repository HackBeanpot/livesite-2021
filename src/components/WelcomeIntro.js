import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Cabin1 from "../assets/Cabin1.svg";
import Cabin2 from "../assets/Cabin2.svg";
import Cabin3 from "../assets/Cabin3.svg";
import Cabin4 from "../assets/Cabin4.svg";
import '../styles/cabincup.scss';


const WelcomeIntro = () => {
  return (
    <Container fluid className="mt-5">
      <Row>
        <Col>
          <div className="cabin-cup">
            <Row className= "mt-5 pt4">
              <Col lg="4">
                <h2>Cabin Cup Standings</h2> 
                <br />
                <div className="cabin-cup-intro">
                  <p className= "cabin-intro">
                  Earn points for your cabin by bonding with you cabin mates 
                  and participating in cabin events! Use your points in the end 
                  to enter raffles for awesome prizes! 
                 </p>
                  <a
                  className="cabin-info"
                  href={"https://hackbeanpot.com"}>
                  learn more...
                  </a>
                  <br />
                  <br />
                  <Button className="score-sheet"> Official Score Sheet </Button>
                </div>
              </Col>  
              <Col lg="4">
                <img className="cabins" src={Cabin1} alt="cabin1 icon" />
                <img className="cabins" src={Cabin3} alt="cabin3 icon" />
              </Col>
              <Col lg="3">
                <img className="cabins" src={Cabin2} alt="cabin2 icon" />
                <img className="cabins" src={Cabin4} alt="cabin4 icon" />
              </Col>
              
              {/* <Col>
             <img src={Cabin5} alt="cabin5 icon" />
              </Col> */}
              
            </Row>
            </div>
        </Col>
        
        <Col>
          <h1 className="font-weight-bold">Welcome to HackBeanpot 2021!</h1>
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
          <div className="slack">
            <p className="slack__title">SLACK WORKSPACE</p>
            <a
              className="slack__link"
              // TODO: Change this link to the actual slack link when it's available
              href={"https://hackbeanpot.com"}
              target="_blank"
              rel="noreferrer"
            >
              slackbeanpot2021.slack.com
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomeIntro;
