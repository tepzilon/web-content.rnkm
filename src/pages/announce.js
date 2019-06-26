import React from 'react'
import { getResponsive } from '../shared/js/responsive'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'

export default ({data}) => {
  const responsive = getResponsive()
  const device = responsive.getDevice()
  return (
    <Layout device={device} title="Annouce" theme="pink">
      {
        data.allMarkdownRemark.edges.map(md => (
          <Link to={md.node.frontmatter.path}>
            <h1>{md.node.frontmatter.title}</h1>
          </Link>
        ))
      }
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
  }
`
