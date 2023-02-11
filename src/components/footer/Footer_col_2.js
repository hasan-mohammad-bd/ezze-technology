import React from "react";

import { FaChevronCircleRight } from "@react-icons/all-files/fa/FaChevronCircleRight";

const Footer_col_2 = () => {
  return (
    <div className="py-3">
                    <h3 className="text-lg pb-8">Company:</h3>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex justify-start items-center mb-1">
          <FaChevronCircleRight className="mr-3" /> <p>About</p>
        </div>
        <div className="flex justify-start items-center mb-1">
          <FaChevronCircleRight className="mr-3" /> <p>Careers</p>
        </div>
        <div className="flex justify-start items-center mb-1">
          <FaChevronCircleRight className="mr-3" /> <p>Services</p>
        </div>
        <div className="flex justify-start items-center mb-1">
          <FaChevronCircleRight className="mr-3" /> <p>Terms & Service</p>
        </div>
        <div className="flex justify-start items-center mb-1">
          <FaChevronCircleRight className="mr-3" /> <p>Quality Policy</p>
        </div>
        <div className="flex justify-start items-center mb-1">
          <FaChevronCircleRight className="mr-3" /> <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer_col_2;
