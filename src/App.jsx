import React, { useEffect } from "react";
import logo from "./Assets/logo.png"
import "./App.css";
import Navbar from "./componenets/Navbar/Navbar";
import { Outlet, useLocation } from "react-router";

export default function App() {

  const location = useLocation()

  return (
    <div className="">
      <header>
        <Navbar location={location} />
      </header>
      <Outlet />
    </div>
  );
}
