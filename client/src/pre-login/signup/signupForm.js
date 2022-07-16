import React,{useState} from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";

import "./signup.css"

const SignUpForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitSignUp = ()=>{
        var config ={
            method: "post",
            url: 'http://localhost:5000/api/landing/signup',
            headers: {
                'Content-Type':'application/json',
            },
            data: {
                name:`${firstName} ${lastName}`,
                email:email,
                password:password
            }
        }
        axios(config)
        .then((res)=>{
            console.log(res)
            window.location.href='/login'
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <div className='signup'>
            <form>
                <div className='signup-forms'>
                    <label htmlFor="firstName">Fist Name <br></br>
                        <input 
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        ></input>
                        <br></br>
                    </label>
                    <label htmlFor="lastName">Last Name <br></br>
                        <input 
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        ></input>
                        <br></br>
                    </label>
                    <label htmlFor="email">Email <br></br>
                        <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        <br></br>
                    </label>
                    <label htmlFor="password">Password <br></br>
                        <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        ></input>
                        <br></br>
                    </label>
                    <label htmlFor="confirmPassword">Confirm Password <br></br>
                        <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        ></input>
                        <br></br>
                    </label>
                </div>
                <br></br>
                <Link to="/login">Back to Login</Link>
                <div className='signup-submit'>
                    <button 
                    onClick={submitSignUp}
                    type="button"
                    >Submit</button>
                </div>
                
            </form>
        </div>
    )
}

export default SignUpForm;