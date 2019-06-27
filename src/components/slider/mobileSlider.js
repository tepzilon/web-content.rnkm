import React from 'react'
import { Row, Col } from 'antd'
import images from './imagesSlick'
import styles from './mobileSlider.module.scss'
import About from '../about-rnkm/rnkm'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

export default ({ device }) => {
  const data = useStaticQuery(graphql`
    query {
      backgrounds: allFile(
        filter: { relativePath: { regex: "/^slider/" } }
        sort: { fields: [name], order: ASC }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 375, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      logo: file(relativePath: { eq: "rnkm_logo_filled.png" }) {
        childImageSharp {
          fixed(width: 160, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const images = data.backgrounds.edges

  const span = device === 'tablet' ? 12 : 24

  const Intro = () => (
    <div className={styles.introWrapper} device={device}>
      <div className={styles.introImageWrapper}>
        <Img fixed={data.logo.childImageSharp.fixed} />
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
          <div className={styles.image}>
            <Img fluid={image.node.childImageSharp.fluid} />
          </div>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </Col>
  )

  return (
    <div>
      <Intro />
      <About device={device} />
      <div
        style={{
          padding: '20px 30px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Row type="flex" gutter={16}>
          <Template
            image={images[1]}
            title="Together we are proud"
            subtitle="กิจกรรมรับน้องรับขวัญ"
            description="ต้อนรับนิสิตใหม่ ภายใต้รั้วจามจุรี พร้อมแขกรับเชิญสุดพิเศษที่จะมามอบความสนุกสนาน และมาแบ่งปันเรื่องราวสุด exclusive ที่ไม่มีวันลืม"
          />
          <Template
            image={images[2]}
            title="Together we joy"
            subtitle="Freshy Night"
            description="พบโชว์สุดพิเศษจากศิลปินชื่อดัง ที่จะมาทำให้น้องได้ปลดปล่อยความมันสุดขั้ว"
          />
          <Template
            image={images[3]}
            title="Together we are one"
            subtitle="กิจกรรมหอประชุม"
            description=" เพลิดเพลินกับละครหลากหลายอารมณ์ ที่มาพร้อมกับตอนจบให้น้อง ๆ CU Freshmen ได้หาคำตอบด้วยตัวเอง"
          />
          <Template
            image={images[4]}
            title="Together we share"
            subtitle="กิจกรรมบำเพ็ญประโยชน์"
            description="เปิดโอกาสให้น้อง ๆ ได้ร่วมกันแบ่งปัน ผ่านการทำกิจกรรมที่สร้างสรรค์กับเพื่อน ๆ"
          />
          <Template
            image={images[5]}
            title="Together we grow"
            subtitle="Content in capsule"
            description="เครื่องมือสุดล้ำ ที่จะช่วยเก็บความทรงจำอันล้ำค่าของน้อง ๆ จากงานรับน้องก้าวใหม่"
          />
        </Row>
      </div>
    </div>
  )
}
