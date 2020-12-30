import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import TeamPhoto from '../assets/team-photo.jpg';

const teamData = [
  {
    team: 'tech',
    name: 'Sarah Wessel',
    position: 'tech lead',
    school: 'Northeastern',
    year: '5th',
    imageURL:  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.mercola.com%2FImageServer%2FPublic%2F2018%2FOctober%2FFB%2Fdog-breeds-for-active-people-fb.jpg&f=1&nofb=1'
  },
  {
    team: 'sponsib',
    name: 'Daniel',
    position: 'sponsib x tech',
    school: 'Boston University',
    year: '3rd',
    imageURL:  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.mercola.com%2FImageServer%2FPublic%2F2018%2FOctober%2FFB%2Fdog-breeds-for-active-people-fb.jpg&f=1&nofb=1'
  }
];

// Define the team member card object 
const MemberCard = ({ team, name, position, school, year, imageURL }) => (
  <Col md="3">
    <Card className="teams__card">
      <Card.Img variant="top" src={imageURL} alt="Mentor profile photo" />
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

const Team = () => (
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
          <button className="btn btn-light teams__button" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Leadership Team
          </button>
          <button className="btn btn-light teams__button" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Design Team
          </button>
          <button className="btn btn-light teams__button" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Tech Team
          </button>
          <button className="btn btn-light teams__button" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Social/Outreach Team
          </button>
          <button className="btn btn-light teams__button" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Sponsorship Team
          </button>
        </div>
      </div>
    </Row>
    <Container>
      <Row className="py-3">
          { teamData.map(member => <MemberCard {...member} /> )}
      </Row>

    </Container>
  </Container>
  </div>
);

export default Team;