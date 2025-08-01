import React from 'react'
import Navbar from '../components/Navbar'
import Servicesform from '../components/Servicesform'
import Footer from '../components/Footer'
import TechnologiesSection from '../components/TechnologiesSection'

import AgileTeamSection from '../components/AgileTeamSection'
import Jointeam from '../components/Jointeam'
import Servicestestinimonials from '../components/Servicestestinimonials'

const Services = () => {
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