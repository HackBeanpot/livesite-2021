import React from 'react';
import { Card } from 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap';


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


// Mentors needs to be defined as a class in order for us to set the state
class Mentors extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      mentorData: [],
    };
  }
  
  // Get mentor data from the airtable api
  componentDidMount() {
    fetch('https://api.airtable.com/v0/appexkZgUcQ9vucI9/mentors?api_key=' + process.env.REACT_APP_AIRTABLE_KEY)
    .then((resp) => resp.json())
    .then(data => {
       this.setState({ mentorData: data.records });
    }).catch(err => {
      console.log(err);
    });
  }

  // Define the section as a whole
  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col>
            <h1 id="mentors" className="font-weight-bold">Mentors</h1>
          </Col>
        </Row>
        <Row>
            {this.state.mentorData.map(mentor => <MentorCard {...mentor.fields} /> )}
        </Row>
      </Container>
    );
  }
}

export default Mentors;