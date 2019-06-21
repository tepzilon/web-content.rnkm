import React from 'react'
import Layout from '../components/layout.new'
import { useMediaQuery } from '@material-ui/core'
import Featured from '../components/featured/featured'
import Suggest from '../components/suggest/suggest'

export default () => {
  let responsive = {
    desktop: useMediaQuery('(min-width:991px)'),
    tablet: useMediaQuery('(min-width:767px)'),
    mobile: useMediaQuery('(min-width:479px)'),
  }

  return (
    <Layout responsive={responsive} title="รับน้องก้าวใหม่ 2562" theme="blue">
      <Featured responsive={responsive} />
      <Suggest responsive={responsive} />
    </Layout>
  )
}
