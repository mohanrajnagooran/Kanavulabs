import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Careershome from '../components/Careershome'
import BenefitsSection from '../components/Benifitssection'
import FeatureHighlight from '../components/FeatureHighlight'
import Teamstrength from '../components/Teamstrength'


const Careers = () => {
  return (
    <div className="md:pt-45 pt-25">
      <Careershome/>
      <Navbar/>
      <BenefitsSection/>
      <FeatureHighlight/>
      <Teamstrength/>
      <Footer/>
    </div>
  )
}

export default Careers