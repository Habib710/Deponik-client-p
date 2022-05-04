import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import {   } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
    return (
        <div className='footer-css py-5 '>
            <div className='text-div text-white text-center container'>
                <h1>D E P O <span className='deponic'>N I C</span></h1>
                <h5>All The Right Reserved</h5>
                <h5>Md Habibullah</h5>
                <h6>Copyright @ 2022</h6>


            </div>
            <div className=' text-div  text-white  container'>
                <h2>Our Link And Group</h2>
                <div className='d-flex mt-4'>
                <h2 className='p-3 social-css'>
                    <a  href="https://www.facebook.com/" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} /></a></h2>
                <h2 className='p-3 social-css'><a  href="https://twitter.com/i/flow/login"target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></h2>
                <h2 className='p-3 social-css'><a  href="https://www.instagram.com/?hl=en"target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></h2>
                <h2 className='p-3 social-css'><a  href="https://www.youtube.com/"target="_blank"><FontAwesomeIcon icon={faYoutube} /></a></h2>
                

                </div>

             
                

            </div>
            
        </div>
    );
};

export default Footer;