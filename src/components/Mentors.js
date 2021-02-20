import { useState } from "react";
import { Card } from "react-bootstrap";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import useAirtableAPI from "../hooks/api-hook";
import { dateExtractor, timeExtractor } from "../utils/utils";
import { isTimeBetween } from "../components/RelevantRightNow";

const MentorModal = ({ mentor, setShow }) => {
  const {
    name,
    position,
    company,
    imageURL,
    shift_start,
    shift_end,
    expertise = [],
    slack,
  } = mentor;
  let availabilityList = [];
  var i;
  for (i = 0; i < shift_start.length; i++) {
    const start = shift_start[i];
    const end = shift_end[i];
    // sorry I know this looks rough
    availabilityList.push(
      dateExtractor(start) +
        " " +
        timeExtractor(start) +
        " - " +
        dateExtractor(end) +
        " " +
        timeExtractor(end)
    );
  }

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
              <p className="mentor-modal__heading">Shifts (in EST)</p>
              <ul>
                {availabilityList.map((time) => (
                  <li key={time}>{time}</li>
                ))}
              </ul>
            </div>
            <div className="mentor-modal__info-section">
              <p className="mentor-modal__heading">Expertise</p>
              <ul>
                {expertise.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <a
              href={"https://slackbeanpot2021.slack.com/team/" + slack}
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
    <Col xl="2" lg="3" md="4" sm="6" key={name}>
      <Card className="mentor-card" onClick={() => setShow(true)}>
        <Card.Img
          variant="top"
          src={imageURL && imageURL[0].url}
          alt={`Mentor profile photo: ${name}`}
        />
        <Card.Body>
          <Card.Title>
            <h3>{name}</h3>
          </Card.Title>
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
const getMentorAttrs = (data, attr) => [
  ...new Set(
    // get attribute from each mentor
    data
      .map((mentor) => attr(mentor))
      // flatten 2d array to 1d array
      .flat()
      // filter out falsey values
      .filter((x) => !!x)
      // cherry on top
      .sort()
  ),
];

export const Mentors = () => {
  const [onShift, setOnShift] = useState(false);
  const { data, isLoading } = useAirtableAPI(
    "appexkZgUcQ9vucI9",
    "mentor shifts"
  );

  const expertises = getMentorAttrs(data, (mentor) => mentor.fields.expertise);
  const positions = getMentorAttrs(data, (mentor) => mentor.fields.position);
  const companies = getMentorAttrs(data, (mentor) => mentor.fields.company);

  const [filterAttrs, setFilterAttrs] = useState([]);

  // I abbreviate as: (e)xpertises, (p)ositions, (c)ompanies, st(shift start), sE(shift end)
  // which mentors should we keep?
  const shouldShowMentor = (mentor) => {
    // make sure they are truthy fields
    const mentorEs = mentor.fields.expertise || [];
    const mentorP = mentor.fields.position || [];
    const mentorC = mentor.fields.company || [];
    const allAttrs = [...new Set([...mentorEs, ...mentorP, ...mentorC])];

    // all filter requirements must be satisfied
    const andMap = filterAttrs.filter((attr) => attr !== "all");
    let active = false;
    var i;
    if (onShift) {
      for (i = 0; i < mentor.fields.shift_start.length; i++) {
        if (
          isTimeBetween(
            mentor.fields.shift_start[i],
            mentor.fields.shift_end[i]
          )
        ) {
          active = true;
        }
      }
    } else {
      active = true;
    }

    return (
      andMap.every((mentorAttr) => allAttrs.includes(mentorAttr)) && active
    );
  };

  const handleChange = (e) => {
    const allOptions = Array.from(e.target.options, (option) => option.value);
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );

    // set difference
    const unselectedOptions = allOptions.filter(
      (x) => !selectedOptions.includes(x)
    );

    // union with selected options and then subtract unselected ones
    let newFilterAttrs = [
      ...new Set([...filterAttrs, ...selectedOptions]),
    ].filter((x) => !unselectedOptions.includes(x));

    setFilterAttrs(newFilterAttrs);
  };

  // Uncomment to view data for debugging purposes
  // console.log(JSON.parse(JSON.stringify(data)))

  return (
    <Container id="mentors" className="mt-5 mentors">
      <Row>
        <Col>
          <h1>Mentors</h1>
          <p className="mentor-subheader">
            Click on a mentor's photo for more details
          </p>
        </Col>
      </Row>
      <Row className="mb-3">
        <div className="col-auto mentor-filter-radio">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              onClick={() => setOnShift(false)}
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked={!onShift}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              All Mentors
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              onClick={() => setOnShift(true)}
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked={onShift}
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Active Mentors
            </label>
          </div>
        </div>
        <select
          defaultValue="all"
          id="mentors-position-filter"
          className="mentor-filter custom-select"
          onChange={handleChange}
        >
          <option value="all">Positions (all)</option>
          {positions.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        <select
          defaultValue="all"
          id="mentors-expertise-filter"
          className="mentor-filter custom-select"
          onChange={handleChange}
        >
          <option value="all">Expertise (all)</option>
          {expertises.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
        <select
          defaultValue="all"
          id="mentors-company-filter"
          className="mentor-filter custom-select"
          onChange={handleChange}
        >
          <option value="all">Companies (all)</option>
          {companies.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </Row>
      <Row>
        {" "}
        {/* TODO: remove this style to show the mentors */}
        {
          isLoading && (
            <Spinner animation="border" variant="primary" />
          ) /* TODO import custom styled spinner component*/
        }
        {
          !data.length && !isLoading && (
            <div>Nothing to see here...</div>
          ) /* TODO handle empty array in case of API error (or if its actually empty for any reason)*/
        }
        {data.map(
          (mentor) =>
            shouldShowMentor(mentor) && ( // true
              <MentorCard mentor={mentor.fields} key={mentor.fields.name} />
            )
        )}
      </Row>
    </Container>
  );
};

export default Mentors;
