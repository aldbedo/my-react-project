import { Nav, Col, Row }  from 'react-bootstrap'
import React, { useState } from 'react'

function Header() {

    const [currentPostion, setCurrentPosition] = useState('Home');

    return (
        <header className="nav-bar">
            {/* <h1>My Website</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav> */}

            <Row>
                <Col md={3}>
                    <h2 className="title-heading">Portfolio</h2>
                </Col>
                <Col md={9}>
                    <Nav>
                        <Nav.Link className="nav-link" id="Home" href="#Home">Home</Nav.Link>
                        <Nav.Link className="nav-link" id="About" href="#About">About</Nav.Link>
                        <Nav.Link className="nav-link" id="Services" href="#Services">Services</Nav.Link>
                        <Nav.Link className="nav-link" id="Contact" href="#Contact">Contact</Nav.Link>
                    </Nav>
                </Col>
            </Row>
            <hr></hr>
        </header>
    );
}

export default Header