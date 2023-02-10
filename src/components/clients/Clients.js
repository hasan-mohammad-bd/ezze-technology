import React from 'react';
import img_1 from '../../image/clients/PhotoRoom-20230211_032018_1.png';
import img_2 from '../../image/clients/PhotoRoom-20230211_032018_2.png';
import img_3 from '../../image/clients/PhotoRoom-20230211_032018_3.png';
import img_4 from '../../image/clients/PhotoRoom-20230211_032018_4.png';
import img_5 from '../../image/clients/PhotoRoom-20230211_032018_5.png';
import img_6 from '../../image/clients/PhotoRoom-20230211_032018_6.png';
import img_7 from '../../image/clients/PhotoRoom-20230211_032018_7.png';
import img_8 from '../../image/clients/PhotoRoom-20230211_032018_8.png';
import img_9 from '../../image/clients/PhotoRoom-20230211_032018_9.png';
import img_10 from '../../image/clients/PhotoRoom-20230211_032018_10.png';
import img_11 from '../../image/clients/PhotoRoom-20230211_032018_11.png';
import img_12 from '../../image/clients/PhotoRoom-20230211_032018_12.png';
import img_13 from '../../image/clients/PhotoRoom-20230211_032018_13.png';
import img_14 from '../../image/clients/PhotoRoom-20230211_032018_14.png';
import img_15 from '../../image/clients/PhotoRoom-20230211_032018_15.png';
import img_16 from '../../image/clients/PhotoRoom-20230211_032018_16.png';

const Clients = () => {
    return (
        <div className='py-10 bg-down'>
                            <h3 className="text-3xl font-bold py-10 text-center">Clients</h3>
            <div className='client container  rounded-3xl box-1 mx-auto grid grid-cols-2 lg:grid-cols-8 md:grid-cols-4 gap-y-4 p-5'>
                <div className="img"><img src={img_1} alt="" /></div>
                <div className="img"><img src={img_2}alt="" /></div>
                <div className="img"><img src={img_3}alt="" /></div>
                <div className="img"><img className='bg-gray-700 px-3 rounded-md' src={img_4}alt="" /></div>
                <div className="img"><img src={img_5}alt="" /></div>
                <div className="img"><img src={img_6}alt="" /></div>
                <div className="img"><img src={img_7}alt="" /></div>
                <div className="img"><img src={img_8}alt="" /></div>
                <div className="img"><img src={img_9}alt="" /></div>
                <div className="img"><img className='' src={img_10}alt="" /></div>
                <div className="img"><img className='bg-gray-700 px-3 rounded-md' src={img_11}alt="" /></div>
                <div className="img"><img src={img_12}alt="" /></div>
                <div className="img"><img className='bg-gray-700 px-3 rounded-md' src={img_13}alt="" /></div>
                <div className="img"><img className='bg-gray-700 px-3 rounded-md' src={img_14}alt="" /></div>
                <div className="img"><img src={img_15}alt="" /></div>
                <div className="img"><img src={img_16}alt="" /></div>
            </div>
        </div>
    );
};

export default Clients;