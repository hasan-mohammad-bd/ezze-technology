import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Home from '../page/Home';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;