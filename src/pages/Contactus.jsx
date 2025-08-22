import React, { useEffect } from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Aboutlocation from '../components/Aboutlocation'
import Contacthero from '../components/Contacthero'
import FaqSection from '../components/FaqSection'
import AOS from "aos";

const Contactus = () => {
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
    <div className="sm:mt-40 mt-10">
      <Navbar/>
      <Contacthero/>
      <FaqSection/>
      <Aboutlocation/>
      <Footer/>
    </div>
  )
}

export default Contactus