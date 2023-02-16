import React from "react";

import Service_1 from "./Service_1";
import Service_2 from "./Service_2";
import Service_3 from "./Service_3";
import Service_4 from "./Service_4";
import Service_5 from "./Service_5";
import Service_6 from "./Service_6";

const WhatWeDo = () => {
  return (
    <div className="bg-left-down">
      <div className="container mx-auto gap-10">
        <h3 className="text-3xl md:text-5xl font-bold pt-10 text-center">
          What We Do
        </h3>
        <p className="text-white text-center max-w-[700px] p-5 md:px-0 md:mx-auto">
          Ezze Technology Ltd. is dedicated to providing innovative and
          cutting-edge solutions to meet the evolving needs of the tech
          industry. In recent years, we have been focused on expanding our
          product line and expanding into new markets.
        </p>
        <div className="md:p-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
          <Service_1 />
          <Service_2 />
          <Service_3 />
          <Service_4 />
          <Service_5 />
          <Service_6 />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
