import React from 'react'
import Navbar from '../components/Navbar'
import PortfolioSection from '../components/PortfolioSection'
import Footer from '../components/Footer'

const Portfolio = () => {
  return (
    <div className="sm:mt-39 mt-20">
      <Navbar/>
      <PortfolioSection/>
      <Footer/>
    </div>
  )
}

export default Portfolio