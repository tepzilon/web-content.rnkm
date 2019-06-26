import React from 'react'
import { getResponsive } from '../shared/js/responsive'
import Layout from '../components/layout'
import DesktopSlider from '../components/slider/desktopSlider'
import MobileSlider from '../components/slider/mobileSlider'

export default () => {
  const responsive = getResponsive()
  const device = responsive.getDevice()
  const slider =
    device === 'desktop' ? <DesktopSlider /> : <MobileSlider device={device} />
  return (
    <Layout device={device} title="Home" theme="pink">
      {slider}
    </Layout>
  )
}
