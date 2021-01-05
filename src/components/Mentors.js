import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import useAirtableAPI from '../hooks/api-hook';

const MentorModal = ({ mentor, show, setShow }) => {
  if (!show) {
    return null
  }
  
  const { name, position, company, imageURL, availability = "", expertise, slack } = mentor;
  const availabilityList = availability.split(", ")
  // const expertiseList = expertise.split(", ") || []

  return (
    <div className={"modal fade show mentor-modal"} >
      <div className="modal-dialog" role="document" tabIndex="-1">
      {/* onBlur={() => setShow(false)}> */}
        <div className="modal-content">
          <div className="mentor-modal--close" onClick={() => setShow(false)}/>
          <div>
            <img className="mentor-img" src={imageURL[0].url} alt={`${name}`} />
            <p className="mentor-name">{name}</p>
            <p className="mentor-pos">{position}, {company}</p>
          </div>

          <div className="mentor-modal--info">
            <div className="mentor-modal--info-section">
              <p className="mentor-modal--heading">Shifts</p>
              <ul>
                {availabilityList.map(time => <li>{time}</li>)}
              </ul>
              {/* TODO use some date-time library to deal with shifts and filtering */}
            </div>
            <div className="mentor-modal--info-section">
              <p className="mentor-modal--heading">Expertise</p>
              <ul>
                {expertise.map(skill => <li>{skill}</li>)}
              </ul>
            </div>
            <a href={slack} class="btn primary-cta" role="button" target="_blank" rel="noopener noreferrer">
              Message
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const MentorCard = ({ mentor }) => {
  const [show, setShow] = useState(false);
  const { name, position, company, imageURL } = mentor;

  return (
    <Col className="col-md-3 col-sm-4" key={name}>
      <Card className="mentor-card" onClick={() => setShow(true)}>
        <Card.Img variant="top" src={imageURL[0].url} alt={`Mentor profile photo: ${name}`} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {position}, {company}
          </Card.Text>
        </Card.Body>
      </Card>
      <MentorModal mentor={mentor} show={show} setShow={setShow} />
    </Col>
  )
}

export const Mentors = () => {
  const { data, isLoading } = useAirtableAPI('appexkZgUcQ9vucI9', 'mentors');

  return (
    <Container className='mt-5 mentors'>
      <Row>
        <Col>
          <h1 id='mentors' className='font-weight-bold'>
            Mentors
          </h1>
          <p>Click on a mentor's photo for more details</p>
        </Col>
      </Row>
      <Row>
        {isLoading && <Spinner animation='border' variant='primary' /> /* TODO import custom styled spinner component*/} 
        {!data.length && <div>Nothing to see here...</div> /* TODO handle empty array in case of API error (or if its actually empty for any reason)*/}
        {data.map((mentor) => (
          <MentorCard mentor={mentor.fields} key={mentor.fields.name} />
        ))}
      </Row>
    </Container>
  );
};

export default Mentors;
