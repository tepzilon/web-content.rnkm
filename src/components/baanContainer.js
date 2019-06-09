import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ButtonBaan from './buttonBaan'

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        allDataJson {
          nodes {
            baan {
              name
              size
              description
              imgPath
            }
          }
        }
      }
    `
  )

  console.log(data)

  return (
    <div>
      {/* {data.allDataJson.nodes[0].baan[0].name} */}
      {data.allDataJson.nodes[0].baan.map(baan => (
        <div>
          <ButtonBaan
            name={baan.name}
            size={baan.size}
            description={baan.description}
            imgPath={"baan/"+baan.imgPath}
          />
        </div>
      ))}
    </div>
  )
}
