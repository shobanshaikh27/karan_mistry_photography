import React from 'react';
import Image1 from '../img/portfolio/pre1.jpg';
import Image2 from '../img/portfolio/pre2.jpg';
import Image3 from '../img/portfolio/wed1.jpg';
import Image4 from '../img/portfolio/wed2.jpg';
import { Link } from 'react-router-dom';
import GalleryScroll from '../components/GalleryScroll';

const Portfolio = () => {
  return (
    <section className='section'>
      <div className="container mx-auto relative">
        <div className="flex flex-col lg:flex-row  items-center justify-start gap-x-24 text-center lg:text-left pt-12 lg:pt-12 pb-8 ">
          <div className='flex flex-col lg:items-start '>
            <h1 className='h1'>
              Portfolio
            </h1>
            <p className='mb-10 max-w-sm text-justify'>
            At <b>House of Memories</b>, we believe that every moment is a memory waiting to be captured. Specializing in weddings, birthdays, pre-wedding shoots, and maternity shoots, we strive to bring out the beauty, love, and emotion in every frame. With an artistic eye and attention to detail, we create timeless images and videos that tell your unique story.
              <br />
              <br />
              Our goal is to capture the essence of your special moments, so you can relive them again and again. Whether it’s a wedding, a new addition to the family, or life’s milestones, we create beautiful visuals that tell your story.
            </p>
            <Link to={"/contact"} className='btn mx-auto lg:mx-0 mb-[30px] '>Hire Me</Link>
          </div>
          <div className='grid grid-cols-2 lg:gap-1'>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden' >
              < img
                className='object-cover h-full hover:scale-110 lg:h-[220px] transition-all duration-500'
                src={Image1}
                alt=""
              />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden' >
              < img
                className='object-cover h-full hover:scale-110 lg:h-[220px] transition-all duration-500'
                src={Image2}
                alt=""
              />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden' >
              < img
                className='object-cover h-full hover:scale-110 lg:h-[220px] transition-all duration-500'
                src={Image3}
                alt=""
              />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden' >
              < img
                className='object-cover h-full hover:scale-110 lg:h-[220px] transition-all duration-500'
                src={Image4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <GalleryScroll />
    </section>
  );
};

export default Portfolio;
