import React from 'react';

import {Card, CardGroup} from 'react-bootstrap'
import Resume from '../components/resume'
import Projects from '../components/projects'
import Contact from '../components/contact'
import About from '../components/aboutMe'

const Cards = () => {
  return (
    <div>
       <CardGroup>
        
        <Projects />
        <Resume />
        <Contact />
  

  
</CardGroup>
    </div>
  );
};

export default Cards;