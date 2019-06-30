import React from 'react'
import { Timeline } from 'antd'
import { useStaticQuery, graphql } from 'gatsby'
import styles from './timeline.module.scss'
import './timeline.scss'

const timeline = ({ device }) => {
  const data = useStaticQuery(graphql`
    query {
      allTimelineJson {
        edges {
          node {
            id
            date
            content
          }
        }
      }
    }
  `)
  const TimeTemplate = ({ date, content }) => (
    <div>
      <div className={styles.timelineDate} device={device}>
        {date}
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className={styles.timelineContent}
        device={device}
      />
    </div>
  )

  const mode = device === 'desktop' ? 'alternate' : 'left'

  return (
    <div>
      <div className={styles.header} device={device}>
        Timeline
      </div>
      <Timeline mode={mode} className={styles.timeline} device={device}>
        {data.allTimelineJson.edges.map(time => (
          <Timeline.Item key={time.node.id} color="#F58FA3">
            <TimeTemplate date={time.node.date} content={time.node.content} />
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  )
}

export default timeline
