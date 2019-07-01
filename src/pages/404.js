import React from 'react'
import Layout from '../components/layout'
import { getResponsive } from '../shared/js/responsive'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'
import styles from './404.module.scss'

export default () => {
  const responsive = getResponsive()
  const device = responsive.getDevice()
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "background/background.webp" }) {
        childImageSharp {
          fluid(maxWidth: 2000, maxHeight: 1125, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout device={device} title="Page not found" theme="pink">
      <BackgroundImage
        fluid={data.background.childImageSharp.fluid}
        style={{ height: 'calc(100vh - 160px)' }}
      >
        <div className={styles.wrapper}>
          <div className={styles.text}>404 Page Not Found</div>
        </div>
      </BackgroundImage>
    </Layout>
  )
}
