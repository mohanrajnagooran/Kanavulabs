import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogSection from '../components/BlogSection'
import Subscribe from '../components/Subscribe'
import Latestarticle from '../components/Latestarticle'

const Blogs = () => {
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
    <div className="sm:mt-39 mt-15">
      <Navbar/>
      <BlogSection/>
      <Subscribe/>
      <Latestarticle/>
      <Footer/>
    </div>
  )
}

export default Blogs