import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'
import { Box, Button } from '@material-ui/core'

import styles from './featured.module.scss'
import { useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import logo from '../../assets/images/rnkm_logo_filled.png';
export default ({responsive}) => {
  const settings = {
    arrows: responsive.tablet,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    // autoplay : true,
  }
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "rnkm_logo_filled.png" }) {
        childImageSharp {
          fluid(maxWidth: 60, maxHeight: 60, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      } 
    }
  `)
  return (
    <Box className={responsive.tablet ? styles.slideHolderDesktop : styles.slideHolderMobile}>
      <Slider {...settings}>
        <div>
          <Box className={styles.featuredBox}>
            {/* <Box className={styles.logoHolder}> */}
              <img src={logo} className={styles.logo}/>
            {/* </Box> */}
            <h3>รับน้องก้าวใหม่</h3>
            <p style={{textAlign: 'center'}}>สโลแกนสำหรับกิจกรรม โลเร็มยิบซัมบอยคอตผลักดันสแตนดาร์ด สเตอริโอสกายแคนูแอดมิชชั่นคำตอบ</p>
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

