import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'
import { Box, Button } from '@material-ui/core'
import './slickFix.scss'
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "red" }}
      onClick={onClick}
    />
  );
}

export default () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />
  }
  return (
    <div style={{margin: '50px'}}>
      <Slider {...settings}>
        <div>
          <Box style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '10px',
            paddingBottom: '10px'
          }}>
            <h1>รับน้องก้าวใหม่</h1>
            <p>ลอเร็มยิบซัม ดอเซ็ต</p>
            <p>โพชิงกิ สกูลทาวน์</p>
            <h1/>
            <Button variant='contained' bgcolor='primary.main'>สมัคร สุนทรเวชน์</Button>
          </Box>
        </div>
        <div>
          <Box style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h1>Techid</h1>
            <h1>Janphaka</h1>
          </Box>
        </div>
      </Slider>
    </div>
  )
}

