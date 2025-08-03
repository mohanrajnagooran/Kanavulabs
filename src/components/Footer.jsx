import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import Logo from '../assets/Flogo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 md:px-10 py-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Left: Company Info */}
        <div>
          {/* Logo */}
          <img src={Logo} alt="Kanavu Labs Logo" className="h-20 md:h-40 w-auto mb-2" />

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-xl">
            We meticulously target specific keywords your audience uses,
            ensuring every click brings highly relevant traffic directly to your
            site. This isn't guesswork.
          </p>

          {/* Contact Info */}
          <div className="mb-4">
            <p className="text-base sm:text-lg text-white mb-1">Email</p>
            <p className="text-white font-semibold text-lg sm:text-xl">contact@kanavulabs.com</p>
          </div>
          <div className="mb-4">
            <p className="text-base sm:text-lg text-white mb-1">Phone</p>
            <p className="text-white font-semibold text-lg sm:text-xl">+91 9629824568</p>
          </div>
        </div>

        {/* Right: Subscribe & Social */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 md:mt-10 leading-snug">
            Get in touch with us and let’s work on your project!
          </h2>

          {/* Email subscription */}
          <div className="flex flex-col sm:flex-row gap-2 mb-6 bg-white md:w-96">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-72 px-4 py-3 rounded-md  text-black placeholder:text-sm sm:placeholder:text-base focus:outline-none"
            />
            <button className="bg-black text-white text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 rounded-md border hover:bg-orange-500 border-white transition">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <p className="text-white text-base mb-3">Follow us on social media</p>
          <div className="flex gap-3 flex-wrap">
            <a href="#" className="bg-[#1e1e1e] p-3 rounded-md hover:bg-orange-500 transition">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="#" className="bg-[#1e1e1e] p-3 rounded-md hover:bg-orange-500 transition">
              <FaXTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="bg-[#1e1e1e] p-3 rounded-md hover:bg-orange-500 transition">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="bg-[#1e1e1e] p-3 rounded-md hover:bg-orange-500 transition">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a href="#" className="bg-[#1e1e1e] p-3 rounded-md hover:bg-orange-500 transition">
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-5 pt-3 text-center text-sm sm:text-base">
        © 2025 Kanavu Labs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
