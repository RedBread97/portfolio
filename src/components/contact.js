import React from 'react';

import {Card} from 'react-bootstrap'

const Contact = () => {
  return (
    <div>
        <Card bg='secondary'>
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
    </Card.Footer>
  </Card>
    </div>
  );
};

export default Contact;