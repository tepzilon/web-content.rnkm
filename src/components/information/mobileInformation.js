import React from 'react'
import MobileContent from './mobileContent'
import Timeline from '../timeline/timeline'

const mobileInformation = ({ device }) => {
 
  return (
    <div>
      <MobileContent device={device}/>
      <Timeline device={device}/>
    </div>
  )
}

export default mobileInformation
