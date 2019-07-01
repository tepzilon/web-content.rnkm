import React from 'react'
import { getResponsive } from '../shared/js/responsive'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styles from './announce.module.scss'

export default ({ data }) => {
  const responsive = getResponsive()
  const device = responsive.getDevice()
  return (
    <Layout device={device} title="Announce" theme="pink">
      <BackgroundImage
        fluid={data.background.childImageSharp.fluid}
        style={{ backgroundRepeat: 'repeat', backgroundSize: '50%',height:'calc(100vh - 160px)' }}
      >
        <div>
          {data.allMarkdownRemark.edges.map(md => (
            <Link to={md.node.frontmatter.path} key={md.node.frontmatter.title}>
              <div className={styles.card} device={device}>{md.node.frontmatter.title}</div>
            </Link>
          ))}
        </div>
      </BackgroundImage>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
    background: file(relativePath: { eq: "background/seamless_alt.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080, maxHeight: 540) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
