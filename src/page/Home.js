import React from 'react';
import RecentWork from '../components/recentWork/RecentWork';
import ShowCase from '../components/showCase/ShowCase';
import WhatWeDo from '../components/WhatWeDo/WhatWeDo';

const Home = () => {
    return (
        <div>
            <ShowCase/>
            <WhatWeDo/>
            <RecentWork/>
        </div>
    );
};

export default Home;