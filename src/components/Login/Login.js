import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock,   } from '@fortawesome/free-solid-svg-icons';
import './Login.css';

const Login = () => {
    return (
        <div className='login-main-div py-5 px-2'>
            <div className=' container  form-custom-css'>
            
            <Form className='form-input-css'>
            <h3>Login</h3>
                <div className='input-css'>


                <span className='d-flex align-items-center  justify-content '><FontAwesomeIcon className='mt-4 me-2' icon={faEnvelope} /> 
                 <input type="email" name='name' placeholder=' Your Email'/></span>


                 <span className='d-flex align-items-center  justify-content '><FontAwesomeIcon className='mt-4 me-2' icon={faLock} /> 
               <input type="password" name='password'  placeholder=' Your Password'/></span>


               </div>
               <br /><br />
               <input className='submit-css' type="submit" value='Login' />
               <br />
               <br />
               <p>New To DepoNic ? <Link to='/singup'>Sing Up Now </Link></p>
               <p>Forget password ? <button className='btn text-primary'> Reset password</button> </p>
              
               OR
               <br />
               <br />
               <button className='google-css'>Sing in With Google</button>
               
           </Form>
        </div>
            
        </div>
    );
};

export default Login;