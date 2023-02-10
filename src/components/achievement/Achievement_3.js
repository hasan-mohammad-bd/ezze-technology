import React from 'react';
import { RiAwardLine } from "@react-icons/all-files/ri/RiAwardLine";

const Achievement_3 = () => {
    return (
        <div className='flex justify-center items-center box-1 p-5'>
            <div className='mr-5'>
                <RiAwardLine className='text-6xl mb-[-10px] text-green-300'/>
            </div>
            <div className='text-white'>
            <h4 className='my-3 text-xl'>Arijit Singh Live In Concert</h4>
            <p>Arijit Singh Live in Concert: 12th Dec 2014 — at Jamuna Future Park, Dhaka</p>
            </div>
        </div>
    );
};

export default Achievement_3;