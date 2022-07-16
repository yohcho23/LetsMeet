import React from 'react';

import Sidebar from '../sideBar/sideBar';
import Content from "./content"
import "../repeatComponents.css"

const Groups = () => (
    <div>
        <div className='intro-header'>
            <p>Groups</p>
        </div>
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
        <Content />
    </div>
)

export default Groups;