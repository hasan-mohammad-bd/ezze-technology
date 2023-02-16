import React from "react";
import Footer_col_1 from "./Footer_col_1";
import Footer_col_2 from "./Footer_col_2";
import Footer_col_3 from "./Footer_col_3";
import logo from "../../image/logo/etl-sticky-logo.png";

const Footer = () => {
  return (
    <div className="bg-down px-5 md:px-0">
      <div className="text-1 container mx-auto">
        <div className="logo pt-7">
          <img className=" max-w-[200px] mx-auto" src={logo} alt="" />
        </div>
        <div className="flex justify-between p-5 md:px-20 items-center flex-col md:flex-row ">
          <Footer_col_1 />
          <Footer_col_2 />
          <Footer_col_3 />
        </div>
      </div>
      <div className="text-1 container mx-auto p-4 mt-3 text-center">
        <p>© 2023 EZZE TECHNOLOGY LTD.</p>
      </div>
    </div>
  );
};

export default Footer;
