import React from "react";
import Achievement from "../components/achievement/Achievement";
import BrandsPhoto from "../components/brandsAndPhoto/Brands&Photo";
import Company from "../components/Company/Company";
import RecentWork from "../components/recentWork/RecentWork";
import ShowCase from "../components/showCase/ShowCase";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";

const Home = () => {
  return (
    <div>
      <ShowCase />
      <RecentWork />
      <WhatWeDo />
      <Achievement />
      <Company />
      <BrandsPhoto />
    </div>
  );
};

export default Home;
