import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from "../../assets/logo.png"

import "./sideBar.css"

function Sidebar (props) {
    return (
        <div className={`sidebar ${props.action && "sidebar-show"}`}>
            {/*<button className='sidebar-close-button'>X</button>*/}
            <div className='sidebar-content'>
                <img src={logo} alt="logo"></img>
                <hr></hr>
                <Link to={"/dashboard"}>Home</Link> <br></br>
                <Link to={"/groups"}>Groups</Link> <br></br>
                <Link to={"/settings"}>Settings</Link> <br></br>
                <Link to={"/"}>Logout</Link> <br></br>
            </div>
        </div>
    )
  };
  
  export default Sidebar;