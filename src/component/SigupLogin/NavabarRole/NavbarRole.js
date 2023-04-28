import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const NavbarRole = ({setChoice}) => {



    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={()=>{setChoice("student")}}>Student</Nav.Link>
                    <Nav.Link onClick={()=>{setChoice("owner")}}>Owner</Nav.Link>
                    <Nav.Link onClick={()=>{setChoice("admin")}}>Admin</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarRole