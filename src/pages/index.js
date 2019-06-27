import React from 'react'
import { Helmet } from 'react-helmet'
import { getResponsive } from '../shared/js/responsive'
import Layout from '../components/layout'
import DesktopSlider from '../components/slider/desktopSlider'
import MobileSlider from '../components/slider/mobileSlider'
import cover from '../assets/images/slider/bg4.jpg'

export default () => {
  const responsive = getResponsive()
  const device = responsive.getDevice()
  const slider =
    device === 'desktop' ? <DesktopSlider /> : <MobileSlider device={device} />
  return (
    <Layout device={device} title="Home" theme="pink">
      <Helmet>
        <meta property="og:type" content="article" />
        <meta property="og:title" content="งานรับน้องก้าวใหม่ จุฬาลงกรณ์มหาวิทยาลัย ปีการศึกษา 2562" />
        <meta property="og:description" content="103 We Unite, We CUnique มาร่วมเป็นส่วนหนึ่งในการสร้างความแตกต่างของพวกเราชาวจุฬาฯ ในงานรับน้องก้าวใหม่" />
        <meta property="og:image" content={cover} />
      </Helmet>
      {slider}
    </Layout>
  )
}
