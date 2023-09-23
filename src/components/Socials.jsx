import React from 'react'
import { AiFillYoutube,AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai' ;
import { RiPinterestFill,RiFacebookFill } from 'react-icons/ri';
const Socials = () => {
  return (
    <div className='hidden xl:flex ml-12 '>
    <ul className='flex gap-x-4 '>
      <li><a href='/' target='_blank'><RiFacebookFill className='text-xl' /></a></li>
      <li><a href='/' target='_blank'><AiOutlineTwitter className='text-xl' /></a></li>
      <li><a href='/' target='_blank'><AiFillYoutube className='text-xl' /></a></li>
      <li><a href='/' target='_blank'><RiPinterestFill className='text-xl' /></a></li>
      <li><a href='/' target='_blank'><AiFillInstagram  className='text-xl' /></a></li>
    </ul>
  </div>
  )
}

export default Socials

