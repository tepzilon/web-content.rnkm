import React from 'react'
import styles from './slickContent.module.scss'

const IntroSlide = () => (
  <div>
    <div />
  </div>
)

const Slide = ({ title, subtitle, description, position }) => (
  <div className={styles.wrapper} position={position}>
    <div className={styles.header}>{title}</div>
    <div className={styles.subtitle}>{subtitle}</div>
    <div className={styles.descriptionWrapper} position={position}>
      <div className={styles.description}>{description}</div>
    </div>
  </div>
)
const introSlide = <div>introSlide</div>

const slide1 = (
  <Slide
    title="Together we are proud"
    subtitle="กิจกรรมรับน้องรับขวัญ"
    description={
      <div>
        <div>
          ต้อนรับนิสิตใหม่ ภายใต้รั้วจามจุรี พร้อมแขกรับเชิญสุดพิเศษที่จะมามอบ
        </div>
        <div>ความสนุกสนานและมาแบ่งปันเรื่องราวสุด exclusive ที่ไม่มีวันลืม</div>
      </div>
    }
    position="right"
  />
)

const slide2 = (
  <Slide
    title="Together we joy"
    subtitle="Freshy Night"
    description="พบโชว์สุดพิเศษจากศิลปินชื่อดัง ที่จะมาทำให้น้องได้ปลดปล่อยความมันสุดขั้ว"
    position="left"
  />
)

const slide3 = (
  <Slide
    title="Together we are one"
    subtitle="กิจกรรมหอประชุม"
    description={
      <div>
        <div>เพลิดเพลินกับละครหลากหลายอารมณ์ ที่มาพร้อมกับตอนจบให้น้อง ๆ</div>
        <div>CU Freshmen ได้หาคำตอบด้วยตัวเอง</div>
      </div>
    }
    position="right"
  />
)

const slide4 = (
  <Slide
    title="Together we share"
    subtitle="กิจกรรมบำเพ็ญประโยชน์"
    description="เปิดโอกาสให้น้อง ๆ ได้ร่วมกันแบ่งปัน ผ่านการทำกิจกรรมที่สร้างสรรค์กับเพื่อน ๆ"
    position="left"
  />
)

const slide5 = (
  <Slide
    title="Together we grow"
    subtitle="Content in capsule"
    description="เครื่องมือสุดล้ำ ที่จะช่วยเก็บความทรงจำอันล้ำค่าของน้อง ๆ จากงานรับน้องก้าวใหม่"
    position="right"
  />
)

const content = [introSlide, slide1, slide2, slide3, slide4, slide5]

export default content
