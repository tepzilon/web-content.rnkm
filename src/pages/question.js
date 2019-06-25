import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Row, Col, Card } from 'antd'
import { getResponsive } from '../shared/js/responsive'
import styles from './question.module.scss'
import './question.scss'

export default ({ data }) => {
  const responsive = getResponsive()
  const device = responsive.getDevice()
  const span = device === 'desktop' ? 12 : 24

  return (
    <Layout device={device} title="Q&A" theme="yellow">
      <div className={styles.container} device={device}>
        <h1>คำถามที่พบบ่อย (FAQ)</h1>
        <Row type="flex" gutter={16}>
          {data.allFaqJson.edges.map(query => (
            <Col span={span}>
              <Card title={query.node.question} className={styles.card} hoverable>
                <span style={{ textDecoration: 'underline' }}>ตอบ</span> :{' '}
                {query.node.answer}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFaqJson {
      edges {
        node {
          question
          answer 
        }
      }
    }
  }
`
