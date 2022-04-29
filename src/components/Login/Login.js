import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { faEnvelope, faLock,   } from '@fortawesome/free-solid-svg-icons';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../loading/Loading';

const Login = () => {
    const [email,setemail]=useState([]);
    const [password,setpassword]=useState([]);
   
    const navigate=useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [signInWithGoogle,user1] = useSignInWithGoogle(auth);

      const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
      );
     

    const emailhendle=event=>{
        setemail(event.target.value);
        

    }
    const passwordhendle=event=>{
       setpassword(event.target.value);
       
    }
    const login=event=>{
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    if(loading){
        return <Loading></Loading>
    }
    

    if(user ||user1){
        
        navigate('/inven')
    }

    return (
        <div className='login-main-div py-5 px-2'>
            <div className=' container  form-custom-css'>
            
            <Form onSubmit={login} className='form-input-css'>
            <h3>Login</h3>
                <div className='input-css'>


                <span className='d-flex align-items-center  justify-content '><FontAwesomeIcon className='mt-4 me-2' icon={faEnvelope} /> 
                 <input onBlur={emailhendle} type="email"  placeholder=' Your Email'/></span>


                 <span className='d-flex align-items-center  justify-content '><FontAwesomeIcon className='mt-4 me-2' icon={faLock} /> 
               <input onBlur={passwordhendle} type="password"   placeholder=' Your Password' required/></span>


               </div>
               
               {
                   error?  <p className='text-danger'>Not found</p>:''
               }
               
               <br /><br />
               <input className='submit-css' type="submit" value='Login' />
               <br />
               <br />
               <p>New To DepoNic ? <Link to='/singup'>Sing Up Now </Link></p>
               <p>Forget password ? <button onClick={async () => {
          await sendPasswordResetEmail(email);
          toast("Email sending");}} className='btn text-primary'> Reset password</button> </p>
          <ToastContainer />
              
               OR
               <br />
              
               <button onClick={()=>signInWithGoogle()} className='google-css'>Sing in With Google</button>
               
           </Form>
        </div>
            
        </div>
    );
};

export default Login;