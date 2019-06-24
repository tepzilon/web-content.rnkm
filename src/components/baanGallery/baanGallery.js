import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Img from 'gatsby-image'

import { Box } from '@material-ui/core'

import { Row, Col, Tabs } from 'antd'

import SizeSelector from './sizeSelector'
import styles from './baanGallery.module.scss'
import './baanGallery.scss'
// import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple'

const { TabPane } = Tabs

export default ({device}) => {
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

  const imageFetcher = {}
  data.allFile.edges.forEach(e => {
    imageFetcher[e.node.name.split('.')[0]] = e.node.childImageSharp.fluid
  })
  const getfilteredBaans = (size) => (
    data.allBaanJson.edges.filter(baan => baan.node.size === size)
  )

  const baanSizes = [
    {char: 'S', title: 'บ้านขนาดเล็ก (S)', key: 1},
    {char: 'M', title: 'บ้านขนาดกลาง (M)', key: 2},
    {char: 'L', title: 'บ้านขนาดใหญ่ (L)', key: 3},
    {char: 'XL', title: 'บ้านขนาดใหญ่มาก (XL)', key: 4},
  ]

  const BaanGrid = ({size}) => (
    <Row>
      {
        getfilteredBaans(size).map((baan) => (
          <Col span={8}>
            <BaanButton baan={baan.node}/>
          </Col>
        ))
      }
    </Row>
  )

  const BaanButton = ({baan}) => {
    
    if(imageFetcher[baan.nameURL] === undefined) return <div>{baan.nameURL}</div>
    else
      return (
        <Link to={'/gallery/'+baan.nameURL}>
          <div className={styles.buttonWrapper}>
            <div className={styles.imageWrapper}>
              <Img fluid={imageFetcher[baan.nameURL]}/>
            </div>
          </div>
        </Link>
      )
  }

  return (
    <div className={styles.galleryApp} device={device} >
      <Tabs defaultActiveKey="1" tabPosition=
        {device==='desktop'?'left':'top'} size='large'>
        {baanSizes.map((size) => (
          <TabPane tab={size.title} key={size.key}>
            <BaanGrid size={size.char}/>
          </TabPane>
        ))}
      </Tabs>
    </div>
    // <Box
    //   style={{
    //     marginLeft: responsive.mobile ? '30vw' : '2vw',
    //     marginRight: responsive.mobile ? '30vw' : '2vw',
    //     marginTop: '20px',
    //   }}
    // >
    //   <SizeSelector setSize={setSize} />
    //   <Grid container spacing={2}>
    //     {filteredBaan.map(baan => (
    //       <Grid item xs={4}>
    //         <div className={styles.imageWrapper}>
    //           <Link to={`gallery/`+baan.node.nameURL}>
    //             {imageFetcher[baan.node.nameURL] !== undefined ? 
    //             <ButtonBaan
    //               key={baan.node.id}
    //               cover={imageFetcher[baan.node.nameURL]}
    //             /> : <div>{baan.node.nameURL} ชื่อผิด</div>}
    //           </Link>
    //         </div>
    //       </Grid>
    //     ))}
    //   </Grid>
    // </Box>
  )
}
