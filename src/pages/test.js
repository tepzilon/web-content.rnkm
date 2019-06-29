import React from 'react'
import { getResponsive } from '../shared/js/responsive'
import Layout from '../components/layout'
import MobileInformation from '../components/information/mobileInformation';

export default () => {
  const responsive = getResponsive()
  const device = responsive.getDevice()
  return (
    <Layout device={device} title="Home" theme="pink">
        <MobileInformation device={device}/>
    </Layout>
  )
}
