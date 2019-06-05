import React from "react"

// import { Button } from '@material-ui/core'
// import DeleteOutline from '@material-ui/icons/DeleteOutline'

import indexStyles from "./index.module.scss"
import { graphql, StaticQuery } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allDataJson {
          nodes {
            thailandPM {
              id,
              name
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
            <li key={x.id}>{x.name}</li>
          ))}
        </ul>
      </div>
    )}
  />
)
