import React from 'react';
import { Link } from 'react-router-dom';

import image from '../img/contact/karan_contact.jpg';

const Contact = () => {
  return (
    <section className='section'>
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full  justify-start pt-8 gap-x-8 text-center lg:text-left ">
          <div className='hidden lg:flex absolute bottom-e left-0 right-0 top-72 -z-10 bg-[#eef7f9]'>
          </div>
          <div className='lg:flex-1 lg:pt-[1px] px-4'>
            <h1 className="h1" >Contact Us</h1>
            <p className='mb-3 h2'>I would love to get suggestions from you!</p>
            <div className='max-sm:text-left'>
              <p className='text-slate-700'><b>Email: <Link to="mailto:houseofmemories.enquiry@gmail.com" >houseofmemories.enquiry@gmail.com</Link></b></p>
              <p className='text-slate-700'><b>Phone: <Link to="tel:+91 886698 2592" >+91 88669 82592</Link></b></p>
              <p className='mb-3 text-slate-700'><b>Address: <Link to="https://www.google.com/maps/place/House+of+Memories+%2F+Mommies+and+Babies+Photography/@21.6324543,73.0033521,17z/data=!3m1!4b1!4m6!3m5!1s0x3be026ada3779997:0xe34eecd9ee1220cc!8m2!3d21.6324543!4d73.005927!16s%2Fg%2F11dxcvbvyg?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D" >B-57, First floor, Signature Galleria,Mahavir Turning, Ankleshwar, Gujarat-393001</Link></b></p>
            </div>
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
          {/* <div className=' lg:flex-1'>
            <img src={image} alt="" className='border' />
          </div> */}
        </div>

      </div>
    </section>
  );
};

export default Contact;
