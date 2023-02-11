import React from 'react';

import img_1 from '../../image/brands/dhakalive.png';
import img_2 from '../../image/brands/etlcampus.png';
import img_3 from '../../image/brands/itbazaar.png';
import img_4 from '../../image/brands/techjobs.com.bd.png';


const Brands = () => {
    return (

        <div className=''>
                <h3 className="text-3xl font-bold py-10 text-center">Co - Brands</h3>
            <div className='client container  rounded-3xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-4 p-5'>
                <div className="img bg-gray-300 px-3 py-1 rounded-lg"><img src={img_1} alt="" /></div>
                <div className="img bg-gray-300 px-3  py-1 rounded-lg"><img src={img_2}alt="" /></div>
                <div className="img bg-gray-300 px-3 py-1 rounded-lg"><img src={img_3}alt="" /></div>
                <div className="img bg-gray-300 px-3 py-1 rounded-lg"><img src={img_4}alt="" /></div>
            </div>
        </div>

    );
};

export default Brands;