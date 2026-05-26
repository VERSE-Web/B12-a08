import React from 'react';
import logo from './../../assets/logo.png'; // Add your logo path here
import fB from './../../assets/facebook.svg';
import twitter from './../../assets/x.svg';

const Footer = () => {
    return (
        <footer className="w-full bg-[#001931] text-white px-8 py-6 md:px-16">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                
                <div className="flex justify-between items-center border-b border-dashed border-gray-700 pb-6">
                    
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="HERO.IO Logo" className="w-6 h-6 object-contain" />
                        <span className="font-bold tracking-wider text-sm">HERO.IO</span>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                        <span className="text-sm font-medium text-gray-300">Social Links</span>
                        <div className="flex gap-3">
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <img src={twitter} alt="X" className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <img src={fB} alt="Facebook" className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    
                </div>

                <div className="text-center text-xs text-gray-400">
                    <p>Copyright © 2025 - All right reserved</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;