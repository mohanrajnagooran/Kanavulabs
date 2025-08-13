import React,{ useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Abouthero from '../components/Abouthero'
import Aboutlocation from '../components/Aboutlocation'
import Jointeam from '../components/Jointeam'
import AboutStatsSection from '../components/Aboutstatesection'
import TeamSection from '../components/Teamsection'
import CoreValuesSection from '../components/Corevaluessection'
import Companies from '../components/Companies'

const Aboutus = () => {
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
    <div className="sm:mt-39 mt-20">
      <Navbar/>
      <Abouthero/>
      <AboutStatsSection/>
      <TeamSection/>
      <CoreValuesSection/>
      <Companies/>
      <Jointeam/>
      <Aboutlocation/>
      <Footer/>
    </div>
  )
}

export default Aboutus