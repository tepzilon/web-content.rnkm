import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const avatar = ({ gender }) => {
  const data = useStaticQuery(graphql`
    query {
      pheeAvatar: file(relativePath: { eq: "user/cu_freshmen.png" }) {
        childImageSharp {
          fluid(maxWidth: 50, maxHeight: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      nongAvatar: file(relativePath: { eq: "user/nong.png" }) {
        childImageSharp {
          fluid(maxWidth: 50, maxHeight: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div style={{ height: 50, width: 50,borderRadius:'50%',overflow:'hidden' }}>
      {gender === 'male' ? (
        <Img fluid={data.pheeAvatar.childImageSharp.fluid} />
      ) : (
        <Img fluid={data.nongAvatar.childImageSharp.fluid} />
      )}
    </div>
  )
}

export default avatar
