import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ButtonBaan from './buttonBaan'

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        allBaanJson {
          edges {
            node {
              id
              name
              size
              description
              cover
            }
          }
        }
        allFile(filter: {relativeDirectory: {eq: "baan"}}) {
          edges {
            node {
              name,
              ext,
              childImageSharp {
                fixed(width:100, height:100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `
  )

  let imageFetcher = {}
  data.allFile.edges.forEach(e => {
    imageFetcher[e.node.name + e.node.ext] = e.node.childImageSharp.fixed
  })

  return (
    <div>
      {data.allBaanJson.edges.map(baan => (
        <ButtonBaan 
          key={baan.node.id}
          name={baan.node.name}
          size={baan.node.size}
          description={baan.node.description}
          cover={imageFetcher[baan.node.cover]}
        />
      ))}
    </div>
  )
}
