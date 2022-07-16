import React from 'react';
import { Routes as R, Route } from 'react-router-dom';

//Pre-login
import Landing from './pre-login/landing/landing';
import Login from './pre-login/login/login';
import About from './pre-login/about/about';
import SignUp from './pre-login/signup/signup';

//Post-login
import Dashboard from './user/dashboard/dashboard';
import Settings from './user/settings/settings';
import Groups from './user/groups/groups';

const Routes = () => (
    <R>
        {/*Pre-login*/}
        <Route path="/" element={<Landing/>} exact/>
        <Route path="/login" element={<Login/>} exact/>
        <Route path="/signUp" element={<SignUp/>} exact/>
        <Route path="/about" element={<About/>} exact/>
        {/*Post-login*/}
        <Route path="/dashboard" element={<Dashboard/>} exact/>
        <Route path="/settings" element={<Settings/>} exact/>
        <Route path="/groups" element={<Groups/>} exact/>
    </R>
        
);

export default Routes;