import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

// Define the data needed for the resources cards
const resources = [
    {
        name: 'HACKER WELCOME GUIDE',
        link: 'http://google.com',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Blank_flag_large.PNG'
    },
    {
        name: 'DEMO GUIDE',
        link: 'http://google.com',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Blank_flag_large.PNG'
    },
    {
        name: 'PROJECT SUBMISSION RULES',
        link: 'http://google.com',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Blank_flag_large.PNG'
    },
    {
        name: 'JUDGING PROCESS GUIDE',
        link: 'http://google.com',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Blank_flag_large.PNG'
    },
    {
        name: 'BEGINNER RESOURCES',
        link: 'http://google.com',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Blank_flag_large.PNG'
    }
]

// Define the resource card object
const ResourceCard = ({ name, link, imageURL }) => (
  <Col md="4">
    <a href={link}>
      <Card className="resources__rounded-card">
        <Card.Img variant="top" src={imageURL} alt="Resource card" className="resources__rounded-card"/>
      </Card>
      <label className="resources__card-label"> {name} </label>
    </a>
  </Col>
);


const Resources = () => (
  <Container className="mt-5">
    <Row>
      <Col>
        <h1 id="resources" className="font-weight-bold">Resources</h1>
      </Col>
    </Row>
    <Row>
        { resources.map(resource =>
          <ResourceCard name={resource.name} link={resource.link} imageURL={resource.imageURL}/>)}
    </Row>
  </Container>
);

export default Resources;