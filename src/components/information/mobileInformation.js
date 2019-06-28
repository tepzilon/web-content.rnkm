import React from 'react'
import MobileSlider from '../slider/mobileSlider'

const mobileInformation = ({ device }) => {
  return (
    <div>
      <MobileSlider device={device} />
    </div>
  )
}

export default mobileInformation
