import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { ResourceItems } from "../data/resources";

// Define the resource card object
const ResourceCard = ({ name, link, image, imageALT, color }) => (
  <Col md="4" lg="3" className="pt-3">
    <a href={link} target="_blank" rel="noreferrer" class="card-link">
      <Card
        className="resources__rounded-card"
        style={{ backgroundColor: color }}
      >
        <label className="resources__card-label"> {name} </label>
        <Card.Img
          variant="bottom"
          src={image}
          alt={imageALT}
          background-Color={color}
        />
      </Card>
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
          image={resource.image}
          imageAlt={resource.imageALT}
          color={resource.color}
        />
      ))}
    </Row>
  </Container>
);

export default Resources;
