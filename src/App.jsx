import React, { useEffect } from "react";
import logo from "./Assets/logo.png"
import "./App.css";
import Navbar from "./componenets/Navbar/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "./componenets/Footer/Footer";

export default function App() {

  const location = useLocation()


  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Hero.IO || Home";
    } else if (location.pathname === "/apps") {
      document.title = "Hero.IO || Apps";
    } else {
      document.title = "Hero.IO || Installs";
    }
  }, [location]);

return (
  <div>
    <header>
      <Navbar location={location} />
    </header>
    <Outlet />
    <Footer />
  </div>
);
}
