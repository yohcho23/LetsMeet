import React from 'react';
import { Link } from 'react-router-dom';

import SignUpForm from './signupForm'

import logo from "../../assets/logo.png"

const SignUp = () => (
    <div className='signup-page'>
        <Link to="/">{"<- Back to home"}</Link>
        <div className='signup-page-container'>
            <div className='signup-page-container-left'>
            </div>
            <div className='signup-page-container-right'>
                <img src={logo} alt="logo"></img>
                <SignUpForm />
            </div> 
        </div> 
    </div>
)

export default SignUp;