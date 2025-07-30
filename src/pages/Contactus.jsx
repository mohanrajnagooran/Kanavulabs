import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Aboutlocation from '../components/Aboutlocation'
import Contacthero from '../components/Contacthero'
import FaqSection from '../components/FaqSection'

const Contactus = () => {
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