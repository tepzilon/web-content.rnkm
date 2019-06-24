import React from 'react'
import Layout from '../components/layout'
import BaanContainer from '../components/baanGallery/baanGallery'

import {getResponsive} from '../shared/js/responsive'

export default () => {
  const responsive = getResponsive()
  return (
    <Layout responsive={responsive} title="บ้านรับน้อง" theme="blue">
      <BaanContainer device={responsive.getDevice()} />
    </Layout>
  )
}
