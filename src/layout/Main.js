import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import NavBarNew from '../components/Navbar/NavBarNew';

import Social from '../components/Navbar/Social';


const Main = () => {
    return (
        <div>
            <NavBarNew/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;