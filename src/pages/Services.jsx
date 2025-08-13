import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from '../components/Navbar'
import Servicesform from '../components/Servicesform'
import Footer from '../components/Footer'
import TechnologiesSection from '../components/TechnologiesSection'
import AgileTeamSection from '../components/AgileTeamSection'
import Jointeam from '../components/Jointeam'
import Servicestestinimonials from '../components/Servicestestinimonials'

const Services = () => {
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
    <div className="sm:mt-39 mt-30">
      <Navbar/>
      <Servicesform/>
      <TechnologiesSection/>
      <AgileTeamSection/>
      <Jointeam/>
      <Servicestestinimonials/>
      <Footer/>
    </div>
  )
}

export default Services