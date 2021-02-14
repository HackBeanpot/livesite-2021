import React from "react";
import { format, isWithinInterval, parseISO } from "date-fns";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import useAirtableAPI from "../hooks/api-hook";
import useShowTime from "../hooks/useShowTime";

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
}) => {
  // the card should be displayed around (a little before and during) when the event is...
  const isCardVisible = useShowTime(activeStartTime, activeEndTime);
  // however, _during_ the card event, add an extra "happening now" annotation
  const isHappeningNow = useShowTime(displayStartTime, displayEndTime);

  return (
    isCardVisible && (
      <Col xs="12" md="6" lg="4">
        <Card
          className={`relevant ${
            type === "Event" ? "blue-card" : "orange-card"
          }`}
        >
          <Card.Body>
            <Card.Title>
              <h3>{title}</h3>
            </Card.Title>
            <Card.Subtitle>
              {timeText(displayStartTime, displayEndTime)}
              {isHappeningNow && (
                <span className="live-dot" title="Happening now"></span>
              )}
            </Card.Subtitle>
            <Card.Text>{body}</Card.Text>
            {buttonText && (
              <a className="btn" href={buttonURL} role="button">
                {buttonText}
              </a>
            )}
          </Card.Body>
        </Card>
      </Col>
    )
  );
};

function timeText(start, end) {
  let startString = "";
  // 'h:mm' example 5:30
  if (start != null) {
    startString = `${format(parseISO(start), "h:mm")}`;
  }
  // 'h:mma O' example 7:30PM GMT-5
  let endString = `${format(parseISO(end), "h:mma")}`;
  return start == null
    ? `Complete by ${endString}`
    : `${startString} - ${endString}`;
}

export function isTimeBetween(start, end) {
  // used different date to capture screenshots
  // using now means all will be filtered out
  const currentTime = new Date();
  // return false if either the start or end is undefined
  const range_defined = start !== undefined && end !== undefined;
  // check if the current time is within the given interval
  return (
    range_defined &&
    isWithinInterval(currentTime, {
      start: parseISO(start),
      end: parseISO(end),
    })
  );
}

const RelevantRightNow = () => {
  const { data, isLoading } = useAirtableAPI("appzSS15B2eBo5igq", "relevant");

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 id="relevant">Relevant Right Now</h1>
        </Col>
      </Row>
      <div className="scrolling-wrapper row flex-row flex-nowrap pb-4 pt-2">
        {isLoading && <Spinner animation="border" variant="primary" />}
        {data.filter(keepGoodLogBad).map((rel) => (
          <RelevantCard
            {...rel.fields}
            key={rel.fields.title + rel.fields.activeStartTime.toString()}
          />
        ))}
      </div>
    </Container>
  );
};

const requiredProps = [
  "title",
  "activeStartTime",
  "activeEndTime",
  "displayStartTime",
  "displayEndTime",
];
const keepGoodLogBad = (rel) => {
  // bad record if it doesn't have some Required properties
  const missing = requiredProps.filter((prop) => !(prop in rel.fields));
  if (missing.length > 0) {
    console.error("bad airtable Relevant records!", rel);
    return false;
  }
  return true;
};

export default RelevantRightNow;
