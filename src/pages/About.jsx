import React from 'react';
import { Link } from 'react-router-dom';
import image from '../img/about/karan.jpg';
// import portfolio from './Portfolio';

const About = () => {
  return (
    <section className='section'>
      <div className="container mx-auto relative">
        <div className='flex flex-col lg:flex-row  justify-center text-center gap-x-24 lg:text-center lg:pt-16'>
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:pt-12 lg:order-none overflow-hidden  '>
            <img src={image} alt="" className='rounded-[10%]' />
          </div>
          <div className='flex-1 items-center justify-center  pb-14 lg:pt-0 lg:w-full z-10 flex flex-col lg:items-start '>
            <h1 className='h1'>
              About Us
            </h1>
            <p className='mb-10 max-w-sm text-justify'>
              Welcome to House of Memories!
              Founded by <b>Karan Mistry </b> in 2017, House of Memories began with a passion for capturing life’s most beautiful moments. Karan, an Electronics and Communication engineering graduate, left his corporate job to follow his true calling: wedding photography.
              <br />
              <br />
              Our team is dedicated to providing an exceptional experience from start to finish, making your wedding day unforgettable. Let us help you celebrate your love story by turning moments into timeless treasures!

            </p>
            <div className='btn'><Link to='/portfolio' >View my work</Link></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
