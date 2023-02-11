import React from "react";
import Clients from "../clients/Clients";
import Partner from "../Partner/Partner";

const Company = () => {
  return (
    <div className="py-10 bg-down px-5 md:px-0">
      <Clients />
      <Partner />
    </div>
  );
};

export default Company;
