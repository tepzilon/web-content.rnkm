import React from 'react'
import styles from './announce-context.module.scss'
import { Card } from 'antd';

const announceContext = ({frontmatter,html,device}) => {
  return (
    <div className={styles.wholeWrapper} device={device}>
      <div className={styles.cardWrapperWrapper} device={device}>
        <div className={styles.cardWrapper} device={device}>
          <Card 
            title={<h1>{frontmatter.title}</h1>}
          >
            <div className={styles.contentWrapper}
              dangerouslySetInnerHTML={{__html:html}}
              device={device}
            />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default announceContext
