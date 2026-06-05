import React, { Suspense } from 'react';
import './Installs.css'
import Recomended from '../../componenets/Recomended/Recomended';

const Installs = () => {
    const trendingAppsPromise = fetch('https://cdn.jsdelivr.net/gh/Atomos-Js/A08-API-NO1@main/trendingData.Json')
        .then(res => res.json())

    return (
        <div>
            <div className='h-22 bg-[#f5f5f5] w-full'>
            </div>
            <div className='bg-[#f5f5f5]'>
                <h1 className='text-5xl inter-font centerText'>
                    Your Installed Apps
                </h1>
            </div>
            <div className='h-[35px] w-full bg-[#f5f5f5]'>
            </div>
            <div>
                <p className='text-[#627382] text-[20px] font-bold centerText bg-[#f5f5f5]'>You have No Installed Apps</p>
            </div>
            <div className='h-[20px] w-full bg-[#f5f5f5]'>
            </div>
            <div>
                <Suspense fallback={<p>Hol' up wait a minute</p>}>
                    <Recomended trendingAppsPromise={trendingAppsPromise}/>
                </Suspense>
            </div>
        </div>
    );
};

export default Installs;