import React, { useEffect } from "react";
import logo from "./Assets/logo.png"
import "./App.css";
import Navbar from "./componenets/Navbar/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "./componenets/Footer/Footer";

export default function App() {

  const location = useLocation()

  return (
    <div className=''>
      <header>
        <Navbar location={location} />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}
