import React from 'react'
import { getResponsive } from '../shared/js/responsive'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

export default ({ data }) => {
  const responsive = getResponsive()
  const device = responsive.getDevice()
  return (
    <Layout device={device} title="Dormitory" theme="pink">
      <BackgroundImage
        fluid={data.background.childImageSharp.fluid}
        style={{ backgroundRepeat: 'repeat', backgroundSize: '50%' }}
      >
        <div style={{ height: 'calc(100vh - 140px)', padding:30}}>
          {data.allMarkdownRemark.edges.map(md => (
            <Link to={md.node.frontmatter.path}>
              <div
                style={{
                  width : '70%',
                  height: 80,
                  boxShadow: '20px 20px 39px -24px rgba(0,0,0,0.75)',
                  backgroundColor: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin : '25px calc((100vw - 70%)/2)',
                  color : '#555555',
                  fontSize:24
                }}
              >
                {md.node.frontmatter.title}
              </div>
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
