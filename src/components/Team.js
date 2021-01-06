import React, { useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import TeamPhoto from '../assets/team-photo.jpg';
import useAirtableAPI from '../hooks/api-hook';

// Define the team member card object 
const MemberCard = ({ team, name, position, school, year, imageURL }) => (
  <Col md="3">
    <Card className="teams__card">
      <Card.Img variant="top" src={imageURL[0].url} alt="Member profile photo" />
      <Card.Body>
        <Card.Text>
          <b>{ name }</b><br/>
          { year } Year, { school } <br/>
          { position }
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

const Team = () => {
  const { data, isLoading } = useAirtableAPI('appUyAIdcn5cxtJRf', 'team');
  const [team, setTeam] = useState('leadership');

  return (
  <div>
  <Container className="mt-5">
    <Row>
      <Col lg="6">
        <h1 id="team" className="font-weight-bold">Our Team</h1>
      </Col>
    </Row>
    <Row>
      <Col lg="6">
        {/* a temporary image which will eventually be replaced with the hype video */}
        <Card.Img className="img-fluid rounded"  src={TeamPhoto} alt="HackBeanpot Core Team Photo" />
      </Col>
      <Col className="ml-3">
        <h2 id="team" className="pt-5">About Us</h2>
        <p>
          This is a blub about the core team and why we love hackbeanpot and organizing the event! 
          This is a blub about the core team and why we love hackbeanpot and organizing the event!
        </p>
        <p>
          This is a blub about how we love to connect with hackers during the event and would love 
          to answer any questions and talk to as many people as possible throughout the event. 
          We should encourage them to reach out to us and not hesitate to contact us for any reason 
          during the duration of the event.
        </p>
      </Col>
    </Row>
  </Container>
  <Container fluid className="mt-5 teams">
    <Row className="mt-5 pt-4">
      <div className="mx-auto">
        <div className="">
          <button className="btn btn-light teams__button" type="button" onClick={() => setTeam('leadership')}>
            Leadership Team
          </button>
          <button className="btn btn-light teams__button" type="button" onClick={() => setTeam('design')}>
            Design Team
          </button>
          <button className="btn btn-light teams__button" type="button" onClick={() => setTeam('tech')}>
            Tech Team
          </button>
          <button className="btn btn-light teams__button" type="button" onClick={() => setTeam('socialOutreach')}>
            Social/Outreach Team
          </button>
          <button className="btn btn-light teams__button" type="button" onClick={() => setTeam('sponsorship')}>
            Sponsorship Team
          </button>
        </div>
      </div>
    </Row>
    <Container>
      <Row className="py-3">
          {isLoading && <Spinner animation='border' variant='primary' /> /* TODO import custom styled spinner component*/}
          {!data.length && <div>Nothing to see here...</div> /* TODO handle empty array in case of API error (or if its actually empty for any reason)*/}
          {data.map((member) => (
            member.fields.team === team && <MemberCard {...member.fields} />
          ))}
      </Row>
    </Container>
  </Container>
  </div>
  );
};

export default Team;