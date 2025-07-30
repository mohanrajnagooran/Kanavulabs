import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import Logo from '../assets/Flogo.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left: Company Info */}
        <div>
          {/* Logo */}
          <img src={Logo} alt="Kanavu Labs Logo" className="h-40 " />

          {/* Paragraph */}
          <p className="text-gray-300 text-xl mb-8 mx-10 max-w-6xl ">
            We meticulously target specific keywords your audience uses,
            ensuring every click brings highly relevant traffic directly to your
            site. This isn't guesswork.
          </p>

          {/* Contact Info */}
          <div className="mb-4 mx-10">
            <p className="text-xl text-white mb-1">Email</p>
            <p className="text-white font-bold text-xl">contact@kanavulabs.com</p>
          </div>
          <div className="mb-4 mx-10">
            <p className="text-xl text-white mb-1">Phone</p>
            <p className="text-white font-bold text-xl">+91 9629824568</p>
          </div>
        </div>

        {/* Right: Subscription + Social */}
        <div className="mx-10">
          <h2 className="text-4xl font-bold mb-6  mt-5 leading-snug ">
            Get in touch with us and let’s work on your project!
          </h2>

          {/* Newsletter */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6 border bg-white md:w-full  justify-between">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-72 px-4 py-3 rounded-md text-black placeholder:text-xl focus:outline-none"
            />
                <button className="bg-black text-white text-xl font-semibold px-10 py-3 rounded-md border hover:bg-orange-400 border-white">
                Subscribe
                </button>
          </div>

          {/* Social Media Icons */}
          <p className="text-xl text-white mb-3">Follow us on social media</p>
          <div className="flex gap-3">
            <a href="#" className="bg-[#1e1e1e] p-3 rounded-md">
              <FaFacebookF className="w-7 h-7" />
            </a>
            <a href="#" className="bg-[#1e1e1e] p-3 rounded-md">
              <FaXTwitter className="w-7 h-7" />
            </a>
            <a href="#" className="bg-[#1e1e1e] p-3 rounded-md">
              <FaInstagram className="w-7 h-7" />
            </a>
            <a href="#" className="bg-[#1e1e1e] p-3 rounded-md">
              <FaLinkedinIn className="w-7 h-7" />
            </a>
            <a href="#" className="bg-[#1e1e1e] p-3 rounded-md">
              <FaYoutube className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-5  pt-6 text-center text-xl text-white">
        Copyrights © Kanavulabs 2025
      </div>
    </footer>
  );
};

export default Footer;
