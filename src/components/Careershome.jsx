import React from 'react'
import jobs from '../assets/jobs.png'


const Careershome = () => {
  return (
    <section>
        <div className=' max-w-7xl mx-auto'>
            <div className='text-center justify-center items-center'>
                <h1 className='text-4xl lg:text-6xl font-bold max-w-3xl mx-auto mb-5 p-2'>Join our team of talented innovators</h1>
                <p className='max-w-3xl mx-auto'>The team's clear communication and transparent process made development effortless. We're thrilled with the results—our new app not only looks great but is already delivering measurable impact.</p>
                <button className='bg-black text-white text-lg sm:text-xl px-10 py-3 mt-6 rounded-md hover:bg-orange-500 transition'>Browse open positions</button>
            </div>
            <div>
                <img src={jobs} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Careershome