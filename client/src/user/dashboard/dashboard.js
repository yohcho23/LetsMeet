import React, { useState } from 'react';

import Sidebar from '../sideBar/sideBar';

import "./dashboard.css"

const Dashboard = () => {
    const [openSideBar, setOpenSideBar] = useState(false)

    return(
        <div className='dashboard-page'>
            <Sidebar action={openSideBar}/>
            <div className='dashboard-page-content' onClick={()=>{openSideBar && setOpenSideBar(false)}}>
                <div className='dashboard-page-content-top'>
                    <h1>{`Welcome, ${localStorage.getItem("name")}`}</h1>
                    <button onClick={()=>setOpenSideBar(true)} className='dashboard-page-content-top-button'>Navigate</button>
                </div>
                <div className='dashboard-page-content-main'>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;