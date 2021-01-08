import React from 'react';
import { Col, Container, Row, Tabs, Tab, Table } from 'react-bootstrap';
import CalendarIcon from '../assets/calendar_icon.svg';
import Arrow from '../assets/arrow.svg';
import data from "../assets/fake_data.json";

const Schedule = () => {
  return (<Container className="mt-5">
    <Row>
      <Col>
        <h1 id="schedule" className="font-weight-bold">Event Schedule</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <Tabs defaultActiveKey={1}>
          {data.schedule.map((element, idx) => {
            return <Tab eventKey={idx} title={element.date}>
            <Table hover>
              <tbody>
                {element.events.map((event, idx) => {
                  return (
                  <tr key={idx}>
                  <td className="label" style={{ backgroundColor: event.theme }}/>
                  {/* TODO: Need to change hard coded width here */}
                  <td width='50px'>
                    <div>
                      <img src={Arrow} alt="arrow icon" />
                    </div>
                  </td>
                  {/* TODO: Need to change hard coded width here */}
                  <td width='180px'>
                    <div className="category">
                      <p className="category__time">{event.time}</p>
                      <p className="category__type" style={{ color: event.theme }}>{event.type}</p>
                    </div>
                  </td>
                  {/* TODO: Need to change hard coded width here */}
                  <td width='450px'>
                    <div className="location">
                      <p className="location__title">{event.title}</p>
                      <a className="location__zoom" href={event.location}>{event.location}</a>
                    </div>
                  </td>
                  {/* TODO: Need to change hard coded width here */}
                  <td width='300px'>
                    <div className="audience">
                      <p className={event.audience ? "audience__type" : ""}>{event.audience}</p>
                      <p className={event.company ? "audience__company" : ""}>{event.company}</p>
                    </div>
                  </td>
                  <td><img src={CalendarIcon} alt="calendar icon" /></td>
                </tr>)})}
              </tbody>
            </Table>
          </Tab>
          })}
        </Tabs>
      </Col>
    </Row>
  </Container>)
};

export default Schedule;