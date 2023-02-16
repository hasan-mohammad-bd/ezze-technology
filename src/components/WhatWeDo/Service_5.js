import React from "react";
import { RiLiveLine } from "@react-icons/all-files/ri/RiLiveLine";

const Service_5 = () => {
  return (
    <div className="flex flex-col justify-between items-center box-1 shadow-lg bg-gray-100 p-7 rounded-md">
      <div className="img my-5">
        <RiLiveLine className="text-7xl text-[#d3c339]" />
      </div>
      <h1 className="text-center text-2xl font-bold my-5">Live Streaming</h1>
      <p>
        We ensure video streaming platform which allows customers to live their
        video content in a seamless way.
      </p>
    </div>
  );
};

export default Service_5;
