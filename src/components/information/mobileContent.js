import React from 'react'
import { Row, Col } from 'antd'
import styles from './mobileContent.module.scss'
import About from '../about-rnkm/rnkm'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

export default ({ device }) => {
  const data = useStaticQuery(graphql`
    query {
      activities: allFile(
        filter: { relativePath: { regex: "/^activities/" } }
        sort: { fields: [name], order: ASC }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 375, maxHeight: 250) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      logo: file(relativePath: { eq: "rnkm_logo_filled.png" }) {
        childImageSharp {
          fluid(maxWidth: 160, maxHeight: 160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      background: file(relativePath: { eq: "slickBackground/bg0.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, maxHeight: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const images = data.activities.edges

  const span = device === 'tablet' ? 12 : 24

  const Intro = () => (
    <div className={styles.bgWrapper}>
      <BackgroundImage fluid={data.background.childImageSharp.fluid}>
        <div className={styles.introWrapper} device={device}>
          <div className={styles.introImageWrapper}>
            <div className={styles.introImage} device={device}>
              <Img fluid={data.logo.childImageSharp.fluid} />
            </div>
          </div>
          <div className={styles.introContentWrapper} device={device}>
            <div className={styles.introHeader} device={device}>
              103 We Unite, We CUnique
            </div>
            <div className={styles.introSubtitle} device={device}>
              " It’s always better when we are together "
            </div>
            <div className={styles.introDescription} device={device}>
              <div className={styles.introFirstLine} device={device}>
                มาร่วมเป็นส่วนหนึ่งในการสร้างเอกลักษณ์
              </div>
              <div>ของพวกเราชาวจุฬาฯ ในงานรับน้องก้าวใหม่</div>
              <div>พบกัน 3 - 5 สิงหาคม 2562</div>
            </div>
            <div className={styles.introHashtag} device={device}>
              #WeuniteCUnique #UniteCU103
            </div>
          </div>
        </div>
      </BackgroundImage>
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
          padding: '20px 30px 0 30px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Row type="flex" gutter={16}>
          <Template
            image={images[0]}
            title="Together we are proud"
            subtitle="กิจกรรมรับน้องรับขวัญ"
            description="ต้อนรับนิสิตใหม่ ภายใต้รั้วจามจุรี พร้อมแขกรับเชิญสุดพิเศษที่จะมามอบความสนุกสนาน และมาแบ่งปันเรื่องราวสุด exclusive ที่ไม่มีวันลืม"
          />
          <Template
            image={images[1]}
            title="Together we joy"
            subtitle="Freshy Night"
            description="พบโชว์สุดพิเศษจากศิลปินชื่อดัง ที่จะมาทำให้น้องได้ปลดปล่อยความมันส์สุดขั้ว"
          />
          <Template
            image={images[2]}
            title="Together we are one"
            subtitle="กิจกรรมหอประชุม"
            description=" เพลิดเพลินกับละครหลากหลายอารมณ์ ที่มาพร้อมกับตอนจบให้น้อง ๆ CU Freshmen ได้หาคำตอบด้วยตัวเอง"
          />
          <Template
            image={images[3]}
            title="Together we share"
            subtitle="กิจกรรมบำเพ็ญประโยชน์"
            description="เปิดโอกาสให้น้อง ๆ ได้ร่วมกันแบ่งปัน ผ่านการทำกิจกรรมที่สร้างสรรค์กับเพื่อน ๆ"
          />
          <Template
            image={images[4]}
            title="Together we grow"
            subtitle="Content in capsule"
            description="เครื่องมือสุดล้ำ ที่จะช่วยเก็บความทรงจำอันล้ำค่าของน้อง ๆ จากงานรับน้องก้าวใหม่"
          />
        </Row>
      </div>
    </div>
  )
}
