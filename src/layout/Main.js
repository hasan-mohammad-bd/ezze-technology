import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Social from '../components/Navbar/Social';


const Main = () => {
    return (
        <div>
            <Social/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;