import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { ResourceItems } from "../data/resources";

// Define the resource card object
const ResourceCard = ({ name, link, imageURL }) => (
  <Col md="4">
    <a href={link} target="_blank" rel="noreferrer">
      <Card className="resources__rounded-card">
        <Card.Img
          variant="top"
          src={imageURL}
          alt="Resource card"
          className="resources__rounded-card"
        />
      </Card>
      <label className="resources__card-label"> {name} </label>
    </a>
  </Col>
);

const Resources = () => (
  <Container id="resources" className="mt-5">
    <Row>
      <Col>
        <h1>Resources</h1>
      </Col>
    </Row>
    <Row>
      {ResourceItems.map((resource) => (
        <ResourceCard
          key={resource.name}
          name={resource.name}
          link={resource.link}
          imageURL={resource.imageURL}
        />
      ))}
    </Row>
  </Container>
);

export default Resources;
