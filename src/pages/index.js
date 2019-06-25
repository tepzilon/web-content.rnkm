import React from 'react'
import { getResponsive } from '../shared/js/responsive'
// import Intro from '../components/intro/intro'
// import Featured from '../components/featured/featured'
import DesktopSlider from '../components/slider/desktopSlider'
import MobileSlider from '../components/slider/mobileSlider'
import Layout from '../components/layout'
// import Content from '../components/content/content'

export default () => {
 
  const responsive = getResponsive()
  const device = responsive.getDevice()
  const slider = (device==='desktop' ? <DesktopSlider /> : <MobileSlider />)
  return (
    <Layout device={device} title="Home" theme="pink">
      {/* <Intro responsive={responsive}/> */}
      {slider}
      {/* <Content device={device}/> */}
      {/* <Featured responsive={responsive} />
      <Suggest responsive={responsive} /> */}      
    </Layout>
  )
}
