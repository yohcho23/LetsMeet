import React from 'react';
import { Link } from 'react-router-dom';

import SignUpForm from './signupForm'

import home from "../../assets/landingpage/home.png"
import logo from "../../assets/logo.png"
import image from "../../assets/landingpage/accountaccess/signup.jpg"

const SignUp = () => (
    <div className='signup-page'>
        <Link to="/">
            <img className='signup-page-home-icon' src={home}></img>
            <p>Back to home</p>
        </Link>
        <div className='signup-page-container'>
            <div className='signup-page-container-left'>
                <img src={image}></img>
            </div>
            <div className='signup-page-container-right'>
                <img className='signup-page-container-right-img' src={logo} alt="logo"></img>
                <SignUpForm />
            </div> 
        </div> 
    </div>
)

export default SignUp;