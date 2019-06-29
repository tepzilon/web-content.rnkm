import React from 'react'
import Layout from '../components/layout'
import { getResponsive } from '../shared/js/responsive'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

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
        style={{ height: 'calc(100vh - 140px)' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <div
            style={{
              fontFamily: "'Blanch Caps','Noto Sans',sans-serif",
              fontSize: '15vw',
              color: '#F58FA3',
              textShadow: '2px 2px 0 #fff',
            }}
          >
            404 Page Not Found
          </div>
        </div>
      </BackgroundImage>
    </Layout>
  )
}
