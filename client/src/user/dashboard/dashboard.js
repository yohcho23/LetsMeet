import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Sidebar from '../sideBar/sideBar';

import burgerMenu from "../../assets/burger-menu.png"

import "./dashboard.css"

const Dashboard = () => {
    const {state} = useLocation();
    const [openSideBar, setOpenSideBar] = useState(false)

    return(
        <div className='dashboard-page'>
            <Sidebar userInfo={state} action={openSideBar}/>
            <div className='dashboard-page-content' onClick={()=>{openSideBar && setOpenSideBar(false)}}>
                <div className='dashboard-page-content-top'>
                    <h1>{`Welcome, ${state.name}`}</h1>
                    <button onClick={()=>setOpenSideBar(true)} className='dashboard-page-content-top-button'>
                        <img src={burgerMenu}></img>
                    </button>
                </div>
                <div className='dashboard-page-content-main'>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;