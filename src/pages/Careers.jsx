import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Careershome from '../components/Careershome'
import BenefitsSection from '../components/Benifitssection'
import FeatureHighlight from '../components/FeatureHighlight'
import Teamstrength from '../components/Teamstrength'
import Jobopenings from '../components/Jobopenings'


const Careers = () => {
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
    <div className="md:pt-45 pt-25">
      <Navbar/>
      <Careershome/>
      <BenefitsSection/>
      <FeatureHighlight/>
      <Teamstrength/>
      <Jobopenings/>
      <Footer/>
    </div>
  )
}

export default Careers