import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import useAirtableAPI from '../hooks/api-hook';

// Define the mentor card object 
const MentorCard = ({ name, position, company, imageURL, active, phone, expertise }) => (
  <Col md="3">
    <Card>
      <Card.Img variant="top" src={imageURL[0].url} alt="Mentor profile photo" />
      <Card.Body>
        <Card.Title><h5>{name}</h5></Card.Title>
        <Card.Text>
          {position} at {company}
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

export const Mentors = () => {
  const { data, isLoading } = useAirtableAPI('appexkZgUcQ9vucI9', 'mentors');

  return (
    <Container className='mt-5'>
      <Row>
        <Col>
          <h1 id='mentors' className='font-weight-bold'>
            Mentors
          </h1>
        </Col>
      </Row>
      <Row>
        {isLoading && <Spinner animation='border' variant='primary' /> /* TODO import custom styled spinner component*/} 
        {!data.length && <div>Nothing to see here...</div> /* TODO handle empty array in case of API error (or if its actually empty for any reason)*/}
        {data.map((mentor) => (
          <MentorCard {...mentor.fields} />
        ))}
      </Row>
    </Container>
  );
};

export default Mentors;
