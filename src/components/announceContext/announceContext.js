import React from 'react'
import styles from './announce-context.module.scss'
import { Card } from 'antd';

const announceContext = ({frontmatter,html,device}) => {
  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.cardWrapperWrapper}>
        <div className={styles.cardWrapper}>
          <Card 
            title={<h1>{frontmatter.title}</h1>}
          >
            <div className={styles.contentWrapper}
            dangerouslySetInnerHTML={{__html:html}}/>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default announceContext
