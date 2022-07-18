import React,{useState} from 'react';
import axios from "axios"

import { Link } from "react-router-dom";

import "./login.css"

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitLogin = ()=>{
        const creds = JSON.stringify({
            email:email,
            password:password
        })

        var config ={
            method: "post",
            url: 'http://localhost:5000/api/landing/login',
            headers: {
                'Content-Type':'application/json',
            },
            data: creds
        }
        axios(config)
        .then((res)=>{
            const user = res.data.user
            if(user){
                localStorage.setItem("email",user.email)
                localStorage.setItem("name",user.name.split(' ')[0])
                window.location.href='/dashboard'
            }
            else{
                alert("Invalid Login Credentials")
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <form className='login-form'>
            <label htmlFor="email">Email <br></br>
                <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ></input>
            </label>
            <label htmlFor="password">Password <br></br>
                <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ></input>
            </label>
            <p>No Account? <Link to="/signUp">Create New Account</Link></p>
            <div className='login-submit'>
                <button onClick={submitLogin} type="Button">
                    Sign in
                </button>
            </div>
        </form>
    )
}

export default LoginForm;