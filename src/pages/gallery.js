import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({data}) =>{

  console.log(data)
  return(
    <div>
    <Img fixed={data.allFile.edges[0].node.childImageSharp.fixed} />
  </div>
  )
  
}


export const query = graphql`  
query{
  allFile(filter:{extension:{eq: "png"}}){
    edges{
      node{
      	childImageSharp{
          fixed{
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
}
`