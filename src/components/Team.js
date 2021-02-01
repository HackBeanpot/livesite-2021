import React, { useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import TeamPhoto from "../assets/team-photo.jpg";
import useAirtableAPI from "../hooks/api-hook";

// Define the team member card object
const MemberCard = ({ team, name, position, school, year, imageURL }) => (
  <Col md="3">
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
            <h1 className="font-weight-bold">
              Our Team
            </h1>
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
              About Us
            </h2>
            <p>
              This is a blub about the core team and why we love hackbeanpot and
              organizing the event! This is a blub about the core team and why
              we love hackbeanpot and organizing the event!
            </p>
            <p>
              This is a blub about how we love to connect with hackers during
              the event and would love to answer any questions and talk to as
              many people as possible throughout the event. We should encourage
              them to reach out to us and not hesitate to contact us for any
              reason during the duration of the event.
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
