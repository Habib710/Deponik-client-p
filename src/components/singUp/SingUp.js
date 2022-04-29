import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './singup.css';

const SingUp = () => {
    return (
        <div className='py-5 px-2'>
            <div className=' container singup-custom  form-custom-css'>
            
            <Form className='form-input-css'>
            <h3>Sing Up</h3>
                <div className='input-css'>
                <span className='d-flex align-items-center  justify-content '><FontAwesomeIcon className='mt-4 me-2' icon={faUser} /> 
                 <input type="text" name='name' placeholder=' Your Name'/></span>
                <span className='d-flex align-items-center  justify-content '><FontAwesomeIcon className='mt-4 me-2' icon={faEnvelope} /> 
                 <input type="email" name='email' placeholder=' Your Email'/></span>

                 <span className='d-flex align-items-center  justify-content '><FontAwesomeIcon className='mt-4 me-2' icon={faLock} /> 
               <input type="password" name='password'  placeholder=' Your Password'/></span>

                 <span className='d-flex align-items-center  justify-content '><FontAwesomeIcon className='mt-4 me-2' icon={faLock} /> 
               <input type="password" name='conpassword' placeholder='Confrim Your Password'/></span>
               </div>
               <br /><br />
               <input className='submit-css w-50' type="submit" value='Login' />
               <br />
               <br />
               <p>Have an account ? <Link to='/login'>Login Now </Link></p>
            
              
               OR
              
               <br />
               <button className='google-css w-50'>Sing in With Google</button>
               
           </Form>
        </div>
            
        </div>
    );
};

export default SingUp;