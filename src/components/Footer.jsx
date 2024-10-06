import { AiFillYoutube, AiFillInstagram} from 'react-icons/ai' ;
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
              <li><Link to="/" className="hover:text-slate-500 transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="hover:text-slate-500 transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-slate-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-slate-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <Link to='/contact'><h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3></Link>
            <p>Email: <Link to="mailto:houseofmemories.enquiry@gmail.com" className="text-slate-300">houseofmemories.enquiry@gmail.com</Link></p>
          <p>Phone: <Link to="tel:+91 886698 2592" className="text-slate-300">+91 88669 82592</Link></p>
          <p>Address: <Link to="https://www.google.com/maps/place/House+of+Memories+%2F+Mommies+and+Babies+Photography/@21.6324543,73.0033521,17z/data=!3m1!4b1!4m6!3m5!1s0x3be026ada3779997:0xe34eecd9ee1220cc!8m2!3d21.6324543!4d73.005927!16s%2Fg%2F11dxcvbvyg?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D" className="text-slate-300">B-57, First floor, Signature Galleria,Mahavir Turning, Ankleshwar, Gujarat-393001</Link></p>
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