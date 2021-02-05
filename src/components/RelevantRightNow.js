import React from "react";
import { format, isWithinInterval, parseISO } from "date-fns";
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
  activeStartTime,
  activeEndTime,
}) =>
  isTimeBetween(activeStartTime, activeEndTime) && (
    <Col xs="12" md="6" lg="4">
      <Card
        className={`relevant ${type === "Event" ? "blue-card" : "orange-card"}`}
      >
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>
            {timeText(displayStartTime, displayEndTime)}
            {isTimeBetween(displayStartTime, displayEndTime) && <span className="live-dot" title="Happening now"></span>}
          </Card.Subtitle>
          <Card.Text>{body}</Card.Text>
          {buttonText && <a className="btn" href={buttonURL} role="button">{buttonText}</a>}
        </Card.Body>
      </Card>
    </Col>
  );

function timeText(start, end) {
  let startString = "";
  // 'h:mm' example 5:30
  if (start != null) {
    startString = `${format(parseISO(start), "h:mm")}`;
  }
  // 'h:mma O' example 7:30PM GMT-5
  let endString = `${format(parseISO(end), "h:mma O")}`;
  return start == null
    ? `Complete by ${endString}`
    : `${startString} - ${endString}`;
}

function isTimeBetween(start, end) {
  // used different date to capture screenshots
  // using now means all will be filtered out
  const currentTime = new Date();
  // return false if either the start or end is undefined
  const range_defined = start !== undefined && end !== undefined;
  // check if the current time is within the given interval
  return range_defined && isWithinInterval(currentTime, {
    start: parseISO(start),
    end: parseISO(end),
  });
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
        {data.map((rel) => (
          <RelevantCard {...rel.fields} />
        ))}
      </div>
    </Container>
  );
};

export default RelevantRightNow;
