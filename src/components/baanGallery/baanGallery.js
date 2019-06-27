import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Img from 'gatsby-image'
import { Row, Col, Tabs, Select } from 'antd'
import styles from './baanGallery.module.scss'
import './baanGallery.scss'

const { TabPane } = Tabs
const { Option } = Select

export default ({ device }) => {
  const [viewSize, setViewSize] = useState('S')
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
        allFile(
          filter: {
            relativePath: { regex: "/^baan/logo/500px/" }
            name: { regex: "/big1$/" }
          }
        ) {
          edges {
            node {
              name
              childImageSharp {
                fluid(maxWidth: 160, maxHeight: 160) {
                  ...GatsbyImageSharpFluid_withWebp
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
  const getfilteredBaans = size =>
    data.allBaanJson.edges.filter(baan => baan.node.size === size)

  const baanSizes = [
    { char: 'S', text: 'บ้านขนาดเล็ก (S)' },
    { char: 'M', text: 'บ้านขนาดกลาง (M)' },
    { char: 'L', text: 'บ้านขนาดใหญ่ (L)' },
    { char: 'XL', text: 'บ้านขนาดใหญ่มาก (XL)' },
  ]

  const BaanGrid = ({ size }) => (
    <Row>
      {getfilteredBaans(size).map(baan => (
        <Col span={8}>
          <BaanButton baan={baan.node} />
        </Col>
      ))}
    </Row>
  )

  const BaanButton = ({ baan }) => {
    if (imageFetcher[baan.nameURL] === undefined)
      return <div>{baan.nameURL}</div>
    else
      return (
        <Link to={'/gallery/' + baan.nameURL}>
          <div className={styles.buttonWrapper} device={device}>
            <div className={styles.imageWrapper}>
              <Img fluid={imageFetcher[baan.nameURL]} />
            </div>
          </div>
        </Link>
      )
  }

  const getTabletTab = tabs => (
    <Tabs
      activeKey={viewSize}
      tabPosition={'top'}
      renderTabBar={() => (
        <div className={styles.sizeSelectorWrapper}>
          <Select
            className={styles.sizeSelector}
            defaultValue={viewSize}
            onSelect={size => setViewSize(size)}
          >
            {baanSizes.map(size => (
              <Option value={size.char}>{size.text}</Option>
            ))}
          </Select>
        </div>
      )}
    >
      {tabs}
    </Tabs>
  )

  const getDesktopTab = tabs => (
    <Tabs
      activeKey={viewSize}
      tabPosition={'left'}
      size={'large'}
      onTabClick={size => {
        setViewSize(size)
      }}
    >
      {tabs}
    </Tabs>
  )

  const tabChilds = baanSizes.map(size => (
    <TabPane tab={size.text} key={size.char} activeKey={viewSize}>
      <BaanGrid size={size.char} />
    </TabPane>
  ))

  return (
    <div className={styles.galleryApp} device={device}>
      {device === 'desktop'
        ? getDesktopTab(tabChilds)
        : getTabletTab(tabChilds)}
    </div>
  )
}
