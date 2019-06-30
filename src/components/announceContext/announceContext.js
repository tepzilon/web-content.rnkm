import React from 'react'
import styles from './announce-context.module.scss'
import { Card } from 'antd'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

const announceContext = ({ frontmatter, html, device }) => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "background/background1.webp" }) {
        childImageSharp {
          fluid(maxWidth: 2000, maxHeight: 1125, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage fluid={data.background.childImageSharp.fluid} style={{backgroundRepeat:'repeat'}}>
      {/* <div className={styles.wholeWrapper} device={device}> */}
      <div className={styles.cardWrapperWrapper} device={device}>
        <div className={styles.cardWrapper} device={device}>
          <Card title={<h1>{frontmatter.title}</h1>}>
            <div
              className={styles.contentWrapper}
              dangerouslySetInnerHTML={{ __html: html }}
              device={device}
            />
          </Card>
        </div>
      </div>
      {/* </div> */}
    </BackgroundImage>
  )
}

export default announceContext
