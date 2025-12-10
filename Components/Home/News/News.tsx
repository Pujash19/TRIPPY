import SectionHeading from '@/Components/Helper/SectionHeading';
import React from 'react'
import NewsCard from './NewsCard';


const News = () => {
  return (
    <div className='pt-16 pb-16'>
        <SectionHeading heading='Exciting Travel News for You'/>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        gap-10 items-center mt-20'>
            <div data-aos="fade-left" data-aos-anchor-placement="top-center">
                <NewsCard image="/Images/n1.jpg" title="Top 10 places to visit in London"
                date= "15 November 2025"
                />
            </div>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="150">
                <NewsCard image="/Images/n2.jpg" title="Top 10 places to visit in Australia"
                date= "22 November 2025"
                />
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="300">
                <NewsCard image="/Images/n3.jpg" title="Top 10 places to visit in Finland"
                date= "10 November 2025"
                />
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="450">
                <NewsCard image="/Images/n4.jpg" title="Top 10 places to visit in India"
                date= "19 November 2025"
                />
            </div>
            </div>
    </div>
  )
}

export default News;