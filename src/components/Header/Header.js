import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import CustomLink from '../../custom/CustomLink';
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
        <CustomLink to='/home'>Home</CustomLink>
        <CustomLink to='/inven'> Inventories</CustomLink>
        <CustomLink to='/manageitems'>Manage Items</CustomLink>
        <CustomLink to='/blog'>Blog</CustomLink>
        <CustomLink to='/login' >Login</CustomLink>
        <CustomLink to='/singup' >SingUp</CustomLink>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Header;