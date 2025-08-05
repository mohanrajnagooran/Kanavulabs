import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/Home-logo.png'
import { Link,useLocation  } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current path

  
  const links = [
      {label:'Home', path:"/"},
      { label: "About Us", path: "/about-us" },
      { label: "Our Services", path: "/services" },
      { label: "Our Portfolio", path: "/portfolio" },
      { label: "Blogs", path: "/blogs" },
      { label: "Careers", path: "/careers" },
  
  ];
    const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full  z-50 md:fixed fixed top-0 left-0 bg-white justify-between">
      <nav className="max-w-7xl mx-auto flex py-2  items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          <Link to='/' >
          <img src={Logo} alt="Kanavu Labs" className="md:h-40 h-20" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          {links.map(link => (
            <li key={link.label}>
              <Link to={link.path} className={`${
                  isActive(link.path)
                    ? 'text-black font-bold underline underline-offset-4'
                    : 'text-gray-700 hover:text-black'
                } transition`}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* CTA Buttons (desktop) */}
        <div className="hidden md:block">
          <Link
            to="/contact-us"
            className="bg-black text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-orange-500 transition"
          >
          Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-black gap-2 p-2  focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden  bg-white shadow-md">
          <ul className="space-y-3 p-2  text-sm font-medium">
            {links.map((link,index) => (
              <li key={index}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact-us"
                className="block bg-black text-white text-center px-4 py-2 rounded-md hover:bg-orange-500 transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
