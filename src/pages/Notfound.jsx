import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Notfoundhero from '../components/Notfoundhero'


const Notfound = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false, // allow repeat animation
      mirror: true, // trigger on scroll up
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="sm:mt-39 mt-39">
        <Navbar/>
        <Notfoundhero/>
        <Footer/>
    </div>
  )
}

export default Notfound