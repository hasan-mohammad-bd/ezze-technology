import React from "react";
import { FaTelegramPlane } from "@react-icons/all-files/fa/FaTelegramPlane";

const Service_3 = () => {
  return (
    <div className="flex flex-col justify-between items-center shadow-lg box-1 bg-gray-100 p-7 rounded-md">
      <div className="img my-5">
        <FaTelegramPlane className="text-7xl text-blue-700" />
      </div>
      <h1 className="text-center text-2xl font-bold my-5">Digital Marketing</h1>
      <p>
        We are providing out of the box solutions which can help to find lasting
        and hi-impact solutions to marketing issue.
      </p>
    </div>
  );
};

export default Service_3;
