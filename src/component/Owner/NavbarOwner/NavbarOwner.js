import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const NavbarOwner = ({ setPage }) => {

  const navigate = useNavigate()

  function logout(){
    localStorage.removeItem('ownerId')
    navigate('/')
  }

  return (

    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Housing Board</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="mx-5" onClick={() => { setPage('myHousings') }}>My Housings</Nav.Link>
          <Nav.Link onClick={() => { setPage('addHousing') }}>Add Housing</Nav.Link>
          <Nav.Link className="mx-5">Message</Nav.Link>
        </Nav>
        <Button variant="outline-light" onClick={logout}>Logout</Button>
      </Container>
    </Navbar>
  )
}

export default NavbarOwner