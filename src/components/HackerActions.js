import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const HackerActions = () => (
  <Container className="mt-5">
    <Row>
      <Col md="6" className="mb-5">
        <h2>Send us your feedback</h2>
        <p>
          This is a blub about the core team and why we love hackbeanpot and
          organizing the event! This is a blub about the core team and why we
          love hackbeanpot and organizing the event!
        </p>
        <a href="/">
          <button type="button" className="btn primary-cta">
            Send Feedback
          </button>
        </a>
      </Col>
      <Col md="6" className="mb-5">
        <h2>Apply to join Core!</h2>
        <p>
          This is a blub about the core team and why we love hackbeanpot and
          organizing the event! This is a blub about the core team and why we
          love hackbeanpot and organizing the event!
        </p>
        <a href="/">
          <button type="button" className="btn primary-cta">
            Apply
          </button>
        </a>
      </Col>
    </Row>
  </Container>
);

export default HackerActions;
