import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import logo from '../../../image/logo_transparent.png';


const NavbarAdmin = ({setPage}) => {

  const navigate = useNavigate()

  function logout(){
    localStorage.removeItem('adminId')
    navigate('/')
  }
  
  return (

    <Navbar bg="primary" variant="dark" sticky='top'>
      <Container>
        <Navbar.Brand style={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            height="40"
            className="d-inline-block align-top"
            alt="Housing Board logo"
          />
          <span style={{ marginLeft: "10px" }}>EUC Housing Board</span>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="mx-5" onClick={()=>{setPage('Housing')}}>Housings</Nav.Link>
          <Nav.Link onClick={()=>{setPage('HousingType')}}>Housing Type</Nav.Link>
        </Nav>
        <Button variant="outline-light" onClick={logout}>Logout</Button>
      </Container>
    </Navbar>
  )
}

export default NavbarAdmin