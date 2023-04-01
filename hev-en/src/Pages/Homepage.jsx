import React from 'react'
import FeaturedCaterories from '../component/FeaturedCaterories'
import Footer from '../component/Footer'
import Nav from '../component/Nav'
import SliderOne from '../component/SliderOne'

const Homepage = () => {
  return (
    <div>
      <Nav />
      <SliderOne />
      <FeaturedCaterories />
      <Footer />
    </div>
  )
}

export default Homepage
