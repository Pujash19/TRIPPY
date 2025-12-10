"use client";
import { NavLinks } from "@/constants/Constants";
import React, { MouseEvent, useEffect, useState } from "react";
import { TbAirBalloon } from "react-icons/tb";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

interface NavProps {
  onMenuClick: () => void;
}


const Nav = ({ onMenuClick }: NavProps) => {
const [navBg, setNavBg]= useState(false);

useEffect(()=>{
    const handler=()=>{
if(window.scrollY>=90) setNavBg(true);
if(window.scrollY<90) setNavBg(false);
};
window.addEventListener("scroll", handler);
return ()=> window.removeEventListener("scroll", handler);
},[]);


  return (
    <div className={`fixed top-0 left-0 w-full ${navBg?"bg-blue-900 shadow-md":"bg-transparent"} transition-all duration-200 h-[12vh] z-50`}>
      <div className="flex items-center h-full w-[90%] xl:w-[80%] justify-between mx-auto ">
        {/*logo*/}
        <div className="flex items-center space-x-2">
          <div className="flex items-center w-13 h-13 bg-red-500 rounded-full justify-center flex-col">
            <TbAirBalloon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl md:text-3xl text-white uppercase font-bold">
            TRIPPY
          </h1>
        </div>
        {/*navlink*/}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.id}
                onClick={(e) => {
                  if (link.url.startsWith("#")) {
                    e.preventDefault();
                    const target = document.querySelector(link.url);
                    if (target) {
                      const offset = 80;
                      const y = target.getBoundingClientRect().top + window.scrollY - offset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }
                }}
              >
                <p
                  className="relative text-white text-2xl font-medium w-fit block after:block 
                    after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0
                    after:left-0 after:-bottom-1 hover:after:scale-x-100 after:transition after:duration-300 after:origin-right"
                >
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>
        {/*Button*/}
        <div className="flex items-center space-x-4">
          <Link
            href="/sign"
            className="md:px-5 md:py-2 px-5 py-1.5 text-black text-2xl bg-white transition-all duration-100 hover:bg-gray-100 
        rounded-[11px]"
          >
            Book Now
          </Link>
          {/*Burger Menu*/}
          <button
            onClick={onMenuClick}
            className="lg:hidden relative z-50"
            type="button"
            aria-label="Toggle menu"
          >
            <HiBars3BottomRight 
              className="h-8 w-8 cursor-pointer text-white" 
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
