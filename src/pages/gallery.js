import React from 'react'
import Layout from '../components/layout'
import { useMediaQuery } from '@material-ui/core'
import BaanContainer from '../components/baanGallery/baanGallery'

export default () => {
  let responsive = {
    desktop: useMediaQuery('(min-width:991px)'),
    tablet: useMediaQuery('(min-width:767px)'),
    mobile: useMediaQuery('(min-width:479px)'),
  }
  return (
    <Layout responsive={responsive} title="บ้านรับน้อง" theme="blue">
      <BaanContainer responsive={responsive} />
    </Layout>
  )
}
