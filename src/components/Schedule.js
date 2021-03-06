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
import { hasEventEnded, scheduleExtractor } from "../utils/utils";

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
  const [currentTime, setCurrentTime] = useState(new Date());

  // Create the "Subscribe to Calendar" button
  const defaultCopyButtonText = "Subscribe to Calendar";
  const [copyButtonText, setCopyButtonText] = useState(defaultCopyButtonText);
  const copySubscribeLink = () => {
    var textArea = document.createElement("textarea");
    textArea.value =
      "https://calendar.google.com/calendar/ical/c_n3lvtno6l4rebktvvqus3vpb2c%40group.calendar.google.com/public/basic.ics";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setCopyButtonText("iCalendar Link Copied!");
    setTimeout(() => {
      setCopyButtonText(defaultCopyButtonText);
    }, 1500);
  };

  useEffect(() => {
    const updateSize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Container id="schedule" className="schedule mt-5">
      <Row>
        <Col>
          <h1>Event Schedule</h1>
        </Col>
        <Col>
          <button
            onClick={copySubscribeLink}
            type="button"
            className="btn secondary-cta schedule__export"
          >
            <img
              src={CalendarIcon}
              className="schedule__calendar"
              alt="Calendar Icon"
            />
            {copyButtonText}
          </button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="schedule__note">
            Dates and times are displayed in your local timezone. Schedule in
            EST can be found{" "}
            <a
              href="https://hackbeanpot.com/schedule.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              here
            </a>
            .
            <br />
            The password for all Zoom meetings can be found pinned in the
            #announcements Slack channel.
          </h3>
          <h3 className="schedule__warning">
            Please be sure to attend all events labeled "Everyone".
          </h3>
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
                    key={element}
                    eventKey={idx}
                    title={element}
                    tabClassName="schedule__tab"
                  >
                    <Accordion>
                      {extractedData[element].map((event, idx) => {
                        return (
                          <Card
                            className="schedule__card"
                            key={event.title + event.time}
                          >
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
                                <div
                                  className={
                                    !hasEventEnded(event.endTime, currentTime)
                                      ? "schedule__responsive"
                                      : "schedule__endEvent"
                                  }
                                >
                                  <div className="schedule__category">
                                    <p className="schedule__category__time">
                                      {event.time}
                                      {event.isLive && (
                                        <span
                                          className="live-dot"
                                          title="Happening now"
                                        ></span>
                                      )}
                                    </p>
                                    <p
                                      className="schedule__category__type"
                                      style={{ color: event.theme }}
                                    >
                                      {event.type}
                                    </p>
                                  </div>
                                  <div className="schedule__location">
                                    <h3
                                      className="schedule__location__title"
                                      title={event.title}
                                    >
                                      {event.title}
                                    </h3>
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
                                <Col lg="8">
                                  <p>{event.description}</p>
                                </Col>
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
