import React from 'react';
import { Link } from 'react-router-dom';

import LoginForm from './loginForm'

import home from "../../assets/landingpage/home.png"
import logo from "../../assets/logo.png"
import image from "../../assets/landingpage/accountaccess/login.jpg"

const Login = () => (
    <div className='login-page'>
        <Link to="/">
            <img className='signup-page-home-icon' src={home}></img>
            <p>Back to home</p>
        </Link>
        <div className='login-page-container'>
            <div className='login-page-container-left'>
                <img src={logo} alt="logo"></img>
                <LoginForm />
            </div>
            <div className='login-page-container-right'>
                <img src={image} alt="login-side"></img>
            </div>
        </div>
    </div>
)

export default Login;