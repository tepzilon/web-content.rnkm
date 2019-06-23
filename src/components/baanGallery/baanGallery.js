import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
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
        allFile(filter:{
          relativePath: {
            regex: "/^baan\/logo\/500px/"
          },
          name: {
            regex: "/big1$/"
          }
        }) {
          edges {
            node {
              name
              childImageSharp {
                fluid(maxWidth: 160, maxHeight: 160){
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
    imageFetcher[e.node.name.split('.')[0]] = e.node.childImageSharp.fluid
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
              <Link to={`gallery/`+baan.node.nameURL}>
                {imageFetcher[baan.node.nameURL] !== undefined ? 
                <ButtonBaan
                  key={baan.node.id}
                  cover={imageFetcher[baan.node.nameURL]}
                /> : <div>{baan.node.nameURL} ชื่อผิดไอสัส</div>}
              </Link>
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
