import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className=''>
            <div className='centerItem mt-12'>
                <div className='text-6xl text-[#001931] w-[597px] inter-font centerText'>
                    <h1>We Build <span className='gradientText'>Productive</span> Apps</h1>
                </div>
            </div>
            <div className='mt-5 centerItem'>
                <div className='w-193 text-[#627382] centerText'>
                    <p>
                        At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                </div>
            </div>
            <div className='flex gap-4 mt-6 centerItem'>
                <button className='flex items-center gap-3 border border-gray-200 rounded-xl px-6 py-3 bg-white shadow-sm'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg' className='w-6 h-6' />
                    <span className='text-[#001931] font-semibold text-lg inter-font'>Google Play</span>
                </button>

                <button className='flex items-center gap-3 border border-gray-200 rounded-xl px-6 py-3 bg-white shadow-sm'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg' className='w-6 h-6' />
                    <span className='text-[#001931] font-semibold text-lg inter-font'>App Store</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;