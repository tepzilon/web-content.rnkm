import React from 'react'
import { Carousel } from 'antd'
import './desktopSlider.scss'
import images from './imagesSlick'

export default () => {
  const bgStyle = {
    backgroundPosition: 'center',
    height: 'calc(100vh - 80px)',
  }
  const Template = ({ title, subtitle, description }) => (
    <div
      style={{ 
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textShadow: '5px 5px 8px black',
        color: 'white',
        background: 'rgba(0,0,0,0.5)',
      }}
    >
      <div>
        <div style={{ display: 'inline-block' }}>
          <div style={{ fontFamily: 'Blanch Caps', fontSize: 100 }}>
            {title}
          </div>
          <div
            style={{
              textAlign: 'right',
              fontSize: 30,
              color: '#ccc',
              marginTop: -40,
            }}
          >
            {subtitle}
          </div>
        </div>
        <div style={{ width: '80vw', marginTop: 20 }}>
          <p style={{ fontSize: 20 }}>{description}</p>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      <Carousel
        //   autoplay
        easing="ease-in-out"
      >
        <div>
          <div style={{ backgroundImage: `url(${images.bg0})`, ...bgStyle }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <div style={{ display: 'flex' }}>
                <img src={images.logo} className="logo" alt="rnkm logo" />
                <div
                  style={{
                    textShadow: '5px 5px 8px black',
                    width: 600,
                    color: 'white',
                    marginLeft: 20,
                  }}
                >
                  <h1
                    style={{
                      color: 'white',
                      fontFamily: 'Blanch Caps',
                      fontSize: 70,
                      marginBottom: 10,
                    }}
                  >
                    103 We Unite, We CUnique
                  </h1>
                  <p style={{ fontSize: 25 }}>
                    " It’s always better when we are together
                    มาร่วมเป็นส่วนหนึ่งในการสร้างความแตกต่างของพวกเราชาวจุฬาฯ
                    ในงานรับน้องก้าวใหม่ "
                  </p>
                  <p style={{ textAlign: 'center', fontSize: 25 }}>
                    พบกัน 3 - 5 สิงหาคม 2562
                  </p>
                  <p
                    style={{
                      fontFamily: 'Blanch Caps',
                      fontSize: 50,
                      textAlign: 'right',
                    }}
                  >
                    #WeuniteCUnique #UniteCU103
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style={{ backgroundImage: `url(${images.bg1})`, ...bgStyle }}>
            <Template
              title="Together we are proud"
              subtitle="กิจกรรมรับขวัญน้องใหม่"
              description="ต้อนรับนิสิตใหม่ ภายใต้รั้วจามจุรี พร้อมแขกรับเชิญสุดพิเศษที่จะมามอบความสนุกสนาน และมาแบ่งปันเรื่องราวสุด exclusive ที่ไม่มีวันลืม"
            />
          </div>
        </div>

        <div>
          <div style={{ backgroundImage: `url(${images.bg2})`, ...bgStyle }}>
            <Template
              title="Together we joy"
              subtitle="Freshy Night"
              description="พบโชว์สุดพิเศษจากศิลปินชื่อดัง ที่จะมาทำให้น้องได้ปลดปล่อยความมันสุดขั้ว"
            />
          </div>
        </div>

        <div>
          <div style={{ backgroundImage: `url(${images.bg3})`, ...bgStyle }}>
            <Template
              title="Together we are one"
              subtitle="กิจกรรมหอประชุม"
              description=" เพลิดเพลินกับละครหลากหลายอารมณ์ ที่มาพร้อมกับตอนจบให้น้อง ๆ CU Freshmen ได้หาคำตอบด้วยตัวเอง"
            />
          </div>
        </div>

        <div>
          <div style={{ backgroundImage: `url(${images.bg4})`, ...bgStyle }}>
            <Template
              title="Together we share"
              subtitle="กิจกรรมบำเพ็ญประโยชน์"
              description="เปิดโอกาสให้น้อง ๆ ได้ร่วมกันแบ่งปัน ผ่านการทำกิจกรรมที่สร้างสรรค์กับเพื่อน ๆ"
            />
          </div>
        </div>

        <div>
          <div style={{ backgroundImage: `url(${images.bg5})`, ...bgStyle }}>
            <Template
              title="Together we grow"
              subtitle="Content in capsule"
              description="เครื่องมือสุดล้ำ ที่จะช่วยเก็บความทรงจำอันล้ำค่าของน้อง ๆ จากงานรับน้องก้าวใหม่"
            />
          </div>
        </div>
      </Carousel>
    </div>
  )
}
