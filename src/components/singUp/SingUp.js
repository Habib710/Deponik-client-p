import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './singup.css';

const SingUp = () => {
    const [email,setemail]=useState([]);
    const [password,setpassword]=useState([]);
    const [conpass,setconpass]=useState([]);
    const navigate=useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


    const NameHendle =event=>{
        console.log(event.target.value);
    }
    const emailhendle=event=>{
        setemail(event.target.value);
        console.log(event.target.value);

    }
    const passwordhendle=event=>{
       setpassword(event.target.value);
       console.log(event.target.value);
    }
    const conpasshendle=event=>{
        setconpass(event.target.value);
    }
    const onsubmit=event=>{
        event.preventDefault()
        createUserWithEmailAndPassword(email, password)


    }
    if(user){
        
        navigate('/blog')
    }
    return (
        <div className='py-5 px-2 d-lg-flex  align-items-center  singup-custom-div'>
        
            <div className=' container singup-custom  form-custom-css '>
            
            <Form onSubmit={onsubmit} className='form-input-css'>
            <h3>Sing Up</h3>
                <div className='input-css'>
                <span className='d-flex align-items-center   '><FontAwesomeIcon className='mt-4 me-2' icon={faUser} /> 
                 <input onBlur={NameHendle} type="text" placeholder=' Your Name'/></span>

                <span className='d-flex align-items-center  '><FontAwesomeIcon className='mt-4 me-2' icon={faEnvelope} /> 
                 <input onBlur={emailhendle} type="email"  placeholder=' Your Email'/></span>

                 <span className='d-flex align-items-center  nt '><FontAwesomeIcon className='mt-4 me-2' icon={faLock} /> 
               <input onBlur={passwordhendle} type="password"   placeholder=' Your Password'/></span>

                 <span className='d-flex align-items-center   '><FontAwesomeIcon className='mt-4 me-2' icon={faLock} /> 
               <input onBlur={conpasshendle} type="conpassword"  placeholder='Confrim Your Password'/></span>
               </div>
               <br /><br />
               <input className='submit-css w-50' type="submit" value='Sing Up' />
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