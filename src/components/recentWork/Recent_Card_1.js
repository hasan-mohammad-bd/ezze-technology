import React from "react";
import mojib from "../../image/Mujib100-logo.png";

const Recent_Card_1 = () => {
  return (
    <div className="flex flex-col justify-between items-center shadow-lg box-1 bg-gray-100 p-3 rounded-md ">
      <div className="img my-5">
        <img src={mojib} alt="" />
      </div>
      <h1 className="text-center my-2">PARLIAMENT MUJIB100</h1>
      <p className="text-sm text-green-600">Web App</p>
      <button className="bg-yellow-700 p-2 text-white rounded my-3">
        <a href="http://mujib100.parliament.gov.bd/" _target="_blank">
          View Site
        </a>
      </button>
    </div>
  );
};

export default Recent_Card_1;
