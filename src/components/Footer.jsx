import { AiFillYoutube,AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai' ;
import { RiWhatsappFill,RiFacebookFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#5b3d1b] text-slate-300">
      <div className=" mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">House of Memories</h2>
            <p className="mb-4">Capturing life's precious moments, one frame at a time. We specialize in<br/> wedding, portrait, and event photography.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/home" className="hover:text-slate-500 transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="hover:text-slate-500 transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-slate-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-slate-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <Link to='/contact'><h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3></Link>
            <p>B-57, First floor, Signature Galleria</p>
            <p>Mahavir Turning, Ankleshwar, Gujarat-393001</p>
            <p>Phone: (+91) 88669 82592</p>
            <p>Email: mistrykaran63@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 House of Memories. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/houseofmemories.kmp" target='_blank' className="text-slate-300 hover:text-slate-600 transition-colors">
              <RiFacebookFill size={24} />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://www.instagram.com/houseofmemories.kmp/?hl=en" target='_blank' className="text-slate-300 hover:text-slate-600 transition-colors">
              <AiFillInstagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://www.youtube.com/@houseofmemories3289" target='_blank' className="text-slate-300 hover:text-slate-600 transition-colors">
              <AiFillYoutube size={24} />
              <span className="sr-only">Youtube</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}