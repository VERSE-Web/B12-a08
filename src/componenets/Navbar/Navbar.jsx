import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import github from '../../assets/github-icon.png';
import './Navbar.css';

const Navbar = ({ location }) => {

    const Home = useRef(null)
    const Apps = useRef(null)
    const Installs = useRef(null)
    useEffect(() => {
        Home.current.style.color = 'black'
        Apps.current.style.color = 'black'
        Installs.current.style.color = 'black'
        Home.current.style.textDecorationLine = 'none'
        Apps.current.style.textDecorationLine = 'none'
        Installs.current.style.textDecorationLine = 'none'

        if (location.pathname === '/') {
            Home.current.style.color = '#6A34E5'
            Home.current.style.textDecorationLine = 'underline'
        } else if (location.pathname === '/apps') {
            Apps.current.style.color = '#6A34E5'
            Apps.current.style.textDecorationLine = 'underline'
        } else if (location.pathname === '/Installs') {
            Installs.current.style.color = '#6A34E5'
            Installs.current.style.textDecorationLine = 'underline'
        }
    }, [location]
    )

    return (
        <div className="flex items-center justify-between h-15 px-6 bg-white inter-font ">
            <div className="flex items-center gap-3">
                <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
                <span className="font-bold text-m gradientText">HERO.IO</span>
            </div>

            <ul className="flex items-center gap-7 list-none">
                <li className="text-sm cursor-pointer inter-font" ref={Home} >
                    <Link to="/">Home</Link>
                </li>
                <li className="text-sm cursor-pointer text-black inter-font" ref={Apps}>
                    <Link to="/apps">Apps</Link>
                </li>
                <li className="text-sm cursor-pointer text-black inter-font" ref={Installs} >
                    <Link to="/Installs">Installation</Link>
                </li>
            </ul>

            <button className="flex items-center gap-2 bg-purple-500 text-white rounded-full px-5 py-2 text-sm font-medium">
                <span><img src={github} mode="" className='w-5' /></span> Contribute
            </button>
        </div>
    );
};

export default Navbar;