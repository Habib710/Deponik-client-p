import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';


import CustomLink from '../../custom/CustomLink';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);
  

  const singout = () => {
    signOut(auth);
  };


    return (
        <div>
     <Navbar className='costum-css-nav'  variant='dark' expand="lg">
  <Container>
    <Navbar.Brand className='ittle'>DEPO<span className='deponic'>NIC</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">

        <CustomLink to='/home' >Home</CustomLink>
       

        {
          user?<CustomLink to='/manageitems'>Manage Items</CustomLink>:''
        }
        {
          user?<CustomLink to='/addnew'>Add Item</CustomLink>:''
        }
        {
          user?<CustomLink to='/myitems'>My Items</CustomLink>:''
        }
        <CustomLink to='/blog'>Blog</CustomLink>
        {
          user?<button onClick={singout} className='btn btn-singout'>Sing Out</button>
          :
          <CustomLink to='/login' >Login</CustomLink>
        
        }
        {
          user?'':<CustomLink to='/singup' >SingUp</CustomLink>
        }
        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Header;