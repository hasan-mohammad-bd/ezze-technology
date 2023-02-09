import React from "react";
import hero_photo from "../../image/demo-photo.jpg";
import { useNavigate } from "react-router-dom";

const ShowCase = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="h-screen flex flex-col md:flex-row justify-between items-center container mx-auto">
        <div className="text flex-1 py-10 p-10 md:p-0">
          <h1 className="text-6xl font-bold">Welcome to Innovation</h1>
          <p className="my-5">
            Unleashing the power of technology through exceptional and
            innovative solutions. Transforming the future with Ezze Technology
            Ltd.
          </p>
          <button className="bg-black p-3 text-white rounded-md" onClick={()=>{navigate('/about')}}>Read More</button>
        </div>
        <div className="pic flex-1">
          <img src={hero_photo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
