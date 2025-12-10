"use client";
import { NavLinks } from '@/constants/Constants';
import React from 'react'
import Link from 'next/link';
import { HiXMark } from 'react-icons/hi2';

interface MobileNavProps {
  onClose: () => void;
}

const MobileNav = ({ onClose }: MobileNavProps) => {
  return (
    <div className='lg:hidden'>
        {/*overlay*/}
        <div 
          onClick={onClose}
          className='fixed inset-0 transform transition-all duration-500 z-9999 bg-black opacity-70 w-full h-screen'
        ></div>
        {/*navlink*/}
        <div className='text-white fixed top-0 left-0 justify-center flex flex-col h-full transform transition-all duration-500 w-[80%] sm:w-[60%] bg-rose-900 
        space-y-6 z-10000'>
          {/* Close button */}
          <div className='flex justify-end p-4'>
            <HiXMark 
              onClick={onClose}
              className='h-8 w-8 cursor-pointer text-white hover:text-gray-300 transition-colors' 
            />
          </div>
          {NavLinks.map((link)=>{
            return(
            <Link 
              href={link.url} 
              key={link.id}
              onClick={(e)=>{
                if(link.url.startsWith("#")){
                  e.preventDefault();
                  const target = document.querySelector(link.url);
                  if(target){
                    const offset = 80;
                    const y = target.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({top: y, behavior:"smooth"});
                  }
                }
                onClose();
              }}
            >
                <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] hover:text-gray-300 transition-colors'>{link.label}</p>
            </Link>
            );
          })}
        </div>
    </div>
  )
};

export default MobileNav;