import React, { use, Suspense } from 'react';
import './Apps.css'
import DisplayApp from '../../componenets/DisplayApps/DisplayApp';

const Apps = () => {

    const appsDisplayPromise = fetch(
        "https://cdn.jsdelivr.net/gh/Atomos-Js/A08-API-NO2@fe5cd02/data.json"
    )
        .then(res => res.json());


    return (
        <div>
            <div className='bg-[#f5f5f5]'>
                <div>
                    <h2 className='text-[#001931] text-center mt-4 inter-font text-6xl'>
                        All Our Applications
                    </h2>
                </div>
                <div className='h-3 bg-[#f5f5f5]'></div>
                <div>
                    <p className='text-[#627382] text-center text-[15px]'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
            </div>
            <div>
                <Suspense fallback={<span>BOOOOOOMMmm</span>}>
                    <DisplayApp appsDisplayPromise={appsDisplayPromise} />
                </Suspense>
            </div>
        </div>
    );
};

export default Apps;