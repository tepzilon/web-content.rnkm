import React from 'react'
import Layout from '../components/layout'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export default () => {
  let responsive = {
    desktop: useMediaQuery('(min-width:991px)'),
    tablet: useMediaQuery('(min-width:767px)'),
    mobile: useMediaQuery('(min-width:479px)'),
  }

  return (
    <Layout responsive={responsive} title="ไม่พบหน้านี้" theme="blue">
      <center>
        <h1>404 Page Not Found.</h1>
      </center>
    </Layout>
  )
}
