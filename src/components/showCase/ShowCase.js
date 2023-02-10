import React from "react";
import hero_photo from "../../image/demo-photo.jpg";
import { useNavigate } from "react-router-dom";

const ShowCase = () => {
    const navigate = useNavigate();
  return (
    <div className="hero-section">
      <div className="md:p-10 p-0 h-[100vh] flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="text-1 md:flex-1 py-3 md:py-10 px-5 md:p-7">
          <h1 className="text-4xl md:text-7xl font-bold">Welcome to Innovation..</h1>
          <p className="my-5">
            Unleashing the power of technology through exceptional and
            innovative solutions. Transforming the future with Ezze Technology
            Ltd.
          </p>
          <button className="bg-yellow-600 p-3 text-white rounded-md" onClick={()=>{navigate('/about')}}>Read More</button>
        </div>
        <div className="md:flex-1"></div>
      </div>
    </div>
  );
};

export default ShowCase;
