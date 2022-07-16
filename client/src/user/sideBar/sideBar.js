import { fallDown as Menu } from 'react-burger-menu';
import { useNavigate } from 'react-router-dom';
import React from 'react';

import "./sideBar.css"

function Sidebar () {
    const navigate = useNavigate();
    
    const logout = ()=>{
        navigate('/')
    }

    return (
      <Menu className='menu-bar'>
        <button 
            className="menu-item" 
            onClick={(e)=>{navigate('/dashboard')}}>
            Home
        </button>
        <button 
            className="menu-item" 
            onClick={(e)=>{navigate('/groups')}}>
            Groups
        </button>
        <button 
            className="menu-item" 
            onClick={(e)=>{navigate('/settings')}}>
            Settings
        </button>
        <button 
            className="menu-item" 
            onClick={()=>{logout()}}>
            Logout
        </button>
      </Menu>
    );
  };
  
  export default Sidebar;