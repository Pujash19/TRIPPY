import SectionHeading from '@/Components/Helper/SectionHeading';
import React from 'react'
import DestinationSlider from './DestinationSlider';

const Destination = () => {
  return (
    <div id="destination" className='pt-20 pb-20 scroll-mt-24'>
        <SectionHeading heading='Exploring Population Destination'/>
        <div className='mt-14 w-[80%] mx-auto'>
          <DestinationSlider />
        </div>
    </div>
  )
}

export default Destination;