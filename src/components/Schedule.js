import React, { useState } from "react";
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

const Schedule = () => {
  const { data, isLoading } = useAirtableAPI("appUlVfygDJ873QXd", "schedule");
  const extractedData = scheduleExtractor(data);
  const [clickedIdx, setClickedIdx] = useState(-1);

  return (
    <Container className="schedule mt-5">
      <Row>
        <Col>
          <h1 id="schedule" className="font-weight-bold">
            Event Schedule
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
                            <Card.Header className="schedule__card-header">
                              <tr key={idx} className="schedule__row">
                                <td
                                  className="schedule__label"
                                  style={{ backgroundColor: event.theme }}
                                />
                                <Accordion.Toggle
                                  as={Button}
                                  variant="link"
                                  eventKey={idx.toString()}
                                  onClick={() => {
                                    setClickedIdx(idx);
                                  }}
                                >
                                  <td
                                    className={
                                      idx == clickedIdx
                                        ? "schedule__arrow__down"
                                        : "schedule__arrow"
                                    }
                                  >
                                    <img
                                      className="schedule__arrow__icon"
                                      src={Arrow}
                                      alt="arrow icon"
                                    />
                                  </td>
                                </Accordion.Toggle>
                                <td className="schedule__responsive">
                                  <div className="schedule__category">
                                    <p className="schedule__category__time">
                                      {event.time}
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
                                </td>
                                <td className="schedule__audience">
                                  <p
                                    className={
                                      event.audience
                                        ? "schedule__audience__type"
                                        : ""
                                    }
                                  >
                                    {event.audience}
                                  </p>
                                  <p
                                    className={
                                      event.company
                                        ? "schedule__audience__company"
                                        : ""
                                    }
                                  >
                                    {event.company}
                                  </p>
                                </td>
                                <td className="schedule__calendar">
                                  <img src={CalendarIcon} alt="calendar icon" />
                                </td>
                              </tr>
                            </Card.Header>
                            <Accordion.Collapse eventKey={idx.toString()}>
                              <Card.Body>
                                <strong>Description:&nbsp;</strong>
                                {event.description}
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
