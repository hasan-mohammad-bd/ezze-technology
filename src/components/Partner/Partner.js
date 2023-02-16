import React from "react";
import img_1 from "../../image/partner/aamra.png";
import img_2 from "../../image/partner/bacco.png";
import img_3 from "../../image/partner/basis-new.png";
import img_4 from "../../image/partner/bcc.png";
import img_5 from "../../image/partner/bcs.png";
import img_6 from "../../image/partner/bicc.png";
import img_7 from "../../image/partner/dcci_logo.png";
import img_8 from "../../image/partner/e-cab.png";
import img_9 from "../../image/partner/gigabyte.png";
import img_10 from "../../image/partner/iccb.png";
import img_11 from "../../image/partner/lenovo.png";
import img_12 from "../../image/partner/Narcotics-logo.png";
import img_13 from "../../image/partner/panpacific.png";
import img_14 from "../../image/partner/radisson.png";
import img_15 from "../../image/partner/samsung.png";

const Partner = () => {
  return (
    <div className="md:py-16">
      <h3 className="text-3xl md:text-5xl font-bold py-10 text-center">
        Our Partners
      </h3>
      <div className="client container  rounded-3xl text-1 mx-auto grid grid-cols-2 lg:grid-cols-8 md:grid-cols-4 gap-y-4 p-5">
        <div className="img">
          <img className="rounded-md" src={img_1} alt="" />
        </div>
        <div className="img">
          <img src={img_2} alt="" />
        </div>
        <div className="img">
          <img className="rounded-md" src={img_3} alt="" />
        </div>
        <div className="img">
          <img src={img_4} alt="" />
        </div>
        <div className="img">
          <img src={img_5} alt="" />
        </div>
        <div className="img">
          <img src={img_6} alt="" />
        </div>
        <div className="img">
          <img src={img_7} alt="" />
        </div>
        <div className="img">
          <img className="rounded-md" src={img_8} alt="" />
        </div>
        <div className="img">
          <img className="rounded-md" src={img_9} alt="" />
        </div>
        <div className="img">
          <img className="rounded-xl" src={img_10} alt="" />
        </div>
        <div className="img">
          <img className="rounded-md" src={img_11} alt="" />
        </div>
        <div className="img">
          <img src={img_12} alt="" />
        </div>
        <div className="img">
          <img src={img_13} alt="" />
        </div>
        <div className="img">
          <img className="rounded-md" src={img_14} alt="" />
        </div>
        <div className="img">
          <img src={img_15} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partner;
