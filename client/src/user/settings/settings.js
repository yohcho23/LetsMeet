import React from 'react';

import Sidebar from '../sideBar/sideBar';
import "../repeatComponents.css"

const Settings = () => (
    <div>
        <div className='intro-header'>
            <p>Settings</p>
        </div>
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div>
            Settings
        </div>
    </div>
)

export default Settings;