import React from 'react'
import { AiFillYoutube,AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai' ;
import { RiWhatsappFill,RiFacebookFill } from 'react-icons/ri';
const Socials = () => {
  return (
    <div className='hidden xl:flex ml-12 '>
    <ul className='flex gap-x-4 '>
      <li><a href='https://wa.me/message/M5N7JPOHDEFPG1' target='_blank'><RiWhatsappFill fill='#5b3d1b' className='text-xl' /></a></li>
      <li><a href='https://www.facebook.com/houseofmemories.kmp' target='_blank'><RiFacebookFill fill='#5b3d1b' className='text-xl' /></a></li>
      {/* <li><a href='https://www.instagram.com/houseofmemories.kmp/?hl=en' target='_blank'><AiOutlineTwitter fill='#5b3d1b' className='text-xl' /></a></li> */}
      <li><a href='https://www.youtube.com/@houseofmemories3289' target='_blank'><AiFillYoutube fill='#5b3d1b' className='text-xl' /></a></li>
      <li><a href='https://www.instagram.com/houseofmemories.kmp/?hl=en' target='_blank'><AiFillInstagram fill='#5b3d1b'  className='text-xl' /></a></li>
    </ul>
  </div>
  )
}

export default Socials

