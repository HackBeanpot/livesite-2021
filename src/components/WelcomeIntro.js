import React from "react";
import { Col, Container, Row} from "react-bootstrap";
import CocoaBean from "../assets/CocoaBean.svg";
import JellyBean from "../assets/JellyBean.svg";
import GardenBean from "../assets/GardenBean.svg";
import SoyBean from "../assets/SoyBean.svg";
import MagicBean from "../assets/MagicBean.svg";
import CabinCupLogo from "../assets/CabinCupLogo.svg";

import useAirtableAPI from "../hooks/api-hook";



const WelcomeIntro = () => {
  const { data, isLoading } = useAirtableAPI("appLHUnzVRxpj7Nx1", "Raffle");
  console.log(data);
  var cabinPoints = {
    "Jelly Beans": 0,
    "Cocoa Beans": 0,
    "Soy Beans": 0,
    "Garden Beans": 0,
    "Magic Beans": 0,
  }

  data.forEach(data => {
    var cabin = data.fields["Cabins"];
    cabinPoints[cabin] += 1;
  })
  console.log(cabinPoints);
  return (
    <Container>
      <Row>
        <Col md={6}>
          <div className="cabin-cup">
            <Row>
              <Col md={{span: 7, offset: 1}}>
                <div className="cabin-cup-intro">
                <h2>Cabin Cup</h2> 
                  <p>
                  Earn points for your cabin by bonding with you cabin mates 
                  and participating in cabin events! Use your points in the end 
                  to enter raffles for awesome prizes! 
                 </p>
                </div>
                <br/>
              </Col> 
              <Col className= "cabin-logo" md={{span: 3, offset: 1}}>
              <img src={CabinCupLogo} alt="Cabin cup logo"/>
              </Col>
            </Row>
            <Row>
              <Col md={{span: 3.5, offset: 3}}>
              <p className= "beanPoints">
              {cabinPoints["Jelly Beans"]}
              </p>
              <img src={JellyBean} alt="Jelly Bean"/>
              </Col>
              <Col md={3}>
              <p className= "beanPoints">
              {cabinPoints["Cocoa Beans"]}
              </p>
              <img src={CocoaBean} alt="Cocoa Bean"/>
              </Col>
            </Row>
            <Row>
              <Col md={{span: 3.5, offset: 1}}>
              <p className= "beanPoints">
              {cabinPoints["Garden Beans"]}
              </p>
              <img src={GardenBean} alt="Garden Bean"/>
              </Col>
              <Col md={3.5}>   
              <p className= "beanPoints">
              {cabinPoints["Soy Beans"]}
              </p>           
              <img src={SoyBean} alt="Soy Bean"/>
              </Col>
              <Col md={3.5}>
              <p className= "beanPoints">
              {cabinPoints["Magic Beans"]}
              </p>
              <img src={MagicBean} alt="Magic Bean"/>
              </Col>        
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
