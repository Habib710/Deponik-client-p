import React from 'react';
import { Form } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    return (
        <div className=''>
            <div className=' container  form-custom-css'>
            
            <Form className='form-input-css'>
            <h3>Login</h3>
                <div className='input-css'>
 
               <input type="email" placeholder='Your Email'/>
               <input type="password" placeholder='Your Password'/>
               </div>
               <br /><br />
               <input className='submit-css' type="submit" value='Login' />
               <br />
               <br />
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