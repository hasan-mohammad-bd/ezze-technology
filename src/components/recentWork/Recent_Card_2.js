import React from 'react';
import bloodBank from '../../image/bloodbank_logo.png';

const Recent_Card_2 = () => {
    return (
        <div className="flex flex-col mx-5 md:mx-5 justify-between items-center shadow-lg box-1 bg-gray-100 p-7 rounded-md ">
        <div className="img my-5">
          <img src={bloodBank} alt="" />
        </div>
        <h1 className="text-center my-2">BLOODBANK LIVE</h1>
        <p className='text-sm text-green-600'>Mobile Application</p>
        <button className="bg-yellow-700 p-2 text-white rounded my-3">
          <a href="https://bloodbank.live/" _target="_blank">
            View Site
          </a>
        </button>
      </div>
    );
};

export default Recent_Card_2;