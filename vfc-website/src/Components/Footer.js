import React from 'react';
import './Footer.css'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'


const Footer = () => {
    
    return (
        <div className='footer text-center'>
            <img src='../Image/vfc_logo.png' alt='logo' width={300}/>
            <div className='row'>
                <div className='col col1'>
                    <h5>Club </h5>
                    <li>Victoriouus Fencing club,</li>
                    <li>DSO, Nagpur.</li>
                    <li>Email-Id: <a href='#'>abc@gmail.com</a></li>
                </div>
                <div className='col col3'>
                    <h5>Our </h5>
                    <li>Eppe</li>
                    <li>Foil</li>
                    <li>Saber</li>
                </div>
                <div className='col col2'>
                <h5>Our  </h5>
                
                    <li><a href='#'><FaInstagram className='icons instagram' />  Instagram</a></li>
                    <li><a href='#'><FaFacebook className='icons facebook' /> FaceBook</a></li>
                    <li><a href='#'><FaYoutube className='icons youtube' /> Youtube</a></li>
                   
                </div>
            </div>
            <hr/>
          <div className='copyright'> 
            <p>
                @{new Date().getFullYear()} VFC. All right Reserved. || <a href='#'>Privacy Policy</a> || <a href='#'>Terms and Conditions</a> || 
            </p>
          </div>
        </div>
    )
}
export { Footer }