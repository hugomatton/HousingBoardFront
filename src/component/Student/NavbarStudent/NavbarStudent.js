import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarStudent = () => {
    return (

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Housing Board</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Housing</Nav.Link>
            <Nav.Link href="#features">Message</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavbarStudent