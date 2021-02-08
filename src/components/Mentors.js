import { useState } from "react";
import { Card } from "react-bootstrap";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import useAirtableAPI from "../hooks/api-hook";

const MentorModal = ({ mentor, setShow }) => {
  const {
    name,
    position,
    company,
    imageURL,
    availability = "",
    expertise = [],
    slack,
  } = mentor;
  const availabilityList = availability.split(", ");

  return (
    <div className={"modal fade show mentor-modal"}>
      <div className="modal-dialog" role="document" tabIndex="-1">
        <div className="modal-content">
          <div className="mentor-modal__close" onClick={() => setShow(false)} />
          <div>
            <img className="mentor-img" src={imageURL[0].url} alt={`${name}`} />
            <p className="mentor-name">{name}</p>
            <p className="mentor-pos">
              {position}, {company}
            </p>
          </div>

          <div className="mentor-modal__info">
            <div className="mentor-modal__info-section">
              <p className="mentor-modal__heading">Shifts</p>
              <ul>
                {availabilityList.map((time) => (
                  <li>{time}</li>
                ))}
              </ul>
              {/* TODO use some date-time library to deal with shifts and filtering */}
            </div>
            <div className="mentor-modal__info-section">
              <p className="mentor-modal__heading">Expertise</p>
              <ul>
                {expertise.map((skill) => (
                  <li>{skill}</li>
                ))}
              </ul>
            </div>
            <a
              href={slack}
              className="btn primary-cta"
              role="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const MentorCard = ({ mentor }) => {
  const [show, setShow] = useState(false);
  const { name, position, company, imageURL } = mentor;

  return (
    <Col className="col-md-3 col-sm-4" key={name}>
      <Card className="mentor-card" onClick={() => setShow(true)}>
        <Card.Img
          variant="top"
          src={imageURL[0].url}
          alt={`Mentor profile photo: ${name}`}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {position}, {company}
          </Card.Text>
        </Card.Body>
      </Card>
      {show && <MentorModal mentor={mentor} setShow={setShow} />}
    </Col>
  );
};

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
  const { data, isLoading } = useAirtableAPI("appexkZgUcQ9vucI9", "mentors");

  const expertises = getMentorAttrs(data, mentor => mentor.fields.expertise)
  const positions = getMentorAttrs(data, mentor => mentor.fields.position)
  const companies = getMentorAttrs(data, mentor => mentor.fields.company)

  const [filterAttrs, setFilterAttrs] = useState([]);

  // I abbreviate as: (e)xpertises, (p)ositions, (c)ompanies
  // which mentors should we keep?
  const shouldShowMentor = (mentor) => {
    // make sure they are truthy fields
    const mentorEs = mentor.fields.expertise || []
    const mentorP = mentor.fields.position ? [mentor.fields.position] : []
    const mentorC = mentor.fields.company ? [mentor.fields.company] : []
    const allAttrs = [...new Set([...mentorEs, ...mentorP, ...mentorC])]

    // all filter requirements must be satisfied
    const andMap = filterAttrs.filter(attr => attr !== 'all');

    return andMap.every(mentorAttr => allAttrs.includes(mentorAttr));
  }

  const handleChange = e => {
    const allOptions = Array.from(e.target.options, option => option.value)
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value)

    // set difference
    const unselectedOptions = allOptions.filter(x => !selectedOptions.includes(x))

    // union with selected options and then subtract unselected ones
    let newFilterAttrs = [...new Set([...filterAttrs, ...selectedOptions])]
      .filter(x => !unselectedOptions.includes(x))
    
    setFilterAttrs(newFilterAttrs)
  }

  // Uncomment to view data for debugging purposes
  // console.log(JSON.parse(JSON.stringify(data)))

  return (
    <Container id="mentors" className="mt-5 mentors">
      <Row>
        <Col>
          <h1 className="font-weight-bold">Mentors</h1>
          <p className="mentor-subheader">
            Click on a mentor's photo for more details
          </p>
        </Col>
      </Row>
      <Row>
        <select id="mentors-position-filter" className="mentor-filter custom-select" onChange={handleChange}>
          <option selected value="all">Positions (all)</option>
          {
            positions.map(p => (
              <option value={p}>{p}</option>
            ))
          }
        </select>
        <select id="mentors-expertise-filter" className="mentor-filter custom-select" onChange={handleChange}>
          <option selected value="all">Expertise (all)</option>
          {
            expertises.map(e => (
              <option value={e}>{e}</option>
            ))
          }
        </select>
        <select id="mentors-company-filter" className="mentor-filter custom-select" onChange={handleChange}>
          <option selected value="all">Companies (all)</option>
          {
            companies.map(c => (
              <option value={c}>{c}</option>
            ))
          }
        </select>
      </Row>
      <Row>
        {isLoading && <Spinner animation='border' variant='primary' /> /* TODO import custom styled spinner component*/} 
        {!data.length && <div>Nothing to see here...</div> /* TODO handle empty array in case of API error (or if its actually empty for any reason)*/}
        {data.map((mentor) => (
            shouldShowMentor(mentor) // true
            &&
            (<MentorCard mentor={mentor.fields} key={mentor.fields.name} />)
        ))}
      </Row>
    </Container>
  );
};

export default Mentors;
