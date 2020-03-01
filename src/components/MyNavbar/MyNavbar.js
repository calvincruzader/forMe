import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import './MyNavbar.css';

export default function MyNavbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar className="mynavbar" collapseOnSelect bg="light" variant="light">
        <Navbar.Brand href="#home">forMe</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav className="mr-auto">
            {/* <Nav.Link className="mobile-login" href="#features">login</Nav.Link>
            <Nav.Link className="mobile-login" href="#pricing">signup</Nav.Link>
            */}
        </Nav>

        <Nav style={{display: (props.showBtn === "true") ? "" : "none"}}>
            <Button  className="mynavbar-btn" variant="outline-secondary" size="sm">login</Button>
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
            <Button  className="mynavbar-btn" variant="outline-secondary" size="sm">sign up</Button>
        </Nav>
          
      </Navbar>
    </div>
  )
}
