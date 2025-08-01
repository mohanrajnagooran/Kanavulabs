import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Articles from '../components/Articles';
import Services from '../components/Services'
import Workflow from '../components/Workflow';
import Speed from '../components/Speed';
import Agilesystem from '../components/Agilesystem';
import Portfolioshow from '../components/Portfolioshow';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="md:pt-40 pt-30">
      <Navbar />
      <Hero/>
      <Services />
      <Workflow />
      <Speed/>
      <Agilesystem/>
      <Portfolioshow/>
      <Testimonials/>
      <Articles/>
        <Footer/>
    </div>
  )
}

export default Home