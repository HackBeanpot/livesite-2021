import React from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import useAirtableAPI from "../hooks/api-hook";
import useShowTime from "../hooks/useShowTime";
import { timeText } from "../utils/utils";

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
  const isHappeningSoon = useShowTime(activeStartTime, activeEndTime);
  const isHappeningNow = useShowTime(displayStartTime, displayEndTime);

  return (
    isHappeningSoon && (
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

const RelevantRightNow = () => {
  const { data, isLoading } = useAirtableAPI("appzSS15B2eBo5igq", "relevant");

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 id="relevant">Relevant Right Now</h1>
        </Col>
      </Row>
      <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
        {isLoading && <Spinner animation="border" variant="primary" />}
        {data.map((rel) => (
          <RelevantCard
            {...rel.fields}
            key={rel.fields.title + rel.fields.activeStartTime.toString()}
          />
        ))}
      </div>
    </Container>
  );
};

export default RelevantRightNow;
