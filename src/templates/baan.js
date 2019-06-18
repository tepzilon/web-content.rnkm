import React from 'react'
import { graphql } from 'gatsby';

const baan = ({data}) => {
  var context = data.allSitePage.edges[0].node.context
  return (
    <div>
      <h1>{context.nameTH}</h1>
      <p>{context.description}</p>
    </div>
  )
}

export const query = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq : $path }}) {
      edges {
        node {
          context {
            nameTH
            description
          }
        }
      }
    }
  }
`

export default baan
