import React from 'react';

import {Card} from 'react-bootstrap'

const Resume = () => {
  return (
    <div>
      <Card bg='secondary' className='resume' > 
    
    
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

    </Card.Footer>
    
  </Card>  
    </div>
  );
};

export default Resume;