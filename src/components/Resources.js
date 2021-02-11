import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { ResourceItems } from "../data/resources";

// Define the resource card object
const ResourceCard = ({ name, link, image, imageALT }) => (
  <Col md="3">
       <a href={link} target="_blank" rel="noreferrer" class="card-link">
      <Card className="resources__rounded-card">
         <label className="resources__card-label"> {name} </label>
        <Card.Img
          variant="bottom"
          src={image}
          alt={imageALT}
          className="resources__rounded-card"
        />
      </Card>
      
    </a>
  </Col>
);

const Resources = () => (
  <Container id="resources" className="mt-5">
    <Row>
      <Col>
        <h1 className="font-weight-bold">Resources</h1>
      </Col>
    </Row>
    <Row>
      {ResourceItems.map((resource) => (
        <ResourceCard
          name={resource.name}
          link={resource.link}
          image={resource.image}
        />
      ))}
    </Row>
  </Container>
);

export default Resources;
