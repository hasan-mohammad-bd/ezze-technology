import React from "react";
import { FaReact } from "@react-icons/all-files/fa/FaReact";

const Service_1 = () => {
  return (
    <div className="flex flex-col justify-between items-center shadow-lg box-1 bg-gray-100 p-7 rounded-md ">
      <div className="img my-5">
        <FaReact className="text-7xl text-blue-500" />
      </div>
      <h1 className="text-center text-2xl font-bold my-5">Web Development</h1>
      <p>
        Ezze Technology Ltd. offers web solutions which tend to be effective
        tools of marketing and ensure return on investments.
      </p>
    </div>
  );
};

export default Service_1;
