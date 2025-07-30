import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogSection from '../components/BlogSection'
import Subscribe from '../components/Subscribe'
import Latestarticle from '../components/Latestarticle'

const Blogs = () => {
  return (
    <div className="sm:mt-39 mt-39">
      <Navbar/>
      <BlogSection/>
      <Subscribe/>
      <Latestarticle/>
      <Footer/>
    </div>
  )
}

export default Blogs