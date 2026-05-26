import React, { Suspense } from 'react';
import Banner from "./../../componenets/Banner/Banner";
import Hero from './../../componenets/Hero/Hero'
import TrendingApps from '../../componenets/TrendingApps/TrendingApps';
import Footer from '../../componenets/Footer/Footer';

const Home = () => {
    let trendingApps = []

    const trendingAppsPromise = fetch('https://cdn.jsdelivr.net/gh/Atomos-Js/A08-API-NO1@main/trendingData.Json')
        .then(res => res.json())

    return (
        <div className=''>
            <Banner className='align-middle' />
            <br />
            <Hero />
            <div className='h-19 bg-[#F5F5F5] w-full'></div>
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                <TrendingApps trendingAppsPromise={trendingAppsPromise} className='bg-[#F5F5F5]'/>
            </Suspense>    
            <div className='h-5 w-full bg-[#F5F5F5]'></div>
        </div>
    );
};

export default Home;