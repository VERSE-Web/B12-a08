import React from 'react';
import Banner from "./../../componenets/Banner/Banner";
import Hero from './../../componenets/Hero/Hero'

const Home = () => {
    return (
        <div>
            <Banner className='align-middle' />
            <br/>
            <Hero />
            <div className='h-20 bg-[#F5F5F5] w-full'>
            </div>
            
        </div>
    );
};

export default Home;