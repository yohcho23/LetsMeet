import { Link } from "react-router-dom";
import React from 'react';

import './topBar.css';

const TopBar = () => (
    <div className='topBar'>
        <ul className='topBar-menu'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </div>
)

export default TopBar;