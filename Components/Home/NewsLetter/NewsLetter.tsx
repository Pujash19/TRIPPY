import React from "react";
import { BsEnvelope, BsEnvelopePaper } from "react-icons/bs";

const NewsLetter = () => {
  return (
    <div
      id="subscribe"
      className="bg-black pt-16 pb-16 flex items-center justify-center w-full
    flex-col scroll-mt-24"
    >
      <BsEnvelopePaper className="w-16 h-16 mt-20 text-white" />
      <h1 className="text-lg sm:text-xl md:text-2xl text-white font-semibold mt-10 tracking-widest">
        Your travel journey starts here
      </h1>
      <p className="mt-3 text-white text-xs sm:text-xs">
        Sign up and we will send the best details to you{" "}
      </p>
      <div className="w-full">
        <input
          type="text"
          className="px-6 py-3.5 bg-white mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none"
          placeholder="Email"
        />
        <button className="px-6 py-3.5 bg-blue-900 hover:bg-blue-950 transition-all duration-200 mt-3 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none text-white">
          Subsribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
