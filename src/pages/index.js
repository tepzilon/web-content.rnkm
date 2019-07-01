import React from 'react'
import { Helmet } from 'react-helmet'
import { getResponsive } from '../shared/js/responsive'
import Layout from '../components/layout'
import DesktopInformation from '../components/information/desktopInformation'
import MobileInformation from '../components/information/mobileInformation'
import cover from '../assets/images/facebook_cover.webp'

export default () => {
  const responsive = getResponsive()
  const device = responsive.getDevice()
  const information =
    device === 'desktop' ? <DesktopInformation /> : <MobileInformation device={device} />
  return (
    <Layout device={device} title="Home" theme="pink">
      <Helmet>
        <meta property="og:type" content="article" />
        <meta property="og:title" content="งานรับน้องก้าวใหม่ จุฬาลงกรณ์มหาวิทยาลัย ปีการศึกษา 2562" />
        <meta property="og:description" content="103 We Unite, We CUnique มาร่วมเป็นส่วนหนึ่งในการสร้างเอกลักษณ์ของพวกเราชาวจุฬาฯ ในงานรับน้องก้าวใหม่" />
        <meta property="og:image" content={cover} />
      </Helmet>
      {information}
    </Layout>
  )
}
