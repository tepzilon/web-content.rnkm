import React from 'react'
import { getResponsive } from '../shared/js/responsive'
import DesktopInformation from '../components/information/desktopInformation'
import Layout from '../components/layout'

const test = () => {
  const responsive = getResponsive()
  const device = responsive.getDevice()
  return (
    <Layout device={device} title="Home" theme="pink">
      <DesktopInformation />
    </Layout>
  )
}

export default test
