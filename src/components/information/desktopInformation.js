import React from 'react'
import Slick from '../slick/slick'
import About from '../about-rnkm/rnkm'
import Timeline from '../timeline/timeline'

const desktopInformation = () => {
  return (
    <div>
      <Slick />
      <About device="desktop" />
      <Timeline device="desktop"/>
    </div>
  )
}

export default desktopInformation
