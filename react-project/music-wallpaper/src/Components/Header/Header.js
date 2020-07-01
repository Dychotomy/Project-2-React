import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className='header'>
            <Navbar.Brand href="#home">Wall Covers</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header