import React from 'react';
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <section className='section'>
      <div className="container mx-auto relative">
        <div className="flex flex-col lg:flex-row  items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-24 pb-8 ">
          <div className='flex flex-col lg:items-start '>
            <h1 className='h1'>
              Portfolio
            </h1>
            <p className='mb-12 max-w-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nihil libero totam perferendis accusamus <b>incidunt impedit exercitationem</b> cupiditate hic numquam recusandae laudantium autem sequi eaque aliquid, at, dolores excepturi omnis.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quasi voluptate soluta exercitationem sed at minus culpa error laborum? Voluptate, similique pariatur voluptates saepe perferendis et cumque corporis fugiat iure!
            </p>
            <Link to={"/contact"} className='btn mx-auto lg:mx-0 mb-[30px] '>Hire Me</Link>
          </div>
          <div className='grid grid-cols-2 lg:gap-2'>
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
    </section>
  );
};

export default Portfolio;
