import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Social from '../components/Navbar/Social';


const Main = () => {
    return (
        <div>
            <Social/>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;