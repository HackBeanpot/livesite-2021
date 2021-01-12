import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import useAirtableAPI from '../hooks/api-hook';

const MentorModal = ({ mentor, setShow }) => {
  const { name, position, company, imageURL, availability = "", expertise, slack } = mentor;
  const availabilityList = availability.split(", ")

  return (
    <div className={"modal fade show mentor-modal"} >
      <div className="modal-dialog" role="document" tabIndex="-1">
        <div className="modal-content">
          <div className="mentor-modal__close" onClick={() => setShow(false)}/>
          <div>
            <img className="mentor-img" src={imageURL[0].url} alt={`${name}`} />
            <p className="mentor-name">{name}</p>
            <p className="mentor-pos">{position}, {company}</p>
          </div>

          <div className="mentor-modal__info">
            <div className="mentor-modal__info-section">
              <p className="mentor-modal__heading">Shifts</p>
              <ul>
                {availabilityList.map(time => <li>{time}</li>)}
              </ul>
              {/* TODO use some date-time library to deal with shifts and filtering */}
            </div>
            <div className="mentor-modal__info-section">
              <p className="mentor-modal__heading">Expertise</p>
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
      {show && <MentorModal mentor={mentor} setShow={setShow} />}
    </Col>
  )
}

// sets kick out duplicates
const getMentorAttrs = (data, attr) => [...new Set(
  // get attribute from each mentor
  data.map(mentor => attr(mentor))
  // flatten 2d array to 1d array
  .flat()
  // filter out falsey values
  .filter(x => !!x)
  // cherry on top
  .sort()
)]

export const Mentors = () => {
  const { data, isLoading } = useAirtableAPI('appexkZgUcQ9vucI9', 'mentors');

  const expertises = getMentorAttrs(data, mentor => mentor.fields.expertise)
  const positions = getMentorAttrs(data, mentor => mentor.fields.position)
  const companies = getMentorAttrs(data, mentor => mentor.fields.company)

  // Uncomment to view data
  // console.log(JSON.parse(JSON.stringify(data)))

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
        <h4>Filter: </h4>
        <select multiple id="mentors-position-filter" class="mentor-filter">
          <option value="default" selected="selected">Positions (all)</option>
          {
            positions.map(mentor => (
              <option value={mentor}>{mentor}</option>
            ))
          }
        </select>
        <select multiple id="mentors-expertise-filter" class="mentor-filter">
          <option value="default"  selected="selected">Expertise (all)</option>
          {
            expertises.map(mentor => (
              <option value={mentor}>{mentor}</option>
            ))
          }
        </select>
        <select multiple id="mentors-company-filter" class="mentor-filter">
          <option value="default" selected="selected">Companies (all)</option>
          {
            companies.map(mentor => (
              <option value={mentor}>{mentor}</option>
            ))
          }
        </select>
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
