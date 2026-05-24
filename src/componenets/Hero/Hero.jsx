import heroPNG from './../../assets/hero.png'
import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div>
            <div className='centerItem'>
                <img src={heroPNG} alt="" />
            </div>
            <div className='linearGradient text-white p-14'>
                <h1 className='text-4xl inter-font text-center font-bold mb-10'>Trusted By Millions, Built For You</h1>

                <div className='flex justify-around'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-[#ffffffb6] text-sm'>Total Downloads</span>
                        <span className='text-5xl font-bold'>29.6M</span>
                        <span className='text-[#ffffffb6] text-sm'>21% More Than Last Month</span>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <span className='text-[#ffffffb6] text-sm'>Total Reviews</span>
                        <span className='text-5xl font-bold'>906K</span>
                        <span className='text-[#ffffffb6] text-sm'>46% More Than Last Month</span>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <span className='text-[#ffffffb6] text-sm'>Active Apps</span>
                        <span className='text-5xl font-bold'>132+</span>
                        <span className='text-[#ffffffb6] text-sm'>31 More Will Launch</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;