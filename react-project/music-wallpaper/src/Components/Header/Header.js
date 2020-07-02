import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className='header'>
            <Navbar.Brand href="#home">Wall Covers</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Link to='/home'><p className='links'>Home</p></Link>
                <Link to='/grid'><p className='links'>Link</p></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header