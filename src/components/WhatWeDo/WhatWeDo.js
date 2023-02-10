import React from "react";
import Line_1 from "../line/Line_1";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { FaAndroid } from "@react-icons/all-files/fa/FaAndroid";
import { FaTelegramPlane } from "@react-icons/all-files/fa/FaTelegramPlane";
import { FaDatabase } from "@react-icons/all-files/fa/FaDatabase";
import { RiLiveLine } from "@react-icons/all-files/ri/RiLiveLine";
import { FaStore } from "@react-icons/all-files/fa/FaStore";
import './WhatWeDo.css';

const WhatWeDo = () => {
  return (
    <div className="container mx-auto gap-10 md:mb-40">
      <h1 className="text-center text-4xl font-bold py-12">What We Do</h1>
      <hr className="w-[50px]" />
      <Line_1 />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-5 md:p-0">
        <div className="flex flex-col justify-between items-center shadow-lg box-1 bg-gray-100 p-7 rounded-md">
          <div className="img my-5">
            <FaReact className="text-5xl text-blue-500" />
          </div>
          <h1 className="text-center text-2xl font-bold my-5">
            Web Development
          </h1>
          <p>
            Ezze Technology Ltd. offers web solutions which tend to be effective
            tools of marketing and ensure return on investments.
          </p>
        </div>
        <div className="flex md:mb-[-80px] md:mt-[80px] flex-col justify-between items-center shadow-lg box-1 p-7 rounded-md">
          <div className="img my-5">
            <FaAndroid className="text-5xl text-green-500" />
          </div>
          <h1 className="text-center text-2xl font-bold my-5">
            Apps Development
          </h1>
          <p>
            We provide mobile applications and developments which makes the
            transition of your company into the online world.
          </p>
        </div>
        <div className="flex flex-col justify-between items-center shadow-lg box-1 bg-gray-100 p-7 rounded-md">
          <div className="img my-5">
            <FaTelegramPlane className="text-5xl text-blue-700" />
          </div>
          <h1 className="text-center text-2xl font-bold my-5">
            Digital Marketing
          </h1>
          <p>
            We are providing out of the box solutions which can help to find
            lasting and hi-impact solutions to marketing issue.
          </p>
        </div>
        <div className="flex flex-col justify-between items-center box-1 shadow-lg p-7 rounded-md">
          <div className="img my-5">
            <FaDatabase className="text-5xl text-[#32c5ca]" />
          </div>
          <h1 className="text-center text-2xl font-bold my-5">
            Digital Marketing
          </h1>
          <p>
            With an authoritative and straightforward way to hosting solution,
            we are able to cover everyone’s need and requirements
          </p>
        </div>
        <div className="md:mb-[-80px] md:mt-[80px] flex flex-col justify-between items-center box-1 shadow-lg bg-gray-100 p-7 rounded-md">
          <div className="img my-5">
            <RiLiveLine className="text-5xl text-[#d3c339]" />
          </div>
          <h1 className="text-center text-2xl font-bold my-5">
            Live Streaming
          </h1>
          <p>
            We ensure video streaming platform which allows customers to live
            their video content in a seamless way.
          </p>
        </div>
        <div className="flex flex-col justify-between items-center box-1 shadow-lg p-7 rounded-md">
          <div className="img my-5">
            <FaStore className="text-5xl text-[#24928d]" />
          </div>
          <h1 className="text-center text-2xl font-bold my-5">
            E-Commerce Solution
          </h1>
          <p>
            Ezze Technology Ltd. brings a package program that lets you build,
            customize, and run an online store.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
