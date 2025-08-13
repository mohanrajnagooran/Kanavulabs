import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from '../components/Navbar'
import Comingsoonhero from '../components/Comingsoonhero'
import Footer from '../components/Footer'

const Comingsoon = () => {
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
    <div className="sm:mt-1 mt-15">
        <Navbar/>
        <Comingsoonhero/>
        <Footer/>
    </div>
  )
}

export default Comingsoon