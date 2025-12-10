import SectionHeading from "@/Components/Helper/SectionHeading";
import { hotelsData } from "@/Data/data";
import React from "react";
import HotelSlider from "./HotelSlider";

const Hotel = () => {
  return (
    <div className="pt-20 pb-20">
      <SectionHeading heading="Recommended Hotels" />
      <div
        className="w-[80%] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center
     mt-16"
      >
        {hotelsData.map((data, i)=>{
            return(
                <div
                  key={data.id}
                  data-aos="fade-right"
                  data-aos-anchor-placement="top-center"
                  data-aos-delay={`${i * 100}`}
                >
                    <HotelSlider hotel= {data}/>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default Hotel;
