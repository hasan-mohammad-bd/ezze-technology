import React from 'react';
import Achievement from '../components/achievement/Achievement';
import RecentWork from '../components/recentWork/RecentWork';
import ShowCase from '../components/showCase/ShowCase';
import WhatWeDo from '../components/WhatWeDo/WhatWeDo';

const Home = () => {
    return (
        <div>
            <ShowCase/>
            <RecentWork/>
            <WhatWeDo/>
            <Achievement/>

        </div>
    );
};

export default Home;