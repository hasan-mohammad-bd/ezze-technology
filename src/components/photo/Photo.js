import React from "react";
import team from "../../image/team.png";
import office from "../../image/office.png";

const Photo = () => {
  return (
    <div>
      <h3 className="text-3xl md:text-5xl font-bold py-10 text-center">Photo Stream</h3>
      <div className="flex flex-col md:flex-row justify-content items-center">
        <div>
          <img src={team} alt="" />
        </div>
        <div>
          <img src={office} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Photo;
