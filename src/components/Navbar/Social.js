import React from "react";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";

const Social = () => {
  return (
    <div className="bg-gray-200 py-1">
      <div className="flex container mx-auto justify-between items-center">
        <div className="welcome">
            <p>Welcome to Ezze Technology</p>
        </div>
        <div className="social text-[1rem] flex justify-between items-center w-[120px]">
            <a href=""><FaFacebookF/></a>
            <a href=""><FaTwitter/></a>
            <a href=""><FaInstagram/></a>
            <a href=""><FaLinkedinIn/></a>
        </div>
      </div>
    </div>
  );
};

export default Social;
