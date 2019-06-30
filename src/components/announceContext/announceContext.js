import React from 'react'
import styles from './announce-context.module.scss'
import { Card } from 'antd'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

const announceContext = ({ frontmatter, html, device }) => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "background/seamless_alt.jpg" }) {
        childImageSharp {
          fluid(maxWidth:1080, maxHeight:540) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage fluid={data.background.childImageSharp.fluid} style={{backgroundRepeat:'repeat', backgroundSize: '50%'}}>
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
