import React from 'react';

import {Card, CardGroup} from 'react-bootstrap'
import Bimg from '../components/images/bookworm.png'
import Gimg from '../components/images/Screenshot Golf_tracker.png'
const Cards = () => {
  return (
    <cards>
       <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Resume</Card.Title>
      <Card.Text>
      United States Army/National Guard 2018- current:
                
                68P Radiology Tech: Operation of X-ray machines and equipment used for CT scans, MRI scans and Nuclear
                Medicine. Performing complex radiographic exams and ensuring proper patient care as well as operating
                fixed and portable radiology equipment, sometimes in the field.
                
      </Card.Text>
      <Card.Text>
      Education:
                
                Anoka Ramsey Community College
                40 credits
                Medical Education and Training Campus, Joint Base San Antonio:
                Graduated October 2019, completion of course 68P, Radiology Technologist.
                Additional skills: Proficient at using Microsoft Office Word, Excel and Powerpoint. Warrior tasks and
                drills. BLS certified. CPR certified. Proficient in customer service/patient care.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Contact Me</Card.Title>
      <Card.Text>
        Phone Number: 651-352-8932
      </Card.Text>
      <Card.Text>
        Email: 97alane@gmail.com
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  <Card>
  <Card.Title>Projects</Card.Title>
    
    <Card.Body>
    <Card.Img variant="top" href="https://powe0186.github.io/project1/" src={Bimg} />
    <Card.Img variant="top" href="https://morning-bastion-43801.herokuapp.com/" src={Gimg} />
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
    </cards>
  );
};

export default Cards;