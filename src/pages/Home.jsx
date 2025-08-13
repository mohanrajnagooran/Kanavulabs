import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Articles from "../components/Articles";
import Services from "../components/Services";
import Workflow from "../components/Workflow";
import Speed from "../components/Speed";
import Agilesystem from "../components/Agilesystem";
import Portfolioshow from "../components/Portfolioshow";
import Testimonials from "../components/Testimonials";

const Home = () => {
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
    <div className="md:pt-40 pt-30">
      <Navbar />
      <Hero />
      <Services />
      <Workflow />
      <Speed />
      <Agilesystem />
      <Portfolioshow />
      <Testimonials />
      <Articles />
      <Footer />
    </div>
  );
};

export default Home;
