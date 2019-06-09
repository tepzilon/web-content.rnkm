import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default ({ name, size, description, imgPath }) => {
    const data = useStaticQuery(graphql`
    query {
      file (relativePath: {eq:"${imgPath}"}){ 
        childImageSharp {
          fixed(width: 500, height: 500) { 
            ...GatsbyImageSharpFixed
          } 
        }
      }
    }
    `) 
  
console.log(imgPath)
  return(
      <div> 
        <Img fixed={data.file.childImageSharp.fixed} />
      </div>
  )
}
