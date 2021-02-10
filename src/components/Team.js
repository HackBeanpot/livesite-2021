import React, { useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import TeamPhoto from "../assets/team-photo.jpg";
import useAirtableAPI from "../hooks/api-hook";

// Define the team member card object
const MemberCard = ({ team, name, position, school, year, imageURL }) => (
  <Col lg="2" md="4" sm="6">
    <Card>
      <Card.Img
        variant="top"
        src={imageURL[0].url}
        alt="Member profile photo"
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {year} Year, {school} <br />
          {position}
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

const Team = () => {
  const { data, isLoading } = useAirtableAPI("appUyAIdcn5cxtJRf", "team");
  const [team, setTeam] = useState("leadership");

  return (
    <div>
      <Container id="team" className="mt-5">
        <Row>
          <Col lg="6">
            <h1 className="font-weight-bold">Our Team</h1>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            {/* a temporary image which will eventually be replaced with the hype video */}
            <Card.Img
              className="img-fluid rounded"
              src={TeamPhoto}
              alt="HackBeanpot Core Team Photo"
            />
          </Col>
          <Col className="ml-3">
            <h2 id="team" className="pt-5">
              Meet the team behind HackBeanpot
            </h2>
            <p>
              Hey, campers! We are so excited to bring you on this virtual camping adventure this 
              year for HackBeanpot 2021. The HackBeanpot Core Team works behind the scenes all 
              year long to make everything come together for this special event. We are a group 
              of 20 driven students from universities in the Boston area who aim to make technical 
              experience and knowledge accessible to anyone who's interested. Meet the different 
              teams - Design, Social Media &amp; Outreach, Sponsorship, and Tech - that help make this 
              event happen! Also, we’d love if you were able to answer our feedback form below to 
              help us in improving this event for future hackers!
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="mt-5 teams">
        <Row className="mt-5 pt-4">
          <div className="mx-auto">
            <button
              className={`btn btn-light teams__button ${
                team === "leadership" ? "selected" : ""
              }`}
              type="button"
              onClick={() => setTeam("leadership")}
            >
              Leadership Team
            </button>
            <button
              className={`btn btn-light teams__button ${
                team === "design" ? "selected" : ""
              }`}
              type="button"
              onClick={() => setTeam("design")}
            >
              Design Team
            </button>
            <button
              className={`btn btn-light teams__button ${
                team === "tech" ? "selected" : ""
              }`}
              type="button"
              onClick={() => setTeam("tech")}
            >
              Tech Team
            </button>
            <button
              className={`btn btn-light teams__button ${
                team === "socialOutreach" ? "selected" : ""
              }`}
              type="button"
              onClick={() => setTeam("socialOutreach")}
            >
              Social/Outreach Team
            </button>
            <button
              className={`btn btn-light teams__button ${
                team === "sponsorship" ? "selected" : ""
              }`}
              type="button"
              onClick={() => setTeam("sponsorship")}
            >
              Sponsorship Team
            </button>
          </div>
        </Row>
        <Container>
          <Row className="py-3">
            <Col lg="1"></Col>
            {
              isLoading && (
                <Spinner animation="border" variant="primary" />
              ) /* TODO import custom styled spinner component*/
            }
            {
              !data.length && !isLoading && (
                <div>Nothing to see here...</div>
              ) /* TODO handle empty array in case of API error (or if its actually empty for any reason)*/
            }
            {data.map(
              (member) =>
                member.fields.team === team && <MemberCard {...member.fields} />
            )}
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Team;
