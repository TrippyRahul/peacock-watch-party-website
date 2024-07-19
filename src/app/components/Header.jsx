'use client'
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { usePathname } from 'next/navigation'

const Header = () => {
  const path=usePathname()
  return (
    <div className="header-bg">
      <Navbar pathName={path}/>
      {path=="/"&&<Hero />}
    </div>
  );
};

export default Header;
