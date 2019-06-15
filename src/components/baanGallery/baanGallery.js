import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ButtonBaan from './buttonBaan'
import { Box, Grid } from '@material-ui/core'
import SizeSelector from './sizeSelector'
import styles from './baanGallery.module.scss'
// import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple'

export default ({ responsive }) => {
  const [size, setSize] = useState('S')

  const data = useStaticQuery(
    graphql`
      query {
        allBaanJson {
          edges {
            node {
              id
              nameURL
              size
            }
          }
        }
        allFile(filter: { relativeDirectory: { eq: "baan" } }) {
          edges {
            node {
              name
              ext
              childImageSharp {
                fluid(maxHeight: 100, maxWidth: 100) {
                  ...GatsbyImageSharpFluid
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
    imageFetcher[e.node.name] = e.node.childImageSharp.fluid
  })

  let filteredBaan = data.allBaanJson.edges.filter(
    baan => baan.node.size === size
  )

  return (
    <Box
      style={{
        marginLeft: responsive.mobile ? '30vw' : '2vw',
        marginRight: responsive.mobile ? '30vw' : '2vw',
        marginTop: '20px',
      }}
    >
      <SizeSelector setSize={setSize} />
      <Grid container spacing={2}>
        {filteredBaan.map(baan => (
          <Grid item xs={4}>
            <div className={styles.imageWrapper}>
              <ButtonBaan
                key={baan.node.id}
                cover={imageFetcher[baan.node.nameURL]}
              />
            </div>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Box bgcolor="primary.main">Test</Box>
        </Grid>
      </Grid>
    </Box>
  )
}
