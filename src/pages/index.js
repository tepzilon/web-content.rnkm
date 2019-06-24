import React from 'react'
import { useMediaQuery } from '@material-ui/core'
import Intro from '../components/intro/intro'
// import Featured from '../components/featured/featured'
// import Suggest from '../components/suggest/suggest'
import Layout from '../components/layout'


export default () => {
  let responsive = {
    desktop: useMediaQuery('(min-width:991px)'),
    tablet: useMediaQuery('(min-width:767px)'),
    mobile: useMediaQuery('(min-width:479px)'),
  }

  return (
    <Layout responsive={responsive} title="รับน้องก้าวใหม่" theme="pink">
      <Intro responsive={responsive}/>
      {/* <Featured responsive={responsive} />
      <Suggest responsive={responsive} /> */}      
    </Layout>
  )
}
