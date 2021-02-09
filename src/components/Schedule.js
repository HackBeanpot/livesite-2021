import React, { useState, useEffect } from "react";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Row,
  Tabs,
  Tab,
  Spinner,
} from "react-bootstrap";
import CalendarIcon from "../assets/calendar.png";
import Arrow from "../assets/arrow.svg";
import useAirtableAPI from "../hooks/api-hook";
import { scheduleExtractor } from "../utils/utils";

const AdditionalAttributes = ({ event }) => {
  return (
    <div className="schedule__info">
      <div className="schedule__audience">
        <p className={event.audience ? "schedule__audience__type" : ""}>
          {event.audience}
        </p>
        <p className={event.company ? "schedule__audience__company" : ""}>
          {event.company}
        </p>
      </div>
    </div>
  );
};

const Schedule = () => {
  const { data, isLoading } = useAirtableAPI("appUlVfygDJ873QXd", "schedule");
  const extractedData = scheduleExtractor(data);
  const [isOpen, setIsOpen] = useState(false);
  const [clickedIdx, setClickedIdx] = useState(-1);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateSize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Container id="schedule" className="schedule mt-5">
      <Row>
        <Col>
          <h1 className="font-weight-bold">
            Event Schedule
            <i className="far fa-calendar-plus schedule__calendar"></i>
          </h1>
        </Col>
      </Row>
      {isLoading || data.length === 0 ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Row>
          <Col>
            <Tabs defaultActiveKey={0}>
              {Object.keys(extractedData).map((element, idx) => {
                return (
                  <Tab
                    eventKey={idx}
                    title={element}
                    tabClassName="schedule__tab"
                  >
                    <Accordion>
                      {extractedData[element].map((event, idx) => {
                        return (
                          <Card className="schedule__card">
                            <Accordion.Toggle
                              className="schedule__card-header"
                              as={Card.Header}
                              eventKey={idx.toString()}
                              onClick={() => {
                                setClickedIdx(idx);
                                setIsOpen(idx === clickedIdx ? !isOpen : true);
                              }}
                            >
                              <div key={idx} className="schedule__row">
                                <div
                                  className="schedule__label"
                                  style={{ backgroundColor: event.theme }}
                                />
                                <Button
                                  variant="link"
                                  className={
                                    idx === clickedIdx && isOpen
                                      ? "schedule__arrow__down"
                                      : "schedule__arrow"
                                  }
                                >
                                  <img
                                    className="schedule__arrow__icon"
                                    src={Arrow}
                                    alt="arrow icon"
                                  />
                                </Button>

                                <div className="schedule__responsive">
                                  <div className="schedule__category">
                                    <p className="schedule__category__time">
                                      { event.time }
                                      { event.isLive && <span className="live-dot" title="Happening now"></span>}
                                    </p>
                                    <p
                                      className="schedule__category__type"
                                      style={{ color: event.theme }}
                                    >
                                      {event.type}
                                    </p>
                                  </div>
                                  <div className="schedule__location">
                                    <p
                                      className="schedule__location__title"
                                      title={event.title}
                                    >
                                      {event.title}
                                    </p>
                                    <a
                                      className="schedule__location__zoom"
                                      href={event.location}
                                      title={event.location}
                                      // make the link open in a new tab
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      {event.location}
                                    </a>
                                  </div>
                                </div>
                                {width >= 1000 && (
                                  <AdditionalAttributes event={event} />
                                )}
                              </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={idx.toString()}>
                              <Card.Body>
                                <p>{event.description}</p>
                                {width < 1000 && (
                                  <AdditionalAttributes event={event} />
                                )}
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        );
                      })}
                    </Accordion>
                  </Tab>
                );
              })}
            </Tabs>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Schedule;
