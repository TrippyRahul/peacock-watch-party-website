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
      {path!="/privacy-policy"&&<div className='bg-white py-7'>
        <div className='text-black text-[2.5rem] font-semibold text-center'>Peacock Watch Party is now available on Google Chrome, Microsoft Edge and Mozilla Firefox</div>
      </div>}
      {path!="/privacy-policy"&&<Hero />}
    </div>
  );
};

export default Header;
