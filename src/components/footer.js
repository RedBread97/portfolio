import { Alert } from 'bootstrap';
import React from 'react';

import {Container,Navbar} from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Navbar fixed="bottom" expand="lg" variant="light" bg="info">
                <Container>
                    <Navbar.Brand href="#https://github.com/RedBread97">RedBread97</Navbar.Brand>
                    <Navbar.Brand href="#Footer"></Navbar.Brand>
                </Container>
            </Navbar>

        </footer>
    );
};
//need to figure out how to link to GitHub
export default Footer;