import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const avatar = ({ gender }) => {
  const data = useStaticQuery(graphql`
    query {
      maleAvatar: file(relativePath: { eq: "user/male.png" }) {
        childImageSharp {
          fluid(maxWidth: 50, maxHeight: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      femaleAvatar: file(relativePath: { eq: "user/female.png" }) {
        childImageSharp {
          fluid(maxWidth: 50, maxHeight: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div style={{ height: 50, width: 50 }}>
      {gender === 'male' ? (
        <Img fluid={data.maleAvatar.childImageSharp.fluid} />
      ) : (
        <Img fluid={data.femaleAvatar.childImageSharp.fluid} />
      )}
    </div>
  )
}

export default avatar
