import React from 'react'
import styles from './textbox.module.scss'

const textbox = ({ user, text, device }) => {
  return (
    <div className={styles.wholeWrapper} device={device}>
      <div className={styles.align} user={user}>
        <div className={styles.textbox}>{text}</div>
      </div>
    </div>
  )
}

export default textbox
