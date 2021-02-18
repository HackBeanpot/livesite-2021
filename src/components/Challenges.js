import React from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import GreenPeas from "../assets/greenpeas";
import OnionCorn from "../assets/OnionCorn";
import CelebratoryBoi from "../assets/CelebratoryBoi";
import BeanstalkBoi from "../assets/BeanstalkBoi";
const Challenges = () => {
  return (
    <div>
      <Container id="challenges" className="mt-5">
        <Row>
          <Col>
            <h1>Tech Challenges</h1>
          </Col>
        </Row>
      </Container>
      <Carousel interval={null} touch={true}>
        <Carousel.Item>
          <div className="carousel__item">
            <Row>
              <Col className="carousel__image">
                <GreenPeas />
              </Col>
              <Col className="carousel__item">
                <div className="carousel__header">
                  <h2>Camp HackBeanpot Spirit Award:</h2>
                </div>
                <div className="carousel__caption">
                  <p>
                    After a weekend of completing challenges with your Cabins
                    and making projects, we are so excited to see what you’ve
                    learned at Camp HackBeanpot. We challenge you to build
                    something that embodies our values of exploration and
                    teamwork. This could involve a project to express your
                    gratitude to nature or a survival tool for you and your
                    fellow hackers.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel__item">
            <Row>
              <Col className="carousel__image">
                <OnionCorn />
              </Col>
              <Col className="carousel__item">
                <div className="carousel__header">
                  <h2>Most Inclusive Hack:</h2>
                </div>
                <div className="carousel__caption">
                  <p>
                    Last year was full of social change, and it doesn’t need to
                    stop there! We challenge you to continue the trend into 2021
                    by creating a hack that uses tech to promote social good,
                    accessibility, or impact on the world around you. <br />-
                    Did you know there{" "}
                    <a href="https://www.w3.org/TR/wai-aria-1.1/">
                      is a spec for web accessibility?
                    </a>{" "}
                    <br />- Your code doesn’t need to be a user-facing
                    application! Checkout{" "}
                    <a href="https://github.com/dequelabs/axe-core-npm/tree/develop/packages/react">
                      this plugin that helps developers write accessible code.
                    </a>{" "}
                    <br />- Want to build an app for social good, but need
                    inspiration? Checkout{" "}
                    <a href="https://buildforblacklives.com/">
                      Build4BlackLives
                    </a>
                    , built by some of our own members from HackBeanpot Core!
                    <br />
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel__item">
            <Row>
              <Col className="carousel__image">
                <CelebratoryBoi className="pt-5" />
              </Col>
              <Col className="carousel__item">
                <div className="carousel__header">
                  <h2>Hack for Joy:</h2>
                </div>
                <div className="carousel__caption">
                  <p>
                    Everyone has their own unique hobbies and interests, such as
                    gaming, rock climbing, knitting, or fishing. Whether it’s a
                    hobby you picked up during quarantine or a life-long
                    passion, at HackBeanpot, we challenge you to build whatever
                    your heart desires! Encouraging passion and creativity, we
                    present to you, Hack for Joy!
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel__item">
            <Row>
              <Col className="carousel__image">
                <BeanstalkBoi />
              </Col>
              <Col className="carousel__item">
                <div className="carousel__header">
                  <h2>Mystery Prizes:</h2>
                </div>
                <div className="carousel__caption">
                  <p>
                    There are a few ~mysterious~ challenges that we'll reveal at
                    the closing ceremony. Just be yourself, build a cool
                    project, and you and your team might end up winning a themed
                    prize at the end!
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel__item">
            <Row>
              <Col className="carousel__image">
                <img
                  src="https://tools.hackbeanpot.com/assets/logos/2021-sponsors/zipperHQ.png"
                  alt="ZipperHQ logo"
                />
              </Col>
              <Col className="carousel__item">
                <div className="carousel__header">
                  <h2>ZipperHQ Demo Video</h2>
                </div>
                <div className="carousel__caption">
                  <p>
                    ZipperHQ is offering a free version of their video marketing software through the{" "}
                    <a href="https://docs.google.com/presentation/d/1MoRVZpJux-cD0X1jV60qNfjeCo3TD2Rqo7ec8aqE8vI/edit?usp=sharing">
                      ZipperHQ App and Chrome Extension.
                    </a>{" "}
                    The challenge is to make a creative and engaging 
                    demo video using the software, which offers screen-recording, video upload, and many 
                    sharing capabilities. When you submit your project, you must include a ZipperHQ demo 
                    link to be eligible.{" "}
                    <a href="https://www.zhqland.com/media/landing?id=8386f9bd-a0df-4123-bf41-4aeb70b67487&tId=ab38916b-8ce7-4ed8-84ee-8be8988462ec">
                      Check out this tutorial
                    </a>{" "}
                    Check out this tutorial to get started.

                    The winning team will receive a $200 gift card to a place of the team's choosing. 
                    All participants get the free version of ZipperHQ which they can continue to use 
                    after the event.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Challenges;
