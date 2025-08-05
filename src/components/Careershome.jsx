import React from 'react'
import jobs from '../assets/jobs.png'


const Careershome = () => {
  return (
    <section>
        <div className=' max-w-7xl mx-auto'>
            <div className='text-center justify-center items-center'>
                <h1 className='text-5xl font-bold max-w-3xl mx-auto'>Join our team of talented innovators</h1>
                <p className='max-w-3xl mx-auto'>We meticulously target specific keywords your audience uses, ensuring every click brings highly relevant traffic directly to your site. This isn't guesswork; it's a measurable strategy, giving you clear insights and control over your advertising spend. Stop paying for exposure; start paying for potential customers ready to engage.</p>
                <button>Browse open positions</button>
            </div>
            <div>
                <img src={jobs} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Careershome