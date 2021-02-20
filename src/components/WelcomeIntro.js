import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CocoaBean from "../assets/CocoaBean.svg";
import JellyBean from "../assets/JellyBean.svg";
import GardenBean from "../assets/GardenBean.svg";
import SoyBean from "../assets/SoyBean.svg";
import MagicBean from "../assets/MagicBean.svg";
import CabinCupLogo from "../assets/CabinCupLogo.svg";
import Airtable from "airtable";

const WelcomeIntro = () => {
  const [data, setData] = useState({
    "Jelly Beans": 0,
    "Cocoa Beans": 0,
    "Soy Beans": 0,
    "Garden Beans": 0,
    "Magic Beans": 0,
  });

  const cabinPoints = {
    "Jelly Beans": 0,
    "Cocoa Beans": 0,
    "Soy Beans": 0,
    "Garden Beans": 0,
    "Magic Beans": 0,
  };

  var base = new Airtable({
    apiKey: process.env.REACT_APP_AIRTABLE_KEY,
  }).base("appLHUnzVRxpj7Nx1");

  base("Raffle")
    .select({
      // Selecting the first 3 records in Grid view:
      view: "Grid view",
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
        records.forEach(function (record) {
          const cabin = record.fields["Cabins"];
          cabinPoints[cabin] += 1;
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        } else {
          setData(cabinPoints);
        }
      }
    );

  return (
    <Container>
      <Row>
        <Col lg={6} className="cabin-cup">
          <Row>
            <Col md={{ span: 7, offset: 1 }}>
              <h2>Cabin Cup</h2>
              <p>
                Earn points for your cabin by bonding with your cabin mates and
                participating in cabin events! Use your points in the end to
                enter raffles for awesome prizes!
              </p>
              <br />
            </Col>
            <Col className="cabin-cup__logo" md={{ span: 3, offset: 1 }}>
              <img src={CabinCupLogo} alt="Cabin cup logo" />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs="auto" className="px-0">
              <p className="cabin-cup__points">{data["Jelly Beans"]}pts </p>
              <img
                src={JellyBean}
                alt="Jelly Bean"
                className="cabin-cup__bean"
              />
            </Col>
            <Col xs="auto" className="px-0">
              <p className="cabin-cup__points">{data["Cocoa Beans"]}pts</p>
              <img
                src={CocoaBean}
                alt="Cocoa Bean"
                className="cabin-cup__bean"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs="auto" className="px-0">
              <p className="cabin-cup__points">{data["Garden Beans"]}pts</p>
              <img
                src={GardenBean}
                alt="Garden Bean"
                className="cabin-cup__bean"
              />
            </Col>
            <Col xs="auto" className="px-0">
              <p className="cabin-cup__points">{data["Soy Beans"]}pts</p>
              <img src={SoyBean} alt="Soy Bean" className="cabin-cup__bean" />
            </Col>
            <Col xs="auto" className="px-0">
              <p className="cabin-cup__points">{data["Magic Beans"]}pts</p>
              <img
                src={MagicBean}
                alt="Magic Bean"
                className="cabin-cup__bean"
              />
            </Col>
          </Row>
        </Col>

        <Col className="mt-5 pl-5">
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
              href="https://slackbeanpot2021.slack.com"
              target="_blank"
              rel="noreferrer"
            >
              Visit our Slack
            </a>
            <a
              className="btn primary-cta mt-2"
              href="https://gather.town/app/yX70iHwE8AAy7y0K/campbeanpot"
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
