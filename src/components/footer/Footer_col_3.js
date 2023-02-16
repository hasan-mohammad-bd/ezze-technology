import React from "react";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";

const Footer_col_3 = () => {
  return (
    <div className="grid grid-cols-1 gap-y-3 pt-5">
      <h3 className="text-lg pb-3 text-center">Follow Us:</h3>
      <div className="social text-[2rem] flex justify-between items-center text-center">
        <a href="">
          <FaFacebookF className="" />
        </a>
        <a href="">
          <FaTwitter className="ml-3" />
        </a>
        <a href="">
          <FaInstagram className="ml-3" />
        </a>
        <a href="">
          <FaLinkedinIn className="ml-3" />
        </a>
      </div>
    </div>
  );
};

export default Footer_col_3;
