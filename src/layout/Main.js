import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import NavBarNew from "../components/Navbar/NavBarNew";



const Main = () => {
  return (
    <div>
      <NavBarNew />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
