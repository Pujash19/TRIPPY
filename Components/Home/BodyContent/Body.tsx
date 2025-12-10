import SearchBox from "@/Components/Helper/SearchBox";
import React from "react";
import Link from "next/link";
import next from "next";

const Body = () => {
  return (
    <div className="relative w-full h-[100vh] sm:h-screen]">
      <div
        className="absolute top-0 left-0 w-full h-full bg-gray-800
         opacity-70"></div>
      <video
        src="/Images/hero1.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        className="w-full h-full object-cover"
      />
      <div className="absolute z-10 w-full h-full top-[50%] left-[50%]
      translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center justify-center flex-col w-full h-full">
          <div data-aos="fade-up">
            <h1 className="text-[25px] mb-4 md:mb-0 text-white text-center md:text-[35px] lg:text-[50px] tracking-[0.7rem] font-bold uppercase">Lets Enjoy The Nature</h1>
          <p className="md:text-base text-center text-lg lg:text-[20px] text-white font-normal [word-spacing:5px]">Get the best prices on 2,000,000+ properties,worldwide</p>
          </div>
          <SearchBox />
          <Link href="#" className="rounded px-12 md:px-28 -mt-4 py-2 overflow-hidden group bg-rose-600
           relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2
           hover:ring-red-400 transition-all ease-out duration-300">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white
            opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative text-xl md:text-3xl">SEARCH</span>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Body;
