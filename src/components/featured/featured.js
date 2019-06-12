import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'
import { Box, Button } from '@material-ui/core'

import styles from './featured.module.scss'

export default ({isDesktop}) => {
  const settings = {
    arrows: isDesktop,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  }
  return (
    <Box className={isDesktop ? styles.slideHolderDesktop : styles.slideHolderMobile}>
      <Slider {...settings}>
        <div>
          <Box className={styles.featuredBox}>
            <h1>รับน้องก้าวใหม่</h1>
            <p>สโลแกนสำหรับกิจกรรม โลเร็มยิบซัมบอยคอตผลักดันสแตนดาร์ด สเตอริโอสกายแคนูแอดมิชชั่นคำตอบ</p>
            <h3>ปุ่มสำหรับฟีเจอร์สำคัญ</h3>
            <Button variant='contained' bgcolor='primary.main'>ลงทะเบียน</Button>
          </Box>
        </div>
        <div>
          <Box className={styles.featuredBox}>
            <p>เนื้อหาเพิ่มเติม</p>
          </Box>
        </div> 
      </Slider>
    </Box>
  )
}

