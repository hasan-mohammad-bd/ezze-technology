import React from "react";

import Recent_Card_1 from "./Recent_Card_1";
import Recent_Card_2 from "./Recent_Card_2";
import Recent_Card_3 from "./Recent_Card_3";

const RecentWork = () => {
  return (
    <div className="bg-up py-10 md:h-[100vh]">
      <div className="flex container mx-auto h-full flex-col-reverse md:flex-row justify-center items-center">
        <div className="card grid grid-cols-1 mx-5 lg:mx-0 lg:grid-cols-3 md:grid-cols-2 gap-4">
          <Recent_Card_1 />
          <Recent_Card_2 />
          <Recent_Card_3 />
        </div>
        <div className="text m-10">
          <h3 className="text-5xl font-bold pt-10">Recent Work</h3>
          <p className="my-5">
            We are constantly exploring new ways to improve our technology and
            stay ahead of the curve. Whether it is through developing new
            products or expanding our offerings into new markets, we are
            committed to providing our customers with the best technology
            solutions available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
