import React from 'react';
import { Link } from 'react-router-dom';
import image from '../img/home/Atharv.jpg'
import FlipCardList from '../components/FlipCardList';
import Footer from '../components/Footer';


const Home = () => {
  return (
    // <section className='section'>
    //   <div className="container mx-auto h-full relative">  
    <div>
      <section className='section'>
        <div className="mx-auto relative ">

          <div className='flex flex-col justify-center container'>

            <div className='w-full mt-24 lg:mt-0 lg:mb-0 lg:w-auto z-10 flex lg:absolute lg:top-24 flex-col justify-center items-center lg:items-start '>
              <h1 className='h1 max-lg:bg-white'> Photographer <br /> & film Maker</h1>
              <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12 '>Gujarat,India</p>
              <Link to={"portfolio"} className='btn mb-[30px] '>visit Gallery</Link>
              <Link to={"contact"} className='btn mb-[30px] '>Hire Me</Link>
            </div>
            {/* <div className='flex justify-end max-h-96 lg:max-h-max'> */}
            <div className='flex justify-end' >
              <div className='relative lg:-right-30 w-1/2 h-1/2 max-sm:w-full max-sm:h-full overflow-hidden rounded-full'>
                <img src={image} />
              </div>
            </div>
          </div>
          <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12 font-bold text-center mt-6 '>Some Precious Memories</p>
          <div className='container mb-6'>
            <FlipCardList />
          </div>
          <Footer />
        </div>
      </section>
      <div>
        
      </div>
    </div>
  );
};

export default Home;
