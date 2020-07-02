import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className='header'>
            <Navbar.Brand href="#home"><h1 className='title'>Wall Covers</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Link to='/home'><p className='links'>Home</p></Link>
                <Link to='/instructions'><p className='links'>Instructions</p></Link>
                <Link to='/grid'><p className='links'>Wallpaper</p></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header