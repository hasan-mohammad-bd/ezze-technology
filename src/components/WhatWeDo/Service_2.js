import React from "react";
import { FaAndroid } from "@react-icons/all-files/fa/FaAndroid";

const Service_2 = () => {
  return (
    <div className="flex flex-col justify-between items-center shadow-lg box-1 p-7 rounded-md">
      <div className="img my-5">
        <FaAndroid className="text-7xl text-green-500" />
      </div>
      <h1 className="text-center text-2xl font-bold my-5">Apps Development</h1>
      <p>
        We provide mobile applications and developments which makes the
        transition of your company into the online world.
      </p>
    </div>
  );
};

export default Service_2;
