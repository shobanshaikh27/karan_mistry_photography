import React from 'react';
import { Link } from 'react-router-dom';
import womanImg from '../img/home/woman.png'
import FlipCard from '../components/FlipCard';
import FlipCardList from '../components/FlipCardList';


const Home = () => {
  return (
    // <section className='section'>
    //   <div className="container mx-auto h-full relative">  
    <div>
      <section className='section'>
        <div className="container mx-auto relative">

          <div className='flex flex-col justify-center'>

            <div className='w-full mt-24 lg:mt-0 lg:mb-0 lg:w-auto z-10 flex lg:absolute lg:top-24 flex-col justify-center items-center lg:items-start '>
              <h1 className='h1'> Photographer <br /> & film Maker</h1>
              <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12 '>Gujarat,India</p>
              <Link to={"contact"} className='btn mb-[30px] '>Hire Me</Link>
            </div>
            {/* <div className='flex justify-end max-h-96 lg:max-h-max'> */}
            <div className='flex justify-end' >
              <div className='relative lg:-right-30 overflow-hidden rounded-full'>
                <img src={womanImg} />
              </div>
            </div>
          </div>
          <div>
            <FlipCardList />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
