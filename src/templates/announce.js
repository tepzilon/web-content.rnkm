import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout';
import {getResponsive} from '../shared/js/responsive'
import AnnounceContext from '../components/announceContext/announceContext'
const announce = ({data}) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const responsive = getResponsive()
  return (
    <Layout device={responsive.getDevice()} title="ANNOUNCE" theme="blue">
      <AnnounceContext
        frontmatter={frontmatter}
        html={html}
        device={responsive.getDevice()}
      />
    </Layout>
  )
}

export default announce

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`