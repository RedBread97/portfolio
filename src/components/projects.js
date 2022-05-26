import React from 'react';

import {Card, CardGroup} from 'react-bootstrap'
import Bimg from '../components/images/bookworm.png'
import Gimg from '../components/images/Screenshot Golf_tracker.png'

const Projects = () => {
  return (
    <projects>
        <CardGroup>
<Card bg="secondary">
  <Card.Title>Bookworm</Card.Title>
    
    <Card.Body>
    <a href="https://powe0186.github.io/project1/">
    <Card.Img variant="top" src={Bimg} />
    </a>

    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>

      <Card bg="secondary">
  <Card.Title>Let's Go Golfing!</Card.Title>
    
    <Card.Body>
    
    <a href="https://morning-bastion-43801.herokuapp.com/">
    <Card.Img variant="top"  src={Gimg} />
    </a>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
  </CardGroup>
    </projects>
  );
};

export default Projects;