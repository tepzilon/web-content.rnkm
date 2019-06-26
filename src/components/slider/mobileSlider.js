import React from 'react'
import { Row, Col, Divider } from 'antd'
import images from './imagesSlick'
import styles from './mobileSlider.module.scss'

export default ({ device }) => {
  const span = device === 'tablet' ? 12 : 24
  const Intro = () => (
    <div className={styles.introWrapper} device={device}>
      <div className={styles.introImageWrapper}>
        <img src={images.logo} className={styles.introImage} />
      </div>
      <div className={styles.introContentWrapper} device={device}>
        <h1 className={styles.introHeader}>We Unite, We CUnique</h1>
        <p className={styles.introDescription}>
          It’s always better when we are together
          มาร่วมเป็นส่วนหนึ่งในการสร้างความแตกต่างของพวกเราชาวจุฬาฯ
          ในงานรับน้องก้าวใหม่ 103 We Unite, We CUnique
        </p>
        <p className={styles.introDate}>พบกัน 3 – 5 สิงหาคม 2562</p>
        <p className={styles.introHashtag}>#WeuniteCUnique #UniteCU103</p>
      </div>
    </div>
  )
  const Template = ({ image, title, subtitle, description }) => (
    <Col span={span}>
      <div className={styles.card}>
        <div className={styles.header}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.imageWrapper}>
          <img src={image} className={styles.image} />
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </Col>
  )

  return (
    <div>
      <Intro />
      {/* <Divider /> */}
      <div
        style={{
          padding: '20px 30px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div>
          <Row type="flex" gutter={16}>
            <Template
              image={images.bg1}
              title="Together we are proud"
              subtitle="กิจกรรมรับขวัญน้องใหม่"
              description="ต้อนรับนิสิตใหม่ ภายใต้รั้วจามจุรี พร้อมแขกรับเชิญสุดพิเศษที่จะมามอบความสนุกสนาน และมาแบ่งปันเรื่องราวสุด exclusive ที่ไม่มีวันลืม"
            />
            <Template
              image={images.bg2}
              title="Together we joy"
              subtitle="Freshy Night"
              description="พบโชว์สุดพิเศษจากศิลปินชื่อดัง ที่จะมาทำให้น้องได้ปลดปล่อยความมันสุดขั้ว"
            />
            <Template
              image={images.bg3}
              title="Together we are one"
              subtitle="กิจกรรมหอประชุม"
              description=" เพลิดเพลินกับละครหลากหลายอารมณ์ ที่มาพร้อมกับตอนจบให้น้อง ๆ CU Freshmen ได้หาคำตอบด้วยตัวเอง"
            />
            <Template
              image={images.bg4}
              title="Together we share"
              subtitle="กิจกรรมบำเพ็ญประโยชน์"
              description="เปิดโอกาสให้น้อง ๆ ได้ร่วมกันแบ่งปัน ผ่านการทำกิจกรรมที่สร้างสรรค์กับเพื่อน ๆ"
            />
            <Template
              image={images.bg5}
              title="Together we grow"
              subtitle="Content in capsule"
              description="เครื่องมือสุดล้ำ ที่จะช่วยเก็บความทรงจำอันล้ำค่าของน้อง ๆ จากงานรับน้องก้าวใหม่"
            />
            <Divider />
          </Row>
        </div>
      </div>
    </div>
  )
}
