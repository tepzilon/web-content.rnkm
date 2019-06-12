import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'
import { Box, Button, useMediaQuery } from '@material-ui/core'

import styles from './featured.module.scss'

export default () => {
  const desktop = useMediaQuery('(min-width:640px)');
  const settings = {
    arrows: desktop,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  }
  return (
    <Box className={desktop ? styles.slideHolderDesktop : styles.slideHolderMobile}>
      <Slider {...settings} style={{
        transition: 'height 0.5s'
      }}>
        <div>
          <Box className={styles.featuredBox}>
            <h1>รับน้องก้าวใหม่</h1>
            <p>สโลแกนสำหรับกิจกรรม อาจมีได้หลายพารากราฟ ถ้าหากข้อความยาวเกินหน้าจอ</p>
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

