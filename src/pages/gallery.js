// import React from "react"
// import { graphql } from "gatsby"
// import Img from "gatsby-image"

// export default ({ data }) => {
//   console.log(data)
//   return (
//     <div>
//       {
//         data.allFile.edges.map( e => (
//           <Img key={} fixed={e.node.childImageSharp.fixed} />
//         ))
//       }
//     </div>
//   )
// }

// export const query = graphql`
//   query {
//     allFile(filter: { extension: { eq: "png" } }) {
//       edges {
//         node {
//           childImageSharp {
//             fixed {
//               ...GatsbyImageSharpFixed
//             }
//           }
//         }
//       }
//     }
//   }
// `
import React from 'react'
import BannContainer from '../components/baanContainer'

export default () => (
  <div>
    <BannContainer />
  </div>
)
