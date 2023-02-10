import React from 'react';
import { RiAwardLine } from "@react-icons/all-files/ri/RiAwardLine";

const Achievement_1 = () => {
    return (
        <div className='flex justify-center items-center box-1 p-5'>
            <div className='mr-5'>
                <RiAwardLine className='text-6xl mb-[-10px] text-green-400'/>
            </div>
            <div className='text-white'>
            <h4 className='my-3 text-xl'>National Mobile App Development Award-15</h4>
            <p>Awarded For Live Blood Bank Mobile Application, Category- Health & Environment, Position: Runner-up</p>
            </div>
        </div>
    );
};

export default Achievement_1;