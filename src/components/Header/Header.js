import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
     <Navbar className='costum-css-nav'  variant='dark' expand="lg">
  <Container>
    <Navbar.Brand className='ittle'>DEPONIC</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Link to='/home'>Home</Link>
        <Link to='/inven'> Inventories</Link>
        <Link to='/manageitems'>Manage Items</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/login' >Login</Link>
        <Link to='/singup' >SingUp</Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Header;