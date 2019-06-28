import React from 'react'
import styles from './slickContent.module.scss'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "rnkm_logo_filled.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.logo.childImageSharp.fluid} />
}

const IntroSlide = ({ title, subtitle, description, hashtag }) => (
  <div className={styles.intro}>
    <div className={styles.imageWrapper}>
      <div className={styles.image}>{logo()}</div>
    </div>
    <div className={styles.contentWrapper}>
      <div className={styles.header}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.hashtag}>{hashtag}</div>
    </div>
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
const introSlide = (
  <IntroSlide
    title="103 We Unite, We CUnique"
    subtitle={<span>" It’s always better when we are together "</span>}
    description={
      <div>
        <div>
          มาร่วมเป็นส่วนหนึ่งในการสร้างความแตกต่างของพวกเรา
        </div>
        <div>ชาวจุฬาฯ ในงานรับน้องก้าวใหม่ พบกัน 3 - 5 สิงหาคม 2562</div>
      </div>
    }
    hashtag="#WeuniteCUnique #UniteCU103"
  />
)

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
