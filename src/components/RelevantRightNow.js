import React from "react";
import moment from "moment";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import useAirtableAPI from "../hooks/api-hook";

const RelevantCard = ({
  title,
  type,
  body,
  buttonURL,
  buttonText,
  displayStartTime,
  displayEndTime,
}) => (
  <Col xs="12" md="6" lg="4">
    <Card
      className={`relevant ${type === "Event" ? "blue-card" : "orange-card"}`}
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>
          {timeText(displayStartTime, displayEndTime)}
        </Card.Subtitle>
        <Card.Text>{body}</Card.Text>
        <a className="btn" href={buttonURL} role="button">
          {buttonText}
        </a>
      </Card.Body>
    </Card>
  </Col>
);

function timeText(start, end) {
  //h:mm example 5:30
  let startString = `${new moment(start).format("h:mm")}`;
  // 'h:mma z' example 7:30PM EST
  let endString = `${new moment(end).format("h:mmA z")}`;
  return start == null
    ? `Complete by ${endString}`
    : `${startString} - ${endString}`;
}

function isTimeBetween(start, end) {
  /* trying to choose a time near start of event to capture a few for screenshots*/
  const currentTime = new Date("2021-02-19T22:30:00.000Z");
  console.log(currentTime.getHours());
  return new Date(start) <= currentTime && currentTime <= new Date(end);
}

const RelevantRightNow = () => {
  const { data, isLoading } = useAirtableAPI("appzSS15B2eBo5igq", "relevant");

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 id="relevant" className="font-weight-bold">
            Relevant Right Now
          </h1>
        </Col>
      </Row>
      <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
        {isLoading && <Spinner animation="border" variant="primary" />}
        {!data.length && !isLoading && <div>Nothing to see here...</div>}
        {data.map((rel) => (
          // isTimeBetween(rel.activeStartTime, rel.activeEndTime) &&
          <RelevantCard {...rel.fields} />
        ))}
      </div>
    </Container>
  );
};

export default RelevantRightNow;
