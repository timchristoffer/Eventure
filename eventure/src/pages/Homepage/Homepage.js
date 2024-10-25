import React from 'react'

import HeroSlider from '../../components/HeroSlider/HeroSlider'
import LogoSlider from '../../components/InfiniteSlider/LogoSlider/LogoSlider'
import HomeHeader from '../../components/Header/HomeHeader'

const Homepage = () => {
  return (
    <div>
      <HeroSlider />
      <HomeHeader />
      <LogoSlider />
    </div>
  )
}

export default Homepage
