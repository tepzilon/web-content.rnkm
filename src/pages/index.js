import React from "react"

// import { Button } from '@material-ui/core'
// import DeleteOutline from '@material-ui/icons/DeleteOutline'

// import indexStyles from "./index.module.scss"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export default () => (
  // <h1>test</h1>
  <div>
    {/* <StaticQuery
      query={graphql`
        query {
          allDataJson {
            nodes {
              thailandPM {
                id,
                name,
                path
              }
            }
          }
        }
      `}
      render={data => (
        <div className={indexStyles.style1}>
          <h3>รายชื่อนายก</h3>
          <ul>
            {data.allDataJson.nodes[0].thailandPM.map(x => (
              <li key={x.id}>
                {x.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    /> */}
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "prayut.jpg" }) {
            childImageSharp {
              fixed(width: 1000, height:125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data=>{
        return <Img fixed={data.file.childImageSharp.fixed} />
      }}
    />
  </div>
)