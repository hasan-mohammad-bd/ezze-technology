import React from "react";
import hero_photo from "../../image/demo-photo.jpg";
import { useNavigate } from "react-router-dom";
import mobile_pic from "../../image/hero-mobile-pic.png";
import { useSpring, animated } from "@react-spring/web";

const ShowCase = () => {
    const slider = useSpring({
        from: { x: -200 },
        to: { x: 0 },
      })
    const navigate = useNavigate();
  return (
    <div className="hero-section">
      <div className="md:p-10 p-0 md:h-[100vh] flex flex-col md:flex-row justify-center items-center">
        <animated.div style={slider} className="text-1 md:flex-1 py-3 md:py-10 px-5 md:p-7">
          <h1 className="text-2xl md:text-7xl font-bold">Welcome to Innovation..</h1>
          <p className="my-5">
            Unleashing the power of technology through exceptional and
            innovative solutions. Transforming the future with Ezze Technology
            Ltd.
          </p>
          <button className="bg-yellow-600 p-3 text-white rounded-md" onClick={()=>{navigate('/about')}}>Read More</button>
        </animated.div>
        <div className="md:flex-1 text-1">
            <img className="md:hidden image-full" src={mobile_pic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
