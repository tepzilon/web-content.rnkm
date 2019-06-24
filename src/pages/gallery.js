import React from 'react'
import Layout from '../components/layout'
import BaanContainer from '../components/baanGallery/baanGallery'

import {getResponsive} from '../shared/js/responsive'

export default () => {
  const responsive = getResponsive()
  return (
    <Layout device={responsive.getDevice()} title="BAAN" theme="blue">
      <BaanContainer device={responsive.getDevice()} />
    </Layout>
  )
}
