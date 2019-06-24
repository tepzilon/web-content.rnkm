import React from 'react'
import { getResponsive } from '../shared/js/responsive'
import Intro from '../components/intro/intro'
// import Featured from '../components/featured/featured'
// import Suggest from '../components/suggest/suggest'
import Layout from '../components/layout'


export default () => {
 
  const responsive = getResponsive()
  const device = responsive.getDevice()
  return (
    <Layout device={device} title="รับน้องก้าวใหม่" theme="pink">
      <Intro responsive={responsive}/>
      {/* <Featured responsive={responsive} />
      <Suggest responsive={responsive} /> */}      
    </Layout>
  )
}
