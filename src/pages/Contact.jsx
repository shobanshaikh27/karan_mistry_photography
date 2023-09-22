import React from 'react';

import womanImg from '../img/contact/woman.png'

const Contact = () => {
  return (
    <section className='section'>
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left ">
        <div className='hidden lg:flex absolute bottom-e left-0 right-0 top-72 -z-10 bg-[#eef7f9]'> 

</div>
          <div className='lg:flex-1 lg:pt-[1px] px-4'>
            <h1 className="h1" >Contact me</h1>
            <p className='mb-12'>I would love to get suggestions from you.</p>
            <form action="" className='flex-col flex gap-y-4'>
              <div className='flex gap-x-10'>
                <input type="text" placeholder='Your Name' name="" id="" className='outline-none border-b border-b-primary h-[60px] bg-transparent  font-secondary w-full pl-3 placeholder: text-[#757879] ' required />
                <input type="number" placeholder='Mobile Number' name="" id="" className='outline-none border-b border-b-primary h-[60px] bg-transparent  font-secondary w-full pl-3 placeholder: text-[#757879] ' required />
              </div>
              <input type="email" placeholder='Your Email Address' name="" id="" className='outline-none border-b border-b-primary h-[60px] bg-transparent  font-secondary w-full pl-3 placeholder: text-[#757879] ' required />
              <input type="email" placeholder='Your Message' name="" id="" className='outline-none border-b border-b-primary h-[60px] bg-transparent  font-secondary w-full pl-3 placeholder: text-[#757879] ' />
              <button type='submit' className='btn mb-[30px] mx-auto lg:mx-0 self-start' >SEND IT</button>
            </form>
          </div>
          <div className=' lg:flex-1 '>
            <img src={womanImg} alt="" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
