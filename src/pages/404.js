import React from 'react'
import Layout from '../components/layout'
import { getResponsive } from '../shared/js/responsive'

export default () => {
 
  const responsive = getResponsive()
  const device = responsive.getDevice()

  return (
    <Layout device={device} title="Page not found" theme="pink">
      <div> 404 Page Not Found. </div>
    </Layout>
  )
}
