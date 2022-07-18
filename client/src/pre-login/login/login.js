import React from 'react';
import { Link } from 'react-router-dom';

import LoginForm from './loginForm'

import logo from "../../assets/logo.png"

const Login = () => (
    <div className='login-page'>
        <Link to="/">{"<- Back to home"}</Link>
        <div className='login-page-container'>
            <div className='login-page-container-left'>
                <img src={logo} alt="logo"></img>
                <LoginForm />
            </div>
            <div className='login-page-container-right'>
            </div>
        </div>
    </div>
)

export default Login;