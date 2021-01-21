import React from "react";
import {
  Col,
  Container,
  Row,
  Tabs,
  Tab,
  Table,
  Spinner,
} from "react-bootstrap";
import CalendarIcon from "../assets/calendar_icon.svg";
import Arrow from "../assets/arrow.svg";
import useAirtableAPI from "../hooks/api-hook";
import { scheduleExtractor } from "../utils/utils";

const Schedule = () => {
  const { data, isLoading } = useAirtableAPI("appUlVfygDJ873QXd", "schedule");
  const extractedData = scheduleExtractor(data);

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
                    <Table hover className="schedule__table">
                      <tbody>
                        {extractedData[element].map((event, idx) => {
                          return (
                            <tr key={idx} className="schedule__row">
                              <td
                                className="schedule__label"
                                style={{ backgroundColor: event.theme }}
                              />
                              <td className="schedule__arrow">
                                <div>
                                  <img src={Arrow} alt="arrow icon" />
                                </div>
                              </td>
                              <td className="schedule__category">
                                <p className="schedule__category__time">
                                  {event.time}
                                </p>
                                <p
                                  className="schedule__category__type"
                                  style={{ color: event.theme }}
                                >
                                  {event.type}
                                </p>
                              </td>
                              <td className="schedule__location">
                                <p className="schedule__location__title">
                                  {event.title}
                                </p>
                                <a
                                  className="schedule__location__zoom"
                                  href={event.location}
                                >
                                  {event.location}
                                </a>
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
                          );
                        })}
                      </tbody>
                    </Table>
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
