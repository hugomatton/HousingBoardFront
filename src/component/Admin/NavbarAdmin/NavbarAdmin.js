import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarAdmin = ({setPage}) => {
    return (

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Housing Board</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="mx-5" onClick={()=>{setPage('housings')}}>Housings</Nav.Link>
            <Nav.Link onClick={()=>{setPage('housingType')}}>Housing Type</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavbarAdmin