import React from 'react';
import Achievement_1 from './Achievement_1';
import Achievement_2 from './Achievement_2';
import live from '../../image/live.png';
import Achievement_3 from './Achievement_3';

const Achievement = () => {
    return (
        <div className='bg-left-up px-5 md:px-0'>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text flex-1">
                <h3 className="text-5xl font-bold py-10 text-center">Achievements</h3>
                <div className="text-box grid grid-cols-1 flex-1 gap-y-5">
                    <Achievement_1/>
                    <Achievement_2/>
                    <Achievement_3/>
                </div>
                </div>
                <div className="content">
                    <img src={live} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Achievement;