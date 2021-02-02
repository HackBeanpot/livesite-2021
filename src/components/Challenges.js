import React, {useState} from 'react';
import {Col, Container, Row, Carousel} from 'react-bootstrap';
import './challenges.scss';
import GreenPeas from "../assets/greenpeas";
const Challenges = () => {
  return (
    <div>
      <Container className="mt-5" >
        <Row>
          <Col>
            <h1 id="challenges" className="font-weight-bold">Tech Challenges</h1>

          </Col>
        </Row>
      </Container>
      <Carousel interval={null}>
        <Carousel.Item>
          <div className="carouselItem">
            <Row>
              <Col md={{span:3, offset: 3}} className="carouselImage">
                <GreenPeas/>
              </Col>
              <Col>
                <div className="carouselHeader">
                  <h2>Camp HackBeanpot Spirit Award:</h2>
                </div>
                <div className="carouselCaption">
                  <p>After a weekend of completing challenges with your Cabins and making projects, we are so excited to see what you’ve learned at Camp HackBeanpot.
                    We challenge you to build something that embodies our values of exploration and teamwork.
                    This could involve a project to express your gratitude to nature or a survival tool for you and your fellow hackers.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Carousel.Item>

      </Carousel>
    </div>

  )
};

export default Challenges;
