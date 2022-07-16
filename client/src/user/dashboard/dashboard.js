import React from 'react';

import Sidebar from '../sideBar/sideBar';
import "./dashboard.css"

const Dashboard = () => (
    <div>
        <div className='intro-header'>
            <p>{`Welcome, ${localStorage.getItem("name")}`}</p>
        </div>
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div>
            Dashboard
        </div>
    </div>
)

export default Dashboard;