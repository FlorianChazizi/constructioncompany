import React from 'react'
import Carousel from './Carousel'

const OurWorks = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100" id="our-work">
      <div className="text-center">
        <h3 className="text-3xl font-mono font-bold mb-12 text-gray-800">Οι Δουλιές μας</h3>
        <Carousel />
      </div>
    </div>
  )
}

export default OurWorks 