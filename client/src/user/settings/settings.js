import React, {useState} from 'react';

import Sidebar from '../sideBar/sideBar';

import "./settings.css"

const Settings = () => {
    const [openSideBar, setOpenSideBar] = useState(false)

    const [inputTypeChoice, setInputTypeChoice] = useState(true)
    const [startTime, setStartTime] = useState(0)
    const [endTime, setEndTime] = useState(0)

    return(
        <div className='settings-page'>
            <Sidebar action={openSideBar}/>
            <div className='settings-page-content' onClick={()=>{openSideBar && setOpenSideBar(false)}}>
                <div className='settings-page-content-top'>
                    <h1>Settings</h1>
                    <button onClick={()=>setOpenSideBar(true)} className='settings-page-content-top-button'>Navigate</button>
                </div>
                <div className='settings-page-content-main'>
                    <form className='settings-page-content-main-form'>
                        <label> Input Preference:
                            <p>Free times</p>
                            <input type="radio"></input>
                            <p>Busy times</p>
                            <input type="radio"></input>
                        </label>
                        <label> Morning Start Time:
                            <input type="time"></input>
                        </label>
                        <label> Night End Time:
                            <input type="time"></input>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Settings;