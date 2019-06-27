import React from 'react'
import Layout from '../components/layout'
import BaanContainer from '../components/baanGallery/baanGallery'
import BaanSplash from '../components/baanSplash/baanSplash'
import {getResponsive} from '../shared/js/responsive'

export default () => {
  const responsive = getResponsive()
  return (
    <Layout device={responsive.getDevice()} title="BAAN" theme="pink">
      <BaanSplash device={responsive.getDevice()} />
      <BaanContainer device={responsive.getDevice()} />
    </Layout>
  )
}
