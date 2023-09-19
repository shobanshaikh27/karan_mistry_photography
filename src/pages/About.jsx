import React from 'react';
import { Link } from 'react-router-dom';
import womanImg from '../img/about/woman.png'
import portfolio from './Portfolio';

const About = () => {
  return (
    <section className='section'>
      <div className="container mx-auto relative">
        <div className='flex flex-col lg:flex-row items-center justify-center text-center gap-x-24 lg:text-left lg:pt-16'>
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden rounded-[30%] '>
            <img src={womanImg} alt="" />
          </div>
          <div className='flex-1 items-center justify-center pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col lg:items-start '>
            <h1 className='h1'>
              About me
            </h1>
            <p className='mb-12 max-w-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nihil libero totam perferendis accusamus <b>incidunt impedit exercitationem</b> cupiditate hic numquam recusandae laudantium autem sequi eaque aliquid, at, dolores excepturi omnis.
             <br/>
             <br/>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quasi voluptate soluta exercitationem sed at minus culpa error laborum? Voluptate, similique pariatur voluptates saepe perferendis et cumque corporis fugiat iure!
            </p>
             <div className='btn'><Link to='/portfolio' >View my work</Link></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
