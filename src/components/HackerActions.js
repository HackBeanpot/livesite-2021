import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const HackerActions = () => (
  <Container className="mt-5">
    <Row>
      <Col md="6" className="mb-5">
        <h2>Send us your feedback</h2>
        <p>
          We hope you’re having an awesome time at Camp HackBeanpot! We’d really 
          appreciate it if you could share your thoughts in our Event Feedback 
          Form below so we can continue to make HackBeanpot a great experience 
          for all attendees.
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
          Interested in learning more about organizing a hackathon? Join our HackBeanpot 
          Core Team to develop your skills in tech, design, marketing, or leadership! We 
          ask that you be able to commit about 10 hours per week, but it’s definitely a 
          fun time with a group of inspiring and friendly people!
        </p>
        <a
          className="btn primary-cta"
          role="button"
          href={"https://forms.gle/8FAHBhLtEnu7rR7fA"}
          target="_blank"
          rel="noreferrer"
        >
          Apply
        </a>
      </Col>
    </Row>
  </Container>
);

export default HackerActions;
