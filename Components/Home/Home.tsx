import React from 'react'
import Body from './BodyContent/Body';
import Destination from './Destination/Destination';
import Hotel from './Hotel/Hotel';
import WhyChoose from './WhyChoose/WhyChoose';
import Review from './Reviews/Review';
import News from './News/News';
import NewsLetter from './NewsLetter/NewsLetter';

const Home = () => {
  return (
    <div className='relative overflow-hidden'>
      <Body/>
      <Destination/>
      <Hotel/>
      <WhyChoose/>
      <Review/>
      <News/>
      <NewsLetter/>
    </div>
  )
}

export default Home;